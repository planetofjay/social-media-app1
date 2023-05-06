const appName = "PlanetOf";

/**
 * List of available categories.
 */
const categories = [
  { id: 'edu', text: 'Education' },
  { id: 'ent', text: 'Entertainment' },
  { id: 'gam', text: 'Gaming' },
  { id: 'nws', text: 'News' },
  { id: 'oth', text: 'Other' }
];

/**
 * Get a category based on its id.
 * @param {string} id 
 *    The id of the category to retrieve.
 * @returns 
 *    The category text.
 */
const getCategory = (id) => {
  const item = categories.find(
    (category) => category.id === id
  );
  // If null or undefined, it'll be named as None.
  return item?.text || 'None';
}

/**
 * List of available statuses.
 */
const statuses = [
  { id: 'd', text: 'Draft' },
  { id: 'p', text: 'Published' },
  { id: 'a', text: 'Archived' }
];

/**
 * Get a status based on its id.
 * @param {string} id 
 *    The id of the status to retrieve.
 * @returns 
 *    The status text.
 */
const getStatus = (id) => {
  const item = statuses.find(
    (status) => status.id === id
  );
  return item?.text || 'Not set';
}

export { appName, categories, getCategory, statuses, getStatus };