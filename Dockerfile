FROM node:14.17.3

ENV WORKDIR /opt/app

RUN mkdir $WORKDIR

RUN chown -R node:node $WORKDIR

COPY  . $WORKDIR

WORKDIR $WORKDIR

RUN npm install

USER node

EXPOSE 3000

CMD [ "node", "app.js" ]
