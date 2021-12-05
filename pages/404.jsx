import React from 'react'
import Card from '../components/Card'
import Text from '../components/Typography/Text'
import Heading1 from '../components/Typography/Heading1'

export default function NotFound() {
    return (
        <div style={{ width: 'fit-content', margin: 'auto', textAlign: 'center' }}>
            <Card>
                <div style={{ padding: '50px' }}>
                    <Heading1>404</Heading1>
                    <Text>Halaman yang anda cari tidak ditemukan</Text>
                </div>
            </Card>
        </div>
    )
}
