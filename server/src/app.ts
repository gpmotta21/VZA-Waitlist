import express, { Application, Request, Response } from "express";
import cors from "cors";

import { formRoute } from "./routes/formData";

// 'npm run dev' to start the localhost server

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", formRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("hello :)");
});

app.listen(3333, () => console.log("running"));
