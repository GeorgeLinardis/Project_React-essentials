import { ReactNode } from 'react';

interface TabButtonProps {
  onClick: () => void;
  isSelected?: boolean;
  children: ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ children, onClick, isSelected = false }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : ""}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  )
}

export default TabButton;
