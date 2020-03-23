# simple-instagram-grid

> Lightweight component to render simple and elegant Instagram-like photo grids. Highly customizable. Supports click to expand photo and bi-directional scrolling

> Pass in an array of images or image URLs to the InstagramGrid component and it will automatically render a grid from the array

[![NPM](https://img.shields.io/npm/v/simple-instagram-grid.svg)](https://www.npmjs.com/package/simple-instagram-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-instagram-grid
```

## Usage

```jsx
import React, { Component } from 'react'

import InstagramGrid from 'simple-instagram-grid'

const ExampleComponent = (props) =>{
    return (
        // ... content before Instagram Grid
      <InstagramGrid imagesArray={[imgObj0, imgObj1, imgObj2, imgObj3, etc.]}/>
        // ... content after Instagram Grid
    )
}
```

## License

MIT © [pm95](https://github.com/pm95)
