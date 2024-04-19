import axios from 'axios';

const fetchProducts = async (query) => {
  try {
    const response = await axios.get (`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return response.data.results;
  } catch (error) {
    console.error('Houve uma falha na requisição dos dados', error);
  }
};

export default fetchProducts;
