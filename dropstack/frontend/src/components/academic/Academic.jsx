
import React, { useState } from 'react';
import { Dropbox } from 'dropbox';

const Academic = () => {
  const [fileInputs, setFileInputs] = useState([]);

  const dbx = new Dropbox({ clientId: 'YOUR_APP_KEY' });

  const handleFileChange = (index, file) => {
    const fileName = `${Date.now()}_${file.name}`;

    dbx
      .filesUpload({ path: `/${fileName}`, contents: file })
      .then((response) => {
        console.log(response);
        // Handle successful upload, e.g., update your UI or store the file details
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  const handleAddInput = () => {
    setFileInputs((prevInputs) => [...prevInputs, {}]);
  };

  return (
    <div className="py-4">
      <h4 className="section-title">Academic & Professional Certificates</h4>
      {fileInputs.map((file, index) => (
        <div key={index} className="form-outline mb-4 mb-md-5 mb-lg-5">
          <div className="input-group custom-file-button">
            <label className="input-group-text" htmlFor={`inputGroupFile${index}`}>
              UPLOAD FILE
            </label>
            <input
              type="file"
              id={`inputGroupFile${index}`}
              name={`image${index}`}
              className="form-control"
              accept="image/*"
              onChange={(e) => handleFileChange(index, e.target.files[0])}
              required
            />
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleAddInput}>
        Add Input
      </button>
    </div>
  );
};

export default Academic;
