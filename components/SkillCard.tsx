import Image from 'next/image'
import ReactStars from 'react-rating-stars-component'
import { DETAILS } from '../types/types'

   

const SkillCard = ({ src, alt, skillName, fluentLevel, describes, color }: DETAILS) => {
  
  const CARDSTYLE = `rounded p-4 shadow-lg bg-${color}-200 min-w-full min-h-full`
  const CONTAINERSTYLE =
    'mb-4 mx-4 md:w-1/3 md:my-3 lg:mx-8 lg:w-1/4 flex flex-col sm:flex-row'
 

  return <div className={CONTAINERSTYLE}>
  <div className={CARDSTYLE}>
  <Image className="rounded-full"
        src={src}
        width={80}
        height={80}
        alt={alt}
  />
  <div className="flex-grow ">
    <h2 className="text-xl title-font font-medium mb-3 font-semibold">
    {skillName} ({ fluentLevel === 5 
                ? "Fluent" 
                : fluentLevel === 4
                ? "Intermediate"
                : fluentLevel === 3
                ? "Advanced"
                : "Beginner"
      })
    </h2>
    <ReactStars
        size={30}
        value={fluentLevel}
        edit={false}
    />
    {describes && <span>{describes}</span>
    }
  </div>
</div>
</div>
}

export default SkillCard
