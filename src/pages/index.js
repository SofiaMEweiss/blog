import * as React from "react";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <h1>Hej</h1>
      {data.allContentfulBlogpost.nodes.map((blogpost) => (
        <>
          <h2>{blogpost.title}</h2>
          <p>{blogpost.description.description}</p>
        </>
      ))}
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allContentfulBlogpost {
      nodes {
        title
        description {
          description
        }
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
`;
