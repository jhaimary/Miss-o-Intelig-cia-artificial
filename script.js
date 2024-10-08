const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você reduziria a poluição do plástico em nossos oceanos?",
        alternativas: [
            {
                texto: "Promovendo a redução do uso de plásticos descartáveis e incentivando a reutilização e reciclagem de produtos plásticos.",
                afirmacao: "Incentivar menos plástico descartável e mais reutilização e reciclagem de plásticos",
            },
            {
                texto: "Desenvolvendo tecnologias avançadas para a limpeza de resíduos plásticos nos oceanos e conscientizando sobre os efeitos devastadores que o plástico tem na vida marinha.",
                afirmacao: "Desenvolver tecnologias avançadas para limpar resíduos plásticos nos oceanos e conscientizar sobre os danos que o plástico causa à vida marinha.",
            }
        ]
    },
    {
        enunciado: "Quais ações você poderia tomar para combater as mudanças climáticas?",
        alternativas: [
            {
                texto: "Adotando fontes de energia renovável, como solar e eólica, e reduzindo nossa pegada de carbono ao diminuir o consumo de combustíveis fósseis.",
                afirmacao: "Adotando fontes de energia renovável, como solar e eólica, e reduzindo nossa pegada de carbono ao diminuir o consumo de combustíveis fósseis."
            },
            {
                texto: "Implementando políticas internacionais para reduzir as emissões de gases de efeito estufa e promovendo práticas agrícolas sustentáveis que capturem carbono no solo.",
                afirmacao: "Implementando políticas internacionais para reduzir as emissões de gases de efeito estufa e promovendo práticas agrícolas sustentáveis que capturem carbono no solo."
            }
        ]
    },
    {
        enunciado: "Como você poderia proteger a biodiversidade e os ecossistemas frágeis?",
        alternativas: [
            {
                texto: "Estabelecendo áreas protegidas e reservas naturais para preservar habitats críticos e espécies ameaçadas de extinção.",
                afirmacao: "Estabelecendo áreas protegidas e reservas naturais para preservar habitats críticos e espécies ameaçadas de extinção."
            },
            {
                texto: "Incentivando práticas de consumo sustentável e apoiando pesquisas científicas para entender melhor os ecossistemas e como podemos conservá-los de forma eficaz.",
                afirmacao: "Incentivando práticas de consumo sustentável e apoiando pesquisas científicas para entender melhor os ecossistemas e como podemos conservá-los de forma eficaz."
            }
        ]
    },
    {
        enunciado: "O que você poderia fazer para melhorar a qualidade do ar em nossas cidades?",
        alternativas: [
            {
                texto: "Promovendo o transporte público e o uso de veículos elétricos para reduzir as emissões de gases poluentes em áreas urbanas.",
                afirmacao: "Promovendo o transporte público e o uso de veículos elétricos para reduzir as emissões de gases poluentes em áreas urbanas."
            },
            {
                texto: "Plantando árvores e criando espaços verdes nas cidades para filtrar poluentes atmosféricos e fornecer oxigênio limpo.",
                afirmacao: "Plantando árvores e criando espaços verdes nas cidades para filtrar poluentes atmosféricos e fornecer oxigênio limpo."
            }
        ]
    },
    {
        enunciado: "Como você acha que poderiamos preservar melhor a água potável",
        alternativas: [
            {
                texto: "Implementando práticas de conservação da água, como consertar vazamentos e usar sistemas de irrigação mais eficientes.",
                afirmacao: "Implementando práticas de conservação da água, como consertar vazamentos e usar sistemas de irrigação mais eficientes"
            },
            {
                texto: "Investindo em tecnologias avançadas de dessalinização e tratamento de água para tornar fontes alternativas de água potável disponíveis e acessíveis.",
                afirmacao: "Investindo em tecnologias avançadas de dessalinização e tratamento de água para tornar fontes alternativas de água potável disponíveis e acessíveis."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
