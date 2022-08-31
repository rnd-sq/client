FROM node:latest
COPY . .
RUN yarn install --production
CMD ["yarn", "start"]
EXPOSE 3000