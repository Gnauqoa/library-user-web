export const getSearchObject = (searchEntries) => {
  let searchObject = Object.fromEntries([...searchEntries]);
  if (searchObject?.category) {
    searchObject.category = searchObject.category.split(",").map((e) => e);
  } else searchObject.category = [];
  if (searchObject?.languages) {
    searchObject.languages = searchObject.languages.split(",").map((e) => e);
  } else searchObject.languages = [];
  if (!searchObject?.available) searchObject.available = false;
  return searchObject;
};
