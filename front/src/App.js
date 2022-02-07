import Register from "./page/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSelector } from "react-redux";

import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import APILoading from "./components/APILoading";
import APIError from "./components/APIError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      // staleTime: 30000, :: 시간 설정 고려
    },
  },
});

function App() {
  const { isError, errorData } = useSelector((state) => state.apiError);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <APILoading />
        {isError && <APIError errorData={errorData} />}
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
