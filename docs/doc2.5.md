---
id: doc2.5
title: Tutorial: Feedback and Train
sidebar_label: Part 5 (Feedback and train)
---

Each time you ask a question the system generate interpretations and computes a confidence. We have seen the list of different interpretations in the answer object in the
previews call. The system believes the answer is correct if the confidence is bigger than 50% and wrong if it is lower than 50%.

By using the feedback functionality the system can learn to choose the right interpretation
and correctly compute the confidence.

When asking "Give me all cocktails?" we get the following response:

```
{
    "question": "give me all cocktails",
    "queries": [
        {
            "query": "SELECT DISTINCT ?s0 where { VALUES ?s0 { <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> }  } LIMIT 1000",
            "confidence": 0.9999999999999916,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?s1 where { ?s1  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> . } limit 1000",
            "confidence": 3.1629109018663826e-11,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?o1 where { <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail>  ?p1  ?o1 . } limit 1000",
            "confidence": 0.07094440771550606,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?s1 where { ?s1  ?p1  <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> . } limit 1000",
            "confidence": 0.18335346032869446,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?o1 where { <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail>  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  ?o1 . } limit 1000",
            "confidence": 1.0757427783726548e-11,
            "kb": "cocktails"
        }
    ],
    "qaContexts": [
        {
            "kb": "cocktails",
            "literal": null,
            "uri": "http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail",
            "description": null,
            "links": {
                "cocktails": "http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail"
            },
            "label": "Cocktail",
            "time": null,
            "images": [],
            "audio": [],
            "geo": [],
            "video": [],
            "geoJson": null,
            "pageRank": 2.1089668
        }
    ]
}
```


the answer is "Cocktail", which would correspond to the question "What is a cocktail?". The right answer is given by the second ranked query which gives back things
of type cocktail. We can tell the system that this is the right query by the following request:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  https://qanswer-core1.univ-st-etienne.fr/api/feedback/create \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ.................' \
  -H 'Content-Type: application/json' \
  -d '{
  "correct": true,
  "knowledgebase": ["cocktails"],
  "language": ["en"],
  "question": "Give me all cocktails.",
  "questionId": -1,
  "sparql": "SELECT DISTINCT ?s1 where { ?s1  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> . } limit 1000",
  "sparqlKB": "cocktails",
  "validated": true
}'
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n  \"correct\": true,\n  \"knowledgebase\": [\"cocktails\"],\n  \"language\": [\"en\"],\n  \"question\": \"Give me all cocktails.\",\n  \"questionId\": -1,\n  \"sparql\": \"SELECT DISTINCT ?s1 where { ?s1  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> . } limit 1000\",\n  \"sparqlKB\": \"cocktails\",\n  \"validated\": true\n}");
Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/feedback/create")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzU......")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/feedback/create",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzUx.................",
  },
  "processData": false,
  "data": "{\n  \"correct\": true,\n  \"knowledgebase\": [\"cocktails\"],\n  \"language\": [\"en\"],\n  \"question\": \"Give me all cocktails.\",\n  \"questionId\": -1,\n  \"sparql\": \"SELECT DISTINCT ?s1 where { ?s1  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> . } limit 1000\",\n  \"sparqlKB\": \"cocktails\",\n  \"validated\": true\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

Note that the body contains a JSON object that specifies the knowledgebase, the language, the question and the correct query. The questionId is "-1" if the question is not in the training dataset yet. To overwrite a previews feedback you can specify the questionId.

After asking a set of questions, and by giving feedback you will have created a training set. A training set for the cocktail dataset can be downloaded
[here](/questions_cocktail.json). It can be uploaded as follows:


<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  https://qanswer-core1.univ-st-etienne.fr/api/feedback/upload \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDUiLCJ.......' \
  -F json=@/path/to/file/questions_cocktail.json
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW");
RequestBody body = RequestBody.create(mediaType, "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"json\"; filename=\"questions_cocktail.json\"\r\nContent-Type: application/json\r\n\r\n\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--");
Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/feedback/upload")
  .post(body)
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzUxM.......")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var form = new FormData();
form.append("json", "/Users/Dennis/Downloads/questions_cocktail.json");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/feedback/upload",
  "method": "POST",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUz....................",
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


By calling the following API you have an overview of how the system performs on the questions you gave feedback:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X GET \
  https://qanswer-core1.univ-st-etienne.fr/api/feedback/evaluate \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMi.....................' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/feedback/evaluate")
  .get()
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMi.....")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/feedback/evaluate",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUz.....",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

The response looks as follows:

```
{
    "confidence": {
        "confusionMatrix": {
            "TT": 24,
            "FF": 36,
            "TF": 57,
            "FT": 7
        }
    },
    "questions": [
        {
            "allAnswer": [
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -4.09135627746582
                },
                {
                    "rank": "1162293",
                    "label": 1,
                    "value": -5.338467121124268
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -6.426987171173096
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -6.502406120300293
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -6.691828727722168
                }
            ],
            "question": "Give me all cocktails.",
            "knowledgebase": "cocktails",
            "validated": true,
            "confidence": 0.9999999999999916,
            "language": "en",
            "id": 1162293
        },
        .
        .
        .


    ],
    "ranking": {
        "pa1": 0
    },
    "numOfQuestions": 28
}
```

After calling the train API:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X GET \
  https://qanswer-core1.univ-st-etienne.fr/api/feedback/train \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMi.....' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/feedback/train")
  .get()
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUz.....")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/feedback/train",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMi.....",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->



the system will create a model that adapts to your dataset:

```
{
    "confidence": {
        "confusionMatrix": {
            "TT": 81,
            "FF": 43,
            "TF": 0,
            "FT": 0
        }
    },
    "questions": [
        {
            "allAnswer": [
                {
                    "rank": "1162293",
                    "label": 1,
                    "value": 14.571797370910645
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -10.909229278564453
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -12.239108085632324
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -12.54185962677002
                },
                {
                    "rank": "1162293",
                    "label": 0,
                    "value": -18.441089630126953
                }
            ],
            "question": "Give me all cocktails.",
            "knowledgebase": "cocktails",
            "validated": true,
            "confidence": 0.999998823957124,
            "language": "en",
            "id": 1162293
        },
        .
        .
        .


    ],
    "ranking": {
        "pa1": 0
    },
    "numOfQuestions": 28
}
```

Note that the model will generalize also over questions you didn't ask.

Now you learned how to give feedback to the system and how this feedback can be used to adapt QAnswer to your dataset.
