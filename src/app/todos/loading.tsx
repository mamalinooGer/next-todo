import { Skeleton, SkeletonList } from "../components/Skeleton";

export default function LoadingTodosPage() {
    return (
        <>
            <h1>Todo List </h1>
            <ul>
                <SkeletonList amount={10}>
                    <li>
                        <Skeleton short />
                    </li>
                </SkeletonList>
            </ul>
        </>
    )
}