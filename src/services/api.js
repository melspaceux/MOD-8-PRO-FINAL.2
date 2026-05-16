import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Error del servidor: ${error.response.status}`);
    } else if (error.request) {
      throw new Error('No se pudo contactar con el servidor. Revisa tu conexión.');
    } else {
      throw new Error('Ocurrió un error inesperado al procesar el catálogo.');
    }
  }
};

export default api;
