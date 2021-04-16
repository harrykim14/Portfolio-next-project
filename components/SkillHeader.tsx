import { HEADERTYPE } from '../types/types';

const SkillHeader = ({text, color}: HEADERTYPE) => {

    return (
        <div className="text-center mb-10 py-2">
          <p className="leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {text}
          </p>
          <div className="flex mt-6 justify-center">
            <div className={`w-36 h-1 rounded-full bg-${color}-400 inline-flex`}></div>
          </div>
        </div>
    )
}

export default SkillHeader
