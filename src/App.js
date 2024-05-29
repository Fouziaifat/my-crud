import { useState } from "react";
import "./App.css";

function App() {
  const [grocery, setGrocery] = useState([]);
  const [currentGrocery, setCurrentGrocery] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChanges = (e) => {
    setCurrentGrocery(e.target.value);
  };

  const addGrocery = () => {
    if (editIndex !== null) {
      const updatedGrocery = grocery.map(())
    }
  };
  return (
    <div className="App">
      <h1>Grocery List CRUD Application</h1>
      <form>
        <input type="text" name="name" placeholder="Enter grocery item" />
        <button type="submit">Add</button>
      </form>
      {/* <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
