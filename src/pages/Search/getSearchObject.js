export const getSearchObject = (searchEntries) => {
  let searchObject = Object.fromEntries([...searchEntries]);
  if (searchObject?.category) {
    searchObject.category = searchObject.category.split(",").map((e) => e);
  }
  return searchObject;
};
