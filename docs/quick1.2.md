---
id: quick1.2
title: Quick Introduction
sidebar_label: Create our first node
---

We want to encode the information about ourselfs into a small Knwoledge Graph ...

Let's do that ...

## Using rdfs:label

We need a node in the graph representing ourselfs, I call it `qa:node1`. 
And since my name is QAnswer I want to call it like that. `rdfs:label` is the standard way to attach a name of a node using Semantic Web Standards.
Let's do it:

<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix qa: <http://qanswer.eu/> .

qa:node1 rdfs:label "QAnswer" .

```
<!--UI-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.2_(start).png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->

If you click on query we can already ask "QAnswer?" or "What is QAnswer?" and get:

<img src="/QA-ESWC2020/img/screenshots/quick/question1.png" width="80%">

## Using skos:altLabel

You may be called also differently. So let's add this too:

<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

qa:node1 rdfs:label "QAnswer" .
qa:node1 skos:altLabel "QAnswer KG" .
qa:node1 skos:altLabel "QA" .
```
<!--UI-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.2.png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->

We used another standard property which is `skos:altLabel`. And yes, people also call me "QAnswer KG" or "QA" in short.
Now you can also ask "QAnswer KG?" or "What is QA?".

Finally lets add a little hack 🤖. We want to ask also thinks like "Who are you?", "What do you like?" ... so let add to the 
node also the name "you" 😉

```
qa:node1 rdfs:label "QAnswer" .
qa:node1 skos:altLabel "QAnswer KG" .
qa:node1 skos:altLabel "QA" .
qa:node1 skos:altLabel "you" .
```

All together this looks as follows:

<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix qa: <http://qanswer.eu/> .

qa:node1 rdfs:label "QAnswer" .
qa:node1 skos:altLabel "QAnswer KG" .
qa:node1 skos:altLabel "QA" .
qa:node1 skos:altLabel "you" .
```
<!--UI-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.2_(end).png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->









