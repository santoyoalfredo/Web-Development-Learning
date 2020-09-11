import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function updateTitle(event) {
        const newTitle = event.target.value;
        setTitle(newTitle);
    }

    function updateContent(event) {
        const newContent = event.target.value;
        setContent(newContent);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.onAdd(title, content);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={updateTitle} name="title" placeholder="Title" value={title} />
                <textarea onChange={updateContent} name="content" placeholder="Take a note..." rows="3" value={content} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
