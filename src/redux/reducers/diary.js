import {
  FETCH_DIARIES_REQUEST,
  FETCH_DIARIES_SUCCESS,
  FETCH_DIARIES_FAILURE,
  SAVE_EMOTION_ONLY_REQUEST,
  SAVE_EMOTION_ONLY_SUCCESS,
  SAVE_EMOTION_ONLY_FAILURE,
  FETCH_DIARY_DETAIL_REQUEST,
  FETCH_DIARY_DETAIL_SUCCESS,
  FETCH_DIARY_DETAIL_FAILURE,
  UPDATE_DIARY_REQUEST,
  UPDATE_DIARY_SUCCESS,
  UPDATE_DIARY_FAILURE,
  RESET_UPDATE_STATUS, 
  FOLLOWER_DIARY_REQUEST,
  FOLLOWER_DIARY_SUCCESS,
  FOLLOWER_DIARY_FAILURE
} from '../types/diary';

const initialState = {
  loading: false,
  myDiaries: [],
  followerDiaries: [],
  detail: null,
  error: null,
  emotionSaveStatus: 'idle',
  emotionError: null,
  updateStatus: 'idle',
  updateError: null,
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    // 내 글 목록
    case FETCH_DIARIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DIARIES_SUCCESS:
      return { ...state, loading: false, myDiaries: action.payload };
    case FETCH_DIARIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // 팔로우한 일기
      case FOLLOWER_DIARY_REQUEST:
        return { ...state, loading: true, error: null };
      case FOLLOWER_DIARY_SUCCESS:
        return { ...state, loading: false, followerDiaries: action.payload };
      case FOLLOWER_DIARY_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
    // 감정 저장
    case SAVE_EMOTION_ONLY_REQUEST:
      return { ...state, emotionSaveStatus: 'loading', emotionError: null };
    case SAVE_EMOTION_ONLY_SUCCESS:
      return { ...state, emotionSaveStatus: 'succeeded' };
    case SAVE_EMOTION_ONLY_FAILURE:
      return { ...state, emotionSaveStatus: 'failed', emotionError: action.payload };

    // 상세 조회
    case FETCH_DIARY_DETAIL_REQUEST:
      return { ...state, loading: true, detail: null };
    case FETCH_DIARY_DETAIL_SUCCESS:
      return { ...state, loading: false, detail: action.payload };
    case FETCH_DIARY_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // 수정 저장
    case UPDATE_DIARY_REQUEST:
      return { ...state, updateStatus: 'loading', updateError: null };
    case UPDATE_DIARY_SUCCESS:
      return { ...state, updateStatus: 'succeeded' };
    case UPDATE_DIARY_FAILURE:
      return { ...state, updateStatus: 'failed', updateError: action.payload };

    // 수정 상태 초기화
    case RESET_UPDATE_STATUS:
      return { ...state, updateStatus: 'idle', updateError: null };

    default:
      return state;
  }
};

export default diaryReducer;
