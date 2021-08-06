let movies = [];
const addMovie = (ev)=>{
    ev.preventDefault();
    let movie = 123;
    movies.push(movie);
    document.forms[0].reset();
    console.warn('added', {movies});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
})