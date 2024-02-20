import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/contstant";
import { Item } from "../interfaces/YoutubeSearch";
import { useEffect } from "react";

interface VideoProps {
  video: Item; 
}

const VideoCard = ({
  video: { 
    id,
    default_thumb,
    title,
    views
  },
}: VideoProps) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={id ? `/video/${id}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={
            default_thumb?.src
          }
          alt={"porno"}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", hegith: "106px" }}>
          <Link to={id ? `/video/${id}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF" textOverflow="true">
              {title}
            </Typography>
          </Link>
          <Link 
            to={ 
                `/channel/${id}`
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {'Views: ' + views}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
