import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({ title: "", content: "" });
    const [focused, setFocus] = useState(false);

    function handleFocus() {
        setFocus(!focused);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
    function handleSubmit(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {focused && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
                <textarea onFocus={handleFocus} onBlur={handleFocus} onChange={handleChange} name="content" placeholder="Take a note..." rows={focused ? "3" : "1"} value={note.content} />
                <Zoom in={focused}>
                    <Fab onClick={handleSubmit}><Add /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
