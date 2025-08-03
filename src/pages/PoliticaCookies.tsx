import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
                visita nuestro sitio web. Nos permiten reconocer su dispositivo y recordar información 
                sobre su visita, como sus preferencias de idioma y otras configuraciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">¿Qué tipos de cookies utilizamos?</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">Cookies Técnicas (Necesarias)</h3>
              <p>
                Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser 
                desactivadas en nuestros sistemas. Generalmente solo se configuran en respuesta a 
                acciones realizadas por usted, como establecer sus preferencias de privacidad, 
                iniciar sesión o completar formularios.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">Cookies de Funcionalidad</h3>
              <p>
                Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización 
                mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos 
                servicios hemos agregado a nuestras páginas.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">Cookies de Rendimiento</h3>
              <p>
                Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir 
                y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las 
                más y las menos populares y a ver cómo se mueven los visitantes por el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies específicas que utilizamos</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Nombre</th>
                      <th className="border border-border p-3 text-left">Tipo</th>
                      <th className="border border-border p-3 text-left">Duración</th>
                      <th className="border border-border p-3 text-left">Propósito</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">session_id</td>
                      <td className="border border-border p-3">Técnica</td>
                      <td className="border border-border p-3">Sesión</td>
                      <td className="border border-border p-3">Identificar la sesión del usuario</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">preferences</td>
                      <td className="border border-border p-3">Funcionalidad</td>
                      <td className="border border-border p-3">1 año</td>
                      <td className="border border-border p-3">Recordar preferencias del usuario</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">analytics</td>
                      <td className="border border-border p-3">Rendimiento</td>
                      <td className="border border-border p-3">2 años</td>
                      <td className="border border-border p-3">Analizar el uso del sitio web</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cookies de terceros</h2>
              <p>
                Nuestro sitio web puede utilizar servicios de terceros que establecen sus propias cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web</li>
                <li><strong>Redes sociales:</strong> Para integrar contenido de redes sociales</li>
                <li><strong>Mapas:</strong> Para mostrar ubicaciones y mapas interactivos</li>
              </ul>
              <p className="mt-4">
                Estas cookies están sujetas a las políticas de privacidad de sus respectivos proveedores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">¿Cómo gestionar las cookies?</h2>
              <p>
                Puede controlar y gestionar las cookies de varias maneras:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">Configuración del navegador</h3>
              <p>
                La mayoría de los navegadores web le permiten controlar las cookies a través de 
                su configuración de privacidad. Puede configurar su navegador para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Rechazar todas las cookies</li>
                <li>Permitir solo cookies de primeros</li>
                <li>Eliminar cookies cuando cierre el navegador</li>
                <li>Bloquear cookies de sitios específicos</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-primary">Enlaces de configuración por navegador</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Internet Explorer</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Consecuencias de deshabilitar cookies</h2>
              <p>
                Si deshabilita las cookies, algunas funciones de nuestro sitio web pueden no 
                funcionar correctamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No podremos recordar sus preferencias</li>
                <li>Algunas páginas pueden no cargarse correctamente</li>
                <li>Ciertos servicios pueden no estar disponibles</li>
                <li>La experiencia de usuario puede verse afectada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Consentimiento</h2>
              <p>
                Al continuar navegando por nuestro sitio web, acepta el uso de cookies de acuerdo 
                con esta política. Si no está de acuerdo con el uso de cookies, debe configurar 
                su navegador para rechazarlas o abandonar el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contacto</h2>
              <p>
                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> dismedal@dismedal.com</li>
                <li><strong>Teléfono:</strong> +34 690 639 648</li>
                <li><strong>Dirección:</strong> Paseo de Gracia 21, Principal, 08007 Barcelona, España</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Actualizaciones</h2>
              <p>
                Esta política de cookies puede ser actualizada ocasionalmente. Le recomendamos 
                revisarla periódicamente para estar informado sobre cómo utilizamos las cookies.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaCookies;