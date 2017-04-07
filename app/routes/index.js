import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  // enables user to save
  actions: {
    saveQuestion3(params) {
      var newRQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    // user to update
    update(question, params) {
      debugger;
      question.save();
      this.transitionTo('index');
    },
    // user to be able to delete
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
