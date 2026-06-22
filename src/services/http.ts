import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
    };
    return config
  },
  (error) => {
    console.log("請求攔截失敗", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  
  (error) => {
    console.error("Response攔截錯誤:", error.response || error.message);
    if(error.response) {
      switch (error.response.status) {
        case 401:
          console.log("權限不足");
          break;
        case 403:
          console.error("無權限存取");
          break;
        case 429:
          console.error("請求過於頻繁");
          break;
        case 404:
          console.error("找不到請求資源");
          break;
        case 500:
          console.error("伺服器發生錯誤");
          break;
        case 503:
          console.error("服務暫時不可用");
          break;
        default:
          console.error(`發生錯誤 ${error.response.status}`);
          break;
      }
    }
    else {
      console.error("網路或請求無法送達");
    };

    return Promise.reject(error);
  },


)