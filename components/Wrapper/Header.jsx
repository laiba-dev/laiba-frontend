import React from 'react'
import Image from 'next/image'
import { Text } from '../Typography'
import DropdownItem from './DropdownItem'
import { signOut } from 'next-auth/react'
import { shadow } from '../Color'
import DropdownContent from '../DropdownContent'

export default function Header({ setCollapsed, name }) {
    const [showDropDown, setShowDropDown] = React.useState(false)
    return (
        <div style={{
            width: '100%',
            height: '57px',
            background: 'white',
            boxShadow: shadow,
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky'
        }}>
            <div style={{ cursor: 'pointer', paddingTop: '4px' }}>
                <Image src="/images/ci_hamburger.png"
                    alt="Sidebar Toggle"
                    width="24px"
                    height="24px"
                    onClick={setCollapsed} />
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setShowDropDown(true)}
                onMouseLeave={() => setShowDropDown(false)}>
                <div style={{ padding: '20px', cursor: 'pointer' }}>
                    <Text>Hai, {name}</Text>
                </div>
                <DropdownContent showDropDown={showDropDown}>
                    <DropdownItem text="Logout" action={() => { signOut() }} />
                </DropdownContent>
            </div>
        </div>
    )
}
