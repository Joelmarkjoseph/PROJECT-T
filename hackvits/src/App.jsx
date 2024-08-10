import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const submitCode = () => {
    console.log(code);
  };
  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <>
      <button
        style={{
          background: language == "cpp" ? "white" : "black",
          color: language == "cpp" ? "black" : "white",
        }}
        onClick={() => {
          setLanguage("cpp");
        }}
      >
        C++
      </button>
      <button
        style={{
          background: language == "java" ? "black" : "white",
          color: language == "java" ? "white" : "black",
        }}
        onClick={() => {
          setLanguage("java");
        }}
      >
        JAVA
      </button>
      <button
        style={{
          background: language == "python" ? "darkblue" : "white",
          color: language == "python" ? "white" : "darkblue",
        }}
        onClick={() => {
          setLanguage("python");
        }}
      >
        PYTHON
      </button>
      <div className="app">
        <Editor
          onChange={(e) => {
            setCode(e);
          }}
          height="90vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
        <button
          onClick={() => {
            submitCode(code);
          }}
        >
          SUBMIT CODE
        </button>
      </div>
    </>
  );
}

export default App;
