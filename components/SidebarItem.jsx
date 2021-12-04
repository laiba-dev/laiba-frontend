import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from './Typography/Text'

export default function SidebarItem({ icon, text, url, active, onSelected }) {
    return (
        <Link href={url}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                padding: '10px',
                background: active && '#18BBEE',
                cursor: 'pointer'
            }}
                onClick={onSelected}
            >
                <Image src={icon} alt="Sidebar Item Image" width="24px" height="24px" />
                <div style={{ marginLeft: '23px' }}>
                    <Text color="white">{text}</Text>
                </div>
            </div>
        </Link>
    )
}
