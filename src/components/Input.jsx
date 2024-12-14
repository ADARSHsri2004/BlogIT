import React, { forwardRef, useId } from 'react'
//useId: A React hook that generates a unique ID for the component, ensuring it is unique even in a server-rendered application.

//forwardRef: A React utility function that allows the ref prop to be forwarded to the underlying HTML element. This is useful for accessing or modifying the DOM element directly.

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
//ref :Used to pass a reference to the <input> element for external access.
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {/* If label exists, renders a <label> element */}
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                    {/* Displays the text content of the label ({label}). */}
                {label}
            </label>
            }
            <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            //Forwards the ref to this <input> element, enabling parent components to directly manipulate the input DOM element.
                ref={ref} {...props} id={id} />
        </div>
    )
})

export default Input
