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
  const mainTitleStyle = 'title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-3xl sm:leading-none md:text-4xl lg:text-5xl xl:text-6xl'
  const subTitleStyle = 'leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
  const wrapContainerStyle = 'mb-4 mx-4 md:w-1/3 md:my-3 lg:mx-8 lg:w-1/4 flex flex-col sm:flex-row'
  const langCardStyle = 'rounded p-4 shadow-lg bg-yellow-200 min-w-full min-h-full'
  const frlibCardStyle = 'rounded p-4 shadow-lg bg-indigo-200 min-w-full min-h-full'
  const dbCardStyle = 'rounded p-4 shadow-lg bg-gray-200 min-w-full min-h-full'
  
  return (
    <Layout title="Skill List">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="text-center mb-10">
          <h1 className={mainTitleStyle}>
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Skills are scaled with Fluent, Advanced, Intermediate and Beginner.
          </p>
          <br/>
          <p className={subTitleStyle}>
            Languages
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-400 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className={wrapContainerStyle}>
            <div className={langCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/java.png"
                width={80}
                height={80}
                alt="java icon"
              />
              <div className="flex-grow ">
                <h2 className="text-xl title-font font-medium mb-3 font-semibold">
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
          <div className={wrapContainerStyle}>
            <div className={langCardStyle}>
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
          <div className={wrapContainerStyle}>
            <div className={langCardStyle}>
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
          <div className={wrapContainerStyle}>
            <div className={langCardStyle}>
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
          <div className={wrapContainerStyle}>
            <div className={langCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/python.png"
                width={80}
                height={80}
                alt="python icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                python (Advanced)
                </h2>
                <ReactStars
                  {...fluentLevel.Advanced}
                />
              </div>
            </div>
          </div>
          <div className={wrapContainerStyle}>
            <div className={langCardStyle}>
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
          <p className={subTitleStyle}>
            Libraries & Frameworks
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-400 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/bootstrap.png"
                width={80}
                height={80}
                alt="bootstrap icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Bootstrap (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
              </div>
            </div>
          </div>          
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/jquery.jpg"
                width={80}
                height={80}
                alt="jquery icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  jQuery library (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
              </div>
            </div>
          </div>          
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
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
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/react.png"
                width={80}
                height={80}
                alt="react icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  React library (Fluent)
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
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/react.png"
                width={80}
                height={80}
                alt="react native icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  React Native (Intermediate)
                </h2>
                <ReactStars
                  {...fluentLevel.Intermediate}
                />
              </div>
            </div>
          </div>
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/styledcomponents.png"
                width={80}
                height={80}
                alt="styled components icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Styled Components (Advanced)
                </h2>
                <ReactStars
                  {...fluentLevel.Advanced}
                />
              </div>
            </div>
          </div>
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
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
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
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
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/djangorestframework.png"
                width={80}
                height={80}
                alt="django rest framework icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  django REST framework (Beginner)
                </h2>
                <ReactStars
                  {...fluentLevel.Beginner}
                />
              </div>
            </div>
          </div>
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/tailwindcss.png"
                width={80}
                height={80}
                alt="tailwindcss icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  tailwindcss (Advanced)
                </h2>
                <ReactStars
                  {...fluentLevel.Advanced}
                />
              </div>
            </div>
          </div>
          <div className={wrapContainerStyle}>
            <div className={frlibCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/deno.png"
                width={80}
                height={80}
                alt="deno icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  deno framework (Beginner)
                </h2>
                <ReactStars
                  {...fluentLevel.Beginner}
                />
              </div>
            </div>
          </div>
        </div>
        

        <div className="text-center mb-10">
          <p className={subTitleStyle}>
            Database
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
        <div className={wrapContainerStyle}>
            <div className={dbCardStyle}>
              <Image
                className="block rounded-full mr-2"
                src="/logos/oracledb.png"
                width={80}
                height={80}
                alt="oracle db icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Oracle Database (Fluent)
                </h2>
                <ReactStars
                  {...fluentLevel.fluent}
                />
              </div>
            </div>
          </div>          
          <div className={wrapContainerStyle}>
            <div className={dbCardStyle}>
              <Image
                className="block rounded-full mr-2"
                src="/logos/mongodb.png"
                width={80}
                height={80}
                alt="mongodb db icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Mongo DB (Intermediate)
                </h2>
                <ReactStars
                  {...fluentLevel.Intermediate}
                />
              </div>
            </div>
          </div>
          <div className={wrapContainerStyle}>
            <div className={dbCardStyle}>
              <Image
                className="rounded-full"
                src="/logos/firebase.png"
                width={80}
                height={80}
                alt="firebase icon"
              />
              <div className="flex-grow ">
                <h2 className=" text-xl title-font font-medium mb-3 font-semibold">
                  Google firebase (Advanced)
                </h2>
                <ReactStars
                  {...fluentLevel.Advanced}
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
