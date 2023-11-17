FROM node:18-alpine3.17
RUN mkdir /client
COPY ./client ./client
WORKDIR /client
RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=builder /client/dist /usr/share/nginx/client
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /client/nginx.default.conf /etc/nginx/conf.d