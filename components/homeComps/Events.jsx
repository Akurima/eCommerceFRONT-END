import eventos from "../../events.json";
import "../../src/style/Eventos.css";

const EventAgenda = () => {
  return (
    <div className="event-agenda py-5">
      <div className="container text-center">
        <h2 className="mb-4 agenda-title">📅 Próximos Eventos</h2>
        <div className="row justify-content-center">
          {eventos.map((evento, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="event-card p-4 shadow-sm">
                <h5 className="event-title">{evento.titulo}</h5>
                <p className="event-date"><strong>Fecha:</strong> {evento.fecha}</p>
                <p className="event-place"><strong>Lugar:</strong> {evento.lugar}</p>
                <p className="event-desc">{evento.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAgenda;
