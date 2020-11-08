import axios from "../axiosConfig";

const ConstructHeader = (isUkLanguage) => ({
  headers: {
    isUkLanguage: isUkLanguage,
  },
});

const constructResponseHeader = () => ({
  headers: {
    crossorigin: true,
  },
});

const post = (url, isUKLanguage, request, successCallback, failureCallback) =>
  axios
    .post(url, request, ConstructHeader(isUKLanguage))
    .then((response) => successCallback(response.data.Result))
    .catch((error) => {
      let message = error.message;
      if (
        error.response != null &&
        error.response.status === 500 &&
        !error.response.data.succeeded
      ) {
        //message Here
      }

      if (error.message) {
        return failureCallback(message);
      }
    });

const get = (url, isUKLanguage, successCallback, failureCallback) =>
  axios
    .get(url, ConstructHeader(isUKLanguage))
        //.then((response) => successCallback(response.data.Result))
        .then((response) => successCallback(response))
    .catch((error) => {
      let message = error.message;
      if (
        error.response != null &&
        error.response.status === 500 &&
        !error.response.data.succeeded
      ) {
        message = error.response.data.Result;
      }

      if (error.message) {
        return failureCallback(message);
      }

      return null;
    });

export default { get, post };
