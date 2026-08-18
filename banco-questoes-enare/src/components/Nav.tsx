'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';
import { ThemeToggle } from './ThemeToggle';
import { SignOutButton } from './AuthPanel';

/** null quando o Supabase não está configurado (modo local single-user). */
interface AuthInfo {
  email: string | null;
  authenticated: boolean;
  supabaseUrl: string;
  supabaseAnonKey: string;
}

const LINKS = [
  { href: '/', label: 'Dashboard' },
  { href: '/questoes', label: 'Questões' },
  { href: '/simulados', label: 'Simulados' },
  { href: '/analise', label: 'Análise da banca' },
  { href: '/resumos', label: 'Resumos' },
  { href: '/favoritas', label: 'Favoritas' },
  { href: '/estatisticas', label: 'Estatísticas' },
  { href: '/historico', label: 'Histórico' },
];

export function Nav({ auth }: { auth: AuthInfo | null }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white dark:bg-brand-500 dark:text-slate-950">
            EN
          </span>
          <span className="hidden text-sm sm:inline">Banco de Questões ENARE</span>
        </Link>

        <nav className="ml-4 hidden flex-1 items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          {auth?.authenticated ? (
            <>
              <span className="hidden max-w-[160px] truncate text-xs text-slate-500 sm:inline dark:text-slate-400">
                {auth.email}
              </span>
              <SignOutButton
                supabaseUrl={auth.supabaseUrl}
                supabaseAnonKey={auth.supabaseAnonKey}
              />
            </>
          ) : auth ? (
            <Link href="/entrar" className="btn-ghost text-xs">
              Entrar
            </Link>
          ) : null}
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="btn-ghost h-9 w-9 p-0 lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 px-4 pb-3 lg:hidden dark:border-slate-800">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                'block rounded-lg px-3 py-2 text-sm font-medium',
                isActive(link.href)
                  ? 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
                  : 'text-slate-600 dark:text-slate-300',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
