import Link from "next/link";
import { Skeleton, SkeletonButton } from "./Skeleton";

export function PostCard({ id, title, body }: {
    id: number
    title: string
    body: string
}) {
    return (
        <div>
            <div>{title}</div>
            <div>
                <div>{body}</div>
            </div>
            <div>
                <Link href={`/posts/${id}`}>View</Link>
            </div>
        </div>
    )
}

export function SkeletonPostCard() {
    return (
        <div>
            <div>
                <Skeleton short />
            </div>
            <div>
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
            <div>
                <SkeletonButton />
            </div>
        </div>
    )
}