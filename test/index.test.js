const assert = require('assert');
const DragAndDrop = require('../src/dragAndDrop');

describe('DragAndDrop', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    it('should be able to drag and drop elements', () => {
        const draggableElement = document.createElement('div');
        draggableElement.id = 'draggable';
        container.appendChild(draggableElement);

        const dragAndDrop = new DragAndDrop('container');

        const dragEvent = new Event('dragstart');
        draggableElement.dispatchEvent(dragEvent);

        const dropEvent = new Event('drop');
        container.dispatchEvent(dropEvent);

        assert.strictEqual(container.children.length, 1);
        assert.strictEqual(container.children[0].id, 'draggable');
    });
});
