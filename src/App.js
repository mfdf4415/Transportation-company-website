import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./layout/layout";
import HomePage from "./pages/HomePage/HomePage";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map(route => <Route path={route.path} exact={route.exact || false}>{route.component}</Route>)}
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
