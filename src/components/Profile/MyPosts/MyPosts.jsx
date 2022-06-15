import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    // let posts = [
    //     {id: 1, message: 'hi bitch', likesCount: 12}, 
    //     {id: 2, message: 'my first post', likesCount: 25}
    // ];

    let postsElements = props.posts.map( p => <Post message={p.message} count={p.likesCount} /> );

    let newPostElement = React.createRef();
    
    let addPost = () => {
        // let text = newPostElement.current.value;
        props.dispatch({type: 'ADD-POST'});
        // props.updateNewPostText('');
        //newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {/* <Post message={postsData[0].message} count={postsData[0].likesCount} />
                <Post message={postsData[1].message} count={postsData[1].likesCount} /> */}

                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;