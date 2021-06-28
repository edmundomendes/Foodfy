<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="200px" />
</h1>

<h2 align="center">
  Foodfy
</h2>
<h3 align="center">
  Desafio Foodfy.
<br>
<br>  
<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

## ✍ Desafio Refatorar o Foodfy

### Refatorando

Neste desafio foi refatorado o projeto Foodfy, usando o nunjucks como template engine e adicionando um servidor com node.js e o express.

#### Arquivo de Dados

##### Refatorando:
- [x] Criar um Arquivo de dados, `data.js` com dados sobre as receitas.
- [x] Use os dados das receitas contidos no arquivo data.js para a página de listagem de receitas e para a home.
- [x] Na home, liste as 6 primeiras receitas
- [x] Na listagem, liste todas receitas do arquivo.
- [x] Ao clicar em uma receita agora o usuário deve ser redirecionado para uma nova página contendo todas informações da receita como ingredientes, modo de preparo e informações adicionais.
- [x] Na página com detalhes da receita, foi adicionado um botão para mostrar/esconder detalhes.

Obs.: O projeto foi convertido em node.js usando o nunjucks.  


<!-- ##### Obter ID da receita atráves da URL no Node.js

  
```js

    server.get("/recipes/:index", function(req,res){

        const recipeIndex = req.params.index

        return res.render("recipes", {item: recipes[recipeIndex]})
    })

``` -->

## :gear: Como usar
```bash
# Clone este repositório
$ git clone https://github.com/edmundomendes/Foodfy.git

# Va até o repositório
$ cd Foodfy

# Instale as dependências do projeto
$ npm install

# Rode o servidor
$ npm start

# Acesse na web
http://localhost:5000

```

## :film_strip: Demonstração

![gif](https://media.giphy.com/media/O5AZI8suH0sli8Delg/giphy.gif)

---

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito por Edmundo Mendes | [linkedin](https://www.linkedin.com/in/edmundo-mendes/) - com a [Rocketseat](https://rocketseat.com.br) :rocket: | [Entre na comunidade da rocketseat!](https://discordapp.com/invite/gCRAFhc) :purple_heart: