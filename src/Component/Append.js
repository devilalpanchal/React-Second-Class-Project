import React, { useState } from 'react'
const Append = () => {
    const [data,setData] = useState('')

const [list,setList] = useState([])

    function handleChange(e){
      setData(e.target.value ) 
      const avalue = e.target.value 
      console.log(avalue)
    }
    const handleAppend=(e)=>{
        setList([...list,data])
        setList('')
    }
    const handleUndo=()=>{
let arr = []
for(let i=0;i<list.length-1;i++){
arr.push(list[i])
}
setList(arr)
    }
    return (
        <>
            <div className='app'>
                <input type='text' value={data} onChange={handleChange} /> <br/>
                <p>{data}</p>
                <button onClick={handleAppend}>Append</button>  <br />
                <button onClick={handleUndo}>Undo</button>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default Append