import React, { useState, useEffect } from "react";
import Link from "next/link";

const PostWidget = ({ slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {}, []);

  return <div>PostWidget</div>;
};

export default PostWidget;
