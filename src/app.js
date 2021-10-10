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
  console.log(posts);
};

adicionarPosts();
