import '../styles/globals.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="main-container">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
