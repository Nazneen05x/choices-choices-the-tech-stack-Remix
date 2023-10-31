// import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import { cosmicConfig } from "~/cosmicConfig";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fetch from "node-fetch";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "~/styles/index.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Onderzoeken en begrijpen" },
    { name: "Visual thinking in het hbo: onderzoeken en begrijpen" },
  ];
};

export let loader: LoaderFunction = async () => {
  const cosmicUrl =
    "https://api.cosmicjs.com/v3/buckets/choices-choices-the-tech-stack-remix-kennisclips/objects/65403c7c9740a41fa4a6f56f?read_key=qCe5oIt2juHhFaaniHOLSXDSL4cFgd6W5KAhlHpwtUN2cXy5vi&depth=1&props=slug,title,metadata";

  try {
    const response = await fetch(cosmicUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const cosmicData = await response.json();

    return { cosmicData };
  } catch (error) {
    console.error("Fout bij het ophalen van gegevens van CosmicJS:", error);
    return { cosmicData: null };
  }
};

export default function Index() {
  const { cosmicData } = useLoaderData();
  const { title } = cosmicData.object;
  const { metadata } = cosmicData.object;
  const hboOnderzoekenEnBegrijpen = metadata["hbo:_onderzoeken_en_begrijpen"];
  console.log(cosmicData);
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

        <section className="beschrijving">
          <h1>{title}</h1>
          <p id="#isPasted">{hboOnderzoekenEnBegrijpen}</p>
        </section>

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
