const baseId = 'app0oXVuGeHq2HRYJ';
const tableName = 'tbl7xnuDoU34SL2df';
const apiKey = import.meta.env.VITE_MY_KEY;
const baseURL = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export const fetchEntries = () => {
  return fetch(`${baseURL}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch entries');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error fetching entries:', error);
    throw new Error('Failed to fetch entries');
  });
};

export default { fetchEntries };