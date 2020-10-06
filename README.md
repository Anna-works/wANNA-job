# wANNA join? (the code challenge)

## Table of Contents

1. [What are we gonna build?](#what-are-we-gonna-build)
   1. [Backend](#backend)
   2. [Mobile](#mobile)
2. [Setup](#setup)
3. [Third Example](#third-example)
4. [Fourth Example](#fourth-examplehttpwwwfourthexamplecom)

## What are we gonna build

So we are building a full-stack app here!

Backend with NodeJS, cloud functions and mobile React-native with firebase firestore and all in TypeScript! 🥳

So the overview of the app is:

1. Application submitted (backend)
2. Parsing the application to a nice/simple format (backend)
3. Then the user can view the list of restaurants (mobile)
4. Select a restaurant (mobile)
5. View a list of submitted applications (mobile)
6. View the profile of that application (mobile)

### Backend

We are building a parser to simplify the response from incoming applications and storing it in a way (in firestore) so it can be retrieved for that specific restaurant it was submitted to.

We have provided an endpoint which will return a payload of how an application submission would look like.

The application payload will belong to one of 3 possible restaurants.

```javascript
const resaurants = [
  { id: "2b7d5ea8-0f2b-454b-b2e2-89a7a87975a2", label: "Noma" },
  { id: "8df2d9c6-4f04-47fa-a95f-d878d06560b4", label: "Slurp" },
  { id: "0eb56568-d223-47e6-91c7-62fbbeb754ec", label: "McDonalds" },
];
```

You can reach the endpoint here:

`https://us-central1-code-challenge-anna.cloudfunctions.net/giveMeThatApplicationPlease`

**Usage:**

```json
curl -d '{"token": "YOUR-TOKEN"}' -H 'Content-Type: application/json' https://us-central1-code-challenge-anna.cloudfunctions.net/giveMeThatApplicationPlease
```

Notice that you have to provide a token, which we will forward you, otherwise you will receive a `403` response from the endpoint

The backend code is all located in `/functions`

### Mobile

For the mobile part of the app it is setup using the following:

- [React-native boilerplate by Microsoft](https://github.com/microsoft/TypeScript-React-Native-Starter)
- [React-native-firebase](https://rnfirebase.io/)

It is setup with the bare minimum leaving the rest that you would like to add up to you.

Though we have provided small examples of using firestore and hooks, it is up to you if you want to use it or not.

The project structure is completely up to you.

## Setup

There are a couple of things to setup in order to get going with the project.

### Firebase

1. You have to setup a firebase project [here](https://console.firebase.google.com/)
2. You will need to head over to "Cloud firestore" in the menu and click the "Get started" follow the steps and this will provision firestore for you. Then you can get going creating collections etc as needed.
3. You then need to head over to functions and hit "Get started" there too.

After doing so, you need to go to the root of project and run do the following:

(you might have to install `firebase-tools` first for this to work.)

1. `firebase init`
2. It might ask you to sign in else Select the project you just created.
3. You can select `Functions` and optionally `Emulators` but do not overwrite any of the existing files. Then you firebase should be setup.

### react-native-firebase

Please follow the steps in both

[Get started react-native-firebase](https://rnfirebase.io/)

Though notice the only thing you should need to do is creating the `android` and `ios` app in firebase according to the guide above.

With that you should add the configuration files like described in the guide for both `