var oneRepMax = function() {
  return window.location.hash.substring(1);
};

var percentageify = function(value, percentage) {
  return {percent: percentage, value: (value * percentage) / 100};
};

var fakeMax = function(oneRepMax) {
  return percentageify(oneRepMax, 90);
};

var percentages = function(oneRepMax) {
  var percents = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95];
  var pairs = [];
  for (let index in percents) {
    pairs.push({
      percent: percents[index],
      value: percentageify(
        fakeMax(oneRepMax).value,
        percents[index],
      ).value.toFixed(2),
    });
  }
  return pairs;
};

var updateUrl = function(event) {
  window.history.pushState('', '', '#' + this.oneRepMax);
};

var app = new Vue({
  el: 'section',
  data: {
    oneRepMax: oneRepMax(),
  },
  computed: {
    fakeMax: function() {
      return fakeMax(this.oneRepMax).value.toFixed(2);
    },
    percentages: function() {
      return percentages(this.oneRepMax);
    },
  },
  methods: {
    updateUrl: updateUrl,
  },
});
