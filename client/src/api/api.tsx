import axios from "axios";

const api = "http://localhost:3333";

export const sendFormData = (path: string, data: any) =>
  axios.post(`${api}${path}`, data);
