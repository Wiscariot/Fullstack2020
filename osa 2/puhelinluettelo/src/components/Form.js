import React from 'react'

export default function Form(props) {



return(
    <form className="Form" name="ContactForm">
        <table>
        <tbody>
            <tr>
                    <td>name: </td>
                    <td> <input type="text" name="name" onChange={(e) => props.set(e)}/> </td>
            </tr>

            <tr>
                    <td>number: </td>
                    <td> <input type="text" name="number" onChange={(e) => props.set(e)}/> </td>
            </tr>
        </tbody>    
        </table>
        
        <button type="submit" onClick={props.handleClick}>add contact</button>
    </form>
    )
}