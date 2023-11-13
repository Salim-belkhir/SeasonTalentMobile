import moment from "moment";
import { jobOfferActions } from "../actions";

// Define the initial state of the job offer store
const initialState = {
  jobOffers: [
    {
      id: 1,
      title: "Développeur Fullstack JS",
      company: "Google",
      location: "Mountain View",
      startDate: "2023-11-15T20:42:57.752Z",
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
      startDate: "2023-11-15T20:42:57.752Z",
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
    {
      id: 13,
      title: "Développeur PHP",
      company: "Uber",
      location: "Cupertino",
      startDate: "2023-11-15T20:42:57.752Z",
      endDate: "2023-12-23T20:42:57.752Z",
      salary: "1500",
      logo: "data:image/png;base64,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",
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
          label: "PHP",
        },
        {
          id: 2,
          label: "Laravel",
        },
        {
          id: 3,
          label: "Symfony",
        },
        {
          id: 4,
          label: "PHPUnit",
        },
      ],
    },
  ],
  loading: false,
  error: null,
  selectedJobOffer: null,
  recentlyConsultedJobOffers: [],
  filteredJobOffers: [],

  searchedJobOffers: [],
  filteredSearchedJobOffers: [],
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
    case jobOfferActions.SEARCH_JOB_OFFER:
      return {
        ...state,
        // Search job offers by title from the jobOffers array
        searchedJobOffers:
          action.payload === ""
            ? []
            : state.jobOffers.filter((jobOffer) =>
                jobOffer.title
                  .toLowerCase()
                  .includes(action.payload.toLowerCase())
              ),
        loading: false,
        error: null,
      };
    case jobOfferActions.LOAD_RECENTLY_CONSULTERD_JOB_OFFER:
      return {
        ...state,
        recentlyConsultedJobOffers: action.payload,
        loading: false,
        error: null,
      };

    case jobOfferActions.FILTER_JOB_OFFERS:
      return {
        ...state,
        filteredJobOffers: filterJobOffers(state.jobOffers, action.payload),
        loading: false,
        error: null,
      };
    case jobOfferActions.FILTER_RESULTS_JOB_OFFERS:
      return {
        ...state,
        filteredSearchedJobOffers: filterJobOffers(
          state.searchedJobOffers,
          action.payload
        ),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default jobOfferReducer;

const filterJobOffers = (jobOffers, filters) => {
  const { searchWords, startDate, endDate, minSalary, maxSalary, location } =
    filters;

  return jobOffers.filter((jobOffer) => {
    // Filter by searchWords
    const searchWordsMatch = searchWords.every((word) => {
      const lowerCaseWord = word.label.toLowerCase();
      return (
        jobOffer.title.toLowerCase().includes(lowerCaseWord) ||
        jobOffer.skills.some((skill) =>
          skill.label.toLowerCase().includes(lowerCaseWord)
        ) ||
        jobOffer.advantages.some((advantage) =>
          advantage.label.toLowerCase().includes(lowerCaseWord)
        )
      );
    });

    // Filter by date
    const startDateMatch =
      !startDate || moment(jobOffer.startDate).isSameOrAfter(startDate, "day");
    const endDateMatch =
      !endDate || moment(jobOffer.endDate).isSameOrBefore(endDate, "day");

    // Filter by salary
    const salaryMatch =
      (!minSalary || jobOffer.salary >= minSalary) &&
      (!maxSalary || jobOffer.salary <= maxSalary);

    // Filter by location
    // if the location is not specified, we don't filter by location
    const locationMatch =
      !location || jobOffer.location.toLowerCase() === location.toLowerCase();

    const isMatch =
      searchWordsMatch &&
      startDateMatch &&
      endDateMatch &&
      salaryMatch &&
      locationMatch;

    return isMatch;
  });
};
