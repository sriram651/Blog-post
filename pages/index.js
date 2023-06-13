import BlogPost from '@/components/BlogCard';
import { QUERY, graphcms } from '@/graphql/api';

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export default function Home({posts}) {

  return (
    <main className='p-4'>
      {posts.map((post) => {
        return (
          <>
            <BlogPost title={post.title} cover={post.coverPhoto.url} username={post.author.username} avatar={post.author.avatar.url}/>
          </>
        )
      })}
    </main>
  )
}
