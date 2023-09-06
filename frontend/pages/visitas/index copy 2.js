import { useState } from 'react';
import { fetchAPI } from "../../lib/api"

const Formulario = ({ data }) => {
  const [formData, setFormData] = useState({
    id: data.id,
    vcrradsol: data.attributes.vcrradsol,
    vcrnomati: data.attributes.vcrnomati,
    vcrdir: data.attributes.vcrdir,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">id:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
        <label htmlFor="vcrradsol">vcrradsol:</label>
        <input
          type="text"
          id="vcrradsol"
          name="vcrradsol"
          value={formData.vcrradsol}
          onChange={handleChange}
        />
        <label htmlFor="vcrnomati">Nombre:</label>
        <input
          type="text"
          id="vcrnomati"
          name="vcrnomati"
          value={formData.vcrnomati}
          onChange={handleChange}
        />
        <label htmlFor="vcrdir">Dirección:</label>
        <input
          type="text"
          id="vcrdir"
          name="vcrdir"
          value={formData.vcrdir}
          onChange={handleChange}
        />
        {/* Agrega aquí otros campos del formulario según tus necesidades */}
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
    }
    ,
    revalidate: 1,
  };
}

export default Formulario;