import React from 'react'

function NameList() {
  const names = ['Emilia', 'Max', 'Brian']
  const persons = [ 
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>


  //Alt 2 - when you add a person.js file for HTML
  // const persons = [
  //   {
  //     id: 1,
  //     name: 'Emilia',
  //     age: 30,
  //     skill: 'React'
  //   },
  //   {
  //     id: 2,
  //     name: 'Max',
  //     age: 30,
  //     skill: 'React'
  //   },
  //   {
  //     id: 3,
  //     name: 'Brian',
  //     age: 30,
  //     skill: 'React'
  //   }
  // ]
  //   const personList = persons.map(person => <Person key={person.id} person={personList} />)
  //   return <div>{personList}</div>
  


    // Alt 1
    // const names = ['Emilia', 'Max', 'Brian']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>
    
}

export default NameList
