type Todo = {
    id: number
    title: string
    completed: boolean
}

// export async function getTodos() {
//     await wait(20000)

//     return fetch(`${process.env.API_URL}/todos`)
//         .then(res => res.json())
//         .then(data => data as Todo[])
// }

function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}


export async function getTodos() {
    await wait(2000)
    let data = await fetch(`${process.env.API_URL}/todos`)
    let todos = await data.json().then(data => data as Todo[])
    return (
        todos
    )
}