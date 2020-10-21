import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "./index-page.scss";

import Layout from "../components/Layout";
import { Menu } from "../components/menu";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="pageContainer">
    <Menu />

    <section className="rightSection">
      <main>
        <section className="hero"></section>
        <section className="about">
          <blockquote>
            Taking an image, freezing a moment, reveals how rich reality truly
            is.
            <p>-Anonymous</p>
          </blockquote>

          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            repellat maiores dolore fuga fugit illo expedita eligendi
            voluptatibus reprehenderit voluptates suscipit minima, ullam
            deserunt obcaecati odio officiis porro nostrum necessitatibus.
          </p>
        </section>

        <section className="gallery">
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
          <img src="http://placekitten.com/300/300" alt="" />
        </section>

        <section className="contact">
          <h3>Like what you see? Let's Chat!</h3>
          <form action="submit">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit Message</button>
          </form>
        </section>
      </main>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
