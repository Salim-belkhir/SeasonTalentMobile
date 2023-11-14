const FETCH_COMPANIES = "FETCH_COMPANIES";
const FETCH_COMPANY_BY_ID = "FETCH_COMPANY_BY_ID";
const CREATE_COMPANY = "CREATE_COMPANY";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const DELETE_COMPANY = "DELETE_COMPANY";

const fetchCompanies = () => ({
  type: FETCH_COMPANIES,
});

const fetchCompanyById = (company) => ({
  type: FETCH_COMPANY_BY_ID,
  payload: company,
});

const createCompany = (company) => ({
  type: CREATE_COMPANY,
  payload: company,
});

const updateCompany = (company) => ({
  type: UPDATE_COMPANY,
  payload: company,
});

const deleteCompany = (companyId) => ({
  type: DELETE_COMPANY,
  payload: companyId,
});

export {
  CREATE_COMPANY,
  DELETE_COMPANY,
  FETCH_COMPANIES,
  FETCH_COMPANY_BY_ID,
  UPDATE_COMPANY,
  createCompany,
  deleteCompany,
  fetchCompanies,
  fetchCompanyById,
  updateCompany,
};
