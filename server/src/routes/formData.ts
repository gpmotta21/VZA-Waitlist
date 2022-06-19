import express from "express";

// 'npm run dev' to start the localhost server

export const formRoute = express.Router();

interface IFormData {
  name: string;
  email: string;
  phone?: string;
}

var formData: IFormData = {} as IFormData;

formRoute.post("/sendData", (req, res) => {
  const data = req.body;
  console.log(data);
  formData = data;
  res.status(200).send("Data gathered");
});
