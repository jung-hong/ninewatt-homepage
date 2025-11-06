# Build Stage
FROM node:20.11.0 AS builder

WORKDIR /usr/src/app

# 의존성 설치를 위한 package.json만 복사 (캐시 최적화)
COPY package*.json ./

RUN npm install

# 소스 코드 복사
COPY . .

# Next.js 빌드
RUN npm run build

# Production Stage
FROM node:20.11.0-alpine AS runner

WORKDIR /usr/src/app

# Production 환경 변수 설정
ENV NODE_ENV=production

# 빌드 결과물과 필요한 파일만 복사
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/next.config.ts ./
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./

# 의존성 설치 (production 모드로)
RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start"]