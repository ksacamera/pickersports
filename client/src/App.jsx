// import Router from "./components/Router";
// import NavBar from "./components/bars/Navbar";
// import FooterBar from "./components/bars/FooterBar";
// import { useState } from 'react'
import { useSelector } from "react-redux";
import NameForm from "./NameForm";
import Router from "./components/Router";
// import axios from "axios";

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [changesHappened, setChangesHappened] = useState(false);
  // const count = useSelector((state)=> state.counter.count);
  const username = useSelector((state) => state.userName.name);

  return (
    <>
    <h1>Welcome {username}</h1>
    <NameForm />
    <Router />
      {/* <NavBar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        changesHappened={changesHappened}
        setChangesHappened={setChangesHappened}
      />
      <section id="pageSection">
        <Router
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          changesHappened={changesHappened}
          setChangesHappened={setChangesHappened}
        />
      </section>
      <FooterBar /> */}
    </>
  )
}

export default App
