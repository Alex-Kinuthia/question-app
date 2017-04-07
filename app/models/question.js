// creation of attributes
import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  question: DS.attr(),
  reviews: DS.hasMany('review', {
    async: true,
    likes: DS.attr(),
    dislikes: DS.attr()
  }),
});
