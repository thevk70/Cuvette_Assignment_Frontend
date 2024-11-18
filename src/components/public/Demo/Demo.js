import { useState } from "react";
import "./Demo.css"
const Demo = ({ tags, setTags }) => {
    const [input, setInput] = useState("");
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        if (input.trim() && !tags.includes(input.trim())) {
          setTags([...tags, input.trim()]);
          setInput("");
        }
      }
    };
  
    const removeTag = (index) => {
      setTags(tags.filter((_, i) => i !== index));
    };
  
    return (
      <div className="tags-input">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
            <button type="button" onClick={() => removeTag(index)}>
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press enter"
        />
      </div>
    );
  };

export default Demo;