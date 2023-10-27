import axios from "axios";
export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const GET_FROM_LOCAL_STORAGE = "GET_FROM_LOCAL_STORAGE";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}
export function getFromLocalStorage(not) {
  return { type: NOT_EKLE };
}
export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}
export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        dispatch(notEkle(yeniNot));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const notSilAPI = (id) => (dispatch) => {
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(res.data.data));
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
