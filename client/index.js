'use strict';

var WorkerPouch = require('../lib/client/core');

function workerPouchPlugin (PouchDB) {
  PouchDB.adapter('worker', WorkerPouch, true)
}

if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(workerPouchPlugin)
}

module.exports = workerPouchPlugin;
