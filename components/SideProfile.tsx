import Link from 'next/link'
import Image from 'next/image'
import GitHubIcon from '@material-ui/icons/GitHub'

const SideProfile: React.FC = () => {
  return ( 
    <div className="h-screen bg-gray-50">
      <div className="flex items-center justify-center p-2 py-10">
      <Image
        src="/avatar.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full m-2"
      />
      </div>
      <span className="flex items-center justify-center font-mono font-bold text-2xl m-2">
        Harry Kim
      </span>
      <span className="flex items-center justify-center font-mono text-gray-600 text-base m-2">
        Interested In Front-end 
      </span>
      <div className="flex items-center justify-center">
        <a 
            href="https://github.com/harrykim14"
            className="cursor-pointer hover:opacity-80 "    
        >
          <GitHubIcon className="mr-2"/>
          <span className="text-lg">GitHub Link</span>
        </a>
      </div>
    </div>
  )
}

export default SideProfile
