export default function Header() {
  return (
    <header>
      <nav className="flex bg-sky-950 justify-between">
        <div className="flex items-center">
          <a href="/" className="text-white text-2xl font-bold p-4">
            soBooks
          </a>
        </div>
        <ul className="flex gap-3 text">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
