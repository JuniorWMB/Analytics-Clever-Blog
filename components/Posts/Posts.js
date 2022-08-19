import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as timeago from "timeago.js";
import TimeAgo from "timeago-react";
import fr from "timeago.js/lib/lang/fr";

timeago.register("fr", fr);

const Posts = ({ post, key }) => {
  const ga4Img =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660688758/google-analytics-nameG-1920_qfl2c7.png";
  return (
    <div className="px-4 py-8 group" key={key}>
      <div className="h-80 w-full relative ">
        <Link href={`/post/${post.slug}`}>
          <Image
            src={post.featuredPicture ? post.featuredPicture.url : ga4Img}
            // src={ga4Img}
            alt="Google analytics image"
            layout="fill"
            objectFit="cover"
            className=" scale-100 hover:scale-105 ease-out duration-500 cursor-pointer"
          />
        </Link>
      </div>
      <div>
        <h3 className=" font-extrabold font-Montserrat mt-4 text-xl text-black dark:text-white transition duration-700 cursor-pointer">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="flex  mt-4 uppercase text-xs ">
          <p className="mr-1">
            Par:
            <span className="font-bold ml-1">Junior Wembopa</span>
          </p>
          <p className="mx-3  w-36 flex items-center">
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m3.3 14.2L14 17l-3-5.2V7h1.5v4.4l2.8 4.8Z"
              ></path>
            </svg>
            <span className="font-bold ml-1">
              {" "}
              <TimeAgo datetime={post.createdAt} locale="fr" />{" "}
            </span>
          </p>
          <p className="w-36 flex items-center">
            <svg width="1.2em" height="1.2em" viewBox="0 0 42 32">
              <path
                fill="currentColor"
                d="M39 0c-1.654 0-3 1.346-3 3c0 .888.396 1.679 1.011 2.229l-8.8 14.031A2.972 2.972 0 0 0 27 19c-.868 0-1.644.376-2.193.967l-9.073-5.745c.168-.374.266-.786.266-1.222c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .904.41 1.706 1.044 2.256L4.149 26.231A2.972 2.972 0 0 0 3 26c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3c0-.888-.395-1.678-1.01-2.228l6.904-10.99c.343.138.715.218 1.106.218c.859 0 1.629-.367 2.176-.947l9.078 5.748A2.981 2.981 0 0 0 24 22c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.863-.371-1.636-.957-2.184l8.81-14.046c.354.147.741.23 1.147.23c1.654 0 3-1.346 3-3s-1.346-3-3-3zM5 29c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2zm8-14c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2zm14 9c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2zM39 5c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2z"
              ></path>
            </svg>
            <span className="font-bold ml-1">83 Vues</span>
          </p>
        </div>
        <p className="text-gray-800 dark:text-white mt-4 font-Montserrat">
          {post.description}
        </p>
        <p className="font-bold uppercase w-24 mt-4 ">
          <Link href={`/post/${post.slug}`}>Lire Plus</Link>
        </p>
        <div className="border border-gray-400  w-20" />
      </div>
    </div>
  );
};

export default Posts;
