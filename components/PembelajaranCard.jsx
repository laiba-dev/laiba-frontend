import React from 'react'
import Image from 'next/image'
import Title from './Typography/Title'
import Text from './Typography/Text'

export default function PembelajaranCard({ id, image, title, desc }) {
    return (
        <div style={{
            width: '100%',
            padding: '40px',
            borderRadius: '4px',
            background: 'white',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <div><Image src={image} alt="Logo Pembelajaran" width="156px" height="156px" /></div>
                <Title>{title}</Title>
                <Text color="#808080">{desc}</Text>
            </div>
        </div>
    )
}
