import Ember from 'ember';

export function questionPopularity(params) {
  var rental = params[0];

  if (rental.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
