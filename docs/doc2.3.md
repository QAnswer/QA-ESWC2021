---
id: doc2.3
title: Tutorial: Upload and index
sidebar_label: Part 3 (Upload and index)
---

Now you are ready to upload your first dataset. The cocktail dataset can be downloaded here: [cocktails.nt](/cocktails.nt). To upload a new dataset you can use one of the following code snippets (remember to use the Bearer Token that you get at Signin [Part 2](/docs/doc2.2)):

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  'https://qanswer-core1.univ-st-etienne.fr/api/dataset/upload?dataset=cocktails' \
  -H 'Authorization: Bearer eyJhbGciOiJIUz .....' \
  -F file=@/path/to/file/cocktails.nt
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
RequestBody body = RequestBody.create(mediaType, "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"file\"; filename=\"cocktails.nt\"\r\nContent-Type: false\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/dataset/upload?dataset=cocktails")
  .post(body)
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ....")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var form = new FormData();
form.append("file", "/path/to/file/cocktails.nt");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/dataset/upload?dataset=cocktails",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMi......",
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->


<br/>
<br/>
---
IMPORTANT: The dataset must be in N-Triple format and must be syntactically correct. You can both check and clean a file using [serdi](https://drobilla.net/software/serd)

```
serdi -i ntriples -o ntriples dump.nt > dump_clean.nt
```
---
<br/>
<br/>



After uploading the dataset it needs to be indexed. This can be done with the following code snippets:


<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  'https://qanswer-core1.univ-st-etienne.fr/api/dataset/index?dataset=cocktails' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMi....' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/dataset/index?dataset=cocktails")
  .post(null)
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ....")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/dataset/index?dataset=cocktails",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzUx.....",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});```
<!--END_DOCUSAURUS_CODE_TABS-->

The dataset is now ready to be queried!
