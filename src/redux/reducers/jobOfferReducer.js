import { jobOfferActions } from "../actions";

// Define the initial state of the job offer store
const initialState = {
  jobOffers: [
    {
      id: 1,
      title: "Développeur Fullstack JS",
      company: "Google",
      location: "Mountain View",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis varit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis varvit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis varit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis it amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nis",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "JavaScript",
        },
        {
          id: 2,
          label: "React",
        },
        {
          id: 3,
          label: "Node.js",
        },
        {
          id: 4,
          label: "MongoDB",
        },
      ],
    },
    {
      id: 3,
      title: "Designer UX/UI",
      company: "Apple",
      location: "Cupertino",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202306080953",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "Design thinking",
        },
        {
          id: 2,
          label: "Adobe Creative Suite",
        },
        {
          id: 3,
          label: "Sketch",
        },
        {
          id: 4,
          label: "Figma",
        },
      ],
    },
    {
      id: 5,
      title: "Développeur iOS",
      company: "Facebook",
      location: "Menlo Park",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://www.facebook.com/images/fb_icon_325x325.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "Swift",
        },
        {
          id: 2,
          label: "Objective-C",
        },
        {
          id: 3,
          label: "Xcode",
        },
        {
          id: 4,
          label: "iOS SDK",
        },
      ],
    },
    {
      id: 6,
      title: "Développeur Java",
      company: "Microsoft",
      location: "Redmond",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "Java",
        },
        {
          id: 2,
          label: "Spring",
        },
        {
          id: 3,
          label: "Hibernate",
        },
        {
          id: 4,
          label: "Maven",
        },
      ],
    },
    {
      id: 7,
      title: "Développeur Python",
      company: "Netflix",
      location: "Los Gatos",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "Python",
        },
        {
          id: 2,
          label: "Django",
        },
        {
          id: 3,
          label: "Flask",
        },
        {
          id: 4,
          label: "Pandas",
        },
      ],
    },
    {
      id: 9,
      title: "Développeur Ruby",
      company: "Airbnb",
      salary: "1500",
      location: "San Francisco",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "Ruby",
        },
        {
          id: 2,
          label: "Ruby on Rails",
        },
        {
          id: 3,
          label: "RSpec",
        },
        {
          id: 4,
          label: "Capistrano",
        },
      ],
    },
    {
      id: 10,
      title: "Développeur C++",
      company: "Amazon",
      location: "Seattle",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "C++",
        },
        {
          id: 2,
          label: "STL",
        },
        {
          id: 3,
          label: "Boost",
        },
        {
          id: 4,
          label: "Qt",
        },
      ],
    },
    {
      id: 12,
      title: "Développeur Go",
      company: "Spotify",
      location: "Stockholm",
      startDate: "2023-11-10T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
      advantages: [
        {
          id: 1,
          label: "Salaire compétitif",
        },
        {
          id: 2,
          label: "Télétravail",
        },
        {
          id: 3,
          label: "Mutuelle",
        },
        {
          id: 4,
          label: "Stock options",
        },
      ],
      skills: [
        {
          id: 1,
          label: "Go",
        },
        {
          id: 2,
          label: "Docker",
        },
        {
          id: 3,
          label: "Kubernetes",
        },
        {
          id: 4,
          label: "Terraform",
        },
      ],
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
