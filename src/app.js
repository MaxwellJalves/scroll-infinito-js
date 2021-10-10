let quantidade = 5;
const pagina_atual = 1;
const containerPost = document.querySelector('#posts-container')

//aguarda essa função realizar a atividade solicitada e  enquanto ela não chegar continue aguardando  , até receber a promessa resolvida
const obterPosts = async () => {
  const resposta = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${quantidade}?&_page=${pagina_atual}`
  );
  return resposta.json();
};

const adicionarPosts = async () => {
  const posts = await obterPosts();
  const modeloDePosts = posts.map(({id, title , body}) => `
  <div class="post"> 
    <div class="number">${id} </div>
    <div class="post-info">
        <h2 class="post-title">${title}</h2>
        <p class="post-body">${body}</p>
    </div>
    <div class="codigo"> </div>  
  </div>
  `
  ).join('________________________________________________________________________________________________________________');
  return (containerPost.innerHTML += modeloDePosts);
};

adicionarPosts();
