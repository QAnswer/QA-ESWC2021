---
id: doc1.5
title: Tutorial: Feedback and Train
sidebar_label: Part 5 (Feedback and train)
---

Each time you ask a question the system generate interpretations and computes a confidence. A list of different interpretations can be show by clicking on
 "SPARQL List". The confidence is shown in the bar at the top left. The system believes the answer is correct if the confidence
 is bigger than 50% and wrong if it is lower than 50%.

By using the feedback functionality, i.e. by replaying to the question: "Is this the right answer? Yes No", the system can learn to choose the right interpretation
and correctly compute the confidence.

When asking "Give me all cocktails?" as a response "Cocktail" is given, i.e. the system understood that we search for general information about "Cocktail" which
 would correspond to the question "What is a Cocktail?". By clicking on "SPARQL List" all generated interpretations can be shown:

<img src="/img/screenshots/sparql_list.png" width="80%">

In particular the second returns all things that are of type "Cocktail". This is the interpretation we are searching for. By clicking on this interpretation we get:

<img src="/img/screenshots/question_wrong2.png" width="80%">

Which gives a long list of cocktails but with low confidence. By using the feedback functionality, i.e. by replaying to the question: "Is this the right answer? Yes",
the system will save the given example.

After asking a set of questions, and by giving feedback you will have created a training set. A training set for the cocktail dataset can be downloaded
[here](/questions_cocktail.json). It can be uploaded from the [profile page](https://qanswer-frontend.univ-st-etienne.fr/user/profile) using the "Upload Questions" button.


By clicking on "Training Evaluation" in your
[profile](https://qanswer-frontend.univ-st-etienne.fr/user/profile) you have an overview of how the system performs on the questions you gave feedback.

<img src="/img/screenshots/evaluation1.png" width="80%">

After clicking on "Train" the system will create a model that adapts to your dataset:

<img src="/img/screenshots/evaluation2.png" width="80%">

Note that the model will generalize also over questions you didn't ask.

Now you learned how to give feedback to the system and how this feedback can be used to adapt QAnswer to your dataset.
