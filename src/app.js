let quantidade = 5;
const pagina_atual = 1;

//aguarda essa função realizar a atividade solicitada e  enquanto ela não chegar continue aguardando  , até receber a promessa resolvida
const obterPosts = async () => {
  const resposta = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${quantidade}?&_page=${pagina_atual}`
  );
  return resposta.json();
};

const adicionarPosts = async () => {
  const posts = await obterPosts();
  const modeloDePosts = posts.map(
    (item) => `
  <div class="post"> 
    <div class="number">${item.id} </div>
    <div class="post-info">
        <h2 class="post-title">${item.title}</h2>
        <p class="post-body">${item.body}</p>
    </div>
    <div class="codigo"> </div>  
  </div>
  `
  );
  console.log(posts);
  console.log(modeloDePosts);

  return (document.getElementById("posts-container").innerHTML = modeloDePosts);
};

adicionarPosts();
