/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2016. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */
'use strict';

// internal constructor only
var singleton = function() {
    return {
        connection : null,
        WINDOW_DELIMITER: '1W',
        LOG_DELIMITER: '1D',
        LOG_TYPE: 'L',
        SUCCESS: '1A',
        DEFAULT_SECURE_PROTOCOL: 'TLSv1_method',
        DEFAULT_REJECT_UNAUTHORIZED: false,
        BUFFER_SIZE: process.env.log4js_logmet_buffer_size || 10000
    };
};

// returns the current instance if it exists
// otherwise creates a new one.
singleton.getInstance = function() {
    if (!this.instance) {
        this.instance = new singleton();
    }
    return this.instance;
};

// only expose a function that returns the current instance if it exists
// otherwise creates a new one.
module.exports = singleton.getInstance();