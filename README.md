# Projeto Laravel 
## Instalando com Docker

### Backend Laravel 
Para começar o procedimento execute o clone do repositorio e script inicial
```sh
git clone https://github.com/felipesergios/Hiring_Laravel.git
# pode ser necessário executar o comando para dar permissão ao script chmod 777 init_project.sh
./init_project.sh
```
Com isso o banco de dados e laravel backend vão subir e responder via http
verifique o acesso em 
```sh
curl http://localhost:8000/public/api/
```

## Instalando via gerenciador de pacotes 
- 1 - Apos executar o clone do projeto entre na pasta e faça a copia do arquivo .env 
do laravel e subistitua os campos relacionados a banco de dados pelos seus respactivos endereços do seu servidor .
```sh
cd Hiring_Laravel/backend-laravel/
cp .env.exemple .env
```
- 2 - Faça o dowload das dependencias do projeto 
 ```sh
composer install 
```
- 3 - Execute todas as migrações do banco e seeds e rode o servidor 
```sh
php artisan migrate
php artisan db:seed
php artisan serve
```
Com isso o backend em laravel estara disponivel e respondendo

## FrontEnd - ReactJS
* é recomendável utilizar a instalação de backend via docker caso opte por realizar manualmente será necessário alteração no aquivo src/services/api.ts
para ter o apontamento correto .

### Instalando via docker
Entre na pasta do frontend e execute o build da imagem docker 
```sh
cp frontend-react/
docker build -t hiring/react .
docker run -p 80:3000 --netowrk=webAccess hiring/react
```
Com isso o app poderá ser acessado em 
http://localhost
### Instalando via gerenciador de pacotes 
Nota: caso o backend for instalado via gerenciador de pacotes será necessário alteração no arquivo src/services/api.ts como visto abaixo
```sh
nano /src/services/api.ts
# Edite o baseURL para http://localhost:8000
```

Entre na pasta do frontend baixe as dependencias
```sh
cp frontend-react/
yarn install
```
agora execute o comando para iniciar o servidor desenvolvimento 
```sh
yarn start
```

# API 
Rotas de listagem 
GET - api/device/ -> lista todos os devices no banco 
GET - api/device/{id} -> Lista um device especifico (necessita passagem de id)
POST - api/device/ -> Cria um device (necessita passagem do json conforme exemplo abaixo)
```json
{
	"product_name":"Geladeira",
	"product_description":"Belissia geladeira modelo novo 2022 Custom",
	"product_brand":"lg"
}
```
PUT - api/device/{id} -> Edição de um device (necessita passagem de ID e Json )
DELETE - api/device/{id} -> Deleta um device 








