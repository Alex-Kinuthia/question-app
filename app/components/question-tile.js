import Ember from 'ember';

export default Ember.Component.extend({
      update(question, params) {
        this.sendAction('update', question, params);
      },
      like(question) {
        if (confirm('You have liked the question')) {
          this.sendAction('likeQuestion', question);
        },
        hate(question) {
          if (confirm('You have hated the question')) {
            this.sendAction('hateQuestion', question);
          }
          delete(question) {
            if (confirm('Are you sure you want to delete this question?')) {
              this.sendAction('destroyQuestion', question);
            }
          }
        });
