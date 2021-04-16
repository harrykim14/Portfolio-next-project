import Layout from '../components/Layout';
import SkillHeader from '../components/SkillHeader';
import SkillCard from '../components/SkillCard';

import LangSkillList from '../public/static/lang-skill-list.json';
import LibFraSkillList from '../public/static/lib-fra-skill-list.json';
import DBSkillList from '../public/static/db-skill-list.json';

import { HEADERTYPE } from '../types/types'

const JSON2Arr = (JSONFILE: Object, color: string) => {
  let arr = [];
  for(let key in JSONFILE) {
    if (key){
      JSONFILE[key].details.color = color;
      arr.push(JSONFILE[key].details);
    }
  }
  return arr;
}

const Skills = () => {
  const langArr = JSON2Arr(LangSkillList, "yellow")
  const libfraArr = JSON2Arr(LibFraSkillList, "indigo")
  const dbArr = JSON2Arr(DBSkillList, "gray")
  const headerDetails: HEADERTYPE[] = [
    { text: "Languages", color: "yellow" }, 
    { text: "Libraries & Frameworks", color: "indigo" },
    { text: "Database", color: "gray" },
  ]

  return (
    <Layout title="Skill List">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="text-center mb-10">
          <h1 className='title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-3xl sm:leading-none md:text-4xl lg:text-5xl xl:text-6xl'>
            Skills
          </h1>
          <p className="leading-relaxed sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Skills are scaled with Fluent(5), Intermediate(4), Advanced(3) and
            Beginner(2).
          </p>
        </div>

        <SkillHeader {...headerDetails[0]} />

        <div className="flex flex-wrap mb-6">
        { langArr && langArr.map((lang, idx) =>
          <SkillCard {...lang} key={idx}/>
        )}
        </div>

        <SkillHeader {...headerDetails[1]} />

        <div className="flex flex-wrap mb-6">
          {libfraArr && libfraArr.map((skill, idx) => <SkillCard {...skill} key={idx}/>)}
        </div>

        <SkillHeader {...headerDetails[2]} />

        <div className="flex flex-wrap mb-6">
          {dbArr && dbArr.map((skill, idx) => <SkillCard {...skill} key={idx} />)}
        </div>
      </div>
    </Layout>
  )
}

export default Skills
