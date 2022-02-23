import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const Note = (props) =>{
    
    const deleteNote=()=>{
        props.deleteItem(props.id);
        
    };

    return(
        <>
            <div className='note'>
                {/* <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p> */}
                <Button className='dem' onClick={deleteNote} style={{background:"pink" ,display:"flex", marginBottom:20, position:"absolute"}}>
                    
                </Button>
                {/* <DeleteIcon className="deleteIcon"></DeleteIcon> */}
                {/* <p>neha</p> */}
                
            </div>
        </>
    );
};

export default Note;