import React, { useState } from "react";

import {
    Button, TextField
} from '@mui/material'

const Form = () => {

    // 入力中のデータ
    const [text, setText] = useState('');

    //入力完了したデータ
    const [books, setBooks] = useState([]);

    // 入力中のテキストをset
    const handleInputChange = e => {
        setText(e.target.value);
    }

    // 入力したテキストをbooksに追加
    const addText = () => {
        books[books.length] = text;
        console.log(books);
        setBooks([...books]);
        setText('');
    }

    // booksを確認
    const show = () => {

    }

    return (
        <div>
            {text}
            <TextField className="editAria" label="name" value={text} onChange={handleInputChange} />
            <Button variant="outlined" onClick={addText}>ボタンを追加</Button >
            <Button variant="contained" color="primary" onClick={show}>フォルダの読み込み</Button>
            {books.map((book, key) => {
                return(
                    <Button variant="contained" color="success" key={key}>{key+1}.{book}</Button>
                )
            })}
        </div>
    )
};
export default Form;