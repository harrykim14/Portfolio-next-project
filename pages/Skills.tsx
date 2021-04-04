import Image from 'next/image'
import Layout from '../components/Layout'
import ReactStars from "react-rating-stars-component";

const Skills = () => {

  const fluentLevel = {
    fluent : {
      size: 30,
      value: 5,
      edit: false
    },
    Intermediate : {
      size: 30,
      value: 4,
      edit: false
    },
    Advanced : {
      size: 30,
      value: 3,
      edit: false
    },
    Beginner : {
      size: 30,
      value: 2,
      edit: false
    }
  }
  return (
    <Layout title="Skill List">
      <div className="max-w-6xl mx-auto px-5 py-12 ">
        <div className="text-center mb-10">
          <h1 className="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
            Skills are scaled with Fluent, Advanced, Intermediate and Beginner.
          </p>
          <br/>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
            Languages
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-400 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-pink-100 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/java.png"
                width={80}
                height={80}
                alt="java icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Java (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
                <span>
                  ▶ Did a project with Java(Spring)
                </span>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-pink-100 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="block rounded-full mr-2"
                src="/logos/html.png"
                width={80}
                height={80}
                alt="html and css icon"
              />
              <Image
                className="block rounded-full"
                src="/logos/css.png"
                width={80}
                height={80}
                alt="html and css icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  HTML, CSS (Fluent) 
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-pink-100 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/js.png"
                width={80}
                height={80}
                alt="javascript icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Javascript (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
                <span>
                  ▶ Main language now
                </span>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-pink-100 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/ts.png"
                width={80}
                height={80}
                alt="typescripe icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Typescript (Intermediate)
                </h2>
                <ReactStars
                  {...fluentLevel.Intermediate}
                />
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-pink-100 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/graphql.png"
                width={80}
                height={80}
                alt="graphql icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                GraphQL (Beginner)
                </h2>
                <ReactStars
                  {...fluentLevel.Beginner}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
            Libraries & Frameworks
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-400 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-indigo-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/jquery.jpg"
                width={80}
                height={80}
                alt="jquery icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Jquery (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
              </div>
            </div>
          </div>
          
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-indigo-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/spring.png"
                width={80}
                height={80}
                alt="spring icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Spring Framework (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
                <span>
                  ▶ Did a project with Spring(Java)
                </span>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-indigo-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/react.png"
                width={80}
                height={80}
                alt="react icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  React (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
                <span>
                  ▶ Did a personal web-memo application project
                </span>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-indigo-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/vue.jpg"
                width={80}
                height={80}
                alt="vue.js icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Vue.js (Intermediate)
                </h2>
                <ReactStars
                  {...fluentLevel.Intermediate}
                />
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-indigo-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/nextjs.png"
                width={80}
                height={80}
                alt="nextjs icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  NextJS (Advanced)
                </h2>
                <ReactStars
                  {...fluentLevel.Advanced}
                />
                <span>
                  ▶ This portfolio site built in NextJS
                </span>
              </div>
            </div>
          </div>
        </div>
        

        <div className="text-center mb-10">
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-xl">
            Database
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-gray-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="block rounded-full mr-2"
                src="/logos/oracledb.png"
                width={80}
                height={80}
                alt="oracle db icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Oracle (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
              </div>
            </div>
          </div>          
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-gray-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="block rounded-full mr-2"
                src="/logos/mongodb.png"
                width={80}
                height={80}
                alt="mongodb db icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Mongo DB (Advanced)
                </h2>
                <ReactStars
                  {...fluentLevel.Advanced}
                />
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-gray-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
              <Image
                className="rounded-full"
                src="/logos/firebase.png"
                width={80}
                height={80}
                alt="firebase icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Google firebase (Intermediate)
                </h2>
                <ReactStars
                  {...fluentLevel.Intermediate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills
