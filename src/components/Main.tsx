export const Main = ({ id, children }: any) => (
  <main className="container" {...(!!id && { id })}>
    {children}
  </main>
);
