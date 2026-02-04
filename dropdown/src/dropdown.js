import {useRef,useEffect,useState } from "react";
import ReactDOM from "react-dom/client"

function ClickOutsideDropDown(){
    const[isOpen,setIsOpen]=useState(false)
    const dropdownRef = useRef(null)
    
    const toogleDropdown = ()=>setIsOpen(!isOpen)

    useEffect(()=>{
        if(!isOpen) return;
        const handleClickOutside = (event)=>{
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsOpen(false)
            }
        };

        document.addEventListener("mousedown",handleClickOutside);
        return()=>document.removeEventListener("mousedown",handleClickOutside);
    },[isOpen]);

    return(
        <div className="min-h-screen flex flex-col items-center pt-24 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-6">
                Close Dropdown on Outside Click
            </h2>
            <div ref={dropdownRef} className="relative w-52">
                <button onClick={toogleDropdown} className="w-full border rounded-md px-4 py-2 bg-white hover:bg-gray-50 flex justify-between items-center">Select Option <span>▼</span></button>

                {isOpen && (
                    <div className="absoulute mt-2 w-full bg-white border rounded-md shadow-lg">
                        {["Option 1","Option 2","Option 3"].map((opt)=>(
                            <p key={opt} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{opt}</p>
                        ))}
                    </div>
                )}

                
            </div>
        </div>
    )
    }

ReactDOM.createRoot(document.getElementById("root")).render(<ClickOutsideDropDown/>)