# frontend: https://github.com/nam-ui/ReactJS-FE__Movies_tixis-applo-
# backend:  https://github.com/nam-ui/NodeJS-BE__Movies-tixi

# setup
git --version 2.38.1.windows.1 <br />
npm--version 8.19.2 <br />
node --version v16.18.0 <br />
yarn --version 1.22.19 <br />
run cmd: yarn <br />
<br />
-> setup { <br />
    step 1 ( install node_mondule ): yarn <br /> 
    step 2 ( run app ): yarn start || yarn run dev <br />
    if you want to build server cmd: yarn build <br />
} <br />
# save lib 
{
  "name": "tixi-plus",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@apollo/client": "^3.4.10",
    "@hookform/error-message": "^2.0.0",
    "@material-ui/core": "^4.11.3",
    "@material-ui/lab": "^4.0.0-alpha.57",
    "@testing-library/jest-dom": "^5.11.10",
    "@testing-library/react": "^11.2.6",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^26.0.22",
    "@types/node": "^12.20.7",
    "@types/react": "^17.0.3",
    "@types/react-dom": "^17.0.3",
    "apollo-boost": "^0.4.9",
    "apollo-cache-inmemory": "^1.6.6",
    "apollo-client": "^2.6.10",
    "apollo-link-http": "^1.5.17",
    "axios": "^0.21.1",
    "date-fns": "^2.20.1",
    "date-format": "^3.0.0",
    "graphql": "^15.5.0",
    "graphql-tag": "^2.11.0",
    "moment": "^2.29.1",
    "node-sass": "^5.0.0",
    "react": "^17.0.2",
    "react-apollo": "^3.1.5",
    "react-dom": "^17.0.2",
    "react-hook-form": "^7.0.5",
    "react-icons": "^4.2.0",
    "react-player": "^2.9.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "typescript": "^4.2.4",
    "video.js": "^7.11.8",
    "web-vitals": "^1.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.1.7"
  }
}
