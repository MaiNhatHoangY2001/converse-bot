[![Netlify Status](https://api.netlify.com/api/v1/badges/ab6f60ba-bc55-46f5-80a9-129d8b61773f/deploy-status)](https://conversebot.netlify.app) ![Website Deploy](https://deploy-badge.vercel.app/?url=https://api-conversebot.vercel.app/&name=converse-server)

## Summary

- Learning enlish with gemini ai

## Installation

1. You should install [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) before dev
2. Set up pnpm for install dependencies in project

```
npm install -g pnpm && pnpm i
```

3. When install finish, you can dev (it will run on localhost)

```
pnpm dev
```

## Type theo conventional commit

- feat: thêm một feature
- fix: fix bug cho hệ thống, vá lỗi trong codebase
- refactor: sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi bug cũng được fix từ việc refactor.
- docs: thêm/thay đổi document
- chore: những sửa đổi nhỏ nhặt không liên quan tới code
- style: những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui chẳng hạn.
- perf: code cải tiến về mặt hiệu năng xử lý
- vendor: cập nhật version cho các dependencies, packages.
