# Solicitudes y catálogo domiciliario

## Estado (27/10/2026)
- La ruta `/solicitar-atencion` prepara un mensaje de WhatsApp con nombre de contacto, localidad, modalidad y servicio.
- La información del formulario **no se guarda** ni se envía a un servidor de Acompañar Salud. El usuario decide si envía el mensaje por WhatsApp.
- No se solicitan diagnósticos, recetas, DNI ni otra información clínica en el formulario público.
- El catálogo de servicios vive en `src/app/features/servicios/catalogo-domiciliario.ts`.
- El archivo `database/esquema-inicial.sql` es solo la base de diseño para MySQL: **no está desplegado ni conectado**.

## Para habilitar solicitudes almacenadas
1. Confirmar con el responsable qué servicios están disponibles y el alcance geográfico.
2. Acordar política de privacidad, consentimiento informado, retención y permisos de acceso.
3. Implementar backend HTTPS privado con autenticación administrativa, validación, controles antispam y auditoría.
4. Configurar MySQL mediante variables de entorno **solo en el servidor**; jamás colocar usuario/contraseña de MySQL en Angular.
5. Validar y probar el flujo completo antes de solicitar o almacenar datos personales. La información médica necesita medidas adicionales y no corresponde a este formulario inicial.

## Revisión
El diseño de páginas se ha editado en GitHub. Quedan pendientes una compilación CI y una prueba manual en dispositivos.
