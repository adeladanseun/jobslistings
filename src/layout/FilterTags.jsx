import Filter from '../components/Filter'

const FilterTags = ({ filters, filterFunc }) => {
  return (
    filters.map((filter, index) => {
        return <Filter key={index} value={filter} filterFunc={filterFunc}/>
    })
  )
}

export default FilterTags