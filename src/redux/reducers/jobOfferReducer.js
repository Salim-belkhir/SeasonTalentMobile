import moment from "moment";
import { jobOfferActions } from "../actions";

// Define the initial state of the job offer store
const initialState = {
  jobOffers: [
    {
      id: 1,
      title: "Développeur Fullstack JS",
      company: {
        id: 1,
        name: "Google",
        logo: "https://static.vecteezy.com/system/resources/previews/022/484/503/non_2x/google-lens-icon-logo-symbol-free-png.png",
        location: "États-Unis",
      },
      // location: "Mountain View",
      startDate: "2023-12-26",
      endDate: "2024-06-23",
      salary: "1500",
      // logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
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
          label: "bibo",
        },
      ],
    },
    {
      id: 2,
      title: "Designer UX/UI",
      company: {
        id: 5,
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
        location: "États-Unis",
      },
      // location: "Cupertino",
      startDate: "2023-12-26",
      endDate: "2024-06-23",
      salary: "1500",
      // logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202306080953",
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
      id: 3,
      title: "Développeur iOS",
      company: {
        id: 6,
        name: "Facebook",
        logo: "https://www.facebook.com/images/fb_icon_325x325.png",
        location: "Menlo Park",
      },
      startDate: "2023-12-26",
      endDate: "2024-06-23",
      salary: "1500",
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
      id: 4,
      title: "Développeur Java",
      company: {
        id: 2,
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
        location: "Redmond",
      },
      startDate: "2023-12-26",
      endDate: "2024-06-23",
      salary: "400",
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
      id: 5,
      title: "Développeur Python",
      company: {
        id: 3,
        name: "Netflix",
        location: "Los Gatos",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
      },
      startDate: "2023-12-26",
      endDate: "2024-06-23",
      salary: "1500",
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
      id: 6,
      title: "Développeur Ruby",
      company: {
        id: 7,
        name: "Airbnb",
        location: "San Francisco",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png",
      },
      salary: "1500",
      startDate: "2023-12-26",
      endDate: "2024-06-23",
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
      id: 7,
      title: "Développeur C++",
      company: {
        id: 8,
        name: "Amazon",
        location: "Seattle",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
      },
      startDate: "2023-12-26",
      endDate: "2024-06-23",
      salary: "1500",
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
  ],
  loading: false,
  error: null,
  selectedJobOffer: null,
  recentlyConsultedJobOffers: [],
  filteredJobOffers: [],
  searchedJobOffers: [],
  filteredSearchedJobOffers: [],
  jobOffersByCompanyId: [],
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
    case jobOfferActions.FETCH_JOB_OFFERS_BY_COMPANY_ID:
      const searchingJobOffersByCompany = state.jobOffers.filter(
        (jobOffer) => jobOffer.company.id === action.payload
      );
      return {
        ...state,
        jobOffersByCompanyId: searchingJobOffersByCompany,
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
    // we check if every search word is included in the job offer
    // or in the title or skills or advantages
    const searchWordsMatch = searchWords.every((word) => {
      const lowerCaseWord = word.label.toLowerCase();
      return (
        jobOffer.company.name.toLowerCase().includes(lowerCaseWord) ||
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
    // if the date is not specified, we don't filter by date
    // if the start date is the same or after the start date of the job offer we keep it
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
      !location ||
      jobOffer.company.location.toLowerCase() === location.toLowerCase();

    const isMatch =
      searchWordsMatch &&
      startDateMatch &&
      endDateMatch &&
      salaryMatch &&
      locationMatch;

    return isMatch;
  });
};
