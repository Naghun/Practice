import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-green-900 bg-gray-500 border-8 border-blue-50">Hello world!</h1>
      <h3 className='text-red-700 bg-white'>This one is reddish</h3>
      <h5 className='text-yellow-300 bg-blue-300'>barely seen</h5>
      <h5 className='text-mycol bg-blue-300'>barely seen</h5>
      <p className='leading-normal capitalize truncate'>I ja sam lud sto sam uopste pokusavao</p>
      <p className='bg-red-700 p-5 pr-10 mr-4 text-white font-bold'>Klase za padding</p>
      <div className='min-w-0.5 bg-green-300'>ovdje nesto</div>
    </>
  )
}

export default App
