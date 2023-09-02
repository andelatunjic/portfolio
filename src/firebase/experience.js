import { firestore } from "./firebase";

//get all
export const getAllExperiences = async () => {
  return await firestore()
    .collection("experiences")
    .get()
    .then((res) => {
      let experiences = [];
      if (res.size > 0) {
        res.docs.forEach((experience) => {
          experiences.push({ id: experience.id, ...experience.data() });
        });
      }
      console.log(experiences);
      return experiences;
    })
    .catch((error) => {
      console.log("Error getting experiences data: ", error);
      throw error;
    });
};

//get by id
export const getExperience = async (id) => {
  return await firestore()
    .collection("experiences")
    .doc(id)
    .get()
    .then((res) => {
      return res.exists ? res.data() : {};
    })
    .catch((error) => {
      console.log("Error getting experience data: ", error);
      throw error;
    });
};

//post 
export const createExperience = async (experience) => {
  const experienceRef = firestore().collection("experiences").doc();
  return experienceRef
    .set({
      ...experience,
    })
    .then(() => {
      return experienceRef.id;
    })
    .catch((error) => {
      console.log("Error creating new experience: ", error);
      throw error;
    });
};

//put 
export const updateExperience = async (experience, experienceId) => {
  return firestore()
    .collection("experiences")
    .doc(experienceId)
    .update(experience)
    .then((res) => {
      console.log(res);
      console.log("success");
    })
    .catch((error) => {
      console.log("Error updating experience: ", error);
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
      console.log("Error deleting experience: ", error);
      throw error;
    });
};
