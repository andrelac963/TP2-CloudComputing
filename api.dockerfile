# Use a imagem base do Python
FROM python:3.8-slim

# Define o diretório de trabalho no contêiner
WORKDIR /api

# Copie o código do aplicativo para o contêiner
COPY api /api

# Expõe a porta que seu aplicativo Flask está rodando
EXPOSE 30500

# Comando para iniciar o aplicativo Flask
CMD ["python", "app.py"]