const Profile = props => {
  const {information} = props
  const {name} = information

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Profile
