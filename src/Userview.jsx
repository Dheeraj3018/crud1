import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Userview() {
  const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

  const [userData, setUserData] = useState({})

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://6379a4bd7eb4705cf282a5b9.mockapi.io/users/${params.id}`)
      setUserData(user.data)
    } catch (error) {

    }

  }
  return (
    <>
      <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          User Id : {userData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-warning" style={{fontSize : "20px"}}>
          <h5 className="card-title">Name : {userData.name}</h5>
          <h5 className="card-title">Position : {userData.position}</h5>
          <h5 className="card-title">Office : {userData.office}</h5>
          <h5 className="card-title">Age : {userData.age}</h5>
          <h5 className="card-title">Start Date : {userData.startdate}</h5>
          <h5 className="card-title">Salarey : ${userData.salarey}</h5>
        </div>
        
      </div>
    </>
  )
}

export default Userview