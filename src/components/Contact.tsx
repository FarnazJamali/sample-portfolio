import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FA_IR } from '../Language'
import { schema } from './constant/Contact'
import PocketBase from 'pocketbase'

const url = 'https://sample-portfolio.pockethost.io/'
const client = new PocketBase(url)

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type FormData = yup.InferType<typeof schema>
const defaultValues = { email: '', message: '' }

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  })

  const notify = () => toast.success(FA_IR.ToastMessageSent)

  //* Post request for sending message
  const record = async ({
    email,
    message,
  }: {
    email: string
    message: string
  }) => {
    const response = await client
      .collection('Message')
      .create({ email, message })
    response.collectionId ? notify() : console.log('error')
  }

  return (
    <div id="contact" className="bg-teal-100/50 py-14">
      <h3 className="font-medium text-center mb-10">{FA_IR.Contact}</h3>
      <div className="flex-col md:w-[700px] md:mx-auto m-5">
        <p>{FA_IR.ContactInfo}</p>
        <address>
          <a className="my-2 block text-sm" href="mailto:Abolqeisi@gmail.com">
            {FA_IR.ElaheEmail}
          </a>
          <a className="text-sm" href="tel:989336563333">
            {FA_IR.ElahePhone}
          </a>
        </address>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          record(data).finally(reset)
        })}
        className="flex-col md:w-[700px] md:mx-auto mx-10"
      >
        <input
          type="email"
          className="block rounded-md w-full p-2"
          {...register('email')}
          placeholder={FA_IR.Email}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <textarea
          id="message"
          className="rounded-md p-3 my-4 w-full"
          rows={5}
          {...register('message')}
          placeholder={FA_IR.MessageText}
        />
        {errors.message && (
          <p className="text-red-600">{errors.message.message}</p>
        )}
        <button
          type="submit"
          className="block rounded-md p-3 w-full bg-teal-600 text-white"
        >
          {FA_IR.Message}
        </button>
      </form>
    </div>
  )
}
