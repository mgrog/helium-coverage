# Helium Network (HNT) Coverage Widget

This project is an Iframe web widget that you can include on your website to give users the ability to check Helium Network Coverage for their area using the Helium Mappers api.

### Note

The Helium Network Map is always adding more data points, but sometimes coverage will be estimates based on surrounding areas if your particular location does not have measured signal data. If there are no nearby points, there will be no data returned and indicate "no coverage" but YMMV.

## Adding Widget to Your Site

Define the component

```javascript
/* *************************************************

You can change dimensions, widths from 600 to 300px, 
heights from 500 to 200px work well.
Dynamic values like vw and vh also work.
Stay close to 3:2 ratio.
Change url to wherever the widget is being hosted from

*****************************************************
*/

import * as zoid from 'zoid/dist/zoid.frameworks.frame';

let HeliumWidget = zoid.create({
  tag: 'helium-widget',
  url: 'HOSTING_URL_GOES_HERE',
  dimensions: {
    width: '600px',
    height: '500px',
  },
  attributes: {
    iframe: {
      allow: 'geolocation',
    },
  },
});

export default HeliumWidget;
```

And implement it on your website:

### Quick example for React

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
// import widget
import HeliumWidget from './widget';

// React bindings
const MyHeliumCoverageWidget = HeliumWidget.driver('react', {
  React: React,
  ReactDOM: ReactDOM,
});

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      {/* The Widget, as a React component */}
      <MyHeliumCoverageWidget />
    </div>
  );
}

export default App;
```

## Useful Info

This project makes use of the [https://github.com/krakenjs/zoid](zoid framework)
You can find additional bindings and examples for Angular and Vue there, amongst other helpful things.

## For Hosting

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
