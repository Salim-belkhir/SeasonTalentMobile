// Define the action types
const FETCH_JOB_OFFERS = "FETCH_JOB_OFFERS";
const FETCH_JOB_OFFER_BY_ID = "FETCH_JOB_OFFER_BY_ID";
const CREATE_JOB_OFFER = "CREATE_JOB_OFFER";
const UPDATE_JOB_OFFER = "UPDATE_JOB_OFFER";
const DELETE_JOB_OFFER = "DELETE_JOB_OFFER";
const SEARCH_JOB_OFFER = "SEARCH_JOB_OFFER";
const LOAD_RECENTLY_CONSULTERD_JOB_OFFER = "LOAD_RECENTLY_CONSULTERD_JOB_OFFER";
const FILTER_JOB_OFFERS = "FILTER_JOB_OFFERS";
const FILTER_RESULTS_JOB_OFFERS = "FILTER_RESULTS_JOB_OFFERS";
const FETCH_JOB_OFFERS_BY_COMPANY_ID = "FETCH_JOB_OFFER_BY_COMPANY_ID";

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

const searchJobOffer = (jobOffer) => ({
  type: SEARCH_JOB_OFFER,
  payload: jobOffer,
});

const loadRecentlyConsultedJobOffers = (jobOffer) => ({
  type: LOAD_RECENTLY_CONSULTERD_JOB_OFFER,
  payload: jobOffer,
});

const filterJobOffers = (filters) => ({
  type: FILTER_JOB_OFFERS,
  payload: filters,
});

const filterResultsJobOffers = (filters) => ({
  type: FILTER_RESULTS_JOB_OFFERS,
  payload: filters,
});

const fetchJobOfferByCompanyId = (jobOffer) => ({
  type: FETCH_JOB_OFFERS_BY_COMPANY_ID,
  payload: jobOffer,
});

export {
  CREATE_JOB_OFFER,
  DELETE_JOB_OFFER,
  FETCH_JOB_OFFERS,
  FETCH_JOB_OFFERS_BY_COMPANY_ID,
  FETCH_JOB_OFFER_BY_ID,
  FILTER_JOB_OFFERS,
  FILTER_RESULTS_JOB_OFFERS,
  LOAD_RECENTLY_CONSULTERD_JOB_OFFER,
  SEARCH_JOB_OFFER,
  UPDATE_JOB_OFFER,
  createJobOffer,
  deleteJobOffer,
  fetchJobOfferByCompanyId,
  fetchJobOfferById,
  fetchJobOffers,
  filterJobOffers,
  filterResultsJobOffers,
  loadRecentlyConsultedJobOffers,
  searchJobOffer,
  updateJobOffer,
};
