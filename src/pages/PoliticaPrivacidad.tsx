import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Información General</h2>
              <p>
                En cumplimiento de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos 
                Personales y garantía de los derechos digitales (LOPD GDD) y del Reglamento (UE) 2016/679 
                del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD), le informamos sobre 
                el tratamiento de sus datos personales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Responsable del Tratamiento</h2>
              <p>
                <strong>Responsable:</strong> [Nombre de la empresa/organización]<br/>
                <strong>CIF/NIF:</strong> [Número de identificación]<br/>
                <strong>Dirección:</strong> [Dirección completa]<br/>
                <strong>Teléfono:</strong> [Número de teléfono]<br/>
                <strong>Email:</strong> [Correo electrónico de contacto]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Finalidades del Tratamiento</h2>
              <p>Los datos personales que recabamos se utilizan para las siguientes finalidades:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestión de consultas y solicitudes de información médica</li>
                <li>Prestación de servicios de cardiología y dispositivos médicos</li>
                <li>Comunicación con pacientes y profesionales sanitarios</li>
                <li>Cumplimiento de obligaciones legales y sanitarias</li>
                <li>Mejora de nuestros servicios médicos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Base Legal</h2>
              <p>
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consentimiento del interesado (Art. 6.1.a RGPD)</li>
                <li>Ejecución de un contrato o aplicación de medidas precontractuales (Art. 6.1.b RGPD)</li>
                <li>Cumplimiento de obligaciones legales (Art. 6.1.c RGPD)</li>
                <li>Interés legítimo del responsable (Art. 6.1.f RGPD)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Conservación de Datos</h2>
              <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con las 
                finalidades para las que fueron recabados y, en todo caso, durante los plazos establecidos 
                por la legislación aplicable. En el ámbito sanitario, se aplicarán los plazos establecidos 
                en la normativa específica.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Destinatarios de los Datos</h2>
              <p>
                Sus datos personales no serán comunicados a terceros, salvo en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cuando sea necesario para la prestación del servicio médico solicitado</li>
                <li>Cuando exista una obligación legal</li>
                <li>Cuando haya prestado su consentimiento expreso</li>
                <li>A proveedores de servicios que actúen como encargados del tratamiento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Derechos del Interesado</h2>
              <p>Tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> Obtener información sobre si estamos tratando sus datos</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Revocación:</strong> Retirar el consentimiento prestado</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puede contactarnos a través de [email de contacto] 
                acompañando copia de su documento de identidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Medidas de Seguridad</h2>
              <p>
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la 
                seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o 
                acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza 
                de los datos y los riesgos del tratamiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Reclamaciones</h2>
              <p>
                Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, 
                podrá presentar una reclamación ante la Agencia Española de Protección de Datos 
                (www.aepd.es).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Cookies</h2>
              <p>
                Este sitio web utiliza cookies técnicas necesarias para su funcionamiento. 
                Para más información, consulte nuestra política de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">11. Modificaciones</h2>
              <p>
                Esta política de privacidad puede ser modificada. Le recomendamos revisarla 
                periódicamente. La fecha de la última actualización se indica al final de este documento.
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

export default PoliticaPrivacidad;