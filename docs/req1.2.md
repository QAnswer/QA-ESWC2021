---
id: req1.2
title: Requirement 2
sidebar_label: Requirement 2
---

We assume that the RDF dataset does not use any form of reification. To recall, RDF is perfectly suited to represent binary statements like: "Margarita contains Cointreau" which can be represented as the triple (Margarita,contains, Cointreau). Reified statements are used when there is the need to speak about a binary statement like in: "Margarita contains 50ml of Cointreau". In this case a triple is not enough to represent this piece of information. The Semantic Web Community proposed a series of models to represent these types of information. For a full overview of the presented models we refer to~\cite{gimenez2017ndfluents}. One of the models is n-ary relations (the reification model used by Wikidata), where the knowledge would be represented as:
```
vsw:Margarita   vswo:consists-of_IN _:b1 .
_:b1 vswo:consists-of_OUT vsw:Cointreau .
vsw:blank vswo:quantity "50 ml" .
```

Another model is RDF reification which was , where the knowledge would be represented as:

```
vsw:Statement rdf:type rdf:Statement .
vsw:Statement rdf:subject vsw:Margarita .
vsw:Statement rdf:predicate vswo:consists-of .
vsw:Statement rdf:object vsw:Cointreau .
vsw:Statement vswo:quantity "50 ml" .
```
QAnswer was not designed to cope with these representations and it is not clear how it behaves when they are indexed in QAnswer.