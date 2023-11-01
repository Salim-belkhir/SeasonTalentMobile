import { jobOfferActions } from "../actions";

// Define the initial state of the job offer store
const initialState = {
  jobOffers: [
    {
      id: 1,
      title: "Préparateur de commande",
      company: "Jacquet",
      location: "Montpellier",
      duration: "Juin - Août",
      salary: "1500€",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/JACQUET_LOGO_Drapeau_Avec_Ombre.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: ["Salaire compétitif", "Télétravail", "Mutuelle"],
      skills: ["Rigueur", "Sens de l'organisation", "Travail en équipe"],
    },
    {
      id: 2,
      title: "Développeur Fullstack",
      company: "Google",
      location: "Paris",
      duration: "CDI",
      salary: "1500€",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Designer UX/UI",
      company: "Apple",
      location: "Cupertino",
      duration: "CDI",
      salary: "1500€",
      logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106080953",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["Design thinking", "Adobe Creative Suite", "Sketch", "Figma"],
    },
    {
      id: 5,
      title: "Développeur iOS",
      company: "Facebook",
      location: "Menlo Park",
      duration: "CDI",
      salary: "1500€",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["Swift", "Objective-C", "Xcode", "iOS SDK"],
    },
    {
      id: 6,
      title: "Développeur Java",
      company: "Microsoft",
      location: "Redmond",
      duration: "CDI",
      salary: "1500€",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["Java", "Spring", "Hibernate", "Maven"],
    },
    {
      id: 7,
      title: "Développeur Python",
      company: "Netflix",
      location: "Los Gatos",
      duration: "CDI",
      salary: "1500€",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["Python", "Django", "Flask", "Pandas"],
    },
    {
      id: 9,
      title: "Développeur Ruby",
      company: "Airbnb",
      salary: "1500€",
      location: "San Francisco",
      duration: "CDI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["Ruby", "Ruby on Rails", "RSpec", "Capistrano"],
    },
    {
      id: 10,
      title: "Développeur C++",
      company: "Amazon",
      location: "Seattle",
      duration: "CDI",
      salary: "1500€",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        "Salaire compétitif",
        "Télétravail",
        "Mutuelle",
        "Stock options",
      ],
      skills: ["C++", "STL", "Boost", "Qt"],
    },
    {
      id: 12,
      title: "Développeur Go",
      company: "Spotify",
      location: "Stockholm",
      duration: "CDI",
      salary: "1500€",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: ["Salaire compétitif", "Télétravail", "Mutuelle"],
      skills: ["Go", "Gin", "MongoDB", "Docker"],
    },
  ],
  loading: false,
  error: null,
  selectedJobOffer: null,
};

// Define the reducer function
const jobOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case jobOfferActions.FETCH_JOB_OFFERS:
      return {
        ...state,
        jobOffers: action.payload,
        loading: false,
        error: null,
      };
    case jobOfferActions.FETCH_JOB_OFFER_BY_ID:
      return {
        ...state,
        selectedJobOffer: action.payload,
        loading: false,
        error: null,
      };
    case jobOfferActions.CREATE_JOB_OFFER:
      return {
        ...state,
        jobOffers: [...state.jobOffers, action.payload],
        loading: false,
        error: null,
      };
    case jobOfferActions.UPDATE_JOB_OFFER:
      return {
        ...state,
        jobOffers: state.jobOffers.map((jobOffer) =>
          jobOffer.id === action.payload.id ? action.payload : jobOffer
        ),
        loading: false,
        error: null,
      };
    case jobOfferActions.DELETE_JOB_OFFER:
      return {
        ...state,
        jobOffers: state.jobOffers.filter(
          (jobOffer) => jobOffer.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default jobOfferReducer;
