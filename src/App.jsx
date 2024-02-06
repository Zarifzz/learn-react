import "./styles.css"


export default function App(){
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">

        <label htmlFor="item">New Item!!!</label>
        <input type="text" id="item"/>
        <button className="btn">ADD NOW!!!</button>

      </div>
    </form>

    <h1 className="header">Todolist</h1>

    <ul className="list">
      <li>
        <label>
          <input type="checkbox"/>
          Rock!!!
        </label>
        <button className="btn btn-danger">Delete!!!</button>
      </li>
      <li>
        <label>
          <input type="checkbox"/>
          Paper!!!
        </label>
        <button className="btn btn-danger">Delete!!!</button>
      </li>
    </ul>

    </>

  )
}
