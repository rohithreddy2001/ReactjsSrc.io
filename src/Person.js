import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>Id: {person.id}, Name: {person.name}, Age: {person.age}, Skill: {person.skill}</h2>
    </div>
  )
}

export default Person
