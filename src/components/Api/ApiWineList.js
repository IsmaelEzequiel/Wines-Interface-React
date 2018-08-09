import {
  API_ROOT_PATH,
  API_ALL_ITEMS
} from '../utils/constants';


const ApiWineList = async () => {
  try {
    const wineResponse = await fetch(`${API_ROOT_PATH}${API_ALL_ITEMS}`);
    const wineJson = await wineResponse.json();
    return wineJson;
  } catch (err) {
    console.log(`Error 1: ${err}`);
  }
}

const ApiWineDetail = async (id) => {
  try {
    const wineDetailResponse = await fetch(`${API_ROOT_PATH}${API_ALL_ITEMS}/${id}`);
    const wineDetailJson = await wineDetailResponse.json();
    return wineDetailJson;
  } catch (err) {
    console.log(`Error 1: ${err}`);
  }
}

export {
  ApiWineList,
  ApiWineDetail
};
