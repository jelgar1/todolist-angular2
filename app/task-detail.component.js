"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require('./task');
var TaskDetailComponent = (function () {
    function TaskDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], TaskDetailComponent.prototype, "task", void 0);
    TaskDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-task-detail',
            template: "\n    <div *ngIf=\"task\">\n      <h2>{{task.name}} details!</h2>\n      <div><label>id: </label>{{task.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"task.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;
//# sourceMappingURL=task-detail.component.js.map