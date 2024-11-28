// Request Interceptor
export const requestInterceptor = async (config) => {
  let accessToken = "";

  if (accessToken) {
    config.headers["x-auth"] = `Bearer ${accessToken}`;
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
};

// Response Interceptor
export const responseInterseptor = (response) => {
  return response;
};

// Response Error Handler
export const responseErrorHandler = (error) => {
  const originalConfig = error.config;

  if (error?.response?.status === 401 && !originalConfig._retry) {
    originalConfig._retry = true; // Add `_retry` property to avoid infinite loop

    // Handle token refresh logic or logout if necessary
  }
  // Log detailed error
  //alert('An error occurred. Please try again.'); // Alert user-friendly message
  return Promise.reject(error); // Propagate the error
};

// Request Error Handler
export const requestErrorHandler = (error) => {
  console.error("Request Error:", error.message); // Log the error
  return Promise.reject(error); // Propagate the error
};
