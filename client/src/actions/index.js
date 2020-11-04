import axios from 'axios'
import {
        FETCH_USER, 
        FETCH_REQ, 
        LOADER_ON, 
        LOADER_OFF, 
        SET_TEMP_FIELD_DATA, 
        SET_LANGUAGE_FIELD_DATA, 
        SET_TAGS_FIELD_DATA} 
from "./types";

export const fetchUser = () => async (dispatch) => {
        const res = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER, payload: res.data})
    }

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token)
    dispatch({type: FETCH_USER, payload:res.data})
}

export const submitRequest = (values, history) => async dispatch =>{
    const res = await axios.post('/api/translate', values)
    
    history.push('/translate')
    dispatch({type: FETCH_USER, payload: res.data})
}

export const fetchRequests = () => async dispatch => {

    dispatch({type: LOADER_ON})
    const res = await axios.get('/api/translate')
    dispatch({type: FETCH_REQ, payload: res.data})
    dispatch({type: LOADER_OFF})
}

export const setTempFieldData = (value) => dispatch => {
    dispatch({type: SET_TEMP_FIELD_DATA, payload: value})
}
export const setLanguageFieldData = (value) => dispatch => {
    dispatch({type: SET_LANGUAGE_FIELD_DATA, payload: value})
}
export const setTagsFieldData = (value) => dispatch => {
    dispatch({type: SET_TAGS_FIELD_DATA, payload: value})
}
