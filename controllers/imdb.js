
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();





const retrieveMovie = async (req, res) => {

    try {
        const { movie } = req.params;

        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: { q: movie },
            headers: {
                'x-rapidapi-key': process.env.Key,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            res.status(200).json(response.data)
        }).catch(function (error) {
            res.status(400).json({ error: error.message })
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

export default retrieveMovie;