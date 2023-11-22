const baseId = 'app0oXVuGeHq2HRYJ';
const tableName = 'tbl7xnuDoU34SL2df';
const apiKey = 'patSPU1OYQlMZDonM.94247f8b517d10f9a7b08f0453a524ff90ac510b578338ad088f2096ff065db8';
const baseURL = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export const fetchEntries = () => {
  return fetch(`${baseURL}?fields[]=Date+of+Entry&fields[]=MealType&fields[]=Food`, {
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