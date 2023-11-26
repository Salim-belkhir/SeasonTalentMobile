import moment from "moment";
import { candidatesActions } from "../actions";

// Define the initialState
const initialState = {
  candidates: [
    {
      id: 1,
      name: "Rachid Faska",
      image:
        "https://media.licdn.com/dms/image/D5635AQG7cdEe6mJNeQ/profile-framedphoto-shrink_800_800/0/1699396946157?e=1701529200&v=beta&t=NKKGT8yF9ndOSQQc4M2w7g3Y-NussleUzHit-Gg6g2k",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      contacts: {
        email: "john.doe@gmail.com",
        phone: "06 12 34 56 78",
      },
      isFavorite: true,
      location: "Paris",
      availability: {
        startDate: "2023-12-01",
        endDate: "2024-01-10",
      },
      skills: [
        {
          id: 1,
          label: "Scala",
        },
        {
          id: 2,
          label: "Play",
        },
        {
          id: 3,
          label: "Akka",
        },
        {
          id: 4,
          label: "Spark",
        },
      ],
      experiences: [
        {
          id: 305,
          title: "Google",
          review: {
            id: 1,
            date: "2023-06-01",
            description:
              "Nous vous remercions vivement de la qualité de votre accompagnement et de votre professionnalisme.",
            reviewer: "John Doe",
          },
        },
        {
          id: 400,
          title: "Facebook",
          review: {
            id: 2,
            date: "2023-01-01",
            description: "Ce Candidat est un peu moins excellent",
            reviewer: "Jane Doe",
          },
        },
      ],
    },
    {
      id: 2,
      name: "Salim Belkhir",
      image:
        "https://media.licdn.com/dms/image/D4E03AQGNvxoiOl07cw/profile-displayphoto-shrink_800_800/0/1699634308722?e=1706140800&v=beta&t=er5cYwqsipFQSB6r6Jx4wnFoi8EvgUZL_yKbxK05DXU",
      description:
        "Apres avoir raté ma vie, je me suis reconverti dans la preparation de couscous",
      contacts: {
        email: "salim34@gmail.com",
        phone: "06 12 34 56 78",
      },
      isFavorite: false,
      location: "Montpellier",
      availability: {
        startDate: "2023-12-01",
        endDate: "2024-01-10",
      },
      skills: [
        {
          id: 1,
          label: "Scala",
        },
        {
          id: 2,
          label: "Play",
        },
        {
          id: 3,
          label: "Akka",
        },
        {
          id: 4,
          label: "Spark",
        },
      ],
      experiences: [
        {
          id: 302,
          title: "Tesla",
          review: {
            id: 1,
            date: "2021-01-01",
            description:
              "Nous vous remercions vivement de la qualité de votre accompagnement et de votre professionnalisme.",
            reviewer: "Hakemi Ayoub",
          },
        },
      ],
    },
    {
      id: 3,
      name: "Hakemi Ayoub",
      image:
        "https://media.licdn.com/dms/image/D5635AQGg2jsnlRofyg/profile-framedphoto-shrink_400_400/0/1695128552698?e=1701543600&v=beta&t=9gNHKpBRfGBjFqx8V6gnqZqLOm3B1LMFu4RV-5DDXxU",
      description:
        "Apres avoir raté ma vie, je me suis reconverti dans la preparation de couscous",
      contacts: {
        email: "hakemi@gmail.com",
        phone: "06 12 34 56 78",
      },
      isFavorite: true,
      location: "Montpellier",
      availability: {
        startDate: "2023-12-01",
        endDate: "2024-01-10",
      },
      skills: [
        {
          id: 1,
          label: "Scala",
        },
        {
          id: 2,
          label: "Play",
        },
        {
          id: 3,
          label: "Akka",
        },
        {
          id: 4,
          label: "Spark",
        },
      ],
      experiences: [],
    },
  ],

  matchedCandidatesToJobOffers: [
    {
      id: 1, // id of the match
      idCandidate: 1,
      jobOffer: {
        id: 1,
        title: "Développeur Fullstack JS",
        company: {
          id: 1,
          name: "Google",
          logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          adress:
            "1600 Amphitheatre Parkway, Mountain View, CA 94043, États-Unis",
          location: "États-Unis",
        },
        // location: "Mountain View",
        startDate: "2023-11-15T20:42:57.752Z",
        endDate: "2023-12-23T20:42:57.752Z",
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
            label: "MongoDB",
          },
        ],
      },
    },
    {
      id: 2, // id of the match
      idCandidate: 2,
      jobOffer: {
        id: 4,
        title: "Développeur Java",
        company: {
          id: 4,
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png",
          adress: "One Microsoft Way, Redmond, WA 98052, États-Unis",
          location: "Redmond",
        },
        startDate: "2023-11-10T20:42:57.752Z",
        endDate: "2023-12-23T20:42:57.752Z",
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
    },
  ],
  selectedCandidate: null,
  searchedCandidates: [],
  recentlyConsultedCandidates: [],
  filteredCandidates: [],
  filteredMatchedCandidatesToJobOffers: [],
  filteredResultsCandidates: [],
  favoriteCandidates: [],
  loading: false,
  error: null,
};

// Define the reducer
const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case candidatesActions.FETCH_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
      };
    case candidatesActions.FETCH_MATCHING_CANDIDATES:
      // for each item of the array matchedCandidatesToJobOffers
      // get the candidate from the candidates array
      // and add it to the matchedCandidatesToJobOffers array

      if (state.filteredCandidates.length === 0) {
        return {
          ...state,
          matchedCandidatesToJobOffers: [],
        };
      }

      const matchedCandidatesToJobOffers = state.matchedCandidatesToJobOffers
        .map((item) => {
          const candidate = state.filteredCandidates.find(
            (candidate) => candidate.id === item.idCandidate
          );
          if (candidate !== undefined) {
            return {
              ...item,
              candidate,
            };
          }
          return undefined;
        })
        .filter((item) => item !== undefined);

      return {
        ...state,
        filteredMatchedCandidatesToJobOffers: matchedCandidatesToJobOffers,
      };

    case candidatesActions.FETCH_CANDIDATE_BY_ID:
      return {
        ...state,
        candidate: action.payload,
      };
    case candidatesActions.SEARCH_CANDIDATE:
      return {
        ...state,
        candidate: action.payload,
      };
    case candidatesActions.LOAD_RECENTLY_CONSULTERD_CANDIDATE:
      return {
        ...state,
        recentlyConsultedCandidates: action.payload,
      };
    case candidatesActions.FILTER_CANDIDATES:
      return {
        ...state,
        filteredCandidates: filterCandidates(state.candidates, action.payload),
      };
    case candidatesActions.FILTER_RESULTS_CANDIDATES:
      return {
        ...state,
        filteredResultsCandidates: action.payload,
      };
    case candidatesActions.FETCH_CANDIDATES_BY_JOB_OFFER_ID:
      return {
        ...state,
        candidates: action.payload,
      };
    case candidatesActions.AFFECT_CANDIDATE_TO_JOB_OFFER:
      return {
        ...state,
        candidate: action.payload,
      };
    case candidatesActions.FETCH_FAVORITE_CANDIDATES:
      return {
        ...state,
        favoriteCandidates: state.candidates.filter(
          (candidate) => candidate.isFavorite
        ),
      };
    case candidatesActions.ADD_CANIDATE_TO_FAVORITE:
      return {
        ...state,
        candidates: state.candidates.map((candidate) =>
          candidate.id === action.payload
            ? { ...candidate, isFavorite: true }
            : candidate
        ),
        matchedCandidatesToJobOffers: state.matchedCandidatesToJobOffers.map(
          (item) =>
            item.idCandidate === action.payload
              ? { ...item, candidate: { ...item.candidate, isFavorite: true } }
              : item
        ),
        favoriteCandidates: [
          ...state.favoriteCandidates,
          state.candidates.find((candidate) => candidate.id === action.payload),
        ],
      };
    case candidatesActions.DELETE_CANIDATE_FROM_FAVORITE:
      return {
        ...state,
        candidates: state.candidates.map((candidate) =>
          candidate.id === action.payload
            ? { ...candidate, isFavorite: false }
            : candidate
        ),
        // check if the candidate is in the favoriteCandidates array
        // if yes, remove it
        favoriteCandidates: state.favoriteCandidates.filter(
          (candidate) => candidate.id !== action.payload
        ),
        matchedCandidatesToJobOffers: state.matchedCandidatesToJobOffers.map(
          (item) =>
            item.idCandidate === action.payload
              ? {
                  ...item,
                  candidate: { ...item.candidate, isFavorite: false },
                }
              : item
        ),
      };
    default:
      return state;
  }
};

// Export the reducer

export default candidateReducer;

const filterCandidates = (candidates, filters) => {
  const { searchWords, startDate, endDate, location } = filters;

  return candidates.filter((candidate) => {
    // Filter by searchWords
    // We check if any searchWord is included in the candidate name
    // or in the candidate description or in the candidate skills
    // or in the candidate experiences titles or in the candidate experiences reviews
    const searchWordsMatch =
      searchWords.length === 0 ||
      searchWords.some((word) => {
        const lowerCaseWord = word.label.toLowerCase();
        return (
          candidate.name.toLowerCase().includes(lowerCaseWord) ||
          candidate.description.toLowerCase().includes(lowerCaseWord) ||
          candidate.skills.some((skill) =>
            skill.label.toLowerCase().includes(lowerCaseWord)
          ) ||
          candidate.experiences.some(
            (experience) =>
              experience.title.toLowerCase().includes(lowerCaseWord) ||
              experience.review.description
                .toLowerCase()
                .includes(lowerCaseWord)
          )
        );
      });

    // Filter by startDate
    const startDateMatch =
      !startDate ||
      moment(candidate.availability.startDate).isSameOrAfter(startDate);
    // Filter by endDate
    const endDateMatch =
      !endDate ||
      moment(candidate.availability.endDate).isSameOrBefore(endDate);

    // Filter by location
    const locationMatch =
      !location ||
      candidate.location.toLowerCase().includes(location.toLowerCase());

    const isMatch =
      searchWordsMatch && startDateMatch && endDateMatch && locationMatch;
    return isMatch;
  });
};
