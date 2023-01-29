import type { Photo, Gallery } from "@typing/models";
import { useState, useCallback } from "react";

interface GalleryViewModel {
  selectedPhotoIndex: number;
  closeLightBox: () => void;
  clickPhoto: (selectedPhoto: { index: number }) => void;
  data: Photo[];
  title: string;
  href: string;
}

export function useGalleryViewModel(datastore: {
  galleryJson: Gallery;
}): GalleryViewModel {
  const [selectedPhotoIndex, setPhotoIndex] = useState(-1);

  const clickPhoto = useCallback(
    ({ index }: { index: number }) => setPhotoIndex(index),
    []
  );
  const closeLightBox = () => setPhotoIndex(-1);

  return {
    selectedPhotoIndex,
    closeLightBox,
    clickPhoto,
    data: datastore.galleryJson.photos,
    title: datastore.galleryJson.albumName,
    href: `/${datastore.galleryJson.albumSlug}`,
  };
}
