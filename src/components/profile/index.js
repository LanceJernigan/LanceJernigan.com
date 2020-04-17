import React from "react";
import profileSrc from "../../images/lancejernigan.jpg";

import TwitterIcon from "../../icons/twitter";
import LinkedInIcon from "../../icons/linkedIn";
import GitHubIcon from "../../icons/gitHub";

import "./style.scss";

const Profile = () => (
  <section className="profile">
    <picture className="profile__icon">
      <img src={profileSrc} alt="profile" />
    </picture>
    <section className="profile__content">
      <h1>Lance Jernigan</h1>
      <h2>Lead Web Engineer</h2>
      <ul className="profile__social">
        <li>
          <a href="https://www.twitter.com/lance_jernigan" target="_blank">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lancejernigan" target="_blank">
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/lancejernigan" target="_blank">
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </section>
  </section>
);

export default Profile;
