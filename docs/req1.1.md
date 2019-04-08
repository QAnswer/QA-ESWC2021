---
id: req1.1
title: Requirement 1
sidebar_label: Requirement 1
---

A URI will only be used to generate SPARQL queries if the question contains (up to stemming) the literal attached via one of the following properties:
- http://www.w3.org/2000/01/rdf-schema#label
- http://purl.org/dc/elements/1.1/title
- https://schema.org/name
- http://www.w3.org/2004/02/skos/core#prefLabel
- http://www.w3.org/2004/02/skos/core#altLabel

Moreover, if the literal has a language tag, it will only be searched in questions of that language. If no language tag is attached the corresponding label will be searched in questions of any language.
For example for the RDF graph:
```
PREFIX vsw: <http://vocabulary.semantic-web.at/cocktails>
PREFIX vswo: <http://vocabulary.semantic-web.at/cocktail-ontology>
PREFIX schema: <http://schema.org/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

vsw:2d85fb1b        rdfs:label   "Margarita" ;
                    rdfs:label   "Upside Down Margarita"@en .
vswo:consists-of    rdfs:label "consists of"@en ;
                    rdfs:label "contains"@en ;
                    rdfs:label "made up"@en ;
                    rdfs:label "ingredients"@en .
```
the URI vsw:2d85fb1b will only be used in a SPARQL query if the question either contains "Margarita" or "Upside Down Margarita". Moreover "Margarita" will be used for any language while "Upside Down Margarita" only for english questions. The URI vswo:consists-of will be used to construct SPARQL queries if the question contains "consists of", "contains", "made up", "ingredients" and expressions that are equal to them up to stemming. This is for example the case for the expression "contained" which, up to stemming, is the same as "contains".

Note that in particular for the graph:
```
vsw:Margarita   vswo:consists-of vsw:Cointreau .
```
it will not be possible to answer any question since no labels are attached. Moreover even if for humans the name of the URI is meaningfull, according to RDF standard the above graph is equivalent to:
```
vsw:2d85fb1b   vswo:1234 vsw:1439e6c3 .
```