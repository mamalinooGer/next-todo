import { Fragment, Suspense } from "react";
// import { } from "react-dom"

export function Skeleton({ short, inline }: {
    short?: boolean
    inline?: boolean
}) {
    return (
        <div style={{
            width: short ? "15em" : undefined,
            display: inline ? "inline-block" : undefined
        }} />
    )
}

export function SkeletonButton() {
    return <div className="" />
}

export function SkeletonInput() {
    return <div className="" />
}

export function SkeletonList({ amount, children }: {
    amount: number
    children: React.ReactNode
}) {
    return (
        <>
            {Array.from({ length: amount }).map((_, i) => (
                <Fragment key={i}>{children}</Fragment>
            ))}
        </>
    )
}