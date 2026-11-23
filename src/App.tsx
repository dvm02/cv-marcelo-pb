import { useMemo, useState } from "react";
import {
  ambitos,
  aptitudes,
  formacion,
  perfil,
  roles,
  type Ambito,
} from "./data/profile";

type FiltroAmbito = Ambito | "todos";

const grupos = [
  "Inteligencia artificial",
  "Desarrollo",
  "Lenguajes",
  "Datos",
  "Plataformas",
  "Práctica",
  "Ofimática",
] as const;

function etiquetaAmbito(id: Ambito) {
  return ambitos.find((ambito) => ambito.id === id)?.etiqueta ?? id;
}

export function App() {
  const [ambito, setAmbito] = useState<FiltroAmbito>("todos");
  const [aptitudId, setAptitudId] = useState<string | null>(null);
  const [abierto, setAbierto] = useState<string>("cipec-docencia");

  const aptitudActiva = aptitudes.find((item) => item.id === aptitudId) ?? null;

  const visibles = useMemo(
    () =>
      roles.filter((rol) => {
        const coincideAmbito = ambito === "todos" || rol.ambito === ambito;
        const coincideAptitud =
          aptitudId === null || rol.aptitudes.includes(aptitudId);
        return coincideAmbito && coincideAptitud;
      }),
    [ambito, aptitudId],
  );

  const vigentes = roles.filter((rol) => rol.vigente);

  function elegirAptitud(id: string) {
    setAptitudId((actual) => (actual === id ? null : id));
  }

  return (
    <>
      <a className="saltar" href="#contenido">
        Saltar al contenido
      </a>
      <header className="barra">
        <div className="marco barra-fila">
          <a className="marca" href="#inicio" aria-label="Marcelo Peña Bernal">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
          </a>
          <nav className="menu" aria-label="Secciones">
            <a href="#contacto">Contacto</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#aptitudes">Conocimientos</a>
            <a href="#formacion">Formación</a>
          </nav>
          <a className="enlace-perfil" href={perfil.linkedin}>
            LinkedIn
          </a>
        </div>
      </header>

      <main className="marco" id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-copia">
            <p className="lugar">{perfil.lugar}</p>
            <h1>{perfil.nombre}</h1>
            <p className="titular">{perfil.titular}</p>
            <p className="titular-original">{perfil.titularOriginal}</p>
            <ul className="contacto" id="contacto">
              <li>
                <a href={`mailto:${perfil.correo}`}>{perfil.correo}</a>
              </li>
              <li>
                <a href={perfil.celularHref}>{perfil.celular}</a>
              </li>
              <li>
                <a href={perfil.whatsapp}>WhatsApp</a>
              </li>
            </ul>
            <blockquote className="resumen">
              <p>{perfil.resumen}</p>
            </blockquote>
            <ul className="vigentes">
              {vigentes.map((rol) => (
                <li key={rol.id}>
                  <span>{rol.organizacion}</span>
                  <strong>{rol.cargo}</strong>
                  <em>{rol.periodo}</em>
                </li>
              ))}
            </ul>
          </div>
          <figure className="retrato">
            <img src={`${import.meta.env.BASE_URL}foto-perfil.jpg`} alt="Retrato de Marcelo Amed Peña Bernal" />
            <figcaption>Cochabamba · {perfil.experiencia} de experiencia</figcaption>
          </figure>
        </section>

        <section className="seccion" id="trayectoria">
          <div className="seccion-cabeza">
            <p className="indice">01</p>
            <div>
              <h2>Trayectoria</h2>
              <p>Elige un ámbito o una aptitud para ver los cargos que coinciden.</p>
            </div>
          </div>

          <div className="filtros" role="group" aria-label="Filtrar por ámbito">
            <button
              type="button"
              className={ambito === "todos" ? "activo" : ""}
              aria-pressed={ambito === "todos"}
              onClick={() => setAmbito("todos")}
            >
              Todo
            </button>
            {ambitos.map((item) => (
              <button
                key={item.id}
                type="button"
                className={ambito === item.id ? "activo" : ""}
                aria-pressed={ambito === item.id}
                onClick={() => setAmbito(item.id)}
              >
                {item.etiqueta}
              </button>
            ))}
          </div>

          {aptitudActiva && (
            <p className="filtro-activo">
              También limitada a {aptitudActiva.etiqueta}.{" "}
              <button type="button" onClick={() => setAptitudId(null)}>
                Quitar aptitud
              </button>
            </p>
          )}

          <ol className="linea" key={`${ambito}-${aptitudId ?? "todas"}`}>
            {visibles.length === 0 && (
              <li className="vacio">
                Ningún cargo combina ese ámbito y esa aptitud.
              </li>
            )}
            {visibles.map((rol) => {
              const abiertoEste = abierto === rol.id;
              return (
                <li key={rol.id} className={rol.vigente ? "vigente" : ""}>
                  <button
                    type="button"
                    className="cargo"
                    aria-expanded={abiertoEste}
                    onClick={() =>
                      setAbierto((actual) => (actual === rol.id ? "" : rol.id))
                    }
                  >
                    <span className="periodo">{rol.periodo}</span>
                    <span className="cargo-cuerpo">
                      <span className="ambito">{etiquetaAmbito(rol.ambito)}</span>
                      <strong>{rol.cargo}</strong>
                      <span className="org">{rol.organizacion}</span>
                      {rol.lugar.split(" · ").map((parte) => (
                        <span className="meta" key={parte}>
                          {parte}
                        </span>
                      ))}
                    </span>
                    <span className="chevron" aria-hidden="true">
                      {abiertoEste ? "–" : "+"}
                    </span>
                  </button>
                  {abiertoEste && (rol.resumen || rol.detalle.length > 0 || rol.aptitudes.length > 0) && (
                    <div className="detalle">
                      {rol.resumen && <p>{rol.resumen}</p>}
                      {rol.detalle.length > 0 && (
                        <ul>
                          {rol.detalle.map((linea) => (
                            <li key={linea}>{linea}</li>
                          ))}
                        </ul>
                      )}
                      {rol.aptitudes.length > 0 && (
                        <div className="mini-aptitudes">
                          {rol.aptitudes.map((id) => {
                            const pieza = aptitudes.find((item) => item.id === id);
                            if (!pieza) return null;
                            return (
                              <button
                                key={id}
                                type="button"
                                onClick={() => elegirAptitud(id)}
                                aria-pressed={aptitudId === id}
                              >
                                {pieza.etiqueta}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="seccion" id="aptitudes">
          <div className="seccion-cabeza">
            <p className="indice">02</p>
            <div>
              <h2>Conocimientos y aptitudes</h2>
            </div>
          </div>
          <div className="grupos">
            {grupos.map((grupo) => (
              <article key={grupo}>
                <h3>{grupo}</h3>
                <div className="chips">
                  {aptitudes
                    .filter((item) => item.grupo === grupo)
                    .map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={aptitudId === item.id ? "activa" : ""}
                        aria-pressed={aptitudId === item.id}
                        onClick={() => elegirAptitud(item.id)}
                      >
                        {item.etiqueta}
                      </button>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="seccion" id="formacion">
          <div className="seccion-cabeza">
            <p className="indice">03</p>
            <div>
              <h2>Formación</h2>
            </div>
          </div>
          <div className="estudios">
            {formacion.map((estudio) => (
              <article key={estudio.id}>
                <p className="periodo">{estudio.periodo}</p>
                <h3>{estudio.titulo}</h3>
                <p className="detalle-estudio">{estudio.detalle}</p>
                <p className="centro">{estudio.centro}</p>
                <p className="nota">{estudio.nota}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="marco pie">
        <a href={perfil.linkedin}>Ver perfil original</a>
      </footer>
    </>
  );
}
