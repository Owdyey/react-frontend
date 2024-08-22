import { useState, useEffect } from "react";
import api from "../api";
import Item from "../components/Item";
import "../styles/Home.css";
import DeleteButton from "../components/DeleteButton";

function Home() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [update, setUpdate] = useState(false);
  const getItems = async () => {
    try {
      const res = await api.get("/api/items");
      if (res.status === 200) {
        setItems(res.data);
      }
    } catch (err) {
      alert(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      const res = await api.delete(`/api/items/${id}`);
      if (res.status === 200) {
        alert("Item Deleted");
      }
    } catch (err) {
      alert(err);
    }
  };

  const createItem = async () => {
    try {
      const res = await api.post("/api/items", { name, description, price });
      if (res.status === 200) {
        alert("Item Created");
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <nav>
        <h3>Logo</h3>
        <a href="/logout">Logout</a>
      </nav>
      <div className="home-layout">
        <div className="pane">
          <div>
            <h2 className="text-center">Items</h2>
            <div>
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="item">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Description: {item.description}</p>
                    <DeleteButton id={item.id} />
                    <button>Update</button>
                  </div>
                ))
              ) : (
                <p>No items available.</p>
              )}
            </div>

            {console.log(items)}
          </div>
        </div>
        <div className="pane">
          <h2 className="text-center">Create an Item</h2>
          <form onSubmit={createItem}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label htmlFor="price">Price:</label>
            <br />
            <input
              type="text"
              id="price"
              name="price"
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <label htmlFor="description">Content:</label>
            <br />
            <textarea
              id="description"
              name="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
