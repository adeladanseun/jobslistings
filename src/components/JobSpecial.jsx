import React from 'react'

const JobSpecial = (props) => {
  return (
    <>
        { props.specials.new ? <div className='special new'>New</div> : null }
        { props.specials.featured ? <div className='special featured'>Featured</div> : null}
    </>
  )
}

export default JobSpecial