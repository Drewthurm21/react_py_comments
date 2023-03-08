import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsThunk, deleteCommentThunk } from './store/comments.js'
import { createCommentCard, pickRandomHelper } from './utils.js';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)

  const [commentText, setCommentText] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    dispatch(getCommentsThunk())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(deleteCommentThunk(id))
  }

  let commentCards = Object.values(comments)?.map(comment => (
    createCommentCard(comment, handleDelete))).reverse()


  return (
    <div className='centered-container'>
      <h1 className='app-header'>Article</h1>
      <div className='flx-c'>
        <div className='helper-btn al-c' onClick={pickRandomHelper}>PICK A RANDOM HELPER</div>
        <div>We just wrote an article on something we care deeply about.</div>
        <div>It's a really good article...  I promise!</div>
        <br></br>
        <div>Let's allow our users to share their thoughts in the comments section.  =]</div>
      </div>

      <div className='create-comment'>
        <h3 className='al-c'>Add your comment</h3>
        <form className='flx-c' onSubmit={null} >
          <label className='al-c'>Username</label>
          <input type='text' required onChange={(e) => setUsername(e.target.value)} value={username}></input>
          <label className='al-c'>comment</label>
          <input type='textArea' required onChange={(e) => setCommentText(e.target.value)} value={commentText}></input>
          <div className='comment-btn'>Add Comment</div>
        </form>
      </div>

      <br></br>
      <div className='centered-container'>
        <h1 className='comments-header'>COMMENTS</h1>
        <div className="App">
          {commentCards}
        </div>
      </div>
    </div>
  );
}

export default App;

