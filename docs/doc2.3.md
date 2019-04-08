---
id: doc2.3
title: Tutorial: Upload and index
sidebar_label: Part 3 (Upload and index)
---

<<<<<<< HEAD
Now you are ready to upload your first dataset. The cocktail dataset can be downloaded [here](/cocktails.nt). To upload a new dataset you can use one of the following code snippets:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl --request POST \
  --url http://qanswer-core1.univ-st-etienne.fr/api/user/signin \
  --header 'Content-Type: application/json' \
  --data '{"usernameOrEmail": "USERNAME", "password":"PASSWORD"}'
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

IMPORTANT: The dataset must be in N-Triple format and must be syntactically correct. You can both check and clean a file using [serdi](https://drobilla.net/software/serd)

```
serdi -i ntriples -o ntriples dump.nt > dump_clean.nt
```


After uploading the dataset it needs to be indexed. This can be done with the following code snippets:



The dataset is now ready to be queried!