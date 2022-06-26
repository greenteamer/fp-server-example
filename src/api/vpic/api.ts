const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

export enum ENDPOINTS {
  getAllMakes = "GetAllMakes",
  getAllManufacturers = "GetAllManufacturers",
}

export const getVpicUrl = (
  endpoint: keyof typeof ENDPOINTS,
  format: string = "json"
) => `${BASE_URL}/${ENDPOINTS[endpoint]}?format=${format}`;
