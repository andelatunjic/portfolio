import { firestore } from "./firebase";

//get all
export const getAllExperiences = async () => {
  return await firestore()
    .collection("experiences")
    .get()
    .then((response) => {
      let experiences = [];
      if (response.size > 0) {
        response.docs.forEach((experience) => {
          experiences.push({ id: experience.id, ...experience.data() });
        });
      }
      return experiences;
    })
    .catch((error) => {
      console.log("Get all error: ", error);
      throw error;
    });
};

//get by id
export const getExperience = async (id) => {
  return await firestore()
    .collection("experiences")
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
export const createExperience = async (experience) => {
  const ref = firestore().collection("experiences").doc();
  return ref
    .set({
      ...experience,
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
export const updateExperience = async (experience, experienceId) => {
  return firestore()
    .collection("experiences")
    .doc(experienceId)
    .update(experience)
    .catch((error) => {
      console.log("Update error: ", error);
      throw error;
    });
};

//delete
export const deleteExperience = async (experienceId) => {
  return firestore()
    .collection("experiences")
    .doc(experienceId)
    .delete()
    .catch((error) => {
      console.log("Delete error: ", error);
      throw error;
    });
};
