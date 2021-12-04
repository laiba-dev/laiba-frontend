export default function Heading2({ text }) {
    return (
        <div style={
            {
                color: '#202020',
                fontWeight: '600',
                fontSize: '32px',
                lineHeight: '48px'
            }
        } >
            {text}
        </div>
    )
}