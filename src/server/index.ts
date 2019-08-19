import express from "express"; // server
import compression from "compression"; // compresses requests
import bodyParser from "body-parser"; // read json
import helmet from "body-parser"; // security headers
import lusca from "lusca"; // crsf tokens
import cors from "cors"; // cors

// server
const app = express();
const port = process.env.PORT || 5000;

// configuration
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

interface Post {
  title: string;
}
let posts: Post[] = [];
app.get("/posts", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(posts);
});
app.post("/posts", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  posts.push(req.body);
  res.sendStatus(200);
});
app.listen(port);
