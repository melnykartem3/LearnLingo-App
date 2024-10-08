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
    expirience: '',
  },
  filters: {
    languages: [],
    levels: [],
    price: '',
  },
  favorites: {
    items: [],
  },
  isLoading: true,
  isError: null,
};
