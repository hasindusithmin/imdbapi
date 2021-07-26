
const create_h3 = (query) => {
    document.querySelector('#root h3').innerHTML = query;
}
// i: {height: 448, imageUrl: "https://m.media-amazon.com/images/M/MV5BZWEwY2U0YT…NDU5NWVlOTFlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_.jpg", width: 800}
// id: "tt9190040"
// l: "Top Story"
// q: "TV series"
// rank: 1949680
// s: "Petros Kousoulos"
// y: 2018
// yr: "2018-"
const Include = (movie) => {
    let container = document.createElement('div');
    container.className = 'w3-center w3-card-4 w3-margin w3-padding';
    let image = document.createElement('img');
    image.src = movie.i['imageUrl'];
    image.width = 200;
    image.height = 200;
    // console.log(image);
    container.appendChild(image);
    let ul = document.createElement('ul');
    ul.className = 'w3-ul';
    let nodeList = [];
    for (let [key, value] of Object.entries(movie)) {
        if (key != 'i' && key != 'yr') {
            let txt = `${value}`;
            let li = document.createElement('li');
            li.innerHTML = txt;
            li.className = 'w3-serif'
            nodeList.push(li);
        }
    }
    // console.log(nodeList);
    for (let node of nodeList) ul.appendChild(node);
    container.appendChild(ul);
    document.querySelector('#root div').appendChild(container);
}

const createUI = (movies) => {
    const data = movies['d'];
    for (const movie of data) {
        const keys = Object.keys(movie);
        if (keys.includes('i')) Include(movie)
        // else console.log({ notinclude: movie['id'] });
    }
    create_h3(movies['q']);
}

const MyForm = document.querySelector('form');
MyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const movieName = e.target.movie.value;
    const res = await fetch(`/movie/${movieName}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const status = await res.status;
    if (status === 200) {
        const movies = await res.json();
        document.querySelector('#root div').innerHTML = '';
        createUI(movies);
    }
    if (status === 400) alert("sorry,result not found")
    if (status === 500) alert("internal server error,please try again later")
})
