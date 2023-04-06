FROM node:latest
COPY file.js /app/
WORKDIR /app/
RUN groupadd -r nodejs \
    && useradd -m -r -g nodejs nodejs
USER nodejs
CMD ["node", "file.js"]
