export default function TabButton({ children, onClick, isSelected = false }) {
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
