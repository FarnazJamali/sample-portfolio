import { useForm } from 'react-hook-form'
import { FA_IR } from '../Language'
import pb from '../lib/pocketbase'

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // const sendMessage = {}

//   const record = await pb.collection('demo').create({
//     title: 'Lorem ipsum',
// });
  return (
    <div id="contact" className="bg-teal-100/50 py-14">
      <h3 className="font-medium text-center mb-10">{FA_IR.Contact}</h3>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex-col md:w-[700px] md:mx-auto mx-10"
      >
        <input
          type="email"
          className="block rounded-md w-full p-2"
          {...register('email')}
          placeholder={FA_IR.Email}
        />
        <textarea
          
          id="message"
          className="rounded-md p-3 my-4 w-full"
          rows={5}
          {...register('message')}
          placeholder={FA_IR.MessageText}
        />
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
