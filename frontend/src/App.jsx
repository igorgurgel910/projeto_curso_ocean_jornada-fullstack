import "./App.css";
import Header from "./components/Header/Header";
import ReadAll from "./components/ReadAll/ReadAll";

/**
 * Desafios!
 *
 * Primeiro: HTML/CSS; Criação de componente.
 * 1. Criar um componente <Header /> que possua um logo na esquerda e dois itens
 * clicáveis:
 * - Home
 * - Criar
 * 2. Estilizar o Header com uma cor de fundo, o logo com tamanho pequeno e
 * os itens com uma cor que contraste bem com o fundo
 *
 * Segundo: JS; Lista; Map;
 * 1. Para cada item da lista de itens, crie uma propriedade chamada `tags`;
 * 2. Essa propriedade `tags` deve conter uma lista de strings;
 * 3. Cada string representa uma tag daquele personagem;
 * 4. Crie um componente <Tag /> que recebe uma `string` como
 * propriedade (`props`) e exibia um <div> com o texto informado.
 * 5. Estilize o componente <Tag /> para ter uma cor de fundo que contraste com
 * o card.
 * 6. Utilizando o map, exiba dentro do componente <Card />, uma renderização
 * desse componente <Tag /> recém criado.
 */

/**
 * Novos desafios!
 *
 * Tecnologias: ReactJS; Criação de componente; UseState; UseEffect.
 * 1. Criar um componente ReadById
 * 2. Dentro do componente, realizar uma requisição para o endpoint de Read by ID no backend
 * 3. Pegar as informações do backend e enviar para o componente Card
 *
 * Dica: Pode ocultar o componente ReadAll enquanto tiver construindo o ReadById, para não
 * se confundir nas requisições
 */

function App() {
  return (
    <div className="App">
      <Header />
      <ReadAll />
    </div>
  );
}

export default App;
