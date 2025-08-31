import React, { useState } from 'react';
import { 
  Calendar, 
  BookOpen, 
  Users, 
  Cog, 
  AlertTriangle, 
  CheckCircle,
  Search,
  ChevronDown,
  ChevronRight,
  Code,
  Target,
  Shield,
  Clock,
  Lightbulb,
  Zap,
  UserCheck,
  Settings,
  FileText,
  Play,
  Pause,
  Heart,
  Award
} from 'lucide-react';

interface WeekContent {
  week: number;
  date: string;
  title: string;
  icon: React.ReactNode;
  content: Section[];
  available: boolean;
}

interface Section {
  title: string;
  content: string | SubSection[];
  type: 'text' | 'sections';
}

interface SubSection {
  title: string;
  content: string;
}

const weekData: WeekContent[] = [
  {
    week: 1,
    date: "19/5",
    title: "¿Qué es Ingeniería de Software?",
    icon: <BookOpen className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Definición Principal",
        type: "text",
        content: "La ingeniería de software es la aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software. Según el IEEE, se trata de aplicar principios y métodos de ingeniería para crear software de calidad."
      },
      {
        title: "Deuda Técnica",
        type: "sections",
        content: [
          {
            title: "Concepto Clave",
            content: "La deuda técnica es el costo asociado al retrabajo adicional causado por elegir la solución más rápida en lugar de la más efectiva. Término acuñado por Ward Cunningham en 1992."
          },
          {
            title: "Tipos de Deuda Técnica",
            content: "• Prudente y deliberada: Decisión consciente de entregar rápido\n• Imprudente y deliberada: Priorizar velocidad sobre calidad\n• Prudente e inadvertida: Encontrar mejor solución después\n• Imprudente e inadvertida: Falta de conocimiento necesario"
          },
          {
            title: "Datos del Estudio Stripe-Harris Poll (2018)",
            content: "Los desarrolladores dedican el 42% de su tiempo a lidiar con deuda técnica y mantenimiento (18 de 41 horas semanales). Solo el 32% del tiempo se dedica a desarrollar nuevas funcionalidades."
          }
        ]
      },
      {
        title: "Historia de la Ingeniería de Software",
        type: "sections",
        content: [
          {
            title: "Contexto Histórico",
            content: "A diferencia de disciplinas como medicina o ingeniería civil, la computación no alcanza un siglo de antigüedad. Sus metodologías aún están en desarrollo y ha mostrado una evolución vertiginosa."
          },
          {
            title: "Evolución Cronológica",
            content: "• 1930s: Cimientos de la programación\n• 1940s: ENIAC y desarrollo del transistor\n• 1950s: Primeros lenguajes (Fortran, COBOL)\n• 1960s: IBM 360 y nacimiento formal de la ingeniería de software"
          },
          {
            title: "Crisis del Software (1960-1970)",
            content: "Proyectos fallidos, software defectuoso, sobrecostos de 2-3 veces el presupuesto, mantenimiento costoso y sistemas poco confiables llevaron a la necesidad de sistematización."
          }
        ]
      },
      {
        title: "Importancia y Objetivos",
        type: "sections",
        content: [
          {
            title: "Por qué es Importante",
            content: "El software es omnipresente en la vida moderna. Fallos pueden ser catastróficos: bugs en apps bancarias, fallos en sistemas médicos, errores que causan caos a gran escala."
          },
          {
            title: "Objetivos del Software",
            content: "1. Software Funcional\n2. Rápido y Económico\n3. Mantenimiento Fácil\n4. Gestión de Riesgos\n5. Cliente Satisfecho\n6. Reutilización de Código\n7. Cumplimiento de Normas\n8. Usabilidad Fácil"
          }
        ]
      },
      {
        title: "Código de Ética IEEE/ACM",
        type: "sections",
        content: [
          {
            title: "8 Principios Fundamentales",
            content: "1. PÚBLICO: Actuar en beneficio de la sociedad\n2. CLIENTE Y EMPLEADOR: Lealtad con límites éticos\n3. PRODUCTO: Excelencia técnica obligatoria\n4. JUICIO: Integridad en decisiones\n5. GESTIÓN: Liderazgo ético\n6. PROFESIÓN: Dignidad profesional\n7. COLEGAS: Respeto y colaboración\n8. APRENDIZAJE CONTINUO: Actualización constante"
          }
        ]
      }
    ]
  },
  {
    week: 2,
    date: "26/5",
    title: "Gestión de Proyectos de Software",
    icon: <Users className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Gestión de Proyectos",
        type: "sections",
        content: [
          {
            title: "Definición",
            content: "Proceso de planificar, organizar, dirigir y controlar recursos y actividades para desarrollar software dentro de plazo, presupuesto y requisitos de calidad establecidos."
          },
          {
            title: "Fases Clave",
            content: "• Inicio: Definición y stakeholders\n• Planificación: Cronograma y recursos\n• Ejecución: Desarrollo según plan\n• Monitoreo y Control: Seguimiento\n• Cierre: Entrega y evaluación"
          },
          {
            title: "Áreas de Conocimiento PMI",
            content: "Alcance, Tiempo, Costos, Calidad, Riesgos, Recursos Humanos, Comunicación, Stakeholders, Integración"
          }
        ]
      },
      {
        title: "Requerimientos",
        type: "sections",
        content: [
          {
            title: "Definición",
            content: "Declaraciones de lo que el sistema debe hacer, cómo debe comportarse, qué propiedades debe exhibir y qué restricciones debe satisfacer."
          },
          {
            title: "Tipos de Requerimientos",
            content: "• FUNCIONALES: Qué debe hacer el sistema (obligatorios)\n• NO FUNCIONALES: Cómo debe funcionar (rendimiento, seguridad, usabilidad)"
          },
          {
            title: "Proceso de Gestión",
            content: "1. Elicitación: Descubrir mediante entrevistas\n2. Análisis: Evaluar factibilidad\n3. Especificación: Documentación clara\n4. Validación: Verificar corrección\n5. Gestión de cambios: Proceso controlado"
          }
        ]
      },
      {
        title: "Stakeholders",
        type: "sections",
        content: [
          {
            title: "Definición",
            content: "Individuos, grupos u organizaciones con interés directo o indirecto en el éxito del proyecto."
          },
          {
            title: "Tipos Principales",
            content: "• Clientes/Usuarios Finales (Influencia Alta)\n• Patrocinadores (Influencia Muy Alta)\n• Equipo de Desarrollo (Influencia Media-Alta)\n• Reguladores (Influencia Crítica)\n• Proveedores/Terceros (Influencia Media)"
          }
        ]
      },
      {
        title: "Estimación y Planificación",
        type: "sections",
        content: [
          {
            title: "Técnicas de Estimación",
            content: "• Por Analogía: Comparar con proyectos similares\n• Paramétrica: Modelos matemáticos\n• Tres Puntos (PERT): Optimista, Probable, Pesimista\n• Descomposición: Dividir en tareas pequeñas\n• Delphi: Consulta anónima a expertos"
          },
          {
            title: "Método MoSCoW",
            content: "• Must have (M): Críticos e imprescindibles\n• Should have (S): Importantes pero no críticas\n• Could have (C): Deseables pero prescindibles\n• Won't have (W): Exclusión explícita"
          }
        ]
      },
      {
        title: "Equipos y Seguimiento",
        type: "sections",
        content: [
          {
            title: "Tipos de Equipos",
            content: "• Funcionales: Mismo departamento\n• Multifuncionales: Distintas áreas\n• Autogestionados: Sin jerarquía rígida\n• Remotos: Ubicaciones distintas\n• De proyecto: Temporales"
          },
          {
            title: "Herramientas de Control",
            content: "• Tableros Kanban: Visualización del flujo\n• Dashboards: KPIs en tiempo real\n• Definition of Done: Criterios de completitud\n• Revisiones de Código: Calidad y conocimiento compartido"
          }
        ]
      }
    ]
  },
  {
    week: 3,
    date: "2/6",
    title: "Metodologías de Desarrollo",
    icon: <Cog className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Ciclo de Vida del Software (SDLC)",
        type: "sections",
        content: [
          {
            title: "Definición y Objetivos",
            content: "Proceso estructurado que describe etapas desde concepción hasta retiro del sistema. Objetivos: producir software de calidad, minimizar riesgos, mejorar eficiencia, facilitar comunicación."
          },
          {
            title: "Fases del SDLC",
            content: "1. Análisis de Requerimientos\n2. Diseño del Sistema\n3. Implementación/Codificación\n4. Pruebas\n5. Despliegue\n6. Mantenimiento (Correctivo, Adaptativo, Perfectivo, Preventivo)"
          }
        ]
      },
      {
        title: "Metodologías Tradicionales",
        type: "sections",
        content: [
          {
            title: "Características Generales",
            content: "Enfoque secuencial, documentación exhaustiva, planificación detallada, cambios controlados, roles definidos, énfasis en procesos."
          },
          {
            title: "Modelo en Cascada",
            content: "VENTAJAS: Simple, fases claras, documentación completa\nDESVENTAJAS: Poca flexibilidad, detección tardía de errores, no permite iteraciones"
          },
          {
            title: "Modelo en V",
            content: "VENTAJAS: Mayor enfoque en calidad, detección temprana de defectos\nDESVENTAJAS: Rigidez, costoso implementar cambios"
          },
          {
            title: "Modelo en Espiral",
            content: "VENTAJAS: Gestión efectiva de riesgos, flexibilidad\nDESVENTAJAS: Complejidad en gestión, requiere experiencia"
          },
          {
            title: "Modelo de Prototipado",
            content: "VENTAJAS: Validación temprana, clarificación de requerimientos\nDESVENTAJAS: Expectativas irreales, documentación insuficiente"
          }
        ]
      },
      {
        title: "Metodologías Ágiles",
        type: "sections",
        content: [
          {
            title: "Manifiesto Ágil (2001)",
            content: "VALORES:\n• Individuos e interacciones > procesos y herramientas\n• Software funcionando > documentación extensiva\n• Colaboración con cliente > negociación contractual\n• Respuesta al cambio > seguir un plan"
          },
          {
            title: "SCRUM",
            content: "CARACTERÍSTICAS: Sprints 1-4 semanas, roles definidos (PO, SM, Dev Team)\nVENTAJAS: Alta flexibilidad, entrega frecuente, transparencia\nDESVENTAJAS: Requiere compromiso, difícil escalar"
          },
          {
            title: "KANBAN",
            content: "CARACTERÍSTICAS: Flujo continuo, tableros visuales, límites WIP\nVENTAJAS: Máxima flexibilidad, visualización clara\nDESVENTAJAS: Sin fechas límite, requiere autodisciplina"
          },
          {
            title: "Extreme Programming (XP)",
            content: "CARACTERÍSTICAS: Programación en parejas, TDD, integración continua\nVENTAJAS: Alta calidad código, reducción bugs\nDESVENTAJAS: Muy exigente, dependiente del cliente"
          },
          {
            title: "Design Sprint (Google Ventures)",
            content: "PROCESO 5 DÍAS:\n• Lunes - Map: Definir problema\n• Martes - Sketch: Generar soluciones\n• Miércoles - Decide: Seleccionar ideas\n• Jueves - Prototype: Construir prototipo\n• Viernes - Test: Probar con usuarios"
          }
        ]
      }
    ]
  },
  {
    week: 4,
    date: "9/6",
    title: "Gestores de Incidencias",
    icon: <AlertTriangle className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Definición y Concepto",
        type: "sections",
        content: [
          {
            title: "¿Qué es un Gestor de Incidencias?",
            content: "Herramienta centrada en la gestión del flujo de proyectos, facilitando el control, seguimiento y administración de actividades, tareas y problemas durante el desarrollo."
          },
          {
            title: "Concepto de Incidencia",
            content: "Cualquier evento que necesite ser realizado durante el desarrollo de software: actividades, tareas específicas, corrección de problemas, resolución de deficiencias."
          }
        ]
      },
      {
        title: "Funciones Principales",
        type: "sections",
        content: [
          {
            title: "Funciones Clave",
            content: "• Registro de incidencias\n• Clasificación y priorización\n• Asignación de responsabilidades\n• Seguimiento y actualización\n• Notificaciones y alertas\n• Reportes y análisis\n• Historial y documentación\n• Gestión de flujo de trabajo"
          }
        ]
      },
      {
        title: "Componentes Detallados",
        type: "sections",
        content: [
          {
            title: "Clasificación y Priorización",
            content: "NIVELES DE PRIORIDAD:\n• Crítico: Bloquean proyecto o causan fallas graves\n• Alta: Problemas importantes en funcionalidades clave\n• Moderado: Impactan proyecto pero no son urgentes\n• Baja: Problemas menores sin prisa\n• Despreciable: Incidencias mínimas"
          },
          {
            title: "Asignación de Responsabilidades",
            content: "BENEFICIOS:\n• Claridad en responsabilidades\n• Distribución equitativa del trabajo\n• Accountability individual\n• Mejor coordinación del equipo"
          },
          {
            title: "Notificaciones y Alertas",
            content: "TIPOS:\n• Fechas próximas de entrega\n• Productos retrasados\n• Cambios en estado\n• Asignación de nuevas tareas\n• Escalamiento de prioridades"
          },
          {
            title: "Historial y Documentación",
            content: "INFORMACIÓN REGISTRADA:\n• Qué se hizo: Descripción detallada\n• Quién lo hizo: Responsable\n• Cuándo se hizo: Marcas temporales\n• Documentación asociada: Archivos y referencias"
          }
        ]
      },
      {
        title: "Proceso General",
        type: "sections",
        content: [
          {
            title: "Flujo Típico",
            content: "1. Identificación: Detección de necesidad o problema\n2. Registro: Documentación formal en sistema\n3. Clasificación: Asignación de categoría y prioridad\n4. Asignación: Designación del responsable\n5. Seguimiento: Monitoreo continuo\n6. Resolución: Completar tarea o solucionar problema\n7. Verificación: Confirmación de resolución\n8. Cierre: Finalización formal"
          }
        ]
      }
    ]
  },
  {
    week: 5,
    date: "16/6",
    title: "No hubo clase",
    icon: <Calendar className="w-6 h-6" />,
    available: true,
    content: []
  },
  {
    week: 6,
    date: "23/6",
    title: "Metodología SCRUM",
    icon: <Zap className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Definición y Fundamentos",
        type: "sections",
        content: [
          {
            title: "¿Qué es SCRUM?",
            content: "Marco que permite a los equipos trabajar de manera más eficiente en proyectos complejos. Características: adaptabilidad, entrega continua de valor, enfoque en la complejidad."
          },
          {
            title: "Pilares del Empirismo",
            content: "1. TRANSPARENCIA: Aspectos del trabajo visibles para responsables\n2. INSPECCIÓN: Revisión frecuente de artefactos y progreso\n3. ADAPTACIÓN: Ajustes cuando se detectan desviaciones"
          },
          {
            title: "Valores de SCRUM",
            content: "• COMPROMISO: Con objetivos del equipo\n• CORAJE: Para hacer lo correcto\n• FOCO: En trabajo del Sprint\n• APERTURA: Sobre trabajo y desafíos\n• RESPETO: Entre miembros del equipo"
          }
        ]
      },
      {
        title: "Roles y Responsabilidades",
        type: "sections",
        content: [
          {
            title: "Product Owner",
            content: "FUNCIÓN: Maximizar valor del producto\nRESPONSABILIDADES:\n• Gestión del Product Backlog\n• Comunicación del objetivo del producto\n• Priorización según valor\n• Transparencia del backlog"
          },
          {
            title: "Scrum Master",
            content: "FUNCIÓN: Facilitar proceso SCRUM\nRESPONSABILIDADES:\n• Facilitación de eventos\n• Coaching del equipo\n• Eliminación de impedimentos\n• Asegurar eventos positivos y productivos"
          },
          {
            title: "Developers",
            content: "FUNCIÓN: Crear incremento del producto\nRESPONSABILIDADES:\n• Planificación del Sprint\n• Aseguramiento de calidad\n• Adaptación diaria hacia objetivo\n• Responsabilidad mutua"
          }
        ]
      },
      {
        title: "Eventos en SCRUM",
        type: "sections",
        content: [
          {
            title: "Sprint",
            content: "DURACIÓN: Máximo 1 mes (típicamente 2-4 semanas)\nCARACTERÍSTICAS: Duración fija, ciclo fundamental, nuevo Sprint inicia inmediatamente"
          },
          {
            title: "Sprint Planning",
            content: "DURACIÓN: Máximo 8 horas para Sprint de 1 mes\nRESULTADO: Sprint Backlog y Sprint Goal definidos\nTEMAS: ¿Por qué?, ¿Qué?, ¿Cómo?"
          },
          {
            title: "Daily Scrum",
            content: "DURACIÓN: 15 minutos exactos\nPARTICIPANTES: Developers\nPROPÓSITO: Inspeccionar progreso y adaptar Sprint Backlog"
          },
          {
            title: "Sprint Review",
            content: "DURACIÓN: Máximo 4 horas para Sprint de 1 mes\nPROPÓSITO: Inspeccionar resultado e determinar adaptaciones\nENFOQUE: Demostración y retroalimentación"
          },
          {
            title: "Sprint Retrospective",
            content: "DURACIÓN: Máximo 3 horas para Sprint de 1 mes\nPROPÓSITO: Planificar formas de aumentar calidad y efectividad\nENFOQUE: Personas, procesos, herramientas"
          }
        ]
      },
      {
        title: "Artefactos de SCRUM",
        type: "sections",
        content: [
          {
            title: "Product Backlog",
            content: "DEFINICIÓN: Lista ordenada de lo que se necesita para mejorar el producto\nCARACTERÍSTICAS: Fuente única, elementos 'listos', dinámico\nCOMPROMISO: Objetivo del Producto"
          },
          {
            title: "Sprint Backlog",
            content: "DEFINICIÓN: Elementos seleccionados + plan para entregarlos\nCOMPOSICIÓN: Objetivo del Sprint + elementos + plan\nCOMPROMISO: Objetivo del Sprint"
          },
          {
            title: "Increment",
            content: "DEFINICIÓN: Paso concreto hacia objetivo del producto\nCARACTERÍSTICAS: Aditivo, utilizable, verificado\nCOMPROMISO: Definición de 'Terminado'"
          }
        ]
      },
      {
        title: "Guía SCRUM 2020 - Cambios Clave",
        type: "sections",
        content: [
          {
            title: "Principales Modificaciones",
            content: "• Menos prescriptiva: Eliminó preguntas específicas\n• Un equipo, un producto: Eliminó equipos separados\n• Objetivo del Producto: Nuevo concepto para enfoque\n• Autogestión: Cambio de 'autoorganización'\n• Tres temas Sprint Planning: Añadió 'Por qué'"
          },
          {
            title: "Puntos Clave",
            content: "• SCRUM es gratuito e inmutable\n• Marco intencionalmente incompleto\n• Base empírica: experiencia y observación\n• Enfoque en valor: cada Sprint debe generar valor\n• Mejora continua: inspección y adaptación\n• Transparencia crucial para funcionamiento"
          }
        ]
      }
    ]
  },
  {
    week: 7,
    date: "30/6",
    title: "El Scrum Master",
    icon: <UserCheck className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Introducción al Scrum Master",
        type: "text",
        content: "Este documento aborda las responsabilidades y servicios que debe proporcionar el Scrum Master dentro del marco de trabajo Scrum, enfocándose en sus tres áreas principales de servicio."
      },
      {
        title: "Los Tres Servicios del Scrum Master",
        type: "sections",
        content: [
          {
            title: "1. Servicio al Equipo de Desarrollo",
            content: "RESPONSABILIDADES CLAVE:\n• Entrenar sobre autoorganización y multifuncionalidad\n• Ayudar a crear productos de alto valor\n• Resolver impedimentos que bloquean el progreso\n• Facilitar los eventos de SCRUM efectivamente"
          },
          {
            title: "2. Servicio al Product Owner",
            content: "ÁREAS DE APOYO:\n• Comprender las prácticas de Scrum y Agile\n• Asegurar comprensión de objetivos del producto\n• Enseñar gestión efectiva del Product Backlog\n• Planificación en entorno empírico\n• Facilitar eventos desde perspectiva del PO"
          },
          {
            title: "3. Servicio a la Organización",
            content: "INFLUENCIA ORGANIZACIONAL:\n• Entrenamiento organizacional en prácticas ágiles\n• Colaboración con otros Scrum Masters\n• Generación de cambios productivos\n• Promoción de Scrum y desarrollo empírico"
          }
        ]
      },
      {
        title: "Trabajo de los Developers en Scrum",
        type: "sections",
        content: [
          {
            title: "Fases del Trabajo de los Developers",
            content: "Los Developers son responsables de diseñar, construir, probar y entregar incrementos de software funcionales en cada Sprint."
          },
          {
            title: "1. Sprint Planning",
            content: "ACTIVIDADES CLAVE:\n• Análisis del Sprint Backlog\n• Refinamiento de historias de usuario\n• Estimación y compromiso con el objetivo\n• Definición de criterios de completitud (DoD)"
          },
          {
            title: "2. Desarrollo durante el Sprint",
            content: "ACTIVIDADES PRINCIPALES:\n• Diseño e implementación de soluciones\n• Pruebas continuas y colaborativas (QA)\n• Daily Scrum con tres preguntas clave\n• Colaboración con otros roles del equipo"
          },
          {
            title: "3. Sprint Review y Retrospective",
            content: "REVISIÓN:\n• Demostración del incremento\n• Recepción de feedback\n• Actualización del Product Backlog\n\nRETROSPECTIVA:\n• Reflexión sobre problemas técnicos\n• Evaluación de herramientas\n• Propuesta de mejoras colaborativas"
          }
        ]
      },
      {
        title: "Aspectos Clave del Rol",
        type: "sections",
        content: [
          {
            title: "Auto-organización",
            content: "Los Developers tienen autonomía para decidir cómo dividir las tareas y determinar quién hace qué, fomentando la responsabilidad compartida del equipo."
          },
          {
            title: "Compromiso con la Calidad",
            content: "El incremento debe cumplir siempre con la 'Definition of Done' establecida, asegurando estándares de calidad consistentes."
          },
          {
            title: "Enfoque en Valor",
            content: "Los Developers deben entender no solo el 'cómo' implementar una funcionalidad, sino también el 'por qué' de cada historia de usuario."
          },
          {
            title: "¿Qué es Agile? \n Definición y Características",
            content: "Agile es un enfoque de gestión de proyectos que revolucionó la forma de desarrollar software y posteriormente se extendió a otras industrias.\n\nCARACTERÍSTICAS PRINCIPALES:\n• Flexibilidad: Capacidad de adaptarse a cambios\n• Colaboración: Trabajo conjunto entre involucrados\n• Entrega continua de valor\n• Rechazo a la rigidez de planes inflexibles"
          },
          {
            title: "Origen y Fundamentos",
            content: "ORIGEN TEMPORAL: El movimiento Agile surgió en 2001 con la publicación del Manifiesto Ágil.\n\nMETODOLOGÍAS FUNDACIONALES:\n• Kanban: Sistema visual de gestión\n• Extreme Programming (XP): Prácticas intensivas\n• Scrum: Marco iterativo e incremental"
          }
        ]
      },
      {
        title: "El Contenido del Manifiesto Ágil",
        type: "sections",
        content: [
          {
            title: "Declaración Fundamental",
            content: "'Estamos descubriendo mejores formas de desarrollar software al hacerlo y al ayudar a otros a hacerlo. A través de este trabajo hemos llegado a valorar:'"
          },
          {
            title: "Los Cuatro Valores Fundamentales",
            content: "1. INDIVIDUOS E INTERACCIONES > procesos y herramientas\n   • Las personas y su comunicación son prioritarias\n\n2. SOFTWARE DE TRABAJO > documentación completa\n   • Producto funcional que genere valor real\n\n3. COLABORACIÓN DEL CLIENTE > negociación de contrato\n   • Trabajo conjunto y comunicación abierta\n\n4. RESPUESTA AL CAMBIO > aferrarse a seguir el plan\n   • Adaptabilidad ante nuevas circunstancias"
          }
        
        ]
      }
    ]
  },
  {
    week: 8,
    date: "7/7",
    title: "Desarrollo Proyecto SCRUM I",
    icon: <FileText className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Inicio del Primer Proyecto",
        type: "text",
        content: "Se comenzó el desarrollo del primer proyecto utilizando la metodología SCRUM. Durante esta semana se establecieron los fundamentos del proyecto, se definieron los roles del equipo y se inició la primera iteración de desarrollo."
      },
      {
        title: "Actividades Realizadas",
        type: "sections",
        content: [
          {
            title: "Configuración Inicial",
            content: "• Definición del Product Backlog inicial\n• Asignación de roles (Product Owner, Scrum Master, Developers)\n• Establecimiento del Definition of Done\n• Configuración del entorno de desarrollo"
          },
          {
            title: "Primer Sprint Planning",
            content: "• Selección de historias de usuario para el primer Sprint\n• Estimación de esfuerzo y complejidad\n• Definición del Sprint Goal\n• Creación del Sprint Backlog"
          }
        ]
      }
      
    ]
  },
  {
    week: 9,
    date: "14/7",
    title: "  Desarrollo Proyecto SCRUM II",
    icon: <Play className="w-6 h-6" />,
    available: true,
    content: [
       {
        title: "Continuación del Desarrollo",
        type: "text",
        content: "Se continuó con el desarrollo del primer proyecto, aplicando las ceremonias y prácticas de SCRUM. El equipo ganó experiencia práctica en la implementación de la metodología ágil."
      },
      {
        title: "Progreso del Proyecto",
        type: "sections",
        content: [
          {
            title: "Daily Scrums",
            content: "• Reuniones diarias de seguimiento\n• Identificación y resolución de impedimentos\n• Sincronización del equipo de desarrollo\n• Adaptación del plan diario"
          },
          {
            title: "Desarrollo Iterativo",
            content: "• Implementación de funcionalidades priorizadas\n• Pruebas continuas y integración\n• Refinamiento del Product Backlog\n• Preparación para Sprint Review"
          }
        ]
      }
     
    ]
  },
  {
    week: 10,
    date: "21/7",
    title: " Pausa por Incapacidad Docente",
    icon: <Settings className="w-6 h-6" />,
    available: true,
    content: [
      
    ]
  },
  {
    week: 11,
    date: "28/7",
    title: "Proyecto SCRUM y Tarea #3",
    icon: <Pause className="w-6 h-6" />,
    available: true,
    content: [{
        title: "Continuación del Proyecto",
        type: "text",
        content: "Continuamos con la realización del proyecto de SCRUM y también se asignó la Tarea #3. Esta semana se enfocó en consolidar los aprendizajes prácticos de la metodología."
      },
      {
        title: "Actividades de la Semana",
        type: "sections",
        content: [
          {
            title: "Proyecto SCRUM",
            content: "• Sprint Review del trabajo completado\n• Sprint Retrospective para mejoras\n• Planificación del siguiente Sprint\n• Refinamiento continuo del Product Backlog"
          },
          {
            title: "Tarea #3 Asignada",
            content: "• Nueva asignación académica complementaria\n• Aplicación práctica de conceptos teóricos\n• Evaluación individual del aprendizaje\n• Refuerzo de metodologías ágiles"
          }
        ]
      }
      
    ]
  },
  {
    week: 12,
    date: "4/8",
    title: "Extreme Programming (XP)",
    icon: <CheckCircle className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "¿Qué es XP?",
        type: "sections",
        content: [
          {
            title: "Definición",
            content: "Extreme Programming (XP) es una metodología ágil de desarrollo de software que se centra en la flexibilidad, la colaboración cercana con el cliente y la entrega rápida de software funcional. Su objetivo principal es mejorar la calidad del software y la capacidad de respuesta ante cambios en los requisitos."
          },
          {
            title: "Objetivo Principal",
            content: "Manejar proyectos con requisitos cambiantes y alta incertidumbre, basándose en valores, principios y prácticas concretas que guían el trabajo del equipo."
          }
        ]
      },
      {
        title: "Valores Fundamentales de XP",
        type: "sections",
        content: [
          {
            title: "1. Comunicación",
            content: "• Comunicación constante y abierta entre equipo y cliente\n• Evita documentación excesiva mediante interacciones cara a cara\n• Previene malentendidos y asegura claridad en requisitos"
          },
          {
            title: "2. Simplicidad",
            content: "• Busca siempre la solución más simple que funcione\n• Evita complejidad innecesaria\n• No implementa funcionalidades 'por si acaso'\n• Facilita adaptación rápida y mantenimiento"
          },
          {
            title: "3. Retroalimentación (Feedback)",
            content: "• Retroalimentación frecuente es clave en XP\n• Se obtiene mediante pruebas continuas y entregas incrementales\n• Participación activa del cliente\n• Permite detectar y corregir errores rápidamente"
          },
          {
            title: "4. Coraje (Valentía)",
            content: "• Tomar decisiones difíciles cuando sea necesario\n• Cambiar el rumbo del desarrollo si es requerido\n• Eliminar código innecesario o proponer mejoras\n• Admitir errores y corregirlos rápidamente"
          },
          {
            title: "5. Respeto",
            content: "• Valorar y respetar ideas y trabajo de todos\n• Crear ambiente colaborativo y de confianza\n• Reconocer contribuciones de cada miembro"
          }
        ]
      },
      {
        title: "Principios Clave de XP",
        type: "sections",
        content: [
          {
            title: "Principios Fundamentales",
            content: "1. RETROALIMENTACIÓN RÁPIDA: Ciclos cortos de feedback\n2. SUPONER SIMPLICIDAD: Diseñar la solución más simple\n3. CAMBIO INCREMENTAL: Cambios pequeños y reversibles\n4. ABRAZAR EL CAMBIO: Aceptar cambios en requisitos\n5. TRABAJO DE CALIDAD: Nunca sacrificar la calidad\n6. ENSEÑAR Y APRENDER: Compartir conocimiento\n7. VIAJE COMPARTIDO: Equipo y cliente como compañeros\n8. RITMO SOSTENIBLE: Equilibrio para productividad\n9. EXPERIMENTOS CONCRETOS: Probar directamente en código"
          }
        ]
      },
      {
        title: "12 Prácticas Fundamentales de XP",
        type: "sections",
        content: [
          {
            title: "A. Prácticas de Planificación",
            content: "1. PLANNING GAME: Establecer prioridades colaborativas\n2. SMALL RELEASES: Entregar valor frecuentemente (≤ 1 mes)\n3. SYSTEM METAPHOR: Narrativa compartida del sistema"
          },
          {
            title: "B. Prácticas de Diseño",
            content: "4. SIMPLE DESIGN: Pasa pruebas, sin duplicación, expresa intención\n5. REFACTORING: Mejora continua sin romper funcionalidad\n6. TEST-DRIVEN DEVELOPMENT: Ciclo Red-Green-Refactor"
          },
          {
            title: "C. Prácticas de Codificación",
            content: "7. PAIR PROGRAMMING: Conductor y Navegador\n8. COLLECTIVE CODE OWNERSHIP: Propiedad colectiva del código\n9. CODING STANDARDS: Estándares consistentes de código"
          },
          {
            title: "D. Prácticas de Integración",
            content: "10. CONTINUOUS INTEGRATION: Integración continua automática\n11. SUSTAINABLE PACE: Máximo 40 horas/semana\n12. ON-SITE CUSTOMER: Cliente integrado en el equipo"
          }
        ]
      },
      {
        title: "Ventajas y Desventajas",
        type: "sections",
        content: [
          {
            title: "Ventajas",
            content: "• Mayor calidad del software (TDD y refactorización)\n• Flexibilidad ante cambios en requisitos\n• Reducción de riesgos por entregas tempranas\n• Mejor comunicación en el equipo\n• Código más mantenible"
          },
          {
            title: "Desventajas",
            content: "• Requiere alta disciplina y compromiso\n• Dependencia de un cliente disponible\n• Difícil de escalar para proyectos grandes\n• No todos se adaptan a programación en parejas\n• Puede ser costoso para proyectos pequeños"
          }
        ]
      },
      {
        title: "Cuándo Usar XP",
        type: "sections",
        content: [
          {
            title: "Usar XP cuando:",
            content: "• Proyectos con requisitos cambiantes\n• Equipos pequeños y cohesionados (2-12 personas)\n• Entornos donde la calidad del código es crítica\n• Clientes disponibles para colaborar"
          },
          {
            title: "Evitar XP cuando:",
            content: "• Hay regulaciones estrictas de documentación\n• El equipo está distribuido en múltiples zonas horarias\n• Proyectos con requisitos muy estables\n• Falta de compromiso del equipo con las prácticas"
          }
        ]
      }
      
    ]
  },
  {
    week: 13,
    date: "11/8",
    title: "Proyecto XP y Desarrollo",
    icon: <Zap className="w-6 h-6" />,
    available: true,
    content: [
      {
        title: "Presentación del Proyecto XP",
        type: "text",
        content: "Se nos presenta el proyecto que debemos realizar utilizando la metodología XP y comenzamos su desarrollo. Esta semana marca el inicio de la aplicación práctica de Extreme Programming."
      },
      {
        title: "Inicio del Desarrollo XP",
        type: "sections",
        content: [
          {
            title: "Configuración del Proyecto",
            content: "• Definición de historias de usuario iniciales\n• Establecimiento del equipo XP\n• Configuración del entorno de desarrollo\n• Implementación de prácticas básicas de XP"
          },
          {
            title: "Aplicación de Prácticas XP",
            content: "• Planning Game para priorización\n• Inicio de Pair Programming\n• Implementación de TDD (Test-Driven Development)\n• Establecimiento de estándares de código"
          },
          {
            title: "Primeros Resultados",
            content: "• Desarrollo de funcionalidades básicas\n• Aplicación de refactoring continuo\n• Integración continua del código\n• Feedback temprano del cliente"
          }
        ]
      }
      
    ]
  },
  {
    week: 14,
    date: "18/8",
    title: "Entrega Final y Evaluaciones",
    icon: <Code className="w-6 h-6" />,
    available: true,
    content: [
       {
        title: "Culminación del Curso",
        type: "text",
        content: "Se realiza la entrega del proyecto final y las respectivas evaluaciones. Esta semana marca la conclusión del curso de Ingeniería de Software con la presentación de todos los trabajos desarrollados."
      },
      {
        title: "Actividades de Cierre",
        type: "sections",
        content: [
          {
            title: "Entrega del Proyecto Final",
            content: "• Presentación del proyecto desarrollado con XP\n• Demostración de funcionalidades implementadas\n• Documentación de lecciones aprendidas\n• Evaluación de la aplicación de metodologías ágiles"
          },
          {
            title: "Evaluaciones Finales",
            content: "• Evaluación del proyecto SCRUM\n• Evaluación del proyecto XP\n• Revisión de tareas y asignaciones\n• Evaluación integral del aprendizaje"
          },
          {
            title: "Reflexión y Aprendizajes",
            content: "• Comparación entre metodologías tradicionales y ágiles\n• Análisis de la aplicación práctica de SCRUM y XP\n• Identificación de mejores prácticas\n• Preparación para aplicación profesional"
          }
        ]
      }
      
    ]
  },
  
];

function App() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (sectionIndex: number) => {
    const key = `${activeWeek}-${sectionIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentWeekData = weekData.find(week => week.week === activeWeek);

  const filteredContent = currentWeekData?.content?.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (typeof section.content === 'string' && section.content.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (Array.isArray(section.content) && section.content.some(sub => 
      sub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.content.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Diario de Metodologías Ágiles</h1>
                <p className="text-sm text-slate-600">Contenido Académico por Semanas</p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar contenido..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Week Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {weekData.map((week) => (
              <button
                key={week.week}
                onClick={() => setActiveWeek(week.week)}
                disabled={!week.available}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeWeek === week.week
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : week.available
                    ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                    : 'bg-slate-50 text-slate-400 cursor-not-allowed opacity-50'
                }`}
              >
                {week.icon}
                <div className="text-left">
                  <div className="font-semibold">Semana {week.week}</div>
                  <div className="text-xs opacity-75">{week.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentWeekData ? (
          <div className="space-y-6">
            {/* Week Header */}
            <div className="text-center py-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  {currentWeekData.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">{currentWeekData.title}</h2>
                  <p className="text-lg text-slate-600">Semana {currentWeekData.week} - {currentWeekData.date}</p>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            {!currentWeekData.available ? (
              <div className="text-center py-16">
                <Calendar className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">No hubo clase esta semana</h3>
                <p className="text-slate-500">El contenido no está disponible para esta fecha.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredContent.map((section, index) => {
                  const key = `${activeWeek}-${index}`;
                  const isExpanded = expandedSections[key];
                  
                  return (
                    <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full px-6 py-4 text-left bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4 text-blue-600" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-blue-600" />
                              )}
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="px-6 py-6 border-t border-slate-100">
                          {section.type === 'text' ? (
                            <p className="text-slate-700 leading-relaxed">{section.content as string}</p>
                          ) : (
                            <div className="space-y-6">
                              {(section.content as SubSection[]).map((subsection, subIndex) => (
                                <div key={subIndex} className="border-l-4 border-blue-200 pl-6">
                                  <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center space-x-2">
                                    <Target className="w-5 h-5 text-blue-600" />
                                    <span>{subsection.title}</span>
                                  </h4>
                                  <div className="text-slate-700 leading-relaxed">
                                    {subsection.content.split('\n').map((line, lineIndex) => (
                                      <div key={lineIndex} className="mb-2">
                                        {line.startsWith('•') || line.match(/^\d+\./) ? (
                                          <div className="flex items-start space-x-2">
                                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>{line.replace(/^[•\d+. ]+/, '')}</span>
                                          </div>
                                        ) : (
                                          <span>{line}</span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Search Results Info */}
            {searchTerm && (
              <div className="text-center py-4">
                <p className="text-slate-600">
                  Mostrando {filteredContent.length} resultado(s) para "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-16">
            <AlertTriangle className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Contenido no encontrado</h3>
            <p className="text-slate-500">La semana seleccionada no tiene contenido disponible.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold">Diario de Metodologías Ágiles</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Contenido académico organizado por semanas para el aprendizaje sistemático de metodologías ágiles de desarrollo de software.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-400">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>15 Semanas de Contenido</span>
              </span>
              <span className="flex items-center space-x-1">
                <Lightbulb className="w-4 h-4" />
                <span>Metodologías y Fundamentos</span>
              </span>
              <span className="flex items-center space-x-1">
                <Target className="w-4 h-4" />
                <span>Enfoque Práctico</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;