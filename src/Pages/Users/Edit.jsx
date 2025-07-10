import { Link, useNavigate, useParams } from "react-router-dom"
import Button from "../../Components/Button"
import { useEffect, useState } from "react";
import ErrorMessage from "../../Components/ErrorMessage";

export default function Edit() {

  const navigate = useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    biography: '',
    date_birth: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({});

  async function getUser() {
      const res = await fetch(`/api/usuarios/${id}`)

      const data = await res.json()
      console.log(data)
      if(res.ok) {
        setFormData({
          name: data.name,
          email: data.email,
          biography: data.biography,
          date_birth: data.date_birth,
          street: data.street,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
        });
      }

  }  

  async function handleEdit(e) {
    e.preventDefault();
    const res = await fetch(`/api/usuarios/${id}`, {
      method: 'put',
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    console.log(data.name)
    

    if(data.errors) {
      setErrors(data.errors);
    } else {
      navigate("/");
    }

  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <form onSubmit={handleEdit} className="w-3xl mx-auto my-8">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Editar informações do usuário</h2>
          <div className="col-span-full">
          <div className="mt-2 flex items-center justify-center gap-x-3">
            <svg className="size-48 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label for="name" className="block text-sm/6 font-medium text-gray-900">Nome</label>
                <div className="mt-2">
                  <input type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.name && <ErrorMessage message={errors.name}/>}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label for="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                <div className="mt-2">
                  <input type="text" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.email && <ErrorMessage message={errors.email}/>}
                </div>
              </div>
              <div className="col-span-full">
                  <label for="biography" className="block text-sm/6 font-medium text-gray-900">Biografia</label>
                  <div className="mt-2">
                      <textarea 
                      name="biography" 
                      id="biography" 
                      value={formData.biography}
                      onChange={(e) => setFormData({...formData, biography: e.target.value})} 
                      rows="3" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                      {errors.biography  && <ErrorMessage message={errors.biography}/>}
                  </div>
              </div>
              <div className="sm:col-span-2">
                <label for="date_birth" className="block text-sm/6 font-medium text-gray-900">Data nascimento</label>
                <div className="mt-2">
                  <input type="date" 
                  name="date_birth" 
                  id="date_birth" 
                  value={formData.date_birth} 
                  onChange={(e) => setFormData({...formData, date_birth: e.target.value})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.date_birth && <ErrorMessage message={errors.date_birth}/>}
                </div>
              </div>
              <div className="col-span-full">
                <label for="street" className="block text-sm/6 font-medium text-gray-900">Endereço da rua</label>
                <div className="mt-2">
                  <input type="text" 
                  name="street" 
                  id="street" 
                  value={formData.street} 
                  onChange={(e) => setFormData({...formData, street: e.target.value})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.street && <ErrorMessage message={errors.street}/>}
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label for="neighborhood" className="block text-sm/6 font-medium text-gray-900">Bairro</label>
                <div className="mt-2">
                  <input type="text" 
                  name="neighborhood" 
                  id="neighborhood" 
                  value={formData.neighborhood}
                  onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.neighborhood && <ErrorMessage message={errors.neighborhood}/>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="city" className="block text-sm/6 font-medium text-gray-900">Cidade</label>
                <div className="mt-2">
                  <input type="text" 
                  name="city" 
                  id="city" 
                  value={formData.city} 
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.city && <ErrorMessage message={errors.city}/>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="state" className="block text-sm/6 font-medium text-gray-900">Estado</label>
                <div className="mt-2">
                  <input type="text" 
                  name="state" 
                  id="state" 
                  value={formData.state} 
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  {errors.state && <ErrorMessage message={errors.state}/>}
                </div>
              </div>
            </div>
        <div className="flex justify-end items-center mt-4 gap-2">
            <Link to="/" className="underline px-2">Cancelar</Link>
            <Button text="Salvar"/></div>
        </div>
    </form>


  )
}
