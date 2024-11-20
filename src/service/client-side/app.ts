const url_login = "localhost:9000/auth/login";

export const fetchWithAuth = async (endpoint: string,
  options: RequestInit = {}) =>{
    const token = localStorage.getItem("access_token");

    const hearder = {
        "Content-Type": "application/json",
         ...options.headers,
    }
    if (token) {
        headers.Authorization = `Bearer ${token}`;
     }
     const response = await fetch(`${url_login}${endpoint}`, {
    ...options,
    headers,
  });

  // Kiểm tra lỗi
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error occurred");
  }

  return response.json();
}