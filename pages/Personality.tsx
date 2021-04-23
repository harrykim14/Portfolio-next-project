import Image from 'next/image'
import Layout from '../components/Layout'
import { useState } from 'react'

const Personality = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <Layout title="Personality">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <h1 className="title-font mx-2 mb-4 xs:text-2xl sm:text-3xl md:text-4xl font-extrabold leading-10 tracking-tight">
            Personality diagnosis (w/
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="www.tanagement.co.kr/"
              target="_blank"
            >
              Tanagement
            </a>
            )
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
                Two characteristics, that are <span className="font-bold">"Research"</span> and <span className="font-bold">"Adjustment"</span> represents me. As a result of personality diagnosis at Tanagement, Would like to think deeply, likely do investigate essential problem and research efficient method(to work). <br/>
                Also prefer to summary as own words while studying. Clean up the goal of team (or personal) and prefer planned progress. Separate work with priority rule when complex situation occur. According to the result, plan a next work through feedback of recently result.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Personality
