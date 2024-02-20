import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<any>();
  const [videos, setVideos] = useState<[]>([]);
  const { id } = useParams();

  useEffect(() => { 
    fetchFromAPI(id).then((data) => {
      setVideoDetail(data)
      console.log(videoDetail)
      console.log(data)
    }
    );
  }, [id]);

  const { snippet, statistics } = videoDetail || {};

  // <embed src={videoDetail?.embed} type="video/webm" />
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <iframe className="react-player" src={videoDetail?.embed} frameBorder="0" allowFullScreen></iframe>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${snippet?.channelId}`}>
                <Typography
                  sx={{ typography: { sm: "subtitle1", md: "h6" } }}
                  color="#fff"
                >
                  {videoDetail?.title}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignContent="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseFloat(
                    videoDetail?.rate
                  ).toLocaleString()}{" "}
                  Rate
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(
                    videoDetail?.views
                  ).toLocaleString()}{" "}
                  views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignContent="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
