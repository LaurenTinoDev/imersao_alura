function buscarInsumo(){
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados");
    console.log(section); // Verifica se a seção foi encontrada
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada item de dado e constrói o HTML dos resultados
    for (let dado of dados) {
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



