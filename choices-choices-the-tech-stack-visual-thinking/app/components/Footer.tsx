import React from "react";
import "~/styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/brx3lyu.css" />
      </head>

      <section className="footer-col-logo">
        <img src="visual-thinking-logo-footer.svg" alt="footerlogo" />
      </section>

      <section className="footer-col-1">
        <ul>
          <li className="footer-bold font-family">Over</li>
          <li className="footer-bold">Blog</li>
          <li className="footer-bold">Tekenmethodes</li>
        </ul>
      </section>

      <section className="footer-col-2">
        <ul>
          <li className="footer-bold">Categorieën</li>
          <li>Onderzoeken en begrijpen</li>
          <li>Organiseren en plannen</li>
          <li>Leren over jezelf</li>
          <li>Leren over anderen</li>
          <li>Communiceren en presenteren</li>
          <li>Creatief Denken</li>
        </ul>
      </section>

      <section className="footer-col-3">
        <ul>
          <li className="footer-bold">Contact</li>
          <li>
            <span className="footer-social-media">
              <img src="twitter.svg" alt="twitterlogo" />
            </span>
            <span className="footer-social-media">
              <img src="instagram.svg" alt="instagramlogo" />
            </span>
            <span className="footer-social-media">
              <img src="tiktok.svg" alt="tiktoklogo" />
            </span>
            <span className="footer-social-media">
              <img src="youtube.svg" alt="youtubelogo" />
            </span>
          </li>
          <li>© Charley Muhren, 2022</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
