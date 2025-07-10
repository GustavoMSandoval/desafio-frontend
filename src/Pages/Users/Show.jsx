import { Link, useParams } from "react-router-dom"
import Button from "../../Components/Button"
import { useEffect, useState } from "react";

export default function Show() {
  
  const { id } = useParams();

  const [user, setUser] = useState();

  async function getUser() {
      const res = await fetch(`/api/usuarios/${id}`)

      const data = await res.json()
      
      if(res.ok) {
        setUser(data);
      }

  }  

  useEffect(() => {
    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form className="w-3xl mx-auto my-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Informações do usuário</h2>
        { user ? (<>
        <div className="col-span-full">
          <div className="mt-2 flex items-center justify-center gap-x-3">
            <svg className="size-48 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </div>
        </div><div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm/6 font-medium text-gray-900">Nome</label>
              <div className="mt-2">
                <div className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.name}</div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label className="block text-sm/6 font-medium text-gray-900">Email</label>
              <div className="mt-2">
                <div className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.email}</div>
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-sm/6 font-medium text-gray-900">Biografia</label>
              <div className="mt-2">
                <p className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.biography}</p>
              </div>
            </div>
            <div className="col-span-full">
              <label className="block text-sm/6 font-medium text-gray-900">Endereço da rua</label>
              <div className="mt-2">
                <div className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.street}</div>
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm/6 font-medium text-gray-900">Bairro</label>
              <div className="mt-2">
                <div className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.neighborhood}</div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm/6 font-medium text-gray-900">Cidade</label>
              <div className="mt-2">
                <div className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.city}</div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm/6 font-medium text-gray-900">Estado</label>
              <div className="mt-2">
                <div className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">{user.state}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center mt-4 gap-2">
            <Link to="/" className="underline px-2">Voltar</Link>
            <Link to={`/usuarios/edit/${id}`}><Button text="Editar"/></Link>
          </div>
        </>) : (<p>Usuário não encontrado</p>)}
        </div>
    </form>


  )
}
