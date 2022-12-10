import { useEffect, useRef, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";

import { Button } from "primereact/button";

import "./style.css";
const DocumentDropDown = ({ items }) => {
  const [selectedOption, setSelectedOption] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState([]);

  const handleUpload = (event) => {
    console.log("handleUpload", event.files);
  };

  const onChangePicture = (e) => {
    setSelectedFile([...selectedFile,URL.createObjectURL(e.target.files[0])]);
  };
  return (
    <div>
      <div>
        <Dropdown
          value={selectedOption}
          options={items}
          filter
          showClear
          onChange={(item) => {
            setSelectedOption(item.value);
          }}
          optionLabel="name"
          editable
        />
      </div>
     

      <div style={{display:"flex"}}>
      {selectedFile.length>0 ? (
          selectedFile.map((file)=>{
            return <img src={file} style={{ height: "200px", marginTop: 10 }} />
          })
      ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginTop:10,
        }}
      >
        <div>
          <input
            type="file"
            accept="image/*"
            id="file"
            ref={inputFile}
            onChange={onChangePicture}
            style={{ display: "none" }}
          />

      <div>
      <Button
      disabled={!selectedOption}
            onClick={() => {
              inputFile.current.click();
            }}
            style={{
              border: 0,

              background: "linear-gradient(90deg, #141E30 0%, #243B55 100%)",
            }}
          >
            Select Image
          </Button>
         {selectedFile.length>0? <Button
            onClick={() => {
              inputFile.current.click();
            }}
            style={{
              border: 0,

                marginLeft:10,
              background: "linear-gradient(90deg, #141E30 0%, #243B55 100%)",
            }}
          >
            Add More
          </Button>:null}
      </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDropDown;
