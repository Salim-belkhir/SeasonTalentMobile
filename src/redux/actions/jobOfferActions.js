// Define the action types
const FETCH_JOB_OFFERS = "FETCH_JOB_OFFERS";
const FETCH_JOB_OFFER_BY_ID = "FETCH_JOB_OFFER_BY_ID";
const CREATE_JOB_OFFER = "CREATE_JOB_OFFER";
const UPDATE_JOB_OFFER = "UPDATE_JOB_OFFER";
const DELETE_JOB_OFFER = "DELETE_JOB_OFFER";

// Define the action creators

const fetchJobOffers = (jobOffers) => ({
  type: FETCH_JOB_OFFERS,
  payload: jobOffers,
});

const fetchJobOfferById = (jobOffer) => ({
  type: FETCH_JOB_OFFER_BY_ID,
  payload: jobOffer,
});

const createJobOffer = (jobOffer) => ({
  type: CREATE_JOB_OFFER,
  payload: jobOffer,
});

const updateJobOffer = (jobOffer) => ({
  type: UPDATE_JOB_OFFER,
  payload: jobOffer,
});

const deleteJobOffer = (jobOfferId) => ({
  type: DELETE_JOB_OFFER,
  payload: jobOfferId,
});

export {
  FETCH_JOB_OFFERS,
  FETCH_JOB_OFFER_BY_ID,
  CREATE_JOB_OFFER,
  UPDATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  fetchJobOffers,
  fetchJobOfferById,
  createJobOffer,
  updateJobOffer,
  deleteJobOffer,
};
