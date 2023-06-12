const Button = (props) => {
    return (
        <button type="button" className={`px-5 py-5 
        ${props.className}
        rounded-lg`}>
            {props.children}
        </button>
    )
}

export default Button