// App.tsx
import React, { useState } from 'react';
import { LinkedList } from './components/linkedList/LinkedList';
import BinaryTreeVisualization from './components/binaryTree/BinaryTreeVisualization';
import { BinaryTree } from './components/binaryTree/BinaryTree';
// import BinaryTreeComponent from './components/binaryTree/index';

const App: React.FC = () => {
  const [list] = useState<LinkedList<number>>(new LinkedList());
  const [inputValue, setInputValue] = useState<number>(0);
  const [elements, setElements] = useState<number[]>([]);

  const addElement = () => {
    list.append(inputValue);
    setElements(list.toArray());
    setInputValue(0);
  };
  const [tree] = useState(new BinaryTree<number>());

  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(17);
  

  return (
    <>
    <div className='p-5'>
      <h1>LinkedList</h1>
      <input
        type="number"
        value={inputValue}
        className='border-black border'
        onChange={(e) => setInputValue(Number(e.target.value))} />
      <button onClick={addElement} className='ml-5 p-2 rounded-md bg-black text-white font-semibold'>Add Element</button>

      <div className='flex flex-row item-center gap-x-2 pt-5'>
        {elements.map((value, index) => (
          <span key={index}>{value}{' '}</span>
        ))}
      </div>
    </div>
    <div>
      <h1>Binary Tree Visualization</h1>
      <BinaryTreeVisualization root={tree.root} />
    </div>
    </>
    
  );
};

export default App;


