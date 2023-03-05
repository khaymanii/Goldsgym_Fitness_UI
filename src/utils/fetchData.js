
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "32596d4962msh1634e641b055848p197a0cjsn4576c4cbd317",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '32596d4962msh1634e641b055848p197a0cjsn4576c4cbd317',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
