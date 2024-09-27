import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [members, setMembers] = useState([])

  const fetchMembers = async () => {
    const response = await fetch('http://localhost:8080/members')
    const data = await response.json()
    setMembers(data.members)
  }

  useEffect(() => {
    fetchMembers()
  }, [])


  return (
    <>
        <h1>Members</h1>
        <ul>
          {
            members.map((member, index) => (
              <li key={index}>{member.name} - {member.age} years old</li>
            ))
          }
        </ul>
    </>
  )
}

export default App
