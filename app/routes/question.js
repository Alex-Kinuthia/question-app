import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      var review_deletions = question.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var question = params.question;
      question.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
