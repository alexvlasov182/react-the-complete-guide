/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
