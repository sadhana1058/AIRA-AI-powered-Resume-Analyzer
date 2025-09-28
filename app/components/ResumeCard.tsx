import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

type ResumeCardProps={
    key?:string
    resume:Resume
}
const ResumeCard:React.FC<ResumeCardProps>=({key,resume}) => {
    console.log(resume.imagePath)
  return (

    <Link to={`/resume/${key}`} className='resume-card animate-in fade-in-5'>
         <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {resume.companyName && <h2 className="!text-black font-bold break-words">{resume.companyName}</h2>}
                    {resume.jobTitle && <h3 className="text-lg break-words text-gray-500">{resume.jobTitle}</h3>}
                    {!resume.companyName && !resume.jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
                </div>
        
        <div className="flex-shrink-0">
                    <ScoreCircle score={resume.feedback.overallScore} />
                </div>
          
                </div>
                {resume.imagePath && (
                <div className="gradient-border animate-in fade-in duration-1000">
                    <div className="w-full h-full">
                        <img
                        // src = 'public/images/resume_01.png'
                            src={`${resume.imagePath}`}
                            
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                        />
                    </div>
                </div>
                )}

    </Link>

  
    
  )
}

export default ResumeCard
