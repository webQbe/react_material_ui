# React with Material UI (MUI)
This repo is an adaptation of [Material UI React Tutorial](https://www.youtube.com/watch?v=vyJU9efvUtQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=31&pp=iAQB) by Adrian Twarog. 

I followed the tutorial to learn followings:
- Creating **buttons**, **headers**, other components and apply **themes** with Material UI/MUI
- Number of **pre-made components** are ready in MUI library for your website or app.
- It is build on the MUI design docs by Google, these follow a number of architectures to make things look really good, in terms of **spacings**, **colors**, and **animations**. 
- This is designed by the Google team to help build high quality experiences on **Android/iOS** and on the web.
- MUI is one of the most popular **UI design** libraries 

## What I changed
- Removed deprecated `@mui/styles` import and used `sx={{...}}` to define styles.
- Replaced deprecated attribute `justify="center"` with `justifyContent="center"`.


## Getting Started

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`
5. Install dependencies:
    - Open terminal and run `npm install`
    - Install packages:
        ```
        npm i @mui/material @emotion/react @emotion/styled @mui/icons-material fontsource-roboto
        ```
6. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify `src/App.jsx` and Remove:
        - `import reactLogo from './assets/react.svg'`
        - `import viteLogo from '/vite.svg'`
        
    3. Clear contents in `src/App.css`

7. Start Development Server: 
    ```
    npm run dev 
    ``` 

## Credits
Original tutorial:  [Material UI React Tutorial](https://www.youtube.com/watch?v=vyJU9efvUtQ&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=31&pp=iAQB) — Traversy Media.
This repo includes my changes (noted above).

## License
MIT License