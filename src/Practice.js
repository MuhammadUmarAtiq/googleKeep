import React, { useState } from "react";
const Practice = () => {
    const [result, setResult] = useState([]);
    const [data, setData] = useState({
        name: "",
        quantity: ""
    });
   
const changeHandler=(e)=>{
    const {name,value}=e.target
    setData({...data,
    [name]:value,
})
}
const submitHandler=()=>{
    setResult([...result,data])
}





    return <>
        <div>
            <input type="text" name="name" onChange={changeHandler} value={data.name} />
            <input type="text" name="quantity" onChange={changeHandler} value={data.quantity} />
            <button onClick={submitHandler}>Submit</button>
        </div>
        {result.map((item) => {
            return <>
                {item.name}<br />
                {item.quantity}
            </>
        })}
    </>
}
export default Practice;