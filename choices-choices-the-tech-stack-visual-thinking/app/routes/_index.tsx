import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "~/styles/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Onderzoeken en begrijpen" },
    {
      name: "description",
      content: "Visual thinking in het hbo: onderzoeken en begrijpen",
    },
  ];
};

export function _Index() {
  return (
    <section>
      <Header />

      <article className="iframe">
        <section className="video-arrows">
          <button className="arrows">
            <img
              className="left-arrow"
              src="arrows.svg"
              alt="Knop met pijl naar volgende video"
            />
          </button>
        </section>

        <iframe
          style={{ width: 560, height: 315, border: "none" }}
          src="https://www.youtube.com/embed/yr-rRMElLFg?si=CkdyjnxpUFMqM7se"
        ></iframe>

        <section className="video-arrows">
          <button className="arrows">
            <img
              className="right-arrow"
              src="arrows.svg"
              alt="Knop met pijl naar volgende video"
            />
          </button>
        </section>
      </article>

      <Footer />
    </section>
  );
}
