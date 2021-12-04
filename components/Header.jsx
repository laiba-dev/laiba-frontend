import React from 'react'
import Image from 'next/image'
import Text from './Typography/Text'

export default function Header({ setCollapsed }) {
    return (
        <div style={{
            width: '100%',
            height: '57px',
            background: 'white',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px',
            position: 'sticky'
        }}>
            <Image src="/images/ci_hamburger.png" alt="Sidebar Toggle" width="24px" height="24px" onClick={setCollapsed} />
            <div>
                <Text>Hai, Irfan</Text>
            </div>
        </div>
    )
}
