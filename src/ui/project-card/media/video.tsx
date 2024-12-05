import Player from "react-player";
import { Project } from "../../../../content";

export function ProjectCardMediaVideo({ project }: { project: Project }) {
  return (
    <Player
      controls
      loop
      muted
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
      width="100%"
      height="100%"
      light={project.imageSrc[0]}
      url={toYouTubeVideoUrl({
        youTubeVideoId: project.youTubeVideoId!,
      })}
    />
  );
}

function toYouTubeVideoUrl({ youTubeVideoId }: { youTubeVideoId: string }) {
  return `https://www.youtube.com/watch?v=${youTubeVideoId}`;
}
