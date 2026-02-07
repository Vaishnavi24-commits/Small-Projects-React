import React from "react";
const Input = React.forwardRef(({className="",...props },ref)=>{
    return(
        <input ref={ref} className={`border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400${className}`}
        {...props}
        />
    )
}
);
export {Input};