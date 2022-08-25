import React from "react";
import { useRouter } from "next/router";
import Post from "../../components/Post/Post";
import Loader from "../../components/Loader/Loader";
import { getPostDetails, getPosts } from "../../services";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
