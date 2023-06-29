export const getSearchObject = (searchEntries) => {
  let searchObject = Object.fromEntries([...searchEntries]);
  if (searchObject?.category) {
    searchObject.category = searchObject.category.split(",").map((e) => e);
  } else searchObject.category = [];
  if (!searchObject?.available) searchObject.available = false;
  if (!searchObject?.min_number_of_page) searchObject.min_number_of_page = "0";
  if (!searchObject?.max_number_of_page) searchObject.max_number_of_page = "0";
  return searchObject;
};
