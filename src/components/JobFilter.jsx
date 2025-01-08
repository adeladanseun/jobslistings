import '../assets/styles/jobfiltertag.css'
const JobFilter = ({ filter, filterDelFunc }) => {
    return (
        <div className='usedFilterTag'>
            <p>{filter}</p>
            <img alt='cancel button' src='/jobslistings/icon-remove.svg' onClick={() => filterDelFunc(filter)}/>
        </div>
    )
}

export default JobFilter