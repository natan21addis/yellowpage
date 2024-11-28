import AxiosApi from "./AxiosApi";
import { Axios } from "axios";

export const addBusiness = async (businessData) => {
  try {
    const response = await AxiosApi.post("/businesses", businessData);
    return response.data;
  } catch (error) {
    console.error("Error from axios error adding bussienss".error);
    throw error;
  }
};
export const getBusinesses = async () => {
  try {
    const response = await AxiosApi.get("/businesses");
    return response.data;
  } catch (error) {
    console.error("error from axios, Error fetching business", error);
    throw error;
  }
};
// search only by adress #Nahtan
export const searchByAddress = async (query) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "address" },
    });
    return response.data;
  } catch (error) {
    console.error(
      "error from axios,error searching bussiness by address",
      error
    );
    throw error;
  }
};
// search by only names
export const searchByName = async (query) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "name" },
    });
    return response.data;
  } catch (error) {
    console.error("error from axios, Error searching business by name", error);
    throw error;
  }
};
// search by catagory
export const searchByCtegory = async (query) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "category" },
    });
    return response.data;
  } catch (error) {
    console.error("error from axios,Error searching by Catagory", error);
    throw error;
  }
};

// search Businesses by adress and name

export const searchByAddressAndName = async (query, name) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "address", name },
    });
    return response.data;
  } catch (error) {
    console.error(
      "error from axios,Error searching businesses by addrss and name ",
      error
    );
    throw error;
  }
};

// saaarch by addeeeess and category
export const searchByAddressAndCategory = async (query, category) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "address", category },
    });
    return response.data;
  } catch (error) {
    console.error(
      "error from axios, Error searching businesses by address and category"
    );
    throw error;
  }
};
export const searchByNameAndCatagory = async (query, name, category) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "name", name, category },
    });
    return response.data;
  } catch (error) {
    console.error(
      "error from axios, Error to search by name and category",
      error
    );
    throw error;
  }
};
//  search by businesses by address,name and category
export const searchByAddressNameCategory = async (query, name, category) => {
  try {
    const response = await AxiosApi.get("/businesses/search", {
      params: { query, filter: "address", name, category },
    });
    return response.data;
  } catch (error) {
    console.error(
      "error from axios, Error searching by adress ,name, and category",
      error
    );
    throw error;
  }
};
