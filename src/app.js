const quantidade_de_post = 5
const pagina_atual = 1

const endpoint = `https://jsonplaceholder.typicode.com/posts?_limit=${quantidade_de_post}?&_page=${pagina_atual}`

console.log(endpoint)