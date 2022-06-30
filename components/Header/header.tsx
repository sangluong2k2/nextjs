import React from 'react'


type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='bg-orange-300 flex px-4 space-x-3' >
            <li><a href="" className='hover:bg-blue-400 hover:text-white'>menu 1</a></li>
            <li><a href="" className='hover:bg-blue-400 hover:text-white'>menu 2</a></li>
            <li><a href="" className='hover:bg-blue-400 hover:text-white'>menu 3</a></li>
            <li><a href="" className='hover:bg-blue-400 hover:text-white'>menu 4</a></li>
        </ul>
    </div>
  )
}

export default Header