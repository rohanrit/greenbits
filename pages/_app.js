import "../styles/globals.css";
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={plusJakarta.className}>
      <Component {...pageProps} />
    </div>
  );
}

