---
id: quick1.5
title: Learning a bit ....
sidebar_label: Learning a bit ....
---

While writing down the Knwoledge Graph about myself, and asking questions, I noted that there were some problems. 
Maybe the same happend to you! 

Mainly two things happened ...

## 1 The Knowledge is not encoded correctly

At some point for example I wrote:

```
qa:birthPlace rdfs:label "born" .
qa:birthPlace skos:altLabel "birth place" .

#create node Saint-Etienne
qa:saintEtienne rdfs:label "Saint-Etienne" .

#born in Saint-Etienne
qa:node2 qa:birthPlace qa:saintEtienne . 
```

Do you see the error? The problem is the last triple, instead of writing
```
#born in Saint-Etienne
qa:node1 qa:birthPlace qa:saintEtienne . 
```
i.e. that QAnswer was born in Saint-Etienne, I wrote
```
#born in Saint-Etienne
qa:node2 qa:birthPlace qa:saintEtienne . 
```
i.e. that English was born in Saint-Etienne. So clearly we will not get a meaningful answer if
the knowledge is not encoded correctly. So one important thing is: "Check that your knowledge is encoded correctly!"


## 2 The interpretation is wrong
The second thing that happened was that some questions where interpreted wrongly even if the knowledge was encoded
correctly. When I asked "Where are you born?"
I got:

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.5.png" width="80%">

But I asked "where", not "when"! and the information in the Knowledge Graph was correct!
In this case when I clicked on "SPARQL query" I found the right interpretation:

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.5_2.png" width="80%">

You see it, it is the 3rd one! When I clicked on it I got the right answer:

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.5_3.png" width="80%"> 

It is important at this step to tell that this is the right interpretation, not the previous one! So
I clicked on "Is this answer right?" -> Yes. It is good to do that because you create a training
data set, and the quality of the answers get better. I always do it! When I click on "Training Evaluation"
I can see all things I asked:

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.5_4.png" width="80%"> 

In green the ones that are currently right, in red the ones that are wrong. But after clicking on "Train" I
got

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.5_5.png" width="80%"> 

Cool now all questions are answered correctly, and when I ask:

<img src="/QA-ESWC2020/img/screenshots/quick/quick1.5_6.png" width="80%">

I get the right answer. 

Note 1: The algorithm didn't see this before, it generallized!
Note 2: In this KG there are 6 relations and you will need around 20 training examples ....
