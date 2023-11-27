# Use a imagem base do Python 3.x

ARG PYTHON_VERSION=3.11.5
FROM python:${PYTHON_VERSION} as base

# prevent pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Defina o diretório de trabalho no contêiner
WORKDIR /app

#
RUN apt-get update

# Copie o arquivo de script Python e o arquivo de dados para o contêiner
COPY model/main.py /app/

# The ML container should only contain the rule generation code, it should not include the dataset. 
# TODO: 
# COPY playlist-sample-ds1.csv /app/

# Instale as dependências (no caso, pandas)
RUN pip install pandas fpgrowth-py

# Execute o seu script Python quando o contêiner for iniciado
CMD ["python", "main.py"]
