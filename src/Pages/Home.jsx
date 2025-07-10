import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([])

    async function getUsers() {
        const res = await fetch('/api/usuarios')

        const data = await res.json()

        if(res.ok) {
            setUsers(data);
        }
    }  

    useEffect(()=>{
        getUsers();
    }, []);

  return (
    <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
        <div className="flex justify-end p-2 ">
          <Link to="/create" className="bg-blue-500 text-white p-2 rounded-2xl">Criar usuário</Link>       
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Avatar
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nome
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Data de Nascimento
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Cidade
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0  ? users.map(user => (
                <tr key={user.id} className="bg-white border-b  border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                        {user.avatar ? user.avatar : 
                        <svg className="size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>}
                    </td>
                    <td className="px-6 py-4">
                        {user.name}
                    </td>
                    <td className="px-6 py-4">
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                        {new Date(user.date_birth).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                        {user.city}
                    </td>
                    <td className="px-6 py-4">
                        {user.state}
                    </td>
                    <td className="px-6 py-8 flex gap-1.5 items-center">
                        <Link to={`/usuarios/${user.id}`} className="font-medium text-green-600  hover:underline">Visualizar</Link>
                        <a className="font-medium text-red-600  hover:underline">Deletar</a>
                    </td>
                </tr>
                )) : <p className="text-red-500 p-4">Nenhum usuário encontrado</p>}
            </tbody>
        </table>
    </div>

  )
}
