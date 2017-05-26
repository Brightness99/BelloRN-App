import { FETCH_PRODUCT_RECOMMENDATION, GET_PRODUCT_RECOMMENDATION } from './types'
import * as env from './env'


const url = env.API_URL
const header = env.API_HEADER

export function fetchProductRecommendation() {
  return {
    type: FETCH_PRODUCT_RECOMMENDATION
  }
}

export function getProductRecommendation(keyword) {
  return (dispatch, getState) => {
    dispatch(fetchProductRecommendation())

    return fetch(url + 'product/keyword/' + keyword, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(setRecommendationResponse({ result: responseData}))
    })
    .done()
  }
}

export function setRecommendationResponse({ result }) {
  return {
    type: GET_PRODUCT_RECOMMENDATION,
    result
  }
}
