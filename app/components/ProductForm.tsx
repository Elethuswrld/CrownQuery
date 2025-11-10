'use client'

import { useFormState } from 'react-dom'
import { addProduct, AddProductState } from '@/app/actions'

const initialState: AddProductState = {
  message: null,
}

export function ProductForm() {
  const [state, formAction] = useFormState(addProduct, initialState)

  return (
    <form action={formAction} className="mt-8 max-w-md mx-auto">
      <div className="grid grid-cols-1 gap-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <div className="mt-1">
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </div>
      {state?.message && <p className="mt-4 text-center text-sm text-green-600">{state.message}</p>}
      {state?.errors?.name && <p className="mt-4 text-center text-sm text-red-600">{state.errors.name[0]}</p>}
      {state?.errors?.price && <p className="mt-4 text-center text-sm text-red-600">{state.errors.price[0]}</p>}
    </form>
  )
}
