---
id: doc1.1
title: From RDF datasets to Question Answering
sidebar_label: Part 1 (RDF to QA)
---

The key requirement for QAnswer is the RDF model that you provide for indexing. RDF is a flexible data model and can be used in many different ways. QAnswer
tries to make the weakest assumptions possible on the RDF dataset it can query.

In this tutorial we are going to make a Question Answering (QA) system on top of a cocktail KB that can be found [here](/cocktails.nt). Here are some lines
extracted from the cocktail KB and describing a cocktail called "Margarita" or "Upside Down Margarita". Moreover the snippet contains the information that the
cocktails contains "Cointreau", "Tequila" and "Lime juice":

```
PREFIX vsw: <http://vocabulary.semantic-web.at/cocktails>
PREFIX vswo: <http://vocabulary.semantic-web.at/cocktail-ontology>
PREFIX schema: <http://schema.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

vsw:2d85fb1b-96cb-4c48-8df5-707032f34e71  rdf:type vswo:Cocktail ;
                                          rdfs:label   "Margarita"@en ;
                                          rdfs:label   "Upside Down Margarita"@en ;
                                          schema:description "The margarita is a Mexican cocktail consisting of tequila mixed with Cointreau or similar orange-flavoured liqueur and lime or lemon juice, often served with salt on the glass rim. It is the most common tequila-based cocktail in the United States. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up)."@en ;
                                          vswo:consists-of vsw:1439e6c3-a155-4c80-8a5d-723453b4d17e ;
                                          vswo:consists-of vsw:7dede323-e986-4417-b723-c9c7a7fe82ba ;
                                          vswo:consists-of vsw:88f5de3d-3de4-4a2f-9523-50bc7bb06600 .
vswo:Cocktail                             rdfs:label "Cocktail"@en .
vsw:1439e6c3-a155-4c80-8a5d-723453b4d17e  rdfs:label "Cointreau"@en .
vsw:7dede323-e986-4417-b723-c9c7a7fe82ba  rdfs:label "Tequila"@en .
vsw:88f5de3d-3de4-4a2f-9523-50bc7bb06600  rdfs:label "Lime juice"@en .
vswo:consists-of                          rdfs:label "consists of"@en ;
                                          rdfs:label "contains"@en ;
                                          rdfs:label "made up"@en ;
                                          rdfs:label "ingredients"@en .
```

This RDF snippet would allow to answer the following questions:

```
- What are the ingredients of Margarita? -> Cointreau, Tequila, Lime juice
- What is Margarita made of? -> Cointreau, Tequilla, Lime juice
- The ingredients of Margarita are what? -> Cointreau, Tequila, Lime juice
- ingredients margarita? -> Cointreau, Tequila, Lime juice
- What is Margarita? -> The margarita is a Mexican cocktail consisting of tequila mixed with Cointreau or similar orange-flavoured liqueur and lime or lemon juice, often served with salt on the glass rim. It is the most common tequila-based cocktail in the United States. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up)."@en .
- Margarita cocktail? -> The margarita is a Mexican cocktail consisting of tequila mixed with Cointreau or similar orange-flavoured liqueur and lime or lemon juice, often served with salt on the glass rim. It is the most common tequila-based cocktail in the United States. The drink is served shaken with ice (on the rocks), blended with ice (frozen margarita), or without ice (straight up)."@en .
- Give me cocktails containing tequila. -> Margarita
- Which cocktails have as ingredient Cointreau? -> Margarita
- cocktails containing tequilla and cointreau -> Margarita
```

and variations of these questions.

Check this [link](?????????) to have more information about the structure of the RDF dataset.

What we want to achieve at the end of this tutorial looks like this:

![Result0](/img/screenshots/result1.png)

and

![Result1](/img/screenshots/result2.png)

