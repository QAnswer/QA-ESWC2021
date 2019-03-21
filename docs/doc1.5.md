---
id: doc1.5
title: Tutorial: Feedback and Train
sidebar_label: Part 5 (Feedback and train)
---

Each time you ask a question the system generate interpretations and decides if to show the top interpretation or not. If the system decides not show the top
generated interpretation this looks like this:

<img src="/img/screenshots/No_Interpretation.png" width="80%">

By clicking on "Direct Answer" the result of the top generated interpretation is shown:

<img src="/img/screenshots/No_Interpretation2.png" width="80%">

In this case the result is correct. By using the feedback functionality, i.e. by replaying to the question: "Is this the right answer? Yes", the system can
 remember this example.

When asking "Give me all cocktails?" as a response "Cocktail" is given, i.e. so the system understood that we search for general information about "Cocktail",
and would correspond to the question "What is a Cocktail?". By clicking on "SPARQL List" all generated interpretations can be shown:

<img src="/img/screenshots/SparqlList.png" width="80%">

In particular the second returns all things that are of type "Cocktail". This is the interpretation we are searching for. By clicking on this interpretation we get:

<img src="/img/screenshots/SparqlList2.png" width="80%">

Which gives a long list of cocktails but with low confidence. By using the feedback functionality, i.e. by replaying to the question: "Is this the right answer? Yes",
the system will save the given example.

After asking a set of questions, and by giving feedback you will have created a training set. By clicking on "Training Evaluation" in your
[profile](https://qanswer-frontend.univ-st-etienne.fr/user/profile) you have an overview of how the system performs on the questions you gave feedback.

<img src="/img/screenshots/Evaluation.png" width="80%">

After clicking on "Train" the system will create a model that adapts to your dataset:

<img src="/img/screenshots/EvaluationAfter.png" width="80%">

Now you learned how to give feedback to the system and how this feedback can be used to adapt QAnswer to your dataset.