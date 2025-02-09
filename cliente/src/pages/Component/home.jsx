import React from 'react';
import Cards from '../../assets/1.png'
import Cards1 from '../../assets/2.png'
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-600">
      <header className="bg-red py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-white text-center text-3xl font-bold">KIKILO</h1>

        </div>
      </header>
      <main className="flex-grow">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Cards})` }}>

          <div className="bg-black bg-opacity-50 h-full flex items-center">
            <div className="container mx-auto text-center text-white">
              <h2 className="text-4xl sm:text-6xl font-bold mb-4">Bienvenidos a Kikilo Pollos</h2>
              <p className="text-lg sm:text-2xl mb-8">Tenemos la mejor calidad en todos nuestros prouctos</p>
              <p className="text-lg sm:text-1xl mb-6">En Kikilo, nos dedicamos a ofrecer la mejor nutricion por parte de produccion avicola dandote una mejor calidad de vida.</p>
              <a href="#productos" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Descubre más</a>
            </div>
          </div>
        </section>
        <section id="productos" className="py-16 bg-red-600" style={{
          backgroundImage: `url(${Cards1})`, backgroundRepeat:'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-red-600 text-center mb-12 bg-gray-100 rounded-lg shadow-lg p-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>Una mirada a Kikilo</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Calidad y Performance</h3>
                <p className="text-gray-600">Nos enfocamos en proporcionar soluciones nutricionales que optimicen tu calidad de alimentacion, asegurando que tu energia y salud esten al maximo.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestro Compromiso</h3>
                <p className="text-gray-600">En Kikilo, nos esforzamos por garantizar la satisfacción de nuestros clientes a través de la innovación constante de opciones y la atención al detalle, preservando la confianza y seguridad de nuestra produccion.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra visión</h3>
                <p className="text-gray-600">La visión de Kikino es ser un referente en el mercado de de alimentos, ofreciendo productos de alta calidad, sostenibles y responsables, que sirvan como modelo para el sector.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Conocenos</h3>
                <p className="text-gray-600">Somos una empresa apasionada por la calidad, comprometida con nuestra visión y misión. Día a día, trabajamos para ofrecer soluciones confiables que hagan una diferencia positiva en la experiencia de nuestros clientes.</p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <footer className="bg-red py-6">
        <div className="container mx-auto text-center text-white">
          <p>Derechos de autor © 2025 Rodrigo Yana Facu. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

