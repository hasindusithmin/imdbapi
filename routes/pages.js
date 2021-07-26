
import { Router } from "express";


const pageRoute = Router();

pageRoute.get('/', (req, res) => {
    res.render('pages/index', { msg: 'Hello World' });
})

pageRoute.get('/movie', (req, res) => {
    res.render('pages/imdb', { msg: 'welcome' })
})

export default pageRoute;