import { useState } from 'react';
import { fetchAPI } from "../../lib/api";

const Formulario = ({ visitas, barrios }) => {
  const [formData, setFormData] = useState({
    id: visitas[0].id,
    vcrradsol: visitas[0].attributes.vcrradsol,
    vcrnomati: visitas[0].attributes.vcrnomati,
    vcrdir: visitas[0].attributes.vcrdir,
    vcrbarrio: visitas[0].attributes.barrio.data.attributes.VcrIdBarVE,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeRegistro = (e) => {
    const selectedData = visitas.find(item => item.id == e.target.value);
    
    setFormData(selectedData.attributes);
    setFormData(prevData => ({
      ...prevData,
      id: selectedData.id
    }));
    setFormData(prevData => ({
      ...prevData,
      vcrbarrio: selectedData.attributes.barrio.data.attributes.VcrIdBarVE
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const visitas = await fetch(`http://localhost:1337/api/visitas/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ visitas: formData }),
      });
      if (visitas.ok) {
        console.log('¡Solicitud PUT enviada con éxito!');
        // Realiza alguna acción adicional después de enviar la solicitud PUT
      } else {
        console.log('Error al enviar la solicitud PUT');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <select onChange={handleChangeRegistro}>
          {visitas.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}-{item.attributes.vcrnomati}
            </option>
          ))}
        </select>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            ID:
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
            <br />
          </label>
          <label>
            VCRRADSOL:
            <input
              type="text"
              name="vcrradsol"
              value={formData.vcrradsol}
              onChange={handleChange}
            />
          </label>
          <label>
            VCRNOMATI:
            <input
              type="text"
              name="vcrnomati"
              value={formData.vcrnomati}
              onChange={handleChange}
            />
          </label>
          <label>
            VCRDIR:
            <input
              type="text"
              name="vcrdir"
              value={formData.vcrdir}
              onChange={handleChange}
            />
          </label>
          <label>
            VCRBAR:
            <select id="vcrbarrio" name="vcrbarrio" >
              {barrios.map((opcion, index) => (
                <option key={index} value={opcion}>
                  {opcion}
                </option>
              ))}
            </select>
            
          </label>
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </>
  )
};

export async function getStaticProps() {
  const [visitas, barrios ] = await Promise.all(
    [fetchAPI("/visitas", { populate: "*" })],
    [fetchAPI("/barrios", { populate: "*" })]
    )

  return {
    props: {
      visitas: visitas.data,
      barrios: barrios.data,
    },
    revalidate: 1,
  };
}

export default Formulario;