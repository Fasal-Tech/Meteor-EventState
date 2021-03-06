Package.describe({
  name: "shivangkar:eventstate",
  version: '0.0.5',
  summary: "A server and client event state package.",
  git: "https://github.com/shivang007/Meteor-EventState.git"
});

Package.onUse(function (api) {

  api.versionsFrom('1.0');

  api.use(['shivangkar:eventemitter@1.0.0']);

  api.addFiles('eventstate.common.js', ['client', 'server']);

  api.export('EventState')
});


Package.onTest(function (api) {
  api.use(['shivangkar:eventstate']);
  api.use('test-helpers', ['server', 'client']);
  api.use('tinytest');

  api.addFiles('eventstate.tests.js');
});
