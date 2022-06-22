# Kenzie Food

<h2>Tabela de Conteúdos</h2>

- [Kenzie Food](#kenzie-food)
	- [1. Sobre](#1-sobre)
	- [2. Links Relevantes](#2-links-relevantes)
	- [3. Regras de Negócio](#3-regras-de-negócio)
	- [4. Tecnologias](#4-tecnologias)
	- [5. Funcionalidades](#5-funcionalidades)

<a name="sobre"></a>

## 1. Sobre

Este é um Capstone Project realizado no segundo módulo do curso de Desenvolvedor Front-end da Kenzie Academy Brasil. É uma aplicação no formato e-commerce de comida, desenvolvido do zero, desde sua estrutura(HTML) e estilização(CSS) até as suas funcionalidades(Javascript). Consome uma API externa para o carregamento dos produtos. Faz troca de informações com a API para editar e deletar produtos e incluir novos produtos. E possui as funcionalidades de Cadastro e Login na aplicação para acesso à página de Administrador, que pode editar/adicionar/deletar os produtos. Na página home, possui uma barra de pesquisa para busca dos produtos, possui botões de filtro dos produtos por categorias, permite adicionar e remover produtos do carrinho de compras e faz o cálculo do valor total da venda.

<a name="links"></a>

## 2. Links Relevantes

- <a name="deploy-vercel" href="https://api-kenziefood-m2-discacciati.vercel.app/" target="_blank">Deploy @ Vercel</a>
- <a name="doc-api" href="https://gitlab.com/-/snippets/2274944" target="_blank">Documentação da API</a>
- <a name="doc-api" href="https://kenzie-food-api.herokuapp.com/" target="_blank">Link da API</a>
- <a name="figma" href="https://www.figma.com/file/yCesx2slm3unVtyVW5d3RK/M2---E-commerce-Produtos---Kenzie-Food?node-id=1564%3A2548" target="_blank">Layout do Figma</a>

<a name="regras"></a>

## 3. Regras de Negócio

--> Páginas
1 - Home Page
Página Inicial de produtos: local onde será possível acessar a lista de produtos e o carrinho.Nesse local será possível ser redirecionado para a página de login/register e, caso o usuário esteja autenticado, também será possível ser redirecionado a página de admin.

2 - Admin Page
Página, na qual só será acessada por usuários autenticados, onde serão consumidas as requisições privadas da API para os produtos (GET, POST, PATCH, DELETE)
Será possível ver todos os produtos do usuário porém, ao tentar deletar o mesmo, deverá aparecer um pop-up confirmando a remoção.

3 - Login/Register
Páginas responsáveis por cadastrar um novo usuário e fazer a autenticação do mesmo.

--> Trabalhando com a API e o Front
Na aplicação, deve ser possível fazer o register e o login de um usuário. Porém, caso o mesmo não queira se cadastrar, ele tem liberdade para navegar na página, usando a requisição pública de produtos padrões. Assim, os produtos que forem adicionados no carrinho, por esse usuário anônimo, devem se manter apenas no LocalStorage.

Resumo do acesso de usuário autenticado e usuário anônimo.

Autenticação do usuário salva no LocalStorage.

-- Anônimo
. Entrada permitida na página Home;
. Uso apenas da requisição pública de produtos;
. Produtos adicionados devem ficar apenas no localStorage;
. Acesso bloqueado a página de criação, edição e remoção de produtos.

-- Autenticado
. Entrada Permitida na página home;
. Listagem de produtos feita pela requisição privada do usuário;
. Produtos Adicionados ao carrinho inicialmente no localStorage, caso efetue o extra, adicionar na API;
. Acesso total a página de criação, edição e remoção de produtos.

<a name="techs"></a>

## 4. Tecnologias

- <a name="react" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">HTML5</a>
- <a name="yup" href="https://www.javascript.com/" target="_blank">Javascript</a>
- <a name="context-api" href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" target="_blank">Document Object Model (DOM)</a>
- <a name="context-api" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming" target="_blank">Object Oriented Programming (OOP)</a>
- <a name="axios" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>

<a name="features"></a>

## 5. Funcionalidades

Possui uma página principal(home) de apresentação de todas as comidas disponíveis para compra e um carrinho de compras que o usuário poderá incluir ou excluir as comidas escolhidas. Esta página possui um cabeçalho (header) com a logo da Kenzie Food a direita e a esquerda uma barra de pesquisa para busca por nome dos produtos. Logo abaixo possui uma barra de navegação com botões para Filtrar a exibição dos produtos. Os produtos podem ser exibidos/filtrados em: Todos ou pelas categorias de: Panificadora, Frutas e Bebidas. Abaixo da Barra de Navegação tem o corpo da página (main) com cards dos produtos. Cada produto pode ser exibido dentro de um card, contendo Foto, Categoria, Nome, Descrição e Preço do Produto e um botão de adicionar ao carrinho.

Na lateral direita da página possui o Carrinho de Compras, que lista os produtos adicionados, com foto, nome, categoria e preço de cada produto, e botão para excluir o produto do carrinho. Ao final do carrinho possui a quantidade de itens do carrinho, cálculo do valor total da compra, e um botão para finalizar a compra que pode ser linkado à uma nova API de vendas online.

A página inicial também possui um botão para login, que leva para outra página específica onde o usuário poderá fazer um login com nome e senha, ou acessar como anonimo. E um botão para registro de um novo usuário. Após efetuar o login, o usuário tem acesso a página de administração do e-commerce. Esta tem a funcionalidade de incluir novo produto, editar um produto ou excluir um produto.

##
