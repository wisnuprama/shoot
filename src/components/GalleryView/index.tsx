import type { Gallery } from "@typing/models";

import type { css } from "@emotion/react";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type GalleryViewProps = {
  onClickPhoto: (selectedPhoto: { index: number }) => void;
  onCloseLightBox: () => void;
  selectedPhotoIndex: number;
  data: Gallery["photos"];
  sectionCSS: ReturnType<typeof css>;
};

export function GalleryView({
  onClickPhoto,
  selectedPhotoIndex,
  data,
  onCloseLightBox,
  sectionCSS,
}: GalleryViewProps) {
  return (
    <section css={sectionCSS}>
      <PhotoAlbum
        layout="rows"
        photos={data}
        spacing={8}
        onClick={onClickPhoto}
      />
      <Lightbox
        slides={data}
        open={selectedPhotoIndex >= 0}
        index={selectedPhotoIndex}
        close={onCloseLightBox}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Zoom]}
      />
    </section>
  );
}
