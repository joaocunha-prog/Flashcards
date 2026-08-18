import { cookies } from 'next/headers';
// `import type` é apagado na compilação: o pacote continua sendo carregado
// apenas pelo import dinâmico, no modo Supabase.
import type { CookieOptions } from '@supabase/ssr';

type CookieToSet = { name: string; value: string; options?: CookieOptions };

/**
 * Camada de identidade.
 *
 * O app funciona em dois modos:
 *
 * 1. **Supabase Auth** — quando NEXT_PUBLIC_SUPABASE_URL e
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY estão definidos. O id do usuário vem da
 *    sessão do Supabase.
 * 2. **Local (single-user)** — sem as variáveis acima. Todo o progresso é
 *    atribuído a um usuário local fixo. Serve para rodar o banco de questões
 *    sozinho, sem infraestrutura de autenticação.
 *
 * Nenhum outro módulo deve ler cookies de sessão diretamente: todos passam
 * por `getCurrentUserId()`.
 */

export const LOCAL_USER_ID = 'local-user';

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export interface CurrentUser {
  id: string;
  email: string | null;
  /** true quando a identidade veio do Supabase; false no modo local. */
  authenticated: boolean;
}

export async function getCurrentUser(): Promise<CurrentUser> {
  if (!isSupabaseConfigured()) {
    return { id: LOCAL_USER_ID, email: null, authenticated: false };
  }

  // Import dinâmico: no modo local o pacote não precisa nem ser carregado.
  const { createServerClient } = await import('@supabase/ssr');
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet: CookieToSet[]) => {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server Components não podem escrever cookies; o middleware cuida
            // da renovação do token.
          }
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { id: LOCAL_USER_ID, email: null, authenticated: false };
  }

  return { id: user.id, email: user.email ?? null, authenticated: true };
}

export async function getCurrentUserId(): Promise<string> {
  const user = await getCurrentUser();
  return user.id;
}
