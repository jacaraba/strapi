import { useState } from 'react';
import { fetchAPI } from "../../lib/api"

const Formulario = ({ data }) => {

  const [formData, setFormData] = useState({
    id: data[0].id,
    vcrradsol: data[0].attributes.vcrradsol,
    vcrnomati: data[0].attributes.vcrnomati,
    vcrdir: data[0].attributes.vcrdir,
  })

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:1337/api/visitas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      })

      if (response.ok) {
        console.log("¡Solicitud POST enviada con éxito!")
        // Realiza alguna acción adicional después de enviar la solicitud POST
      } else {
        console.log("Error al enviar la solicitud POST")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <div>{data.map((item) => { 
      return  <>
              <p key={item}>{item.attributes.vcrradsol}</p>
              <p key={item}>{item.attributes.vcrnomati}</p>
              </>
    })}</div>  
  )
}

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