let draggableElement = null;
const maxActionWrapperLength = 10;
let rootNode = document.getElementById('root');

const header = document.createElement('div');
header.setAttribute('class', 'header-name');
header.innerText = 'TODO Cat List';
rootNode.appendChild(header);


const addNewAction = document.createElement('div');
addNewAction.classList.add('add-new-action');
const input = document.createElement('input');
input.setAttribute('placeholder', 'Add new action');
input.setAttribute('type', 'text');
input.classList.add('input');
input.addEventListener('input', () => {
    addAction.disabled = input.value.length <= '0';
});

const addAction = document.createElement('button');
addAction.classList.add('material-icons', 'add-action');
addAction.setAttribute('disabled', 'disabled');
addAction.setAttribute('type', 'button');
addAction.innerText = 'add_box';
addAction.addEventListener('click', () => {
    newAction(input.value);
    input.value = '';
    input.dispatchEvent(new InputEvent('input'));
});

addNewAction.appendChild(input);
addNewAction.appendChild(addAction);
rootNode.appendChild(addNewAction);

const dividerLine = document.createElement('hr');
dividerLine.setAttribute('class', 'divider-line');
rootNode.appendChild(dividerLine);


const list = document.createElement('div');
const listId = 'todo-list';
list.id = listId;
list.classList.add('todo-list');
rootNode.appendChild(list);


const createCheckbox = (id) => {
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    checkbox.setAttribute('data-item', id);
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            checkbox.disabled = true;
        }
    });
    return checkbox;
};

const createAction = (actionName, id) => {
    const action = document.createElement('label');
    action.setAttribute('class', 'action-name');
    action.setAttribute('data-item', id);
    action.setAttribute('for', 'checkbox');
    action.innerText = actionName;
    return action;
};

const createInputEditAction = (id) => {
    const inputEditAction = document.createElement('input');
    inputEditAction.classList.add('edit-action-input');
    inputEditAction.setAttribute('placeholder', 'Edit action');
    inputEditAction.setAttribute('data-item', id);
    inputEditAction.style.display = 'none';
    return inputEditAction;
};

const createSaveButton = (id) => {
    const saveEditedAction = document.createElement('i');
    saveEditedAction.classList.add('material-icons', 'save');
    saveEditedAction.innerText = 'save';
    saveEditedAction.setAttribute('data-item', id);
    saveEditedAction.style.display = 'none';
    saveEditedAction.addEventListener('click', () => {
        let attrSelector = `[data-item='${id}']`;
        let editedAction = document.querySelector(`.edit-action-input${attrSelector}`);
        let editedActionValue = editedAction.value;
        const actionName = document.querySelector(`.action-name${attrSelector}`);
        actionName.innerText = editedActionValue;
        const completedActionCheckbox = document.querySelector(`.checkbox${attrSelector}`);
        const deleteAction = document.querySelector(`.delete${attrSelector}`);
        const editAction = document.querySelector(`.edit${attrSelector}`);
        actionName.style.display = 'block';
        deleteAction.style.display = 'block';
        editAction.style.display = 'block';
        completedActionCheckbox.style.display = 'block';
        editedAction.style.display = 'none';
        saveEditedAction.style.display = 'none';

    });
    return saveEditedAction;
};

const createEditAction = (id) => {
    const editAction = document.createElement('i');
    editAction.setAttribute('data-item', id);
    editAction.classList.add('material-icons', 'edit');
    editAction.innerText = 'edit';
    editAction.addEventListener('click', () => {
        let attrSelector = `[data-item='${id}']`;
        const completedActionCheckbox = document.querySelector(`.checkbox${attrSelector}`);
        const actionName = document.querySelector(`.action-name${attrSelector}`);
        const deleteAction = document.querySelector(`.delete${attrSelector}`);

        const editedAction = document.querySelector(`.edit-action-input${attrSelector}`);
        const saveEditedAction = document.querySelector(`i.save${attrSelector}`);
        editedAction.style.display = 'flex';
        saveEditedAction.style.display = 'flex';

        actionName.style.display = 'none';
        deleteAction.style.display = 'none';
        editAction.style.display = 'none';
        completedActionCheckbox.style.display = 'none';
    });
    return editAction;
};

const createDeleteAction = (id) => {
    const deleteAction = document.createElement('i');
    deleteAction.classList.add('material-icons', 'delete');
    deleteAction.setAttribute('data-item', id);
    deleteAction.innerText = 'delete';
    deleteAction.addEventListener('click', deleteActionHandler(id));
    return deleteAction;
};

const deleteActionHandler = (id) => {
    return () => {
        let selector = `.action-wrapper[data-item='${id}']`;
        const wrapper = document.querySelector(selector);
        if (wrapper) {
            wrapper.remove();
        }
    }
};

const isReachedMaxItems = () => {
    const todoItems = document.getElementsByClassName('action-wrapper');
    return todoItems.length >= maxActionWrapperLength;
};

const disableControlOnMaxItems = () => {
    const input = document.querySelector('.input');
    const addAction = document.querySelector('.add-action');
    input.setAttribute('disabled', 'disabled');
    addAction.setAttribute('disabled', 'disabled');
    const notification = document.createElement('p');
    notification.classList.add('notification');
    notification.innerText = 'Maximum item per list are created';
    header.appendChild(notification);
};

const addNewToDoItem = (name) => {
    const id = String(Date.now());
    const actionWrapper = document.createElement('div');
    actionWrapper.classList.add('action-wrapper');
    actionWrapper.setAttribute('data-item', id);
    actionWrapper.setAttribute('draggable', 'true');
    const completedActionCheckbox = createCheckbox(id);
    const action = createAction(name, id);
    const editAction = createEditAction(id);
    const deleteAction = createDeleteAction(id);
    const inputEditAction = createInputEditAction(id);
    const saveEditedAction = createSaveButton(id);

    actionWrapper.appendChild(completedActionCheckbox);
    actionWrapper.appendChild(action);
    actionWrapper.appendChild(editAction);
    actionWrapper.appendChild(deleteAction);
    actionWrapper.appendChild(inputEditAction);
    actionWrapper.appendChild(saveEditedAction);
    list.appendChild(actionWrapper);
};

const newAction = (actionName) => {
    addNewToDoItem(actionName);
    if (isReachedMaxItems()) {
        disableControlOnMaxItems();
    }
    // uncomment this to enable drag'n'drop
    // initDnD();
};

const handleDragStart = function (e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    draggableElement = this;
};
const handleDragOver = function (e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
};

const handleDrop = function (e) {
    if (draggableElement !== this) {
        draggableElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
};

// after drag'n'drop events stop working
const initDnD = () => {
    const items = document.querySelectorAll(`#${listId} .action-wrapper`);

    [].forEach.call(items, function (col) {
        col.setAttribute('draggable', 'true');

        col.removeEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragstart', handleDragStart, false);

        col.removeEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragover', handleDragOver, false);

        col.removeEventListener('drop', handleDrop, false);
        col.addEventListener('drop', handleDrop, false);

    });

};
