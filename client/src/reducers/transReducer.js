import { FETCH_REQ, LOADER_ON, LOADER_OFF, SET_TEMP_FIELD_DATA, SET_LANGUAGE_FIELD_DATA, SET_TAGS_FIELD_DATA } from '../actions/types'

const initialState = {
    data: [],
    loading: false,
    tempData: [],
    languageData: [],
    tagsData: []
}
export default function(state = initialState, action){
    switch (action.type){
        case FETCH_REQ:
            return {
                ...state,
                data: action.payload
            }
        case LOADER_ON:
            return {
                ...state,
                loading: true
            }     
        case LOADER_OFF:
            return {
                ...state,
                loading: false
            }
        case SET_TEMP_FIELD_DATA:
            return {
                ...state,
                tempData: action.payload
            }
        case SET_LANGUAGE_FIELD_DATA:
            return {
                ...state,
                languageData: action.payload
            }
        case SET_TAGS_FIELD_DATA:
            return {
                ...state,
                tagsData: action.payload
            }
        default:
            return state    
    }
  
}