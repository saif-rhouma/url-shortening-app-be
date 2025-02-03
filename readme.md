## Node.js Project (TypeScript) For URL SHORTENED SERVICE APP

### Overview

This project provides a structured Node.js TypeScript skeleton by _Saifeddine RHOUMA_ for building scalable and maintainable applications. It follows best practices with organized directories for configurations, controllers, services, models, and middlewares.

### Directory Structure

```
node-project-skeleton-typescript
├── .env.development        # Environment variables for development
├── .env.example            # Example environment file
├── .env.production         # Environment variables for production
├── .env.test               # Environment variables for testing
├── .git                    # Git repository
├── .gitignore              # Git ignore rules
├── .husky                  # Husky pre-commit hooks
├── .nvmrc                  # Node version management
├── .prettierignore          # Files to ignore in Prettier
├── .prettierrc             # Prettier configuration
├── dist                    # Compiled output files
├── doc                     # Documentation files
│   ├── postman             # Postman collections for API testing
│   │   ├── Local environment JSON
│   │   └── Postman collection JSON
│   └── readme.md           # Additional documentation
├── e2e                     # End-to-End tests
│   └── shortenedUrl.e2e-spec.ts
├── eslint.config.mjs       # ESLint configuration
├── jest.config.js          # Jest unit testing config
├── jest.e2e.json           # Jest config for end-to-end tests
├── node_modules            # Dependencies
├── nodemon.json            # Nodemon config for auto-reloading
├── package.json            # Project metadata and dependencies
├── src                     # Application source code
│   ├── apis-doc            # API documentation using Swagger
│   │   └── shortenedUrl.swagger.ts
│   ├── app.ts              # Main app file
│   ├── configs             # Application configuration
│   │   ├── environment.ts
│   │   ├── index.ts
│   │   └── qrConfig.ts
│   ├── core                # Core functionalities
│   │   ├── constants       # Common constants
│   │   │   ├── httpCode.ts
│   │   │   └── messages.ts
│   │   ├── controllers     # Route controllers
│   │   │   ├── example.controller.ts
│   │   │   └── shortenedUrl.controller.ts
│   │   ├── dtos            # Data Transfer Objects
│   │   ├── exceptions      # Custom exception handling
│   │   │   ├── baseException.ts
│   │   │   ├── invalidInputRequest.exception.ts
│   │   │   └── notFound.exception.ts
│   │   ├── middlewares     # Express middlewares
│   │   │   ├── requestValidator.middleware.ts
│   │   │   └── validators  # Request validators
│   │   │       └── shortenedUrl
│   │   │           ├── createShortUrl.schema.ts
│   │   │           ├── index.ts
│   │   │           └── urlDetails.schema.ts
│   │   ├── models         # Database models
│   │   │   └── shortenedUrl.model.ts
│   │   ├── repositories   # Data repositories
│   │   │   ├── baseRepository.ts
│   │   │   └── shortenedUrl.repository.ts
│   │   └── services       # Business logic
│   │       └── shortenedUrl.service.ts
│   ├── database          # Database connection and migrations
│   │   ├── data-source.ts
│   │   ├── index.ts
│   │   └── migrations
│   ├── helpers           # Utility functions
│   │   └── auth.helpers.ts
│   ├── public            # Public assets
│   ├── router            # Express routes
│   │   ├── apis
│   │   │   ├── example.routes.ts
│   │   │   └── shortenedUrl.routes.ts
│   │   └── index.ts
│   ├── server.ts         # Server entry point
│   ├── types            # TypeScript type definitions
│   ├── utils            # Utility functions
│   │   ├── generateUrlData.ts
│   │   ├── logger.ts
│   │   ├── runAsyncWrapper.ts
│   │   ├── serializeDto.ts
│   │   └── swagger.ts
├── test                 # Unit tests
│   ├── core
│   │   ├── controllers
│   │   │   └── .gitkeep
│   │   └── services
│   │       └── shortenedUrl.service.test.ts
│   ├── mocks            # Test mock data
│   │   └── test.dto.ts
│   └── utils           # Test utility functions
│       ├── generateUrlData.test.ts
│       └── serializeDto.test.ts
└── tsconfig.json        # TypeScript configuration
```

### Key Features

- **TypeScript Support**: Strongly-typed codebase for better maintainability.
- **Modular Architecture**: Separation of concerns using controllers, services, repositories, and middlewares.
- **Swagger Documentation**: API documentation via `swagger.ts`.
- **Environment Configurations**: Multiple environment support using `.env` files.
- **Testing**: Unit tests with Jest and end-to-end tests with Postman collections.
- **Database Support**: Integration with databases through a repository pattern.
- **Logging**: Centralized logging with `logger.ts`.
- **Middleware Support**: Custom Express middlewares for validation and error handling.

### Getting Started

1. **Install Dependencies:**
   ```sh
   npm install
   ```
2. **Set Up Environment Variables:**
   ```sh
   cp .env.example .env.development
   ```
3. **Run Development Server:**
   ```sh
   npm run dev
   ```
4. **Run Tests:**
   ```sh
   npm run test
   ```

### Scripts

- `npm run start:dev` - Start development server with Nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start:prod` - Start production server
- `npm run test` - Run unit tests
- `npm run test:watch` - Run unit tests on watch mode.
- `npm run test:e2e` - Run End-2-End tests.
- `npm run lint` - Run ESLint for code linting checking.
- `npm run lint:fix` - Run ESLint for code linting fixing.
- `npm run format` - Run Prettier for code formatting.
- `npm run debug` - Start development server with Nodemon on debugging stage.

This skeleton serves as a great starting point for building robust Node.js applications with TypeScript. 🚀
