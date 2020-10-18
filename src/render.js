import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, updateNewPostText} from "./Redux/State";


 export let rerenderEntireTree = (state) =>{
    ReactDOM.render(


        <React.StrictMode>
            <App state={state} dialogsData={state} messagesData={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

