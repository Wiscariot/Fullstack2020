import React from 'react'
import ContactServices from '../Service/ContactServices'

export default function Contacts(props) {

const deleteContact = (id, name) => {
    
   if(window.confirm(`Do you really want to delete ${name}`)) 
    ContactServices
    .deleteContact(id)
    .then(props.fetchData())
    .then(props.showMessage(`${name} deleted successfully!`))
} 

return(
        <table className="Contacts">
            <thead>
            <tr>
                <th>Name</th>
                <th>Phonenumber</th>
            </tr>
            </thead>
            <tbody>
            {
            props.contacts.map( (contact) => 
                    <tr className="Contact" key={contact.id}>
                        <td className="Name">{contact.name}</td>
                        <td className="Phonenumber">{contact.number}</td>
                        <td className="Delete"><input type="button" value="x" onClick={() => deleteContact(contact.id, contact.name)}/></td>
                    </tr>
                )}  
            </tbody>
        </table>
    )
}