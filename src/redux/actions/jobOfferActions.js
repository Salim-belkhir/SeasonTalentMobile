// Define the action types
const FETCH_JOB_OFFERS_REQUEST = "FETCH_JOB_OFFERS_REQUEST";
const FETCH_JOB_OFFERS_SUCCESS = "FETCH_JOB_OFFERS_SUCCESS";
const FETCH_JOB_OFFERS_FAILURE = "FETCH_JOB_OFFERS_FAILURE";
const FETCH_JOB_OFFER_BY_ID_REQUEST = "FETCH_JOB_OFFER_BY_ID_REQUEST";
const FETCH_JOB_OFFER_BY_ID_SUCCESS = "FETCH_JOB_OFFER_BY_ID_SUCCESS";
const FETCH_JOB_OFFER_BY_ID_FAILURE = "FETCH_JOB_OFFER_BY_ID_FAILURE";
const CREATE_JOB_OFFER_REQUEST = "CREATE_JOB_OFFER_REQUEST";
const CREATE_JOB_OFFER_SUCCESS = "CREATE_JOB_OFFER_SUCCESS";
const CREATE_JOB_OFFER_FAILURE = "CREATE_JOB_OFFER_FAILURE";
const UPDATE_JOB_OFFER_REQUEST = "UPDATE_JOB_OFFER_REQUEST";
const UPDATE_JOB_OFFER_SUCCESS = "UPDATE_JOB_OFFER_SUCCESS";
const UPDATE_JOB_OFFER_FAILURE = "UPDATE_JOB_OFFER_FAILURE";
const DELETE_JOB_OFFER_REQUEST = "DELETE_JOB_OFFER_REQUEST";
const DELETE_JOB_OFFER_SUCCESS = "DELETE_JOB_OFFER_SUCCESS";
const DELETE_JOB_OFFER_FAILURE = "DELETE_JOB_OFFER_FAILURE";

// Define the action creators
const fetchJobOffersRequest = () => ({
  type: FETCH_JOB_OFFERS_REQUEST,
});

const fetchJobOffersSuccess = (jobOffers) => ({
  type: FETCH_JOB_OFFERS_SUCCESS,
  payload: jobOffers,
});

const fetchJobOffersFailure = (error) => ({
  type: FETCH_JOB_OFFERS_FAILURE,
  payload: error,
});

const fetchJobOfferByIdRequest = () => ({
  type: FETCH_JOB_OFFER_BY_ID_REQUEST,
});

const fetchJobOfferByIdSuccess = (jobOffer) => ({
  type: FETCH_JOB_OFFER_BY_ID_SUCCESS,
  payload: jobOffer,
});

const fetchJobOfferByIdFailure = (error) => ({
  type: FETCH_JOB_OFFER_BY_ID_FAILURE,
  payload: error,
});

const createJobOfferRequest = () => ({
  type: CREATE_JOB_OFFER_REQUEST,
});

const createJobOfferSuccess = (jobOffer) => ({
  type: CREATE_JOB_OFFER_SUCCESS,
  payload: jobOffer,
});

const createJobOfferFailure = (error) => ({
  type: CREATE_JOB_OFFER_FAILURE,
  payload: error,
});

const updateJobOfferRequest = () => ({
  type: UPDATE_JOB_OFFER_REQUEST,
});

const updateJobOfferSuccess = (jobOffer) => ({
  type: UPDATE_JOB_OFFER_SUCCESS,
  payload: jobOffer,
});

const updateJobOfferFailure = (error) => ({
  type: UPDATE_JOB_OFFER_FAILURE,
  payload: error,
});

const deleteJobOfferRequest = () => ({
  type: DELETE_JOB_OFFER_REQUEST,
});

const deleteJobOfferSuccess = (jobOfferId) => ({
  type: DELETE_JOB_OFFER_SUCCESS,
  payload: jobOfferId,
});

const deleteJobOfferFailure = (error) => ({
  type: DELETE_JOB_OFFER_FAILURE,
  payload: error,
});

export {
  FETCH_JOB_OFFERS_REQUEST,
  FETCH_JOB_OFFERS_SUCCESS,
  FETCH_JOB_OFFERS_FAILURE,
  FETCH_JOB_OFFER_BY_ID_REQUEST,
  FETCH_JOB_OFFER_BY_ID_SUCCESS,
  FETCH_JOB_OFFER_BY_ID_FAILURE,
  CREATE_JOB_OFFER_REQUEST,
  CREATE_JOB_OFFER_SUCCESS,
  CREATE_JOB_OFFER_FAILURE,
  UPDATE_JOB_OFFER_REQUEST,
  UPDATE_JOB_OFFER_SUCCESS,
  UPDATE_JOB_OFFER_FAILURE,
  DELETE_JOB_OFFER_REQUEST,
  DELETE_JOB_OFFER_SUCCESS,
  DELETE_JOB_OFFER_FAILURE,
  fetchJobOffersRequest,
  fetchJobOffersSuccess,
  fetchJobOffersFailure,
  fetchJobOfferByIdRequest,
  fetchJobOfferByIdSuccess,
  fetchJobOfferByIdFailure,
  createJobOfferRequest,
  createJobOfferSuccess,
  createJobOfferFailure,
  updateJobOfferRequest,
  updateJobOfferSuccess,
  updateJobOfferFailure,
  deleteJobOfferRequest,
  deleteJobOfferSuccess,
  deleteJobOfferFailure,
};
