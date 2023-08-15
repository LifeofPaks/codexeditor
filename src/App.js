import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage('html', "");
  const [css, setCSS] = useLocalStorage("css", '');
  const [javascript, setJavascript] = useLocalStorage("javascript", '');
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
       `
      );
    }, 250);

    return () => clearTimeout(timeOut)

  }, [html, css, javascript]);

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />

        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCSS}
        />

        <Editor
          language="javascript"
          displayName="JavaScript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>

      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
