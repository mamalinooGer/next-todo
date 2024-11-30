import { getPostComments } from "@/api/comments"
import { getPost } from "@/api/posts"
import { getUser } from "@/api/users"
import Link from "next/link"
import { Suspense } from "react"

export default async function PostPage({ params }: {
    params: { postId: string }
}) {
    const { postId } = await params
    return (
        <>
            <Suspense fallback="Loading...">
                <PostDetails postId={postId} />
            </Suspense>
        </>
    )
}


async function PostDetails({ postId }: { postId: string }) {
    const post = await getPost(postId)
    return (
        <>
            <div className="p-2">
                <h1 className="text-lg font-bold py-4 ">{post.title}</h1>
                <p className="text-gray-100 py-4">{post.body}</p>
                <div>
                    <h5>Post By:</h5>
                    <Suspense fallback={'Loading writer...'}>
                        <UserDetails userId={post.userId} />
                    </Suspense>
                </div>
                <div className="border-t border-t-slate-300">
                    <Suspense fallback={'Loading Comments...'}>
                        <Comments postId={postId} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

async function UserDetails({ userId }: { userId: number }) {
    const user = await getUser(userId)

    return <Link href={`/users/${user.id}`}>{user.name}</Link>
}

async function Comments({ postId }: { postId: string }) {
    const Comments = await getPostComments(postId)

    return (
        <>
            <div className="py-4 font-bold">Comments</div>
            <div>
                {Comments.map(comment => (
                    <div className="border-b border-b-gray-400/30 mb-4" key={comment.id}>
                        <div className="text-xs text-gray-200">{comment.email}</div>
                        <p className="mt-2 mb-5">{comment.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
}