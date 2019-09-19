---
id: doc1.6
title: Tutorial: Contextual information
sidebar_label: Part 6 (Contextual information)
---

Up to now the result was always given by the "rdfs:label". But in an RDF dataset there are potentially many contextual information that can be shown like
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

The first option is to align the vocabulary using the mapping tab. The interface looks as follows:

<img src="/img/screenshots/mapping.png" width="80%">

To align the above properties just add the uri:

http://www.w3.org/2004/02/skos/core#definition

to the Definition list and

http://vocabulary.semantic-web.at/cocktail-ontology/image

to the Image list and click on "Save". The properties are then used to to show the contextual information.



## Option 2

The second option is to substitute the uris in the original Knowledge Base by the ones supported by QAnswer.
The cocktail Knowledge Base where the above URIs are substituted can be downloaded [here](/cocktails_align.nt). The updated file can be uploaded and indexd as
explained in [Part 3](/docs/doc1.3).


## Result

With these substitutions we get the following result:

<img src="/img/screenshots/result1.png" width="80%">

and

<img src="/img/screenshots/result2.png" width="80%">

