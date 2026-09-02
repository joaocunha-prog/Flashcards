import { NextResponse, type NextRequest } from 'next/server';

/**
 * Renova o token do Supabase a cada request.
 *
 * Server Components não podem escrever cookies, então sem este middleware a
 * sessão expiraria e o usuário seria deslogado silenciosamente.
 *
 * No modo local (sem Supabase configurado) o middleware é um no-op.
 */
export async function middleware(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.next();
  }

  const { createServerClient } = await import('@supabase/ssr');
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet: Array<{ name: string; value: string; options?: object }>) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // A chamada em si é o que dispara a renovação do token.
  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    // Tudo, exceto assets estáticos e imagens otimizadas.
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
