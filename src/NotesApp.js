import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css'
export default class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes : [
                {
                    id: '1001',
                    title: 'first title',
                    text: 'lorem ipsum lorem ipsum lorem ipsum'
                },
                {
                    id: '1002',
                    title: 'second title',
                    text: 'sum es est summest estes sunt'
                },
                {
                    id: '1003',
                    title: 'third title',
                    text: 'eram eras erat eramus eratus eratis erant'
                },
            ],
            selectedNote : '1001'
        };
    }
    render(){
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);

        return(
        <div className={styles.app}>
            <div className={styles.list}>
                <NotesList notes={this.state.notes} handleSelection={this._selectNote} />
            </div>
            <div className={styles.detail}>
                <NotesDetail note={theNote} />
            </div>
        </div>
        )
    }

    _selectNote = (id) => {
        this.setState({
            selectedNote : id
        })
    }
}