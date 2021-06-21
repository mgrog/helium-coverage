/* *************************************************

Add this file to project /src directory
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
