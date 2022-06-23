const ReadBookList = (props) => {
  // console.log(props,"ReadBookList.props")
  return (
    <div>
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Serial number
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Book title
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Author
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Publish year
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Fiction
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        {/* id: obj.id,
              title: obj.title,
              author: obj.author.name,
              publishYear: obj.published_year,
              fiction:obj.fiction */}
        <tbody>
          {props.bookData.map((obj) => (
            <tr key={obj.id}className="bg-gray-200 p-3 text-sm font-semibold tracking-wide text-left">
              <td className="p-3 text-sm text-grey-700">{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.author}</td>
              <td>{obj.publishYear.toString()}</td>
              <td>{obj.fiction.toString()}</td>
              <td>  <button
                    className="border-slate-400 border-solid border-2 shadow-md p-0 w-12 h-12 rounded rounded-lg"
                    value={obj.id}
                 
                  >
                    delete
                  </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ReadBookList;
