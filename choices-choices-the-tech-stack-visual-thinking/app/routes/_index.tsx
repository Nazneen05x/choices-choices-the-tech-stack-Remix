import type { MetaFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";

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
      <iframe
        style={{ width: 560, height: 315, border: "none" }}
        src="https://www.youtube.com/embed/yr-rRMElLFg?si=CkdyjnxpUFMqM7se"
      ></iframe>

      <h2 style={{ fontWeight: "bold" }}>
        Visual thinking in het hbo: onderzoeken en begrijpen
      </h2>

      <p>
        Deze kennisclip gaat over visual thinking en hoe het kan worden
        toegepast om zowel studenten als docenten in het hbo op een andere
        manier te leren onderzoeken.
      </p>

      <p>
        Deze kennisclips zijn onderdeel van het platform ‘Visual thinking in het
        hbo’. Dit platform staat vanaf 2024 online. Tot die tijd kunnen
        werkvormen opgevraagd worden bij Charley Muhren, docent en onderzoeker
        bij CMD Amsterdam: c.j.muhren@hva.nl.
      </p>
    </section>
  );
}
