import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ECOMANITAS</h3>
            <p className="text-gray-400">
              Servicios profesionales de mantenimiento y reparación a domicilio
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">
              Tel: 653 333 139<br />
              Madrid, España
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horario</h4>
            <p className="text-gray-400">
              Lunes - Viernes: 9:00 - 20:00<br />
              Sábados: 10:00 - 14:00
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EcoManitas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;