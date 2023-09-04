import { observable, action, computed, makeObservable } from "mobx";

class DataStore {
  experiences = [];
  experience = null;

  projects = [];
  project = null;

  comments = [];
  comment = null;

  constructor() {
    makeObservable(this, {
      experiences: observable,
      setExperiences: action,
      experiencesLength: computed,

      projects: observable,
      setProjects: action,
      projectsLength: computed,

      comments: observable,
      setComments: action,
      commentsLength: computed,
    });
  }

  setExperiences = (experiences) => {
    this.experiences = experiences;
  };

  get experiencesLength() {
    return this.experiences.length;
  }

  setProjects = (projects) => {
    this.projects = projects;
  };

  get projectsLength() {
    return this.projects.length;
  }

  setComments = (comments) => {
    this.comments = comments;
  };

  get commentsLength() {
    return this.comments.length;
  }
}

const dataStore = new DataStore();

export default dataStore;
