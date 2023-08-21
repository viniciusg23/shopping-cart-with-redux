# shopping-cart-with-redux

Este projeto foi criado com o intuito de eu estudar a ferramenta Redux no contexto do React, juntamente com o TypeScript. Para isso, desenvolvi um pequeno aplicativo que é alimentado pela API do Mercado Livre. Nele, é possível pesquisar por diversos produtos reais e adicioná-los ou removê-los do seu carrinho de compras.


## Demonstração

![Gif de apresentação do projeto](./redux_commerce.gif)


## Tecnologias Utilizadas

- [x] **React**
- [x] **Redux**
- [x] **TypeScript**
- [x] **API do Mercado Livre**
- [x] **Git**


## Sobre o Redux

O Redux é uma biblioteca de gerenciamento de estado amplamente utilizada em aplicações React. Ele permite o gerenciamento centralizado do estado da aplicação, tornando mais fácil o rastreamento de mudanças e ações. Isso resulta em um fluxo de dados mais previsível e controlável, especialmente em aplicações de grande porte. Com o conceito de armazenamento, ações e redutores, o Redux facilita a manutenção e a atualização do estado global da aplicação.


## Execute Localmente

Clone o projeto

```bash
  git clone https://github.com/viniciusg23/shopping-cart-with-redux.git
```

Navegue até o diretório do projeto

```bash
  cd shopping-cart-with-redux
```

Instale as dependências

```bash
  npm install
```

Inicie o ambiente de desenvolvimento

```bash
  npm run start
```


## Aprendizado

Nesse projeto, pude aprender a gerenciar variáveis de estado de forma muito eficiente utilizando o Redux. Isso evitou a necessidade de criar várias Context APIs em meus projetos, o que muitas vezes resultava em uma aplicação mais complexa com alto acoplamento entre os componentes. Além disso, o uso do Redux ajudou a evitar o problema de "prop drilling", que é o ato de passar propriedades através de múltiplos níveis de componentes para que possam ser acessadas em componentes mais profundos da hierarquia. Isso simplificou a comunicação entre os componentes e contribuiu para um código mais organizado e fácil de manter.