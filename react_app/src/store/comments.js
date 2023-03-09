const GET_COMMENTS = 'comments/LOAD'
const DELETE_COMMENT = 'comment/DELETE'
const ADD_COMMENT = 'comment/ADD'

const getCommentsAction = (commentsOject) => {
    return {
        type: GET_COMMENTS,
        payload: commentsOject
    }
}

const deleteCommentAction = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}

const postCommentAction = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}


export const getCommentsThunk = () => async (dispatch) => {
    const res = await fetch('/comments')

    if (res.ok) {
        const comments = await res.json()
        dispatch(getCommentsAction(comments))
    }
}

export const deleteCommentThunk = (id) => async (dispatch) => {
    const res = await fetch(`/comments/${id}`, { method: 'DELETE', })

    if (res.ok) dispatch(deleteCommentAction(id))
}


export const postCommentThunk = (comment) => async (dispatch) => {
    const res = await fetch('/comments', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(comment)
    })

    if (res.ok) {
        let newComment = await res.json()
        dispatch(postCommentAction(newComment))
    }
}


export default function commentsReducer(state = {}, action) {
    const newState = { ...state }

    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case DELETE_COMMENT:
            delete newState[action.id]
            return newState
        default:
            return state
    }
}