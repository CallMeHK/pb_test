import { useMemo } from "preact/hooks";
import { Main, MdSection } from "../components";
import { usePages } from "../hooks";

export const ResumePage = () => {
  const query = useMemo(
    () => ({
      filter: 'title="resume"',
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

  console.log("pages", pages);
  const [home] = pages;
  const resume = home.expand.markdown.filter((elt) =>
    elt.tags.includes("resume")
  )[0];
  return (
    <Main>
      <MdSection>{resume.md}</MdSection>
    </Main>
  );
};
