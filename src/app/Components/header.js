import Image from 'next/image';

const headerStyle = {
  minHeight: '7vh',
  objectFit: 'fill',
  position: 'fixed',
  background: 'white',
  zIndex: 9,
}

const logo = {
  backgroundImage: "url('/Images/icon.png')",
    width: '100%',
    height: 'auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '5px',
}

export default function Header() {
    return (
      <nav  style={headerStyle} className="min-w-full flex justify-between border-gray-200 border-solid border-b-2">
        <div className='relative flex jusify-between h-20 w-40 border-gray-200 border-solid border-r-2'>
          <div style={logo} className='object-contain py-2'>  </div>
        </div>
        <ul className='hidden min-h-full flex items-center uppercase text-sm font-bold pr-8'>
          <li className='px-5'><a href="#">Home</a></li>
          <li className='px-5'><a href="#">Works</a></li>
          <li className='px-5'><a href="#">About</a></li>
          <li className='px-5'><a href="#">Contact</a></li>
        </ul>
      </nav>
    )
  }
  