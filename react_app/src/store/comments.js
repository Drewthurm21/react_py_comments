const GET_COMMENTS = 'comments/LOAD'
const CREATE_COMMENT = 'comment/ADD'
const DELETE_COMMENT = 'comment/DELETE'


const getCommentsAction = (commentsOject) => {
    return {
        type: GET_COMMENTS,
        payload: commentsOject
    }
}

const deleteCommentAction = (deletedComment) => {
    return {
        type: DELETE_COMMENT,
        payload: deletedComment
    }
}

const createCommentAction = (comment) => {
    return {
        type: CREATE_COMMENT,
        payload: comment
    }
}

export const getCommentsThunk = () => async (dispatch) => {
    //GET ALL COMMENTS FROM THE DB
}

export const createCommentThunk = (comment) => async (dispatch) => {
    //POST A COMMENT TO THE DB
}

export const deleteCommentThunk = (id) => async (dispatch) => {
    //DELETE A COMMENT FROM THE DB
}


const initialState = {
    comments: []
}

export default function commentsReducer(state = initialState, action) {

}