---
id: quick1.4
title: Quick Introduction
sidebar_label: My creativity ....
---
Ok, this is what come out with my creativity ....

<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
@prefix xml: <http://www.w3.org/XML/1998/namespace/> .
@prefix xs: <http://www.w3.org/2001/XMLSchema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix qa: <http://qanswer.eu/> .

#Making our first node
qa:node1 rdfs:label "QAnswer" .
qa:node1 skos:altLabel "QAnswer KG" .
qa:node1 skos:altLabel "QA" .
qa:node1 skos:altLabel "you" .
qa:node1 skos:altLabel "your" .


#Adding some additional nodes
qa:node2 rdfs:label "English" .
qa:node3 rdfs:label "French" .
qa:node4 rdfs:label "German" .
qa:node5 rdfs:label "Italian" .

#Creating our first property: LANGUAGE
qa:language rdfs:label "speaks language" .
qa:language skos:altLabel "speak" .
qa:language skos:altLabel "language" .

#Saying that QAnswer speaks English, Franch, German and Italian
qa:node1 qa:language qa:node2 .
qa:node1 qa:language qa:node3 .
qa:node1 qa:language qa:node4 .
qa:node1 qa:language qa:node5 .

#BIRTH PLACE
qa:birthPlace rdfs:label "born" .
qa:birthPlace skos:altLabel "birth place" .

#create node Saint-Etienne
qa:saintEtienne rdfs:label "Saint-Etienne" .

#born in Saint-Etienne
qa:node1 qa:birthPlace qa:saintEtienne .

qa:saintEtienne rdf:type qa:city .
qa:city rdfs:label "city" .

#born in France
qa:France rdfs:label "France" .
qa:node1 qa:birthPlace qa:France .

qa:France rdf:type qa:country .
qa:country rdfs:label "country" .

#BIRTH DATE
qa:birthDate rdfs:label "born at" .
qa:birthDate skos:altLabel "birth date" .

#born the third July 2016
qa:node1 qa:birthDate "2016-07-03"^^xsd:date .

#LIVE
qa:liveIn rdfs:label "live in" .
qa:liveIn skos:altLabel "residence" .

##live on a server
qa:node1 qa:liveIn "I'm on some server, I don't even know where 🙈!" .

#LIKE
qa:like rdfs:label "like" .
qa:like skos:altLabel "love" .

##likes ...
qa:SW rdfs:label "Semantic Web" .
qa:node1 qa:like qa:SW . 
qa:NLP rdfs:label "Natural Language Processing" .
qa:node1 qa:like qa:NLP .
qa:lang rdfs:label "Languages" .
qa:node1 qa:like qa:lang .
qa:graphs rdfs:label "Graphs" .
qa:node1 qa:like qa:graphs .

##developer ...
qa:developer rdfs:label "developer" .
qa:developer skos:altLabel "developed by" .
qa:developer skos:altLabel "created by" .

qa:QACompany rdfs:label "The QA Company" .
qa:node1 qa:developer qa:QACompany . 
qa:DD rdfs:label "Dennis Diefenbach" .
qa:node1 qa:developer qa:DD .
```
<!--Question 1-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.4_4.png" width="80%">
<!--Question 2-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.4_2.png" width="80%">
<!--Question 3-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.4_1.png" width="80%">
<!--Question 4-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.4_3.png" width="80%">
<!--Question 5-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.4_5.png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->
