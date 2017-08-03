const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  var term = request.query.q;
  // See https://howtofirebase.com/firebase-cloud-functions-753935e80323
  // why we're requiring it inside the function
  var YT_URL = "https://www.googleapis.com/youtube/v3/search";
  const axios = require("axios");
  axios
    .get(YT_URL, {
      params: {
        part: "snippet",
        type: "video",
        key: require("./secret"),
        q: term
      }
    })
    .then(YouTubeData => {
      response.set("Access-Control-Allow-Origin", "*");
      response.set("Access-Control-Allow-Methods", "GET, POST");
      response.status(200).send(YouTubeData.data.items);
    })
    .catch(err => console.error(err));
});
