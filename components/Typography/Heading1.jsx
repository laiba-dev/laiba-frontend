import React from 'react'

export default function Heading1({ color = '#202020', children }) {
    return (
        <div style={
            {
                color: color,
                fontWeight: '600',
                fontSize: '48px',
                lineHeight: '72px'
            }
        } >
            {children}
        </div>
    )
}
