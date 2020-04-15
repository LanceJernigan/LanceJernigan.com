import React from "react";
import { useParams } from "react-router-dom";

const Resource = props => {
  const { slug } = useParams();

  return <p>{slug}</p>;
};

export default Resource;
