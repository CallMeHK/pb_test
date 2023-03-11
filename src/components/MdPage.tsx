import { useMemo } from "preact/hooks";
import { Main, MdSection } from "../components";
import { useMarkdown } from "../hooks";

export const MdPage = ({ name }: { name: string }) => {
  const query = useMemo(
    () => ({
      filter: `name="${name}"`,
    }),
    []
  );
  const { data: markdown, loading, error } = useMarkdown(query);

  if (loading) return null;

  if (error || !markdown[0])
    return (
      <Main>
        <h3>Sorry, I'm having trouble with my server!</h3>
        <h3>This error has been logged and will be taken care of ASAP!</h3>
      </Main>
    );

  console.log("pages", markdown);
  const [content] = markdown;
  return (
    <Main>
      <MdSection>{content.md}</MdSection>
    </Main>
  );
};
