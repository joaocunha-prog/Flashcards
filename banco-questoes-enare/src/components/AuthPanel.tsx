'use client';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

/**
 * Login por link mágico (Supabase Auth).
 *
 * Só é renderizado quando o Supabase está configurado — ver src/app/entrar/page.tsx.
 * Usar magic link evita gerenciar senhas, e o Supabase já entrega o fluxo pronto.
 */
export function AuthPanel({ supabaseUrl, supabaseAnonKey }: { supabaseUrl: string; supabaseAnonKey: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setState('sending');
    setError(null);

    const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
    const { error: authError } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${window.location.origin}/` },
    });

    if (authError) {
      setError(authError.message);
      setState('idle');
      return;
    }
    setState('sent');
  }

  if (state === 'sent') {
    return (
      <div className="card">
        <p className="font-medium">Link enviado</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Abra o e-mail enviado para <strong>{email}</strong> e clique no link para entrar.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card space-y-3">
      <div>
        <label htmlFor="email" className="label mb-1">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="voce@exemplo.com"
          className="input"
        />
      </div>

      {error && (
        <p className="text-sm text-rose-600 dark:text-rose-400" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={state === 'sending'} className="btn-primary w-full">
        {state === 'sending' ? 'Enviando…' : 'Receber link de acesso'}
      </button>
    </form>
  );
}

/** Botão de sair, exibido no cabeçalho quando há sessão ativa. */
export function SignOutButton({ supabaseUrl, supabaseAnonKey }: { supabaseUrl: string; supabaseAnonKey: string }) {
  async function signOut() {
    const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
    await supabase.auth.signOut();
    window.location.href = '/entrar';
  }

  return (
    <button type="button" onClick={signOut} className="btn-ghost text-xs">
      Sair
    </button>
  );
}
