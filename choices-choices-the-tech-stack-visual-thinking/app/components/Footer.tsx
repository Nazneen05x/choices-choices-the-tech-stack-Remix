import React from "react";

const Footer = () => {
  return (
    <footer>
      <section>
        <img src="visual-thinking-logo-footer.svg" alt="footerlogo" />
      </section>

      <section>
        <ul>
          <li>Over</li>
          <li>Blog</li>
          <li>Tekenmethodes</li>
        </ul>
      </section>

      <section>
        <ul>
          <li>Categorieën</li>
          <li>Onderzoeken en begrijpen</li>
          <li>Organiseren en plannen</li>
          <li>Leren over jezelf</li>
          <li>Leren over anderen</li>
          <li>Communiceren en presenteren</li>
          <li>Creatief Denken</li>
        </ul>
      </section>

      <section>
        <ul>
          <li>Contact</li>
          <li>
            <span>
              <img src="twitter.svg" alt="twitterlogo" />
            </span>
            <span>
              <img src="instagram.svg" alt="instagramlogo" />
            </span>
            <span>
              <img src="tiktok.svg" alt="tiktoklogo" />
            </span>
            <span>
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
