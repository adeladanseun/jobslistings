import React from 'react'
import JobSpecial from './JobSpecial'
import '../assets/styles/job.css'
import FilterTags from '../layout/FilterTags'
const Job = ({ job, filters, filterFunc }) => {
    const jobfilters = [...job.languages, ...job.tools, job.role, job.level]

    if (!filters.length || filters.filter((value) => jobfilters.includes(value)).length == filters.length) {
        return (
            <div className={'job' + (job.featured ? ' featured' : '')} key={job.id}>
                <div className='jobTopWrapper'>
                    <div className='jobImageWrapper'>
                        <img className='jobImage' alt={job.company} src={(`/jobslistings/${job.logo.slice(9)}`)} />
                    </div>
                    <div className='jobDetailWrapper'>
                        <div className='jobSpecial'>
                            <p className='jobCompany'>{job.company}</p>
                            <JobSpecial specials={{ 'new': job.new, 'featured': job.featured }} />
                        </div>
                        <div className='jobRole'>{job.position}</div>
                        <div className='jobExtra'>
                            <p>{job.postedAt}</p>
                            <p className='separator'></p>
                            <p>{job.contract}</p>
                            <p className='separator'></p>
                            <p>{job.location}</p>
                        </div>
                    </div>
                </div>
                <div className='jobFilterWrapper'>
                    <FilterTags filters={jobfilters} filterFunc={filterFunc}/>
                </div>
            </div>
        )
    }
    else return null
}

export default Job