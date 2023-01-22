import { Link, Route, Redirect } from "wouter-preact";
import { Nav } from "./components";
import { count, is_authenticated } from "./signals";
import { SignInPage, HomePage, TodoPage } from "./pages";
import "./app.css";

export const App = () => {
  return (
    <>
      <Nav />
      <Route path="/signin" component={SignInPage} />
      {!is_authenticated.value && <Redirect to='/signin' />}
      <Route path="/todos" component={TodoPage} />
      <Route path="/" component={HomePage} />
    </>
  );
};
