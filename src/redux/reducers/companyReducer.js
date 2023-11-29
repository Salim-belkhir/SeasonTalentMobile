import { companiesActions } from "../actions";

const initialState = {
  companies: [
    {
      id: 1,
      name: "Google",
      address: "1600 Amphitheatre Pkwy, Mountain View, CA 94043",
      logo: "https://static.vecteezy.com/system/resources/previews/022/484/503/non_2x/google-lens-icon-logo-symbol-free-png.png",
      contact: "google@gmail.com",
      proofs: [
        {
          id: 1,
          name: "GoogleProof.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
          mimeType: "application/pdf",
        },
        {
          id: 2,
          name: "GoogleProof2.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
          mimeType: "application/pdf",
        },
        {
          id: 3,
          name: "GoogleProof3.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png",
          mimeType: "application/pdf",
        },
      ],
    },
    {
      id: 2,
      name: "Microsoft",
      address: "One Microsoft Way, Redmond, WA 98052",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      contact: "microsoft@outlook.com",
      proofs: [
        {
          id: 1,
          name: "MicrosoftProof.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
          mimeType: "application/pdf",
        },
        {
          id: 2,
          name: "MicrosoftProof2.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
          mimeType: "application/pdf",
        },
      ],
    },
    {
      id: 3,
      name: "Netflix",
      address: "100 Winchester Cir, Los Gatos, CA 95032",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
      contact: "netftix@netflix.com",
      proofs: [
        {
          id: 1,
          name: "NetflixProof.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
          mimeType: "application/pdf",
        },
      ],
    },
    {
      id: 4,
      name: "Tesla",
      address: "45500 Fremont Blvd, Fremont, CA 94538",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1024px-Tesla_Motors.svg.png",
      contact: "tesla@swift.com",
      proofs: [
        {
          id: 1,
          name: "TeslaProof.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1024px-Tesla_Motors.svg.png",
          mimeType: "application/pdf",
        },
      ],
    },
    {
      id: 5,
      name: "Apple",
      address: "1 Apple Park Way, Cupertino, CA 95014, États-Unis",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
      location: "États-Unis",
      contact: "apple@apple.com",
      proofs: [
        {
          id: 1,
          name: "AppleProof.pdf",
          uri: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202306080953",
          mimeType: "application/pdf",
        },
      ],
    },
    {
      id: 6,
      name: "Facebook",
      address: "1 Hacker Way, Menlo Park, CA 94025",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
      contact: "facebook@contact.com",
      proofs: [
        {
          id: 1,
          name: "FacebookProof.pdf",
          uri: "https://www.facebook.com/images/fb_icon_325x325.png",
          mimeType: "application/pdf",
        },
      ],
    },
    {
      id: 8,
      name: "Amazon",
      address: "888 Brannan St, San Francisco, CA 94103",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      contact: "amazon@contanct.com",
      proofs: [
        {
          id: 1,
          name: "AmazonProof.pdf",
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
          mimeType: "application/pdf",
        },
      ],
    },
  ],
  principalCompany: {
    id: 7,
    name: "Airbnb",
    address: "888 Brannan St, San Francisco, CA 94103",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png",
    contact: "airbnb@gmail.com",
    proofs: [
      {
        id: 1,
        name: "AirbnbProof.pdf",
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png",
        mimeType: "application/pdf",
      },
    ],
  },
  selectedCompany: null,
  loading: false,
  error: null,
};

// Define the reducer function
const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case companiesActions.FETCH_COMPANIES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case companiesActions.FETCH_COMPANY_BY_ID:
      return {
        ...state,
        selectedCompany: action.payload,
        loading: true,
        error: null,
      };
    case companiesActions.CREATE_COMPANY:
      return {
        ...state,
        companies: [
          {
            // random id
            id: Math.floor(Math.random() * 99999),
            name: action.payload.title,
            address: action.payload.address,
            logo: action.payload.logo,
            ...action.payload,
          },
          ...state.companies,
        ],
        loading: true,
        error: null,
      };
    case companiesActions.UPDATE_COMPANY:
      if (action.payload.isPrincipal) {
        return {
          ...state,
          principalCompany: action.payload,
          loading: true,
          error: null,
        };
      } else {
        return {
          ...state,
          companies: state.companies.map((company) =>
            company.id === action.payload.id ? action.payload : company
          ),
          loading: true,
          error: null,
        };
      }
    case companiesActions.DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        ),
        loading: true,
        error: null,
      };
    case companiesActions.CHECK_IF_PRINCIPAL:
      return {
        ...state,
        principalCompany: state.companies.find(
          (company) => company.id === action.payload
        ),
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default companyReducer;
