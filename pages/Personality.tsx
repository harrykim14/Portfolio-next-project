import Image from 'next/image'
import Layout from '../components/Layout'
import LaunchIcon from '@material-ui/icons/Launch'
import { useState, useEffect } from 'react'
import { useCustomState } from '../context/StateProvider'
import ProfileDetails from '../public/static/page-details.json';

const Personality = () => {

  type personalityType = {
    title: string
    description: string
  }

  const state = useCustomState()
  const [ personaility, setPersonality ] = useState({} as personalityType)

  useEffect(() => {
    let changedLanguage = state.language
    setPersonality(state => ProfileDetails.Personality[changedLanguage])
  }, [])

  return (
    <Layout title="Personality">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <h1 className="title-font mx-2 mb-4 xs:text-2xl sm:text-3xl md:text-4xl font-extrabold leading-10 tracking-tight">
            {personaility && personaility.title}
            {` `}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="www.tanagement.co.kr/"
              target="_blank"
            >
              <LaunchIcon />
            </a>
          </h1>
          <div className="flex mt-4 mx-12">
            <div className="w-72 h-1 rounded-full bg-gray-300 inline-flex"></div>
          </div>
          <div className="flex xs:flex-col lg:flex-col xl:flex-row justify-between align-item-center my-6 mx-8  ">
            <div className="sm:w-11/12 md:w-10/12 xl:w-1/2 xs:mb-4 mx-4 rounded border-solid border-2 border-gray-200">
              <Image
                src="/personality/tanagement01.JPG"
                width={1000}
                height={750}
                alt="Personality Graph"
                loading="eager"
              />
            </div>
            <div className="sm:w-11/12 md:w-10/12 lg: xl:w-1/2 xs:mb-4 mx-4 rounded border-solid border-2 border-gray-200">
              <Image
                src="/personality/tanagement02.JPG"
                width={1000}
                height={750}
                alt="Personality Detail"
                loading="eager"
              />
            </div>
          </div>
          <hr />
          <div className="text-base leading-relaxed px-12 py-8 mx-2 mb-4 sm:text-base md:text-xl">
          {personaility.description && personaility.description.split('\n').map((line, idx) => {
            return (<span key={idx}>{line}<br/></span>)
          })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Personality
