import axios from "axios";
import { transformData } from "../helpers/helpers";

const base = "https://api.unsplash.com";
const access_key = "ReSc8gZPg5PMi_TpnreELLOlSN3DLsiiQNPAMTv7VMk";

export async function fetchPhotos(searchString, page) {
  const response = await axios.get(`${base}/search/photos`, {
    params: {
      client_id: access_key,
      page,
      per_page: 12,
      query: searchString.toLowerCase(),
    },
  });
  return transformData(response.data.results);
}
