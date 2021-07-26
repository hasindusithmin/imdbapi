
import express from "express";
import { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import comment_route from "./routes/comment.js";
import imdbRoute from "./routes/imdb.js";
import pageRoute from "./routes/pages.js";

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = process.env.PORT || 5000;
const corsOption = { credentials: true, origin: process.env.URL || '*' };


app.use('/', express.static(join(__dirname, 'public')));
app.use(json());
app.use(cors(corsOption));
app.set('view engine', 'ejs');

app.use(pageRoute)
app.use('/comment', comment_route);
app.use('/movie', imdbRoute);
app.use((req, res) => {
    res.status(404).render('pages/404')
})
app.listen(port, () => { console.log(`${process.env.URL}`); })





