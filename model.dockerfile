FROM python:3.11.5 as base

WORKDIR /app
COPY main /app/

RUN pip install pandas
RUN pip install fpgrowth_py

CMD ["python", "main.py"]