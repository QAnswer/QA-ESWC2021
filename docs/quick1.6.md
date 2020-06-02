---
id: quick1.6
title: Making it prettier 
sidebar_label: Making it prettier
---

Last step, let's make it prettier. For now we have stored the main information about ourselfs, but 
there is a lot of other information we can add like:

* descriptions: the description will be added when the node is rendered

<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
qa:node1 rdfs:description "QAnswer is a Question Answering platform, i.e., a platform that allows to make your RDF data accessible via natural language. It is a combination of semantic technologies, information retrieval and machine learning techniques. Welcome!" .
```
<!--Question-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.6_1.png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->

* images: the image will be shown when the node is rendered, we borrow a property from wikidata here 
(you can use the link of any image that is publicly available)
<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
@prefix wdt: <http://www.wikidata.org/prop/direct/> .

qa:node1 wdt:P18 <http://commons.wikimedia.org/wiki/Special:FilePath/Screenshot%20of%20QAnswer.png>
```
<!--Question-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.6_2.png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->

* external links: why not attaching some pointers to external links like your website, your linkedin, twitter or facebook acccount!
for a complete list check  [Requirements 3](/docs/req1.3).

<!--DOCUSAURUS_CODE_TABS-->
<!--Turtle-->
```
wdt:P18 rdfs:label "image" .
qa:node1 wdt:P18 <http://commons.wikimedia.org/wiki/Special:FilePath/Screenshot%20of%20QAnswer.png> .
wdt:P856 rdfs:label "homepage" .
qa:node1 wdt:P856 <https://qanswer.eu> .
wdt:P2002 rdfs:label "twitter" .
qa:node1 wdt:P2002 <https://twitter.com/QAnswer21634063> .
wdt:P1651 rdfs:label "youtube link" .
qa:node1 wdt:P1651 <https://www.youtube.com/channel/UCC88IVHJPUm7Ruf2lvfNMvg> .
```
<!--Question-->
<img src="/QA-ESWC2020/img/screenshots/quick/quick1.6_3.png" width="80%">
<!--END_DOCUSAURUS_CODE_TABS-->

So we get:

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.6_3.png" width="80%">

Looks prettier, right?

Here the Knowledge Graph we created up to now

```
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace/> .
@prefix xs: <http://www.w3.org/2001/XMLSchema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix qa: <http://qanswer.eu/> .
@prefix wdt: <http://www.wikidata.org/prop/direct/> .

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
qa:liveIn skos:altLabel "residence" .

##Adding some contextual information to make it prettier
qa:node1 rdfs:description "QAnswer is a Question Answering platform, i.e., a platform that allows to make your RDF data accessible via natural language. It is a combination of semantic technologies, information retrieval and machine learning techniques. Welcome!" .

wdt:P18 rdfs:label "image" .
qa:node1 wdt:P18 <http://commons.wikimedia.org/wiki/Special:FilePath/Screenshot%20of%20QAnswer.png> .
wdt:P856 rdfs:label "homepage" .
qa:node1 wdt:P856 <https://qanswer.eu> .
wdt:P2002 rdfs:label "twitter" .
qa:node1 wdt:P2002 <https://twitter.com/QAnswer21634063> .
wdt:P1651 rdfs:label "youtube link" .
qa:node1 wdt:P1651 <https://www.youtube.com/channel/UCC88IVHJPUm7Ruf2lvfNMvg> .
```

There is one last thing missing .... a quick one .....
