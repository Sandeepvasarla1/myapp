import { useEffect, useState } from "react"

function Counter(props) {
    const [count, setcount] = useState(0)
    useEffect(()=> {
        console.log(count)
    },[count])
    const Inc = () => {
        setcount(count + 1)
    }
    const Dec = () => {
        if (count > 0) {
            setcount(count - 1)
        }
    }
    // console.log("hii")
    return (
        <div>
            <h1>{props.name} :{count}</h1>
            <button onClick={Inc}>INC</button>
            <button onClick={Dec}>DEC</button>
        </div>
    )
}

export default Counter