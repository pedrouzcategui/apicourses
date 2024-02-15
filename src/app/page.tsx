import { YouTubeVideoPlayer } from "@/components";

export default function Home() {
  return (
    <>
      Coding custom video player atm
      <YouTubeVideoPlayer
        src="https://www.youtube.com/embed/EhKRwqYb2iU?si=-C0lhAL-PjHxvioa"
        width="560"
        height="315"
      />
    </>
  );
}
