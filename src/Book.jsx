function Book({ book }) {
  return (
    <img
      className="w-full h-full"
      src={book.cover}
      alt={`Esta imagen muestra la tapa del libro ${book.title}`}
    />
  );
}

export default Book;
