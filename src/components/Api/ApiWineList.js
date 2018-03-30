import {
  API_ROOT_PATH,
  API_ALL_ITEMS
} from '../utils/constants';


const ApiWineList = () => {
  return fetch(`${API_ROOT_PATH}${API_ALL_ITEMS}`)
    .then(response => response.json())
    .catch(err => `Erro em: ${err}`);
}

export default ApiWineList;