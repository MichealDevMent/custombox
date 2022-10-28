export const ChildComponent = (props) => {
   return (
    <div>
        <button onClick={() => props.greetHandler('Bambang')}>
            Greet Parent
        </button>
    </div>
   ) 
}