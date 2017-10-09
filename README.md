# email-composer

This is a templating app allowing to store pre-drafted portions of recurring emails,
and then quickly compose an email with a few clicks.


## Learned:
+ React
+ React-Redux
+ data normalization + functional programming basics
+ selectors (*+ touched on memoization, need to dig more into it. Will be implementing reselect to limit re-renders at ListLabelsContainer/ListLabels*)
+ ~~Higher order components (*to be practiced more*)~~ Mind blown by "render prop" https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce will be implementing in next commit
+ React-Router v4
+ Draft.js (*Reading through the API and trying to make sense of it was an incredible learning experience*)
+ Firebase database + auth (*keeping Redux in combination to Firebase to keep the components simple + not all state is to be persisted (Draft.js editor state)*)
+ CSS modules (*really interested in this approach and will dive deeper.*)
+ Styled components (*Next commit will most likely implement these*)
