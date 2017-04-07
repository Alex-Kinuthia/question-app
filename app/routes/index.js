import Ember from 'ember';

export default Ember.Route.extend({
      model() {
        model() {
            return Ember.RSVP.hash({
              questions: this.store.findAll('question'),
              reviews: this.store.findAll('review')
            });
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
              Object.keys(params).forEach(function(key) {
                if (params[key] !== undefined) {
                  question.set(key, params[key]);
                }
              });
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
