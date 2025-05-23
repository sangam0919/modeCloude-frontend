import {
  SAVE_EMOTION_ONLY_REQUEST,
  SAVE_EMOTION_ONLY_SUCCESS,
  SAVE_EMOTION_ONLY_FAILURE,
  FETCH_DIARIES_REQUEST,
  FETCH_DIARIES_SUCCESS,
  FETCH_DIARIES_FAILURE
} from './actionTypes';

const initialState = {
  loading: false,
  diaries: [],
  error: null,
  emotionSaveStatus: 'idle', 
  emotionError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIARIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DIARIES_SUCCESS:
      return { ...state, loading: false, diaries: action.payload };
    case FETCH_DIARIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SAVE_EMOTION_ONLY_REQUEST:
      return { ...state, emotionSaveStatus: 'loading', emotionError: null };
    case SAVE_EMOTION_ONLY_SUCCESS:
      return { ...state, emotionSaveStatus: 'succeeded' };
    case SAVE_EMOTION_ONLY_FAILURE:
      return { ...state, emotionSaveStatus: 'failed', emotionError: action.payload };

    default:
      return state;
  }
};

export default reducer;
