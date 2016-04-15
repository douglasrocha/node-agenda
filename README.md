# node-agenda
An extremely simple agenda just for playing with node packages. This is a personal project that has as main focus, applying most of the trending Node.js libraries.

## Technologies

### Front-end
* React
* Material-ui
* Handlebars
* SCSS

I used React for building components and material-ui to use ready-made components from the material design stack. Handlebars and SCSS are known template languages that help to write smaller HTML and CSS files, but their features weren't really used.

### Back-end
* Redux
* Express

For the back-end, redux proved to be a strong framework, since it allows me to create applications with one single state. That makes single application pages' development much easier. Also, it enhances overall testability. Finally, since I don't like to write things from scratch when not needed, I've used the express node framework and its code generator (express-generator), in order to create the application without the need to configure everything before start programming.

### Unit Tests
* Mocha
* Deep Freeze
* Expect
* Redux Mock Store
 
Mocha allows me to write scripts and execute them with npm test. Each test was written using deep-freeze to guarantee the current state in redux was not altered, expect was used for asserts and redux mock store, well, the name explains it all :)

### Tools
* Babel (ES2015, React)
* Webpack
* Redux Devtools

Babel and webpack were definitely necessary. Babel allowed me to write JSX files and Ecmascript 6 files, and compile them to the good old version of javascript (not that good, but who cares?), while webpack allowed me to generate the bundle file to be used on the handlebars page. Redux devtools was good to really see what happens on the page while using it, but, not that necessary for such a small test application.

