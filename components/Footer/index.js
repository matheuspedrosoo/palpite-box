import { getFontDefinitionFromNetwork } from 'next/dist/next-server/server/font-utils'
import React from 'react'


const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container max-auto text-center font-bold text-white'>
        Projeto desenvolvido por: Matheus Pedroso / {' '}
        <a className='hover:underline' href='https://www.linkedin.com/in/matheupedroso/'>Linkedin</a> / {' '}
        <a className='hover:underline' href='https://github.com/matheuspedrosoo'>Github</a>
        <div className='mt-4'>
          <img className='inline p-4 ' height="50" width="200" src='logo_semana_fsm.png' />
          <img className='inline p-4' height="50" width="200" src='logo_devpleno.png' />
        </div>
      </div>
    </div>

  )

}


export default Footer