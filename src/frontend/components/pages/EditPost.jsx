import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditPost() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [url, setUrl] = useState('');
    const [content, setContent] = useState('');

    //fetch to port??

    async function updatePost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('date', data);
        data.set('url', url);
        data.set('content', content);
        console.log();
        fetch('/api/posts', {
            method: 'PUT',
            body: data,
        })
    }
    //possible reponse await fetch inserted here.(method, body,)???
    return (
        <form onSubmit={updatePost}>
            <div className="content">
                <input
                    type="title"
                    placeholder='Title'
                    id="title"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />
                <input
                    type="date"
                    placeholder='Date'
                    id="date"
                    value={date}
                    onChange={ev => setDate(ev.target.value)}
                />
                <input
                    type="url"
                    placeholder='https://'
                    id="url"
                    value={url}
                    onChange={ev => setUrl(ev.target.value)}
                />
            </div>
            <div className="editorContainer">
                <ReactQuill value={content} className="editor" theme="snow" onChange={newValue => setContent(newValue)} />
            </div>
            <button variant="primary" type="submit">
                Update Post
            </button>
        </form>

    );
}
