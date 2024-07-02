import { useState } from "react";
import books from "../public/books.json";
import BooksBtn from "./BooksBtn.jsx";
import Book from "./Book.jsx";

function App() {
  const [booksSaved, setBooksSaved] = useState([]);
  const [range, setRange] = useState(1250);

  const booksDataJSON = books.library;
  const [booksData, setBooksData] = useState(booksDataJSON);

  const handleChangeSelect = (e) => {
    const value = e.target.value;

    const booksDataCopyFilter = booksDataJSON.filter(({ book }) => {
      if (book.genre == value) {
        return book;
      }
    });
    if (booksDataCopyFilter.length < 1) {
      setBooksData(booksDataJSON);
    } else {
      setBooksData(booksDataCopyFilter);
    }
  };

  const handleChangeRange = (e) => {
    const value = parseInt(e.target.value);
    setRange(value);

    const booksDataCopyFilter = booksDataJSON.filter(({ book }) => {
      if (book.pages < value) {
        return book;
      }
    });

    setBooksData(booksDataCopyFilter);
  };

  const isBookSaved = (book) => {
    return booksSaved.some((savedBook) => savedBook.ISBN === book.ISBN);
  };

  return (
    <>
      <main className="w-full h-full flex text-white playwrite-ng-modern-default border rounded-lg p-8 gap-12">
        <section className="flex flex-col gap-8 w-3/4 h-full">
          <div className="flex flex-col gap-4">
            <h1 className="playwrite-ng-modern-titles text-4xl">
              {`${booksData.length} Libros disponibles`}
            </h1>
            <h4 className="">{`${booksSaved.length} en la lista de lectura`}</h4>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed">{`Filtrar por páginas (${range})`}</p>
              <input
                onChange={(e) => {
                  handleChangeRange(e);
                }}
                type="range"
                min="250"
                max="1250"
                step="100"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg leading-relaxed">Filtras por genero</p>
              <label className="flex border w-fit text-sm">
                <select
                  onChange={(e) => {
                    handleChangeSelect(e);
                  }}
                  className="bg-[#0e0e0e] p-1 cursor-pointer"
                >
                  <option value="Todos">Todos</option>
                  <option value="Fantasía">Fantasía</option>
                  <option value="Ciencia ficción">Ciencia ficción</option>
                  <option value="Zombies">Zombis</option>
                  <option value="Terror">Terror</option>
                </select>
                <span className="border-l">
                  <svg
                    fill="#ffffff"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="28px"
                    height="28px"
                    viewBox="-12.79 -12.79 68.20 68.20"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <g>
                          <path d="M38.259,1.387c-0.146,0.078-0.242,0.146-0.302,0.203c-0.003,0.003-0.011,0.006-0.014,0.009 c-4.34,4.343-8.68,8.686-13.02,13.027c-0.952,0.952-1.905,1.905-2.857,2.858c-0.992,0.993-0.4,0.594-0.656,0.337 c-2.052-2.053-4.104-4.104-6.155-6.157c-2.611-2.612-5.224-5.227-7.836-7.84C6.62,3.026,4.917,0.574,3.531,0.712 C-1.565,1.219,0.354,8.444,0.354,12.14c0,3.001,0,6.002,0,9.003c0,1.549,1.934,2.85,2.892,3.809 c5.005,5.008,10.01,10.016,15.015,15.021c0.614,0.615,1.19,0.998,1.741,1.211l0.291,0.291c0.283,0.282,0.664,0.442,1.064,0.442 c0.4,0,0.784-0.16,1.067-0.442l1.306-1.307c0.491-0.403,0.987-0.879,1.5-1.392c5.033-5.036,10.064-10.072,15.099-15.108 c3.375-3.377,2.031-8.518,2.031-13.038C42.359,7.593,43.98-1.676,38.259,1.387z M40.089,9.256 c-2.162,4.612-4.446,9.166-6.891,13.638c-0.265,0.484-0.328,0.455-0.132-0.062c0.764-2.021,1.589-4.017,2.423-6.003 c0.214-0.509,0.619-1.305,0.905-1.776c1.187-1.956,2.385-3.905,3.59-5.853C40.275,8.73,40.323,8.756,40.089,9.256z M39.507,1.683 c0.111-0.012,0.215,0.028,0.302,0.147c-0.208,0.013-0.412,0.055-0.6,0.148C39.309,1.881,39.407,1.782,39.507,1.683z M3.134,2.031 c0.763,0.765,1.526,1.526,2.289,2.29c-0.18,0.057-0.351,0.171-0.476,0.37C4.039,6.134,3.143,7.587,2.25,9.038 c0.021-0.439,0.036-0.873,0.036-1.28C2.286,7.355,2.238,1.134,3.134,2.031z M1.987,12.899C3.411,10.6,4.821,8.291,6.25,5.994 c0.125-0.199,0.174-0.437,0.176-0.67C6.864,5.763,7.302,6.201,7.74,6.639c-0.179,0.053-0.345,0.167-0.46,0.37 c-1.787,3.165-3.59,6.321-5.393,9.477C1.856,15.304,1.908,14.092,1.987,12.899z M5.983,25.198 c-0.604-0.604-1.206-1.207-1.81-1.811c-0.56-0.562-0.979-1.215-1.31-1.926c2.271-4.017,4.514-8.049,6.84-12.021 C9.822,9.238,9.86,8.994,9.851,8.751c1.204,1.205,2.41,2.41,3.615,3.616c-0.175,0.056-0.337,0.17-0.447,0.374 c-2.03,3.757-4.132,7.48-6.261,11.19C6.497,24.352,6.24,24.775,5.983,25.198z M7.345,26.56c0.516-0.896,1.032-1.789,1.546-2.684 c1.949-3.104,3.973-6.158,6.039-9.188c0.134-0.196,0.185-0.435,0.184-0.675c0.556,0.556,1.111,1.111,1.667,1.667 c-0.178,0.06-0.348,0.176-0.476,0.374c-1.858,2.888-3.711,5.773-5.465,8.712c-0.66,1.105-1.306,2.22-1.954,3.334 C8.372,27.589,7.858,27.074,7.345,26.56z M10.205,29.422c1.585-2.729,3.186-5.444,4.834-8.128c0.823-1.34,1.663-2.669,2.508-3.995 c0.115-0.182,0.165-0.391,0.182-0.599c0.107,0.123,0.217,0.248,0.331,0.38c-0.145,0.068-0.282,0.171-0.386,0.34 c-2.463,4.025-4.931,8.05-7.399,12.071C10.251,29.468,10.227,29.445,10.205,29.422z M13.116,32.335 c-0.513-0.514-1.024-1.025-1.537-1.538c2.47-4.023,4.933-8.05,7.393-12.076c0.099-0.162,0.142-0.349,0.161-0.536 c0.573,0.502,1.188,0.876,1.813,0.836c0.734-0.047,1.3-0.314,1.809-0.689l-0.691,0.692c-0.392,0.391-1.023,0.391-1.415,0 c0,0-0.014-0.014-0.03-0.03c-0.017-0.018-0.24,0.363-0.501,0.852c-1.008,1.886-2.026,3.765-3.062,5.635 c-1.025,1.829-2.051,3.651-3.107,5.426C13.668,31.379,13.392,31.857,13.116,32.335z M14.609,33.829 c3.473-5.26,6.936-10.526,10.42-15.777c0.306-0.46,0.376-0.423,0.15,0.082c-0.472,1.052-0.964,2.091-1.482,3.118 c-2.668,4.517-5.412,8.983-8.316,13.351C15.124,34.343,14.866,34.087,14.609,33.829z M20.11,39.415 c-0.243-0.278-0.513-0.595-0.836-0.918c-0.856-0.856-1.711-1.712-2.567-2.567c3.453-4.851,6.699-9.834,9.349-15.115 c2.55-4.324,5.053-8.68,7.587-13.015c0.136-0.232,0.182-0.365,0.148-0.397c1.624-1.625,3.248-3.25,4.873-4.875 c-0.066,0.192-0.156,0.508-0.251,0.863c-0.898,3.418-2.135,6.75-3.486,10.051c-0.865,1.67-1.755,3.33-2.65,4.984 C28.12,25.362,24.076,32.367,20.11,39.415z M28.7,29.015c-0.361,1.031-0.729,2.062-1.095,3.091 c-0.187,0.521-0.573,1.323-0.869,1.789c-1.11,1.748-2.273,3.502-3.5,5.231c-0.093,0.094-0.186,0.188-0.28,0.28 c0.014-0.057,0.052-0.152,0.145-0.332c1.359-2.611,2.736-5.219,4.16-7.804c0.427-0.775,0.854-1.551,1.283-2.326 C28.812,28.463,28.884,28.494,28.7,29.015z M40.429,20.386c0,2.023-1.397,2.936-2.745,4.284c-0.288,0.289-0.577,0.576-0.865,0.865 c1.189-2.427,2.391-4.847,3.61-7.257C40.429,18.982,40.429,19.684,40.429,20.386z M40.429,14.158 c-2.664,5.132-5.231,10.317-7.757,15.526c-1.027,1.029-2.058,2.059-3.086,3.088c0.172-0.353,0.359-0.705,0.522-0.959 c3.83-6.004,7.205-12.301,10.32-18.725C40.429,13.445,40.429,13.801,40.429,14.158z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {booksData.map(({ book }) => (
              <div key={book.ISBN} className="relative">
                <Book book={book} />
                <BooksBtn
                  booksSaved={booksSaved}
                  setBooksSaved={setBooksSaved}
                  book={book}
                  isBookSaved={isBookSaved}
                />
              </div>
            ))}
          </div>
        </section>
        <aside className="w-full border rounded-lg ml-12 my-8 bg-[url('./assets/bglecturesection.jpg')]">
          <h1 className="playwrite-ng-modern-titles text-4xl p-8 text-center">
            Lista de lectura
          </h1>
          <div className="grid grid-cols-4 gap-8 p-8">
            {booksSaved.map((book) => (
              <div key={book.ISBN} className="relative">
                <Book book={book} />
                <BooksBtn
                  booksSaved={booksSaved}
                  setBooksSaved={setBooksSaved}
                  book={book}
                  isBookSaved={isBookSaved}
                />
              </div>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
