import "./NoteContainer.css"
import Note from "./Note.jsx" 

const NoteContainer = (props) => {
  return (
    <div className='note-container'>
        <h1>Notes</h1>
        <div className="note-container__notes custom-scroll">
            {props.notes.length <= 0 && <h3>Add Your notes here</h3>}
            {props.notes.length > 0 && 
            props.notes.map(objNote=>
                <Note
                    key={objNote.id}
                    note={objNote}
                    deleteNote={(noteId)=>props.deleteNote(noteId)}
                    updateNote={(noteId,noteValue)=>props.updateNote(noteId,noteValue)}
                    updateLock={(noteId,lock)=>props.updateLock(noteId,lock)}
                />
            )}

        </div>
      
    </div>
  )
}

export default NoteContainer
