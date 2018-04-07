export const URL_JSON = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json';

const getCardInfos = async () => {
  try {
    const response = await fetch(URL_JSON);
    return response.json();
  } catch (error) {
    throw error;
  }
};

export { getCardInfos };
