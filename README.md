# JavaScript-Weather-Application
 A web weather application using only pure JavaScript and doing all of this from scratch.

## HTML5

* Moblie theme color - Chrome
```html
<meta name="theme-color" content="#000">
```

* Moblie theme color - Safari
```html
<meta name="apple-mobile-web-app-status-bar-style" content="#000">
```


## CSS3
* The `user-select` CSS property controls whether the user can select text. 
```css
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;
```
* The `background-size` CSS property specifies the size of the element's background image. 
```css
background-size: cover;
background-size: contain;
```
* The `background-repeat` CSS property defines how background images are repeated. A background image can be repeated along the **horizontal axis**, the **vertical axis**, **both axes**, or **not repeated** at all.
```css
/* Keyword values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Global values */
background-repeat: inherit;
background-repeat: initial;
background-repeat: unset;
```
* The `background-position` CSS property sets the initial position, relative to the background position layer defined by `background-origin`, for each defined background image.
```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values (x, y)*/
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: unset;
```
* The `transform` CSS property lets you **rotate**, **scale**, **skew**, or **translate a given element**. This is achieved by modifying the coordinate space of the CSS [visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model).
```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```
* The `transition` CSS property is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) for [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property), [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration), [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), and [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay).
```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

/* Global values */
transition: inherit;
transition: initial;
transition: unset;
```
* The `letter-spacing` CSS property specifies the spacing behavior between text characters.
```css
/* Keyword value */
letter-spacing: normal;

/* <length> values */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: .3px;

/* Global values */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```
* The `flex` CSS property specifies how a flex item will **grow** or **shrink** so as to fit the space available in its flex container. This is a [shorthand property](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) property that sets [`flex-grow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow), [`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink), and [`flex-basis`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).
```css
/* Basic values */
flex: auto;
flex: initial;
flex: none;
flex: 2;

/* One value, unitless number: flex-grow */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30px;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;
```
* The `align-items` property sets the [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) value on all direct children as a group. The ```align-self``` property sets the alignment of an item within its containing block.
```css
/* Basic keywords */ 
align-items: normal; 
align-items: stretch; 

/* Positional alignment */ 
/* align-items does not take left and right values */
align-items: center;     /* Pack items around the center */ 
align-items: start;      /* Pack items from the start */ 
align-items: end;        /* Pack items from the end */ 
align-items: flex-start; /* Pack flex items from the start */ 
align-items: flex-end;   /* Pack flex items from the end */ 
align-items: self-start; 
align-items: self-end; 

/* Baseline alignment */
align-items: baseline; 
align-items: first baseline; 
align-items: last baseline; /* Overflow alignment (for positional alignment only) */ 
align-items: safe center; 
align-items: unsafe center; 

/* Global values */
align-items: inherit; 
align-items: initial; 
align-items: unset;
```
* The ```justify-content``` property defines how the browser distributes space between and around content items along the [`main-axis`](https://developer.mozilla.org/en-US/docs/Glossary/Main_Axis) of their container.
```css
/* Positional alignment */
justify-content: center;     /* Pack items around the center */
justify-content: start;      /* Pack items from the start */
justify-content: end;        /* Pack items from the end */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end;   /* Pack flex items from the end */
justify-content: left;       /* Pack items from the left */
justify-content: right;      /* Pack items from the right */

/* Baseline alignment */
/* justify-content does not take baseline values */

/* Normal alignment */
align-content: normal;

/* Distributed alignment */
justify-content: space-between; /* Distribute items evenly
                                   The first item is flush with the start,
                                   the last is flush with the end */
justify-content: space-around;  /* Distribute items evenly
                                   Items have a half-size space
                                   on either end */
justify-content: space-evenly;  /* Distribute items evenly
                                   Items have equal space around them */
justify-content: stretch;       /* Distribute items evenly
                                   Stretch 'auto'-sized items to fit
                                   the container */

/* Overflow alignment */
justify-content: safe center;
justify-content: unsafe center;

/* Global values */
justify-content: inherit;
justify-content: initial;
justify-content: unset;
```

## JavaScript
* [Dark Sky API](https://darksky.net/dev)
* [OpenCage Geocoder](https://opencagedata.com/)
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* #### 6 Main Module
  * #### Init
  * #### UI Elements Module
    * this module will be responsible for controling UI Elements like Menu.
  * #### Local Storage Api
    * this module will be responsible for saving, retriving and deleting the citied added by user.
  * #### Saved Cities module
    * this module will be responsible for showing on the UI saved cities from the local storage and from here user will be able to delete or switch between city he wants to see data.
  * #### Get Location Module
    * this module will be responsible for getting the data about the location to search for weather.
  * #### Get Weather Module
    * this module will aquire weather data and then it  will pass to another module which will put the data on UI.