---
id: doc1.7
title: Tutorial: Additional services
sidebar_label: Part 7 (Additional services)
---

When uploading and indexing the data QAnswer also generated some additonal services. 
We describe them here briefly  

## SparqlToUser

One service that is set up is SparqlToUser, a service that converts a SPARQL query to
a representation that is understandable by an end-user.

Concretly the service converts the SPARQL query:

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

This service is used to display what the QA system understood:

<img src="/img/screenshots/SparqlToUser.png" width="80%">

or to facilitate the understanding of the generated interpretations:

<img src="/img/screenshots/SparqlToUser2.png" width="80%">


## Summa Server

The second service that is put in place is the Summa Server. The Summa Server summarizes 
entities, i.e. extract top-k RDF facts associated to an entity. For example the summary of Salt looks as follows:

<img src="/img/screenshots/SummaServer.png" width="80%">

Note that the summary is browsable, i.e. by clicking on the links one can discover more
about the corresponding entity. 
