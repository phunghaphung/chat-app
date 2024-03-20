FROM node:21.1-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN npm install -g pnpm
WORKDIR /home/node/app
USER node
COPY --chown=node:node . .
RUN pnpm install
RUN pnpm run build
EXPOSE 5000
CMD ["node", "server/app.js"]