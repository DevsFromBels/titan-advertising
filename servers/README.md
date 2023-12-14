# Backend of Project TITAN

### Pull commits pattern:
```bash
  init: # - что-то создать проинициализировать (to init something)
  feat: # - новая фича или функциональность (new feature or functionality)
  fix: # - исправление бага (bug fix)
  docs: # - обновление документации (documentation update)
  style: # - изменения форматирования кода (code formatting changes)
  refactor: # - рефакторинг кода (code refactoring)
  test: # - добавление или изменение тестов (adding or changing tests)
  chore: # - # вспомогательные изменения (auxiliary changes)
```

### To start docker database
```bash
  docker-compose up # предварительно изменить .env.example на .env, и изменить поле .env DATABASE_URL под dcoke-compose.yml
```

### To instanll all packages
```bash
  npm install # or bun install
```

### To start gateway
```bash
  npm run dev gateway # or bun run dev gateway
```

### To start users
```bash
  npm run dev users # or bun run dev users
```
