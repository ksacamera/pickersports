import pickerbanner from "./images/pickerbanner.png";

const Home = () => {
  return (
    <>
      <img
        src={pickerbanner}
        alt="Picker Banner"
        style={{ width: "350px", height: "auto" }}
      />
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
