import { getUserPosts } from "@/api/posts"
import { getUserTodos } from "@/api/todos"
import { getUser } from "@/api/users"
import { PostCard } from "@/app/components/PostCard"
import { TodoItem } from "@/app/components/TodoItem"
import { Suspense } from "react"

// export default function UserPage({ params: { userId } }: {
//     params: { userId: string }
// }) {
export default async function UserPage({ params }: {
    params: { userId: string }
}) {
    const { userId } = await params
    return (
        <>
            <UserDetails userId={userId} />
            <div className="mt-4 border-t border-t-slate-400/50">
                <h2 className="text-lg font-bold mx-4 mt-4 text-yellow-200">Posts</h2>
                <UserPosts userId={userId} />
            </div>
            <div className="mt-4">
                <h2 className="text-lg font-bold mx-4 mt-4 text-yellow-200">Todos</h2>
                <UserTodos userId={userId} />
            </div>
        </>
    )
}

async function UserDetails({ userId }: { userId: string }) {
    const user = await getUser(userId)
    return (
        <>
            <Suspense fallback={
                <>
                    <h1>Loading...</h1>
                </>
            }>

                <h1 className="font-bold text-2xl p-2 text-yellow-400">{user.name}</h1>
                <div className="px-4">
                    <div className="text-xs mb-4">{user.email}</div>
                    <div className=""><b>Company:</b> {user.company.name}</div>
                    <div><b>Website:</b> {user.website}</div>
                    <div><b>Address:</b>
                        {" "}
                        {`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}
                    </div>
                </div>
            </Suspense>
        </>
    )
}

async function UserPosts({ userId }: { userId: string }) {
    const posts = await getUserPosts(userId)
    return posts.map(post => <PostCard key={post.id} {...post} />)
}

async function UserTodos({ userId }: { userId: string }) {
    const todos = await getUserTodos(userId)
    return todos.map(todo => <TodoItem key={todo.id} {...todo} />)
} 