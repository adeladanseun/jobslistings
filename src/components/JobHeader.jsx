import '../assets/styles/jobheader.css'
import JobFilter from './JobFilter'
const JobHeader = ({ filters, filterDelFunc, clearAllFilter }) => {
  return (
    <div className='jobHeader'>
      <div className='filterWrapper'>
        {filters.map((filter) => {
          return <JobFilter key={filter} filter={filter} filterDelFunc={filterDelFunc} />
        })}
      </div>
      <button className='clearFilter' onClick={() => clearAllFilter()}>Clear</button>
    </div>
  )
}

export default JobHeader