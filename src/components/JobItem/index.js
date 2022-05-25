import Header from '../Header'

const JobItem = props => {
  const {employeeType} = props
  const {label} = employeeType

  return (
    <div>
      <Header />
      <div>
        <p>{label}</p>
      </div>
    </div>
  )
}

export default JobItem
