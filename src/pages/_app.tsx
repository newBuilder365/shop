import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import { wrapper } from "@/store";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider>
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export default wrapper.withRedux(App);
