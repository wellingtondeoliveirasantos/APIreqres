# APIreqres
## Linguagem utilizada no projeto: JavaScritp.
### Criado Automação da API cuja documentação está descrita em (https://reqres.in/)
### Clonando o projeto

1. Acesse a URL [ https://github.com/wellingtondeoliveirasantos/APIreqres ]
2. Clique no botão 'Code'
3. Escolha uma das opções (_Clone with SSH_ ou _Clone with HTTPS_) e então clique no botão _Copy URL_ ao lado do campo da opção escolhida
4. No terminal, no diretório onde você armazena seus projetos de software, digite `git clone [URL copiada no passo anteior]` e pressione ENTER
5. Por fim, acesso o diretório do projeto recém clonado (`cd diretorio/pastadepreferencia`)
6. Caso tenha o nodeJS em sua máquina realizar os passos mencionados no ITEM (Modo interativo)
7. Caso não tenha o nodeJS em sua máquina realizar os próximos passos

### Instalando nodeJs
Acessar o site [https://nodejs.org/en/download/] e instalar a versão LTS de acordo com seu sistema operacional.
### Inicializando o NPM
No terminal, dentro do diretório `escolhido`, execute o comando `npm init -y` (este comando irá criar o arquivo `package.json` na raiz do projeto)
### Inicializando o arquivo .gitignore
No mesmo diretório, crie um arquivo chamado `.gitignore`, com o seguinte conteúdo:
```.DS_Store
cypress/downloads/
cypress/screenshots/
cypress/videos/
node_modules/ 
```
### Instalando o Cypress
No terminal, na raiz do projeto, execute o comando `npm install cypress --save-dev` (este comando irá instalar o Cypress como dependência de desenvolvimento, além de criar o arquivo `package-lock.json` e o diretório `node_modules/`)
### Inicializando o Cypress
No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir o Cypress em modo interativo)
### Configurando o projeto de testes automatizados
1. Feche a aplicação do Cypress
2. Abra o arquivo `cypress.config.js` criado na raiz do projeto e altere seu conteúdo pelo seguinte:
```js
const { defineConfig } = require('cypress')
module.exports = defineConfig({
e2e: {
env: {
API_URL: 'https://reqres.in',
},
},
fixturesFolder: false,
})
```
### Modo interativo
1. No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir a aplicação do Cypress)
2. Para executar todos os testes em modo interativo, clique no botão 'Run specs'. Ou, para executar um arquivo de testes em específico, clique no mesmo na listagem de testes localizado no lado esquerdo da tela no menu Spec.