---
id: quick1.3
title: Quick Introduction
sidebar_label: Create our first relation
---
Now we made a node about ourself, so let's attach something to it ...

I want for example to add which languages I speak. So I will create some nodes for the languages I speak:

```
qa:node2 rdfs:label "English" .
qa:node3 rdfs:label "French" .
qa:node4 rdfs:label "German" .
qa:node5 rdfs:label "Italian" .
```

and a new property to express which languages I speak:

```
qa:language rdfs:label "speaks language" .
qa:language skos:altLabel "speak" .
qa:language skos:altLabel "language" .

```

and use it:

```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix qa: <http://qanswer.eu/> .

qa:node1 qa:language qa:node2 .
qa:node1 qa:language qa:node3 .
qa:node1 qa:language qa:node4 .
qa:node1 qa:language qa:node5 .

```

So the last triples encode that "QAnswer speaks English, French, German and Italian".

NOTE: If you were really careful you could have thought: This property looks like a node?!?! Yes it is true, the only difference that makes `qa:language` a property is that we put it between two nodes .... 

What can we ask now?

<!--DOCUSAURUS_CODE_TABS-->
<!--Question 1-->
<img src="/QA-ESWC2020/img/screenshots/quick/question3.png" width="80%">
<!--Question 2-->
<img src="/QA-ESWC2020/img/screenshots/quick/question4.png" width="80%">
<!--Question 3-->
<img src="/QA-ESWC2020/img/screenshots/quick/question5.png" width="80%">
<!--Question 4-->
<img src="/QA-ESWC2020/img/screenshots/quick/question6.png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->


Ok, I guess now it should be clear how to add more information about yourself .... try out your creativity!

This is how far we got for now:

```
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix qa: <http://qanswer.eu/> .

#Making our first node
qa:node1 rdfs:label "QAnswer" .
qa:node1 skos:altLabel "QAnswer KG" .
qa:node1 skos:altLabel "QA" .
qa:node1 skos:altLabel "you" .

#Adding some additional nodes
qa:node2 rdfs:label "English" .
qa:node3 rdfs:label "French" .
qa:node4 rdfs:label "German" .
qa:node5 rdfs:label "Italian" .

#Creating our first property
qa:language rdfs:label "speaks language" .
qa:language skos:altLabel "speak" .
qa:language skos:altLabel "language" .

#Saying that QAnswer speaks English, Franch, German and Italian
qa:node1 qa:language qa:node2 .
qa:node1 qa:language qa:node3 .
qa:node1 qa:language qa:node4 .
qa:node1 qa:language qa:node5 .
```
