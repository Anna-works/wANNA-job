// import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// you can ignore this part (or write your functions there)
export * from "./api/index";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


/**
 * If you have issues with cors:
 * 
 * You can do the following using the cors package: (which should solve it)
 * 
export const someCoolEndpoint = functions.https.onRequest(
  (request, response) =>
    cors(request, response, async () => {
      try {
       ... do you thing
      } catch (error) {
        do your error thing
      }
    })
);
 */