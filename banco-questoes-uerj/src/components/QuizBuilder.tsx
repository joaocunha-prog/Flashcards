'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { Chip, FilterGroup } from '@/components/ui';

interface TopicOption {
  slug: string;
  name: string;
  count: number;
}

interface SubthemeOption {
  slug: string;
  name: string;
  count: number;
  topics: TopicOption[];
}

interface ThemeOption {
  slug: string;
  name: string;
  count: number;
  subthemes: SubthemeOption[];
}

interface ExamOption {
  id: string;
  year: number;
  title: string;
  count: number;
}

type Mode =
  | 'ALEATORIO'
  | 'POR_TEMA'
  | 'POR_INCIDENCIA'
  | 'APENAS_ERRADAS'
  | 'APENAS_REVISAO'
  | 'SIMULADO_INEDITO'
  | 'PROVA_INTEGRA';

const MODES: Array<{ value: Mode; label: string; description: string }> = [
  {
    value: 'ALEATORIO',
    label: 'Aleatório',
    description: 'Sorteio livre em todo o banco.',
  },
  {
    value: 'POR_TEMA',
    label: 'Por conteúdo',
    description: 'Escolha macro áreas, assuntos ou tópicos — do geral ao recorte fino.',
  },
  {
    value: 'POR_INCIDENCIA',
    label: 'Por incidência',
    description: 'Distribui as questões na proporção histórica de cada assunto.',
  },
  {
    value: 'APENAS_ERRADAS',
    label: 'Apenas erradas',
    description: 'Só o que você já errou.',
  },
  {
    value: 'APENAS_REVISAO',
    label: 'Apenas revisões',
    description: 'Só o que você marcou como "revisar".',
  },
  {
    value: 'PROVA_INTEGRA',
    label: 'Prova na íntegra',
    description: 'Refaz uma prova oficial completa, na ordem original do caderno.',
  },
  {
    value: 'SIMULADO_INEDITO',
    label: 'Prova gerada',
    description: 'Resolve a última prova gerada pelo botão acima, na íntegra.',
  },
];

const TAMANHO_MAXIMO = 200;

/** Sem acentos e em minúsculas, para a busca casar "cardio" com "Cardiologia". */
function normalizar(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Poda a árvore pelo termo buscado. Casar um nó traz a subárvore inteira dele:
 * quem procura "arritmias" quer ver os tópicos de Arritmias, não só o título.
 */
function filtrarArvore(themes: ThemeOption[], termo: string): ThemeOption[] {
  const alvo = normalizar(termo.trim());
  if (!alvo) return themes;

  return themes.flatMap((theme) => {
    if (normalizar(theme.name).includes(alvo)) return [theme];

    const subthemes = theme.subthemes.flatMap((subtheme) => {
      if (normalizar(subtheme.name).includes(alvo)) return [subtheme];
      const topics = subtheme.topics.filter((topic) => normalizar(topic.name).includes(alvo));
      return topics.length ? [{ ...subtheme, topics }] : [];
    });

    return subthemes.length ? [{ ...theme, subthemes }] : [];
  });
}

export function QuizBuilder({
  themes,
  exams,
}: {
  themes: ThemeOption[];
  exams: ExamOption[];
}) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('POR_INCIDENCIA');
  // String, não número: senão o campo não pode ficar vazio enquanto se digita.
  const [sizeInput, setSizeInput] = useState('20');
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [selectedSubthemes, setSelectedSubthemes] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [busca, setBusca] = useState('');
  const [difficulties, setDifficulties] = useState<string[]>([]);
  const [selectedExamId, setSelectedExamId] = useState<string>(exams[0]?.id ?? '');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contagem, setContagem] = useState<{
    status: 'carregando' | 'pronto' | 'erro';
    total: number | null;
  }>({ status: 'carregando', total: null });

  function toggle(list: string[], value: string, setter: (next: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  const isMock = mode === 'SIMULADO_INEDITO';
  const isFullExam = mode === 'PROVA_INTEGRA';
  // Ambos os modos resolvem um caderno fixo, do início ao fim — tamanho e
  // dificuldade não fazem sentido para nenhum dos dois.
  const usesFixedSet = isMock || isFullExam;
  const porConteudo = mode === 'POR_TEMA';

  /**
   * Query do contador. É string para servir de dependência estável do efeito.
   *
   * Nunca manda `includeMocks`: o POST de simulado só inclui prova gerada no
   * modo SIMULADO_INEDITO, e um contador que discordasse disso mentiria.
   */
  const queryContagem = useMemo(() => {
    if (usesFixedSet) return null;

    const params = new URLSearchParams();
    if (porConteudo) {
      params.set('taxonomy', 'uniao');
      selectedThemes.forEach((slug) => params.append('theme', slug));
      selectedSubthemes.forEach((slug) => params.append('subtheme', slug));
      selectedTopics.forEach((slug) => params.append('topic', slug));
    }
    if (mode === 'APENAS_ERRADAS') params.append('status', 'ERROU');
    if (mode === 'APENAS_REVISAO') params.append('status', 'REVISAR');
    difficulties.forEach((value) => params.append('difficulty', value));

    return params.toString();
  }, [
    usesFixedSet,
    porConteudo,
    mode,
    selectedThemes,
    selectedSubthemes,
    selectedTopics,
    difficulties,
  ]);

  useEffect(() => {
    if (queryContagem === null) return;

    const controller = new AbortController();
    // Mantém o número anterior visível enquanto recarrega, em vez de piscar.
    setContagem((anterior) => ({ status: 'carregando', total: anterior.total }));

    const timer = setTimeout(() => {
      fetch(`/api/questions/count?${queryContagem}`, { signal: controller.signal })
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error())))
        .then((payload: { total: number }) =>
          setContagem({ status: 'pronto', total: payload.total }),
        )
        .catch(() => {
          // O contador é conveniência: falhar nele não pode travar o simulado.
          if (!controller.signal.aborted) setContagem({ status: 'erro', total: null });
        });
    }, 250);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [queryContagem]);

  const disponiveis = contagem.total;
  const size = Number(sizeInput);
  const sizeValido = Number.isInteger(size) && size >= 1 && size <= TAMANHO_MAXIMO;

  function normalizarTamanho() {
    if (!Number.isFinite(size) || size < 1) return setSizeInput('1');
    if (size > TAMANHO_MAXIMO) return setSizeInput(String(TAMANHO_MAXIMO));
    setSizeInput(String(Math.trunc(size)));
  }

  const arvore = useMemo(() => filtrarArvore(themes, busca), [themes, busca]);
  const buscando = busca.trim().length > 0;
  // Buscando, tudo que sobrou aparece aberto — senão o resultado fica escondido
  // atrás de um nó fechado.
  const aberto = (slug: string) => buscando || expanded.includes(slug);

  const totalSelecionado =
    selectedThemes.length + selectedSubthemes.length + selectedTopics.length;

  /**
   * O que está marcado, em pastilhas removíveis. Sem isso uma seleção feita
   * dentro de um nó que depois se recolhe some da tela: o contador cai, e não
   * há como descobrir o porquê nem desfazer sem sair procurando pela árvore.
   */
  const selecionados = useMemo(() => {
    const itens: Array<{ slug: string; nome: string; remover: () => void }> = [];

    for (const theme of themes) {
      if (selectedThemes.includes(theme.slug)) {
        itens.push({
          slug: theme.slug,
          nome: theme.name,
          remover: () => toggle(selectedThemes, theme.slug, setSelectedThemes),
        });
      }
      for (const subtheme of theme.subthemes) {
        if (selectedSubthemes.includes(subtheme.slug)) {
          itens.push({
            slug: subtheme.slug,
            nome: subtheme.name,
            remover: () => toggle(selectedSubthemes, subtheme.slug, setSelectedSubthemes),
          });
        }
        for (const topic of subtheme.topics) {
          if (selectedTopics.includes(topic.slug)) {
            itens.push({
              slug: topic.slug,
              nome: topic.name,
              remover: () => toggle(selectedTopics, topic.slug, setSelectedTopics),
            });
          }
        }
      }
    }

    return itens;
  }, [themes, selectedThemes, selectedSubthemes, selectedTopics]);

  function limparSelecao() {
    setSelectedThemes([]);
    setSelectedSubthemes([]);
    setSelectedTopics([]);
  }

  /**
   * Descarta o que um ancestral já cobre. Não muda o resultado — sob união o
   * filho é redundante —, só deixa o `config` do simulado legível.
   */
  function recorteEnviado() {
    const subthemes = selectedSubthemes.filter(
      (slug) =>
        !themes.some(
          (theme) =>
            selectedThemes.includes(theme.slug) &&
            theme.subthemes.some((sub) => sub.slug === slug),
        ),
    );
    const topics = selectedTopics.filter(
      (slug) =>
        !themes.some((theme) =>
          theme.subthemes.some(
            (sub) =>
              (selectedThemes.includes(theme.slug) || selectedSubthemes.includes(sub.slug)) &&
              sub.topics.some((topic) => topic.slug === slug),
          ),
        ),
    );
    return { themeSlugs: selectedThemes, subthemeSlugs: subthemes, topicSlugs: topics };
  }

  async function create() {
    setSubmitting(true);
    setError(null);

    const recorte = recorteEnviado();

    try {
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode,
          size: sizeValido ? size : 20,
          themeSlugs: porConteudo ? recorte.themeSlugs : undefined,
          subthemeSlugs: porConteudo ? recorte.subthemeSlugs : undefined,
          topicSlugs: porConteudo ? recorte.topicSlugs : undefined,
          difficulties: difficulties.length ? difficulties : undefined,
          examId: isFullExam ? selectedExamId : undefined,
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error ?? 'Não foi possível montar o simulado.');
      }

      router.push(`/simulados/${payload.quizId}`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Erro inesperado.');
      setSubmitting(false);
    }
  }

  const semQuestoes = !usesFixedSet && contagem.status === 'pronto' && disponiveis === 0;
  const canSubmit =
    (!isFullExam || selectedExamId !== '') && (usesFixedSet || sizeValido) && !semQuestoes;

  return (
    <div className="card">
      <h2 className="mb-4 font-semibold">Montar simulado</h2>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {MODES.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setMode(option.value)}
            aria-pressed={mode === option.value}
            className={clsx(
              'rounded-lg border p-3 text-left transition-colors',
              mode === option.value
                ? 'border-brand-500 bg-brand-50 dark:border-brand-500 dark:bg-brand-950/40'
                : 'border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700',
            )}
          >
            <p className="text-sm font-medium">{option.label}</p>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {option.description}
            </p>
          </button>
        ))}
      </div>

      {porConteudo && (
        <div className="mt-5">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <p className="label">Conteúdo</p>
            {totalSelecionado > 0 && (
              <button type="button" onClick={limparSelecao} className="btn-ghost !px-2 !py-1 text-xs">
                Limpar seleção ({totalSelecionado})
              </button>
            )}
          </div>

          {themes.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Nenhuma questão classificada no banco ainda.
            </p>
          ) : (
            <>
              {selecionados.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {selecionados.map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={item.remover}
                      title={`Remover ${item.nome}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-600 bg-brand-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-brand-700 dark:border-brand-500 dark:bg-brand-500 dark:text-slate-950 dark:hover:bg-brand-400"
                    >
                      {item.nome}
                      <span aria-hidden className="text-sm leading-none opacity-70">
                        ×
                      </span>
                    </button>
                  ))}
                </div>
              )}

              <input
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Buscar macro área, assunto ou tópico…"
                className="input mb-2"
              />

              <div className="max-h-80 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-800">
                {arvore.length === 0 ? (
                  <p className="p-3 text-xs text-slate-500 dark:text-slate-400">
                    Nada encontrado para “{busca}”.
                  </p>
                ) : (
                  arvore.map((theme) => {
                    const temaMarcado = selectedThemes.includes(theme.slug);

                    return (
                      <div
                        key={theme.slug}
                        className="border-b border-slate-100 last:border-b-0 dark:border-slate-800"
                      >
                        <Linha
                          nivel={0}
                          nome={theme.name}
                          count={theme.count}
                          expansivel={theme.subthemes.length > 0}
                          expandido={aberto(theme.slug)}
                          aoExpandir={() => toggle(expanded, theme.slug, setExpanded)}
                          marcado={temaMarcado}
                          aoMarcar={() => toggle(selectedThemes, theme.slug, setSelectedThemes)}
                        />

                        {aberto(theme.slug) &&
                          theme.subthemes.map((subtheme) => {
                            const assuntoMarcado = selectedSubthemes.includes(subtheme.slug);

                            return (
                              <div key={subtheme.slug}>
                                <Linha
                                  nivel={1}
                                  nome={subtheme.name}
                                  count={subtheme.count}
                                  expansivel={subtheme.topics.length > 0}
                                  expandido={aberto(subtheme.slug)}
                                  aoExpandir={() =>
                                    toggle(expanded, subtheme.slug, setExpanded)
                                  }
                                  marcado={assuntoMarcado}
                                  coberto={temaMarcado}
                                  aoMarcar={() =>
                                    toggle(
                                      selectedSubthemes,
                                      subtheme.slug,
                                      setSelectedSubthemes,
                                    )
                                  }
                                />

                                {aberto(subtheme.slug) &&
                                  subtheme.topics.map((topic) => (
                                    <Linha
                                      key={topic.slug}
                                      nivel={2}
                                      nome={topic.name}
                                      count={topic.count}
                                      marcado={selectedTopics.includes(topic.slug)}
                                      coberto={temaMarcado || assuntoMarcado}
                                      aoMarcar={() =>
                                        toggle(selectedTopics, topic.slug, setSelectedTopics)
                                      }
                                    />
                                  ))}
                              </div>
                            );
                          })}
                      </div>
                    );
                  })
                )}
              </div>

              {totalSelecionado === 0 && (
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Nada selecionado — o sorteio usará o banco inteiro.
                </p>
              )}
            </>
          )}
        </div>
      )}

      {isFullExam && (
        <div className="mt-5">
          <p className="label mb-2">Qual prova</p>
          {exams.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Nenhuma prova oficial disponível no banco ainda.
            </p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {exams.map((exam) => (
                <Chip
                  key={exam.id}
                  active={selectedExamId === exam.id}
                  onClick={() => setSelectedExamId(exam.id)}
                >
                  {exam.year}
                  <span className="ml-1 opacity-60">{exam.count}</span>
                </Chip>
              ))}
            </div>
          )}
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Todas as questões da prova escolhida, na ordem original do caderno — sem sorteio, sem
            corte por dificuldade ou tamanho.
          </p>
        </div>
      )}

      {!usesFixedSet && (
        <>
          <div className="mt-5">
            <FilterGroup label="Dificuldade (opcional)">
              {(
                [
                  ['FACIL', 'Fácil'],
                  ['MEDIA', 'Média'],
                  ['DIFICIL', 'Difícil'],
                ] as const
              ).map(([value, label]) => (
                <Chip
                  key={value}
                  active={difficulties.includes(value)}
                  onClick={() => toggle(difficulties, value, setDifficulties)}
                >
                  {label}
                </Chip>
              ))}
            </FilterGroup>
          </div>

          <div className="mt-5">
            <label htmlFor="size" className="label mb-2">
              Número de questões
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <input
                id="size"
                type="number"
                inputMode="numeric"
                min={1}
                max={TAMANHO_MAXIMO}
                step={1}
                value={sizeInput}
                onChange={(event) => setSizeInput(event.target.value)}
                onBlur={normalizarTamanho}
                className="input w-24 tabular-nums"
              />

              <p className="text-sm text-slate-500 dark:text-slate-400" aria-live="polite">
                {contagem.status === 'erro' || disponiveis === null ? (
                  <span className="opacity-0">—</span>
                ) : (
                  <span className={clsx(contagem.status === 'carregando' && 'opacity-50')}>
                    {disponiveis} {disponiveis === 1 ? 'questão disponível' : 'questões disponíveis'}
                  </span>
                )}
              </p>

              {disponiveis !== null && disponiveis > 0 && (
                <button
                  type="button"
                  onClick={() => setSizeInput(String(Math.min(disponiveis, TAMANHO_MAXIMO)))}
                  disabled={size === Math.min(disponiveis, TAMANHO_MAXIMO)}
                  className="btn-ghost !px-2 !py-1 text-xs"
                >
                  Usar todas as {Math.min(disponiveis, TAMANHO_MAXIMO)}
                </button>
              )}
            </div>

            {!sizeValido && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                Informe um número inteiro de 1 a {TAMANHO_MAXIMO}.
              </p>
            )}

            {sizeValido && semQuestoes && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                Nenhuma questão atende a esses filtros. Amplie a seleção para montar o simulado.
              </p>
            )}

            {sizeValido && disponiveis !== null && disponiveis > 0 && size > disponiveis && (
              <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
                Só há {disponiveis} questões com esses filtros — o simulado sairá com {disponiveis}.
              </p>
            )}
          </div>
        </>
      )}

      {isMock && (
        <p className="mt-5 rounded-lg bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800/50 dark:text-slate-400">
          Usa a prova gerada mais recente por inteiro — o tamanho e a distribuição já vêm prontos.
          Se ainda não houver nenhuma, gere uma no painel acima.
        </p>
      )}

      {error && (
        <p className="mt-4 text-sm text-rose-600 dark:text-rose-400" role="alert">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={create}
        disabled={submitting || !canSubmit}
        className="btn-primary mt-5"
      >
        {submitting ? 'Montando…' : 'Iniciar simulado'}
      </button>
    </div>
  );
}

const RECUO = ['pl-2', 'pl-8', 'pl-14'] as const;

/**
 * Uma linha da árvore. O rótulo alterna a seleção, o chevron alterna a
 * expansão — duas zonas de clique independentes.
 *
 * `coberto` é o nó que um ancestral marcado já traz. Ele aparece marcado e sai
 * de circulação, o que torna a semântica de união legível: "esse já veio junto".
 * A seleção própria dele continua guardada, então desmarcar o ancestral devolve
 * exatamente o que estava marcado antes.
 */
function Linha({
  nivel,
  nome,
  count,
  expansivel = false,
  expandido = false,
  aoExpandir,
  marcado,
  coberto = false,
  aoMarcar,
}: {
  nivel: 0 | 1 | 2;
  nome: string;
  count: number;
  expansivel?: boolean;
  expandido?: boolean;
  aoExpandir?: () => void;
  marcado: boolean;
  coberto?: boolean;
  aoMarcar: () => void;
}) {
  const ativo = marcado || coberto;

  return (
    <div className={clsx('flex items-center gap-1 pr-2', RECUO[nivel])}>
      {expansivel ? (
        <button
          type="button"
          onClick={aoExpandir}
          aria-expanded={expandido}
          aria-label={expandido ? `Recolher ${nome}` : `Expandir ${nome}`}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <svg
            className={clsx('h-4 w-4 transition-transform', expandido && 'rotate-90')}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      ) : (
        <span className="h-7 w-7 shrink-0" />
      )}

      <button
        type="button"
        onClick={aoMarcar}
        disabled={coberto}
        aria-pressed={ativo}
        title={coberto ? 'Já incluído por uma seleção acima' : undefined}
        className={clsx(
          'flex min-w-0 flex-1 items-center gap-2 rounded py-1.5 pr-2 text-left transition-colors',
          coberto ? 'cursor-not-allowed opacity-60' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50',
        )}
      >
        <span
          className={clsx(
            'flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors',
            ativo
              ? 'border-brand-600 bg-brand-600 text-white dark:border-brand-500 dark:bg-brand-500 dark:text-slate-950'
              : 'border-slate-300 dark:border-slate-600',
          )}
          aria-hidden
        >
          {ativo && (
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>

        <span
          className={clsx(
            'min-w-0 flex-1 truncate',
            nivel === 0 ? 'text-sm font-medium' : 'text-sm',
            nivel === 2 && 'text-slate-600 dark:text-slate-400',
          )}
        >
          {nome}
        </span>

        <span className="shrink-0 text-xs tabular-nums text-slate-400">{count}</span>
      </button>
    </div>
  );
}
