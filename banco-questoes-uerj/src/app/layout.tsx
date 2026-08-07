import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { getCurrentUser, isSupabaseConfigured } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Banco de Questões R+ UERJ',
  description:
    'Banco de questões e simulados para a prova de R+ Clínica Médica da UERJ, com análise de incidência e explicações sob demanda.',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

/**
 * Aplica o tema antes da primeira pintura. Sem isso, uma sessão em modo
 * escuro pisca em branco no carregamento, porque o React só hidrata depois.
 */
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabaseEnabled = isSupabaseConfigured();
  const user = supabaseEnabled ? await getCurrentUser() : null;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">
        <Nav
          auth={
            supabaseEnabled
              ? {
                  email: user?.email ?? null,
                  authenticated: user?.authenticated ?? false,
                  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
                  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                }
              : null
          }
        />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        <footer className="mx-auto w-full max-w-7xl px-4 pb-10 pt-4 text-xs text-slate-500 sm:px-6 lg:px-8 dark:text-slate-500">
          Banco de Questões R+ UERJ · comentários escritos pelo Claude
        </footer>
      </body>
    </html>
  );
}
