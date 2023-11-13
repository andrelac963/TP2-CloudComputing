# TP2-CloudComputing

# Frontend

### Requisitos de sistema:
Node 18.18.0
Npm 9.8.1

### Comandos para rodar localmente:

`npm install`

`npm run dev`

### Comandos para montar a imagem
Montar a imagem só é necessário caso haja alguma alteração na implementação do servidor web ou do cliente

#### 1 - Realizar a build do cliente web

`$ cd TP2-CloudComputing/front-end/client`


`$ npm run k8s-build`

*A build será realizada no diretório TP

#### 2 - Montar a imagem do nginx utilizando a build ReactJs

`$ cd TP2-CloudComputing/front-end`

`$ docker build . -t bernnardosbo/nginx-frontend`

#### 3 - Realizar push da imagem para o Docker Hub

`$ docker login`

`$ docker push bernnardosbo/nginx-frontend`

*obs: para conseguir realizar o push da nova imagem, deve solicitar a adição do seu user como colaborador no repositório da imagem no Docker Hub*

# Backend

### Requisitos de sistema:
Python 3.11.5

### Comandos para rodar em desenvolvimento:

`pip install Flask flask_cors`

`flask run --port=30530`

### Comandos para montar a imagem
Montar a imagem só é necessário caso haja alguma alteração na implementação da api.

#### 1 - Montar a imagem da api flask

`$ cd TP2-CloudComputing/api`

`$ docker build . -t bernnardosbo/backend`

#### 2 - Realizar push da imagem para o Docker Hub

`$ docker login`

`$ docker push bernnardosbo/backend`

*obs: para conseguir realizar o push da nova imagem, deve solicitar a adição do seu user como colaborador no repositório da imagem no Docker Hub*

# Modelo

### Requisitos de sistema:
Python 3.11.5

# TODO LIST
### Organização (melhorar ciclo de desenvolvimento)
- [ ] Definir ambiente para permitir rodar as aplicações localmente, em container docker ou em ambiente k8s
- [ ] ...

### Backend

- [ ] Implementar chamada de modelo
- [ ] Automatizar montagens de novas builds com o github actions(?)
- [ ] ...

### Frontend
- [ ] Automatizar montagens de novas builds com o github actions(?)
- [ ] ...

### Modelo
- [ ] Construir dockerfile
- [ ] Upar build para o dockerhub
- [ ] Automatizar montagens de novas builds com o github actions
- [ ] ...

# References
https://docs.github.com/en/actions/publishing-packages/publishing-docker-images