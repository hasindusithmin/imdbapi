
import { Router } from "express";
import retrieveComments from "../controllers/comment.js";

const comment_route = Router();

comment_route.get('/', retrieveComments);


export default comment_route;