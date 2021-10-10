
let paginacao = 1;
const containerPost = document.querySelector("#posts-container");
const containerLoad = document.querySelector(".loader");
const filtroInput = document.querySelector("#filter")



//aguarda essa função realizar a atividade solicitada e  enquanto ela não chegar continue aguardando  , até receber a promessa resolvida
const obterPosts = async () => {
  const resposta = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5?&_page=${paginacao}`
  );
  return resposta.json();
};

const adicionarPosts = async () => {
  const posts = await obterPosts();
  const modeloDePosts = posts
    .map(
      ({ id, title, body }) => `
  <div class="post"> 
    <div class="number">${id} </div>
    <div class="post-info">
        <h2 class="post-title">${title}</h2>
        <p class="post-body">${body}</p>
    </div>
    <div class="codigo"> </div>  
  </div>
  `
    )
    .join(
     ''
    );
  return (containerPost.innerHTML += modeloDePosts);
};

adicionarPosts();

const pegarProximoPost = () => {
    paginacao++;
    adicionarPosts()
};

const removerOLoad = () => {
  setTimeout(() => {
    containerLoad.classList.remove("show");
    pegarProximoPost();
  }, 1000);
};

const exibaOLoad = () => {
  containerLoad.classList.add("show");
  removerOLoad();
};

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  const proximoAoFinalDaPagina = scrollTop + clientHeight >= scrollHeight - 30;

  if (proximoAoFinalDaPagina) {
    exibaOLoad();
  }
});


filtroInput.addEventListener('input', event =>{

    const input = event.target.value.toUpperCase()
    const posts = document.querySelectorAll('.post')


    posts.forEach( (post , index) =>{
       const tituloDoPost = post.querySelector('.post-title').textContent.toUpperCase()
       const descricaoDoPost = post.querySelector('.post-body').textContent.toUpperCase()

       if(tituloDoPost.includes(input) || descricaoDoPost.includes(input)){
        post.style.display = 'flex'
        return
       }

       post.style.display = 'none'
    })

})