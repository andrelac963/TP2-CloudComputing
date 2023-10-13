# Use a imagem base do Python 3.x
FROM python:3.x

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo de script Python e o arquivo de dados para o contêiner
COPY main /app/
COPY playlist-sample-ds1.csv /app/

# Instale as dependências (no caso, pandas)
RUN pip install pandas

# Execute o seu script Python quando o contêiner for iniciado
CMD ["python", "main.py"]
