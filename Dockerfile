FROM node:17-alpine as builder
WORKDIR /usr/etc/app

RUN apk add git

# by default development branch will be taken
ARG branch='development'

RUN npm cache clean --force
# coping modules
ARG WEBROUTER_REPO_PATH="https://username:glpat-Ea4LnyuFT75brGmLK_zD@gitlab.com/l1654/rdb/webrouter.git"
ARG WEBROUTER_CURRENT_BRANCH=${branch}
RUN git clone "$WEBROUTER_REPO_PATH" ./ && \
    git checkout "$WEBROUTER_CURRENT_BRANCH"
RUN echo Sucessfully cloned web router Service

ARG UTILITY_REPO_PATH="https://username:glpat-Ea4LnyuFT75brGmLK_zD@gitlab.com/l1654/rdb/utilitymodule.git"
ARG UTILITY_CURRENT_BRANCH=${branch}
RUN mkdir -p ./modules/utility && \
    cd ./modules/utility && \
    git clone "$UTILITY_REPO_PATH" ./ && git checkout "$UTILITY_CURRENT_BRANCH" && \
    npm install

ARG LOS_REPO_PATH="https://username:glpat-Ea4LnyuFT75brGmLK_zD@gitlab.com/l1654/rdb/losservice.git"
ARG LOS_CURRENT_BRANCH=${branch}
RUN mkdir -p ./modules/los-service  && \
    cd ./modules/los-service && \
    git clone "$LOS_REPO_PATH" ./ && git checkout "$LOS_CURRENT_BRANCH" && \
    npm install

ARG AUTH_REPO_PATH="https://username:glpat-Ea4LnyuFT75brGmLK_zD@gitlab.com/l1654/rdb/authmodule.git"
ARG AUTH_CURRENT_BRANCH=${branch}
RUN mkdir -p ./modules/auth && \
    cd ./modules/auth && \
    git clone "$AUTH_REPO_PATH" ./ && git checkout "$AUTH_CURRENT_BRANCH" && \
    npm install

ARG DECISION_ENGINE_REPO_PATH="https://username:glpat-Ea4LnyuFT75brGmLK_zD@gitlab.com/l1654/rdb/decisionengine.git"
ARG DECISION_ENGINE_CURRENT_BRANCH=${branch}
RUN mkdir -p ./modules/decision-engine && \
    cd ./modules/decision-engine && \
    git clone "$DECISION_ENGINE_REPO_PATH" ./ && git checkout "$DECISION_ENGINE_CURRENT_BRANCH" && \
    npm install

RUN npm install
RUN ls

# running the service
CMD ["npm", "start"]