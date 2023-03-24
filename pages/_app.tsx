import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper-element-bundle.min.css";
import "swiper/swiper.css";
import "swiper/swiper.min.css";
import "../styles/index.css";
import "../styles/styles.css";

import { ThemePageProvider } from "@appProvider/ThemePageProvider";
import type { AppProps } from "next/app";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  return (
    <ThemePageProvider>
      <CacheProvider value={emotionCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </ThemePageProvider>
  );
}

export default MyApp;
