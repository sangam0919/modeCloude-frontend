// src/redux/actions.js
import axios from 'axios';
import {FETCH_DIARIES_REQUEST,FETCH_DIARIES_SUCCESS,FETCH_DIARIES_FAILURE,} from './actionTypes';
import { fetchMyDiaries as getDiariesFromApi } from '../api/diary';
import { SAVE_EMOTION_ONLY_REQUEST, SAVE_EMOTION_ONLY_SUCCESS, SAVE_EMOTION_ONLY_FAILURE,} from './actionTypes';
import { saveEmotionOnly as requestEmotionOnly } from '../api/diary';
// 비동기 액션 생성 함수
export const fetchMyDiaries = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DIARIES_REQUEST });

    try {
      const data = await getDiariesFromApi(); // API 호출
      dispatch({ type: FETCH_DIARIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DIARIES_FAILURE, payload: error.message });
    }
  };
};
export const saveEmotionOnly = (data) => {
  return async (dispatch) => {
    dispatch({ type: SAVE_EMOTION_ONLY_REQUEST });

    try {
      const res = await requestEmotionOnly(data); 
      dispatch({ type: SAVE_EMOTION_ONLY_SUCCESS, payload: res });
    } catch (error) {
      dispatch({ type: SAVE_EMOTION_ONLY_FAILURE, payload: error.message });
    }
  };
};
