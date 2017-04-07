import Ember from 'ember';

var rentals = [{
  id: 1,
  author: "Veruca Salt",
  city: "San Francisco",
  type: "Education",
  question: "What are the 4 principles of matter?"
}, {
  id: 2,
  author: "Mike TV",
  city: "Seattle",
  type: "Entertainment",
  question: "Why do Kenyan djs not play Kenyan music?"
}, {
  id: 3,
  author: "Violet Beauregarde",
  city: "Portland",
  type: "Life",
  question: "Why do people give up in life?"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
