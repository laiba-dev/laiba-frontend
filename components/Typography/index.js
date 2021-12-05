

export function Text({ color = "#202020", children }) {
    return (
        <div style={
            {
                color: color,
                fontWeight: 'normal',
                fontSize: '14px',
                lineHeight: '21px',
                margin: '0px'
            }
        } >
            {children}
        </div>
    )
}
export function Title({ children }) {
    return (
        <div style={
            {
                color: '#202020',
                fontStyle: 'normal',
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

export function Heading3({ children }) {
    return (
        <div style={
            {
                color: '#202020',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '30px'
            }
        } >
            {children}
        </div>
    )
}
export function Heading2({ text }) {
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
export function Heading1({ color = '#202020', children }) {
    return (
        <div style={
            {
                color: color,
                fontWeight: '600',
                fontSize: '48px',
                lineHeight: '72px'
            }
        } >
            {children}
        </div>
    )
}
