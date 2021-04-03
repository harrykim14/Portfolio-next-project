import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const Skills = () => {
  return (
    <Layout title="Skill List">
      <div className="max-w-6xl mx-auto px-5 py-12 ">
        <div className="text-center mb-10">
          <h1 className=" title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
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
            <div className="rounded bg-yellow-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
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
                <p className="leading-relaxed text-sm text-justify">
                  {` The first programming language of me from Feb 2020. Well known grammar and data structures. My first team project was a memo application using java`}
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-yellow-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
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
                <p className="leading-relaxed text-sm text-justify">
                  {`Well write html document and well apply css properties to DOM elements.`}
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-yellow-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
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
                <p className="leading-relaxed text-sm text-justify">
                  {`My main programming language now, deeply interested in vast JavaScript ecosystem. Well use modern ES6 and ES7, ES8 grammar. Well understood asynchronous programming.`}
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-yellow-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
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
                <p className="leading-relaxed text-sm text-justify">
                  {`A strict syntactical superset of JavaScript, it helps to use javascript more safely. 
                  Known how to use interface and Generics, but not fluently.`}
                </p>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
            <div className="rounded bg-yellow-200 p-4 transform translate-x-6 -translate-y-6 shadow-lg">
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
                <p className="leading-relaxed text-sm text-justify">
                  {`GraphQL is a query language for APIs, it gets data efficiently. Have been used with django REST API that built by own.`}
                </p>
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
                <p className="leading-relaxed text-sm text-justify">
                  {`Well used powerful javascript library, have been do a team project with jQuery.`}
                </p>
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
                <p className="leading-relaxed text-sm text-justify">
                  {`This powerful framework helped me to build a web project. My team project was built with this framework using Mybatis and etc.`}
                </p>
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
                <p className="leading-relaxed text-sm text-justify">
                  {`Most famous javascript library(State of CSS 2020), Libraries that made me interested in JavaScript. 
                  Mostly using React Hook now, build components with function component. Recently interests at how to apply Typescript`}
                </p>
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
                <p className="leading-relaxed text-sm text-justify">
                  {`My first DBMS(database management system), Possible to modeling table and get data with using queries.`}
                </p>
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
                <p className="leading-relaxed text-sm text-justify">
                  {`Document-oriented DB program, classify to NoSQL database. Well known how to model and get data with mongoose library.`}
                </p>
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
                <p className="leading-relaxed text-sm text-justify">
                  {`Firebase is a real-time database that easy to use. Also provide a free cloud storage for save images or document.
                  Have been experienced to make a simple chat-app with firebase.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills
