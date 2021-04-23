import { useEffect } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useCustomState, useCustomDispatch } from '../context/StateProvider'

const Home: React.FC = () => {
  const discribeTextStyle =
    'text-base leading-relaxed px-12 mx-2 mb-4 sm:text-base md:text-xl'
  const titleStyle =
    'title-font mx-2 mb-4 text-4xl font-extrabold leading-10 tracking-tight'

  const state = useCustomState()
  const dispatch = useCustomDispatch()

  return (
    <Layout title="Portfolio">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>Harry Kim</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-yellow-400 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
          1989. 10. 21. / Seoul, Korea
          <br />
          Tel. 010-8**6-2**3
          <br />
          Email. harrykim14@korea.ac.kr
          <br />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>Education</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-indigo-400 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
          2015.03 ~ 2017.03 Korea Univ. (All but dissertation)
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>Introduce</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-32 h-1 rounded-full bg-gray-400 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
          Learned Java as the first programming language since Feb 2020 through
          country supported IT bootcamp. <br />
          After bootcamp, interests was shifted to Javascript and started to
          learn front-end knowledge. <br />
          Fully immersed at web programming, mainly front-end technology.
        </div>
        <div className="max-w-6xl mx-auto px-4 py-10 ">
          <h1 className={titleStyle}>GitHub Contributions</h1>
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
