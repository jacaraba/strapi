import { fetchAPI } from "../../lib/api";
import Link from "next/link"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const handleFormSubmit = async (values) => {

  /* try {
    const visitas = await fetch(`http://localhost:1337/api/visitas/${values.slug}`, {
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
  } */
 
  // alert(JSON.stringify(values, null, 2));

};

const SignupForm = ({visitas}) => {

  visitas[0].attributes.slug = visitas[0].id

  return (
    <>
      <Formik
        initialValues={visitas[0].attributes}
        validationSchema={Yup.object({
          vcrradsol: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          vcrnomati: Yup.string()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Requerido"),
        })}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{ backgroundColor: "lightblue", padding: "20px" }}
          >
            <label htmlFor="vcrradsol">Radicacion: </label>
            <Field name="slug" as="select" className="my-select">
              {visitas.map((visita) => (
                <option value={visita.id}>
                  {visita.id} - {visita.attributes.vcrradsol} -{" "}
                  {visita.attributes.vcrnomati}
                </option>
              ))}
            </Field>

            <br />
            <button type="submit" disabled={formik.isSubmitting}>
              Enviar
            </button>
           
          </form>
        )}
      </Formik>
    </>
  )
};

export async function getStaticProps() {
  const [visitas] = await Promise.all([fetchAPI("/visitas", { populate: "*" })]);

  return {
    props: {
      visitas: visitas.data,
    },
    revalidate: 1,
  };
}

export default SignupForm;



