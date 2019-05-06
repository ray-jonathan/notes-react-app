import React from 'react';
export default class NotesDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }
    render(){
        const {note} = this.props;
        return(
        <div>
            <h2>{note.title}</h2> 
            {note.text}
        </div>
        )
    }
}

