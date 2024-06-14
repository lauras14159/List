import styled from 'styled-components';
import { TreeNode } from './BinaryTree';

const TreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TreeNodeContainer = styled.div<{ level: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  position: relative;
`;

const Node = styled.div`
  padding: 10px;
  border-radius: 50%;
  background-color: lightblue;
`;

const Line = styled.div<{ left: boolean }>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.left ? '0' : '50%')};
  width: ${(props) => (props.left ? '50%' : '50%')};
  height: 2px;
  background-color: black;
  transform: translateY(-50%);
  z-index: -1;
`;

interface BinaryTreeVisualizationProps<T> {
  root: TreeNode<T> | null;
}

const BinaryTreeVisualization = <T,>({ root }: BinaryTreeVisualizationProps<T>): JSX.Element => {
  const renderTree = (node: TreeNode<any> | null, level: number = 0): JSX.Element | null => {
    if (node === null) return null;

    return (
      <TreeNodeContainer level={level}>
        {node.left && <Line left />}
        <Node>{node.value}</Node>
        {node.right && <Line left={false} />}
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: 1 }}>{renderTree(node.left, level + 1)}</div>
          <div style={{ flex: 1 }}>{renderTree(node.right, level + 1)}</div>
        </div>
      </TreeNodeContainer>
    );
  };

  return <TreeContainer>{renderTree(root)}</TreeContainer>;
};

export default BinaryTreeVisualization;
