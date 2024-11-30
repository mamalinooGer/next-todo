import Link from "next/link";
import { Skeleton, SkeletonButton } from "./Skeleton";

export function PostCard({ id, title, body }: {
    id: number
    title: string
    body: string
}) {
    return (
        <div className="px-4 py-4">
            <div className="font-bold mb-4 border-b border-b-slate-400/30 py-2">{title}</div>
            <div className="mb-4">
                <div>{body}</div>
            </div>
            <div className="border-b border-b-slate-500/80 w-full pb-14">
                <div className="float-right mb-4 ">
                    <Link className="bg-slate-800 hover:bg-slate-500 py-3 px-6 rounded-md text-sm" href={`/posts/${id}`}>View</Link>
                </div>
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