const FETCH_COMPANIES = "FETCH_COMPANIES";
const FETCH_COMPANY_BY_ID = "FETCH_COMPANY_BY_ID";
const CREATE_COMPANY = "CREATE_COMPANY";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const DELETE_COMPANY = "DELETE_COMPANY";
const CHECK_IF_PRINCIPAL = "CHECK_IF_PRINCIPAL";

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

const checkIfPrincipal = (companyId) => ({
  type: CHECK_IF_PRINCIPAL,
  payload: companyId,
});

export {
  CHECK_IF_PRINCIPAL,
  CREATE_COMPANY,
  DELETE_COMPANY,
  FETCH_COMPANIES,
  FETCH_COMPANY_BY_ID,
  UPDATE_COMPANY,
  checkIfPrincipal,
  createCompany,
  deleteCompany,
  fetchCompanies,
  fetchCompanyById,
  updateCompany,
};
