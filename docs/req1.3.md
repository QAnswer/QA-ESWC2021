---
id: req1.3
title: Requirement 3 (Optional)
sidebar_label: Requirement 3 (Optional)
---

This requirement is only needed when one wants to display contextual information. To allow QAnswer to display contextual information like labels, images, descriptions, videos, links and maps the ontology vocabulary of the KG has to be aligned to the one used by QAnswer. This is necessary since there is there are multiple vocabulary terms to express this type of information in the Semantic Web Community. QAnswer is using common properties.
The main properties to align are the following:

- <http://www.w3.org/2000/01/rdf-schema#label>, <http://www.w3.org/2004/02/skos/core#prefLabel>, <http://purl.org/dc/terms/title>, <http://xmlns.com/foaf/0.1/givenName>, <http://purl.org/dc/elements/1.1/title>
to visualize a lable. If no label is available the URI is shown
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

Instructions to align the properties can be found in [Part 6](/docs/doc1.6).
