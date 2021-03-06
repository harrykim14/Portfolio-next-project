import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useCustomDispatch } from '../context/StateProvider'
import SideProfile from './SideProfile'
import { Grid } from '@material-ui/core'

interface TITLE {
  title: string
}

const Layout: React.FC<TITLE> = ({ children, title }) => {

  const [ language, setLanguage ] = useState('kor')

  const dispatch = useCustomDispatch()

  const changeLanguageHandler = e => {
    setLanguage(e.target.value)
    dispatch({
      type: 'SET_LANGUAGE',
      language: e.target.value
    })
  }

  return (
    <div className="flex justify-center items-center flex-col min-h-screen font-NotoSans">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-yellow-300">
          <Grid container>
            <Grid item xs={9}>
              <div className="flex items-center pl-8 h-14">
                <div className="flex space-x-4">
                  <Link href="/">
                    <a
                      data-testid="profile-nav"
                      className="font-extrabold text-yellow-600 hover:bg-yellow-100 px-4 py-3 rounded"
                    >
                      Profile
                    </a>
                  </Link>
                  <Link href="/Skills">
                    <a
                      data-testid="skills-nav"
                      className="font-extrabold text-yellow-600 hover:bg-yellow-100 px-4 py-3 rounded"
                    >
                      Skills
                    </a>
                  </Link>
                  <Link href="/ProjectList">
                    <a
                      data-testid="projectlist-nav"
                      className="font-extrabold text-yellow-600 hover:bg-yellow-100 px-4 py-3 rounded"
                    >
                      Projects
                    </a>
                  </Link>
                  <Link href="/Personality">
                    <a
                      data-testid="Personality-nav"
                      className="font-extrabold text-yellow-600 hover:bg-yellow-100 px-4 py-3 rounded"
                    >
                      Personality
                    </a>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="flex items-center pl-8 h-14">
                <div className="flex space-x-4">
                  <select className="rounded bg-gray-50 mx-2 w-28 h-10 select-text px-4" onChange={changeLanguageHandler}>
                    <option value="kor">?????????</option>
                    <option value="jpn">?????????</option>
                    <option value="eng">English</option>
                  </select>
                </div>
              </div>
            </Grid>
          </Grid>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        <Grid container>
          <Grid item xs={2}>
            <SideProfile />
          </Grid>
          <Grid item xs={10}>
            {children}
          </Grid>
        </Grid>
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t bg-blue-100">
        Harry Kim 2021
      </footer>
    </div>
  )
}

export default Layout
