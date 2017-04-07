import Ember from 'ember';

export default Ember.Component.extend({
      avgLiking: Ember.computed('answer.likes', 'answer.dislikes', function() {
        var likes = this.get('answer.likes');
        var dislikes = this.get('answer.dislikes');
        var score = this.get('answer.likes') / this.get('answer.dislikes');
        if ((score && isFinite(score)) || (likes === 0 && dislikes !== 0)) {
          return score;
        } else if (score || (likes === 0 && dislikes === 0)) {
          return 1;
        } else {
          return 0;
        }
      }),
      actions: {
        like(answer, question) {
          this.sendAction('like', answer, question);
        },
        dislike(answer, question) {
          this.sendAction('dislike', answer, question);
        },
        showAnswer() {
          this.set('answerIsHidden', false);
        }
      },
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
