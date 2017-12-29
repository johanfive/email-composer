# email-composer
Templating app to store portions of recurring emails,
enabling users to quickly compose an email with a few clicks.  
*And how fitting while learning React and how to compose all the things!*

## Learned:
+ **React**
+ **React-Redux**
+ **data normalization** + **functional programming** basics + **Immutability** + **Promises** + what a factory function is.
+ **selectors** (*+ touched on memoization, fully understand the value of it, need to dig more into it.*)  
=> Learned all about and implemented **Reselect** to realize I did not need it for this project.  
Very valuable experience forcing me to really dive into how and when and in which order React renders things.
+ **thunks** and **middleware** in general.  
=> Learned all about and implemented **Redux-Thunk** to realize I did not need it either.  
Still, this taught me to put all the brains of the app in Action Creators.  
Because of that I reshaped the state tree, and restructured how my directories and files are organized.
+ ~~Higher order components (*to be practiced more*)~~ Mind blown by "**render prop**" [here](https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce) (Haven't had/found a good excuse to implement it yet)
+ **React-Router** v4 (Not needed in this project / at this time)
+ **Draft.js** (*Reading through the API and trying to make sense of it was an incredible learning experience*)
+ **Firebase database + auth** (*keeping Redux in combination to Firebase to keep the components simple + not all state is to be persisted (Draft.js editor state)*)  
Scoured the internet for good advice on how to tie Firebase (and notably Oauth providers / login process) nicely into a React-Redux project.  
=> Could not find an approach I was fully satisfied with so I finally came up with my own.  
SEEKING FEEDBACK on this!
+ CSS modules (*Not using it*)
+ Styled components (*Loving it*)
+ create-react-app, **PWAs** and **service workers** (*Have not jumped into the rabbit hole yet.*)
