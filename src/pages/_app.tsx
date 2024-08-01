import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { roboto } from './fonts';
import { Toaster } from '@/components/ui/toaster';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-roboto: ${roboto.variable};
        }
      `}</style>
      <main className={cn('min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
