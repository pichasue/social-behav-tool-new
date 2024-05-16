const theories = [
  {
    id: 1,
    name: 'Social Learning Theory',
    constructs: [
      { name: 'Attention', type: 'text' },
      { name: 'Retention', type: 'text' },
      { name: 'Reproduction', type: 'text' },
      { name: 'Motivation', type: 'number' }
    ]
  },
  {
    id: 2,
    name: 'Social Cognitive Theory',
    constructs: [
      { name: 'Observational Learning', type: 'text' },
      { name: 'Self-Efficacy', type: 'number' },
      { name: 'Behavioral Capability', type: 'text' },
      { name: 'Expectations', type: 'text' },
      { name: 'Self-Control', type: 'number' },
      { name: 'Emotional Coping Response', type: 'text' }
    ]
  },
  {
    id: 3,
    name: 'Health Belief Model',
    constructs: [
      { name: 'Perceived Susceptibility', type: 'number' },
      { name: 'Perceived Severity', type: 'number' },
      { name: 'Perceived Benefits', type: 'number' },
      { name: 'Perceived Barriers', type: 'text' },
      { name: 'Cue to Action', type: 'text' },
      { name: 'Self-Efficacy', type: 'number' }
    ]
  },
  // Additional theories and constructs can be added here
];

module.exports = theories;
