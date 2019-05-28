---
id: api1
title: API Reference
---

The documentation of all APIs is available via Swagger at the following address:

[http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html ](http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html)

The APIs can be grouped into the following catergories:

* [User APIs](http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html#/user-controller), i.e. APIs to handle signup, login, datasets a user has access.
* [Dataset APIs](http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html#/dataset-controller), i.e. APIs to upload, index, remove an RDF dataset.
* [Feedback APIs](http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html#/feedback-controller), i.e. APIs to give feedback, train a new model bases on the feedback and upload download the already provided feedback in different formats.
* [Question Answering APIs](http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html#/qa-controller), i.e. APIs to ask questions over indexed datasets.
* [SPARQL APIs](http://qanswer-core1.univ-st-etienne.fr/swagger-ui.html#/sparql-controller), i.e. APIs to make SPARQL queries over an indexed dataset.

Note: Most of the APIs are secured and a [JSON Web Token](https://qanswer-frontend.univ-st-etienne.fr/question?query=JSON%20Web%20Token&tags=%5B%5D&lang=en&kb=wikidata) is needed to access them.
Basically to get the JSON Web Token signin using:

```
 curl -XPOST 'http://qanswer-core1.univ-st-etienne.fr/api/user/signin' --data "{\"usernameOrEmail\": \"USERNAME\", \"password\":\"PASSWORD\"}" -H "Content-Type: application/json"
```

which will return the access token:

```
 {"accessToken":"eyJhbGciOi...A","tokenType":"Bearer"}
```

This must be specified in the authorization header to access the protected APIs. For example:

```
 curl  http://qanswer-core1.univ-st-etienne.fr/api/feedback/upload -F json=@feed -H 'authorization: Bearer eyJhbGciOi...A'
```

The APIs can be used under the following [Terms of Use](/docs/termsOfUse).
