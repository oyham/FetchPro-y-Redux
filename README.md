# Render as You Fetch

## FetchPro + Redux

La aplicación se _re-renderizará_ una vez que se hayan obtenido los datos utilizando `Suspense`. Además, la solicitud se realiza fuera del componente y también fuera de cualquier hook `useEffect` para evitar renderizaciones innecesarias, como las conocidas tradicionalmente.

- Se logró combinar satisfactoriamente la petición fetchPro con Redux.
- Componente Form que controla los valores de los datos realizados con la petición fetchData.
