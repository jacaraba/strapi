import { useState } from 'react';
import { fetchAPI } from "../../lib/api";

const Formulario = ({ data }) => {
  const [formData, setFormData] = useState({
    id: data[0].id,
    vcrradsol: data[0].attributes.vcrradsol,
    vcrnomati: data[0].attributes.vcrnomati,
    vcrdir: data[0].attributes.vcrdir,
  });

  const handleChange = (e) => {
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
      const response = await fetch('http://localhost:1337/api/visitas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      if (response.ok) {
        console.log('¡Solicitud POST enviada con éxito!');
        // Realiza alguna acción adicional después de enviar la solicitud POST
      } else {
        console.log('Error al enviar la solicitud POST');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <select onChange={handleChange}>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>

      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={formData.id} readOnly />
        </label>
        <label>
          VCRRADSOL:
          <input type="text" name="vcrradsol" value={formData.vcrradsol} readOnly />
        </label>
        <label>
          VCRNOMATI:
          <input type="text" name="vcrnomati" value={formData.vcrnomati} readOnly />
        </label>
        <label>
          VCRDIR:
          <input type="text" name="vcrdir" value={formData.vcrdir} readOnly />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
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