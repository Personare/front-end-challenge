# Front-End-Challenge Personare

## Application

My version of [@Personare Front-End-Challenge](https://github.com/Personare/front-end-challenge). It's a simple Tarot game.

[Link](https://front-end-challenge-personare.vercel.app) of application deployment at [Vercel](https://vercel.com)

## Tecnologies

- ✅ NextJS
- ✅ ReactJS
- ✅ Typescript
- ✅ Styled-Components
- ✅ Jest
- ✅ React Testing Library
- ✅ Eslint
- ✅ Prettier

## Directory Structure

```shell
├── src/
│   ├── components/                 #Atomic design structure
│   │   ├── atoms/
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   ├── index.spec.tsx
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   ├── data/                       #JSON data files
│   │   ├── tarot.json
│   ├── hooks/                      #Custom Hooks
│   │   ├── useOnClickOutside.ts
│   ├── pages/                      #NextJS page structure
│   │   ├── api/
│   │   │   ├── cards/
│   │   │   │   ├── index.ts
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   ├── styles/                     #Global styles configuration
│   │   ├── global.ts
│   │   ├── variables.ts
│   ├── utils/                      #Util functions
│   │   ├── shuffle.ts
```

## Setup

```bash
git clone https://github.com/rodrigo-miranda18/front-end-challenge-personare.git
# or
git clone git@github.com:rodrigo-miranda18/front-end-challenge-personare.git

# Clone project
```

```bash
cd front-end-challenge-personare && git checkout rodrigo-miranda

# Go to project directory and switch branch
```

```bash
npm install
# or
yarn

# To download dependencies
```

```bash
# Create a .env file in root of project and paste this environment variable

BASE_URL=http://localhost:3000
```

```bash
npm run build
# or
yarn build

# To generate project build
```

```bash
npm start
# or
yarn start

# Now just access http://localhost:3000
```

```bash
# To run tests:

npm run test
# or
yarn test
```

## Related Links

[Personare](https://www.personare.com.br) &nbsp;&nbsp;
[Atomic Design](https://bradfrost.com/blog/post/atomic-web-design) &nbsp;&nbsp;
[NextJS](https://nextjs.org) &nbsp;&nbsp;
[Jest](https://jestjs.io) &nbsp;&nbsp;
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) &nbsp;&nbsp;
[Styled Components](https://styled-components.com)
