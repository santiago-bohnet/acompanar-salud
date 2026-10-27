-- Esquema inicial para un futuro backend privado de Acompañar Salud.
-- NO se conecta directamente a GitHub Pages ni se usa todavía en producción.
-- No almacenar diagnósticos, medicación, DNI, historias clínicas o recetas aquí.
CREATE DATABASE IF NOT EXISTS acompanar_salud
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE acompanar_salud;

CREATE TABLE IF NOT EXISTS servicios (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(130) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  descripcion TEXT,
  activo BOOLEAN NOT NULL DEFAULT TRUE,
  creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_servicio_categoria (nombre, categoria),
  INDEX idx_servicios_activos (activo, categoria)
) ENGINE=InnoDB;

-- Datos de contacto de una consulta administrativa, solo tras consentimiento explícito.
-- Requiere API autenticada, validación del servidor, controles de acceso,
-- protección antispam, política de privacidad y mecanismo de eliminación antes de usarse.
CREATE TABLE IF NOT EXISTS consultas_administrativas (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre_contacto VARCHAR(90) NOT NULL,
  localidad VARCHAR(100) NOT NULL,
  modalidad ENUM('Domicilio','Consultorio') NOT NULL,
  servicio_id BIGINT UNSIGNED NULL,
  estado ENUM('pendiente','en_revision','cerrada') NOT NULL DEFAULT 'pendiente',
  consentimiento_en TIMESTAMP NOT NULL,
  creada_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_consultas_estado_fecha (estado, creada_en),
  CONSTRAINT fk_consultas_servicio FOREIGN KEY (servicio_id)
    REFERENCES servicios(id) ON DELETE SET NULL
) ENGINE=InnoDB;
