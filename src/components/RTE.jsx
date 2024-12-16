import { Editor } from '@tinymce/tinymce-react'
import React from 'react'
import { Controller } from 'react-hook-form'
//renders a Rich Text Editor (RTE) using the TinyMCE editor and integrates it with react-hook-form

//control:
// A required prop passed from react-hook-form. It enables the Controller component to connect the editor's state to the form's state.

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

{/* The Controller component  manages the editor's state and ensures the value from the editor updates the form state. */}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        
                        //The onEditorChange function captures the editor's content and updates the form state via onChange.
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}


