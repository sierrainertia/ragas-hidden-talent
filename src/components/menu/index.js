import React from "react";
import "./index.scss";

export const Menu = () => {
  return (
    <section className="leftSection">
      <div className="leftWrapper">
        <header>
          <i className="fas fa-camera"></i>
          <h1>Ragavy Kanaraja</h1>
          <h2>Photographer</h2>
        </header>

        <nav>
          <ul className="navBar">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Work with me</a>
            </li>
          </ul>
        </nav>

        <ul className="socials">
          <li>
            <a href="">
              <i className="fab fa-instagram" aria-label="instagram link"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="far fa-envelope" aria-label="email link"></i>
            </a>
          </li>
        </ul>

        <p className="createdBy">
          Website created by
          <a href="https://sierracodes.online" target="_blank">
            Sierra MacDonald
          </a>
          &copy;
        </p>
      </div>
    </section>
  );
};
