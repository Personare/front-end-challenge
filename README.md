# Tarot

## Install dependencies
`$ yarn install`

## scripts
* run watch and develop mode\
  `$ yarn start`
* run production mode\
  `$ yarn run build`
* run lint\
  `$ yarn run lint`
* fix lint\
  `$ yarn run lint-fix`


## Main Structure
```
│─── api (services)
│   └─── cards
│
└─── components
    │
    └─── app (main component)
        │
        └─── buttons
        │   │
        │   └─── reset
        │   │
        │   └─── start
        │
        └─── deck
        │   └─── card
        │   │
        │   └─── flip (container that can flip the card)
        │   │
        │   └─── image (card image)
        │
        └─── game-context (manipulate state and provide actions)
        │   │
        │   └─── actions
        │   │
        └─── modal (used to show selected card information)
        │   │
        │   └─── content
        │   │
        │   └─── footer
        │   │
        │   └─── header
        │   │
        └─── title
```


## Little Description
This app has been created with [create-react-app](https://github.com/facebookincubator/create-react-app).

I decided to use the [react context](https://reactjs.org/docs/context.html). Because I wanted to test it a lot.\
I knew what I could do with redux.

Feedback on this decision:\
It's great for simple things, but for more specific things the redux is better


## Contributors
[Matheus Valeriano](https://github.com/mathvaleriano)