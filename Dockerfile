# Imagem base com o node 10.11 instalado
FROM node:10.11

# Criando uma pasta para armazenar a aplicação
RUN mkdir /usr/src/app

# Defifindo a pasta como principal
WORKDIR /usr/src/app

COPY . .

# Instalando dependencias
#RUN npm install antd

# Iniciando a aplicação
CMD ["npm", "start"]