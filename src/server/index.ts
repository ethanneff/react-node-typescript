// libraries
import express from "express"; // server
import compression from "compression"; // compresses requests
import bodyParser from "body-parser"; // read json
import helmet from "body-parser"; // security headers
import lusca from "lusca"; // crsf tokens
import cors from "cors"; // cors

// controllers
import * as homeController from "./controllers/Home";
import * as postsController from "./controllers/Posts";

// server
export const app = express();
const port = process.env.PORT || 5000;

// configuration
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// routes
app.get("/", homeController.getHome);
app.get("/posts", postsController.getPosts);
app.post("/posts", postsController.createPost);
app.put("/posts", postsController.updatePost);
app.delete("/posts", postsController.deletePost);

app.listen(port);
