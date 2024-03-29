FROM node:lts AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM ratisbonacoding/nginx-cloudflare-cache
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080