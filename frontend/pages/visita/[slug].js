import { fetchAPI } from "../../lib/api";
import React from 'react';
import Link from "next/link"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const handleFormSubmit = async (values) => {

  values.barrio = [values.barrio];

  try {
    const visitas = await fetch(`http://localhost:1337/api/visitas/${values.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: values }),
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

  alert(JSON.stringify(values, null, 2));

};

const SignupForm = ({ visitas, barrios }) => {
  
  const barrionuevo = JSON.parse(JSON.stringify(visitas));
  delete barrionuevo.attributes.barrio
  barrionuevo.attributes.id = visitas.id
  barrionuevo.attributes.barrio = visitas.attributes.barrio.data.id;

/* 
 console.log(JSON.stringify(barrionuevo, null, 2));   
 console.log(JSON.stringify(visitas.attributes.barrio.data, null, 2));  
 console.log(visitas.attributes.barrio.data.id); */


  return (
    <Formik
      initialValues={barrionuevo.attributes}
      validationSchema={Yup.object({
        vcrradsol: Yup.string()
          .max(15, 'Debe tener 15 caracteres o menos')
          .required('Requerido'),
        vcrnomati: Yup.string()
          .max(50, 'Debe tener 20 caracteres o menos')
          .required('Requerido'),
      })}
      onSubmit={(values) => handleFormSubmit(values)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} style={{ backgroundColor: 'lightblue', padding: '20px' }}>
          {/* <label htmlFor="id">Id: </label>
          <input
            id="id"
            type="text"
            {...formik.getFieldProps('id')}
          />
          {formik.touched.id && formik.errors.id ? (
            <div>{formik.errors.id}</div>
          ) : null}<br /> */}
          <label htmlFor="vcrradsol">Radicado: </label>
          <input
            id="vcrradsol"
            type="text"
            {...formik.getFieldProps('vcrradsol')}
          />
          {formik.touched.vcrradsol && formik.errors.vcrradsol ? (
            <div>{formik.errors.vcrradsol}</div>
          ) : null}<br />
          <label htmlFor="vcrnomati">Nombre: </label>
          <input
            id="vcrnomati"
            type="text"
            {...formik.getFieldProps('vcrnomati')}
          />
          {formik.touched.vcrnomati && formik.errors.vcrnomati ? (
            <div>{formik.errors.vcrnomati}</div>
          ) : null}<br />
          <label htmlFor="barrio">Barrio: </label>
          <Field name="barrio" as="select" className="my-select">          
            {barrios.map((barrio) => (
              <option key={barrio.id} value={barrio.id}>
                {barrio.attributes.VcrBarVer}
              </option>
            ))}
          </Field>
          <br />
          <button type="submit" disabled={formik.isSubmitting}> Modificar </button>
          <Link href="/visitas"><a>  Cancelar  </a></Link>

        </form>
      )}
    </Formik>
  );
};


export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/visitas", { fields: ["id"] })

  return {
    paths: categoriesRes.data.map((visita) => ({
      params: {
        slug: visita.id.toString(10),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [visitas, barrios ] = await Promise.all([
    fetchAPI("/visitas", { populate: "*", filters: { id: params.slug}}),
    fetchAPI("/barrios", { populate: "*", pagination: { start: 0, limit: 500 }, sort: ['VcrBarVer']})
  ]);

  return {
    props: {
      visitas: visitas.data[0],
      barrios: barrios.data
    },
    revalidate: 1,
  };
}

export default SignupForm;