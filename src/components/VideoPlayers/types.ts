export interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  width: string;
  height: string;
}

enum VideoTypes {
  "self-hosted",
  "youtube",
}
