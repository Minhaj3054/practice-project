import React from 'react'

const UserDetails = async ({ params }: {params: Promise < { id: String } >}) => {
  const {id} = await params;
    return (
    <div>
        <h1>User Details #{id}</h1>
    </div>
  )
}

export default UserDetails