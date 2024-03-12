import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Container from "./component/Container";
import Empty from "./component/Empty";
import Emojis from "./component/Emojis";

function App() {
  const [emojisData, setEmojisData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631"
        );
        setEmojisData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Hello, world!</h1>

        {loading && <Empty text="Loading..." />}
        {error && <Empty text="Oppsss..." />}
        {emojisData.length > 0 && <Emojis emojisData={emojisData} />}
      </Container>
    </>
  );
}

export default App;
