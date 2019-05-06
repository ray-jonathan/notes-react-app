import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({title, id, handleClick}){

    return(
        <li>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                handleClick(id)
                }} >
                {title}
            </a>
        </li>
    )
}

export default function NotesList({notes, handleSelection}){
    const items = notes.map((note, i) => <NotesListItem key={i} title={note.title} id={note.id} handleClick={handleSelection} /> )
    return(
    <ul className={styles.list} > {/* "class is 'styles.classname' "*/}
        {items}
    </ul>
    )
}
