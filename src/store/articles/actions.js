import { apiUrl } from "../../utils/constants";

export const REQUEST_ARTICLES_LOADING = "ARTICLES::REQUEST_LOADING";
export const REQUEST_ARTICLES_FAILURE = "ARTICLES::REQUEST_FAILURE";
export const REQUEST_ARTICLES_SUCCESS = "ARTICLES::REQUEST_SUCCESS";

export const getArticlesLoading = () => ({
  type: REQUEST_ARTICLES_LOADING,
});
export const getArticlesSuccess = (articles) => ({
  type: REQUEST_ARTICLES_SUCCESS,
  payload: articles,
});
export const getArticlesFailure = (err) => ({
  type: REQUEST_ARTICLES_FAILURE,
  payload: err,
});

export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesLoading());

  // try {
  //   const response = await fetch(apiUrl);
  //
  //   if (!response.ok) {
  //     throw new Error("everything went to the #####");
  //   }
  //
  //   const result = await response.json();
  //
  //   dispatch(getArticlesSuccess(result));
  // } catch (err) {
  //   console.log(err);
  //   dispatch(getArticlesFailure(err.message));
  // }

 fetch(apiUrl).then((response) => {
   if (!response.ok) {
     throw new Error("everything went to the #####");
   }
   return  response.json();
 }).then(result => dispatch(getArticlesSuccess(result)))
   .catch((err) => {
     console.log(err);
     dispatch(getArticlesFailure(err.message));
   })
};
