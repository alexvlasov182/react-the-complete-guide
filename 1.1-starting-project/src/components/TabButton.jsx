export default function TabButton({ children }) {
  function handleClick() {
    console.log("Handle click is working");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
