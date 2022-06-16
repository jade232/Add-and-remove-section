import React, { useState } from 'react'

function Add_Section() {

    const [list, setList] = useState([{
        name: "Rajsons",
        pincode: "560014",
        option: "No"
    }])

    const Add = () => {
        setList([
            ...list,
            {
                name: "Mathew",
                pincode: "641524",
                option: "Yes"
            }
        ]);
    }

    const Remove = (e, index) => {
        const item = [...list];
        item.splice(index, 1);
        setList(item);
        console.log(item);
    }

    return (
        <>
            <div style={{ display: "grid", placeItems: "center" }}>
                <div style={{ width: "500px" }}>
                    <div className='d-flex-sb'>
                        <h4>Mahveer Medicals</h4>
                        <h4>Pincode</h4>
                        <h4>Options</h4>
                    </div>
                    {list.length > 0 && list.length <= 2 &&
                        list.map((i, index) => {
                            return (
                                <div key={index} className='d-flex-sb'>
                                    <h4>{i.name}</h4>
                                    <h4>{i.pincode}</h4>
                                    <h4>{i.option}</h4>
                                </div>
                            );
                        })
                    }
                    <div style={{ textAlign: "left" }}>
                        <button style={{ cursor: "pointer" }} onClick={Add} disabled={list.length >= 2}>+ Add a section</button>
                        <button style={{ cursor: "pointer", marginLeft: "16px" }} onClick={(e, index) => Remove(e, index)} disabled={list.length == 0}>+ Remove a section</button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Add_Section