import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) =>{
    const [expand,setExpand]=useState(false);
    const [note,seNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent=(event)=>{
       // const value=event.target.value;
        //const name=event.target.value;
        const {name,value}=event.target;
        seNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            };
        });
    };
    const addEvent = () =>{
        props.passNote(note);
        seNote({
            title:"",
            content:"",
        });
    };
    const expandIt = () =>{
        setExpand(true);
    };
    const btoNor = () =>{
        setExpand(false);
    };
    return(
        <>
            <div className='main_note'  onDoubleClick={btoNor}>
                <form>
                    {expand?(
                    <input type='text' placeholder='Title' autoComplete="off" name="title" value={note.title} onChange={InputEvent}/>
                    ):null}
                    <textarea rows="" column="" placeholder="Write a note..." name="content" value={note.content} onChange={InputEvent} onClick={expandIt}></textarea>
                    {expand?(
                    <Button onClick={addEvent} className="btn">
                        <AddIcon className='plus_sign'/>
                    </Button>
                    ):null}
                </form>
            </div>
        </>
    );
};
export default CreateNote;