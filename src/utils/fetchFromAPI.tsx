import axios from "axios";

const BASE_URL = "https://www.eporner.com/api/v2/video/search/";
const GET_VIDEO_BY_ID_URL = "https://www.eporner.com/api/v2/video/id/";

interface optionalObj {
  url: string;
  params: {
    id?: string;
    query?: string;
    per_page?: string;
    page?: string;
    thumbsize?: string;
    order?: string;
    gay?: string;
    lq?: string;
    format?: string;
  };
}
//https://www.eporner.com/api/v2/video/id/?id=IsabYDAiqXa&thumbsize=medium&format=json
interface idOptionsObj {
  url: string;
  params: {
    id?: string;
    thumbsize?: string;
    format?: string;
  };
}

const options: optionalObj = {
  url: BASE_URL,
  params: {
    id: "",
    query: "teen",
    per_page: "30",
    page: "1",
    thumbsize: "big",
    order: "top-weekly",
    gay: "0",
    lq: "1",
    format: "json" 
  },
  // headers: {
  //   "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  //   "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  // },
};

export const fetchFromAPI = async (id?: string, searchTerm?: string) => {
  let idOptions: idOptionsObj = {};
  options.params.query = "";
  if (id || id !== "") {
    idOptions = {
      url: GET_VIDEO_BY_ID_URL,
      params: {
        id,
        thumbsize: 'medium', 
        format: 'json'
      }
    } 
  } else if(searchTerm) { 
    options.params.query = searchTerm; 
  }

  const { data } = await axios.get(id ? `${GET_VIDEO_BY_ID_URL}` : `${BASE_URL}`, id ? idOptions : options);
  return data;
};
