function getBaseUrl() {
  return "https://jobpost-backend-ew6d.onrender.com/";
  //return "http://localhost:7289/";
}

function clearAuthenticationData() {
  sessionStorage.removeItem("token");
  localStorage.removeItem("userPreferences");
}

export { getBaseUrl, clearAuthenticationData };
