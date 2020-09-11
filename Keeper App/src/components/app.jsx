import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    let notes = [];
    function addNote(title, content) {
        notes = [
            ...notes,
            { title: title, content: content }]
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            <Note key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    );
}

export default App;
