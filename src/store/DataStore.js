import { observable, action, computed, makeObservable } from "mobx";

class DataStore {
  experiences = [];
  experience = null;

  constructor() {
    makeObservable(this, {
      experiences: observable,
      setExperiences: action,
      experiencesLength: computed,
      getExperienceById: action,
    });
  }

  setExperiences = (experiences) => {
    this.experiences = experiences;
  };

  get experiencesLength() {
    return this.experiences.length;
  }

  getExperienceById = (id) => {
    this.experience = this.experiences.find(
      (experience) => experience.id === Number(id)
    );
  };
}

const dataStore = new DataStore();

export default dataStore;
