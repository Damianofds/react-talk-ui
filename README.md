# react-talky-ui
[![cov](https://damianofds.github.io/react-talky-ui/badges/coverage.svg)](https://github.com/damianofds/react-talky-ui/actions)

A `react` + `typescript` conversational UI for the web.

## ✨ Main features

⬆️ **Document and Audio upload** Provides UI element to upload unstructure content to your processing backend

👑 **Rich Static Chats** Configure and mix conversation tiles composed of UI elements and text

🤹 **Multiple backend** Mix the results of multiple backends in a single conversation

👤 **Frontent user session** keep your conversation history 

🏬 **Secure backend user session** COMING SOON

# Use it as library

Import it in your project as dependency with:

```
#~/my-ai-bot$ yarn add react-talk-ui
```

then place the `TalkyUI` component wherever you prefer in your app

```
import TalkyUI from "../lib/TalkyUI";

<TalkyUI initTalkURL={...}
    fontSize={...}
    themeColor={...}
    backendConfiguration={...}>
```

## Next.js apps

The entire library need to be reexported as 'client' to have client side rendering.

TODO -> Add example

# Development

This project is written in `Typescript`, it uses `React` and it is packaged with `Vite`.

Clone the repo, install the dependencies, run with hot deploy, and test the project with:

```
#~/react-talky-ui$ yarn install
#~/react-talky-ui$ yarn dev
#~/react-talky-ui$ yarn test --coverage //creates coverage report in repo root
#~/react-talky-ui$ yarn build
```

Build the code as external components library (what you get from npm)

```
#~/react-talky-ui$ yarn build
```

Build the code as a demo app (what you see when running yarn dev)

```
#~/react-talky-ui$ yarn demo
```

# Showcase

![](https://github.com/Damianofds/react-talk-ui/blob/main/react-talk-ui.gif)

