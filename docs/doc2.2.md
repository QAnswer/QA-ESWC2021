---
id: doc2.2
title: Tutorial: Signup and Login
sidebar_label: Part 2 (Signup and Login)
---


We have seen in the previus section which is the relation between your RDF data and the questions you can answer with it.
To index your RDF dataset you need to signup to the QAnswer platform. This can be done using the following code snippets:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  'http://qanswer-core1.univ-st-etienne.fr/api/user/signup' \
  -H 'Content-Type: application/json' \
  -d '{"name": "NAME", "email":"EMAIL", "username":"USERNAME", "password":"PASSWORD"}'
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"name\": \"NAME\", \"email\":\"EMAIL\", \"username\":\"USERNAME\", \"password\":\"PASSWORD\"}");
Request request = new Request.Builder()
  .url("http://qanswer-core1.univ-st-etienne.fr/api/user/signup")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://qanswer-core1.univ-st-etienne.fr/api/user/signup",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
  },
  "processData": false,
  "data": "{\"name\": \"NAME\", \"email\":\"EMAIL\", \"username\":\"USERNAME\", \"password\":\"PASSWORD\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

After you will directly be able to login. This can be done using the following code snippets:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  'http://qanswer-core1.univ-st-etienne.fr/api/user/signin' \
  -H 'Content-Type: application/json' \
  -d '{"usernameOrEmail": "USERNAME", "password":"PASSWORD"}'
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\"usernameOrEmail\": \"USERNAME\", \"password\":\"PASSWORD\"}");
Request request = new Request.Builder()
  .url("http://qanswer-core1.univ-st-etienne.fr/api/user/signin")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://qanswer-core1.univ-st-etienne.fr/api/user/signin",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
  },
  "processData": false,
  "data": "{\"usernameOrEmail\": \"USERNAME\", \"password\":\"PASSWORD\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

After logging in you will get a Bearer token that you have to use for all subsequent calls to identify with respect to the service.
