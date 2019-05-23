define(['jquery'], function ($) {
    'use strict';

    return function (targetFunction) {
        targetFunction.getObservableFields = function () {
            var self = this,
                observableFields = [];

            $.each(self.getRules(), function (carrier, fields) {
                $.each(fields, function (field) {
                    if (observableFields.indexOf(field) === -1) {
                        observableFields.push(field);
                    }
                });
            });

            observableFields.push('firstname'); // Load shipping method on First name change
            observableFields.push('country_id'); // Load shipping method on Country change
            observableFields.push('postcode'); // Load shipping method on Postcode change
            observableFields.push('city'); // Load shipping method on City change


            return observableFields;
        }

        return targetFunction;
    };
});