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
    pendingPlanTitle: 'Plan verificado pendiente',
    k75PlanTitle: 'Intervalos K75 · Moto Técnica',
    reminderSourceNote: 'El plan genérico procede de una agenda secundaria para varias series K. No confirma la variante ni el último mantenimiento; contrasta cada operación con documentación aplicable.',
    k75ReminderSourceNote: 'Para K75 se prioriza la tabla de Moto Técnica n.º 14 (1996), p. 26. Es una revista técnica independiente, no documentación oficial de BMW AG. El plan parte del kilometraje actual, no del último servicio registrado.',
    unverifiedScheduleNote: 'La agenda genérica es secundaria y no se usa para generar avisos porque su aplicabilidad a esta variante no está verificada.',
    generateBasePlan: 'Generar plan base', basePlanNeedsMileage: 'Introduce primero el kilometraje actual exacto en la ficha del garaje.',
    basePlanUnsupported: 'No hay un plan de mantenimiento verificado para este modelo y año.',
    basePlanAlreadyExists: 'Ya hay un plan base para este modelo y año.',
    basePlanReady: 'Se usarán los límites inferiores de los rangos publicados; los avisos se calculan desde el kilometraje actual y la fecha de creación.',
    k75BasePlanReady: 'Plan K75 en km; se calcula desde la lectura actual y la fecha de creación, sin asumir el último servicio.',
    k75PendingPlanNote: 'Intervalos K75 pendientes para este año: Moto Técnica cubre modelos 1986–1991.',
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
    planServiceRange: 'La agenda secundaria indica servicio cada 6.437–9.656 km; el plan usa 6.437 km.',
    planInspectionRange: 'La agenda secundaria indica inspección cada 12.875–19.312 km; el plan usa 12.875 km.',
    planAnnualServiceNote: 'La agenda secundaria incluye una revisión anual, sin definir aquí todos sus trabajos.',
    planBrakeInterval: 'La agenda indica DOT 4 y sustitución anual; no especifica capacidad.',
    planCoolantInterval: 'La agenda indica sustitución cada 2 años; no da capacidad ni una especificación química BMW.',
    planFuelFilterInterval: 'La agenda indica 19.312 km con combustible deficiente o 38.624 km en condiciones normales. El plan usa 19.312 km.',
    planPoorFuel: 'El plan usa 19.312 km; la fuente permite 38.624 km con combustible de calidad normal.',
    planBearingsNote: 'La agenda secundaria indica 40.234 km; inspecciona holgura y estado antes de sustituir.',
    planChainNote: 'La agenda secundaria indica 57.936 km. Aplicabilidad exacta pendiente.',
    planSplineNote: 'La agenda indica lubricación anual; para motos fabricadas desde 1990 indica 64.374 km.',
    planColdOilNote: 'Solo para trayectos cortos o temperatura ambiente inferior a 0 °C: 3 meses o 2.897 km, lo que ocurra primero. La guía personal de 2019 sugiere otros intervalos de aceite; ninguno está confirmado por BMW para esta unidad.',
    planDustNote: 'Solo en uso con polvo: la agenda indica revisar a 9.656 km y con mayor frecuencia.',
    planK75OilLevel: 'Comprobar nivel de aceite del motor',
    planK75OilChange: 'Cambiar aceite del motor',
    planK75OilFilter: 'Sustituir filtro de aceite',
    planK75CoolantCheck: 'Comprobar refrigerante y manguitos',
    planK75CoolantChange: 'Renovar refrigerante',
    planK75AirFilter: 'Sustituir filtro de aire',
    planK75FuelFilter: 'Sustituir filtro de gasolina',
    planK75SparkCheck: 'Comprobar / limpiar bujías y separación',
    planK75SparkReplace: 'Sustituir bujías',
    planK75ValveClearance: 'Comprobar juego de válvulas',
    planK75TransmissionOil: 'Cambiar aceite de caja y grupo cónico',
    planK75ForkOil: 'Cambiar aceite de horquilla',
    planK75BrakeFluid: 'Sustituir líquido de frenos DOT 4',
    planK75BrakePads: 'Comprobar desgaste de pastillas de freno',
    planK75BrakeShoes: 'Comprobar desgaste de segmentos de freno',
    planK75Steering: 'Comprobar dirección y rodamientos',
    planK75Tyres: 'Comprobar presión y estado de neumáticos',
    planK75Abs: 'Comprobar entrehierro de captadores ABS',
    k75OilLevelFrequency: 'Cada 500 km.',
    k75OilChangeFrequency: 'Cada 7.500 km o 6 meses; cada 3 meses con trayectos cortos o temperatura inferior a 0 °C.',
    k75OilFilterFrequency: 'Cada 15.000 km; primera sustitución a los 1.000 km.',
    k75CoolantCheckFrequency: 'Cada 7.500 km; primera comprobación a los 1.000 km.',
    k75CoolantChangeFrequency: 'Cada 2 años.',
    k75AirFilterFrequency: 'Cada 15.000 km; cada 7.500 km o antes en ambientes polvorientos.',
    k75FuelFilterFrequency: 'Cada 30.000 km; cada 15.000 km si el uso es escaso.',
    k75SparkCheckFrequency: 'Revisión y limpieza cada 7.500 km; sustitución cada 15.000 km.',
    k75SparkReplaceFrequency: 'Cada 15.000 km.',
    k75ValveClearanceFrequency: 'Cada 7.500 km; primera comprobación a los 1.000 km.',
    k75TransmissionOilFrequency: 'Cada 15.000 km o, como mínimo, cada año; primera operación a los 1.000 km.',
    k75ForkOilFrequency: 'Primera operación a los 1.000 km y después cada 15.000 km.',
    k75BrakeFluidFrequency: 'Cada 2 años. DOT 4; la fuente no indica capacidad.',
    k75BrakePadsFrequency: 'Comprobar cada 7.500 km.',
    k75BrakeShoesFrequency: 'Comprobar cada 7.500 km; aplicable a la configuración con freno trasero de tambor.',
    k75SteeringFrequency: 'Primera comprobación a los 1.000 km y después cada 15.000 km.',
    k75TyresFrequency: 'Cada 1.000 km.',
    k75AbsFrequency: 'A los 1.000 km, cada 7.500 km y cada vez que se desmonte una rueda; solo si equipa ABS.',
    k75ScheduleSource: 'Fuente prioritaria del proyecto: Moto Técnica, estudio BMW K75 1986–1991, n.º 14 (1996), tabla p. 26. La revista no es documentación oficial de BMW AG.',
    k75ScheduleApplicability: 'Aplicable a la tabla de mantenimiento de K75; motor y fluidos compartidos por las variantes K75. Las comprobaciones de frenos, ABS y horquilla dependen del equipamiento. El plan no presupone el historial.',
    k100ScheduleSource: 'La agenda K-Models es una fuente secundaria genérica; no se dispone aquí de una tabla de mantenimiento verificada para esta variante K100.',
    k100ScheduleApplicability: 'Los datos de fluidos K100 mostrados se limitan a motores de 2 válvulas cubiertos por Haynes 1988. No se extrapolan a K100 4V, K1 ni K1100.',
    k75EngineGroup: 'K75 · motor tricilíndrico común a K75 C, S y RT',
    k100EngineGroup: 'K100 · motor de 2 válvulas cubierto por Haynes 1988',
    unverifiedEngineGroup: 'Pendiente de identificar la familia de motor aplicable',
    dueKm: 'Vencimiento (km)', deadline: 'Fecha límite', createReminder: 'Crear recordatorio',
    upcomingEyebrow: 'AVISOS / 08', reminderDisclaimer: 'Un aviso vence al alcanzar la fecha o el kilometraje, lo que ocurra primero. El kilometraje actual no indicado no se estima.',
    createReminderName: 'Escribe una operación.', chooseReminderLimit: 'Indica una fecha o un kilometraje.',
    reminderCreated: 'Recordatorio creado', reminderDeleted: 'Recordatorio eliminado',
    completed: 'COMPLETADO', overdue: 'VENCIDO', pending: 'PENDIENTE', markDone: 'Hecho', reactivate: 'Reactivar',
    noPending: 'No tienes recordatorios pendientes.', manualEyebrow: 'DATOS DE TALLER / 09',
    manualIntro: 'Esta pantalla muestra una sola ficha: la variante activa del garaje. Cambia el modelo o el año en los datos de la moto.',
    sourceStatus: 'Estado de las fuentes', libraryNote: 'Para K75 se prioriza Moto Técnica (revista técnica independiente, no oficial BMW AG), contrastada con Haynes 1988. Para K100 solo se muestran datos de motores 2V cubiertos por Haynes 1988. No se extrapolan datos a K100 4V, K1 o K1100.',
    technicalSheet: 'Ficha del vehículo', applicability: 'Aplicabilidad', unknown: 'Pendiente de contrastar',
    manufactureYears: 'Año de fabricación', europeanBase: 'Mercado europeo como base',
    engine: 'Motor', engineFamily: 'Familia de motor', displacement: 'Cilindrada', power: 'Potencia', cooling: 'Refrigeración',
    maintenance: 'Mantenimiento e intervalos', fluids: 'Fluidos y capacidades',
    maintenancePendingTitle: 'Intervalos pendientes',
    maintenancePendingNote: 'No se muestran intervalos sin una fuente aplicable y contrastada para este modelo/año.',
    maintenanceSource: 'Agenda secundaria K-Models facilitada; intervalos genéricos de varias series K. Las recomendaciones personales dws (2019) no se consideran intervalos BMW.',
    maintenanceApplicability: 'La agenda genérica no confirma la aplicabilidad exacta por modelo, año o mercado. Para K75 se usa la tabla de Moto Técnica en km; para el resto, los intervalos permanecen secundarios o pendientes.',
    torque: 'Pares de apriete', oem: 'Referencias OEM', oemNote: 'Catálogo externo enlazado; compatibilidad y sustituciones pendientes de validar por variante/VIN.',
    pendingValue: 'Pendiente de fuente BMW aplicable', pendingOem: 'Pendiente de validar por variante y número de pieza',
    buildDate: 'Fecha de fabricación', firstRegistration: 'Primera matriculación', abs: 'ABS',
    gearboxCode: 'Código de caja', finalDriveCode: 'Código del grupo final',
    pendingIdentification: 'Pendiente de identificar', profileSource: 'Datos del perfil del garaje. No se infiere equipamiento ni código de componente.',
    engineOil: 'Aceite del motor', coolant: 'Refrigerante', brakeFluid: 'Líquido de frenos',
    gearboxFluid: 'Aceite de caja', finalDriveFluid: 'Aceite del grupo final', forkOil: 'Aceite de horquilla',
    sourcePending: 'Pendiente de fuente y aplicabilidad confirmadas',
    fluidUnknownTypeCapacity: 'Cantidad o especificación para esta variante: pendiente de una fuente aplicable.',
    secondarySourceLabel: 'Fuente secundaria',
    torqueNote: 'Moto Técnica expresa estos pares en m.daN; se muestran en Nm tras multiplicar por 10. La revista es la referencia prioritaria del proyecto, no documentación oficial de BMW AG. No se muestran valores sin aplicabilidad suficiente.',
    torqueSource: 'Fuente prioritaria: Moto Técnica, BMW K75 1986–1991, n.º 14 (1996), pp. 49, 54, 74, 89 y 91.',
    torqueApplicability: 'Los pares corresponden al componente indicado en la revista K75; confirmar fijación, variante y procedimiento en el manual aplicable antes de intervenir.',
    torqueSecondarySource: 'Referencia secundaria: EN - K75-K100_Torque_Specs.pdf. Tabla de una página sin autor, año ni variante documentados.',
    torqueSecondaryApplicability: 'Se muestra solo como referencia provisional para K100 2V; no es una especificación BMW y no se extrapola a K100 4V, K1 o K1100.',
    torqueHead: 'Apriete de culata (2 etapas)',
    torqueCamCrank: 'Tornillo delantero del cigüeñal',
    torqueCamTensioner: 'Tornillo del tensor de distribución',
    torqueCamSupport: 'Tornillos de semicojinetes de árbol de levas',
    torqueCamSprocket: 'Tornillos de piñones de árbol de levas',
    torqueCamCover: 'Tornillos de tapas de árbol de levas',
    torqueOilDrain: 'Tapón de vaciado del motor',
    torqueOilFilter: 'Tapa del filtro de aceite',
    torqueGearDrain: 'Tapón de vaciado de caja',
    torqueGearFill: 'Tapón de llenado de caja',
    torqueSparkPlug: 'Bujía',
    torqueClutchBolts: 'Tornillos de fijación de embrague',
    torqueForkUpper: 'Sujeción de horquilla · tija superior',
    torqueForkLower: 'Sujeción de horquilla · tija inferior',
    torqueSteeringStem: 'Sujeción de columna de dirección',
    torqueFrontAxleNut: 'Tuerca del eje de rueda delantera',
    torqueFrontAxlePinch: 'Sujeción del eje de rueda delantera',
    torqueBrakeCaliper: 'Fijaciones de pinza de freno',
    torqueRearShock: 'Fijaciones del amortiguador trasero',
    torqueFinalDriveSwingarm: 'Fijaciones de grupo cónico al basculante',
    torqueFinalDriveDrain: 'Tapón de vaciado del grupo cónico',
    torqueFinalDriveFill: 'Tapón de llenado del grupo cónico',
    torqueWheelBolts: 'Tornillos de fijación de rueda',
    torqueSourceP49: 'Moto Técnica, p. 49',
    torqueSourceP54: 'Moto Técnica, p. 54',
    torqueSourceP74: 'Moto Técnica, p. 74',
    torqueSourceP89: 'Moto Técnica, p. 89',
    torqueSourceP91: 'Moto Técnica, p. 91',
    torqueSourceChart: 'Tabla secundaria K75/100',
    fluidApplicabilityK75: 'K75 1986–1991; los valores de motor se comparten entre K75 C/S/RT. La horquilla depende de la suspensión.',
    fluidApplicabilityK100: 'Haynes 1988, motores K100 de 2 válvulas; mercado y variante exactos deben confirmarse. No extrapolar a 4V.',
    fluidApplicabilityK75Fork: 'K75 S con suspensión Sport; para K75 C y otras horquillas, usar el valor que corresponda a la versión.',
    fluidPendingForVariant: 'No se extrapola a esta familia, año o configuración; dato pendiente.',
    fluidEngineOilK75: 'Aceite multigrado API SE/SF; la viscosidad depende de la temperatura ambiente según la tabla de la fuente.',
    fluidCoolantK75: 'Capacidad total. La revista describe refrigerante con inhibidor compatible con aleaciones ligeras, sin fijar una marca o química concreta.',
    fluidBrakeK75: 'DOT 4. La capacidad no está indicada en la fuente.',
    fluidGearboxK75: 'Aceite hipoide API GL-5; SAE 90 por encima de +5 °C y SAE 80 por debajo de +5 °C.',
    fluidFinalDriveK75: 'Aceite hipoide API GL-5; SAE 80 o SAE 90 según la temperatura exterior.',
    fluidForkK75: 'Aceite hidráulico para horquilla; la revista enumera varios productos y no fija una viscosidad única.',
    fluidEngineOilK100: 'Haynes indica aceite de motor de calidad HD, API SE/SF, con filtro.',
    fluidGearboxK100: 'Haynes indica aceite hipoide API GL-5 (o MIL-L-2105 B/C); SAE 90 sobre +5 °C, SAE 80 bajo +5 °C o SAE 80W-90.',
    fluidFinalDriveK100: 'Aceite hipoide API GL-5, según Haynes 1988.',
    fluidBrakeK100: 'DOT 4; Haynes no indica la capacidad.',
    fluidForkK100: 'Cantidad por brazo según la horquilla descrita en Haynes 1988; confirmar la configuración instalada.',
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
    pendingPlanTitle: 'Verified plan pending',
    k75PlanTitle: 'K75 intervals · Moto Técnica',
    reminderSourceNote: 'The generic plan comes from a secondary schedule for several K series. It does not confirm the exact variant or last service; verify every task against applicable documentation.',
    k75ReminderSourceNote: 'For the K75, the plan prioritizes the table in Moto Técnica No. 14 (1996), p. 26. It is an independent technical magazine, not official BMW AG documentation. The plan starts from current mileage, not the last recorded service.',
    unverifiedScheduleNote: 'The generic schedule is secondary and is not used to generate reminders because its applicability to this variant is unverified.',
    generateBasePlan: 'Generate base plan', basePlanNeedsMileage: 'Enter the exact current mileage in the garage details first.',
    basePlanUnsupported: 'No verified maintenance plan is available for this model and year.',
    basePlanAlreadyExists: 'A base plan already exists for this model and year.',
    basePlanReady: 'The lower end of published ranges is used; reminders start from the current mileage and plan creation date.',
    k75BasePlanReady: 'K75 plan in km; calculated from the current reading and creation date, without assuming the last service.',
    k75PendingPlanNote: 'K75 intervals are pending for this year; Moto Técnica covers 1986–1991 models.',
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
    planServiceRange: 'The secondary schedule lists service every 6,437–9,656 km; the plan uses 6,437 km.',
    planInspectionRange: 'The secondary schedule lists inspection every 12,875–19,312 km; the plan uses 12,875 km.',
    planAnnualServiceNote: 'The secondary schedule includes an annual service but does not define all tasks here.',
    planBrakeInterval: 'The schedule lists DOT 4 and annual replacement; capacity is not stated.',
    planCoolantInterval: 'The schedule lists replacement every 2 years; it gives no capacity or BMW chemical specification.',
    planFuelFilterInterval: 'The schedule lists 19,312 km with poor fuel or 38,624 km under normal conditions. The plan uses 19,312 km.',
    planPoorFuel: 'The plan uses 19,312 km; the source allows 38,624 km with normal fuel quality.',
    planBearingsNote: 'The secondary schedule lists 40,234 km; inspect play and condition before replacing.',
    planChainNote: 'The secondary schedule lists 57,936 km. Exact applicability is unconfirmed.',
    planSplineNote: 'The schedule lists annual lubrication; motorcycles built from 1990 onward are listed at 64,374 km.',
    planColdOilNote: 'Only for short trips or ambient temperatures below 0 °C: 3 months or 2,897 km, whichever comes first. The 2019 personal guide suggests different oil intervals; neither is confirmed by BMW for this motorcycle.',
    planDustNote: 'Only in dusty use: the schedule lists inspection at 9,656 km and more frequent checks.',
    planK75OilLevel: 'Check engine oil level',
    planK75OilChange: 'Change engine oil',
    planK75OilFilter: 'Replace oil filter',
    planK75CoolantCheck: 'Check coolant and hoses',
    planK75CoolantChange: 'Replace coolant',
    planK75AirFilter: 'Replace air filter',
    planK75FuelFilter: 'Replace fuel filter',
    planK75SparkCheck: 'Check / clean spark plugs and gap',
    planK75SparkReplace: 'Replace spark plugs',
    planK75ValveClearance: 'Check valve clearances',
    planK75TransmissionOil: 'Change gearbox and final-drive oil',
    planK75ForkOil: 'Change fork oil',
    planK75BrakeFluid: 'Replace DOT 4 brake fluid',
    planK75BrakePads: 'Check brake pad wear',
    planK75BrakeShoes: 'Check brake shoe wear',
    planK75Steering: 'Check steering and bearings',
    planK75Tyres: 'Check tyre pressure and condition',
    planK75Abs: 'Check ABS sensor air gap',
    k75OilLevelFrequency: 'Every 500 km.',
    k75OilChangeFrequency: 'Every 7,500 km or 6 months; every 3 months for short trips or ambient temperatures below 0 °C.',
    k75OilFilterFrequency: 'Every 15,000 km; first replacement at 1,000 km.',
    k75CoolantCheckFrequency: 'Every 7,500 km; first check at 1,000 km.',
    k75CoolantChangeFrequency: 'Every 2 years.',
    k75AirFilterFrequency: 'Every 15,000 km; every 7,500 km or sooner in dusty conditions.',
    k75FuelFilterFrequency: 'Every 30,000 km; every 15,000 km with infrequent use.',
    k75SparkCheckFrequency: 'Inspect and clean every 7,500 km; replace every 15,000 km.',
    k75SparkReplaceFrequency: 'Every 15,000 km.',
    k75ValveClearanceFrequency: 'Every 7,500 km; first check at 1,000 km.',
    k75TransmissionOilFrequency: 'Every 15,000 km or at least annually; first service at 1,000 km.',
    k75ForkOilFrequency: 'First service at 1,000 km, then every 15,000 km.',
    k75BrakeFluidFrequency: 'Every 2 years. DOT 4; capacity is not stated by the source.',
    k75BrakePadsFrequency: 'Check every 7,500 km.',
    k75BrakeShoesFrequency: 'Check every 7,500 km; applies to rear drum-brake configuration.',
    k75SteeringFrequency: 'First check at 1,000 km, then every 15,000 km.',
    k75TyresFrequency: 'Every 1,000 km.',
    k75AbsFrequency: 'At 1,000 km, every 7,500 km and whenever a wheel is removed; only if ABS is fitted.',
    k75ScheduleSource: 'Project-priority source: Moto Técnica, BMW K75 1986–1991 study, No. 14 (1996), maintenance table p. 26. The magazine is not official BMW AG documentation.',
    k75ScheduleApplicability: 'Applies to the K75 maintenance table; engine and fluid values are shared by K75 variants. Brake, ABS and fork checks depend on equipment. The plan does not assume service history.',
    k100ScheduleSource: 'The K-Models schedule is a generic secondary source; no verified maintenance table for this K100 variant is available here.',
    k100ScheduleApplicability: 'Displayed K100 fluid data is limited to 2-valve engines covered by Haynes 1988. No extrapolation to K100 4V, K1 or K1100.',
    k75EngineGroup: 'K75 · three-cylinder engine shared by K75 C, S and RT',
    k100EngineGroup: 'K100 · 2-valve engine covered by Haynes 1988',
    unverifiedEngineGroup: 'Applicable engine family not yet identified',
    dueKm: 'Due at (km)', deadline: 'Due date', createReminder: 'Create reminder',
    upcomingEyebrow: 'ALERTS / 08', reminderDisclaimer: 'A reminder is due when either its date or mileage is reached, whichever comes first. Unknown current mileage is not estimated.',
    createReminderName: 'Enter an operation.', chooseReminderLimit: 'Set a date or mileage.',
    reminderCreated: 'Reminder created', reminderDeleted: 'Reminder deleted',
    completed: 'COMPLETED', overdue: 'OVERDUE', pending: 'PENDING', markDone: 'Done', reactivate: 'Reactivate',
    noPending: 'No pending reminders.', manualEyebrow: 'WORKSHOP DATA / 09',
    manualIntro: 'This screen shows a single sheet for the active garage model. Change the motorcycle model or year in its details.',
    sourceStatus: 'Source status', libraryNote: 'For K75, Moto Técnica (an independent technical magazine, not official BMW AG) is prioritized and cross-checked with Haynes 1988. K100 data is limited to 2-valve engines covered by Haynes 1988. No data is extrapolated to K100 4V, K1 or K1100.',
    technicalSheet: 'Vehicle details', applicability: 'Applicability', unknown: 'Not yet verified',
    manufactureYears: 'Manufacture year', europeanBase: 'European market as baseline',
    engine: 'Engine', engineFamily: 'Engine family', displacement: 'Displacement', power: 'Power', cooling: 'Cooling',
    maintenance: 'Maintenance intervals', fluids: 'Fluids and capacities',
    maintenancePendingTitle: 'Intervals pending',
    maintenancePendingNote: 'Intervals are not shown without an applicable, cross-checked source for this model/year.',
    maintenanceSource: 'Supplied K-Models schedule, a generic secondary source for several K series. Personal dws recommendations (2019) are not treated as BMW intervals.',
    maintenanceApplicability: 'The generic schedule does not confirm exact model, year or market applicability. The K75 table uses Moto Técnica intervals in km; other intervals remain secondary or pending.',
    torque: 'Tightening torque', oem: 'OEM references', oemNote: 'External catalog linked; fitment and supersessions require validation by variant/VIN.',
    pendingValue: 'Awaiting applicable BMW source', pendingOem: 'Awaiting validation by variant and part number',
    buildDate: 'Manufacture date', firstRegistration: 'First registration', abs: 'ABS',
    gearboxCode: 'Gearbox code', finalDriveCode: 'Final drive code',
    pendingIdentification: 'Not identified', profileSource: 'Garage profile data. Equipment and component codes are not inferred.',
    engineOil: 'Engine oil', coolant: 'Coolant', brakeFluid: 'Brake fluid',
    gearboxFluid: 'Gearbox oil', finalDriveFluid: 'Final drive oil', forkOil: 'Fork oil',
    sourcePending: 'Awaiting confirmed source and applicability',
    fluidUnknownTypeCapacity: 'Quantity or specification for this variant: awaiting an applicable source.',
    secondarySourceLabel: 'Secondary source',
    torqueNote: 'Moto Técnica gives these values in m.daN; they are displayed in Nm after multiplying by 10. The magazine is the project-priority reference, not official BMW AG documentation. Values without sufficient applicability are omitted.',
    torqueSource: 'Project-priority source: Moto Técnica, BMW K75 1986–1991, No. 14 (1996), pp. 49, 54, 74, 89 and 91.',
    torqueApplicability: 'Values apply to the component identified in the K75 magazine; confirm fitment, variant and procedure in the applicable manual before working.',
    torqueSecondarySource: 'Secondary reference: EN - K75-K100_Torque_Specs.pdf. One-page table with no documented author, year or variant.',
    torqueSecondaryApplicability: 'Shown only as a provisional K100 2V reference; not a BMW specification and not extrapolated to K100 4V, K1 or K1100.',
    torqueHead: 'Cylinder head tightening (2 stages)',
    torqueCamCrank: 'Crankshaft front bolt',
    torqueCamTensioner: 'Timing chain tensioner bolt',
    torqueCamSupport: 'Camshaft bearing-cap bolts',
    torqueCamSprocket: 'Camshaft sprocket bolts',
    torqueCamCover: 'Camshaft cover bolts',
    torqueOilDrain: 'Engine oil drain plug',
    torqueOilFilter: 'Oil filter cover',
    torqueGearDrain: 'Gearbox drain plug',
    torqueGearFill: 'Gearbox fill plug',
    torqueSparkPlug: 'Spark plug',
    torqueClutchBolts: 'Clutch fasteners',
    torqueForkUpper: 'Fork clamp · upper triple clamp',
    torqueForkLower: 'Fork clamp · lower triple clamp',
    torqueSteeringStem: 'Steering stem fastener',
    torqueFrontAxleNut: 'Front wheel axle nut',
    torqueFrontAxlePinch: 'Front wheel axle pinch bolt',
    torqueBrakeCaliper: 'Brake caliper fasteners',
    torqueRearShock: 'Rear shock fasteners',
    torqueFinalDriveSwingarm: 'Final drive to swingarm fasteners',
    torqueFinalDriveDrain: 'Final drive drain plug',
    torqueFinalDriveFill: 'Final drive fill plug',
    torqueWheelBolts: 'Wheel mounting bolts',
    torqueSourceP49: 'Moto Técnica, p. 49',
    torqueSourceP54: 'Moto Técnica, p. 54',
    torqueSourceP74: 'Moto Técnica, p. 74',
    torqueSourceP89: 'Moto Técnica, p. 89',
    torqueSourceP91: 'Moto Técnica, p. 91',
    torqueSourceChart: 'Secondary K75/100 table',
    fluidApplicabilityK75: 'K75 1986–1991; engine values are shared by K75 C/S/RT variants. Fork values depend on suspension.',
    fluidApplicabilityK100: 'Haynes 1988, 2-valve K100 engines; exact market and variant must be confirmed. Do not extrapolate to 4V.',
    fluidApplicabilityK75Fork: 'K75 S with Sport suspension; use the corresponding value for K75 C and other fork configurations.',
    fluidPendingForVariant: 'Not extrapolated to this family, year or configuration; data pending.',
    fluidEngineOilK75: 'Multigrade API SE/SF oil; viscosity depends on ambient temperature according to the source table.',
    fluidCoolantK75: 'Total capacity. The magazine specifies coolant with an inhibitor compatible with light alloys, without naming a specific brand or chemistry.',
    fluidBrakeK75: 'DOT 4. The source does not state capacity.',
    fluidGearboxK75: 'Hypoid API GL-5 oil; SAE 90 above +5 °C and SAE 80 below +5 °C.',
    fluidFinalDriveK75: 'Hypoid API GL-5 oil; SAE 80 or SAE 90 depending on outside temperature.',
    fluidForkK75: 'Hydraulic fork oil; the magazine lists several products and does not specify a single viscosity.',
    fluidEngineOilK100: 'Haynes specifies HD-grade API SE/SF engine oil, with filter.',
    fluidGearboxK100: 'Haynes specifies hypoid API GL-5 (or MIL-L-2105 B/C); SAE 90 above +5 °C, SAE 80 below +5 °C, or SAE 80W-90.',
    fluidFinalDriveK100: 'Hypoid API GL-5 oil, per Haynes 1988.',
    fluidBrakeK100: 'DOT 4; Haynes does not state capacity.',
    fluidForkK100: 'Quantity per fork leg for the fork configuration described in Haynes 1988; confirm the installed setup.',
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
  updateBasePlanControls();
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

function isK75Model(vehicle = data.vehicle) {
  return /^BMW K75(?:\s|$)/i.test(String(vehicle.model || '').trim());
}

function isK75ReferenceCovered(vehicle = data.vehicle) {
  const year = Number(vehicle.year);
  return isK75Model(vehicle) && year >= 1986 && year <= 1991;
}

function isK100TwoValveModel(vehicle = data.vehicle) {
  const model = String(vehicle.model || '').trim();
  const year = Number(vehicle.year);
  return /^BMW K100(?:\s|$)/i.test(model) && year >= 1983 && year <= 1988;
}

function getBasePlanKey(vehicle = data.vehicle) {
  const model = String(vehicle.model || '').trim().toUpperCase();
  if (!isK75ReferenceCovered(vehicle)) return '';
  return `k75-moto-tecnica-v1:${model}:${vehicle.year || ''}:${vehicle.market || ''}`;
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
  const k75Plan = isK75ReferenceCovered();
  const warning = $('.warning-note');
  if (warning) {
    const label = $('b', warning);
    const message = $('span', warning);
    if (label) label.textContent = t(k75Plan ? 'k75PlanTitle' : 'pendingPlanTitle');
    const messageKey = k75Plan ? 'k75ReminderSourceNote' :
      isK75Model() ? 'k75PendingPlanNote' : 'unverifiedScheduleNote';
    if (message) message.textContent = t(messageKey);
  }
  status.textContent = !planKey ? t('basePlanUnsupported') :
    !hasMileage ? t('basePlanNeedsMileage') :
      exists ? t('basePlanAlreadyExists') : t(k75Plan ? 'k75BasePlanReady' : 'basePlanReady');
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
  if (isK75ReferenceCovered()) {
    const generated = [];
    const applicability = `${t('k75ScheduleSource')} ${t('k75ScheduleApplicability')} ${t('basePlanMileageBasis')} ${formatNumber(currentKm)} km.`;
    const addK75Reminder = ({ title, frequency, km, months }) => {
      generated.push({
        id: crypto.randomUUID(),
        title: t(title),
        km: km ? currentKm + km : '',
        date: months ? addCalendarMonths(today, months) : '',
        notes: `${t(frequency)} ${applicability}`,
        done: false,
        planKey
      });
    };

    addK75Reminder({ title: 'planK75OilLevel', frequency: 'k75OilLevelFrequency', km: 500 });
    addK75Reminder({ title: 'planK75OilChange', frequency: 'k75OilChangeFrequency', km: 7500, months: 6 });
    addK75Reminder({ title: 'planK75OilFilter', frequency: 'k75OilFilterFrequency', km: 15000 });
    addK75Reminder({ title: 'planK75CoolantCheck', frequency: 'k75CoolantCheckFrequency', km: 7500 });
    addK75Reminder({ title: 'planK75CoolantChange', frequency: 'k75CoolantChangeFrequency', months: 24 });
    addK75Reminder({ title: 'planK75AirFilter', frequency: 'k75AirFilterFrequency', km: 15000 });
    addK75Reminder({ title: 'planK75FuelFilter', frequency: 'k75FuelFilterFrequency', km: 30000 });
    addK75Reminder({ title: 'planK75SparkCheck', frequency: 'k75SparkCheckFrequency', km: 7500 });
    addK75Reminder({ title: 'planK75SparkReplace', frequency: 'k75SparkReplaceFrequency', km: 15000 });
    addK75Reminder({ title: 'planK75ValveClearance', frequency: 'k75ValveClearanceFrequency', km: 7500 });
    addK75Reminder({ title: 'planK75TransmissionOil', frequency: 'k75TransmissionOilFrequency', km: 15000, months: 12 });
    addK75Reminder({ title: 'planK75ForkOil', frequency: 'k75ForkOilFrequency', km: 15000 });
    addK75Reminder({ title: 'planK75BrakeFluid', frequency: 'k75BrakeFluidFrequency', months: 24 });
    addK75Reminder({ title: 'planK75BrakePads', frequency: 'k75BrakePadsFrequency', km: 7500 });
    addK75Reminder({ title: 'planK75Steering', frequency: 'k75SteeringFrequency', km: 15000 });
    addK75Reminder({ title: 'planK75Tyres', frequency: 'k75TyresFrequency', km: 1000 });
    if (data.vehicle.abs === 'yes') {
      addK75Reminder({ title: 'planK75Abs', frequency: 'k75AbsFrequency', km: 7500 });
    }
    if (/^BMW K75 C$/i.test(String(data.vehicle.model || '').trim()) &&
      Number(data.vehicle.year) >= 1987 && Number(data.vehicle.year) <= 1989) {
      addK75Reminder({ title: 'planK75BrakeShoes', frequency: 'k75BrakeShoesFrequency', km: 7500 });
    }

    data.reminders.push(...generated);
    persist();
    toast(t('basePlanCreated'));
    return;
  }

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
  const localized = (es, en) => data.language === 'en' ? en : es;
  const year = Number(vehicle.year);
  const isK75 = isK75Model(vehicle);
  const isK100 = /^BMW K100(?:\s|$)/i.test(String(vehicle.model || '').trim());
  const isK100TwoValve = isK100TwoValveModel(vehicle);
  const detail = (label, value) => `<div><span>${t(label)}</span><strong>${escapeHtml(value || t('pendingIdentification'))}</strong></div>`;
  const sourceFor = (key, source) => ({ key, ...source });
  let family = isK75Model(vehicle) ? t('k75EngineGroup') : t('unverifiedEngineGroup');
  let fluids = [];

  if (isK75ReferenceCovered(vehicle)) {
    const model = String(vehicle.model || '');
    const sportFork = /\b(?:S|RT)\b/i.test(model) || year >= 1990;
    const earlyK75C = /\bC\b/i.test(model) && year >= 1987 && year <= 1989;
    const forkValue = sportFork
      ? '280 ± 10 cm³ / ' + localized('botella', 'fork leg')
      : earlyK75C || (year >= 1986 && year <= 1989)
        ? '330 ± 10 cm³ / ' + localized('botella', 'fork leg')
        : t('fluidUnknownTypeCapacity');
    const k75Applicability = t('fluidApplicabilityK75');
    const motoSource = page => `Moto Técnica, BMW K75 1986–1991, n.º 14 (1996), p. ${page}.`;
    fluids = [
      sourceFor('engineOil', {
        value: localized('3,50 L sin filtro · 3,75 L con filtro', '3.50 L without filter · 3.75 L with filter'),
        guidance: t('fluidEngineOilK75'),
        source: `${motoSource(7)} ${localized('Haynes 1988, p. 26, confirma 3,75 L con filtro.', 'Haynes 1988, p. 26, confirms 3.75 L with filter.')}`,
        applicability: k75Applicability
      }),
      sourceFor('coolant', {
        value: localized('2,9 L total', '2.9 L total'),
        guidance: `${t('fluidCoolantK75')} ${localized('El procedimiento describe 2,5 L en el circuito y unos 0,4 L adicionales si se vacía el vaso de expansión.', 'The procedure describes 2.5 L in the circuit plus about 0.4 L if the expansion tank is drained.')}`,
        source: `${motoSource('7–8')}`,
        applicability: k75Applicability
      }),
      sourceFor('brakeFluid', {
        value: localized('DOT 4 · cantidad no indicada', 'DOT 4 · capacity not stated'),
        guidance: t('fluidBrakeK75'),
        source: motoSource(9),
        applicability: k75Applicability
      }),
      sourceFor('gearboxFluid', {
        value: localized('0,85 L', '0.85 L'),
        guidance: t('fluidGearboxK75'),
        source: `${motoSource(7)} ${localized('Haynes 1988, p. 26, indica 0,85 ± 0,05 L. El manual Rider’s 1994 (EE. UU.), p. 73, cita 0,8 L; no se aplica a esta K75 europea de 1987.', 'Haynes 1988, p. 26, states 0.85 ± 0.05 L. The 1994 US Rider’s Manual, p. 73, lists 0.8 L; it is not applied to this 1987 European K75.')}`,
        applicability: k75Applicability
      }),
      sourceFor('finalDriveFluid', {
        value: localized('0,26 L', '0.26 L'),
        guidance: t('fluidFinalDriveK75'),
        source: `${motoSource(8)} ${localized('Haynes 1988, p. 26, confirma 0,26 L. El manual Rider’s 1994 (EE. UU.), p. 73, cita 0,25 L; no se aplica a esta K75 europea de 1987.', 'Haynes 1988, p. 26, confirms 0.26 L. The 1994 US Rider’s Manual, p. 73, lists 0.25 L; it is not applied to this 1987 European K75.')}`,
        applicability: k75Applicability
      }),
      sourceFor('forkOil', {
        value: forkValue,
        guidance: t('fluidForkK75'),
        source: `${motoSource(9)} Haynes 1988, p. 26.`,
        applicability: t('fluidApplicabilityK75Fork')
      })
    ];
  } else if (isK100TwoValve) {
    family = t('k100EngineGroup');
    const model = String(vehicle.model || '');
    const sportFork = /\b(?:RS|RT|LT)\b/i.test(model);
    fluids = [
      sourceFor('engineOil', {
        value: localized('3,75 L con filtro', '3.75 L with filter'),
        guidance: t('fluidEngineOilK100'),
        source: 'Haynes BMW K75/K100 1988, p. 26.',
        applicability: t('fluidApplicabilityK100')
      }),
      sourceFor('coolant', {
        value: t('fluidUnknownTypeCapacity'),
        guidance: t('fluidPendingForVariant'),
        source: t('sourcePending'),
        applicability: t('fluidApplicabilityK100')
      }),
      sourceFor('brakeFluid', {
        value: localized('DOT 4 · cantidad no indicada', 'DOT 4 · capacity not stated'),
        guidance: t('fluidBrakeK100'),
        source: 'Haynes BMW K75/K100 1988, p. 26.',
        applicability: t('fluidApplicabilityK100')
      }),
      sourceFor('gearboxFluid', {
        value: localized('0,85 ± 0,05 L', '0.85 ± 0.05 L'),
        guidance: t('fluidGearboxK100'),
        source: 'Haynes BMW K75/K100 1988, p. 26.',
        applicability: t('fluidApplicabilityK100')
      }),
      sourceFor('finalDriveFluid', {
        value: localized('0,26 L', '0.26 L'),
        guidance: t('fluidFinalDriveK100'),
        source: 'Haynes BMW K75/K100 1988, p. 26.',
        applicability: t('fluidApplicabilityK100')
      }),
      sourceFor('forkOil', {
        value: sportFork
          ? `360 ± 10 cm³ / ${localized('brazo', 'fork leg')}`
          : `330 ± 10 cm³ / ${localized('brazo', 'fork leg')}`,
        guidance: t('fluidForkK100'),
        source: 'Haynes BMW K75/K100 1988, p. 26.',
        applicability: t('fluidApplicabilityK100')
      })
    ];
  } else {
    const applicability = isK75 ? t('k75PendingPlanNote') :
      isK100 ? t('k100ScheduleApplicability') : t('fluidPendingForVariant');
    fluids = ['engineOil', 'coolant', 'brakeFluid', 'gearboxFluid', 'finalDriveFluid', 'forkOil'].map(key =>
      sourceFor(key, {
        value: t('fluidUnknownTypeCapacity'),
        guidance: t('fluidPendingForVariant'),
        source: t('sourcePending'),
        applicability
      })
    );
  }

  const k75Maintenance = [
    { title: 'planK75OilLevel', note: 'k75OilLevelFrequency' },
    { title: 'planK75OilChange', note: 'k75OilChangeFrequency' },
    { title: 'planK75OilFilter', note: 'k75OilFilterFrequency' },
    { title: 'planK75CoolantCheck', note: 'k75CoolantCheckFrequency' },
    { title: 'planK75CoolantChange', note: 'k75CoolantChangeFrequency' },
    { title: 'planK75AirFilter', note: 'k75AirFilterFrequency' },
    { title: 'planK75FuelFilter', note: 'k75FuelFilterFrequency' },
    { title: 'planK75SparkCheck', note: 'k75SparkCheckFrequency' },
    { title: 'planK75SparkReplace', note: 'k75SparkReplaceFrequency' },
    { title: 'planK75ValveClearance', note: 'k75ValveClearanceFrequency' },
    { title: 'planK75TransmissionOil', note: 'k75TransmissionOilFrequency' },
    { title: 'planK75ForkOil', note: 'k75ForkOilFrequency' },
    { title: 'planK75BrakeFluid', note: 'k75BrakeFluidFrequency' },
    { title: 'planK75BrakePads', note: 'k75BrakePadsFrequency' },
    { title: 'planK75Steering', note: 'k75SteeringFrequency' },
    { title: 'planK75Tyres', note: 'k75TyresFrequency' }
  ];
  if (vehicle.abs === 'yes') k75Maintenance.push({ title: 'planK75Abs', note: 'k75AbsFrequency' });
  if (/^BMW K75 C$/i.test(String(vehicle.model || '').trim()) &&
    year >= 1987 && year <= 1989) {
    k75Maintenance.push({ title: 'planK75BrakeShoes', note: 'k75BrakeShoesFrequency' });
  }
  const hasVerifiedMaintenance = isK75ReferenceCovered(vehicle);
  const maintenance = hasVerifiedMaintenance ? k75Maintenance :
    [{ title: 'maintenancePendingTitle', note: 'maintenancePendingNote' }];
  const maintenanceSource = hasVerifiedMaintenance ? t('k75ScheduleSource') :
    isK75 ? t('k75PendingPlanNote') : isK100 ? t('k100ScheduleSource') : t('sourcePending');
  const maintenanceApplicability = hasVerifiedMaintenance ? t('k75ScheduleApplicability') :
    isK75 ? t('fluidPendingForVariant') : isK100 ? t('k100ScheduleApplicability') : t('fluidPendingForVariant');

  const k75Torques = [
    { title: 'torqueHead', value: '30 ± 4 Nm → 45 ± 5 Nm', source: 'torqueSourceP54' },
    { title: 'torqueCamCrank', value: '50 ± 6 Nm', source: 'torqueSourceP49' },
    { title: 'torqueCamTensioner', value: '9 ± 1 Nm', source: 'torqueSourceP49' },
    { title: 'torqueCamSupport', value: '9 ± 1 Nm', source: 'torqueSourceP49' },
    { title: 'torqueCamSprocket', value: '54 ± 6 Nm', source: 'torqueSourceP49' },
    { title: 'torqueCamCover', value: '8 ± 1 Nm', source: 'torqueSourceP49' },
    { title: 'torqueForkUpper', value: '22 ± 1 Nm', source: 'torqueSourceP89' },
    { title: 'torqueForkLower', value: '43 ± 3 Nm', source: 'torqueSourceP89' },
    { title: 'torqueSteeringStem', value: '74 ± 5 Nm', source: 'torqueSourceP89' },
    { title: 'torqueFrontAxleNut', value: '33 ± 4 Nm', source: 'torqueSourceP89' },
    { title: 'torqueFrontAxlePinch', value: '14 ± 2 Nm', source: 'torqueSourceP89' },
    { title: 'torqueBrakeCaliper', value: '32 ± 2 Nm', source: 'torqueSourceP89' },
    { title: 'torqueFinalDriveSwingarm', value: '40 ± 3 Nm', source: 'torqueSourceP74' },
    { title: 'torqueFinalDriveDrain', value: '25 ± 3 Nm', source: 'torqueSourceP74' },
    { title: 'torqueFinalDriveFill', value: '20 ± 2 Nm', source: 'torqueSourceP74' },
    { title: 'torqueRearShock', value: '51 ± 6 Nm', source: 'torqueSourceP91' },
    { title: 'torqueWheelBolts', value: '105 ± 4 Nm', source: 'torqueSourceP91' }
  ];
  const k100Torques = [
    { title: 'torqueOilDrain', value: '32 Nm' },
    { title: 'torqueOilFilter', value: '8 Nm' },
    { title: 'torqueGearDrain', value: '20 Nm' },
    { title: 'torqueGearFill', value: '23 Nm' },
    { title: 'torqueFinalDriveDrain', value: '25 Nm' },
    { title: 'torqueFinalDriveFill', value: '20 Nm' },
    { title: 'torqueSparkPlug', value: '20 Nm' },
    { title: 'torqueClutchBolts', value: '19 Nm' },
    { title: 'torqueBrakeCaliper', value: '32 Nm' },
    { title: 'torqueRearShock', value: '51 Nm' },
    { title: 'torqueFinalDriveSwingarm', value: '40 Nm' },
    { title: 'torqueWheelBolts', value: '105 Nm' }
  ].map(item => ({ ...item, source: 'torqueSourceChart' }));
  const torques = isK75ReferenceCovered(vehicle) ? k75Torques : isK100TwoValve ? k100Torques : [];
  const torqueSource = isK75ReferenceCovered(vehicle) ? t('torqueSource') :
    isK100TwoValve ? t('torqueSecondarySource') : t('sourcePending');
  const torqueApplicability = isK75ReferenceCovered(vehicle) ? t('torqueApplicability') :
    isK100TwoValve ? t('torqueSecondaryApplicability') : t('fluidPendingForVariant');
  const torqueNote = isK100TwoValve
    ? localized('La tabla secundaria no especifica los rangos de tolerancia ni las condiciones de montaje; verificar cada valor antes de usarlo.', 'The secondary table does not specify tolerances or installation conditions; verify each value before use.')
    : t('torqueNote');
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
        ${detail('engineFamily', family)}
        ${detail('abs', vehicle.abs === 'yes' ? t('yes') : vehicle.abs === 'no' ? t('no') : '')}
        ${detail('gearboxCode', vehicle.gearboxCode)}
        ${detail('finalDriveCode', vehicle.finalDriveCode)}
      </div>
      <p class="detail-placeholder">${t('profileSource')}</p>
    </details>
    <details>
      <summary>${t('maintenance')}<span>${hasVerifiedMaintenance ? t('k75PlanTitle') : t('unknown')}</span></summary>
      <div class="fluid-grid">
        ${maintenance.map(item => `
          <article class="fluid-card">
            <h3>${t(item.title)}</h3>
            <p>${t(item.note)}</p>
          </article>`).join('')}
      </div>
      <p class="detail-placeholder">${maintenanceSource}<br>${maintenanceApplicability}</p>
    </details>
    <details>
      <summary>${t('fluids')}<span>${isK75ReferenceCovered(vehicle) ? t('k75PlanTitle') : isK100TwoValve ? t('secondarySourceLabel') : t('unknown')}</span></summary>
      <div class="fluid-grid">
        ${fluids.map(fluid => `
          <article class="fluid-card">
            <h3>${t(fluid.key)}</h3>
            <strong>${escapeHtml(fluid.value)}</strong>
            <p>${escapeHtml(fluid.guidance)}</p>
            <p class="fluid-source">${escapeHtml(fluid.source)}<br>${escapeHtml(fluid.applicability)}</p>
          </article>`).join('')}
      </div>
    </details>
    <details>
      <summary>${t('torque')}<span>${isK75ReferenceCovered(vehicle) ? t('k75PlanTitle') : isK100TwoValve ? t('secondarySourceLabel') : t('unknown')}</span></summary>
      <div class="spec-table torque-table">
        ${torques.map(torque => `<div><span>${t(torque.title)}</span><strong>${torque.value}</strong><small>${t(torque.source)}</small></div>`).join('')}
      </div>
      ${torques.length ? '' : `<p class="detail-placeholder">${t('fluidUnknownTypeCapacity')}</p>`}
      <p class="detail-placeholder">${torqueSource}<br>${torqueApplicability}<br>${torqueNote}</p>
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
