import React from 'react'
import PembelajaranCard from '../components/PembelajaranCard'
import { Heading3 } from '../components/Typography'

export default function Pembelajaran() {
    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <Heading3>Pilih Pembelajaran</Heading3>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                rowGap: '20px',
                columnGap: '20px'
            }}>
                <PembelajaranCard
                    image="/images/flutter-logo.png"
                    title="Belajar Layout Antarmuka Flutter"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna" />
                <PembelajaranCard
                    image="/images/laravel-logo.png"
                    title="Belajar Pemrograman web Laravel"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna " />
            </div>
        </div>
    )
}
