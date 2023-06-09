import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import store from "../store/index";
import { Provider } from "react-redux";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
