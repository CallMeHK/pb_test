import { Main, MdSection } from "../components";
import { Link } from 'wouter-preact'
import { usePages } from "../hooks";
import { useMemo } from "preact/hooks";
import * as md from '../md'


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
  const intro = home.expand.markdown.filter((elt) =>
    elt.tags.includes("intro")
  )[0];
  return (
    <>
      <Main>
        <section id="intro">
          <picture>
            <source media="(max-width: 450px)" srcset="./ty-dogs-banner-450.jpg" />
            <source media="(min-width: 451px) and (max-width: 975px)" srcset="./ty-dogs-banner-700.jpg" />
            <source media="(min-width: 976px)" srcset="./ty-dogs-banner-1200.jpg" />
            <img
              style={{ padding: '8px 0 24px' }}
              src="./ty-dogs-banner-1200.jpg"
              alt="Ty and his shelties"
            />
          </picture>
          <MdSection>{intro.md || md.intro}</MdSection>
        </section>
        <section id="links" className="md-section">
        <p><Link href="/resume">Resume stuff</Link></p>
        <p><Link href="/recipes">Gluten free beer stuff</Link></p>
        <p><Link href="/tech">Tech stuff</Link></p>
         {/*
         <article>
            <h4 style={{margin: 0}}>Resume</h4>
          </article>
          <article>
            <h4 style={{margin: 0}}>Homebrew Recipes</h4>
          </article>
          <article>
            <h4 style={{margin: 0}}>Blog</h4>
          </article>
         */} 
        </section>
      </Main>
    </>
  );
};
