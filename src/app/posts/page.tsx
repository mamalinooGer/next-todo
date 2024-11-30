import { getPosts } from "@/api/posts"
import { PostCard } from "@/app/components/PostCard"

export default async function PostPage() {
    const posts = await getPosts()
    return (
        <>
            <h1 className='font-bold text-2xl p-4'>Posts</h1>
            <div>
                {posts.map(post => (
                    <PostCard key={post.id} {...post} />
                ))}
            </div>
        </>
    )
}