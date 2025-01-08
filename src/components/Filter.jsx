import React from 'react'
import '../assets/styles/filter.css'
const Filter = ({value, filterFunc}) => {
  return (
    <div className='filterTag' onClick={() => filterFunc(value)}>{ value }</div>
  )
}

export default Filter