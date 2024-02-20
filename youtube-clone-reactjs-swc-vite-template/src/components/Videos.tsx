import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from ".";

// interface VideosProps {
//   videos: Item[];
//   direction: "row" | "column";
// }

const Videos = ({ videos, direction }: any) => {
  return (
    <Stack direction={direction} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx} >
          {item.id && <VideoCard video={item} />}
          {/* <img src={item.default_thumb.src} alt="thumb"/> */}
        </Box> 
      ))}
    </Stack>
  );
};

Videos.defaultProps = {
  direction: "row",
};

export default Videos;
