import fetch from 'cross-fetch'

export const LIST_DATA_URL = 'https://raw.githubusercontent.com/gsayem/ags-eazy-web/master/public/list_687.json'
//export const DETAIL_DATA_URL = 'http://5b35ede16005b00014c5dc86.mockapi.io/view/'
//export const DETAIL_DATA_URL = 'https://raw.githubusercontent.com/gsayem/ags-eazy-web/master/public/DetailData/DETAIL_DATA_URL1.json'

//export const SIMILAR_ITEM_DATA_URL = 'http://5b35ede16005b00014c5dc86.mockapi.io/similar/'

export const REQUEST_DATA = 'REQUEST_DATA'
export const REQUEST_DATA_BY_ID = 'REQUEST_DATA_BY_ID'
export const SIMILAR_ITEM_DATA = 'SIMILAR_ITEM_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const SELECT_DATA = 'SELECT_DATA'
export const INVALIDATE_DATA = 'INVALIDATE_DATA'

export function selectData(agsEazy) {
  return {
    type: SELECT_DATA,
    agsEazy
  }
}

export function invalidateData(agsEazy) {
  return {
    type: INVALIDATE_DATA,
    agsEazy
  }
}

function getDetailDataURLById(id) {
  return "https://raw.githubusercontent.com/gsayem/ags-eazy-web/master/public/DetailData/DETAIL_DATA_URL" + id + ".json";
}
function getSimilarDataURLById(id) {
  return "https://raw.githubusercontent.com/gsayem/ags-eazy-web/master/public/SimilarData/SIMILAR_ITEM_DATA_URL" + id + ".json";
}

function requestData(agsEazy) {
  return {
    type: REQUEST_DATA,
    agsEazy
  }
}


function receiveData(agsEazy, json, state) {
  return {
    type: RECEIVE_DATA,
    agsEazy,
    data: json.data,
    receivedAt: Date.now()
  }
}

function fetchData(agsEazy) {
  return (dispatch, getState) => {
    dispatch(requestData(agsEazy))
    return fetch(LIST_DATA_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveData(agsEazy, json, getState())))
  }
}

function shouldFetchData(state, agsEazy) {
  const data = state.dataRecived[agsEazy];
  if (!data) {
    return true
  } else if (data.isFetching) {
    return false
  } else {
    return data.didInvalidate
  }
}

export function fetchDataIfNeeded(agsEazy) {
  return (dispatch, getState) => {
    if (shouldFetchData(getState(), agsEazy)) {
      return dispatch(fetchData(agsEazy), agsEazy)
    }
  }
}

// Detail data by Id
function requestDataById(Id, agsEazy) {
  return {
    type: REQUEST_DATA_BY_ID,
    agsEazy,
    id: Id
  }
}

function receiveDataById(id, agsEazy, json, state) {
  return {
    type: REQUEST_DATA_BY_ID,
    agsEazy,
    id: json.id,
    data: json.data,
    links: json.links,
    receivedAt: Date.now()
  }
}

function fetchDataById(id, agsEazy) {
  return (dispatch, getState) => {
    dispatch(requestDataById(id, agsEazy))
    //var detailData = fetch(DETAIL_DATA_URL + id).then(response => response.json()).then(json => dispatch(receiveDataById(id, "detailData", json, getState())));
    var detailData = fetch(getDetailDataURLById(id)).then(response => response.json()).then(json => dispatch(receiveDataById(id, "detailData", json, getState())));

    return detailData;
  }
}



function shouldFetchDataById(id, state, agsEazy) {
  const data = state.dataRecived[agsEazy];
  if (!data) {
    return true
  } else if (data.isFetching) {
    return false
  } else {
    return data.didInvalidate
  }
}
export function fetchDataByIdIfNeeded(id, agsEazy) {
  return (dispatch, getState) => {
    if (shouldFetchDataById(id, getState(), agsEazy)) {
      return dispatch(fetchDataById(id, agsEazy), agsEazy)
    }
  }
}

//Similar Data 
function requestSimilarDataById(Id, agsEazy) {
  return {
    type: SIMILAR_ITEM_DATA,
    agsEazy,
    id: Id
  }
}
function receiveSimilarDataById(id, agsEazy, json, state) {
  return {
    type: SIMILAR_ITEM_DATA,
    agsEazy,
    id: json.id,
    data: json.data,
    receivedAt: Date.now()
  }
}

function fetchSimilarDataById(id, agsEazy) {
  return (dispatch, getState) => {
    dispatch(requestSimilarDataById(id, agsEazy))
    //var ds = fetch(SIMILAR_ITEM_DATA_URL + id).then(response => response.json()).then(json => dispatch(receiveSimilarDataById(id, agsEazy, json, getState())))
    var ds = fetch(getSimilarDataURLById(id)).then(response => response.json()).then(json => dispatch(receiveSimilarDataById(id, agsEazy, json, getState())))
    return ds;
  }
}
function shouldFetchSimilarDataById(id, state, agsEazy) {
  const data = state.dataRecived[agsEazy];
  if (!data) {
    return true
  } else if (data.isFetching) {
    return false
  } else {
    return data.didInvalidate
  }
}

export function fetchSimilarDataByIdIfNeeded(id, agsEazy) {
  return (dispatch, getState) => {
    if (shouldFetchSimilarDataById(id, getState(), agsEazy)) {
      return dispatch(fetchSimilarDataById(id, agsEazy), agsEazy)
    }
  }
}