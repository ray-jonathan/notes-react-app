import React from 'react';

function NotesEditor({text}){
    return(
        <textarea value={text}></textarea> 
    );
}

export default class NotesDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: true
        };
    }
    render(){
        const {note} = this.props;
        const {isEditing} = this.state;
        return(
        <div>
            <h2>{note.title}</h2> 
            {isEditing? <NotesEditor text={note.text} /> : note.text }
        </div>
        )
    }
}

