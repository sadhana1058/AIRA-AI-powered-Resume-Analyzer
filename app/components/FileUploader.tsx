import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const FileUploader =  ({ onFileSelect }: FileUploaderProps) => {

      
      const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0] || null;

        onFileSelect?.(file);
    }, [onFileSelect]);

    const maxFileSize = 20 * 1024 * 1024; // 20MB in bytes

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: { 'application/pdf': ['.pdf'],  'application/msword': ['.doc'],
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
        },
        maxSize: maxFileSize,
    })

    const file = acceptedFiles[0] || null;
  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop your resume here, or click to select files</p>
      }
    </div>
    </div>
  )
}

export default FileUploader
