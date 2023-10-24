import type { MetaFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "Onderzoeken en begrijpen" },
    {
      name: "description",
      content: "Visual thinking in het hbo: onderzoeken en begrijpen",
    },
  ];
};

export default function _Index() {
  return (
    <section>
      <Header />

      <iframe
        style={{ width: 560, height: 315, border: "none" }}
        src="https://www.youtube.com/embed/yr-rRMElLFg?si=CkdyjnxpUFMqM7se"
      ></iframe>

      <Footer />
    </section>
  );
}
