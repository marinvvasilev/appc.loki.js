'use strict';

require('../_init');

var should = require('should'),
    _ = require('underscore'),
    Arrow = require('arrow');

describe('Connector findAll', () => {
    var self = this;

    it("should findAll", (next) => {
        const _model = Arrow.Model.getModel('appc.loki.js/users');
        _model.findAll((err, result) => {
            should(err).not.be.ok;
            should(result).be.ok;
            next();
        });
    });

    it("should return Collection data", (next) => {
        const _model = Arrow.Model.getModel('appc.loki.js/users');
        _model.findAll((err, result) => {
            let _resData = ['name', 'weapons', 'Age'];
            should(err).not.be.ok;
            should(result).be.ok;
            result.forEach((item) => {
                var _item = item.toPayload();
                _resData.forEach((field) => {
                    should(_item.hasOwnProperty(field)).be.true("Expected '" + field + "' to be a part of this list!");
                });
            });
            next();
        });
    });
});