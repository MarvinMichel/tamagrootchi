# Tamagrootchi

An updated version of my first project. Since my first project I've grown a lot as a developer and I wanted to implement the new knowledge I've gained. That's why I decided to look back at where I started and rebuild the whole application. The old version used Lottie.js to move the SVG with JSON data. Version 2.0 works with Three.js and a 3D character model.

## Concept

The application is a Tamagotchi of Marvel's Guardians of the Galaxy character 'Groot'. The application has three buttons to control Groot with. On the right you can find an info-button that will open a modal to displays information about Groot, which is retrieved from the [Superhero API](https://superheroapi.com/index.html).

<img width="1552" alt="Screenshot 2020-10-12 at 18 18 37" src="https://user-images.githubusercontent.com/25977763/95768971-6cde7980-0cb7-11eb-8cf0-22f51ce3e1db.png">

## What you need
* A 3D model for the character with animations.
* An API-token from the Superhero API.
* The dependencies listed below.
>💡 You can download a 3D model or create one yourself with Blender or such software. I've got mine from [Sketchfab](https://sketchfab.com/3d-models/groot-7e69fddb8e6d4955827bfbcbaf2e83b8) thanks to [Chemaron](https://sketchfab.com/chemaron). The animations are added with [Adobe Mixamo](https://www.mixamo.com/).

## Dependencies

- [React](https://reactjs.org/)
- [React-Modal](https://github.com/reactjs/react-modal)
- [Redux](https://redux.js.org/)
- [Three.js](https://github.com/mrdoob/three.js/)
- [Superhero API](https://superheroapi.com/index.html)

## How to use?

Visit the [application]() or follow the steps below:

1. Download the .zip file or clone the repository
2. Open the terminal and move to the project directory
3. Run npm install
4. Run one of the following scripts:
    * `npm start` to open the development server.
    * `npm test` to test the current version.
    * `npm build` to build a new version for production.
