function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa){
        section.innerHTML = "<h3 class='item-resultado'>Campo não preenchido</h3>"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let sinopse = "";
    
    for (let filme of filmes) {
        titulo = filme.titulo.toLowerCase()
        sinopse = filme.sinopse.toLowerCase() 
        
        if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {

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
    }
    
    if (!resultados) {
        resultados = "<h3 class='item-resultado'>Resultado não encotrado</h3>"
    }

    section.innerHTML = resultados
};
