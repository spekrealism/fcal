const tableCountInput = document.getElementById('table-count');
const tablesContainer = document.getElementById('tables-container');

tableCountInput.addEventListener('input', (event) => {
  const tableCount = parseInt(event.target.value);
  tablesContainer.innerHTML = ''; // Очищаем контейнер перед выводом таблиц

  // Создаем таблицы
  for (let i = 0; i < tableCount; i++) {
    const table = document.createElement('table');
    for (let j = 0; j < 21; j++) { // Изменили количество строк на 4
      const tr = document.createElement('tr');
    
      // Добавляем ячейку "Название комнаты" в первую строку и объединяем все ячейки первого столбца
      if (j === 0) {
        const th = document.createElement('th');
        th.rowSpan = 21; // Объединяем все ячейки первого столбца
        th.appendChild(document.createTextNode('000--000'));
        tr.appendChild(th);
      } else {
        // Добавляем ячейку "Временной интервал" во вторую строку
        if (j === 1) {
          const td1 = document.createElement('td');
          const td2 = document.createElement('td');
          const td3 = document.createElement('td');
          const td4 = document.createElement('td');
          td1.appendChild(document.createTextNode('Название комнаты'));
          td2.appendChild(document.createTextNode('12'));
          td3.appendChild(document.createTextNode('Временной интервал'));
          td4.appendChild(document.createTextNode('34'));
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
        } else {
          // Добавляем обычные ячейки со значением 0
          for (let k = 0; k < 4; k++) { // Изменяем количество ячеек на 5
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(diffDays));
            tr.appendChild(td);
          }
        }
      }
      table.appendChild(tr);
    }
    tablesContainer.appendChild(table);
  }
});
