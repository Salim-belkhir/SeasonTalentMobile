// Define the action types

const FETCH_CANDIDATES = "FETCH_CANDIDATES";
const FETCH_MATCHING_CANDIDATES = "FETCH_MATCHING_CANDIDATES";
const FETCH_CANDIDATE_BY_ID = "FETCH_CANDIDATE_BY_ID";
const SEARCH_CANDIDATE = "SEARCH_CANDIDATE";
const LOAD_RECENTLY_CONSULTERD_CANDIDATE = "LOAD_RECENTLY_CONSULTERD_CANDIDATE";
const FILTER_CANDIDATES = "FILTER_CANDIDATES";
const FILTER_RESULTS_CANDIDATES = "FILTER_RESULTS_CANDIDATES";
const FETCH_CANDIDATES_BY_JOB_OFFER_ID = "FETCH_CANDIDATE_BY_JOB_OFFER_ID";
const AFFECT_CANDIDATE_TO_JOB_OFFER = "AFFECT_CANDIDATE_TO_JOB_OFFER";
const FETCH_FAVORITE_CANDIDATES = "FETCH_FAVORITE_CANDIDATES";
const ADD_CANIDATE_TO_FAVORITE = "ADD_CANIDATE_TO_FAVORITE";
const DELETE_CANIDATE_FROM_FAVORITE = "DELETE_CANIDATE_FROM_FAVORITE";

// Define the action creators

const fetchCandidates = (candidates) => ({
  type: FETCH_CANDIDATES,
  payload: candidates,
});

const fetchMatchingCandidates = () => ({
  type: FETCH_MATCHING_CANDIDATES,
});
const fetchCandidateById = (candidate) => ({
  type: FETCH_CANDIDATE_BY_ID,
  payload: candidate,
});

const searchCandidate = (candidate) => ({
  type: SEARCH_CANDIDATE,
  payload: candidate,
});

const loadRecentlyConsultedCandidates = (candidate) => ({
  type: LOAD_RECENTLY_CONSULTERD_CANDIDATE,
  payload: candidate,
});

const filterCandidates = (filters) => ({
  type: FILTER_CANDIDATES,
  payload: filters,
});

const filterResultsCandidates = (filters) => ({
  type: FILTER_RESULTS_CANDIDATES,
  payload: filters,
});

const fetchCandidateByJobOfferId = (candidate) => ({
  type: FETCH_CANDIDATES_BY_JOB_OFFER_ID,
  payload: candidate,
});

const affectCandidateToJobOffer = (candidate) => ({
  type: AFFECT_CANDIDATE_TO_JOB_OFFER,
  payload: candidate,
});

const fetchFavoriteCandidates = () => ({
  type: FETCH_FAVORITE_CANDIDATES,
});

const addCandidateToFavorite = (candidateId) => ({
  type: ADD_CANIDATE_TO_FAVORITE,
  payload: candidateId,
});

const deleteCandidateFromFavorite = (candidateId) => ({
  type: DELETE_CANIDATE_FROM_FAVORITE,
  payload: candidateId,
});

export {
  ADD_CANIDATE_TO_FAVORITE,
  AFFECT_CANDIDATE_TO_JOB_OFFER,
  DELETE_CANIDATE_FROM_FAVORITE,
  FETCH_CANDIDATES,
  FETCH_CANDIDATES_BY_JOB_OFFER_ID,
  FETCH_CANDIDATE_BY_ID,
  FETCH_FAVORITE_CANDIDATES,
  FETCH_MATCHING_CANDIDATES,
  FILTER_CANDIDATES,
  FILTER_RESULTS_CANDIDATES,
  LOAD_RECENTLY_CONSULTERD_CANDIDATE,
  SEARCH_CANDIDATE,
  addCandidateToFavorite,
  affectCandidateToJobOffer,
  deleteCandidateFromFavorite,
  fetchCandidateById,
  fetchCandidateByJobOfferId,
  fetchCandidates,
  fetchFavoriteCandidates,
  fetchMatchingCandidates,
  filterCandidates,
  filterResultsCandidates,
  loadRecentlyConsultedCandidates,
  searchCandidate,
};
