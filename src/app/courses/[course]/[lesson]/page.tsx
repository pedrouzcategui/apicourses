import { YouTubeVideoPlayer } from "@/components";

export default function NamePage() {
    return (
        <>
            <h2 className="font-bold text-2xl text-white mb-4">Current Lesson Title</h2>
            <YouTubeVideoPlayer
                src="https://www.youtube.com/embed/hAx6mYeC6p"
                width="800"
                height="450"
            />
        </>
    );
}
