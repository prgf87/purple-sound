import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReCaptchaProvider useEnterprise>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReCaptchaProvider>
  );
}
