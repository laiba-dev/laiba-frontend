import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Wrapper({ children }) {
    const [collapsed, setCollapsed] = React.useState(false)

    return (
        <div>
            <Sidebar />
            <div style={{
                background: '#F8F9FF',
                minHeight: '100vh',
                marginLeft: '212px'
            }}>
                <Header setCollapsed={() => { setCollapsed(!collapsed) }} />
                <div style={{
                    paddingTop: '40px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    paddingBottom: '20px'
                }}>
                    {children}
                </div>
            </div>
        </div>
    )
}
