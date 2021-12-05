import React from 'react'
import SidebarItem from './SidebarItem'
import { Text, Heading1 } from '../Typography'
import { color } from '../Color'

export default function Sidebar() {
    const [selected, setSelected] = React.useState(1)

    return (
        <div style={{
            position: 'absolute',
            width: '212px',
            minHeight: '100vh',
            height: '100%',
            left: '0',
            top: '0',
            background: color.primary,
            color: 'white'
        }}>
            <div style={{ marginBottom: '20px', padding: '20px' }}>
                <Heading1 color="white">LAIBA</Heading1>
                <Text color="white">Learning Application in Balanced Assessment</Text>
            </div >
            <div>
                <SidebarItem
                    icon="/images/bx_bxs-home.png"
                    url="/"
                    text="Dashboard"
                    active={selected == 1}
                    onSelected={() => setSelected(1)} />
                <SidebarItem
                    icon="/images/fluent_learning-app-24-regular.png"
                    url="/pembelajaran"
                    text="Pembelajaran"
                    active={selected == 2}
                    onSelected={() => setSelected(2)} />
                <SidebarItem
                    icon="/images/bx_bxs-report.png"
                    url="/submissions"
                    text="Hasil Pembelajaran"
                    active={selected == 3}
                    onSelected={() => setSelected(3)}
                />
            </div>
        </div >
    )
}
