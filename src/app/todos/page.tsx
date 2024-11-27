import { getTodos } from '@/api/todos'
import { TodoItem } from "../components/TodoItem"

export default async function TodosPage() {
    const todos = await getTodos()

    return (
        <>
            <h1 className='font-bold text-2xl p-4'>Todos</h1>
            <ul className='px-4 mx-5 list-disc'>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </>
    )
}