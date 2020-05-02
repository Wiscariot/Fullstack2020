import React from 'react'

export default function Notification(props) {
    let classes = "Notification"

    if(props.message === null) {
        return null
    }

    if(props.message.error === true) {
         classes = "Notification Error"
     }

return(
<div className={classes} >
    {props.message.message}
</div>
)
}