import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 14},
            {id: 2, message: "It's my first post?", likesCount: 30},

        ],
        newPostText :['it-kamasutra.com'

        ]

    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you today?'},
            {id: 3, message: 'Will you go to university?'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!'}
        ],
        dialogsData: [
            {id: 1, name: 'Artem'},
            {id: 2, name: 'Vladislav'},
            {id: 3, name: 'Dmitri'},
            {id: 4, name: 'Bogdan'},
            {id: 5, name: 'Vitaly'},
        ],

    },
    sideBar:[
        {photo:require("./../img/boy.svg")},
        {photo:require("./../img/man.svg")},
        {photo:require("./../img/guy.svg")},
    ]

}

window.state=state
export let addPost = () =>{

    let newPost = {
        id:3,
        message:state.profilePage.newPostText,
        likesCount: 0

    };
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;