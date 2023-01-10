import React, { useState } from 'react';

function Input() {
   const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
   const [value, setValue] = useState('');
   const [editIndex, setEditIndex] = useState(null);
   
   const result = arr.map((element, index) => {
      return <p key={index}
         onClick={() => edit(index)}
         onDoubleClick={() => remove(index)}
         >
         {element}
      </p>;
   });

   function edit(event) { // редактирование элемента
      setArr(
         [
            ...arr.slice(0, editIndex), 
            event.target.value,
            ...arr.slice(editIndex + 1)
         ]
      ); 
   }

   function stopEdit() { // завершение редактирования
      setEditIndex(null);
   }

   function remove(index) {
      setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
   }

   function add() { // добавление элемента
      setArr([...arr, value]);
   }

   function changeValue(event) { // изменение содержания поля input
      setValue(event.target.value);
   }
 
   let fields; // поле и кнопка
   if (editIndex){ // для редактирования элемента
      fields = <div>
         <input value={arr[editIndex]} onChange={edit} />
         <button onClick={stopEdit}>Изменить элемент</button>
      </div>;
   } else{ // для добавления нового элемента
      fields = <div>
         <input value={value} onChange={changeValue} />
         <button onClick={add}>Добавить элемент</button>
      </div>;
   }

   return <div>
      {result}
      {fields}
   </div>;
}

export default Input;