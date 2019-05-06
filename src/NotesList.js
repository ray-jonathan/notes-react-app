import React from 'react';
import styles from './NotesList.module.css';
export default function NotesList(props){

    return(
    <ul className={styles.list} > {/* "class is 'styles.classname' "*/}
        <li>This</li>
        <li>is</li>
        <li>a</li>
        <li>Notes</li>
        <li>List</li>
        <li>Example</li>
    </ul>
    )
}
