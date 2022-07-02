import Link from 'next/link'
import React from 'react'


type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='bg-orange-300 flex px-4 space-x-3' >
            <li><Link href="/products" className='hover:bg-blue-400 hover:text-white'>menu 1</Link></li>
            <li><Link href="" className='hover:bg-blue-400 hover:text-white'>menu 2</Link></li>
            <li><Link href="" className='hover:bg-blue-400 hover:text-white'>menu 3</Link></li>
            <li><Link href="" className='hover:bg-blue-400 hover:text-white'>menu 4</Link></li>
        </ul>
    </div>
  )
}

export default Header