export default function Title({ children }) {
    return (
        <div style={
            {
                color: '#202020',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                margin: '0px'
            }
        } >
            {children}
        </div>
    )
}