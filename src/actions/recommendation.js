import { FETCH_PRODUCT_RECOMMENDATION, GET_PRODUCT_RECOMMENDATION, FETCH_RECOMMENDATION_REMINDER, GET_RECOMMENDATION_REMINDER, RESET_REMINDER } from './types'
import * as env from './env'


const url = env.API_URL
const header = env.API_HEADER

export function fetchProductRecommendation(keyword) {
  return {
    type: FETCH_PRODUCT_RECOMMENDATION,
    keyword,
  };
}

export function getProductRecommendation(keyword) {
  return (dispatch, getState) => {
    dispatch(fetchProductRecommendation(keyword))

    return fetch(url + 'product/keyword/' + keyword, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(setRecommendationResponse({ result: responseData, keyword }))
    })
    .done();
  }
}

export function setRecommendationResponse({ result, keyword }) {
  return {
    type: GET_PRODUCT_RECOMMENDATION,
    result,
    keyword,
  };
}


export function fetchRecommendationReminder(keyword) {
  return {
    type: FETCH_RECOMMENDATION_REMINDER,
    keyword,
  };
}

export function setReminderResponse({ result, keyword }) {
  return {
    type: GET_RECOMMENDATION_REMINDER,
    result,
    keyword,
  };
}

export function getReminderRecommendation(data) {
  return (dispatch) => {
    dispatch(fetchRecommendationReminder(data.keyword));

    return fetch(`${url}buyrequest/recommendation`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
        keyword: data.keyword,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setRecommendationResponse({ result: responseData, keyword: data.keyword }));
    })
    .done();
  };
}

export function resetReminder() {
  return {
    type: RESET_REMINDER,
  };
}
