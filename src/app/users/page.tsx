import { getUsers } from "@/api/users"
import Link from "next/link"

export default async function UsersPage() {
    const users = await getUsers()
    return (
        <>
            <h1 className='font-bold text-2xl p-4'>Users</h1>
            <div className='px-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-3 lg:grid-cols-4'>
                {users.map(user => (
                    <div key={user.id} className="flex flex-col justify-between bg-slate-600 my-2 p-4 gap-4 rounded-md border border-slate-400">
                        <div className="font-bold border-b border-b-slate-300 pb-4">{user.name}</div>
                        <div className="flex flex-col gap-2 indent-4 text-sm border-b border-b-slate-300 pb-4">
                            <div>{user.company.name}</div>
                            <div>{user.website}</div>
                            <div>{user.email}</div>
                        </div>
                        <div className="self-end">
                            <Link className="bg-slate-800 hover:bg-slate-500 py-3 px-6 rounded-md text-sm" href={`/users/${user.id.toString()}`}>View</Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}