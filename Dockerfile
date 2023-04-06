FROM node:latest
COPY file.js /app/
WORKDIR /app/
USER nodejs
CMD ["node", "file.js"]
