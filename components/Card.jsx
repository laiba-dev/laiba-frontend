import React from 'react'

export default function Card({ children }) {
    return (
        <div style={{
            width: 'inherit',
            height: 'inherit',
            padding: '20px',
            borderRadius: '4px',
            background: 'white',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
            {children}
        </div>
    )
}
