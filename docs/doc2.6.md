---
id: doc1.6
title: Tutorial: Contextual information
sidebar_label: Part 6 (Contextual information)
---

Up to now the result was always given by the URI and "rdfs:label". But in an RDF dataset there are potentially many contextual information that can be shown like
descriptions, images, maps and videos. To allow QAnswer to display this contextual information your ontology vocabulary has to be aligned by the one used by
QAnswer. This is necessary since there are different proposed vocabulary to express this type of information in the Semantic Web Community and no one became
a standard. QAnswer is using some common properties. So let's start.

The main properties that can be aligned are listed in [Requirments 3](/docs/req1.3)
In the case of the cocktail Knowledge Base the following properties can be aligned:

1) <http://www.w3.org/2004/02/skos/core#definition> to  <http://schema.org/description>
2) <http://vocabulary.semantic-web.at/cocktail-ontology/image> to <http://www.wikidata.org/prop/direct/P18>
3) <http://www.w3.org/2004/02/skos/core#exactMatch> to <http://qanswer.eu/dbpedia>

There are two options to align the properties:

## Option 1

The first option is to align the vocabulary using the mapping API. To get the existing mapping use the following API:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X GET \
  'https://qanswer-core1.univ-st-etienne.fr/api/dataset/mappings?dataset=cocktails' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUx....' \
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/dataset/mappings?dataset=cocktails")
  .get()
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzUxMi......")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/dataset/mappings?dataset=cocktails",
  "method": "GET",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzUx.....",
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
    "dataset": "cocktails",
    "label": [
        "http://www.w3.org/2000/01/rdf-schema#label",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
        "http://purl.org/dc/terms/title",
        "http://xmlns.com/foaf/0.1/givenName",
        "http://purl.org/dc/elements/1.1/title"
    ],
    "description": [
        "http://www.w3.org/2000/01/rdf-schema#description"
    ],
    "image": [
        "http://www.wikidata.org/prop/direct/P18"
    ],
    "coordinate": [
        "http://www.wikidata.org/prop/direct/P625"
    ],
    "osmRelation": [
        "http://www.wikidata.org/prop/direct/P402"
    ],
    "youtube": [
        "http://www.wikidata.org/prop/direct/P165"
    ],
    "github": [
        "http://www.wikidata.org/prop/direct/P2037"
    ],
    "twitter": [
        "http://www.wikidata.org/prop/direct/P2002"
    ],
    "facebook": [
        "http://www.wikidata.org/prop/direct/P2013"
    ],
    "instagram": [
        "http://www.wikidata.org/prop/direct/P2003"
    ],
    "homepage": [
        "http://www.wikidata.org/prop/direct/P856"
    ],
    "orcid": [
        "http://www.wikidata.org/prop/direct/P496"
    ],
    "doi": [
        "http://www.wikidata.org/prop/direct/P356"
    ],
    "geometry": [
        "http://www.opengis.net/ont/geosparql#hasGeometry"
    ]
}
```

To update the the mappings with the above changes you can POST on the same API:


<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->
```
curl -X POST \
  'https://qanswer-core1.univ-st-etienne.fr/api/dataset/mappings?dataset=cocktails' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUx.....' \
  -d '{
    "dataset": "cocktails",
    "label": [
        "http://www.w3.org/2000/01/rdf-schema#label",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
        "http://purl.org/dc/terms/title",
        "http://xmlns.com/foaf/0.1/givenName",
        "http://purl.org/dc/elements/1.1/title"
    ],
    "description": [
        "http://www.w3.org/2000/01/rdf-schema#description",
        "http://www.w3.org/2004/02/skos/core#definition"
    ],
    "image": [
        "http://www.wikidata.org/prop/direct/P18",
        "http://vocabulary.semantic-web.at/cocktail-ontology/image"
    ],
    "coordinate": [
        "http://www.wikidata.org/prop/direct/P625"
    ],
    "osmRelation": [
        "http://www.wikidata.org/prop/direct/P402"
    ],
    "youtube": [
        "http://www.wikidata.org/prop/direct/P165"
    ],
    "github": [
        "http://www.wikidata.org/prop/direct/P2037"
    ],
    "twitter": [
        "http://www.wikidata.org/prop/direct/P2002"
    ],
    "facebook": [
        "http://www.wikidata.org/prop/direct/P2013"
    ],
    "instagram": [
        "http://www.wikidata.org/prop/direct/P2003"
    ],
    "homepage": [
        "http://www.wikidata.org/prop/direct/P856"
    ],
    "orcid": [
        "http://www.wikidata.org/prop/direct/P496"
    ],
    "doi": [
        "http://www.wikidata.org/prop/direct/P356"
    ],
    "dbpedia": [
    	"http://www.w3.org/2004/02/skos/core#exactMatch"
	],
    "geometry": [
        "http://www.opengis.net/ont/geosparql#hasGeometry"
    ]
}'
```
<!--Java-->
```
OkHttpClient client = new OkHttpClient();

MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\n    \"dataset\": \"cocktails\",\n    \"label\": [\n        \"http://www.w3.org/2000/01/rdf-schema#label\",\n        \"http://www.w3.org/2004/02/skos/core#prefLabel\",\n        \"http://purl.org/dc/terms/title\",\n        \"http://xmlns.com/foaf/0.1/givenName\",\n        \"http://purl.org/dc/elements/1.1/title\"\n    ],\n    \"description\": [\n        \"http://www.w3.org/2000/01/rdf-schema#description\",\n        \"http://www.w3.org/2004/02/skos/core#definition\"\n    ],\n    \"image\": [\n        \"http://www.wikidata.org/prop/direct/P18\",\n        \"http://vocabulary.semantic-web.at/cocktail-ontology/image\"\n    ],\n    \"coordinate\": [\n        \"http://www.wikidata.org/prop/direct/P625\"\n    ],\n    \"osmRelation\": [\n        \"http://www.wikidata.org/prop/direct/P402\"\n    ],\n    \"youtube\": [\n        \"http://www.wikidata.org/prop/direct/P165\"\n    ],\n    \"github\": [\n        \"http://www.wikidata.org/prop/direct/P2037\"\n    ],\n    \"twitter\": [\n        \"http://www.wikidata.org/prop/direct/P2002\"\n    ],\n    \"facebook\": [\n        \"http://www.wikidata.org/prop/direct/P2013\"\n    ],\n    \"instagram\": [\n        \"http://www.wikidata.org/prop/direct/P2003\"\n    ],\n    \"homepage\": [\n        \"http://www.wikidata.org/prop/direct/P856\"\n    ],\n    \"orcid\": [\n        \"http://www.wikidata.org/prop/direct/P496\"\n    ],\n    \"doi\": [\n        \"http://www.wikidata.org/prop/direct/P356\"\n    ],\n    \"dbpedia\": [\n    \t\"http://www.w3.org/2004/02/skos/core#exactMatch\"\n\t],\n    \"geometry\": [\n        \"http://www.opengis.net/ont/geosparql#hasGeometry\"\n    ]\n}");
Request request = new Request.Builder()
  .url("https://qanswer-core1.univ-st-etienne.fr/api/dataset/mappings?dataset=cocktails")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Authorization", "Bearer eyJhbGciOiJIU................")
  .build();

Response response = client.newCall(request).execute();
```
<!--JavaScript-->
```js
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://qanswer-core1.univ-st-etienne.fr/api/dataset/mappings?dataset=cocktails",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIU.....",
  },
  "processData": false,
  "data": "{\n    \"dataset\": \"cocktails\",\n    \"label\": [\n        \"http://www.w3.org/2000/01/rdf-schema#label\",\n        \"http://www.w3.org/2004/02/skos/core#prefLabel\",\n        \"http://purl.org/dc/terms/title\",\n        \"http://xmlns.com/foaf/0.1/givenName\",\n        \"http://purl.org/dc/elements/1.1/title\"\n    ],\n    \"description\": [\n        \"http://www.w3.org/2000/01/rdf-schema#description\",\n        \"http://www.w3.org/2004/02/skos/core#definition\"\n    ],\n    \"image\": [\n        \"http://www.wikidata.org/prop/direct/P18\",\n        \"http://vocabulary.semantic-web.at/cocktail-ontology/image\"\n    ],\n    \"coordinate\": [\n        \"http://www.wikidata.org/prop/direct/P625\"\n    ],\n    \"osmRelation\": [\n        \"http://www.wikidata.org/prop/direct/P402\"\n    ],\n    \"youtube\": [\n        \"http://www.wikidata.org/prop/direct/P165\"\n    ],\n    \"github\": [\n        \"http://www.wikidata.org/prop/direct/P2037\"\n    ],\n    \"twitter\": [\n        \"http://www.wikidata.org/prop/direct/P2002\"\n    ],\n    \"facebook\": [\n        \"http://www.wikidata.org/prop/direct/P2013\"\n    ],\n    \"instagram\": [\n        \"http://www.wikidata.org/prop/direct/P2003\"\n    ],\n    \"homepage\": [\n        \"http://www.wikidata.org/prop/direct/P856\"\n    ],\n    \"orcid\": [\n        \"http://www.wikidata.org/prop/direct/P496\"\n    ],\n    \"doi\": [\n        \"http://www.wikidata.org/prop/direct/P356\"\n    ],\n    \"dbpedia\": [\n    \t\"http://www.w3.org/2004/02/skos/core#exactMatch\"\n\t],\n    \"geometry\": [\n        \"http://www.opengis.net/ont/geosparql#hasGeometry\"\n    ]\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
<!--END_DOCUSAURUS_CODE_TABS-->



## Option 2

The second option is to substitute the uris in the original Knowledge Base by the ones supported by QAnswer.
The cocktail Knowledge Base where the above URIs are substituted can be downloaded [here](/cocktails_align.nt). The updated file can be uploaded and indexd as
explained in [Part 3](/docs/doc1.3).


## Result

With these substitutions we get the following result:

```
{
    "question": "give me all cocktails",
    "queries": [
        {
            "query": "SELECT DISTINCT ?s1 where { ?s1  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  <http://vocabulary.semantic-web.at/cocktail-ontology/Cocktail> . } limit 1000",
            "confidence": 0.999998823957124,
            "kb": "cocktails"
        }
        .
        .
        .



    ],
    "qaContexts": [
        {
            "kb": "cocktails",
            "literal": null,
            "uri": "http://vocabulary.semantic-web.at/cocktails/099726a2-ec4b-4b0f-b4e4-e6f25cdfd685",
            "description": "A stinger is a Duo cocktail made by adding crème de menthe to a spirit. The classic recipe is based on brandy and white crème de menthe, shaken and served in a cocktail glass. The origins of this drink are unclear, but it is mentioned in bartender's recipe books as far back as Tom Bullock's Ideal Bartender, published in 1917. Mixing brandy with green crème de menthe, in place of white, yields a Green Hornet.@en",
            "links": {
                "cocktails": "http://vocabulary.semantic-web.at/cocktails/099726a2-ec4b-4b0f-b4e4-e6f25cdfd685"
            },
            "label": "Stinger",
            "time": null,
            "images": [
                "http://www.iba-world.com/images/cocktail_drinks/stinger.jpg"
            ],
            "audio": [],
            "geo": [],
            "video": [],
            "geoJson": null,
            "pageRank": 0.2528768
        },
        {
            "kb": "cocktails",
            "literal": null,
            "uri": "http://vocabulary.semantic-web.at/cocktails/0bbdca98-077b-48d1-99d6-47eca59c442c",
            "description": "The Aviation is a classic cocktail made with gin, maraschino liqueur, crème de violette, and lemon juice. Some recipes omit the crème de violette. It is served straight up, in a cocktail glass.@en",
            "links": {
                "cocktails": "http://vocabulary.semantic-web.at/cocktails/0bbdca98-077b-48d1-99d6-47eca59c442c"
            },
            "label": "Aviation",
            "time": null,
            "images": [
                "https://upload.wikimedia.org/wikipedia/commons/4/4f/Aviation_Cocktail.jpg"
            ],
            "audio": [],
            "geo": [],
            "video": [],
            "geoJson": null,
            "pageRank": 0.27815425
        },
        {
            "kb": "cocktails",
            "literal": null,
            "uri": "http://vocabulary.semantic-web.at/cocktails/0f8cc862-9056-49be-b636-cd22f8d7282d",
            "description": "The Harvey Wallbanger is a cocktail made with vodka, Galliano, and orange juice.@en",
            "links": {
                "cocktails": "http://vocabulary.semantic-web.at/cocktails/0f8cc862-9056-49be-b636-cd22f8d7282d"
            },
            "label": "Harvey Wallbanger",
            "time": null,
            "images": [
                "http://upload.wikimedia.org/wikipedia/commons/4/44/Harvey_Wallbanger.jpg"
            ],
            "audio": [],
            "geo": [],
            "video": [],
            "geoJson": null,
            "pageRank": 0.27841586
        },
        {
            "kb": "cocktails",
            "literal": null,
            "uri": "http://vocabulary.semantic-web.at/cocktails/117bd4d2-6da3-4d69-8c79-bc1d873b5010",
            "description": "A grasshopper is a sweet, mint-flavored, after-dinner drink. The name of the drink is derived from its green color, which is provided by the crème de menthe. The drink reputedly originated at Tujague's, a landmark bar in the French Quarter of New Orleans, Louisiana, and gained popularity during the 1950s and 1960s throughout the American South.@en",
            "links": {
                "cocktails": "http://vocabulary.semantic-web.at/cocktails/117bd4d2-6da3-4d69-8c79-bc1d873b5010"
            },
            "label": "Grasshopper",
            "time": null,
            "images": [
                "http://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grasshopper_cocktail.jpg/440px-Grasshopper_cocktail.jpg"
            ],
            "audio": [],
            "geo": [],
            "video": [],
            "geoJson": null,
            "pageRank": 0.24938273
        },
        .
        .
        .


    ]
}
```

Note that now the contextual information contains descriptions, images and links to dbpedia.



