import { firestore } from "./firebase";

//get all
export const getAllProjects = async () => {
  return await firestore()
    .collection("projects")
    .get()
    .then((response) => {
      let projects = [];
      if (response.size > 0) {
        response.docs.forEach((project) => {
          projects.push({ id: project.id, ...project.data() });
        });
      }
      return projects;
    })
    .catch((error) => {
      console.log("Get all error: ", error);
      throw error;
    });
};

//get by id
export const getProject = async (id) => {
  return await firestore()
    .collection("projects")
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
export const createProject = async (project) => {
  const ref = firestore().collection("projects").doc();
  return ref
    .set({
      ...project,
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
export const updateProject = async (project, projectId) => {
  return firestore()
    .collection("projects")
    .doc(projectId)
    .update(project)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Update error: ", error);
      throw error;
    });
};

//delete
export const deleteProject = async (projectId) => {
  return firestore()
    .collection("projects")
    .doc(projectId)
    .delete()
    .catch((error) => {
      console.log("Delete error: ", error);
      throw error;
    });
};
