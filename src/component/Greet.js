export const Greet = (props) => {
    return (
    <div>
        <h1>
            Hallo I am {props.name} as a {props.heroName}!
        </h1>
        {props.children}
    </div>
    )
}

// export default Greet