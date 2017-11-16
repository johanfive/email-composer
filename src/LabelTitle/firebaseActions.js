import { db } from '../firebase';
//______________________________________________________________________________


export const updateTitle = (key, title) => {
    const data = {
        [`Labels/${key}/title`]: title
    };
    db.update(data);
/*    .catch(
          error => { console.log("update failed", error); }
      );
*/
};
