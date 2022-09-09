import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDeatail, setChannelDeatail] = useState(null);
  const [videos, setvideos] = useState([]);

  const { id } = useParams();

  console.log(channelDeatail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDeatail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setvideos(data?.items));
  }, [id]);

  return <div>{id}</div>;
};

export default ChannelDetail;
