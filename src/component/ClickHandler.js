export const ClickHandler = (props)=>{
    const ClickHandler = (event, count = 1) =>{
        console.log("Clicked!", count ,event)
    }
    return(
        <div>
            <button onClick={ClickHandler}>Click</button>
            <button onClick={(event) => ClickHandler(event, 5)}>Click 5</button>
        </div>
    )
}