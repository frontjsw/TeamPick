import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import toast from "react-hot-toast";

import Register from "./page/Register";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import ErrorBoundary from "./components/ErrorBoundary";
import APILoading from "./components/APILoading";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      toast.error(`API 요청 문제가 발생했습니다: ${error.message}`),
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      // staleTime: 30000, :: 시간 설정 고려
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <APILoading />
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
