import React, { useState } from 'react'
import { Text } from '../Typography'

export default function DropdownItem({ text, action }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div style={{
            padding: '10px',
            cursor: 'pointer',
            backgroundColor: hovered && '#F4F4F4'
        }}
            onClick={action}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Text>{text}</Text>
        </div>
    )
}
