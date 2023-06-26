import { useState } from "react"

const Order =() =>{
    const [count, setCount]= useState(0)
    console.log(count)
    return(
        <>
        <h2>Ini Halaman Order</h2>

        <button
         onClick={()=>{
            setCount(count+1)
         }}
        >
        Count : {count}
        </button>
        </>

    )
}

export default Order