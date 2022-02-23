import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';


const App = () =>{
    const [addItem,setItem]=useState([]);

    const addNote = (note) =>{
        setItem((prevData)=>{
            return[...prevData,note];
        });
    };
    
    const onDelete=(id)=>{
        setItem((oldData) => oldData.filter((currData,index)=>{
            return index !==id;
        })
      );  
    };

    return(
        <>
            <Header/>
            <CreateNote passNote={addNote} />
            
            {addItem.map((val,index)=>{
                return(
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                );
            })}      

            <Footer/> 
        </>
    );
};

export default App;