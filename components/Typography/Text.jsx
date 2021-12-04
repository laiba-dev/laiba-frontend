import React from 'react'

export default function Text({ color = "#202020", children }) {
    return (
        <div style={
            {
                color: color,
                fontWeight: 'normal',
                fontSize: '14px',
                lineHeight: '21px',
                margin: '0px'
            }
        } >
            {children}
        </div>
    )
}
