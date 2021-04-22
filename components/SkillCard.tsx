import Image from 'next/image'
import ReactStars from 'react-rating-stars-component'
import { DETAILS } from '../types/types'

   

const SkillCard = ({ src, alt, skillName, fluentLevel, describes, color }: DETAILS) => {
  
  const CARDSTYLE = `rounded p-4 shadow-lg bg-${color}-100 min-w-full min-h-full`;
  const CONTAINERSTYLE =
    'mb-4 ml-4 xs:w-80 xs:mx-4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col sm:flex-row'
 
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
