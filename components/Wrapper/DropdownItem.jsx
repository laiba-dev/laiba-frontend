import React from 'react'
import Text from '../Typography/Text'

export default function DropdownItem({ text, action }) {
    return (
        <div style={{ padding: '20px', cursor: 'pointer' }} onClick={action}>
            <Text>{text}</Text>
        </div>
    )
}
