import React from 'react'
import { shadow } from './Color'

export default function DropdownContent({ showDropDown, children }) {
    return (
        <div style={{
            display: showDropDown ? 'block' : 'none',
            position: 'absolute',
            backgroundColor: 'white',
            minWidth: '160px',
            borderRadius: '4px',
            boxShadow: shadow,
            zIndex: '1',
            paddingTop: '4px',
            paddingBottom: '4px'
        }}>
            {children}
        </div>
    )
}
