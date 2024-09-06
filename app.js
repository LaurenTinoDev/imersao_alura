function buscarInsumo(){
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados");
    let campoPesquisa = document.getElementById("busca").value;
    // Inicializa uma string vazia para armazenar os resultados
    if(campoPesquisa == "" && campoPesquisa != String){
      section.innerHTML = "Campo de busca vazio ou insumo não encontrado"
      return 
    };

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    
  
    // Itera sobre cada item de dado e constrói o HTML dos resultados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      dado.titulo.includes(campoPesquisa);
      if (titulo.includes(campoPesquisa) || tags.includes(campoPesquisa)){
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
      
    }
    if(!resultados){
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



