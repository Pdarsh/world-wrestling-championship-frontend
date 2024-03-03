import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";
import "@/styles/global.scss";
import axios from "axios";
import { getWrestlers } from "@/redux/wrestler-slice";
import Error from "next/error";

interface MyAppProps extends AppProps {
  error :any;
}

function MyApp({ Component, pageProps, error , ...rest }: Readonly<MyAppProps>) {
  if (error) {
    return <Error title={error.message} statusCode={error.status} />;
  }
  const { store } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export const getInitialProps =
  (store: any) => async (appContext: any) => {

    try {
      const apiUrl = "http://localhost:3001/wrestlers";
      const response = await axios.get(apiUrl);
      const data = response.data.data;
      store.dispatch(getWrestlers(data));

    } catch (err:any) {
      console.log(err.message)
      return {error: {
        message: err.message,
      }}
    }
};
  


MyApp.getInitialProps = wrapper.getInitialAppProps(getInitialProps as any);
export default MyApp;