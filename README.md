# boilerplate-monorepo-typescript

## Description

- Monorepo template for Typescript & NodeJS with PNPM
- MacOS is recommended.

## Prerequisite

- [PNPM](https://pnpm.io/installation): v7.x
- NodeJS: v18.x

## Run sample

- Project Structure

  ```Bash
  ./
  ├── packages/
  │   ├── greeting-service/
  │   │   ├── src/
  │   │   ├── test/
  │   │   ├── jest.config.js
  │   │   ├── package.json
  │   │   └── tsconfig.json
  │   └── sample-package/
  │       ├── src/
  │       ├── test/
  │       ├── Dockerfile
  │       ├── jest.config.js
  │       ├── package.json
  │       └── tsconfig.json
  ├── scripts/
  ├── README.md
  ├── package.json
  ├── pnpm-lock.yaml
  ├── pnpm-workspace.yaml
  ├── tsconfig.json
  └── turbo.json
  ```

- Run sample (Execute below command on project-root)

  ```Bash
  # Write .npmrc
  mv .npmrc.example .npmrc

  # Install dependencies
  pnpm install

  # test, build, packaging 'sample-package'
  pnpm packaging

  # Confirm docker image name 'bob/sample-package'
  docker images | grep bob/sample-package

  # Run sample-package
  docker run -it --rm -p 3333:3333 --name greeting bob/sample-package

  # Testing
  curl -X POST http://localhost:3333/greeting -d '{ "name": "Bob" }' -H 'Content-Type: application/json'
  ```
