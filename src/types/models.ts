export interface Exif {}

export interface Photo extends Exif {
  title: string;
  width: number;
  height: number;
  src: string;
  alt?: string;
}

export interface Gallery {
  albumName: string;
  albumSlug: string;
  ctime: string;
  photos: Photo[];
}

export interface SiteMetadata {
  title: string;
  description: string | null;
  siteUrl: string;
  author: string;
}

export interface Site {
  siteMetadata: SiteMetadata;
}
