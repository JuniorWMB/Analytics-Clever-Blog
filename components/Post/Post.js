import React from "react";
import Head from "next/head";
import Hero from "../HeroBanner/Hero";
import * as timeago from "timeago.js";
import TimeAgo from "timeago-react";
import fr from "timeago.js/lib/lang/fr";
import CommentsForm from "../Comments/CommentsForm";
import style from "../../styles/Post.module.css";
import parse from "html-react-parser";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

timeago.register("fr", fr);

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="description" content={post.description} />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://analyticsclever.com/post/${post.slug}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={post.featuredPicture.url}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Analytics Clever"
          key="ogsitename"
        />
        <meta property="og:title" content={post.slug} key="ogtitle" />
        <meta
          property="og:description"
          content={post.description}
          key="ogdesc"
        />
      </Head>
      {/* <Hero picture={post.featuredPicture.url} /> */}
      <div className=" lg:flex justify-center">
        <div className="flex flex-col items-center mt-10 lg:absolute z-20 top-[20em]  lg:w-[80%] lg:items-start">
          <p className="text-gray-600 lg:text-white dark:text-white">
            <TimeAgo datetime={post.createdAt} locale="fr" />{" "}
          </p>
          <h1 className="text-2xl font-extrabold font-Montserrat lg:text-white">
            {post.title}
          </h1>
          <div className="px-4 mt-10 lg:bg-white lg:px-10 py-20 dark:bg-black">
            <p
              // className=" text-justify"
              className={`post ${style.post}`}
              dangerouslySetInnerHTML={{ __html: post.content.html }}
            >
              {/* {parse(post.content.text)} */}
            </p>
            <div className="border-b border-gray-600 h-24  mt-24 mb-10">
              <div className="flex items-center  lg:justify-end">
                <span className=" font-semibold">Partager:</span>
                <div className="flex items-center justify-around  text-gray-600  h-full w-[40%] ">
                  <WhatsappShareButton
                    url={`http://localhost:3000/${post.slug}`}
                  >
                    <WhatsappIcon size={30} round />
                  </WhatsappShareButton>
                  <FacebookShareButton
                    url={`http://localhost:3000/${post.slug}`}
                  >
                    <FacebookIcon size={30} round />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    url={`http://localhost:3000/${post.slug}`}
                  >
                    <LinkedinIcon size={30} round />
                  </LinkedinShareButton>
                  <TwitterShareButton
                    url={`http://localhost:3000/${post.slug}`}
                  >
                    <TwitterIcon size={30} round />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
            <CommentsForm slug={post.slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
