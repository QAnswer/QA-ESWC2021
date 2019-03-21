---
id: doc1.6
title: Tutorial: Contextual information
sidebar_label: Part 6 (Contextual information)
---

Up to now the result was always given by the "rdfs:label". But in an RDF dataset there are potentially many contextual information that can be shown like
descriptions, images, maps and videos. To allow QAnswer to display this contextual information your ontology vocabulary has to be aligned by the one used by
QAnswer. This is necessary since there is no common vocabulary to express this type of information in the Semantic Web Community. QAnswer is using the properties
used by Wikidata. So let's start.

The main properties to align are the following:

- <http://schema.org/description>, to visualize a description
- <http://www.wikidata.org/prop/direct/P18>, to visualize an image. The object is expected to be the link to an online available image file.
- <http://www.wikidata.org/prop/direct/P625> to visualize the geographic coordinates. The object is expected to be a literal with datatype <http://www.opengis.net/ont/geosparql#wktLiteral>
 like "Point(12.482777777778 41.893055555556)"^^<http://www.opengis.net/ont/geosparql#wktLiteral>
- External links can be expressed using the following properties:
    - <http://www.wikidata.org/prop/direct/P856> to show a link to the homepage
    - <http://www.wikidata.org/prop/direct/P1651> to show a youtube link
    - <http://www.wikidata.org/prop/direct/P2037> to show a github link
    - <http://www.wikidata.org/prop/direct/P2002> to show a twitter link
    - <http://www.wikidata.org/prop/direct/P2013> to show a facebook link
    - <http://www.wikidata.org/prop/direct/P2003> to show an instagram link
    - <http://www.wikidata.org/prop/direct/P496> to show an orcid link
    - <http://www.wikidata.org/prop/direct/P356> to show a doi link
    - <http://qanswer.eu/dbpedia> to show a dbpedia link

In the case of the cocktail Knowledge Base the following properties can be aligned:

1) <http://www.w3.org/2004/02/skos/core#definition> to  <http://schema.org/description>
2) <http://vocabulary.semantic-web.at/cocktail-ontology/image> to <http://www.wikidata.org/prop/direct/P18>
3) <http://www.w3.org/2004/02/skos/core#exactMatch> to <http://qanswer.eu/dbpedia>

The cocktail Knowledge Base with where the above URIs are substituted can be downloaded [here](/dump_align.nt). The updated file can be uploaded and indexd as
explained in [Part 3](/docs/doc1.3). With these substitutions we get the following result:

<img src="/img/screenshots/Result_Final0.png" width="80%">

and

<img src="/img/screenshots/Result_Final1.png" width="80%">

