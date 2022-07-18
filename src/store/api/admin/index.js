import AxiosInstance from "./../axios";

export const getCollection = (module, params) => async () => {
  try {
    return await AxiosInstance.get(`${module}`, { params: params });
  } catch (err) {
    throw err;
  }
};
