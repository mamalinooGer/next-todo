export function TodoItem({ completed, title }: {
    completed: Boolean
    title: String
}) {
    const cssClass = completed ? "line-through text-yellow-500" : undefined
    return <li className={`${cssClass} my-4`}>{title}</li>
}