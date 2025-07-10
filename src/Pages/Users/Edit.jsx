import { Link } from "react-router-dom"
import Button from "../../Components/Button"

export default function Edit() {
  
  return (
    <form className="w-3xl mx-auto my-8">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">Editar informações do usuário</h2>
          <div class="col-span-full">
          <div class="mt-2 flex items-center justify-center gap-x-3">
            <svg class="size-48 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label for="name" class="block text-sm/6 font-medium text-gray-900">Nome</label>
              <div class="mt-2">
                <input type="text" name="name" id="name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
              <div class="mt-2">
                <input type="text" name="email" id="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
              <div class="mt-2">
                <input type="text" name="password" id="password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="col-span-full">
                <label for="biography" class="block text-sm/6 font-medium text-gray-900">Biografia</label>
                <div class="mt-2">
                    <textarea name="biography" id="biography" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                </div>
            </div>
            <div class="col-span-full">
              <label for="street" class="block text-sm/6 font-medium text-gray-900">Endereço da rua</label>
              <div class="mt-2">
                <input type="text" name="street" id="street"  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="neighborhood" class="block text-sm/6 font-medium text-gray-900">Bairro</label>
              <div class="mt-2">
                <input type="text" name="neighborhood" id="neighborhood" autocomplete="address-level2" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="city" class="block text-sm/6 font-medium text-gray-900">Cidade</label>
              <div class="mt-2">
                <input type="text" name="city" id="city" autocomplete="address-level1" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="state" class="block text-sm/6 font-medium text-gray-900">Estado</label>
              <div class="mt-2">
                <input type="text" name="state" id="state" autocomplete="state" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
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
