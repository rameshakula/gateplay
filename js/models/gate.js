var Gate = Backbone.Model.extend({
    defaults: function() {
        return {
            x: 0,
            y: 0,
            templateId: "and"
        }
    }
});