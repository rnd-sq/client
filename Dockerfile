FROM node:latest
COPY . .
RUN yarn install --production
CMD ["bin/start"]
EXPOSE 3000