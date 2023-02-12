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

const SignInPage = () => <Suspense fallback={null}><LazySignInPage/></Suspense>
const TodoPage = () => <Suspense fallback={null}><LazyTodoPage/></Suspense>
const ChatPage = () => <Suspense fallback={null}><LazyChatPage/></Suspense>


export const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <AuthenticatedRoute path="/todos" component={TodoPage} />
        <AuthenticatedRoute path="/chat" component={ChatPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
};
