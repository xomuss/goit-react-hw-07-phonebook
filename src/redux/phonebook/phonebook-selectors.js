const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getVisibleContacts = state => {
  const filter = getFilter(state);
};

export default {
  getLoading,
  getFilter,
};
