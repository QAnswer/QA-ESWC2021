---
id: doc1.3
title: Tutorial: Upload and index
sidebar_label: Part 3 (Upload and index)
---

Now you are ready to upload your first dataset. On your [profile page](https://qanswer-frontend.univ-st-etienne.fr/user/profile) click on "Add dataset".
The cocktail dataset can be downloaded [here](/cocktails.nt).

<img src="/img/screenshots/Profile0.png" width="80%">

You will get to the dataset upload page where you have to specify the name of the dataset and the dataset itself.

<img src="/img/screenshots/Dataset.png" width="80%">


IMPORTANT: The dataset must be in N-Triple format and must be syntactically correct. You can both check and clean a file using [serdi](https://drobilla.net/software/serd)

```
serdi -i ntriples -o ntriples dump.nt > dump_clean.nt
```



After uploading the dataset, it will appear in your profile.

The dataset is now ready to be queried!
