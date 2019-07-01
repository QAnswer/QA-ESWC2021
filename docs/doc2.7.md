---
id: doc2.7
title: Tutorial: Additional services
sidebar_label: Part 7 (Additional services)
---

When uploading and indexing the data QAnswer also generated some additonal services. 
We describe them here briefly  

## SparqlToUser

One service that is set up is SparqlToUser, a service that converts a SPARQL query to
a representation that is understandable by an end-user.

Concretely the service converts the SPARQL query:

```
SELECT DISTINCT ?s1 where { 
    ?s1 ?p1 <http://vocabulary.semantic-web.at/cocktail-ontology/Ingredients> .
    ?s1 ?p2 <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71> . 
}
limit 1000
```
 
to the more user friendly representation:

```
type / Ingredients
 / is part of, is used by / Margarita
```

This service can be called using the following code snippets:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X GET \
  'https://qanswer-core1.univ-st-etienne.fr/api/sparqltouser/cocktails?sparql=SELECT%20DISTINCT%20?s1%20where%20{%20%0A%20%20%20%20?s1%20?p1%20%3Chttp://vocabulary.semantic-web.at/cocktail-ontology/Ingredients%3E%20.%0A%20%20%20%20?s1%20?p2%20%3Chttp://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71%3E%20.%20%0A}%0Alimit%201000&lang=en' \
  -H 'Accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMi....' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/summaserver/cocktails?entity=http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71&topk=5&language=en")
  .get()
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUz...")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/summaserver/cocktails?entity=http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71&topk=5&language=en",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUz....",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

the result is:

```
{
    "sparql": "SELECT DISTINCT ?s1 where { \n    ?s1 ?p1 <http://vocabulary.semantic-web.at/cocktail-ontology/Ingredients> .\n    ?s1 ?p2 <http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71> . \n}\nlimit 1000",
    "lang": "en",
    "kb": "cocktails",
    "interpretation": "type / Ingredients\n / is part of, is used by / Margarita"
}
```

## Summa Server

The second service that is put in place is the Summa Server. The Summa Server summarizes 
entities, i.e. extract top-k RDF facts associated to an entity. For example the summary of:
 http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71
can be accessed as follows:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X GET \
  'https://qanswer-core1.univ-st-etienne.fr/api/summaserver/cocktails?entity=http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71&topk=5&language=en' \
  -H 'Authorization: Bearer eyJhbGciOiJI....' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/summaserver/cocktails?entity=http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71&topk=5&language=en")
  .get()
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUz...")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/summaserver/cocktails?entity=http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71&topk=5&language=en",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUz....",
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->

the result is:

```
{
    "subject": {
        "uri": "http://vocabulary.semantic-web.at/cocktails/2d85fb1b-96cb-4c48-8df5-707032f34e71",
        "label": "Margarita"
    },
    "facts": [
        {
            "predicate": {
                "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                "label": "type"
            },
            "object": {
                "uri": "http://www.w3.org/2004/02/skos/core#Concept",
                "label": "Concept"
            }
        },
        {
            "predicate": {
                "uri": "http://purl.org/dc/terms/contributor",
                "label": "Contributor"
            },
            "object": {
                "uri": "http://resource.semantic-web.at/user/gablers",
                "label": "http://resource.semantic-web.at/user/gablers"
            }
        },
        {
            "predicate": {
                "uri": "http://purl.org/dc/terms/creator",
                "label": "Creator"
            },
            "object": {
                "uri": "http://localhost/user/blumauera",
                "label": "http://localhost/user/blumauera"
            }
        },
        {
            "predicate": {
                "uri": "http://schema.semantic-web.at/ppt/inScheme",
                "label": "http://schema.semantic-web.at/ppt/inScheme"
            },
            "object": {
                "uri": "http://vocabulary.semantic-web.at/cocktails/8d052dfc-44bf-4985-8ce3-4564570a161b",
                "label": "All about Cocktails"
            }
        },
        {
            "predicate": {
                "uri": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                "label": "type"
            },
            "object": {
                "uri": "http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail",
                "label": "Cocktail"
            }
        }
    ]
}
```


