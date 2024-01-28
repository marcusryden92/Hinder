import loginImg from '../assets/login.jpg';

export default function SignUp() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img
          className='w-full h-full object-cover'
          src={loginImg}
          alt=''
        />
      </div>

      <div className=' bg-gradient-to-r from-indigo-300 to-purple-500 flex flex-col justify-center'>
        <form className=' max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center'>
          <h2 className='text-4xl dark:text-black mb-6 font-bold'>
            REGISTER
          </h2>
          <div className=' flex flex-col py-2 text-black'>
            <label>User Name</label>
            <input
              className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
              type='text'
            />
          </div>
          <div className=' flex flex-col py-2 text-black'>
            <label>Password</label>
            <input
              className='p-2 rounded-lg bg-gray-200 mt-2  focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
              type='password'
            />
          </div>
          <div className=' flex flex-col py-2 text-black'>
            <label>Description</label>
            <textarea
              className=' resize-none rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none'
              placeholder='Some words to describe yourself ...'
              type='text'
            />
          </div>
          <div className='flex justify-between py-2'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' />
              Remember me
            </p>
            <p>Forgot password</p>
          </div>
          <button className='hover:bg-pink-400 w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/40 text-white font-semibold rounded-lg'>
            SIGN UP
          </button>
          <p>
            Already member?{' '}
            <span>
              <a href='/SignIn' className=' font-bold'>
                Click here!
              </a>
            </span>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}
