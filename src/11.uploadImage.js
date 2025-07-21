import React, { useState } from 'react'

const UploadImage = () => {
    const [file, setFile] = useState(null)
    const handleFileChange =(e)=>{
         const selectedFile = e.target.files[0]
         console.log(selectedFile)
         setFile(selectedFile)
    }
  return (
    <div>
        <h1>Upload Image</h1>
        <input type='file' accept='image/*' onChange={handleFileChange}></input>
        <p>{file && <img src={URL.createObjectURL(file)} alt='fileUploaded'/>}</p>
    </div>
  )
}

export default UploadImage