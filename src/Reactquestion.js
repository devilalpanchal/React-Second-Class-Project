import { useScrollTrigger } from '@mui/material'
import React, { useState } from 'react'

const Reactquestion = () => {
    let data = ['item 1', 'item 2', 'item 3', 'item 4']

    let [input, setInput] = useState(' devilal')
    let [list, setList] = useState(data)
    const hadlechange = (e) => {
        // setInput(e.target.value)
        let value = e.target.value
        let newValue = data.filter((item) => {
            if (item.includes(value)) {
                return item;
            }

        })
    }
    return (
        <>

            <div className='app'>
                <h1>
                    React question Search Reacording
                </h1>

                <input className='input' type='text' placeholder='Enter Search ' onChange={hadlechange} />

                <ul>
                    {
                        data.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>


        </>
    )
}

export default Reactquestion;