import { Main } from "../components";
import Markdown from "preact-markdown";
import { usePages } from "../hooks";
import { useMemo } from "preact/hooks";

export const HomePage = () => {
  const query = useMemo(
    () => ({
      filter: 'title="home"',
      expand: "markdown",
    }),
    []
  );
  const { data: pages, loading, error } = usePages(query);
  console.log(pages);

  if (loading) return null;

  if (error || !pages[0])
    return (
      <Main>
        <h3>Sorry, I'm are having trouble with my server!</h3>
        <h3>This error has been logged and will be taken care of ASAP!</h3>
      </Main>
    );

  const [home] = pages;
  const intro = home.expand.markdown.filter((elt) => elt.tags.includes("intro"))[0];
  const body = home.expand.markdown.filter((elt) => elt.tags.includes("body"))[0];
  return (
    <>
      <Main>
        <section id="intro">
          <Markdown markdown={intro?.md} />
        </section>
        <section id="body">
          <Markdown markdown={body?.md} />
        </section>
      </Main>
    </>
  );
};
