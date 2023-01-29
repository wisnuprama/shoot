import type { HeadFC, PageProps } from "gatsby";
import type { Gallery, Site } from "@typing/models";

import { graphql } from "gatsby";
import { useGalleryViewModel } from "@viewmodels/GalleryViewModel";
import { GalleryView } from "@components/GalleryView";
import { Footer } from "@components/Footer";

type DataProps = {
  allGalleryJson: Pick<Gallery, "albumName" | "albumSlug" | "ctime">;
  galleryJson: Gallery;
  site: Site;
};

function IndexPage({ data }: PageProps<DataProps>) {
  const glViewModel = useGalleryViewModel(data);

  return (
    <main>
      <GalleryView
        data={glViewModel.data}
        selectedPhotoIndex={glViewModel.selectedPhotoIndex}
        onClickPhoto={glViewModel.clickPhoto}
        onCloseLightBox={glViewModel.closeLightBox}
      />
      <Footer
        siteTitle={data.site.siteMetadata.title}
        authorName={data.site.siteMetadata.author}
      />
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
    },
    galleryJson(albumSlug: {eq: "..."}) {
      albumName
      albumSlug
      photos {
        height
        width
        title
        src
      }
    },
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
