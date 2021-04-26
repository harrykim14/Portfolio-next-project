import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useCustomState } from '../context/StateProvider'
import ProfileDetails from '../public/static/page-details.json';

const Home: React.FC = () => {
  const discribeTextStyle =
    'text-base leading-relaxed px-12 mx-2 mb-4 sm:text-base md:text-xl'
  const titleStyle =
    'title-font mx-2 mb-4 text-4xl font-extrabold leading-10 tracking-tight'

  type profileDetailType = {
    title : string,
    description?: string
  }

  type profileType = {
    name, education, introduce, GitHubContributions: profileDetailType

  }

  const state = useCustomState()
  const [ profile, setProfile ] = useState({} as profileType)

  useEffect(() => {
  
    let changedLanguage = state.language
    setProfile(state => ProfileDetails.Profile[changedLanguage])

  }, [state.language])  

  return (
    <Layout title="Portfolio">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>{profile.name && profile.name.title}</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-yellow-400 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
        {profile.name && profile.name.description.split('\n').map((line,idx) => {
            return (<span key={idx}>{line}<br/></span>)
          })}
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>{profile.education && profile.education.title}</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-indigo-400 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
          {profile.education && profile.education.description}
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>{profile.introduce && profile.introduce.title}</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-gray-400 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
        {profile.introduce && profile.introduce.description.split('\n').map((line,idx) => {
            return (<span key={idx}>{line}<br/></span>)
        })}
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>{profile.GitHubContributions && profile.GitHubContributions.title}</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-green-400 inline-flex"></div>
          </div>
        </div>
        <div className="px-20">
          <Image
            src="/GitHubCommits.JPG"
            width={1024}
            height={240}
            alt="GitHub Contributions"
          />
        </div>
      </div>
    </Layout>
  )
}
export default Home
