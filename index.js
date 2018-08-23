/*
 * moleculer-auth-facebook
 * Copyright (c) 2017 Frankovskyi Bogdan
 * MIT Licensed
 */

"use strict";

const _ = require('lodash');
const Oauth2Provider = require('moleculer-auth-oauth2');

module.exports = class extends Oauth2Provider {
    constructor(options, logger) {

        _.merge(options, {
            name: 'facebook',

            client: {
                idParamName: 'client_id',
                secretParamName: 'client_secret',
            },
            auth: {
                tokenHost: 'https://graph.facebook.com',
                tokenPath: '/v2.11/oauth2/access_token',
                authorizeHost: 'https://www.facebook.com',
                authorizePath: '/v2.11/dialog/oauth'
            },

            scope: 'email',
        });

        super(options, logger)
    }
};
