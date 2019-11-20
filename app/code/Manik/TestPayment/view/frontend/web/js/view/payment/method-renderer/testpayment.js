define([
        'jquery',
        'Magento_Payment/js/view/payment/cc-form'
    ],
    function ($, Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Manik_TestPayment/payment/testpayment'
            },

            context: function() {
                return this;
            },

            getCode: function() {
                return 'manik_testpayment';
            },

            isActive: function() {
                return true;
            }
        });
    }
);
