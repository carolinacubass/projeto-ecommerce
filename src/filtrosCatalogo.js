const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
   const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));

   for(const produto of produtosEscondidos) {
    produto.classList.remove("hidden")
   }
}

function esconderMasculino() {
    exibirTodos();
    const produtosMaculinos = Array.from(catalogoProdutos.getElementsByClassName("masculino"));
    
    for(const produto of produtosMaculinos) {
        produto.classList.add("hidden");
    }
}

function esconderFeminino() {
    exibirTodos();
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName("feminino"));
    
    for(const produto of produtosFemininos) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-masculino").addEventListener("click", esconderFeminino);
    document.getElementById("exibir-feminino").addEventListener("click", esconderMasculino);
}
