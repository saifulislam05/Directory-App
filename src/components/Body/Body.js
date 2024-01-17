import React, { useReducer } from "react";
import ActionButtons from "./ActionButtons";
import Editor from "./Editor";
import Summary from "./Summary";

const Body = () => {
  const editorReducer = (content, action) => {
    switch (action.type) {
      case "CHANGE":
        return { content: action.payload };
      case "UPPERCASE":
        return { content: content.content.toUpperCase() };
      case "LOWERCASE":
        return { content: content.content.toLowerCase() };
      case "CLEARALL":
        return { content: "" };
      case "REMOVEEXTRASPACE":
        return { content: content.content.replace(/\s+/g, " ") };
      case "COPY":
        navigator.clipboard.writeText(content.content);
        return content;
      default:
        return content;
    }
  };

  const [state, dispatch] = useReducer(editorReducer, {content:""})
    return (
      <div className="w-11/12 h-[70vh]  mx-auto rounded-3xl shadow-xl overflow-hidden bg-[#3b3b3b]">
        <ActionButtons dispatch={dispatch} />
        <Editor value={state.content} dispatch={dispatch} />
        <Summary value={state.content} />
      </div>
    );
};

export default Body;
