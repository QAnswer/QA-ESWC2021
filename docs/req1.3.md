---
id: req1.3
title: Requirement 3 (Optional)
sidebar_label: Requirement 3 (Optional)
---

This requirement is only needed when one wants to display contextual information. To allow QAnswer to display contextual information like images, descriptions, videos, links and maps the ontology vocabulary of the KG has to be aligned to the one used by QAnswer. This is necessary since there is there are multiple vocabulary terms to express this type of information in the Semantic Web Community. QAnswer is using the properties used by Wikidata.
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