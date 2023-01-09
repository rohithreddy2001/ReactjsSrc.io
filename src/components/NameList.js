import React from 'react'
import Person from '../Person'

function NameList() {
    // const names = ['rohith','reddy','rrr']
    // // Avoid using index as a key.
    // const nameList = names.map((name,index) => <h2 key={index}>{index} HI {name.toUpperCase()}</h2>)
    const persons = [
        {
            id: 1,
            name: 'Rohith',
            age: 22,
            skill: 'java'
        },
        {
            id: 2,
            name: 'Reddy',
            age: 22,
            skill: 'python'
        },
        {
            id: 3,
            name: 'RRR',
            age: 22,
            skill: 'React'
        }
    ]
    
    const personsList = persons.map(person => <Person key={person.id} person={person}/>)
  return (
    // <div>{nameList}</div>
    <div>{personsList}</div>
  )
}

export default NameList
