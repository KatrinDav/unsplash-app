This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Zadanie:

Przy użyciu Unsplash API: https://unsplash.com/developers, napisz aplikację do przeglądania obrazów.

Aplikacja ma posiadać następujące widoki:

* **Lista sekcji**, zawierająca kilka wybranych sekcji z bazy zdjęć z miniaturami 10 najnowszych obrazów.
* **Sekcja**, wyświetlająca listę miniatur wszystkich dostępnych obrazów z danej sekcji z infinite scrollem (opcja). Użytkownik ma mieć możliwość wyboru sortowania: po najnowszych lub popularnych. Po najechaniu myszą przy każdej miniaturze powinna pokazywać się liczba ściągnięć, lików oraz państwo (jeśli jest dostępne).
* **Pojedyncze zdjęcie**, wyświetlenie w dużym rozmiarze, wraz z dodatkowymi informacjami udostępnianymi przez api. Zdjęcie powinno się dać likować / sharować za pomocą Facebooka.

Aplikacja powinna zawierać routing i być responsywna. Zalecany stack technologiczny: ES6+, Node.js, React.js, React Router, Webpack, Babel, Styled Components / Sass, inne.
Wszelkie dodatkowe pomysły są mile widziane.


### Praca:

* Cztery zespoły G1, G2, G3, G4
* Kazdy zespół ma swoją tablice w trello
  * https://trello.com/b/wYPfr8vz/codemee9-g1
  * https://trello.com/b/wYPfr8vz/codemee9-g2
  * https://trello.com/b/wYPfr8vz/codemee9-g3
  * https://trello.com/b/wYPfr8vz/codemee9-g4
* Zespoły pracują w metodologi "ala" scrum
* Projekt przygotowany w github:  https://github.com/kaluznymarcin/CODEME-E9-APP/

### Git

* Kazdy zespol ma swoj branch oznaczony jako GRUPA_{NR_GRUPY}
* Zaciągnij projekt na swoj dysk:

    `git clone https://github.com/kaluznymarcin/CODEME-E9-APP.git`

* Przełącz się na swój branch

    `git checkout GRUPA_{NR_GRUPY}`

* Kazde zadanie wykonywane przez członka zespołu powinno byc wykonywane w nowym branchu utworzonym przez osobę wykonującą zadanie:

    `git checkout -b {NAZWA_NOWEGO_BRANCHA}`

    lub

    ```
    git branch {NAZWA_NOWEGO_BRANCHA}
    git checkout {NAZWA_NOWEGO_BRANCHA}
    ```
