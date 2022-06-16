import React, { useRef, useState } from 'react'

function Drag_Drop(props) {

    const wrapperRef = useRef();

    const [fileList, setFileList] = useState([])

    const onFileDrop = (e) => {
        const newFiles = e.target.files[0].name;
        if (newFiles) {
            const updatedList = [...fileList, newFiles];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const handleClear = () => {
        setFileList([]);
    }

    // const colorInvertor = () => {
    //     let b = wrapperRef.current.classList.add("color-red");
    //     if (b) {
    //         wrapperRef.current.classList.add("color-green");
    //     } else {
    //         wrapperRef.current.classList.add("color-blue");
    //     }
    // }

    return (
        <div>
            <div
                className="height-dude"
                ref={wrapperRef}
            >
                <label>
                    <input type="file" multiple={false} onChange={onFileDrop} className="file-input" />
                </label>
                <div>
                    <h4>{fileList[0]}</h4>
                    <h5 className='cancel-btn' onClick={handleClear}>&#10006;</h5>
                    {/* <button onClick={colorInvertor}>Color Changer</button> */}
                </div>
            </div>
        </div>
    )
}

export default Drag_Drop

// import React, { useState, useRef } from 'react'

// function Drag_Drop(props) {

//     const { onFileChange } = props;

//     const wrapperRef = useRef(null);

//     const [fileList, setFileList] = useState([])

//     const onFileDrop = (e) => {
//         const newFiles = e.target.files[0];
//         if (newFiles) {
//             const updatedList = [...fileList, newFiles];
//             setFileList(updatedList);
//             props.onFileChange(updatedList);
//         }
//     }

//     const DragEnter = () => {
//         wrapperRef.current.classList.add("dragOver");
//         console.log("Entered");
//     }

//     const DragLeave = () => {
//         wrapperRef.current.classList.remove("dragOver");
//         console.log("Leaved");
//     }

//     const DragEnd = () => {
//         wrapperRef.current.classList.remove("dragOver");
//         console.log("Ended");
//     }

//     return (
//         <div
//             className='wrapper'
//             ref={wrapperRef}
//             onDragEnter={DragEnter}
//             onDragLeave={DragLeave}
//             onDragEnd={DragEnd}
//             >
//             <label className='input-label'>
//                 <input type="file" className="input-field" onChange={onFileDrop} />
//             </label>
//         </div>
//     )
// }

// export default Drag_Drop