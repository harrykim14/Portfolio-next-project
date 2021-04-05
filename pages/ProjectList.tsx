import Image from 'next/image'
import Layout from '../components/Layout'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch';

const ProjectList = () => {
  const discribeTextStyle =
    'text-base leading-relaxed px-12 mx-2 mb-4 sm:text-base md:text-xl'
  const titleStyle =
    'title-font mx-2 mb-4 text-4xl font-extrabold leading-10 tracking-tight'
  const projectNameStyle = 'my-2 font-bold sm:text-lg md:text-xl lg:text-2xl'
  return (
    <Layout title="Project List">
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8 ">
          <h1 className={titleStyle}>Project List</h1>
          <div className="flex mt-4 mx-6">
            <div className="w-48 h-1 rounded-full bg-pink-600 inline-flex"></div>
          </div>
        </div>
        <div className={discribeTextStyle}>
          <h2 className={projectNameStyle}>
            1. Project WeMo {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://github.com/harrykim14/ProjectWeMo"
              target="_blank"
            >
              <GitHubIcon/>
            </a>
            
          </h2>
          <div className="flex flex-wrap flex-row justify-around my-6">
            <Image
              src="/projects/projectwemo1.jpg"
              width={320}
              height={180}
              alt="project wemo login page"
            />
            <Image
              src="/projects/projectwemo2.jpg"
              width={480}
              height={180}
              alt="project wemo main page"
            />
            <Image
              src="/projects/projectwemo3.jpg"
              width={220}
              height={180}
              alt="project wemo chart page"
            />
          </div>
          <p className="mx-8">
            <span className="font-bold">Usage</span> : Java, Oracle DB, Spring
            w/ Mybatis, Tomcat server, Javascript, jQuery, Bootstrap
            <br />
            <span className="font-bold">Describe</span> : First team project at
            IT bootcamp, CRUD are operated with Ajax when user event occur.
            <br />
            <span className="font-bold">Duration</span> : 4 weeks
            <br />
            <span className="font-bold">Participation</span> : 40% (UI/UX, DB
            modeling, Eventhandling functions etc.)
          </p>
        </div>

        <hr />

        <div className={discribeTextStyle}>
          <h2 className={projectNameStyle}>
            2. Seoul Bicycle Place {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://github.com/harrykim14/seoul_bicycle_place"
              target="_blank"
            >
              <GitHubIcon/>
            </a>
          </h2>
          <div className="flex flex-wrap flex-row justify-start my-6 mx-8">
            <Image
              src="/projects/seoulbycicle.jpg"
              width={420}
              height={180}
              alt="seoul bycicle app page"
            />
          </div>
          <p className="mx-8">
            <span className="font-bold">Usage</span> : React (mini project)
            <br />
            <span className="font-bold">Describe</span> : Seoul public rental
            bike named “Ddarungee’, this app shows location of rental place and
            bicycle remains.
            <br />
            <span className="font-bold">Duration</span> : 1 days
            <br />
            <span className="font-bold">Participation</span> : 100% (personal
            mini project)
          </p>
        </div>

        <hr />

        <div className={discribeTextStyle}>
          <h2 className={projectNameStyle}>
            3. Wemo React Project {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://github.com/harrykim14/wemo-react-project"
              target="_blank"
            >
              <GitHubIcon/>
            </a>
          </h2>
          <div className="flex flex-wrap flex-row justify-around my-6">
            <Image
              src="/projects/wemoreactproject1.jpg"
              width={320}
              height={180}
              alt="project wemo login page"
            />
            <Image
              src="/projects/wemoreactproject2.jpg"
              width={300}
              height={140}
              alt="project wemo main page"
            />
            <Image
              src="/projects/wemoreactproject3.jpg"
              width={320}
              height={180}
              alt="project wemo setting page"
            />
             <Image
              src="/projects/wemoreactproject4.jpg"
              width={300}
              height={140}
              alt="project wemo logout page"
            />
          </div>
          <p className="mx-8">
            <span className="font-bold">Usage</span> : React Hook, Mongo DB, Node.js server, Material-ui
            <br />
            <span className="font-bold">Describe</span> : Rebuild the first memo app with React and mongo DB(modeling with Mongoose). Some UI/UX changed and improved user convenience. Also tried TDD method of development.
            <br />
            <span className="font-bold">Duration</span> : 4 weeks
            <br />
            <span className="font-bold">Participation</span> : 100% (personal project)
          </p>
        </div>

        <hr />

        <div className={discribeTextStyle}>
          <h2 className={projectNameStyle}>
            4. Firebase Chat app {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://github.com/harrykim14/bolierplate-class/tree/master/firebase-fourth-class"
              target="_blank"
            >
              <GitHubIcon/>
            </a>
            {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://react-chat-app-c511d.web.app/"
              target="_blank"
            >
              <LaunchIcon/>
            </a>
          </h2>
          <div className="flex flex-wrap flex-row justify-around my-6">
            <Image
              src="/projects/firebasechatapp1.jpg"
              width={260}
              height={180}
              alt="firebase chat app login page"
            />
            <Image
              src="/projects/firebasechatapp2.jpg"
              width={400}
              height={140}
              alt="firebase chat app main page"
            />
          </div>
          <p className="mx-8">
            <span className="font-bold">Usage</span> : React Hook, Node.js server, Google Firebase DB
            <br />
            <span className="font-bold">Describe</span> : A simple chat app with real-time database, Firebase. Front side was built by React Hook.
            <br />
            <span className="font-bold">Duration</span> : 3 weeks
            <br />
            <span className="font-bold">Participation</span> : 100% (personal project)
          </p>
        </div>

        <hr />

        <div className={discribeTextStyle}>
          <h2 className={projectNameStyle}>
            5. NextJS blog with REST API using django REST framework {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://github.com/harrykim14/nextjs-blog-with-django-restapi"
              target="_blank"
            >
              <GitHubIcon/>
            </a>
            {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://nextjs-blog-with-django-restapi.vercel.app/"
              target="_blank"
            >
              <LaunchIcon/>
            </a>
          </h2>
          <div className="flex flex-wrap flex-row justify-around my-6">
            <Image
              src="/projects/nextjsblog1.jpg"
              width={200}
              height={180}
              alt="nextjs blog login page"
            />
            <Image
              src="/projects/nextjsblog2.jpg"
              width={380}
              height={140}
              alt="nextjs blog main page"
            />
            <Image
              src="/projects/nextjsblog3.jpg"
              width={380}
              height={140}
              alt="nextjs todo list page"
            />
          </div>
          <p className="mx-8">
            <span className="font-bold">Usage</span> : Python, django, django REST framework, Javascript, React, NextJs, Tailwind CSS
            <br />
            <span className="font-bold">Describe</span> : Simple blog page with NextJS, To-do list(CRUD) is changed with user event through django REST api modeled by django REST framework.
            <br />
            <span className="font-bold">Duration</span> : 1 weeks
            <br />
            <span className="font-bold">Participation</span> : 100% (personal project)
          </p>
        </div>

        <hr />

        <div className={discribeTextStyle}>
          <h2 className={projectNameStyle}>
            6. GitHub Blog with Hexo framework {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://github.com/harrykim14/harrykim14.github.io"
              target="_blank"
            >
              <GitHubIcon/>
            </a>
            {' '}
            <a
              className="hover:text-gray-400 cursor-pointer"
              href="https://harrykim14.github.io/"
              target="_blank"
            >
              <LaunchIcon/>
            </a>
          </h2>
          <div className="flex flex-wrap flex-row justify-start my-6 mx-8">
            <Image
              src="/projects/hexoblog.jpg"
              width={340}
              height={180}
              alt="GitHub blog page"
            />
          </div>
          <p className="mx-8">
            <span className="font-bold">Usage</span> : Javascript based Hexo framework
            <br />
            <span className="font-bold">Describe</span> : Individual blog for summary personal studies that is built by Hexo framework.
            <br />
            <span className="font-bold">Duration</span> : 1 days to build, Keep updated
            <br />
            <span className="font-bold">Participation</span> : 100% (personal project)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectList
