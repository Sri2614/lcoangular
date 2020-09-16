var Employee = /** @class */ (function () {
    function Employee(name, empCode) {
        this.name = name;
        this.empCode = empCode;
    }
    Employee.prototype.showMe = function () {
        console.log("Hey good afternoon");
    };
    return Employee;
}());
