const FilledCloseIcon = ({ className }: { className?: string }) => {
    return (
        <svg className={className} height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4.29289 5.70711L6.58579 8L4.29289 10.2929L5.70711 11.7071L8 9.41421L10.2929 11.7071L11.7071 10.2929L9.41421 8L11.7071 5.70711L10.2929 4.29289L8 6.58579L5.70711 4.29289L4.29289 5.70711Z" fill="#D3D3D3" fillRule="evenodd"/>
        </svg>
    )
}

export default FilledCloseIcon