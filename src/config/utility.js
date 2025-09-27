function getBaseUrl() {
  return "https://cuvette-assignment-backend-lb84.onrender.com/";
  //return "http://localhost:7289/";
}

function clearAuthenticationData() {
  sessionStorage.removeItem("token");
  localStorage.removeItem("userPreferences");
}

export { getBaseUrl, clearAuthenticationData };
