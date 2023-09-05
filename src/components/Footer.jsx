import React from 'react'
import { GithubIcon, LinkedinIcon, Wallet } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='w-full flex sm:flex-row gap-6 flex-col items-center justify-between p-4 border-t-[1px] border-gray-300'>
        <div>
           <p className=' text-gray-600'>@2023, Sebastián Pallero</p>
        </div>
        <div className='flex flex-row gap-8 items-center justify-center'>
            <a href="https://github.com/Sebaspallero" target="_blank" rel="noreferrer">
                <GithubIcon size={25} color='#4b5563' className='cursor-pointer'/>
            </a>
            <a href='https://www.linkedin.com/in/sebastian-pallero-or%C3%ADa/' target="_blank" rel="noreferrer">
                <LinkedinIcon size={25} color='#4b5563' className='cursor-pointer'/>
            </a>
            <a href='https://mpago.la/2Ym6BQm' target="_blank" rel="noreferrer">
                <Wallet size={25} color='#4b5563' className='cursor-pointer'/>
            </a>
        </div>
    </footer>
  )
}

export default Footer