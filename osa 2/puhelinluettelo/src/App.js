import React, { useState, useEffect } from 'react'
import ContactServices from './Service/ContactServices'
import './style.css'
import Header from './components/Header'
import Contacts from './components/Contacts'
import Form from './components/Form'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newContact, setNewContact] = useState('')
  const [message, setMessage] = useState(null)
  const [filtered, setFilter] = useState('')

  const fetchData = () => {
    ContactServices
      .fetchAll()
      .then (res => {
        setContacts(res.data)
  })}
  useEffect(fetchData, [])
  useEffect(fetchData, [contacts])

  const checkDuplicates = (element) => {
    const search = contacts.map(contact => contact.name.toLowerCase())
    const index = search.indexOf(element.toLowerCase())

    return(index)
  }

  const showMessage = (message, err) => {
    let error = (err === true) ? true : false
    setMessage({message:message, error:error})
    setTimeout(() => setMessage(null), 5000)
  }

  useEffect(() => console.log(message), [message])

  const showContacts = (filtered ==='')
  ? contacts
  : contacts.filter(contact => { 
    return contact.name.toLowerCase().indexOf(filtered.toLowerCase()) !== -1
  })

  const handleChange = (event) => {
    setNewContact({...newContact, [event.target.name]:event.target.value})
  }

  const handleClick = (event) => {
    event.preventDefault()

    if(checkDuplicates(newContact.name) !== -1) {
      if(window.confirm(`${newContact.name} is already on the phonebook, do you want to replace existing phonenumber?`)) {
        const editable = contacts.find(contact => contact.name === newContact.name)
        
        ContactServices.update(editable.id, newContact)
          .then ( res => {
                    const newList = contacts.map(contact => contact.id !== editable.id ? contact : res.data)
                    setContacts(newList)
                    showMessage(`New phonenumber set for ${editable.name}`)
                  })
          .catch( err => showMessage(`'${editable.name}' was already removed from server`, true))
        }
                  
        } else {
        
          ContactServices.create(newContact)
          .then ( res => {
                    const newList = contacts.concat(res.data)
                    setContacts(newList)
                    showMessage(`You created new contact: ${newContact.name}`)
                  })
      }
    }
  
  

  return (
    <div>
      <Header text="Phonebook" />
      <Filter filter={setFilter}/>
      <Header text="Add New Contact" />
      <Form handleClick={handleClick} set={handleChange}/>
      <Header text="Contacts" />
      <Notification message={message}/>
      <Contacts contacts={showContacts} fetchData={fetchData} showMessage={showMessage}/>
    </div>
  )

}

export default App