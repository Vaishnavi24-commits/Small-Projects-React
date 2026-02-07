import {Pencil} from "lucide-react";
import { useState,useEffect,useRef} from "react"
import {Input} from "../ui/input"

function InlineEditableInput(){
    const[items,setItems]=useState([
        {id:1,text:"Hello"},
        {id:2,text:"Vaishnavi"}
    ])

    const[currentEditedID,setCurrentEditedID]=useState(null)
    const[currentEditedValue,setcurrentEditedValue]=useState("");

    const inputRef = useRef(null)

    useEffect(()=>{
        if(currentEditedID!==null && inputRef.current){
            inputRef.current.focus()

        }
    },[currentEditedID])


const handleEdit=(id,text)=>{
    setCurrentEditedID(id);
    setcurrentEditedValue(text);

}

const handleBlur=()=>{
    if(currentEditedID!=null)
    saveChanges();
}

const handleKeyDown=(event)=>{
    if(event.key==="Enter"){
        saveChanges();
    }
    else if(event.key==="Escape"){
        setCurrentEditedID(null)
    }
}

const saveChanges=()=>{
    if(currentEditedID===null) return;
    setItems(
        items.map((item)=>item.id===currentEditedID?{...item,text:currentEditedValue}:item));
        setCurrentEditedID(null)
    
    }

return(
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Inline Editable Input</h1>
        <div className="w-75 flex flex-col gap-4">
            {items.map((item)=>currentEditedID===item.id?(
                <Input key={item.id} ref={inputRef} value={currentEditedValue}
                onChange={(e)=>setcurrentEditedValue(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                />
            ):(
                <div key={item.id} onClick={()=>handleEdit(item.id,item.text)} className="flex justify-between  items-center  bg-gray-700 text-white px-4 py-2 rounded cursor-pointer group">
                    <span>{item.text}</span>
                    <Pencil className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"></Pencil>
                    </div>
            )
            )}
        </div>

    </div>

)
}
export default InlineEditableInput