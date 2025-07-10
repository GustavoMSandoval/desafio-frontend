import { Link } from "react-router-dom";

export default function Home() {
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
                        CEP
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Bio
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                        Avatar
                    </td>
                    <td className="px-6 py-4">
                        Nome
                    </td>
                    <td className="px-6 py-4">
                        Email
                    </td>
                    <td className="px-6 py-4">
                        Data de nascimento
                    </td>
                    <td className="px-6 py-4">
                        Cep
                    </td>
                    <td className="px-6 py-4">
                        Bio
                    </td>
                    <td className="px-6 py-4 flex gap-1.5">
                        <Link to="usuarios/1" className="font-medium text-green-600  hover:underline">Visualizar</Link>
                        <a className="font-medium text-red-600  hover:underline">Deletar</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

  )
}
