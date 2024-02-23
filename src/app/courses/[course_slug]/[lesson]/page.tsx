import { YouTubeVideoPlayer } from "@/components";
import { CourseTitle } from "@/components";

export default function NamePage() {
    return (
        <>
            <CourseTitle />
            <YouTubeVideoPlayer
                src="https://www.youtube.com/embed/hAx6mYeC6p"
                width="800"
                height="450"
            />
        </>
    );
}
