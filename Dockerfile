FROM node:20-alpine as frontend-builder

WORKDIR /app/frontend
COPY personal-website/ ./
RUN npm install
RUN npm run build

FROM node:20-alpine as backend-builder

WORKDIR /app/backend
COPY backend/ ./
RUN npm install
RUN npm run build

FROM node:20-alpine

WORKDIR /app
# Copy frontend build
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist
# Copy backend build and dependencies
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/package*.json ./backend/

WORKDIR /app/backend
RUN npm install --production

ENV FRONTEND_BUILD_PATH=/app/frontend/dist

EXPOSE 3000
CMD ["node", "dist/server.js"] 