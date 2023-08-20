import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json());
app.use(cookieParser());


// Configura CORS para permitir solicitudes desde tu frontend
app.use(cors({
    origin: "http://localhost:5173", // Cambia esta URL por la URL de tu frontend
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}));


app.use("/api/auth",  authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);


app.listen(3001, ()=>{
    console.log("Server on port 3001");
})