import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, language, theme, onChange }) => {
  return (
    <div className="h-[50vh] sm:h-[60vh] md:h-[70vh]">
      <Editor
        height="100%"
        language={language}
        theme={theme}
        value={code}
        onChange={onChange}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor; 
