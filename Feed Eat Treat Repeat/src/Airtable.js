const baseId = 'app0oXVuGeHq2HRYJ';
const tableName = 'tbl7xnuDoU34SL2df';
const apiKey = import.meta.env.VITE_MY_KEY;
const baseURL = `https://api.airtable.com/v0/${baseId}/${tableName}?sort%5B0%5D%5Bfield%5D=Entry+ID.&sort%5B0%5D%5Bdirection%5D=asc`;

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