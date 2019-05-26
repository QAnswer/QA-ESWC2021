---
id: doc2.4
title: Tutorial: Query
sidebar_label: Part 4 (Query)
---

You can already ask the first questions on top of your dataset. For the "cocktails" dataset you could ask for example: "What is a Margerita?" or "What are the ingredients of Margerita?":

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X GET \
  'http://qanswer-core1.univ-st-etienne.fr/api/qa/full' \
   --data-urlencode 'question= what is a margerita' \
   --data-urlencode 'lang=en' \
   --data-urlencode 'kb=cocktails' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ.....' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("http://qanswer-core1.univ-st-etienne.fr/api/qa/full?question=what%20is%20a%20margerita&lang=en&kb=cocktails")
  .get()
  .addHeader("Authorization", "Bearer eyJhbGciOiJ......")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://qanswer-core1.univ-st-etienne.fr/api/qa/full?question=what%20is%20a%20margerita&lang=en&kb=cocktails",
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

The results looks as following:

```
{
    "question": "what is a margerita",
    "queries": [
        {
            "query": "SELECT DISTINCT ?s0 where { VALUES ?s0 { <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71> }  } LIMIT 1000",
            "confidence": 0.9999999999996994,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?s0 where { VALUES ?s0 { <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71> }  } LIMIT 1000",
            "confidence": 1,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?o1 where { <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71>  ?p1  ?o1 . } limit 1000",
            "confidence": 0.011127059360766982,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?s1 where { ?s1  ?p1  <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71> . } limit 1000",
            "confidence": 0.01182653776243101,
            "kb": "cocktails"
        },
        {
            "query": "SELECT DISTINCT ?o1 where { <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71>  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  ?o1 . } limit 1000",
            "confidence": 2.035927837191609e-11,
            "kb": "cocktails"
        }
    ],
    "qaContexts": [
        {
            "kb": "cocktails",
            "literal": null,
            "uri": "http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71",
            "description": null,
            "links": {
                "cocktails": "http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71"
            },
            "label": "Margarita",
            "time": null,
            "images": [],
            "audio": [],
            "geo": [],
            "video": [],
            "geoJson": null,
            "pageRank": 0.3047554
        }
    ]
}
```


It contains the generated queries with the corresponding confidence scores and the answer. Note that for now there is no contextual information attached to the answers, like labels, descriptions, external links, maps, images and videos. How this can be achieved
will be shown in [Part 6](/docs/doc2.6).

The dataset contains some popular cocktails like: Margerita, Sex on the Beach, Long Island Iced Tea and Grasshopper.

The results that you achieve may not be satisfying. To train the machine learning model to fit your dataset check the next section.
