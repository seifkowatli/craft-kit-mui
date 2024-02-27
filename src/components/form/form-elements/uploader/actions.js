

export const uploadAction = (setProgress, setFiles , entity , rootUrl) => acceptedFiles => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
  
    const xhr = new XMLHttpRequest();
  
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        setProgress(percentage);
      }
    };
  
    xhr.onload = () => {
      setProgress(100); // Upload complete
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('File successfully uploaded');
        const response = JSON.parse(xhr.responseText);
        
        setFiles((prevState) => {console.log('prev state:', prevState);return [...prevState, response];});
        console.log('Response from the server:', response);
      } else {
        console.error('Upload failed with status:', xhr.status);
        const errorResponse = xhr.responseText ? JSON.parse(xhr.responseText) : 'Upload failed';
        console.error('Error response from the server:', errorResponse);
      }
    };
  
    xhr.onerror = () => {
      console.error('Network error occurred during the upload');
    };
  
    xhr.open('POST', `${rootUrl}/${entity}`, true);
    xhr.send(formData);
  };