import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion1() {
      var params = {
        author: this.get('author'),
        type: this.get('type'),
        city: this.get('city'),
        question: this.get('question'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
