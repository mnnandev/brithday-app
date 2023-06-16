import { useState } from "react";
import "./App.css";
import data from "./Data";
import List from "./List";

function App() {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{people?.length} Birthday Today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>clear ALL</button>
            </section>
        </main>
    );
}

export default App;
