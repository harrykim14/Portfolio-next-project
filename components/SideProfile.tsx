import { useState, useEffect } from 'react'

import Image from 'next/image'
import GitHubIcon from '@material-ui/icons/GitHub'

const SideProfile = () => {

  const [ textVisible, isTextVisible ] = useState(true)

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
      return () => { // cleanup 
        window.removeEventListener('resize', handleResize);
      }
    }
  }, []);

  const handleResize = () => {
    window.innerWidth > 850 ? isTextVisible(true) : isTextVisible(false)
  }



  return ( 
    <div className="h-full bg-gray-50" >
      <div className="flex items-center justify-center p-2 py-10">
      <Image
        src="/avatar.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full m-2"
      />
      </div>

      { textVisible ?
        <div>
        <span className="flex items-center justify-center font-mono font-bold text-2xl m-2">
        Harry Kim
      </span>
      <span className="flex items-center justify-center font-mono text-gray-600 text-base m-2 pl-6">
        Interested In Front-end 
      </span>
      <div className="flex items-center justify-center">
        <a 
            href="https://github.com/harrykim14"
            className="cursor-pointer hover:opacity-80 "    
        >
          <GitHubIcon className="mr-2"/>
          <span className="text-lg">GitHub</span>
        </a>
      </div>
      </div>
      : 
      <div className="flex items-center justify-center">
        <a 
            href="https://github.com/harrykim14"
            className="cursor-pointer hover:opacity-80 "    
        >
          <GitHubIcon className="mr-2"/>
        </a>
      </div>
      }
    </div>
  )
}

export default SideProfile
