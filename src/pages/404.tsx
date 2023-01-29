import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import styled from "@emotion/styled";

const Main = styled.main`
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
`;

const Heading = styled.h1`
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
`;

const Paragraph = styled.p`
  marginbottom: 48;
`;

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Main>
      <Heading>Page not found</Heading>
      <Paragraph>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </Paragraph>
    </Main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
