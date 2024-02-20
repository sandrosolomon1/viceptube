import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Pagination from "./Pagination";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("New");
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [videos, setVideos] = useState<[]>([]);
  const [state, setstate] = useState({
    totalPages: 20,
    currentPage: 1
  });

  const { totalPages, currentPage } = state;

  const handlePagination = (current) => {
    setstate({ ...state, currentPage: current });
  };

  useEffect(() => {

    fetchFromAPI("", selectedCategory)
    .then(data => {
          setVideos(data.videos);    
          console.log('data feed', data);
        }
      );
    
  }, [selectedCategory]);

  //[] empty apply only reloaded
  useEffect(() => {

    fetchFromAPI()
    .then(data => {
          setVideos(data.videos);   
          console.log('data feed', data);
        }
      );
    
  }, [currentPageNumber]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 MeTube Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} /> 

        {/* start */}  
        <Pagination
          total={10}
          current={1}
          pagination={(crPage) => handlePagination(crPage)}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
