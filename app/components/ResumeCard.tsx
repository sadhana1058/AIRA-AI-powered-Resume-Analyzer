import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

type ResumeCardProps={
    key?:string
    resume:Resume
}
const ResumeCard:React.FC<ResumeCardProps>=({key,resume}) => {

  return (

    <Link to={`/resume/${key}`} className='resume-card animate-in fade-in-5'>
         <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {resume.companyName && <h2 className="!text-black font-bold break-words">{resume.companyName}</h2>}
                    {resume.jobTitle && <h3 className="text-lg break-words text-gray-500">{resume.jobTitle}</h3>}
                    {!resume.companyName && !resume.jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
                </div>
        </div>
        <div className="flex-shrink-0">
                    <ScoreCircle score={89} />
                </div>
    </Link>

  
    
  )
}

export default ResumeCard
