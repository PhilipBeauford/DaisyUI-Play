import Head from "next/head";


export default function Home() {
  return (
    
    <div className="flex flex-col justify-center items-center h-screen w-screen">

      <div className="block">
        <h1 className="block">Welcome to Bare NextJS & Tailwind CSS!</h1>
      </div>

      <div>
        <a className="block px-3 py-3
          text-sm font-semibold text-center
          text-white uppercase transition
          duration-200 ease-in-out
          bg-indigo-500 rounded-lg
          cursor-pointer
          hover:bg-indigo-900">Tailwind Button
        </a>
      </div>

      <div>
        <button className='btn btn-primary'>daisyUI Button</button>
      </div>
        
      
      
    </div>
  );
}
