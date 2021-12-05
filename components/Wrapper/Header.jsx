import React from 'react'
import Image from 'next/image'
import Text from '../Typography/Text'
import DropdownItem from './DropdownItem'
import { signOut } from 'next-auth/react'

export default function Header({ setCollapsed, name }) {
    const [showDropDown, setShowDropDown] = React.useState(false)
    return (
        <div style={{
            width: '100%',
            height: '57px',
            background: 'white',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky'
        }}>
            <Image src="/images/ci_hamburger.png" alt="Sidebar Toggle" width="24px" height="24px" onClick={setCollapsed} />
            <div style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setShowDropDown(true)}
                onMouseLeave={() => setShowDropDown(false)}>
                <div style={{ padding: '20px', cursor: 'pointer' }}><Text>Hai, {name}</Text></div>
                <div style={{
                    display: showDropDown ? 'block' : 'none',
                    position: 'absolute',
                    backgroundColor: 'white',
                    minWidth: '160px',
                    borderRadius: '4px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    zIndex: '1'
                }}>
                    <DropdownItem text="Logout" action={() => { signOut() }} />
                </div>
            </div>
        </div>
    )
}
