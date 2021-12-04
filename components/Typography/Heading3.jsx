import React from 'react'

export default function Heading3({ children }) {
    return (
        <div style={
            {
                color: '#202020',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '30px'
            }
        } >
            {children}
        </div>
    )
}
