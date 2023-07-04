import Image from 'next/image';
import logo from '../Images/icon.png';

export default function Header() {
    return (
      <nav className="min-h-6vh min-w-full flex justify-between border-gray-200 border-solid border-b-2">
        <div className='relative flex jusify-between h-20 w-40 border-gray-200 border-solid border-r-2'>
          <Image
            src={logo}
            alt="Lot Designs"
            className='object-contain py-2'
            fill
          />
        </div>
        <ul className='min-h-full flex items-center uppercase text-sm font-bold pr-8'>
          <li className='px-5'><a href="#">Home</a></li>
          <li className='px-5'><a href="#">Works</a></li>
          <li className='px-5'><a href="#">About</a></li>
          <li className='px-5'><a href="#">Contact</a></li>
        </ul>
      </nav>
    )
  }
  