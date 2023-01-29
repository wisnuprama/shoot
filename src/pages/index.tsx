import type { HeadFC, PageProps } from "gatsby";
import type { Gallery, Site } from "@typing/models";

import { graphql } from "gatsby";
import { useGalleryViewModel } from "@viewmodels/GalleryViewModel";
import { GalleryView } from "@components/GalleryView";
import { Footer } from "@components/Footer";
import { css } from "@emotion/react";

type DataProps = {
  allGalleryJson: Pick<Gallery, "albumName" | "albumSlug" | "ctime">;
  galleryJson: Gallery;
  site: Site;
};

// rgb(55, 64, 69)
// rgb(216, 146, 22)
// rgb(225, 216, 159);

function IndexPage({ data }: PageProps<DataProps>) {
  const glViewModel = useGalleryViewModel(data);

  return (
    <main
      css={css`
        height: 100vh;
        background: #F5F5F5;
      `}
    >
      <GalleryView
        sectionCSS={css`
          padding: 12px;
        `}
        data={glViewModel.data}
        selectedPhotoIndex={glViewModel.selectedPhotoIndex}
        onClickPhoto={glViewModel.clickPhoto}
        onCloseLightBox={glViewModel.closeLightBox}
      />
      <div
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
        `}
      >
        <Footer
          siteTitle={data.site.siteMetadata.title}
          authorName={data.site.siteMetadata.author}
        />
      </div>
    </main>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query {
    allGalleryJson {
      nodes {
        albumName
        albumSlug
      }
    }
    galleryJson(albumSlug: { eq: "..." }) {
      albumName
      albumSlug
      photos {
        height
        width
        title
        src
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
    }
  }
`;
