"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlobContainerName = (eventGridEvent) => {
    const containerNameRegex = /containers\/([\w|-]*)/;
    const matches = eventGridEvent.subject.match(containerNameRegex);
    return matches ? matches[1] : '';
};
//# sourceMappingURL=getBlobContainerName.js.map