import Router from "next/router";
import Layout from "components/layout.js";
import NProgress from "nprogress";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
// Styles
import "styles/main.scss";
import "nprogress/nprogress.css";

// NProgress binding routes
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title key="title">{"Muhammad J — Front-end Developer"}</title>
        <meta
          key="og:title"
          name="og:title"
          content="Muhammad J — Front-end Developer"
        />
        <meta
          key="description"
          name="description"
          content={
            "Front-end Developer. JavaScript and UI/UX enthusiast. I build & rescue websites & applications mostly with React."
          }
        />
        <meta
          key="og:description"
          name="og:description"
          content={
            "Front-end Developer. JavaScript and UI/UX enthusiast. I build & rescue websites & applications mostly with React."
          }
        />
        <meta
          key="og:url"
          name="og:url"
          content={"https://imsolitude.github.io"}
        />
        <meta key="og:image" name="og:image" content="/apple-touch-icon.png" />
      </Head>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </React.Fragment>
  );
};
export default MyApp;
