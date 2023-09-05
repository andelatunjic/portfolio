import { firestore } from "./firebase";

//get all
export const getAllComments = async () => {
  return await firestore()
    .collection("comments")
    .get()
    .then((response) => {
      let comments = [];
      if (response.size > 0) {
        response.docs.forEach((comment) => {
          comments.push({ id: comment.id, ...comment.data() });
        });
      }
      return comments;
    })
    .catch((error) => {
      console.log("Get all error: ", error);
      throw error;
    });
};

//get by id
export const getComment = async (id) => {
  return await firestore()
    .collection("comments")
    .doc(id)
    .get()
    .then((response) => {
      return response.exists ? response.data() : {};
    })
    .catch((error) => {
      console.log("Get one error: ", error);
      throw error;
    });
};

//post
export const createComment = async (comment) => {
  const ref = firestore().collection("comments").doc();
  return ref
    .set({
      ...comment,
    })
    .then(() => {
      return ref.id;
    })
    .catch((error) => {
      console.log("Create error: ", error);
      throw error;
    });
};

//put
export const updateComment = async (comment, commentId) => {
  return firestore()
    .collection("comments")
    .doc(commentId)
    .update(comment)
    .catch((error) => {
      console.log("Update error: ", error);
      throw error;
    });
};

//delete
export const deleteComment = async (commentId) => {
  return firestore()
    .collection("comments")
    .doc(commentId)
    .delete()
    .catch((error) => {
      console.log("Delete error: ", error);
      throw error;
    });
};
