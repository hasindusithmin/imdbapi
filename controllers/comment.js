
import axios from "axios";


const retrieveComments = async (req, res) => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => res.status(200).json(response.data))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default retrieveComments;