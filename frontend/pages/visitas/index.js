import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link"
import { fetchAPI } from "../../lib/api";
import React from 'react';


export default function Home({visitas}) {

  const [name, setName] = useState('1');

  const router = useRouter();
  visitas[0].attributes.slug = visitas[0].id

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirige a la página /nombre con el valor del nombre como parámetro
    router.push(`visita/${name}`);
  };

  return (
    <div>
      <h2>Ingresa Radicado</h2>
      <form onSubmit={handleSubmit}>
       
        <label htmlFor="name">Radicacion: </label>
        <select name="name" 
          onChange={(e) => setName(e.target.value)}>
          {visitas.map((visita) => (
            <option key={visita.id} value={visita.id}>
              {visita.attributes.vcrradsol} - {visita.attributes.vcrnomati}
            </option>
          ))}
        </select>
        
        <button type="submit">Buscar Visita</button>
        <br />
        <Link href="/visita/nueva"><a>  Crear Nueva Visita  </a></Link>
        
      </form>
    </div>
  )
}


export async function getStaticProps() {
  const [visitas] = await Promise.all([fetchAPI("/visitas", { populate: "*" })]);

  return {
    props: {
      visitas: visitas.data,
    },
    revalidate: 1,
  };
}





