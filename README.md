# Tarot

## Little Description
This app has been created with [create-react-app](https://github.com/facebookincubator/create-react-app).

I knew that the best choice to control the state changes is the redux (I keep my opinion on this). Despite this, I wanted to use the [react context](https://reactjs.org/docs/context.html), basically because its something new for me and I didn't know what could happen if I make the app state changes with that.

Feedback about this choice:\
It's great for simple things, but for more specific things the redux is better.


I've never used jest before. But I wanted to test it, instead of using mocha, chai and sinon. I tried to use enzyme, but I still have to study it. So since I did not have more time available to do the project, I decided to upload it.

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
    │
    └─── modal (used to show selected card information)
    │   │
    │   └─── content
    │   │
    │   └─── footer
    │   │
    │   └─── header
    │
    └─── title
```


## Contributors
[Matheus Valeriano](https://github.com/mathvaleriano)