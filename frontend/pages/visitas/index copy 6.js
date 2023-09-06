import { useState } from 'react';
import { fetchAPI } from "../../lib/api";

const Formulario = ({ data }) => {
  const [formData, setFormData] = useState({
    id: data[0].id,
    vcrradsol: data[0].attributes.vcrradsol,
    vcrnomati: data[0].attributes.vcrnomati,
    vcrdir: data[0].attributes.vcrdir,
    vcrbarrio: data[0].attributes.barrio.data.attributes.VcrIdBarVE,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange2 = (e) => {
    const selectedData = data.find(item => item.id == e.target.value);
    console.log(selectedData)    
    setFormData(selectedData.attributes);
    setFormData(prevData => ({
      ...prevData,
      id: selectedData.id
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:1337/api/visitas/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      if (response.ok) {
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
        <select onChange={handleChange2}>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}-{item.attributes.vcrnomati}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <label key={key}>
              {key.toUpperCase()}:
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </label>
          ))}
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </>
  )
};

export async function getStaticProps() {
  const response = await fetchAPI("/visitas", { populate: "*" });
  return {
    props: {
      data: response.data,
    },
    revalidate: 1,
  };
}

export default Formulario;