import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getCurrentUser, isSupabaseConfigured } from '@/lib/auth';
import { AuthPanel } from '@/components/AuthPanel';
import { PageHeader } from '@/components/ui';

export const dynamic = 'force-dynamic';

export default async function EntrarPage() {
  // Sem Supabase, não existe login a fazer: o app roda em modo local.
  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto max-w-md">
        <PageHeader title="Modo local" />
        <div className="card">
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Este ambiente está rodando sem Supabase Auth: todo o progresso é salvo em um usuário
            local único e não há login. Para habilitar contas, defina{' '}
            <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
              NEXT_PUBLIC_SUPABASE_URL
            </code>{' '}
            e{' '}
            <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">
              NEXT_PUBLIC_SUPABASE_ANON_KEY
            </code>{' '}
            no <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">.env</code>.
          </p>
          <Link href="/" className="btn-primary mt-4">
            Ir para o dashboard
          </Link>
        </div>
      </div>
    );
  }

  const user = await getCurrentUser();
  if (user.authenticated) redirect('/');

  return (
    <div className="mx-auto max-w-md">
      <PageHeader title="Entrar" subtitle="Banco de Questões R+ UERJ" />
      <AuthPanel
        supabaseUrl={process.env.NEXT_PUBLIC_SUPABASE_URL!}
        supabaseAnonKey={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}
      />
    </div>
  );
}
