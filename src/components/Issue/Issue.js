import React from "react";
import styles from "./Issue.module.css";

/**
 * assignee: {login: "dsmilkov", id: 2294279, node_id: "MDQ6VXNlcjIyOTQyNzk=",…}
assignees: [{login: "dsmilkov", id: 2294279, node_id: "MDQ6VXNlcjIyOTQyNzk=",…}]
author_association: "NONE"
body: "#### TensorFlow.js version
↵
↵Model was converted to Model.JSON via 
↵
↵> tb-nightly (1.14.0a20190603)
↵> tensorflow-estimator-2.0-preview (1.14.0.dev2019060300)
↵> tensorflow-hub (0.3.0)
↵> tensorflowjs (1.1.2)
↵> termcolor (1.1.0)
↵> tf-nightly-2.0-preview (2.0.0.dev20190603)
↵
↵#### Browser version
↵Chrome Version 74.0.3729.169 (Offizieller Build) (64-Bit)
↵
↵#### Describe the problem or feature request
↵When we execute the model in Python with TF 2.0 we get different results than in TFJS. We use the latest version from [TFJS ](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js).
↵In the output tensor "**detection_boxes**" it seems everything is screwed. 1st and second row are fine and in between I can find other equal rows. 
↵
↵![image](https://user-images.githubusercontent.com/49950048/58872101-9bac0f00-86c3-11e9-9766-2c30f4df0da7.png)
↵
↵and in Python with TF 2.0 we get 
↵
↵![image](https://user-images.githubusercontent.com/49950048/58872238-d9109c80-86c3-11e9-8917-5c129066b57b.png)
↵
↵
↵#### Code to reproduce the bug / link to feature request
↵
↵I prepared a complete HTML skeleton. By calling the index.html it is loading the model.json and predicts. 
↵
↵https://share.infinkon.de/index.php/s/tD9QJ98NwJp2jd6
↵
↵In the folder **"tf/ssdlite_saved_model_u2/Saved_Model_ssdlite_v2_1class"** you will also find the original saved model we used as a source for the **tensorflowjs_converter**.
↵
↵**Please note**: only detection_boxes is available. 
↵
↵many thanks
↵Sebastian "
closed_at: null
comments: 0
comments_url: "https://api.github.com/repos/tensorflow/tfjs/issues/1652/comments"
created_at: "2019-06-04T10:26:53Z"
events_url: "https://api.github.com/repos/tensorflow/tfjs/issues/1652/events"
html_url: "https://github.com/tensorflow/tfjs/issues/1652"
id: 451917556
labels: [{id: 930308462, node_id: "MDU6TGFiZWw5MzAzMDg0NjI=",…}]
labels_url: "https://api.github.com/repos/tensorflow/tfjs/issues/1652/labels{/name}"
locked: false
milestone: null
node_id: "MDU6SXNzdWU0NTE5MTc1NTY="
number: 1652
repository_url: "https://api.github.com/repos/tensorflow/tfjs"
state: "open"
title: "TFJS shows different results than TF"
updated_at: "2019-06-04T17:37:28Z"
url: "https://api.github.com/repos/tensorflow/tfjs/issues/1652"
 */

// TODO User friendly formatting `10 days ago`
// TODO Check milestones display
const Issue = ({ number, title, labels, created_at, user, milestone }) => {
  return (
    <div className={styles.issueBox}>
      <div>
        <div className={styles.titleContainer}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.labelContainer}>
            {labels.map(label => (
              <span
                key={label.id}
                className={styles.issueLabel}
                style={{ backgroundColor: `#${label.color}` }}
              >
                {label.name}
              </span>
            ))}
          </span>
        </div>
        <div className={styles.issueDetails}>
          <span>
            #{number} opened {created_at} by {user.login}
          </span>
          <span>{milestone}</span>
        </div>
      </div>
    </div>
  );
};

export default Issue;
