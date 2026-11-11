const STORAGE_KEY = 'bmw-k-service-book-v1';
const DEFAULT_DATA = {
  vehicle: {
    model: 'BMW K75 S',
    year: '1987',
    market: 'Europa',
    buildDate: '',
    registrationDate: '',
    km: '',
    engine: '3 cilindros · refrigeración líquida · ~740 cm³',
    abs: '',
    gearboxCode: '',
    finalDriveCode: '',
    vin: '',
    photo: ''
  },
  services: [],
  reminders: [],
  language: 'es'
};

const TEXT = {
  es: {
    brandTitle: 'BMW K SERVICE BOOK', brandSub: 'FLYING BRICK GARAGE',
    garageEyebrow: 'TU GARAJE / 01', modelLabel: 'MODELO', yearLabel: 'AÑO', marketLabel: 'MERCADO',
    expensesEyebrow: 'GASTOS / 03', profileSource: 'Datos iniciales aportados por el usuario',
    overviewEyebrow: 'ESTADO / 02', vehicleStatus: 'Estado de la moto', editVehicle: 'Editar ficha ↗',
    currentMileage: 'KILOMETRAJE ACTUAL', kmRecorded: 'km registrados', interventions: 'INTERVENCIONES',
    inHistory: 'en el historial', nextReminder: 'PRÓXIMO AVISO', noReminders: 'Sin recordatorios',
    yearExpenses: 'Gastos del año', annualTotal: 'TOTAL DEL AÑO', costedEntries: 'intervenciones con coste',
    averageEntry: 'MEDIA POR INTERVENCIÓN', basedOnYear: 'según el historial de este año',
    topCategory: 'CATEGORÍA CON MÁS GASTO', quickEyebrow: 'ACCESO RÁPIDO / 04',
    serviceBook: 'Tu libro de servicio', addService: 'Añadir intervención', recordMaintenance: 'Registrar trabajo',
    reminders: 'Recordatorios', upcomingOperations: 'Próximas operaciones',
    technicalManual: 'Biblioteca técnica', modelsAndSources: 'Modelos y fuentes',
    catEngine: 'Motor', catCooling: 'Refrigeración', catClutch: 'Embrague / caja',
    catDrive: 'Cardán / grupo cónico', catBrakes: 'Frenos', catSuspension: 'Suspensión',
    catElectrical: 'Electricidad', catTires: 'Neumáticos', catOther: 'Otro',
    optional: 'Opcional', serviceExample: 'Ej. Cambio de aceite', partsPlaceholder: 'Referencia, marca o nota de compatibilidad',
    serviceNotesPlaceholder: 'Observaciones de esta intervención', reminderExample: 'Ej. Revisar frenos',
    referenceOptional: 'Fuente o referencia (opcional)', marketPlaceholder: 'Europa',
    unknownOdometer: 'Sin lectura exacta', absPending: 'Pendiente de confirmar',
    yes: 'Sí', no: 'No', idPending: 'Pendiente de identificar',
    vinPlaceholder: 'Se guarda solo en este dispositivo', mainNavigation: 'Navegación principal',
    disclaimer: 'Proyecto personal independiente, no afiliado a BMW AG. Verifica los datos técnicos con documentación aplicable a tu versión. Desarrollada por Sr. Balloneta.',
    serviceEyebrow: 'LIBRO DE SERVICIO / 05', recordIntro: 'Registra trabajos realizados; los datos se guardan en este dispositivo.',
    operation: 'Operación', date: 'Fecha', mileageKm: 'Kilometraje (km)', category: 'Categoría',
    costEuros: 'Coste total (€)', partsReferences: 'Piezas / referencias', notes: 'Notas',
    saveService: 'Guardar intervención', editService: 'Guardar cambios', cancelEdit: 'Cancelar edición',
    historyEyebrow: 'HISTORIAL / 06', history: 'Historial', exportCsv: 'Exportar CSV ↓',
    noServices: 'Todavía no hay intervenciones registradas.', delete: 'Eliminar', edit: 'Editar',
    serviceSaved: 'Intervención guardada', serviceUpdated: 'Intervención actualizada',
    serviceDeleted: 'Intervención eliminada', cancelDelete: '¿Eliminar esta intervención?',
    plannerEyebrow: 'PLANIFICADOR / 07', scheduleOperations: 'Programa avisos por fecha o kilometraje.',
    verifiedOnly: 'Plan orientativo · fuente secundaria',
    reminderSourceNote: 'El plan se basa en una agenda secundaria genérica para K75/K100/K1100/K1, no en un programa BMW confirmado para esta unidad. La guía personal de 2019 aporta intervalos distintos para algunas tareas. Verifica variante, mercado y último mantenimiento antes de usarlo.',
    generateBasePlan: 'Generar plan base', basePlanNeedsMileage: 'Introduce primero el kilometraje actual exacto en la ficha del garaje.',
    basePlanUnsupported: 'La agenda no incluye este modelo.',
    basePlanAlreadyExists: 'Ya hay un plan base para este modelo y año.',
    basePlanReady: 'Se usarán los límites inferiores de los rangos publicados; los avisos se calculan desde el kilometraje actual y la fecha de creación.',
    basePlanCreated: 'Plan base generado. Verifica cada operación con la documentación de tu moto.',
    basePlanSource: 'Fuente secundaria: manuales/agenda-mantenimiento-en.pdf (agenda K-Models facilitada por el propietario).',
    basePlanApplicability: 'Aplicabilidad exacta a esta variante y mercado pendiente de confirmar.',
    basePlanMileageBasis: 'Intervalo contado desde el kilometraje actual, no desde un servicio documentado.',
    planGeneralService: 'Servicio general · agenda K-Models',
    planInspection: 'Inspección · agenda K-Models',
    planAnnualService: 'Servicio anual · agenda K-Models',
    planBrakeFluid: 'Cambiar líquido de frenos DOT 4',
    planCoolant: 'Cambiar refrigerante',
    planFuelFilter: 'Comprobar / cambiar filtro de combustible',
    planBearings: 'Comprobar rodamientos de dirección, ruedas y basculante',
    planChainGuide: 'Cambiar guía y carril tensor de cadena',
    planSplines: 'Lubricar estriados aplicables',
    planEngineOilSevere: 'Cambiar aceite y filtro (trayectos cortos o frío)',
    planAirFilterDust: 'Comprobar filtro de aire (polvo)',
    planServiceRange: 'La agenda indica BMW Service cada 4.000–6.000 mi (6.437–9.656 km); el plan usa 4.000 mi (6.437 km).',
    planInspectionRange: 'La agenda indica BMW Inspection cada 8.000–12.000 mi (12.875–19.312 km); el plan usa 8.000 mi (12.875 km).',
    planAnnualServiceNote: 'La agenda secundaria incluye una revisión anual, sin definir aquí todos sus trabajos.',
    planBrakeInterval: 'La agenda indica DOT 4 y sustitución anual; no especifica capacidad.',
    planCoolantInterval: 'La agenda indica sustitución cada 2 años; no da capacidad ni una especificación química BMW.',
    planFuelFilterInterval: 'La agenda indica 12.000 mi (19.312 km) con combustible deficiente o 24.000 mi (38.624 km) en condiciones normales. El plan usa 12.000 mi.',
    planPoorFuel: 'El plan usa el intervalo de 12.000 mi (19.312 km); la fuente permite 24.000 mi (38.624 km) con combustible de calidad normal.',
    planBearingsNote: 'La agenda indica sustitución a 25.000 mi (40.234 km); inspecciona holgura y estado antes de sustituir.',
    planChainNote: 'La agenda suministrada indica 36.000 mi (57.936 km). Aplicabilidad exacta pendiente.',
    planSplineNote: 'La agenda indica lubricación anual; para motos fabricadas desde 1990 indica 40.000 mi (64.374 km).',
    planColdOilNote: 'Solo para trayectos cortos o temperaturas inferiores a 32 °F: 3 meses o 1.800 mi (2.897 km), lo que ocurra primero. La guía personal de 2019 sugiere otros intervalos de aceite; ninguno está confirmado por BMW para esta unidad.',
    planDustNote: 'Solo en uso con polvo: la agenda indica revisar a 6.000 mi (9.656 km) y con mayor frecuencia.',
    dueKm: 'Vencimiento (km)', deadline: 'Fecha límite', createReminder: 'Crear recordatorio',
    upcomingEyebrow: 'AVISOS / 08', reminderDisclaimer: 'Un aviso vence al alcanzar la fecha o el kilometraje, lo que ocurra primero. El kilometraje actual no indicado no se estima.',
    createReminderName: 'Escribe una operación.', chooseReminderLimit: 'Indica una fecha o un kilometraje.',
    reminderCreated: 'Recordatorio creado', reminderDeleted: 'Recordatorio eliminado',
    completed: 'COMPLETADO', overdue: 'VENCIDO', pending: 'PENDIENTE', markDone: 'Hecho', reactivate: 'Reactivar',
    noPending: 'No tienes recordatorios pendientes.', manualEyebrow: 'DATOS DE TALLER / 09',
    manualIntro: 'Esta pantalla muestra una sola ficha: la variante activa del garaje. Cambia el modelo o el año en los datos de la moto.',
    sourceStatus: 'Estado de las fuentes',     libraryNote: 'La agenda K-Models y la guía personal de 2019 son fuentes secundarias y discrepan en algunos intervalos. Ninguna confirma la aplicabilidad exacta a esta K75 S europea de 1987. Capacidades y especificaciones BMW quedan pendientes; los pares disponibles son solo una tabla K75/K100 no oficial.',
    technicalSheet: 'Ficha del vehículo', applicability: 'Aplicabilidad', unknown: 'Pendiente de contrastar',
    manufactureYears: 'Año de fabricación', europeanBase: 'Mercado europeo como base',
    engine: 'Motor', displacement: 'Cilindrada', power: 'Potencia', cooling: 'Refrigeración',
    maintenance: 'Mantenimiento e intervalos', fluids: 'Fluidos y capacidades',
    maintenanceSource: 'Agenda secundaria K-Models facilitada: intervalos genéricos para varias series K. La guía personal dws (2019) recomienda 6.000 mi (9.656 km) con aceite convencional o 10.000 mi (16.093 km) con sintético; para el filtro de combustible, anual o 10.000 mi (16.093 km).',
    maintenanceApplicability: 'La agenda indica 12.000/24.000 mi (19.312/38.624 km) para el filtro según combustible; también difieren los intervalos de caja, grupo final y horquilla. El plan usa solo la agenda secundaria. Ningún intervalo está confirmado por BMW para esta K75 S europea de 1987.',
    torque: 'Pares de apriete', oem: 'Referencias OEM', oemNote: 'Catálogo externo enlazado; compatibilidad y sustituciones pendientes de validar por variante/VIN.',
    pendingValue: 'Pendiente de fuente BMW aplicable', pendingOem: 'Pendiente de validar por variante y número de pieza',
    buildDate: 'Fecha de fabricación', firstRegistration: 'Primera matriculación', abs: 'ABS',
    gearboxCode: 'Código de caja', finalDriveCode: 'Código del grupo final',
    pendingIdentification: 'Pendiente de identificar', profileSource: 'Datos del perfil del garaje. No se infiere equipamiento ni código de componente.',
    engineOil: 'Aceite del motor', coolant: 'Refrigerante', brakeFluid: 'Líquido de frenos',
    gearboxFluid: 'Aceite de caja', finalDriveFluid: 'Aceite del grupo final', forkOil: 'Aceite de horquilla',
    sourcePending: 'Pendiente de fuente y aplicabilidad confirmadas',
    fluidUnknownTypeCapacity: 'Especificación BMW y capacidad para esta variante: pendientes.',
    fluidSource: 'Fuente secundaria: agenda K-Models facilitada por el propietario.',
    fluidPersonalGuide: 'Contraste: guía personal EN - K_Bike_General_Maintenance_V1.3 (dws, 2019); no es documentación BMW.',
    secondarySourceLabel: 'Fuente secundaria',
    fluidApplicability: 'Aplicabilidad a variante, año y mercado exactos pendiente de confirmar.',
    engineOilGuidance: 'La agenda pide cambiar aceite y filtro con el motor caliente; para trayectos cortos o menos de 32 °F indica 3 meses o 1.800 mi (2.897 km). No fija el intervalo normal. La guía personal de 2019 sugiere 6.000 mi (9.656 km) con aceite convencional o 10.000 mi (16.093 km) con sintético: recomendación secundaria, no BMW.',
    coolantGuidance: 'La agenda indica sustituir cada 2 años. La guía personal sugiere mezcla 40/60 con agua destilada, pero no confirma producto BMW ni capacidad; no extrapolar la mezcla sin validar compatibilidad.',
    brakeFluidGuidance: 'La agenda indica DOT 4 y sustitución anual. La capacidad no está indicada; confirmar el fluido aplicable en documentación BMW.',
    gearboxFluidGuidance: 'La agenda indica cambiar a temperatura de servicio, pero no da tipo, capacidad ni intervalo. La guía personal de 2019 sugiere 20.000 mi (32.187 km) para caja y distingue K75/K100 de 2 válvulas de K100 4V/K1100; no es un intervalo BMW confirmado.',
    finalDriveFluidGuidance: 'La agenda indica cambiar a temperatura de servicio, pero no da tipo, capacidad ni intervalo. La guía personal de 2019 sugiere 20.000 mi (32.187 km) y distingue K75/K100 de 2 válvulas de K100 4V/K1100; no es un intervalo BMW confirmado.',
    forkOilGuidance: 'La agenda indica cambiar a temperatura de servicio, sin tipo, capacidad ni intervalo. La guía personal de 2019 sugiere sustitución anual, no una especificación BMW confirmada.',
    fluidSourceDocument: 'Agenda de mantenimiento · inglés ↗',
    torqueNote: 'Valores de una tabla secundaria titulada K75/100 Specs, no una fuente BMW. La tabla no confirma año, mercado, variante ni condiciones de montaje; verifica cada par con documentación BMW aplicable antes de usarlo.',
    torqueSource: 'Fuente secundaria: EN - K75-K100_Torque_Specs.pdf, tabla de una página.',
    torqueApplicability: 'La tabla combina K75/K100; salvo el punto rotulado expresamente K75, no separa modelo, año o mercado. Sin confirmación BMW.',
    clutchTorqueCaution: 'La tabla lista 140 Nm para la tuerca de embrague K75. Su nota de procedimiento se refiere explícitamente al K100 y no debe trasladarse a la K75.',
    torqueOilDrain: 'Tapón de vaciado del motor', torqueOilFilter: 'Tapa del filtro de aceite',
    torqueGearDrain: 'Tapón de vaciado de caja', torqueGearFill: 'Tapón de llenado de caja',
    torqueFinalDriveDrain: 'Tapón de vaciado del grupo final', torqueFinalDriveFill: 'Tapón de llenado del grupo final',
    torqueSparkPlug: 'Bujía', torqueClutchNut: 'Tuerca de embrague K75',
    manualLanguage: 'Idioma / mercado', documentSource: 'Documento facilitado por el propietario',
    openPdf: 'Abrir PDF ↗', downloadPdf: 'Descargar PDF ↓',
    userManualSpanish: 'Instrucciones · español', maintenanceSchedule: 'Agenda de mantenimiento · inglés',
    k75Manual: 'K75 Rider’s Manual · 1994 · inglés (EE. UU.)',
    referenceLinks: 'Fuentes y manuales', officialFirst: 'BMW Motorrad es la fuente principal. Los catálogos externos son referencias secundarias y no sustituyen la documentación de taller.',
    officialManuals: 'Consultar manuales BMW Motorrad ↗', oemCatalog: 'Catálogo de piezas RealOEM · fuente secundaria ↗',
    kSeriesTribute: 'Homenaje a la serie K · imágenes y documentación en Wikimedia Commons ↗',
    manualCopyright: 'Estos PDF facilitados por el usuario se incluyen con autorización para publicarlos en esta aplicación y se abren en su idioma original. La disponibilidad sin conexión depende de que el navegador haya guardado el archivo completo.',
    userDocuments: 'Manuales y documentos',
    settingsEyebrow: 'FICHA DEL GARAJE / 10', vehicleSheet: 'Ficha de la moto',
    localDataDescription: 'Datos personales guardados localmente en este dispositivo.', model: 'Modelo',
    buildYear: 'Año de fabricación', market: 'Mercado', buildDate: 'Fecha de fabricación',
    firstRegistration: 'Fecha de primera matriculación',
    currentMileageKm: 'Kilometraje actual (km)', abs: 'ABS', gearboxCode: 'Código de caja',
    finalDriveCode: 'Código / marcado del grupo final', vin: 'VIN (opcional)',
    engineDetails: 'Motor / notas confirmadas', saveVehicle: 'Guardar ficha',
    vinNote: 'El VIN no se envía ni se consulta en línea. La decodificación local queda pendiente de una tabla fiable; no se deducen equipamientos.',
    vehicleSaved: 'Ficha guardada', vehiclePhoto: 'Foto de la moto',
    photoDescription: 'La foto de referencia no representa tu unidad. Tu foto se reduce y guarda solo en este dispositivo.',
    choosePhoto: 'Añadir foto propia', useGenericPhoto: 'Volver a la foto de referencia',
    photoSaved: 'Foto guardada', photoReset: 'Foto de referencia restaurada',
    photoError: 'No se pudo guardar la foto. Comprueba el formato y el espacio disponible.',
    yourData: 'Tus datos', localStorageDescription: 'Historial, recordatorios y ficha permanecen en el almacenamiento local del navegador. No hay cuentas ni sincronización.',
    downloadBackup: 'Descargar copia JSON ↓', exportAllCsv: 'Exportar historial CSV ↓', restoreBackup: 'Restaurar copia JSON',
    backupRestored: 'Copia restaurada', invalidBackup: 'Archivo de copia no válido',
    languageSettings: 'Idioma de la interfaz', chooseLanguage: 'Selecciona el idioma',
    languageDataNote: 'El idioma afecta la interfaz; no traduce los datos personales ni las fuentes técnicas originales.',
    garage: 'Garaje', serviceNav: 'Historial', alertsNav: 'Avisos', manualNav: 'Fichas',
    engineUserConfirmed: 'Dato de referencia aportado por el usuario', photoAlt: 'BMW K75 S de referencia, no es la moto del usuario',
    kmNotEntered: 'Kilometraje no indicado', confirmDelete: '¿Eliminar este recordatorio?',
    mileageLabel: 'km', languageChanged: 'Idioma actualizado', csvDate: 'Fecha',
    csvOperation: 'Operación', csvCategory: 'Categoría', csvParts: 'Piezas / referencias',
    csvNotes: 'Notas', csvCost: 'Coste (€)', csvStatus: 'Estado',
    kilometerValidation: 'El kilometraje debe ser un número válido.'
  },
  en: {
    brandTitle: 'BMW K SERVICE BOOK', brandSub: 'FLYING BRICK GARAGE',
    garageEyebrow: 'YOUR GARAGE / 01', modelLabel: 'MODEL', yearLabel: 'YEAR', marketLabel: 'MARKET',
    expensesEyebrow: 'EXPENSES / 03', profileSource: 'Initial details provided by the user',
    overviewEyebrow: 'STATUS / 02', vehicleStatus: 'Motorcycle status', editVehicle: 'Edit details ↗',
    currentMileage: 'CURRENT MILEAGE', kmRecorded: 'km recorded', interventions: 'SERVICE ENTRIES',
    inHistory: 'in the log', nextReminder: 'NEXT REMINDER', noReminders: 'No reminders',
    yearExpenses: 'Yearly expenses', annualTotal: 'YEAR TOTAL', costedEntries: 'entries with a cost',
    averageEntry: 'AVERAGE PER ENTRY', basedOnYear: 'based on this year’s log',
    topCategory: 'HIGHEST-SPEND CATEGORY', quickEyebrow: 'QUICK ACCESS / 04',
    serviceBook: 'Your service book', addService: 'Add service entry', recordMaintenance: 'Log maintenance',
    reminders: 'Reminders', upcomingOperations: 'Upcoming operations',
    technicalManual: 'Technical library', modelsAndSources: 'Models and sources',
    catEngine: 'Engine', catCooling: 'Cooling', catClutch: 'Clutch / gearbox',
    catDrive: 'Driveshaft / final drive', catBrakes: 'Brakes', catSuspension: 'Suspension',
    catElectrical: 'Electrical', catTires: 'Tyres', catOther: 'Other',
    optional: 'Optional', serviceExample: 'e.g. Engine oil change', partsPlaceholder: 'Part number, brand or compatibility note',
    serviceNotesPlaceholder: 'Notes about this service entry', reminderExample: 'e.g. Inspect the brakes',
    referenceOptional: 'Source or reference (optional)', marketPlaceholder: 'Europe',
    unknownOdometer: 'No exact reading yet', absPending: 'Not confirmed',
    yes: 'Yes', no: 'No', idPending: 'Not identified',
    vinPlaceholder: 'Stored only on this device', mainNavigation: 'Main navigation',
    disclaimer: 'Independent personal project, not affiliated with BMW AG. Verify technical data against documentation for your exact version. Developed by Sr. Balloneta.',
    serviceEyebrow: 'SERVICE RECORD / 05', recordIntro: 'Log work carried out; records are stored on this device.',
    operation: 'Operation', date: 'Date', mileageKm: 'Mileage (km)', category: 'Category',
    costEuros: 'Total cost (€)', partsReferences: 'Parts / references', notes: 'Notes',
    saveService: 'Save service entry', editService: 'Save changes', cancelEdit: 'Cancel edit',
    historyEyebrow: 'HISTORY / 06', history: 'History', exportCsv: 'Export CSV ↓',
    noServices: 'No service entries yet.', delete: 'Delete', edit: 'Edit',
    serviceSaved: 'Service entry saved', serviceUpdated: 'Service entry updated',
    serviceDeleted: 'Service entry deleted', cancelDelete: 'Delete this service entry?',
    plannerEyebrow: 'PLANNER / 07', scheduleOperations: 'Schedule by date or mileage.',
    verifiedOnly: 'Base plan · secondary source',
    reminderSourceNote: 'The plan uses a generic secondary schedule for K75/K100/K1100/K1, not a BMW program confirmed for this motorcycle. The 2019 personal guide gives different intervals for some tasks. Verify the variant, market and last service before relying on it.',
    generateBasePlan: 'Generate base plan', basePlanNeedsMileage: 'Enter the exact current mileage in the garage details first.',
    basePlanUnsupported: 'This model is not listed in the schedule.',
    basePlanAlreadyExists: 'A base plan already exists for this model and year.',
    basePlanReady: 'The lower end of published ranges is used; reminders start from the current mileage and plan creation date.',
    basePlanCreated: 'Base plan generated. Verify each operation against your motorcycle documentation.',
    basePlanSource: 'Secondary source: manuales/agenda-mantenimiento-en.pdf (K-Models schedule supplied by the owner).',
    basePlanApplicability: 'Exact applicability to this variant and market is unconfirmed.',
    basePlanMileageBasis: 'Interval counted from current mileage, not from a documented service.',
    planGeneralService: 'General service · K-Models schedule',
    planInspection: 'Inspection · K-Models schedule',
    planAnnualService: 'Annual service · K-Models schedule',
    planBrakeFluid: 'Change DOT 4 brake fluid',
    planCoolant: 'Change coolant',
    planFuelFilter: 'Inspect / replace fuel filter',
    planBearings: 'Inspect steering, wheel and swingarm bearings',
    planChainGuide: 'Replace chain tensioning rail and guide',
    planSplines: 'Lubricate applicable splines',
    planEngineOilSevere: 'Change engine oil and filter (short trips or cold)',
    planAirFilterDust: 'Inspect air filter (dusty conditions)',
    planServiceRange: 'The schedule lists BMW Service every 4,000–6,000 mi (6,437–9,656 km); the plan uses 4,000 mi (6,437 km).',
    planInspectionRange: 'The schedule lists BMW Inspection every 8,000–12,000 mi (12,875–19,312 km); the plan uses 8,000 mi (12,875 km).',
    planAnnualServiceNote: 'The secondary schedule includes an annual service but does not define all tasks here.',
    planBrakeInterval: 'The schedule lists DOT 4 and annual replacement; capacity is not stated.',
    planCoolantInterval: 'The schedule lists replacement every 2 years; it gives no capacity or BMW chemical specification.',
    planFuelFilterInterval: 'The schedule lists 12,000 mi (19,312 km) with poor fuel or 24,000 mi (38,624 km) under normal conditions. The plan uses 12,000 mi.',
    planPoorFuel: 'The plan uses 12,000 mi (19,312 km); the source allows 24,000 mi (38,624 km) with normal fuel quality.',
    planBearingsNote: 'The schedule lists replacement at 25,000 mi (40,234 km); inspect play and condition before replacing.',
    planChainNote: 'The supplied schedule lists 36,000 mi (57,936 km). Exact applicability is unconfirmed.',
    planSplineNote: 'The schedule lists annual lubrication; motorcycles built from 1990 onward are listed at 40,000 mi (64,374 km).',
    planColdOilNote: 'Only for short trips or temperatures below 32 °F: 3 months or 1,800 mi (2,897 km), whichever comes first. The 2019 personal guide suggests different oil intervals; neither is confirmed by BMW for this motorcycle.',
    planDustNote: 'Only in dusty use: the schedule lists inspection at 6,000 mi (9,656 km) and more frequent checks.',
    dueKm: 'Due at (km)', deadline: 'Due date', createReminder: 'Create reminder',
    upcomingEyebrow: 'ALERTS / 08', reminderDisclaimer: 'A reminder is due when either its date or mileage is reached, whichever comes first. Unknown current mileage is not estimated.',
    createReminderName: 'Enter an operation.', chooseReminderLimit: 'Set a date or mileage.',
    reminderCreated: 'Reminder created', reminderDeleted: 'Reminder deleted',
    completed: 'COMPLETED', overdue: 'OVERDUE', pending: 'PENDING', markDone: 'Done', reactivate: 'Reactivate',
    noPending: 'No pending reminders.', manualEyebrow: 'WORKSHOP DATA / 09',
    manualIntro: 'This screen shows a single sheet for the active garage model. Change the motorcycle model or year in its details.',
    sourceStatus: 'Source status',     libraryNote: 'The K-Models schedule and 2019 personal guide are secondary sources and disagree on some intervals. Neither confirms exact applicability to this 1987 European K75 S. BMW capacities and specifications remain unconfirmed; available torque values come only from an unofficial K75/K100 table.',
    technicalSheet: 'Vehicle details', applicability: 'Applicability', unknown: 'Not yet verified',
    manufactureYears: 'Manufacture year', europeanBase: 'European market as baseline',
    engine: 'Engine', displacement: 'Displacement', power: 'Power', cooling: 'Cooling',
    maintenance: 'Maintenance intervals', fluids: 'Fluids and capacities',
    maintenanceSource: 'Supplied K-Models secondary schedule: generic intervals for several K series. The personal dws guide (2019) recommends 6,000 mi (9,656 km) with conventional oil or 10,000 mi (16,093 km) with synthetic oil; for the fuel filter, annually or at 10,000 mi (16,093 km).',
    maintenanceApplicability: 'The schedule lists 12,000/24,000 mi (19,312/38,624 km) for the fuel filter depending on fuel quality; gearbox, final-drive and fork intervals also differ. The plan uses only the secondary schedule. BMW has not confirmed these intervals for this 1987 European K75 S.',
    torque: 'Tightening torque', oem: 'OEM references', oemNote: 'External catalog linked; fitment and supersessions require validation by variant/VIN.',
    pendingValue: 'Awaiting applicable BMW source', pendingOem: 'Awaiting validation by variant and part number',
    buildDate: 'Manufacture date', firstRegistration: 'First registration', abs: 'ABS',
    gearboxCode: 'Gearbox code', finalDriveCode: 'Final drive code',
    pendingIdentification: 'Not identified', profileSource: 'Garage profile data. Equipment and component codes are not inferred.',
    engineOil: 'Engine oil', coolant: 'Coolant', brakeFluid: 'Brake fluid',
    gearboxFluid: 'Gearbox oil', finalDriveFluid: 'Final drive oil', forkOil: 'Fork oil',
    sourcePending: 'Awaiting confirmed source and applicability',
    fluidUnknownTypeCapacity: 'BMW specification and capacity for this variant: awaiting confirmation.',
    fluidSource: 'Secondary source: K-Models schedule supplied by the owner.',
    fluidPersonalGuide: 'Cross-reference: personal guide EN - K_Bike_General_Maintenance_V1.3 (dws, 2019); not BMW documentation.',
    secondarySourceLabel: 'Secondary source',
    fluidApplicability: 'Exact variant, year and market applicability is unconfirmed.',
    engineOilGuidance: 'The schedule says to change the oil and filter warm; for short trips or below 32 °F it lists 3 months or 1,800 mi (2,897 km). It does not set a normal interval. The 2019 personal guide suggests 6,000 mi (9,656 km) for conventional oil or 10,000 mi (16,093 km) for synthetic oil: secondary advice, not BMW.',
    coolantGuidance: 'The schedule lists replacement every 2 years. The personal guide suggests a 40/60 mix with distilled water, but does not confirm a BMW-approved product or capacity; verify compatibility before using that mix.',
    brakeFluidGuidance: 'The schedule lists DOT 4 and annual replacement. Capacity is not stated; verify the applicable fluid in BMW documentation.',
    gearboxFluidGuidance: 'The schedule says to change at operating temperature but gives no type, capacity or interval. The 2019 personal guide suggests 20,000 mi (32,187 km) for the gearbox and distinguishes 2-valve K75/K100 from K100 4V/K1100; this is not a BMW-confirmed interval.',
    finalDriveFluidGuidance: 'The schedule says to change at operating temperature but gives no type, capacity or interval. The 2019 personal guide suggests 20,000 mi (32,187 km) and distinguishes 2-valve K75/K100 from K100 4V/K1100; this is not a BMW-confirmed interval.',
    forkOilGuidance: 'The schedule says to change at operating temperature but gives no type, capacity or interval. The 2019 personal guide suggests annual replacement, not a confirmed BMW specification.',
    fluidSourceDocument: 'Maintenance schedule · English ↗',
    torqueNote: 'Values are from a secondary table titled K75/100 Specs, not a BMW source. The table does not confirm year, market, variant or installation conditions; verify each value against applicable BMW documentation before use.',
    torqueSource: 'Secondary source: EN - K75-K100_Torque_Specs.pdf, one-page table.',
    torqueApplicability: 'The table combines K75/K100; except for the entry explicitly labelled K75, it does not separate model, year or market. BMW confirmation is absent.',
    clutchTorqueCaution: 'The table lists 140 Nm for the K75 clutch nut. Its procedural note explicitly concerns the K100 and must not be transferred to the K75.',
    torqueOilDrain: 'Engine oil drain plug', torqueOilFilter: 'Oil filter cover',
    torqueGearDrain: 'Gearbox drain plug', torqueGearFill: 'Gearbox fill plug',
    torqueFinalDriveDrain: 'Final drive drain plug', torqueFinalDriveFill: 'Final drive fill plug',
    torqueSparkPlug: 'Spark plug', torqueClutchNut: 'K75 clutch nut',
    manualLanguage: 'Language / market', documentSource: 'Document supplied by the owner',
    openPdf: 'Open PDF ↗', downloadPdf: 'Download PDF ↓',
    userManualSpanish: 'Instructions · Spanish', maintenanceSchedule: 'Maintenance schedule · English',
    k75Manual: 'K75 Rider’s Manual · 1994 · US English',
    referenceLinks: 'Sources and manuals', officialFirst: 'BMW Motorrad is the primary source. External catalogs are secondary references and do not replace workshop documentation.',
    officialManuals: 'BMW Motorrad manuals ↗', oemCatalog: 'RealOEM parts catalog · secondary source ↗',
    kSeriesTribute: 'K Series tribute · images and documentation on Wikimedia Commons ↗',
    manualCopyright: 'These PDFs supplied by the user are included with permission to publish them in this app and open in their original language. Offline availability depends on the browser saving the complete file.',
    userDocuments: 'Manuals and documents',
    settingsEyebrow: 'GARAGE DETAILS / 10', vehicleSheet: 'Motorcycle details',
    localDataDescription: 'Personal data stored locally on this device.', model: 'Model',
    buildYear: 'Manufacture year', market: 'Market', buildDate: 'Manufacture date',
    firstRegistration: 'First registration date',
    currentMileageKm: 'Current mileage (km)', abs: 'ABS', gearboxCode: 'Gearbox code',
    finalDriveCode: 'Final drive code / marking', vin: 'VIN (optional)',
    engineDetails: 'Engine / confirmed notes', saveVehicle: 'Save details',
    vinNote: 'The VIN is not sent or checked online. Local decoding awaits a reliable reference table; equipment is not inferred.',
    vehicleSaved: 'Details saved', vehiclePhoto: 'Motorcycle photo',
    photoDescription: 'The reference photo is not your motorcycle. Your photo is resized and stored only on this device.',
    choosePhoto: 'Add your own photo', useGenericPhoto: 'Restore reference photo',
    photoSaved: 'Photo saved', photoReset: 'Reference photo restored',
    photoError: 'Could not save the photo. Check the format and available storage.',
    yourData: 'Your data', localStorageDescription: 'History, reminders and details stay in this browser’s local storage. No accounts or sync.',
    downloadBackup: 'Download JSON backup ↓', exportAllCsv: 'Export service history CSV ↓', restoreBackup: 'Restore JSON backup',
    backupRestored: 'Backup restored', invalidBackup: 'Invalid backup file',
    languageSettings: 'Interface language', chooseLanguage: 'Choose a language',
    languageDataNote: 'The language affects the interface only; personal data and technical sources are not translated.',
    garage: 'Garage', serviceNav: 'History', alertsNav: 'Alerts', manualNav: 'Sheets',
    engineUserConfirmed: 'Reference details provided by the user', photoAlt: 'Reference BMW K75 S, not the user’s motorcycle',
    kmNotEntered: 'Mileage not entered', confirmDelete: 'Delete this reminder?',
    mileageLabel: 'km', languageChanged: 'Language updated', csvDate: 'Date',
    csvOperation: 'Operation', csvCategory: 'Category', csvParts: 'Parts / references',
    csvNotes: 'Notes', csvCost: 'Cost (€)', csvStatus: 'Status',
    kilometerValidation: 'Mileage must be a valid number.'
  }
};

let data = loadData();
let editingServiceId = null;
let installPrompt = null;

const $ = (selector, root = document) => root.querySelector(selector);
const t = key => (TEXT[data.language] || TEXT.es)[key] || key;
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return {
      ...structuredClone(DEFAULT_DATA),
      ...saved,
      vehicle: {
        ...DEFAULT_DATA.vehicle,
        ...(saved.vehicle || {}),
        photo: saved.vehicle && typeof saved.vehicle.photo === 'string' &&
          saved.vehicle.photo.startsWith('data:image/jpeg;base64,') ? saved.vehicle.photo : ''
      },
      services: Array.isArray(saved.services) ? saved.services : [],
      reminders: Array.isArray(saved.reminders) ? saved.reminders : [],
      language: saved.language === 'en' ? 'en' : 'es'
    };
  } catch {
    console.error('Stored BMW K Service Book data could not be read; the initial profile will be shown.');
    return structuredClone(DEFAULT_DATA);
  }
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => element.classList.remove('show'), 2200);
}

function formatNumber(value) {
  return Number(value).toLocaleString(data.language === 'en' ? 'en-GB' : 'es-ES');
}

function formatCurrency(value) {
  return Number(value).toLocaleString(data.language === 'en' ? 'en-GB' : 'es-ES', {
    style: 'currency', currency: 'EUR'
  });
}

function localDateString(date = new Date()) {
  const pad = number => String(number).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function applyLanguage() {
  document.documentElement.lang = data.language;
  document.title = data.language === 'en' ? 'BMW K Service Book' : 'BMW K Service Book';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (!element.dataset.defaultText) element.dataset.defaultText = element.textContent;
    element.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('#serviceForm [data-category]').forEach(option => {
    option.textContent = t(option.dataset.category);
  });
  $('.bottom-nav').setAttribute('aria-label', t('mainNavigation'));
  $('#languageSelect').value = data.language;
  renderModelLibrary();
}

function categoryLabel(category) {
  const keys = {
    Motor: 'catEngine', Refrigeración: 'catCooling', 'Embrague / caja': 'catClutch',
    'Cardán / grupo cónico': 'catDrive', Frenos: 'catBrakes', Suspensión: 'catSuspension',
    Electricidad: 'catElectrical', Neumáticos: 'catTires', Otro: 'catOther'
  };
  return keys[category] ? t(keys[category]) : category;
}

function showView(name) {
  document.querySelectorAll('.view').forEach(view => view.classList.toggle('active', view.id === `view-${name}`));
  document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getReminderStatus(reminder, today = localDateString()) {
  if (reminder.done) return 'done';
  const hasMileage = reminder.km !== '' && reminder.km !== null && reminder.km !== undefined;
  const mileageReached = hasMileage && data.vehicle.km !== '' &&
    Number(data.vehicle.km) >= Number(reminder.km);
  const dateReached = Boolean(reminder.date) && reminder.date <= today;
  return mileageReached || dateReached ? 'overdue' : 'upcoming';
}

function sortedReminders() {
  const rank = { overdue: 0, upcoming: 1, done: 2 };
  return [...data.reminders].sort((a, b) => {
    const statusDelta = rank[getReminderStatus(a)] - rank[getReminderStatus(b)];
    if (statusDelta) return statusDelta;
    const aDate = a.date || '9999-12-31';
    const bDate = b.date || '9999-12-31';
    if (aDate !== bDate) return aDate.localeCompare(bDate);
    return (Number(a.km) || Infinity) - (Number(b.km) || Infinity);
  });
}

function renderDashboard() {
  const vehicle = data.vehicle;
  const name = (vehicle.model || 'BMW K75 S').replace(/^BMW\s+/i, '');
  $('#heroModel').innerHTML = `BMW <span>${escapeHtml(name)}</span>`;
  $('#heroSubline').textContent = `FLYING BRICK · ${vehicle.market || '—'} · ${vehicle.year || '—'}`;
  $('#heroFooterModel').textContent = name;
  $('#heroYear').textContent = vehicle.year || '—';
  $('#heroMarket').textContent = vehicle.market || '—';
  $('#heroEngine').textContent = vehicle.engine || t('unknown');
  $('#currentKm').textContent = vehicle.km ? `${formatNumber(vehicle.km)} km` : '—';
  $('#serviceCount').textContent = String(data.services.length);

  const upcoming = sortedReminders().filter(reminder => !reminder.done);
  const next = upcoming[0];
  $('#nextDue').textContent = next ? (next.km !== '' && next.km !== undefined
    ? `${formatNumber(next.km)} km`
    : next.date || '—') : '—';
  $('#nextDueLabel').textContent = next ? next.title : t('noReminders');

  const year = String(new Date().getFullYear());
  $('#expenseYear').textContent = year;
  const entries = data.services.filter(service => service.date?.slice(0, 4) === year &&
    service.cost !== '' && service.cost !== null && service.cost !== undefined);
  const total = entries.reduce((sum, service) => sum + (Number(service.cost) || 0), 0);
  $('#annualTotal').textContent = formatCurrency(total);
  $('#annualAverage').textContent = entries.length ? formatCurrency(total / entries.length) : '—';
  $('#topCategory').textContent = '—';
  $('#categoryTotal').textContent = '';
  if (entries.length) {
    const sums = new Map();
    entries.forEach(service => sums.set(service.category, (sums.get(service.category) || 0) + (Number(service.cost) || 0)));
    const [category, amount] = [...sums.entries()].sort((a, b) => b[1] - a[1])[0];
    $('#topCategory').textContent = category;
    $('#categoryTotal').textContent = formatCurrency(amount);
  }
  renderVehiclePhoto();
}

function renderVehiclePhoto() {
  const image = $('#vehicleHeroImage');
  const customPhoto = Boolean(data.vehicle.photo);
  image.src = data.vehicle.photo || './k75s-reference.jpg';
  image.alt = customPhoto ? t('vehiclePhoto') : t('photoAlt');
  $('.photo-credit').hidden = customPhoto;
  $('#useGenericPhoto').disabled = !customPhoto;
}

function renderHistory() {
  const host = $('#historyList');
  const entries = [...data.services].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  host.className = `record-list${entries.length ? '' : ' empty-state'}`;
  host.innerHTML = entries.length ? entries.map(service => `
    <article class="record">
      <div><h3>${escapeHtml(service.title)}</h3>
        <p>${escapeHtml(categoryLabel(service.category))} · ${escapeHtml(service.date)}${service.km !== '' ? ` · ${formatNumber(service.km)} km` : ''}
        ${service.parts ? `<br>${escapeHtml(service.parts)}` : ''}${service.notes ? `<br>${escapeHtml(service.notes)}` : ''}</p>
      </div>
      <div class="record-meta">${service.cost !== '' ? escapeHtml(formatCurrency(service.cost)) : '—'}
        <div class="record-actions"><button class="small-action" type="button" data-edit-service="${escapeHtml(service.id)}">${t('edit')}</button><button class="small-action" type="button" data-delete-service="${escapeHtml(service.id)}">${t('delete')}</button></div>
      </div>
    </article>`).join('') : t('noServices');
}

function renderReminders() {
  const host = $('#reminderList');
  const reminders = sortedReminders();
  host.className = `record-list${reminders.length ? '' : ' empty-state'}`;
  host.innerHTML = reminders.length ? reminders.map(reminder => {
    const status = getReminderStatus(reminder);
    const label = status === 'done' ? t('completed') : status === 'overdue' ? t('overdue') : t('pending');
    const limits = [
      reminder.km !== '' && reminder.km !== undefined ? `${formatNumber(reminder.km)} km` : '',
      reminder.date || ''
    ].filter(Boolean).join(' · ');
    return `<article class="record">
      <div><h3>${escapeHtml(reminder.title)} <span class="reminder-status status-${status}">${label}</span></h3>
        <p>${escapeHtml(limits)}${reminder.notes ? `<br>${escapeHtml(reminder.notes)}` : ''}</p>
      </div>
      <div class="record-actions"><button class="small-action" type="button" data-toggle-reminder="${escapeHtml(reminder.id)}">${reminder.done ? t('reactivate') : t('markDone')}</button><button class="small-action" type="button" data-delete-reminder="${escapeHtml(reminder.id)}" aria-label="${t('delete')}">×</button></div>
    </article>`;
  }).join('') : t('noPending');
  updateBasePlanControls();
}

function getBasePlanKey(vehicle = data.vehicle) {
  const model = String(vehicle.model || '').trim().toUpperCase();
  if (!/^BMW K(?:75|100|1100|1)(?:\s|$)/.test(model)) return '';
  return `k-models-schedule-v1:${model}:${vehicle.year || ''}:${vehicle.market || ''}`;
}

function updateBasePlanControls() {
  const button = $('#generateBasePlanBtn');
  const status = $('#basePlanStatus');
  if (!button || !status) return;
  const planKey = getBasePlanKey();
  const mileage = data.vehicle.km;
  const hasMileage = String(mileage ?? '').trim() !== '' &&
    Number.isSafeInteger(Number(mileage)) && Number(mileage) >= 0;
  const exists = planKey && data.reminders.some(reminder => reminder.planKey === planKey);
  button.disabled = !planKey || !hasMileage || Boolean(exists);
  status.textContent = !planKey ? t('basePlanUnsupported') :
    !hasMileage ? t('basePlanNeedsMileage') :
      exists ? t('basePlanAlreadyExists') : t('basePlanReady');
}

function addCalendarMonths(dateString, months) {
  const [year, month, day] = dateString.split('-').map(Number);
  const targetMonth = month - 1 + months;
  const targetYear = year + Math.floor(targetMonth / 12);
  const normalizedMonth = targetMonth % 12;
  const lastDay = new Date(targetYear, normalizedMonth + 1, 0).getDate();
  const pad = number => String(number).padStart(2, '0');
  return `${targetYear}-${pad(normalizedMonth + 1)}-${pad(Math.min(day, lastDay))}`;
}

function generateBasePlan() {
  const planKey = getBasePlanKey();
  const mileage = data.vehicle.km;
  const currentKm = Number(mileage);
  if (!planKey) return toast(t('basePlanUnsupported'));
  if (String(mileage ?? '').trim() === '' || !Number.isSafeInteger(currentKm) || currentKm < 0) {
    return toast(t('basePlanNeedsMileage'));
  }
  if (data.reminders.some(reminder => reminder.planKey === planKey)) {
    return toast(t('basePlanAlreadyExists'));
  }

  const today = localDateString();
  const milesToKm = miles => Math.round(miles * 1.609344);
  const generated = [];
  const applicability = `${t('basePlanSource')} ${t('basePlanApplicability')} ${t('basePlanMileageBasis')} ${formatNumber(currentKm)} km.`;
  const addReminder = ({ title, miles, months, note }) => {
    const intervalKm = miles ? milesToKm(miles) : 0;
    const interval = miles
      ? (data.language === 'en'
        ? `Interval: ${miles.toLocaleString('en-US')} mi (${formatNumber(intervalKm)} km).`
        : `Intervalo: ${miles.toLocaleString('es-ES')} mi (${formatNumber(intervalKm)} km).`)
      : (data.language === 'en'
        ? `Date calculated ${months} month(s) from plan creation (${today}); it does not confirm the last service.`
        : `Fecha calculada a ${months} mes(es) desde la creación del plan (${today}); no confirma el último servicio.`);
    generated.push({
      id: crypto.randomUUID(),
      title: t(title),
      km: miles ? currentKm + intervalKm : '',
      date: months ? addCalendarMonths(today, months) : '',
      notes: `${note ? `${t(note)} ` : ''}${interval} ${applicability}`,
      done: false,
      planKey
    });
  };

  addReminder({ title: 'planGeneralService', miles: 4000, note: 'planServiceRange' });
  addReminder({ title: 'planInspection', miles: 8000, note: 'planInspectionRange' });
  addReminder({ title: 'planAnnualService', months: 12 });
  addReminder({ title: 'planBrakeFluid', months: 12 });
  addReminder({ title: 'planCoolant', months: 24 });
  addReminder({ title: 'planFuelFilter', miles: 12000, note: 'planPoorFuel' });
  addReminder({ title: 'planBearings', miles: 25000, note: 'planBearingsNote' });
  addReminder({ title: 'planChainGuide', miles: 36000, note: 'planChainNote' });
  addReminder({ title: 'planEngineOilSevere', miles: 1800, months: 3, note: 'planColdOilNote' });
  addReminder({ title: 'planAirFilterDust', miles: 6000, note: 'planDustNote' });

  const buildYear = Number(data.vehicle.year);
  if (buildYear >= 1980 && buildYear < 1990) {
    addReminder({ title: 'planSplines', months: 12, note: 'planSplineNote' });
  } else if (buildYear >= 1990) {
    addReminder({ title: 'planSplines', miles: 40000, note: 'planSplineNote' });
  }

  data.reminders.push(...generated);
  persist();
  toast(t('basePlanCreated'));
}

function renderVehicleForm() {
  const form = $('#vehicleForm');
  for (const [key, value] of Object.entries(data.vehicle)) {
    const field = form.elements.namedItem(key);
    if (field && document.activeElement !== field && key !== 'photo') field.value = value ?? '';
  }
}

function renderModelLibrary() {
  const vehicle = data.vehicle;
  const detail = (label, value) => `<div><span>${t(label)}</span><strong>${escapeHtml(value || t('pendingIdentification'))}</strong></div>`;
  const pending = label => detail(label, t('sourcePending'));
  const fluids = [
    { key: 'engineOil', guidance: 'engineOilGuidance' },
    { key: 'coolant', guidance: 'coolantGuidance' },
    { key: 'brakeFluid', guidance: 'brakeFluidGuidance' },
    { key: 'gearboxFluid', guidance: 'gearboxFluidGuidance' },
    { key: 'finalDriveFluid', guidance: 'finalDriveFluidGuidance' },
    { key: 'forkOil', guidance: 'forkOilGuidance' }
  ];
  const maintenance = [
    { title: 'planGeneralService', note: 'planServiceRange' },
    { title: 'planInspection', note: 'planInspectionRange' },
    { title: 'planAnnualService', note: 'planAnnualServiceNote' },
    { title: 'planFuelFilter', note: 'planFuelFilterInterval' },
    { title: 'planBearings', note: 'planBearingsNote' },
    { title: 'planChainGuide', note: 'planChainNote' },
    { title: 'planSplines', note: 'planSplineNote' }
  ];
  const torques = [
    { title: 'torqueOilDrain', value: '32 Nm · 23.6 ft·lb' },
    { title: 'torqueOilFilter', value: '8 Nm · 5.9 ft·lb' },
    { title: 'torqueGearDrain', value: '20 Nm · 14.8 ft·lb' },
    { title: 'torqueGearFill', value: '23 Nm · 17.0 ft·lb' },
    { title: 'torqueFinalDriveDrain', value: '25 Nm · 18.4 ft·lb' },
    { title: 'torqueFinalDriveFill', value: '20 Nm · 14.8 ft·lb' },
    { title: 'torqueSparkPlug', value: '20 Nm · 14.8 ft·lb' },
    { title: 'torqueClutchNut', value: '140 Nm · 103.3 ft·lb' }
  ];
  const manuals = [
    { title: t('userManualSpanish'), language: 'Español', file: './manuales/instrucciones-es.pdf' },
    { title: t('maintenanceSchedule'), language: 'English', file: './manuales/agenda-mantenimiento-en.pdf' },
    { title: t('k75Manual'), language: 'English · United States', file: './manuales/k75-riders-manual-1994-us-en.pdf' }
  ];

  $('#modelLibrary').innerHTML = `
    <details open>
      <summary>${t('technicalSheet')} · ${escapeHtml(vehicle.model || 'BMW K75 S')}<span>${escapeHtml(vehicle.year || t('unknown'))}</span></summary>
      <div class="spec-table">
        ${detail('model', vehicle.model)}
        ${detail('manufactureYears', vehicle.year)}
        ${detail('market', vehicle.market)}
        ${detail('buildDate', vehicle.buildDate)}
        ${detail('firstRegistration', vehicle.registrationDate)}
        ${detail('engine', vehicle.engine)}
        ${detail('abs', vehicle.abs === 'yes' ? t('yes') : vehicle.abs === 'no' ? t('no') : '')}
        ${detail('gearboxCode', vehicle.gearboxCode)}
        ${detail('finalDriveCode', vehicle.finalDriveCode)}
      </div>
      <p class="detail-placeholder">${t('profileSource')}</p>
    </details>
    <details>
      <summary>${t('maintenance')}<span>${t('secondarySourceLabel')}</span></summary>
      <div class="fluid-grid">
        ${maintenance.map(item => `
          <article class="fluid-card">
            <h3>${t(item.title)}</h3>
            <p>${t(item.note)}</p>
          </article>`).join('')}
      </div>
      <p class="detail-placeholder">${t('maintenanceSource')}<br>${t('maintenanceApplicability')}</p>
    </details>
    <details>
      <summary>${t('fluids')}<span>${t('secondarySourceLabel')}</span></summary>
      <div class="fluid-grid">
        ${fluids.map(fluid => `
          <article class="fluid-card">
            <h3>${t(fluid.key)}</h3>
            <strong>${t('fluidUnknownTypeCapacity')}</strong>
            <p>${t(fluid.guidance)}</p>
            <p class="fluid-source">${t('fluidSource')}<br>${t('fluidPersonalGuide')}<br>${t('fluidApplicability')}<br>
              <a href="./manuales/agenda-mantenimiento-en.pdf" target="_blank" rel="noopener">${t('fluidSourceDocument')}</a>
            </p>
          </article>`).join('')}
      </div>
    </details>
    <details>
      <summary>${t('torque')}<span>${t('secondarySourceLabel')}</span></summary>
      <div class="spec-table torque-table">
        ${torques.map(torque => `<div><span>${t(torque.title)}</span><strong>${torque.value}</strong></div>`).join('')}
      </div>
      <p class="detail-placeholder">${t('torqueSource')}<br>${t('torqueApplicability')}<br>${t('clutchTorqueCaution')}<br>${t('torqueNote')}</p>
    </details>
    <details>
      <summary>${t('oem')}<span>${t('unknown')}</span></summary>
      <p class="detail-placeholder">${t('oemNote')}</p>
      <a class="source-link" href="https://www.realoem.com/bmw/enUS/select?product=M&archive=1" target="_blank" rel="noopener">${t('oemCatalog')}</a>
    </details>
    <details>
      <summary>${t('userDocuments')}<span>${manuals.length}</span></summary>
      <div class="manual-documents">${manuals.map(manual => `
        <article class="document-card">
          <div><h3>${manual.title}</h3><p>${t('manualLanguage')}: ${manual.language}<br>${t('documentSource')}</p></div>
          <div class="document-actions">
            <a class="small-action" href="${manual.file}" target="_blank" rel="noopener">${t('openPdf')}</a>
            <a class="small-action" href="${manual.file}" download>${t('downloadPdf')}</a>
          </div>
        </article>`).join('')}</div>
      <p class="detail-placeholder">${t('manualCopyright')}</p>
    </details>`;
}

function render() {
  renderDashboard();
  renderHistory();
  renderReminders();
  renderVehicleForm();
  renderModelLibrary();
  applyLanguage();
}

function resetServiceForm() {
  const form = $('#serviceForm');
  form.reset();
  form.elements.date.value = new Date().toISOString().slice(0, 10);
  editingServiceId = null;
  $('#serviceSubmit').firstElementChild.textContent = t('saveService');
  $('#cancelServiceEdit').hidden = true;
}

function downloadFile(filename, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportCsv() {
  const headers = [t('csvDate'), t('mileageKm'), t('csvOperation'), t('csvCategory'), t('csvParts'), t('csvNotes'), t('csvCost')];
  const rows = data.services.map(service => [service.date, service.km, service.title, service.category, service.parts, service.notes, service.cost]);
  const csv = [headers, ...rows].map(row => row.map(value =>
    `"${String(value ?? '').replace(/"/g, '""')}"`
  ).join(';')).join('\r\n');
  downloadFile('bmw-k-service-history.csv', `\ufeff${csv}`, 'text/csv;charset=utf-8');
}

function compressPhoto(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, 1400 / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      const context = canvas.getContext('2d');
      if (!context) return reject(new Error('Canvas unavailable'));
      context.fillStyle = '#111417';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Image could not be decoded'));
    };
    image.src = url;
  });
}

document.addEventListener('click', event => {
  const navigation = event.target.closest('[data-view]');
  if (navigation) {
    showView(navigation.dataset.view);
    return;
  }
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.editService) {
    const service = data.services.find(item => item.id === button.dataset.editService);
    if (!service) return;
    const form = $('#serviceForm');
    for (const [key, value] of Object.entries(service)) {
      if (form.elements.namedItem(key)) form.elements.namedItem(key).value = value ?? '';
    }
    editingServiceId = service.id;
    $('#serviceSubmit').firstElementChild.textContent = t('editService');
    $('#cancelServiceEdit').hidden = false;
    showView('service');
    form.scrollIntoView({ behavior: 'smooth' });
  } else if (button.dataset.deleteService) {
    if (!window.confirm(t('cancelDelete'))) return;
    data.services = data.services.filter(service => service.id !== button.dataset.deleteService);
    persist();
    toast(t('serviceDeleted'));
  } else if (button.dataset.toggleReminder) {
    const reminder = data.reminders.find(item => item.id === button.dataset.toggleReminder);
    if (reminder) reminder.done = !reminder.done;
    persist();
  } else if (button.dataset.deleteReminder) {
    if (!window.confirm(t('confirmDelete'))) return;
    data.reminders = data.reminders.filter(reminder => reminder.id !== button.dataset.deleteReminder);
    persist();
    toast(t('reminderDeleted'));
  }
});

$('#serviceForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const km = values.get('km');
  if (km !== '' && (!Number.isFinite(Number(km)) || Number(km) < 0)) {
    toast(t('kilometerValidation'));
    return;
  }
  const entry = {
    title: String(values.get('title')).trim(),
    date: values.get('date'),
    km: km === '' ? '' : Number(km),
    category: values.get('category'),
    parts: String(values.get('parts')).trim(),
    notes: String(values.get('notes')).trim(),
    cost: values.get('cost') === '' ? '' : Number(values.get('cost'))
  };
  if (!entry.title) return;
  if (editingServiceId) {
    const index = data.services.findIndex(service => service.id === editingServiceId);
    if (index >= 0) data.services[index] = { ...data.services[index], ...entry };
    toast(t('serviceUpdated'));
  } else {
    data.services.unshift({ id: crypto.randomUUID(), ...entry });
    toast(t('serviceSaved'));
  }
  if (entry.km !== '' && Number(entry.km) > Number(data.vehicle.km || 0)) data.vehicle.km = String(entry.km);
  resetServiceForm();
  persist();
});

$('#cancelServiceEdit').addEventListener('click', resetServiceForm);

$('#reminderForm').addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const km = values.get('km');
  const date = values.get('date');
  if (!String(values.get('title')).trim()) return toast(t('createReminderName'));
  if (km === '' && !date) return toast(t('chooseReminderLimit'));
  if (km !== '' && (!Number.isFinite(Number(km)) || Number(km) < 0)) return toast(t('kilometerValidation'));
  data.reminders.push({
    id: crypto.randomUUID(),
    title: String(values.get('title')).trim(),
    km: km === '' ? '' : Number(km),
    date,
    notes: String(values.get('notes')).trim(),
    done: false
  });
  event.currentTarget.reset();
  persist();
  toast(t('reminderCreated'));
});

$('#generateBasePlanBtn').addEventListener('click', generateBasePlan);

$('#vehicleForm').addEventListener('submit', event => {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const km = values.get('km');
  if (km !== '' && (!Number.isFinite(Number(km)) || Number(km) < 0)) return toast(t('kilometerValidation'));
  data.vehicle = {
    ...data.vehicle,
    model: values.get('model'),
    year: values.get('year'),
    market: String(values.get('market')).trim(),
    buildDate: values.get('buildDate'),
    registrationDate: values.get('registrationDate'),
    km: km === '' ? '' : String(Number(km)),
    engine: String(values.get('engine')).trim(),
    abs: values.get('abs'),
    gearboxCode: String(values.get('gearboxCode')).trim(),
    finalDriveCode: String(values.get('finalDriveCode')).trim(),
    vin: String(values.get('vin')).trim().toUpperCase()
  };
  persist();
  toast(t('vehicleSaved'));
});

$('#vehicleForm').elements.model.addEventListener('change', () => {
  const form = $('#vehicleForm');
  form.elements.engine.value = '';
  form.elements.abs.value = '';
  form.elements.gearboxCode.value = '';
  form.elements.finalDriveCode.value = '';
});

$('#languageSelect').addEventListener('change', event => {
  data.language = event.target.value === 'en' ? 'en' : 'es';
  persist();
  toast(t('languageChanged'));
});

$('#vehiclePhotoInput').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 12 * 1024 * 1024) {
    toast(t('photoError'));
    event.target.value = '';
    return;
  }
  const previousPhoto = data.vehicle.photo;
  try {
    data.vehicle.photo = await compressPhoto(file);
    persist();
    toast(t('photoSaved'));
  } catch {
    data.vehicle.photo = previousPhoto;
    renderVehiclePhoto();
    toast(t('photoError'));
  }
  event.target.value = '';
});

$('#useGenericPhoto').addEventListener('click', () => {
  data.vehicle.photo = '';
  persist();
  toast(t('photoReset'));
});

$('#backupBtn').addEventListener('click', () => {
  downloadFile('bmw-k-service-book-backup.json', JSON.stringify(data, null, 2), 'application/json');
});

$('#exportBtn').addEventListener('click', exportCsv);
$('#exportAllCsvBtn').addEventListener('click', exportCsv);

$('#importFile').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!imported || typeof imported !== 'object' ||
      !imported.vehicle || !Array.isArray(imported.services) || !Array.isArray(imported.reminders)) {
      throw new Error('Invalid backup shape');
    }
    data = {
      ...structuredClone(DEFAULT_DATA),
      ...imported,
      vehicle: {
        ...DEFAULT_DATA.vehicle,
        ...imported.vehicle,
        photo: typeof imported.vehicle.photo === 'string' &&
          imported.vehicle.photo.startsWith('data:image/jpeg;base64,') ? imported.vehicle.photo : ''
      },
      services: imported.services,
      reminders: imported.reminders,
      language: imported.language === 'en' ? 'en' : 'es'
    };
    persist();
    toast(t('backupRestored'));
  } catch {
    toast(t('invalidBackup'));
  }
  event.target.value = '';
});

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPrompt = event;
  $('#installBtn').hidden = false;
});

$('#installBtn').addEventListener('click', async () => {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  $('#installBtn').hidden = true;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => console.error('Service worker registration failed:', error));
  });
}

$('#serviceForm').elements.date.value = localDateString();
render();
