export const initialState = {
  teachers: [],
  selectedTeacher: {
    name: '',
    surname: '',
    languages: [],
    levels: [],
    rating: '',
    reviews: [],
    pricePerHour: '',
    lessonsDone: '',
    avatarUrl: '',
    lessonsInfo: '',
    conditions: [],
    experience: '',
  },
  filters: {
    languages: [],
    levels: [],
    price: '',
  },
  isLoading: true,
  isError: null,
};
