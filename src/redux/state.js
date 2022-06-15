let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi how r u?', likesCount: 12}, 
                {id: 2, message: 'lets eat pizza', likesCount: 25},
                {id: 3, message: 'and cakes', likesCount: 5555}
            ],
            newPostText: 'dobavte text'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'}, 
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'}, 
                {id: 2, message: 'Whats up?'},
                {id: 3, message: 'Shut up'},
                {id: 4, message: 'You r rude(('}
            ], 
            newMessagesText: 'send message'
        },
        navPage: {
            navlinks: [
                {id: 1, header: 'Profile', path: '/profile'},
                {id: 2, header: 'Messages', path: '/dialogs'},
                {id: 3, header: 'News', path: '/news'},
                {id: 4, header: 'Music', path: '/music'},
                {id: 5, header: 'Settings', path: '/settings'},
            ],
            friends: [
                {id: 1, name: 'Johnny'}, 
                {id: 2, name: 'Darling'},
                {id: 3, name: 'Bear'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state changed');
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessagesText
        };
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessagesText = '';
    
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessagesText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
        
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;