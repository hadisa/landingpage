import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
import "swiper/swiper.css";
import "swiper/swiper-element-bundle.min.css";

import { ThemePageProvider } from "@appProvider/ThemePageProvider";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { themeDarkStyle, themeLightStyle } from "theme/Theme";
import { DarkTheme, lightTheme } from "theme/ThemeOveride";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache: EmotionCache }) {
  const [theme, setTheme]: any = useState(lightTheme);

  let themeChanger = true;
  React.useEffect(() => {
    if (themeChanger) {
      const style = themeLightStyle;
      document.head.insertAdjacentHTML("beforeend", style);
      setTheme(lightTheme);
    } else {
      const style = themeDarkStyle;
      document.head.insertAdjacentHTML("beforeend", style);
      setTheme(DarkTheme);
    }
  }, [themeChanger]);
  useEffect(() => {
    if (performance.navigation.type === 0) {
      console.log("refreash");
      const query = new URLSearchParams(window.location.search);
      const theme = query.get("theme");
      if (theme) {
        if (theme === "light") {
          const style = themeLightStyle;
          document.head.insertAdjacentHTML("beforeend", style);
          setTheme(lightTheme);
        } else {
          const style = themeDarkStyle;
          document.head.insertAdjacentHTML("beforeend", style);
          setTheme(DarkTheme);
        }
      }
    }
  }, []);
  return (
    <ThemePageProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ThemePageProvider>
  );
}

export default MyApp;
