class DragAndDrop {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
        this.element.addEventListener('dragstart', this.handleDragStart.bind(this));
        this.element.addEventListener('dragover', this.handleDragOver.bind(this));
        this.element.addEventListener('drop', this.handleDrop.bind(this));
    }

    handleDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(data);
        this.element.appendChild(draggedElement);
    }
}

module.exports = DragAndDrop;
