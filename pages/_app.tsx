import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTHA_SITE_KEY}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReCaptchaProvider>
  );
}
