const sideBarFiltros = () => {
  <div
    style={{
      width: "250px",
      backgroundColor: "#f0f0f0",
      padding: "20px",
      borderRadius: "12px",
    }}
  >
    <h3>Zonas</h3>
    <div>
      <label>
        <input type="radio" name="zona" /> San Antonio de Padua
      </label>
      <br />
      <label>
        <input type="radio" name="zona" /> Pilar
      </label>
    </div>
    <h3>Precios</h3>
    <div>
      <label>
        <input type="radio" name="precio" /> $15.000
      </label>
      <br />
      <label>
        <input type="radio" name="precio" /> $18.500
      </label>
      <br />
      <label>
        <input type="radio" name="precio" /> $20.000
      </label>
    </div>
    <h3>Medidas</h3>
    <div>
      <label>
        <input type="radio" name="medida" /> 30x100
      </label>
      <br />
      <label>
        <input type="radio" name="medida" /> 60x200
      </label>
    </div>
  </div>;
};

export default sideBarFiltros;
