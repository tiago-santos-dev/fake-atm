import type { AppProps } from 'next/app'
import GlobalStyle from "@styles/global"
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import { AuthProvider } from '@/contexts/AuthContext'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
