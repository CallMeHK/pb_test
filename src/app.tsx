import { Route, Redirect, Switch } from "wouter-preact";
import { Nav } from "./components";
import { is_authenticated } from "./signals";
import { HomePage} from "./pages/HomePage";
import "./app.css";
import { lazy, Suspense } from 'preact/compat'

const AuthenticatedRoute: typeof Route = ({ path, component }) => (
  <Route
    path={path}
    component={
      is_authenticated.value ? component : () => <Redirect to="/signin" />
    }
  />
);

const LazySignInPage = lazy(() =>
  import('./pages/SignInPage').then((m) => {
    return {
      default: m.SignInPage,
    };
  })
);

const LazyChatPage = lazy(() =>
  import('./pages/ChatPage').then((m) => {
    return {
      default: m.ChatPage,
    };
  })
);

const LazyTodoPage = lazy(() =>
  import('./pages/TodoPage').then((m) => {
    return {
      default: m.TodoPage,
    };
  })
);

const LazyResumePage = lazy(() =>
  import('./pages/ResumePage').then((m) => {
    return {
      default: m.ResumePage,
    };
  })
);

const LazyBeerPage = lazy(() =>
  import('./pages/BeerPage').then((m) => {
    return {
      default: m.BeerPage,
    };
  })
);

const LazyTechPage = lazy(() =>
  import('./pages/TechPage').then((m) => {
    return {
      default: m.TechPage,
    };
  })
);

const SignInPage = () => <Suspense fallback={null}><LazySignInPage/></Suspense>
const TodoPage = () => <Suspense fallback={null}><LazyTodoPage/></Suspense>
const ChatPage = () => <Suspense fallback={null}><LazyChatPage/></Suspense>
const ResumePage = () => <Suspense fallback={null}><LazyResumePage/></Suspense>
const BeerPage = () => <Suspense fallback={null}><LazyBeerPage/></Suspense>
const TechPage = () => <Suspense fallback={null}><LazyTechPage/></Suspense>


export const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <AuthenticatedRoute path="/todos" component={TodoPage} />
        <AuthenticatedRoute path="/chat" component={ChatPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/beer" component={BeerPage} />
        <Route path="/tech" component={TechPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
