import React, { useState } from 'react'
import api from '../components/Api'
import '../assets/styles/joblayout.css'
import { useLoaderData, useRouteError } from 'react-router-dom'
import JobHeader from './JobHeader'
import Job from './Job'
const JobWrapper = async () => {

    let jobs = useLoaderData()
    const [filters, setFilters] = useState([])

    const addToFilter = (value) => {
        if (!filters.includes(value)) {
            setFilters([...filters, value])
        }
    }
    const removeFromFilter = (value) => {
        if(filters.includes(value)) {
            setFilters(filters.filter((filtervalue) => filtervalue != value))
        }
    }

    const clearAllFilter = () => {
        setFilters([])
    }

    return (
        <div className='jobWrapper'>
            {filters.length ? <JobHeader filters={filters} clearAllFilter={clearAllFilter} filterDelFunc={removeFromFilter}/> : null}
            <div className='mainJobWrapper'>
                {jobs.map((job) => {
                    return (
                        <Job key={job.id} job={job} filters={filters} filterFunc={addToFilter}/>
                    )
                })}</div>
        </div>
    )
}

export default JobWrapper

export const JobLoaderFunction = async () => {
    const response = await fetch(api)
    if (!response.ok) {
        throw Error('Unable to fetch data')
    }
    const res = await response.json()
    return res.jobs
}

export const errElement = () => {

    const error = useRouteError()
    return (
        <>
            <p>Unable to load data</p>
            <p>{error.message}</p>
        </>
    )
}