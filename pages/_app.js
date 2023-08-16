import { Router } from "next/router";
import Layout from "../components/common/Layout";
import "../styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { UiProvider } from "../contexts/UiContext";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  NProgress;

  return (
    <UiProvider>
      <AnimatePresence>
        <Header />
        <Layout>  
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </AnimatePresence>
    </UiProvider>
  );
}

export default MyApp;
