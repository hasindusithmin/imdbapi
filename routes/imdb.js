
import { Router } from "express";
import retrieveMovie from "../controllers/imdb.js";


const imdbRoute = Router();

imdbRoute.get('/:movie', retrieveMovie);


export default imdbRoute;