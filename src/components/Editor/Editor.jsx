import React, { useState } from "react";
import 'codemirror/lib/codemirror.css';
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const { language, displayName, value, onChange} = props;
  const [isOpen, setIsOpen] = useState(true)

  const handleChange = (editor, data, value) =>{
    onChange(value)
  }

  const toggleView = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className={`editor-container ${isOpen ? '' : 'collapsed'}`}>

      <div className="editor-title">
        {displayName}
        <button  onClick={toggleView}>
            {
                isOpen ? <img src="https://img.icons8.com/glyph-neue/64/FFFFFF/compress.png" alt="compress"/>
                :
                <img  src="https://img.icons8.com/windows/64/FFFFFF/resize-four-directions.png" alt="resize-four-directions"/>
            }
        </button>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />

    </div>
  );
};

export default Editor;
