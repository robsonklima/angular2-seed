System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return [
                        { name: "Vue", year: "2016" },
                        { name: "Angular JS", year: "2017" },
                        { name: "React JS", year: "2017" },
                        { name: "Node JS", year: "2017" }
                    ];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map