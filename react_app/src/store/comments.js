const GET_COMMENTS = 'comments/LOAD'
const DELETE_COMMENT = 'comment/DELETE'


const getCommentsAction = (commentsOject) => {
    return {
        type: GET_COMMENTS,
        payload: commentsOject
    }
}


export const getCommentsThunk = () => async (dispatch) => {
    const res = await fetch('/comments')

    if (res.ok) {
        const comments = await res.json()
        dispatch(getCommentsAction(comments.comments))
    }
}


const initialState = {
    comments: []
}

export default function commentsReducer(state = initialState, action) {
    const newState = { ...state }
    switch (action.type) {
        case GET_COMMENTS:
            newState.comments = action.payload
            return newState
        case DELETE_COMMENT:
            let comments = newState.comments.filter(comment => comment.id !== action.payload)
            newState.comments = comments
            return newState
        default:
            return state
    }
}