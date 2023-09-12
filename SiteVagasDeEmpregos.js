const vagas = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo(a) ao Vagas & Trampos!\n" +
      "Total de vagas: " +
      vagas.length +
      "\n\nEscolha uma opção:\n1. Criar uma nova vaga\n2. Listar vagas disponíveis\n3. Visualizar uma vaga\n4. Inscrever um candidato em uma vaga\n5. Excluir uma vaga\n6. Sair"
  );

  switch (opcao) {
    case "1":
      const criarNovaVaga = {}; // Crie um objeto para a nova vaga

      criarNovaVaga.nomeDaVaga = prompt("Informe o título da vaga: ");
      criarNovaVaga.descricao = prompt("Informe uma descrição para a vaga: ");
      criarNovaVaga.dataLimite = prompt(
        "Qual é a data limite para aplicação na vaga: "
      );

      criarNovaVaga.candidatos = []; // Crie um array para armazenar os candidatos

      const confirmacao = confirm(
        "Salvar esta vaga? \n" +
          "\nVaga: " +
          criarNovaVaga.nomeDaVaga +
          "\nDescrição: " +
          criarNovaVaga.descricao +
          "\nData limite: " +
          criarNovaVaga.dataLimite
      );

      if (confirmacao) {
        vagas.push(criarNovaVaga); // Adicione a nova vaga ao array vagas usando push
        alert("Vaga salva com sucesso!");
      } else {
        alert("Voltando ao menu.");
      }
      break;

    case "2":
      if (vagas.length === 0) {
        alert("Nenhuma vaga cadastrada.");
      } else {
        let listarVagas = "Lista de Vagas:\n";
        for (let i = 0; i < vagas.length; i++) {
          listarVagas +=
            "Índice da Vaga: " +
            i +
            "\nNome da vaga: " +
            vagas[i].nomeDaVaga +
            "\nDescrição: " +
            vagas[i].descricao +
            "\nData limite: " +
            vagas[i].dataLimite +
            "\nQuantidade de Candidatos Inscritos: " +
            vagas[i].candidatos.length +
            "\n\n";
        }
        alert(listarVagas);
      }
      break;

    case "3":
      if (vagas.length === 0) {
        alert("Nenhuma vaga cadastrada.");
      } else {
        let listarVagas = "Lista de Vagas:\n";
        for (let i = 0; i < vagas.length; i++) {
          listarVagas +=
            "Índice da Vaga: " +
            i +
            "\nNome da vaga: " +
            vagas[i].nomeDaVaga +
            "\nDescrição: " +
            vagas[i].descricao +
            "\nData limite: " +
            vagas[i].dataLimite +
            "\nQuantidade de Candidatos Inscritos: " +
            (vagas[i].candidatos ? vagas[i].candidatos.length : 0) +
            "\n\n";
        }
        alert(listarVagas);

        const indiceVagaVisualizar = prompt(
          "Informe o índice da vaga que deseja visualizar: "
        );
        if (vagas[indiceVagaVisualizar]) {
          const vagaSelecionada = vagas[indiceVagaVisualizar];
          let infoVaga =
            "Índice da Vaga: " +
            indiceVagaVisualizar +
            "\nNome da vaga: " +
            vagaSelecionada.nomeDaVaga +
            "\nDescrição: " +
            vagaSelecionada.descricao +
            "\nData limite: " +
            vagaSelecionada.dataLimite +
            "\nQuantidade de Candidatos Inscritos: " +
            (vagaSelecionada.candidatos
              ? vagaSelecionada.candidatos.length
              : 0);

          if (
            vagaSelecionada.candidatos &&
            vagaSelecionada.candidatos.length > 0
          ) {
            infoVaga += "\n\nNomes dos Candidatos:";
            for (let i = 0; i < vagaSelecionada.candidatos.length; i++) {
              infoVaga += "\n- " + vagaSelecionada.candidatos[i];
            }
          }

          alert(infoVaga);
        } else {
          alert("Índice de vaga inválido.");
        }
      }
      break;

    case "4":
      if (vagas.length === 0) {
        alert("Nenhuma vaga cadastrada.");
      } else {
        let listarVagas = "Lista de Vagas:\n";
        for (let i = 0; i < vagas.length; i++) {
          listarVagas +=
            "Índice da Vaga: " +
            i +
            "\nNome da vaga: " +
            vagas[i].nomeDaVaga +
            "\nDescrição: " +
            vagas[i].descricao +
            "\nData limite: " +
            vagas[i].dataLimite +
            "\nQuantidade de Candidatos Inscritos: " +
            (vagas[i].candidatos ? vagas[i].candidatos.length : 0) +
            "\n\n";
        }
        alert(listarVagas);

        const indiceVaga = prompt(
          "Informe o índice da vaga para inscrever o candidato: "
        );
        if (vagas[indiceVaga]) {
          const nomeCandidato = prompt("Informe o nome do candidato: ");
          if (!vagas[indiceVaga].candidatos) {
            vagas[indiceVaga].candidatos = []; // Crie um array de candidatos se não existir
          }
          vagas[indiceVaga].candidatos.push(nomeCandidato);
          alert("Candidato inscrito com sucesso!");
        } else {
          alert("Índice de vaga inválido.");
        }
      }
      break;

    case "5":
      if (vagas.length === 0) {
        alert("Nenhuma vaga cadastrada.");
      } else {
        let listarVagas = "Lista de Vagas:\n";
        for (let i = 0; i < vagas.length; i++) {
          listarVagas +=
            "Índice da Vaga: " +
            i +
            "\nNome da vaga: " +
            vagas[i].nomeDaVaga +
            "\nDescrição: " +
            vagas[i].descricao +
            "\nData limite: " +
            vagas[i].dataLimite +
            "\nQuantidade de Candidatos Inscritos: " +
            (vagas[i].candidatos ? vagas[i].candidatos.length : 0) +
            "\n\n";
        }
        alert(listarVagas);

        const indiceVagaExcluir = prompt(
          "Informe o índice da vaga que deseja excluir: "
        );
        if (vagas[indiceVagaExcluir]) {
          const confirmacaoExclusao = confirm(
            "Tem certeza de que deseja excluir esta vaga?"
          );
          if (confirmacaoExclusao) {
            vagas.splice(indiceVagaExcluir, 1); // Remove a vaga pelo índice
            alert("Vaga excluída com sucesso!");
          } else {
            alert("A exclusão da vaga foi cancelada.");
          }
        } else {
          alert("Índice de vaga inválido.");
        }
      }
      break;

    case "6":
      alert("Encerrando o programa. Obrigado por usar o Vagas & Trampos!");
      break;

    default:
      alert("Opção inválida!");
  }
} while (opcao !== "6");
