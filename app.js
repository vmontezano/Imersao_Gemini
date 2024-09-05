function pesquisar() {
    console.log("clicou");

    let section = document.getElementById("resultados-pesquisa");
    
    let resultados = ""
    
    for (let filme of filmes) {
    
        resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#">${filme.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${filme.sinopse}</p>
                        <a href=${filme.link} target="_blank">IMDB</a>
                    </div>
        `
    }
    
    section.innerHTML = resultados
}


