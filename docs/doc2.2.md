---
id: doc2.2
title: Tutorial: Signup and Login
sidebar_label: Part 2 (Signup and Login)
---


We have seen in the previus section which is the relation between your RDF data and the questions you can answer with it.
To index your RDF dataset you need to signup to the QAnswer platform. This can be done by accessing the following [website](https://qanswer-frontend.univ-st-etienne.fr/user/signup).

???????????????????????

You will get an e-mail to confirm your account. After you will directly be able to login. This can be done by the following curl request:

<!--DOCUSAURUS_CODE_TABS-->
<!--CURL-->
```js
curl -XPOST 'http://qanswer-core1.univ-st-etienne.fr/api/user/signin' --data "{\"usernameOrEmail\": \"user\", \"password\":\"password\"}" -H "Content-Type: application/json"

```
<!--END_DOCUSAURUS_CODE_TABS-->