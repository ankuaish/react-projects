import "./App.css";

function App() {
  return (
    <>
      <address id="address">Girivilas Palace Sarangarh</address>
      <br />
      <div className="responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.061108139147!2d83.07454437432263!3d21.583537668495023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26fb32f254647d%3A0xb1e75c6795d601d1!2sGirivilas%20Palace%2C%20Sarangarh!5e0!3m2!1sen!2sin!4v1719423381813!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default App;
