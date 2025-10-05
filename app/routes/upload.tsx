import React, { useState } from 'react'
import Navbar from '~/components/Navbar'
import { usePuterStore } from '~/lib/puter'

const upload = () => {
  const [isProcessing, setIsProcessing ] =useState(false)
    const {auth} = usePuterStore()
    const handleAnalyze = () => {
      setIsProcessing(true);

      
  }
  const handleSubmit =()=>{
    handleAnalyze();
  }
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

    <section className="main-section">
    <div className="page-heading py-16">
      <h1 >Smart feedback for your dream job</h1>
      {isProcessing ? (
                        <>
                            <h2>hi</h2>
                            <img src="/images/resume-scan.gif" className="w-full" />
                        </>
                    ) : (
                        <h2>Drop your resume to know your ATS score and let us perfect it</h2>
      )}
      {!isProcessing && (
                        <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                            <div className="form-div">
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" name="company-name" placeholder="Company Name" id="company-name" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" name="job-title" placeholder="Job Title" id="job-title" />
                            </div>
                            <div className="form-div">
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={20} name="job-description" placeholder="Job Description" id="job-description" />
                            </div>

                            {/* <div className="form-div">
                                <label htmlFor="uploader">Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect} />
                            </div> */}

                            <button className="primary-button" type="submit">
                                Analyze Resume
                            </button>
                        </form>
                    )}
    </div>
    </section>
    </main>
  )
}

export default upload
