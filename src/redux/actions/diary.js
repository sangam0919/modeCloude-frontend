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
  FOLLOWER_DIARY_FAILURE,
  DELETE_DIARY_REQUEST,
  DELETE_DIARY_SUCCESS,
  DELETE_DIARY_FAILURE,
  FETCH_PUBLIC_DIARIES_REQUEST,
  FETCH_PUBLIC_DIARIES_SUCCESS,
  FETCH_PUBLIC_DIARIES_FAILURE
} from '../types/diary';

import {
  fetchMyDiaries as getDiariesFromApi,
  saveEmotionOnly as requestEmotionOnly,
  getDiaryDetail,
  updateDiary as updateDiaryFromApi,
  getfollowerDiaries,
  deleteDiary,
  getPublicDiaries
} from '../../api/diary';

// 내일기 
export const fetchMyDiaries = () => async (dispatch) => {
  dispatch({ type: FETCH_DIARIES_REQUEST });
  try {
    const data = await getDiariesFromApi();
    dispatch({ type: FETCH_DIARIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_DIARIES_FAILURE, payload: error.message });
  }
};
// 일기 삭제 
export const deleteDiaryActions = (id) => async (dispatch) => {
  dispatch({ type : DELETE_DIARY_REQUEST });
  try {
    const data = await deleteDiary(id);
    dispatch({ type: DELETE_DIARY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: DELETE_DIARY_FAILURE, payload: error.message });
  }
}

// 팔로우한 사람 
export const fetchFollowerDiary = () => async (dispatch) => {
  dispatch({ type: FOLLOWER_DIARY_REQUEST });
  try {
    const data = await getfollowerDiaries(); 
    console.log('API 응답 데이터:', data); 
    dispatch({ type: FOLLOWER_DIARY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FOLLOWER_DIARY_FAILURE, payload: error.message });
  }
};

// 감정만 저장 
export const saveEmotionOnly = (data) => async (dispatch) => {
  dispatch({ type: SAVE_EMOTION_ONLY_REQUEST });
  try {
    const res = await requestEmotionOnly(data);
    dispatch({ type: SAVE_EMOTION_ONLY_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: SAVE_EMOTION_ONLY_FAILURE, payload: error.message });
  }
};

// 상세보기 
export const fetchDiaryDetail = (id) => async (dispatch) => {
  dispatch({ type: FETCH_DIARY_DETAIL_REQUEST });
  try {
    const data = await getDiaryDetail(id);
    dispatch({ type: FETCH_DIARY_DETAIL_SUCCESS, payload: data.diary });
  } catch (error) {
    dispatch({ type: FETCH_DIARY_DETAIL_FAILURE, payload: error.message });
  }
};

// 수정
export const updateDiary = (id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_DIARY_REQUEST });
  try {
    const response = await updateDiaryFromApi(id, data);
    dispatch({ type: UPDATE_DIARY_SUCCESS , response }); 
  } catch (error) {
    dispatch({ type: UPDATE_DIARY_FAILURE, payload: error.message });
  }
};


export const resetUpdateStatus = () => ({
  type: RESET_UPDATE_STATUS
});


// 공개된 일기 로그인한 사람말고 
export const fetchPublicDiaries = (uid) => async (dispatch) => {
  dispatch({ type: FETCH_PUBLIC_DIARIES_REQUEST });
  try {
    const data = await getPublicDiaries(uid);
    dispatch({ type: FETCH_PUBLIC_DIARIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PUBLIC_DIARIES_FAILURE, payload: error.message });
  }
};
