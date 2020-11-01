import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css';

const FileUpload = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <div className="Drop_region">Drop the files here ...</div> :
          <div><button className="btn">Upload</button></div>
      }
    </div>
  )
  
}

export default FileUpload;
