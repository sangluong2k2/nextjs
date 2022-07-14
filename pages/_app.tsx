import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import LayoutHomePage from '../components/layouts'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? LayoutHomePage
  return (<LayoutWrapper> <Component {...pageProps} /></LayoutWrapper>)
}
export default MyApp
