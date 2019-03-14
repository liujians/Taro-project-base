'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disable = exports.update = exports.add = exports.detail = exports.list = undefined;

var _req = require('../utils/req.js');

var base = '/test';

var list = exports.list = function list() {
  return (0, _req.get)('' + base);
};

var detail = exports.detail = function detail(id) {
  return (0, _req.get)(base + '/' + id);
};

var add = exports.add = function add(data) {
  return (0, _req.post)('' + base, data);
};

var update = exports.update = function update(id, data) {
  return (0, _req.patch)(base + '/' + id, data);
};

var disable = exports.disable = function disable(id) {
  return (0, _req.del)(base + '/' + id);
};