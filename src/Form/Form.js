import React, { useState } from "react";

import {
    Button, Paper, TextField
} from '@mui/material'

const Form = () => {

    // 入力中のデータ
    const [text, setText] = useState('');

    //入力完了したデータ
    const [books, setBooks] = useState([]);

    // 入力を確認
    const [confirm, setConfirm]=useState(false);

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
    const clickConfirm = () => {
        if(!confirm){
            setConfirm(true);
        }
    }

    //データを削除
    const deleteText =(e)=>{
        console.log(e.currentTarget.id)
        books.splice(e.currentTarget.id, 1);
        setBooks([...books]);
    }

    // ボタンの中身を表示
    const showButton=(e)=>{
        window.alert("あなたは"+e.currentTarget.id+"の"+e.currentTarget.name+"をクリックしました")
    }
    return (
        <div>
            <TextField className="editAria" label="name" value={text} disabled={confirm} onChange={handleInputChange} />
            <Button variant="outlined" onClick={addText} disabled={confirm}>追加</Button >
            <Button variant="contained" color="primary" onClick={clickConfirm}>入力の確定</Button>
            
            {!confirm?(books.map((book, key) => {
                return(
                    <Paper key={key}>
                        {key}:{book}
                        <Button id={key} name={book} onClick={deleteText} variant="outlined" color="warning" >消す</Button>
                    </Paper>
                )
            }))
            :
            (<div></div>)}
            {confirm?(
                books.map((book, key) => {
                    return(
                      <Button id={key} name={book} onClick={showButton} variant="contained" color="success" >{key}:{book}</Button>
                    )
                }))
                :
                (<div></div>)
            }
        </div>
    )
};
export default Form;