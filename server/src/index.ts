import express, {
    Request,
    Response,
} from "express";
import cors from "cors";
import "dotenv/config";

import mongoose from "mongoose";
mongoose
    .connect(
        process.env
            .MONGODB_CONNECTION_STRING as string
    )
    .then(() =>
        console.log(
            "connection to database"
        )
    );

const app = express();
app.use(express.json());
app.use(cors());

app.get(
    "/test",
    async (
        req: Request,
        res: Response
    ) => {
        res.json({ message: "hello " });
    }
);

app.listen(3000, () => {
    console.log(
        "server is listening on port 3000"
    );
});
