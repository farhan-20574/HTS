"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add');
    const nameInput = document.getElementById('name');
    const majorInput = document.getElementById('major');
    const tableBody = document.querySelector('#table1 tbody');
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const major = majorInput.value.trim();
        if (name && major) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${major}</td>
                <td>
                    <button type="button" class="update">update</button>
                    <button type="button" class="delete">delete</button>
                </td>
            `;
            tableBody.appendChild(row);
            // Clear input fields
            nameInput.value = '';
            majorInput.value = '';
        }
    });
    tableBody.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('delete')) {
            const row = target.closest('tr');
            if (row) {
                tableBody.removeChild(row);
            }
        }
        else if (target.classList.contains('update')) {
            const row = target.closest('tr');
            if (row) {
                const nameCell = row.children[0];
                const majorCell = row.children[1];
                nameInput.value = nameCell.textContent || '';
                majorInput.value = majorCell.textContent || '';
                tableBody.removeChild(row);
            }
        }
    });
});
