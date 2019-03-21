---
id: doc1.3
title: Tutorial: Upload and index
sidebar_label: Part 3 (Upload and index)
---

Now you are ready to upload your first dataset. On your [profile page](https://qanswer-frontend.univ-st-etienne.fr/user/profile) click on "Add dataset".

![Profile0](/img/screenshots/Profile0.png)

You will get to the dataset upload page where you have to specify the name of the dataset and the dataset itself.

![Dataset](/img/screenshots/Dataset.png)

IMPORTANT: The dataset must be in N-Triple format and must be syntactically correct. You can both check and clean a file using [serdi](https://drobilla.net/software/serd)

```
serdi -i ntriples -o ntriples dump.nt > dump_clean.nt
```



After uploading the dataset, it will appear in your profile.

![Profile1](/img/screenshots/Profile1.png)

A flag will indicate that it is not indexed yet. To index the dataset click on index. When the
indexing process terminated succesfully then the flag will turn to "True".

![Profile2](/img/screenshots/Profile2.png)


![Datasets](/img/screenshots/Datasets.png)

The dataset is now ready to be queried!