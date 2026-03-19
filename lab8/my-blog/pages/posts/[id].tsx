import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

interface PostProps {
  post: Post;
  author: any;
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>By {author?.name}</p>
      <p>{post.content}</p>

      <div>
        {post.tags.map(tag => (
          <span key={tag}>#{tag} </span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(post => ({
      params: { id: post.id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);

  if (!post) return { notFound: true };

  const author = await getAuthorById(post.author);

  return {
    props: { post, author },
    revalidate: 60,
  };
};