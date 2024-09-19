//funçao troca texto
const btn = document.getElementById("btn");
const resp = document.getElementById("resposta");
let mostrandoResposta = false; // Variável para controlar o estado (pergunta ou resposta)

function trocatexto() {
  btn.addEventListener("click", function () {
    if (mostrandoResposta) {
      // Se estiver mostrando a resposta, volta para a pergunta
      resp.innerHTML =
        "¿Cómo podemos sostener en la práctica que estamos proporcionando a todos los alumnos lo que precisan en su proceso de aprendizaje?";
      btn.innerHTML = "Respuesta";
      mostrandoResposta = false;
    } else {
      // Se estiver mostrando a pergunta, exibe a resposta
      resp.innerHTML =
        "Una posible respuesta la encontramos en el enfoque denominado Diseño Universal para el Aprendizaje (DUA), desarrollado por el Center for Applied Special Technology (Centro de Tecnología Especial Aplicada, CAST). El enfoque DUA pone el foco de atención en el diseño del currículo escolar para explicar por qué hay estudiantes que no llegan a alcanzar los aprendizajes previstos. Desde el CAST se critica que muchos currículos están construidos para atender a la «mayoría» de los estudiantes, pero no a todos. Estos currículos conciben que existe una amplia proporción del estudiantado que aprende de forma similar. Para estos estudiantes se determinan los objetivos, se diseñan los medios y las tareas, y se elaboran los materiales. Esto provoca que para una «minoría», los objetivos sean prácticamente inalcanzables. Según el enfoque DUA, el propio currículo impide que estos estudiantes accedan al aprendizaje.";
      btn.innerHTML = "Volver!";
      mostrandoResposta = true;
    }
  });
}

// Chama a função para registrar o evento de clique
trocatexto();
