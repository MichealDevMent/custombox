import { ChildComponent } from "./ChildComponent"

export const ParentComponent =() =>{
    const greetParent = (childName) =>{
        alert('Hello I am '+childName)
    }
    return <ChildComponent greetHandler={greetParent} />
}