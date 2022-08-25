import React, { useEffect, useState } from 'react';
import { firestore } from "../../../firebase";
import { addDoc, getDocs, collection, doc, updateDoc, deleteDoc } from "@firebase/firestore";
import htmlToDraft from "html-to-draftjs";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import { EditorState, ContentState } from "draft-js";

import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AddCourseDetail() {
    const ref = collection(firestore, "courses")
    const [value, setValue] = useState({})
    const [contentState, setcontentState] = useState()
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const updateTextDescription = async (state) => {
        await setEditorState(state);
    };
    const onContentStateChange = (contentState) => {
        setcontentState(draftToHtml(contentState))
        setValue({ ...value, "description": draftToHtml(contentState) })
    }


    const handleSubmit = async() => {
        try {
            const updateUser = doc(firestore, "courses", value.type)
            const newVal = { list: value }
            await updateDoc(updateUser, newVal)
        } catch (err) {
            console.log("err: ", err)
        }
    }
    const handleOnchange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    console.log("value: ", value)
    return (
        <div className='course_list_admin py-4'>
            <div className='container'>
                <div className='d-flex justify-content-between mb-3'>
                    <h4>Add Course detail</h4>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='form-group mb-3'>
                            <label>Title</label>
                            <input type="text" className='w-100' placeholder='Enter title' name="title" onChange={handleOnchange} />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='form-group mb-3'>
                            <label>Video</label>
                            <input type="text" className='w-100' placeholder='Enter src' name="src" onChange={handleOnchange} />
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='form-group mb-3'>
                            <label>Position</label>
                            <input type="number" className='w-100' placeholder='Enter position' name="position" onChange={handleOnchange} />
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='form-group mb-3'>
                            <label>Type</label>
                            <select className='form-control' name='type' onChange={handleOnchange}>
                                <option value="2MPnF05EEUJLQyAOD6lD">HTML</option>
                                <option value="CSS">CSS</option>
                                <option value="Javascript">Javascript</option>
                                <option value="jQuery">jQuery</option>
                                <option value="React">React</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div className='form-group mb-3'>
                            <label>Description</label>
                            <div className=''>
                                <Editor
                                    editorState={editorState}
                                    toolbarClassName="textEditorBoxToolbar"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="textEditorBox"
                                    onEditorStateChange={updateTextDescription}
                                    onContentStateChange={onContentStateChange}
                                    toolbar={
                                        {
                                            options: ['inline', 'blockType', 'emoji', 'image', 'colorPicker', 'list', 'textAlign', 'link',],
                                            inline: {
                                                inDropdown: false,
                                                className: undefined,
                                                component: undefined,
                                                dropdownClassName: undefined,
                                                options: ['bold', 'italic', 'underline'],

                                            },
                                            blockType: {
                                                inDropdown: true,
                                                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
                                                className: undefined,
                                                component: undefined,
                                                dropdownClassName: undefined,
                                            },
                                            list: {
                                                inDropdown: true,
                                                className: undefined,
                                                component: undefined,
                                                dropdownClassName: undefined,
                                                options: ['unordered', 'ordered', 'indent', 'outdent'],

                                            },
                                            textAlign: {
                                                inDropdown: true,
                                                className: undefined,
                                                component: undefined,
                                                dropdownClassName: undefined,
                                                options: ['left', 'center', 'right', 'justify'],

                                            },
                                            colorPicker: {
                                                className: undefined,
                                                component: undefined,
                                                popupClassName: undefined,
                                                colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                                                    'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                                                    'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                                                    'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                                                    'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                                                    'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
                                            },
                                            link: {
                                                inDropdown: true,
                                                className: undefined,
                                                component: undefined,
                                                popupClassName: undefined,
                                                dropdownClassName: undefined,
                                                showOpenOptionOnHover: true,
                                                defaultTargetOption: '_self',
                                                options: ['link', 'unlink'],
                                                linkCallback: undefined
                                            },
                                            emoji: {
                                                className: undefined,
                                                component: undefined,
                                                popupClassName: undefined,
                                                emojis: [
                                                    '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
                                                    '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
                                                    '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
                                                    '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
                                                    '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
                                                    '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
                                                    '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
                                                    '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
                                                    '✅', '❎', '💯',
                                                ],
                                            },
                                            embedded: {
                                                className: undefined,
                                                component: undefined,
                                                popupClassName: undefined,
                                                embedCallback: undefined,
                                                defaultSize: {
                                                    height: 'auto',
                                                    width: 'auto',
                                                },
                                            },
                                            image: {
                                                className: undefined,
                                                component: undefined,
                                                popupClassName: undefined,
                                                urlEnabled: true,
                                                uploadEnabled: true,
                                                alignmentEnabled: true,
                                                uploadCallback: undefined,
                                                previewImage: false,
                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                alt: { present: false, mandatory: false },
                                                defaultSize: {
                                                    height: 'auto',
                                                    width: 'auto',
                                                },
                                            },

                                        }
                                    }
                                />
                                <textarea
                                    disabled
                                    style={{ width: "100%", display: "none" }}
                                    value={draftToHtml(
                                        convertToRaw(
                                            editorState && editorState.getCurrentContent()
                                        )
                                    )}
                                />
                            </div>
                        </div>

                    </div>

                    <div>
                        <button className='btn btn-primary' onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourseDetail;