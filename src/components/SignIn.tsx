import { useState } from "preact/hooks";
import { login, is_authenticated } from "../signals";
import { Redirect } from 'wouter-preact'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
      await login(email, password);
  };

  return (
    <article className="grid">
     {is_authenticated.value && <Redirect to='/todos' />}
      <div>
        <hgroup>
          <h1>Sign in</h1>
          <h2>Lets not get too crazy...</h2>
        </hgroup>
        <form>
          <input
            type="text"
            name="login"
            placeholder="Login"
            aria-label="Login"
            autocomplete="email"
            onInput={(e: any) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="Password"
            autocomplete="current-password"
            onInput={(e: any) => setPassword(e.target.value)}
            value={password}
          />
          <fieldset>
            <label for="remember">
              <input
                type="checkbox"
                role="switch"
                id="remember"
                name="remember"
              />
              Remember me
            </label>
          </fieldset>
          <button
            type="submit"
            className="contrast"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Login
          </button>
        </form>
      </div>
      <div></div>
    </article>
  );
};
