import React, { useState } from "react"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import { CacheProvider } from "@emotion/react"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import createEmotionServer from "@emotion/server/create-instance"
import Header from "../src/ui/Header"
import Footer from "../src/ui/Footer"
import App from "next/app"
import { createContext } from "react"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  const [value, setValue] = useState(0)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Vibe Tribe Productions</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global.attributes}>
          <Header value={value} setValue={setValue} />
          <Component {...pageProps} value={value} setValue={setValue} />
          <Footer value={value} setValue={setValue} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx)

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(appProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...appProps,
    emotionStyleTags,
  }
}

export default MyApp
