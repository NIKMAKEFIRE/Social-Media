import React from 'react'

export const Textarea = ({input, meta, ...props}) => {
    return(
        <>
        <textarea {...input} {...props}/>
        </>
    )
}