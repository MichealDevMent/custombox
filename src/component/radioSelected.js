import React from "react";
import './radioSelected.css'

const RadioSelected = () =>{
    const [selectedRadioBtn,setSelectedRadioBtn] = React.useState('')

    const isRadioSelected = (value:string):Boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadioBtn(e.currentTarget.value);
 return(
    <div>
  <input className="radio"
    type="radio"
    name="react-radio-btn"
    value="radio1"
    checked={isRadioSelected('radio1')}
    onChange={handleRadioClick}
    />
      <input 
    type="radio"
    name="react-radio-btn"
    value="radio2"
    checked={isRadioSelected('radio2')}
    onChange={handleRadioClick}
    />
    </div>
  
 )
}
export default RadioSelected;

