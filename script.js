document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================================
     1. BASE DE DADOS — 118 ELEMENTOS
     =================================================================== */
  const ELEMENTS = {
    H:  {symbol:'H',  name:'Hidrogênio',  number:1,   en:2.20, valence:1, category:'nonmetal',       color:'#dbeafe', radius:31 },
    He: {symbol:'He', name:'Hélio',        number:2,   en:0,    valence:0, category:'noble-gas',      color:'#7dd3fc', radius:31 },
    Li: {symbol:'Li', name:'Lítio',        number:3,   en:0.98, valence:1, category:'alkali-metal',   color:'#ef4444', radius:128},
    Be: {symbol:'Be', name:'Berílio',      number:4,   en:1.57, valence:2, category:'alkaline-earth', color:'#fb923c', radius:96 },
    B:  {symbol:'B',  name:'Boro',         number:5,   en:2.04, valence:3, category:'metalloid',      color:'#2dd4bf', radius:84 },
    C:  {symbol:'C',  name:'Carbono',      number:6,   en:2.55, valence:4, category:'nonmetal',       color:'#6b7280', radius:76 },
    N:  {symbol:'N',  name:'Nitrogênio',   number:7,   en:3.04, valence:5, category:'nonmetal',       color:'#6366f1', radius:71 },
    O:  {symbol:'O',  name:'Oxigênio',     number:8,   en:3.44, valence:6, category:'nonmetal',       color:'#ef4444', radius:66 },
    F:  {symbol:'F',  name:'Flúor',        number:9,   en:3.98, valence:7, category:'nonmetal',       color:'#22c55e', radius:57 },
    Ne: {symbol:'Ne', name:'Neônio',       number:10,  en:0,    valence:0, category:'noble-gas',      color:'#7dd3fc', radius:38 },
    Na: {symbol:'Na', name:'Sódio',        number:11,  en:0.93, valence:1, category:'alkali-metal',   color:'#dc2626', radius:166},
    Mg: {symbol:'Mg', name:'Magnésio',     number:12,  en:1.31, valence:2, category:'alkaline-earth', color:'#f97316', radius:141},
    Al: {symbol:'Al', name:'Alumínio',     number:13,  en:1.61, valence:3, category:'post-transition',color:'#94a3b8', radius:121},
    Si: {symbol:'Si', name:'Silício',      number:14,  en:1.90, valence:4, category:'metalloid',      color:'#0d9488', radius:111},
    P:  {symbol:'P',  name:'Fósforo',      number:15,  en:2.19, valence:5, category:'nonmetal',       color:'#f97316', radius:107},
    S:  {symbol:'S',  name:'Enxofre',      number:16,  en:2.58, valence:6, category:'nonmetal',       color:'#eab308', radius:105},
    Cl: {symbol:'Cl', name:'Cloro',        number:17,  en:3.16, valence:7, category:'nonmetal',       color:'#16a34a', radius:102},
    Ar: {symbol:'Ar', name:'Argônio',      number:18,  en:0,    valence:0, category:'noble-gas',      color:'#7dd3fc', radius:71 },
    K:  {symbol:'K',  name:'Potássio',     number:19,  en:0.82, valence:1, category:'alkali-metal',   color:'#b91c1c', radius:203},
    Ca: {symbol:'Ca', name:'Cálcio',       number:20,  en:1.00, valence:2, category:'alkaline-earth', color:'#ec4899', radius:176},
    Sc: {symbol:'Sc', name:'Escândio',     number:21,  en:1.36, valence:2, category:'transition',     color:'#8b5cf6', radius:170},
    Ti: {symbol:'Ti', name:'Titânio',      number:22,  en:1.54, valence:4, category:'transition',     color:'#7c3aed', radius:160},
    V:  {symbol:'V',  name:'Vanádio',      number:23,  en:1.63, valence:5, category:'transition',     color:'#6d28d9', radius:153},
    Cr: {symbol:'Cr', name:'Cromo',        number:24,  en:1.66, valence:6, category:'transition',     color:'#2563eb', radius:139},
    Mn: {symbol:'Mn', name:'Manganês',     number:25,  en:1.55, valence:7, category:'transition',     color:'#0284c7', radius:161},
    Fe: {symbol:'Fe', name:'Ferro',        number:26,  en:1.83, valence:2, category:'transition',     color:'#0891b2', radius:132},
    Co: {symbol:'Co', name:'Cobalto',      number:27,  en:1.88, valence:2, category:'transition',     color:'#0d9488', radius:126},
    Ni: {symbol:'Ni', name:'Níquel',       number:28,  en:1.91, valence:2, category:'transition',     color:'#059669', radius:124},
    Cu: {symbol:'Cu', name:'Cobre',        number:29,  en:1.90, valence:1, category:'transition',     color:'#b45309', radius:132},
    Zn: {symbol:'Zn', name:'Zinco',        number:30,  en:1.65, valence:2, category:'transition',     color:'#64748b', radius:122},
    Ga: {symbol:'Ga', name:'Gálio',        number:31,  en:1.81, valence:3, category:'post-transition',color:'#78909c', radius:122},
    Ge: {symbol:'Ge', name:'Germânio',     number:32,  en:2.01, valence:4, category:'metalloid',      color:'#14b8a6', radius:122},
    As: {symbol:'As', name:'Arsênio',      number:33,  en:2.18, valence:5, category:'metalloid',      color:'#0f766e', radius:119},
    Se: {symbol:'Se', name:'Selênio',      number:34,  en:2.55, valence:6, category:'nonmetal',       color:'#d97706', radius:120},
    Br: {symbol:'Br', name:'Bromo',        number:35,  en:2.96, valence:7, category:'nonmetal',       color:'#92400e', radius:120},
    Kr: {symbol:'Kr', name:'Criptônio',    number:36,  en:3.00, valence:0, category:'noble-gas',      color:'#7dd3fc', radius:88 },
    Rb: {symbol:'Rb', name:'Rubídio',      number:37,  en:0.82, valence:1, category:'alkali-metal',   color:'#991b1b', radius:220},
    Sr: {symbol:'Sr', name:'Estrôncio',    number:38,  en:0.95, valence:2, category:'alkaline-earth', color:'#be185d', radius:195},
    Y:  {symbol:'Y',  name:'Ítrio',        number:39,  en:1.22, valence:2, category:'transition',     color:'#7c3aed', radius:190},
    Zr: {symbol:'Zr', name:'Zircônio',     number:40,  en:1.33, valence:4, category:'transition',     color:'#6d28d9', radius:175},
    Nb: {symbol:'Nb', name:'Nióbio',       number:41,  en:1.60, valence:5, category:'transition',     color:'#5b21b6', radius:164},
    Mo: {symbol:'Mo', name:'Molibdênio',   number:42,  en:2.16, valence:6, category:'transition',     color:'#1d4ed8', radius:154},
    Tc: {symbol:'Tc', name:'Tecnécio',     number:43,  en:1.90, valence:7, category:'transition',     color:'#1e40af', radius:147},
    Ru: {symbol:'Ru', name:'Rutênio',      number:44,  en:2.20, valence:3, category:'transition',     color:'#0369a1', radius:146},
    Rh: {symbol:'Rh', name:'Ródio',        number:45,  en:2.28, valence:3, category:'transition',     color:'#0e7490', radius:142},
    Pd: {symbol:'Pd', name:'Paládio',      number:46,  en:2.20, valence:2, category:'transition',     color:'#047857', radius:139},
    Ag: {symbol:'Ag', name:'Prata',        number:47,  en:1.93, valence:1, category:'transition',     color:'#e2e8f0', radius:145},
    Cd: {symbol:'Cd', name:'Cádmio',       number:48,  en:1.69, valence:2, category:'transition',     color:'#cbd5e1', radius:144},
    In: {symbol:'In', name:'Índio',        number:49,  en:1.78, valence:3, category:'post-transition',color:'#94a3b8', radius:142},
    Sn: {symbol:'Sn', name:'Estanho',      number:50,  en:1.96, valence:4, category:'post-transition',color:'#64748b', radius:139},
    Sb: {symbol:'Sb', name:'Antimônio',    number:51,  en:2.05, valence:5, category:'metalloid',      color:'#0f766e', radius:139},
    Te: {symbol:'Te', name:'Telúrio',      number:52,  en:2.10, valence:6, category:'metalloid',      color:'#065f46', radius:138},
    I:  {symbol:'I',  name:'Iodo',         number:53,  en:2.66, valence:7, category:'nonmetal',       color:'#7c3aed', radius:139},
    Xe: {symbol:'Xe', name:'Xenônio',      number:54,  en:2.60, valence:0, category:'noble-gas',      color:'#7dd3fc', radius:108},
    Cs: {symbol:'Cs', name:'Césio',        number:55,  en:0.79, valence:1, category:'alkali-metal',   color:'#7f1d1d', radius:244},
    Ba: {symbol:'Ba', name:'Bário',        number:56,  en:0.89, valence:2, category:'alkaline-earth', color:'#9d174d', radius:215},
    La: {symbol:'La', name:'Lantânio',     number:57,  en:1.10, valence:3, category:'lanthanide',     color:'#b45309', radius:207},
    Ce: {symbol:'Ce', name:'Cério',        number:58,  en:1.12, valence:3, category:'lanthanide',     color:'#b45309', radius:204},
    Pr: {symbol:'Pr', name:'Praseodímio',  number:59,  en:1.13, valence:3, category:'lanthanide',     color:'#d97706', radius:203},
    Nd: {symbol:'Nd', name:'Neodímio',     number:60,  en:1.14, valence:3, category:'lanthanide',     color:'#d97706', radius:201},
    Pm: {symbol:'Pm', name:'Promécio',     number:61,  en:1.13, valence:3, category:'lanthanide',     color:'#92400e', radius:199},
    Sm: {symbol:'Sm', name:'Samário',      number:62,  en:1.17, valence:3, category:'lanthanide',     color:'#92400e', radius:198},
    Eu: {symbol:'Eu', name:'Európio',      number:63,  en:1.20, valence:2, category:'lanthanide',     color:'#78350f', radius:198},
    Gd: {symbol:'Gd', name:'Gadolínio',    number:64,  en:1.20, valence:3, category:'lanthanide',     color:'#78350f', radius:196},
    Tb: {symbol:'Tb', name:'Térbio',       number:65,  en:1.20, valence:3, category:'lanthanide',     color:'#92400e', radius:194},
    Dy: {symbol:'Dy', name:'Disprósio',    number:66,  en:1.22, valence:3, category:'lanthanide',     color:'#b45309', radius:192},
    Ho: {symbol:'Ho', name:'Hólmio',       number:67,  en:1.23, valence:3, category:'lanthanide',     color:'#d97706', radius:192},
    Er: {symbol:'Er', name:'Érbio',        number:68,  en:1.24, valence:3, category:'lanthanide',     color:'#d97706', radius:189},
    Tm: {symbol:'Tm', name:'Túlio',        number:69,  en:1.25, valence:3, category:'lanthanide',     color:'#f59e0b', radius:190},
    Yb: {symbol:'Yb', name:'Itérbio',      number:70,  en:1.10, valence:2, category:'lanthanide',     color:'#f59e0b', radius:187},
    Lu: {symbol:'Lu', name:'Lutécio',      number:71,  en:1.27, valence:3, category:'lanthanide',     color:'#fbbf24', radius:187},
    Hf: {symbol:'Hf', name:'Háfnio',       number:72,  en:1.30, valence:4, category:'transition',     color:'#0e7490', radius:175},
    Ta: {symbol:'Ta', name:'Tântalo',      number:73,  en:1.50, valence:5, category:'transition',     color:'#0369a1', radius:170},
    W:  {symbol:'W',  name:'Tungstênio',   number:74,  en:2.36, valence:6, category:'transition',     color:'#1d4ed8', radius:162},
    Re: {symbol:'Re', name:'Rênio',        number:75,  en:1.90, valence:7, category:'transition',     color:'#4338ca', radius:151},
    Os: {symbol:'Os', name:'Ósmio',        number:76,  en:2.20, valence:4, category:'transition',     color:'#5b21b6', radius:144},
    Ir: {symbol:'Ir', name:'Irídio',       number:77,  en:2.20, valence:4, category:'transition',     color:'#6d28d9', radius:141},
    Pt: {symbol:'Pt', name:'Platina',      number:78,  en:2.28, valence:4, category:'transition',     color:'#e2e8f0', radius:136},
    Au: {symbol:'Au', name:'Ouro',         number:79,  en:2.54, valence:1, category:'transition',     color:'#d97706', radius:136},
    Hg: {symbol:'Hg', name:'Mercúrio',     number:80,  en:2.00, valence:2, category:'transition',     color:'#94a3b8', radius:132},
    Tl: {symbol:'Tl', name:'Tálio',        number:81,  en:1.62, valence:3, category:'post-transition',color:'#475569', radius:145},
    Pb: {symbol:'Pb', name:'Chumbo',       number:82,  en:2.33, valence:4, category:'post-transition',color:'#334155', radius:146},
    Bi: {symbol:'Bi', name:'Bismuto',      number:83,  en:2.02, valence:5, category:'post-transition',color:'#c026d3', radius:148},
    Po: {symbol:'Po', name:'Polônio',      number:84,  en:2.00, valence:6, category:'metalloid',      color:'#a21caf', radius:140},
    At: {symbol:'At', name:'Ástato',       number:85,  en:2.20, valence:7, category:'nonmetal',       color:'#7e22ce', radius:150},
    Rn: {symbol:'Rn', name:'Radônio',      number:86,  en:0,    valence:0, category:'noble-gas',      color:'#7dd3fc', radius:120},
    Fr: {symbol:'Fr', name:'Frâncio',      number:87,  en:0.70, valence:1, category:'alkali-metal',   color:'#450a0a', radius:260},
    Ra: {symbol:'Ra', name:'Rádio',        number:88,  en:0.90, valence:2, category:'alkaline-earth', color:'#831843', radius:221},
    Ac: {symbol:'Ac', name:'Actínio',      number:89,  en:1.10, valence:3, category:'actinide',       color:'#0d9488', radius:215},
    Th: {symbol:'Th', name:'Tório',        number:90,  en:1.30, valence:4, category:'actinide',       color:'#0f766e', radius:206},
    Pa: {symbol:'Pa', name:'Protactínio',  number:91,  en:1.50, valence:5, category:'actinide',       color:'#065f46', radius:200},
    U:  {symbol:'U',  name:'Urânio',       number:92,  en:1.38, valence:6, category:'actinide',       color:'#064e3b', radius:196},
    Np: {symbol:'Np', name:'Netúnio',      number:93,  en:1.36, valence:5, category:'actinide',       color:'#065f46', radius:190},
    Pu: {symbol:'Pu', name:'Plutônio',     number:94,  en:1.28, valence:4, category:'actinide',       color:'#047857', radius:187},
    Am: {symbol:'Am', name:'Amerício',     number:95,  en:1.30, valence:3, category:'actinide',       color:'#059669', radius:180},
    Cm: {symbol:'Cm', name:'Cúrio',        number:96,  en:1.30, valence:3, category:'actinide',       color:'#10b981', radius:169},
    Bk: {symbol:'Bk', name:'Berquélio',    number:97,  en:1.30, valence:3, category:'actinide',       color:'#34d399', radius:168},
    Cf: {symbol:'Cf', name:'Califórnio',   number:98,  en:1.30, valence:3, category:'actinide',       color:'#6ee7b7', radius:168},
    Es: {symbol:'Es', name:'Einstênio',    number:99,  en:1.30, valence:3, category:'actinide',       color:'#a7f3d0', radius:165},
    Fm: {symbol:'Fm', name:'Férmio',       number:100, en:1.30, valence:3, category:'actinide',       color:'#d1fae5', radius:167},
    Md: {symbol:'Md', name:'Mendelévio',   number:101, en:1.30, valence:3, category:'actinide',       color:'#ecfdf5', radius:173},
    No: {symbol:'No', name:'Nobélio',      number:102, en:1.30, valence:2, category:'actinide',       color:'#a7f3d0', radius:176},
    Lr: {symbol:'Lr', name:'Laurêncio',    number:103, en:1.30, valence:3, category:'actinide',       color:'#6ee7b7', radius:161},
    Rf: {symbol:'Rf', name:'Rutherfórdio', number:104, en:1.30, valence:4, category:'transition',     color:'#4f46e5', radius:157},
    Db: {symbol:'Db', name:'Dúbnio',       number:105, en:1.30, valence:5, category:'transition',     color:'#4338ca', radius:149},
    Sg: {symbol:'Sg', name:'Seabórgio',    number:106, en:1.30, valence:6, category:'transition',     color:'#3730a3', radius:143},
    Bh: {symbol:'Bh', name:'Bóhrio',       number:107, en:1.30, valence:7, category:'transition',     color:'#312e81', radius:141},
    Hs: {symbol:'Hs', name:'Hássio',       number:108, en:1.30, valence:4, category:'transition',     color:'#1e1b4b', radius:134},
    Mt: {symbol:'Mt', name:'Meitnério',    number:109, en:1.30, valence:3, category:'transition',     color:'#2e1065', radius:129},
    Ds: {symbol:'Ds', name:'Darmstádio',   number:110, en:1.30, valence:2, category:'transition',     color:'#4a044e', radius:128},
    Rg: {symbol:'Rg', name:'Roentgênio',   number:111, en:1.30, valence:1, category:'transition',     color:'#701a75', radius:121},
    Cn: {symbol:'Cn', name:'Copernício',   number:112, en:1.30, valence:2, category:'transition',     color:'#86198f', radius:122},
    Nh: {symbol:'Nh', name:'Nihônio',      number:113, en:1.30, valence:3, category:'post-transition',color:'#4b5563', radius:136},
    Fl: {symbol:'Fl', name:'Fleróvio',     number:114, en:1.30, valence:4, category:'post-transition',color:'#374151', radius:143},
    Mc: {symbol:'Mc', name:'Moscóvio',     number:115, en:1.30, valence:5, category:'post-transition',color:'#6b7280', radius:162},
    Lv: {symbol:'Lv', name:'Livermório',   number:116, en:1.30, valence:6, category:'post-transition',color:'#4b5563', radius:175},
    Ts: {symbol:'Ts', name:'Teneso',       number:117, en:1.30, valence:7, category:'nonmetal',       color:'#581c87', radius:165},
    Og: {symbol:'Og', name:'Oganessônio',  number:118, en:0,    valence:0, category:'noble-gas',      color:'#7dd3fc', radius:157},
  };

  /* ===================================================================
     2. LAYOUT DA TABELA PERIÓDICA
     =================================================================== */
  const PT_GRID = [
    ['H',1,1],['He',18,1],
    ['Li',1,2],['Be',2,2],['B',13,2],['C',14,2],['N',15,2],['O',16,2],['F',17,2],['Ne',18,2],
    ['Na',1,3],['Mg',2,3],['Al',13,3],['Si',14,3],['P',15,3],['S',16,3],['Cl',17,3],['Ar',18,3],
    ['K',1,4],['Ca',2,4],['Sc',3,4],['Ti',4,4],['V',5,4],['Cr',6,4],['Mn',7,4],['Fe',8,4],
    ['Co',9,4],['Ni',10,4],['Cu',11,4],['Zn',12,4],['Ga',13,4],['Ge',14,4],['As',15,4],['Se',16,4],['Br',17,4],['Kr',18,4],
    ['Rb',1,5],['Sr',2,5],['Y',3,5],['Zr',4,5],['Nb',5,5],['Mo',6,5],['Tc',7,5],['Ru',8,5],
    ['Rh',9,5],['Pd',10,5],['Ag',11,5],['Cd',12,5],['In',13,5],['Sn',14,5],['Sb',15,5],['Te',16,5],['I',17,5],['Xe',18,5],
    ['Cs',1,6],['Ba',2,6],['Hf',4,6],['Ta',5,6],['W',6,6],['Re',7,6],['Os',8,6],['Ir',9,6],
    ['Pt',10,6],['Au',11,6],['Hg',12,6],['Tl',13,6],['Pb',14,6],['Bi',15,6],['Po',16,6],['At',17,6],['Rn',18,6],
    ['Fr',1,7],['Ra',2,7],['Rf',4,7],['Db',5,7],['Sg',6,7],['Bh',7,7],['Hs',8,7],['Mt',9,7],
    ['Ds',10,7],['Rg',11,7],['Cn',12,7],['Nh',13,7],['Fl',14,7],['Mc',15,7],['Lv',16,7],['Ts',17,7],['Og',18,7],
  ];
  const FBLOCK = [
    ['La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu'],
    ['Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr'],
  ];
  const CATEGORY_INFO = {
    'alkali-metal':    {label:'Metal Alcalino',       color:'#ef4444'},
    'alkaline-earth':  {label:'Metal Alc.-Terroso',   color:'#fb923c'},
    'transition':      {label:'Metal de Transição',   color:'#60a5fa'},
    'post-transition': {label:'Metal Pós-Trans.',     color:'#94a3b8'},
    'metalloid':       {label:'Semimetal',             color:'#2dd4bf'},
    'nonmetal':        {label:'Ametal',                color:'#4ade80'},
    'noble-gas':       {label:'Gás Nobre',             color:'#7dd3fc'},
    'lanthanide':      {label:'Lantanídeo',            color:'#fbbf24'},
    'actinide':        {label:'Actinídeo',             color:'#34d399'},
  };

  /* ===================================================================
     3. ESTADO GLOBAL
     =================================================================== */
  let canvasAtoms        = [];
  let bonds              = [];
  let seaElectrons       = [];
  let interactionArcs    = [];
  let idCounter          = 0;
  let is3DActive         = false;
  let activeCategoryFilter = null;
  let physicsEnabled     = true;
  let simLoop            = null;
  /* frozenGeometry: quando true, o physicsTick NÃO move átomos nem chama
     checkAllBonds. Ativado ao montar um preset; desativado quando o
     usuário arrasta um átomo ou clica em "Ativar Física" manualmente.  */
  let frozenGeometry     = false;
  /* activeBondFilter: quando definido ('covalent'|'ionic'|'metallic'),
     força determineBondType a retornar apenas aquele tipo de ligação,
     isolando as interações do canvas por módulo.                      */
  let activeBondFilter   = null;

  const SCALE     = 0.7;
  const PHYS_DT   = 16;
  const DAMPING   = 0.78;
  const SNAP_K    = 0.18;
  const REP_K     = 120;

  /* ===================================================================
     4. DOM REFS
     =================================================================== */
  const canvas        = document.getElementById('canvas');
  const canvasHint    = document.getElementById('canvas-hint');
  const svgEl         = document.getElementById('bond-svg');
  const infoText      = document.getElementById('info-text');
  const energyCaption = document.getElementById('energy-caption');
  const viewer3dEl    = document.getElementById('viewer3d');
  const canvasWrapper = document.getElementById('canvas-wrapper');
  const btnReset      = document.getElementById('btn-reset');
  const btn3D         = document.getElementById('btn-toggle-3d');
  const searchInput   = document.getElementById('element-search');
  const tooltip       = document.getElementById('el-tooltip');
  const ptGrid        = document.getElementById('periodic-table');
  const fblockGrid    = document.getElementById('fblock-table');
  const ptLegend      = document.getElementById('pt-legend');
  const molPanel      = document.getElementById('mol-panel');
  const molFormula    = document.getElementById('mol-formula');
  const molStats      = document.getElementById('mol-stats');
  const btnPhysics    = document.getElementById('btn-physics');
  const btnSnap       = document.getElementById('btn-snap');

  /* ===================================================================
     A11Y — FUNÇÕES DE ACESSIBILIDADE
     =================================================================== */

  /* Anuncia mensagens para leitores de tela via live regions */
  const a11yAnnouncer = document.getElementById('a11y-announcer');
  const a11yAnnouncerAssertive = document.getElementById('a11y-announcer-assertive');

  function announce(msg, priority = 'polite') {
    const el = priority === 'assertive' ? a11yAnnouncerAssertive : a11yAnnouncer;
    if (!el) return;
    // Reset do conteúdo para garantir que a mesma mensagem seja relida
    el.textContent = '';
    requestAnimationFrame(() => { el.textContent = msg; });
  }

  /* Verifica preferência de movimento reduzido */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Atualiza aria-pressed nos botões de toggle */
  function setToggleState(btn, pressed) {
    if (!btn) return;
    btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
  }

  /* Atualiza aria-pressed nos botões de ordem de ligação */
  function updateBondOrderARIA(activeOrder) {
    document.querySelectorAll('.bond-order-btn').forEach(btn => {
      const val = btn.dataset.order;
      const isActive = (activeOrder === null && val === 'auto') ||
                       (activeOrder !== null && val === String(activeOrder));
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /* ===================================================================
     5. AUXILIARES FÍSICO-QUÍMICOS
     =================================================================== */
  function dist(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
  function getBondLength(eA, eB) { return (ELEMENTS[eA].radius + ELEMENTS[eB].radius) * SCALE; }
  function covalentCap(sym) { return (sym === 'H' ? 2 : 8) - ELEMENTS[sym].valence; }
  function bondOrderSum(id) {
    return bonds.filter(b => b.type === 'covalent' && (b.a === id || b.b === id))
                .reduce((s, b) => s + b.order, 0);
  }
  function isMetal(cat) {
    return ['alkali-metal','alkaline-earth','transition','post-transition','lanthanide','actinide'].includes(cat);
  }
  function maxIonicCharge(sym) {
    const el = ELEMENTS[sym];
    if (isMetal(el.category)) return el.valence;
    return -((sym === 'H' ? 2 : 8) - el.valence);
  }
  function getContrastColor(hex) {
    const c = hex.replace('#','');
    const r=parseInt(c.substr(0,2),16), g=parseInt(c.substr(2,2),16), b=parseInt(c.substr(4,2),16);
    return (r*299 + g*587 + b*114)/1000 >= 145 ? '#111827' : '#ffffff';
  }
  function formatCharge(ch) {
    if (!ch) return '';
    const mag=Math.abs(ch), sup={1:'',2:'²',3:'³'}, sign=ch>0?'⁺':'⁻';
    return `${mag>1?(sup[mag]||mag):''}${sign}`;
  }
  /* ===================================================================
     BANCO DE DADOS DE LIGAÇÕES — todos os tipos reconhecidos pela literatura
     com energias, comprimentos e particularidades segundo IUPAC 2024
     =================================================================== */
  const BOND_DATA = {
    ionic: {
      label: 'Ligação Iônica', color: '#ffb74d', energy: '400–4000 kJ/mol', length: '200–320 pm',
      icon: '⚡', nature: 'Eletrostática, não direcional', examples: 'NaCl, KF, MgO, CaCl₂',
      desc: 'Transferência completa de e⁻ de metal para ametal (ΔEN > 1,7). Forma cátions e ânions que se atraem eletrostaticamente. Resulta em rede cristalina iônica, alto ponto de fusão, conduz eletricidade no estado fundido.',
    },
    covalent_nonpolar: {
      label: 'Ligação Covalente Apolar', color: '#4fc3f7', energy: '150–942 kJ/mol', length: '74–300 pm',
      icon: '🔗', nature: 'Compartilhamento simétrico de e⁻', examples: 'H₂, O₂, N₂, Cl₂, C₂H₆',
      desc: 'Compartilhamento igual de pares de elétrons (ΔEN < 0,4). Ligação σ (sobreposição frontal) e π (sobreposição lateral em duplas/triplas). Direcional; energia aumenta com a ordem: simples < dupla < tripla.',
    },
    covalent_polar: {
      label: 'Ligação Covalente Polar', color: '#38bdf8', energy: '150–942 kJ/mol', length: '74–300 pm',
      icon: '🔗δ', nature: 'Compartilhamento assimétrico de e⁻', examples: 'HCl, H₂O, NH₃, HF, CO',
      desc: 'Compartilhamento desigual (0,4 ≤ ΔEN < 1,7). Elétrons deslocados para átomo mais eletronegativo (δ−). Cria dipolo elétrico permanente (μ ≠ 0). Responsável pelas propriedades polares do solvente.',
    },
    covalent_transition: {
      label: 'Covalente com Caráter Iônico', color: '#a78bfa', energy: '200–600 kJ/mol', length: '130–260 pm',
      icon: '🔗⚡', nature: 'Zona de transição (1,2 ≤ ΔEN ≤ 1,7)', examples: 'HBr, MgCl₂, AlCl₃, SO₂',
      desc: 'ΔEN na zona de transição — contínuo entre covalente e iônico. Compartilhamento existe mas é fortemente polarizado. A distinção iônica/covalente é uma simplificação didática (IUPAC).',
    },
    metallic: {
      label: 'Ligação Metálica', color: '#fde68a', energy: '70–850 kJ/mol', length: '230–320 pm',
      icon: '🧲', nature: 'Cátions em "mar de elétrons"', examples: 'Fe, Cu, Al, Na, Au, ligas',
      desc: 'Cátions metálicos fixos imersos em elétrons de condução deslocalizados ("mar de elétrons"). Não direcional. Explica condutividade elétrica/térmica, maleabilidade, ductilidade e brilho metálico.',
    },
  };

    /* Detecta o tipo de ligação para o par de elementos */
  function determineBondType(eA, eB) {
    const a=ELEMENTS[eA], b=ELEMENTS[eB];
    const enA=a.en||1.0, enB=b.en||1.0, dEN=Math.abs(enA-enB);
    const bothMetal=isMetal(a.category)&&isMetal(b.category);
    const oneMetal =isMetal(a.category)!==isMetal(b.category);

    /* Modo de filtro ativo: força o tipo selecionado independente dos elementos.
       Permite ao usuário explorar cada tipo de ligação isoladamente.           */
    if (activeBondFilter === 'metallic') {
      return {type:'metallic', subtype:'metallic', polarNote:null};
    }
    if (activeBondFilter === 'ionic') {
      const aIsM = isMetal(a.category);
      const donor = aIsM ? {el:eA,cat:a.category} : {el:eB,cat:b.category};
      const acc   = aIsM ? {el:eB,cat:b.category} : {el:eA,cat:a.category};
      return {type:'ionic', subtype:'ionic', polarNote:null};
    }
    if (activeBondFilter === 'covalent') {
      if (dEN >= 0.4) return {type:'covalent', subtype:'covalent_polar',    polarNote:null};
      return               {type:'covalent', subtype:'covalent_nonpolar', polarNote:null};
    }

    /* Comportamento automático (sem filtro) */
    if (bothMetal) return {type:'metallic', subtype:'metallic', polarNote:null};
    if (oneMetal && dEN > 1.7) return {type:'ionic', subtype:'ionic', polarNote:null};

    if (dEN >= 1.2 && dEN <= 1.7) return {
      type:'covalent', subtype:'covalent_transition',
      polarNote:`⚠️ <em>Zona de transição</em> ΔEN=${dEN.toFixed(2)} (1,2–1,7): ligação com <strong>caráter iônico parcial</strong>. A distinção iônica/covalente é uma simplificação didática (IUPAC).`
    };
    if (dEN >= 0.4) return {type:'covalent', subtype:'covalent_polar', polarNote:null};
    return {type:'covalent', subtype:'covalent_nonpolar', polarNote:null};
  }


  /* ===================================================================
     6. VSEPR — GEOMETRIA MOLECULAR SEGUNDO A LITERATURA
     =====================================================================
     Teoria VSEPR (Valence Shell Electron Pair Repulsion):
     os pares de elétrons (ligantes + solitários) ao redor de um átomo
     central se repelem e assumem a geometria que maximiza a separação.

     Ângulos de referência (graus) por geometria:
       linear          2 grupos → 180°
       angular (bent)  2 ligantes + 1 par sol. (como H₂O, SO₂) → 104,5°
       angular         2 ligantes + 2 pares sol. (como H₂S, OF₂) → 92-104°
       trigonal planar 3 grupos → 120°
       piramidal trig. 3 lig. + 1 par sol. (como NH₃, PCl₃) → 107°
       tetraédrico     4 grupos → 109,5°
       trigonal bip.   5 grupos → 90°/120°
       octaédrico      6 grupos → 90°

     O motor aplica:
       (A) Força de mola radial entre átomos ligados → comprimento correto
       (B) Força angular entre todos os pares de ligantes de um mesmo
           átomo central → empurra para o ângulo VSEPR alvo
       (C) Repulsão de núcleo entre átomos não ligados
       (D) VdW fraco além do alcance de repulsão
     =================================================================== */

  /* --- Tabela VSEPR: quantos pares solitários tem cada elemento ---
     lonePairs = elétrons não ligantes / 2, considerando o número de
     ligações já formadas. Aqui usamos o valor máximo para o estado livre
     (sem ligações), ajustado dinamicamente na função getVSEPR.         */
  const LONE_PAIRS_FREE = {
    // Grupo 14 (4 ligações possíveis → 0 solitários no estado ligado típico)
    C:0, Si:0, Ge:0, Sn:0, Pb:0,
    // Grupo 15 (3 ligações, 1 par solitário)
    N:1, P:1, As:1, Sb:1, Bi:1,
    // Grupo 16 (2 ligações, 2 pares solitários)
    O:2, S:2, Se:2, Te:2, Po:2,
    // Grupo 17 (1 ligação, 3 pares solitários)
    F:3, Cl:3, Br:3, I:3, At:3,
    // Grupo 1 e 2 (metais) → tratados como ligação iônica, não VSEPR
    // Hidrogênio: terminal, nunca central
    H:0,
  };

  /* Retorna o ângulo alvo (rad) entre dois ligantes de um átomo central,
     baseado na geometria VSEPR real descrita na literatura.
     nBonds = número de ligações covalentes do átomo central
     nLone  = número de pares solitários                              */
  function vsepAngle(nBonds, nLone) {
    const total = nBonds + nLone;
    // Ângulos em graus conforme tabela VSEPR da IUPAC
    const TABLE = {
      // [total grupos]: ângulo padrão, com correção por pares solitários
      2: { 0: 180 },                           // linear
      3: { 0: 120, 1: 104.5 },                // trigonal planar / angular (bent)
      4: { 0: 109.5, 1: 107.0, 2: 104.5 },   // tetraédrico / piramidal / angular
      5: { 0: 120  },                           // trigonal bipiramdal (ângulo equatorial)
      6: { 0: 90   },                           // octaédrico
    };
    const row = TABLE[total];
    if (!row) return Math.PI; // fallback linear
    const deg = row[nLone] ?? row[0];
    return (deg * Math.PI) / 180;
  }

  /* Retorna geometria como string para o painel informativo */
  function vsepName(nBonds, nLone) {
    const t = nBonds + nLone;
    const names = {
      '2,0':'Linear (180°)',
      '3,0':'Trigonal Planar (120°)',
      '3,1':'Angular/Bent (104,5°)',
      '4,0':'Tetraédrico (109,5°)',
      '4,1':'Piramidal Trigonal (107°)',
      '4,2':'Angular/Bent (104,5°)',
      '5,0':'Trigonal Bipiramidal (120°/90°)',
      '6,0':'Octaédrico (90°)',
    };
    return names[`${t},${nLone}`] || `${t} grupos`;
  }

  /* Para cada átomo central, retorna { nBonds, nLone, angle, name } */
  function getVSEPR(centralAtom) {
    const sym = centralAtom.element;
    // Conta ligações covalentes do átomo central
    const myBonds = bonds.filter(b =>
      b.type === 'covalent' && (b.a === centralAtom.id || b.b === centralAtom.id)
    );
    const nBonds = myBonds.length;
    if (nBonds < 2) return null; // precisa de pelo menos 2 ligantes

    // Pares solitários: começa com o valor livre e reduz por ligação feita
    const freeLone = LONE_PAIRS_FREE[sym] ?? 0;
    // Cada ligação simples consome 1 elétron compartilhado, mas não remove par solitário
    // O número de pares solitários depende da valência e dos ligantes
    const el = ELEMENTS[sym];
    // nLone = (valence - bondOrderSum) / 2  → pares não ligantes
    const used = bondOrderSum(centralAtom.id); // elétrons usados em ligações
    const nLone = Math.max(0, Math.floor((el.valence - used) / 2));

    const angle = vsepAngle(nBonds, nLone);
    const name  = vsepName(nBonds, nLone);
    return { nBonds, nLone, angle, name, bonds: myBonds };
  }

  function initPhysics(atom) {
    atom.vx = 0;
    atom.vy = 0;
  }

  function startSimLoop() {
    if (simLoop) return;
    simLoop = setInterval(physicsTick, PHYS_DT);
  }
  function stopSimLoop() {
    if (simLoop) { clearInterval(simLoop); simLoop = null; }
  }

  function physicsTick() {
    /* Quando a geometria está travada (preset recém-montado), não move
       nenhum átomo nem recalcula ligações — apenas mantém o loop vivo
       para animações visuais (órbitas de elétrons via GSAP).            */
    if (frozenGeometry) return;
    if (!physicsEnabled || canvasAtoms.length < 2) return;
    const rect = canvas.getBoundingClientRect();

    const fx = new Map(), fy = new Map();
    canvasAtoms.forEach(a => { fx.set(a.id, 0); fy.set(a.id, 0); });

    /* ---- (A) FORÇAS RADIAIS ---- */
    for (let i = 0; i < canvasAtoms.length; i++) {
      for (let j = i + 1; j < canvasAtoms.length; j++) {
        const a = canvasAtoms[i], b = canvasAtoms[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const d  = Math.hypot(dx, dy) || 0.1;
        const nx = dx / d, ny = dy / d;
        const bl = getBondLength(a.element, b.element);
        const bond = findBond(a.id, b.id);
        const isStrong = bond && (bond.type === 'covalent' || bond.type === 'ionic' || bond.type === 'metallic');
        const minDist = bl * 0.70;

        let F = 0;
        if (d < minDist) {
          const overlap = (minDist - d) / minDist;
          F = -220 * overlap * overlap;
        } else if (isStrong) {
          const delta = d - bl;
          if (Math.abs(delta) > bl * 0.04) F = SNAP_K * delta;
        } else if (!bond && d < bl * 1.6) {
          const ratio = bl / d;
          F = 0.03 * (Math.pow(ratio, 6) - Math.pow(ratio, 3));
        }

        fx.set(a.id, fx.get(a.id) + F * nx);
        fy.set(a.id, fy.get(a.id) + F * ny);
        fx.set(b.id, fx.get(b.id) - F * nx);
        fy.set(b.id, fy.get(b.id) - F * ny);
      }
    }

    /* ---- (B) FORÇAS ANGULARES — usa ângulo EXATO do banco quando disponível ----
       Prioridade: MOLECULE_GEOMETRY_DB (ângulo da literatura) > vsepAngle (VSEPR geral)
       Isso garante que H₂O use 104,5°, NH₃ use 107,8°, CH₄ use 109,5°, etc.
       O banco é consultado pela fórmula Hill da molécula atual no canvas.        */
    const ANG_K = 0.55; // aumentado: força angular mais assertiva

    // Ângulo alvo vindo do banco (se existir)
    const molKeyNow    = getMoleculeKey();
    const knownMolNow  = (typeof MOLECULE_GEOMETRY_DB !== 'undefined') ? MOLECULE_GEOMETRY_DB[molKeyNow] : null;
    const dbAngleRad   = knownMolNow ? (knownMolNow.angle * Math.PI / 180) : null;

    canvasAtoms.forEach(central => {
      const myBonds = bonds.filter(b =>
        b.type === 'covalent' && (b.a === central.id || b.b === central.id)
      );
      const nBondsDistinct = myBonds.length;
      if (nBondsDistinct < 2) return;

      // Ângulo alvo: banco DB > VSEPR genérico
      let targetAngle;
      if (dbAngleRad !== null) {
        targetAngle = dbAngleRad;
      } else {
        const el2 = ELEMENTS[central.element];
        const usedElectrons = bondOrderSum(central.id);
        const nLone2 = Math.max(0, Math.floor((el2.valence - usedElectrons) / 2));
        targetAngle = vsepAngle(nBondsDistinct, nLone2);
      }

      const ligands = myBonds.map(b => {
        const lid = b.a === central.id ? b.b : b.a;
        return canvasAtoms.find(at => at.id === lid);
      }).filter(Boolean);
      if (ligands.length < 2) return;

      for (let i = 0; i < ligands.length; i++) {
        for (let j = i + 1; j < ligands.length; j++) {
          const Li = ligands[i], Lj = ligands[j];
          const ix = Li.x - central.x, iy = Li.y - central.y;
          const jx = Lj.x - central.x, jy = Lj.y - central.y;
          const di = Math.hypot(ix, iy) || 0.1;
          const dj = Math.hypot(jx, jy) || 0.1;
          const uix = ix/di, uiy = iy/di;
          const ujx = jx/dj, ujy = jy/dj;

          const cosA = Math.max(-1, Math.min(1, uix*ujx + uiy*ujy));
          const currentAngle = Math.acos(cosA);
          const dAngle = currentAngle - targetAngle;
          if (Math.abs(dAngle) < 0.005) continue;

          const sinA = Math.sqrt(Math.max(1e-6, 1 - cosA*cosA));
          const gix = (ujx - cosA*uix) / (di * sinA);
          const giy = (ujy - cosA*uiy) / (di * sinA);
          const gjx = (uix - cosA*ujx) / (dj * sinA);
          const gjy = (uiy - cosA*ujy) / (dj * sinA);

          const Fmag = ANG_K * dAngle;
          fx.set(Li.id, fx.get(Li.id) + Fmag * gix);
          fy.set(Li.id, fy.get(Li.id) + Fmag * giy);
          fx.set(Lj.id, fx.get(Lj.id) + Fmag * gjx);
          fy.set(Lj.id, fy.get(Lj.id) + Fmag * gjy);
          fx.set(central.id, fx.get(central.id) - 0.5*Fmag*(gix+gjx));
          fy.set(central.id, fy.get(central.id) - 0.5*Fmag*(giy+gjy));
        }
      }
    });

    /* ---- (C) INTEGRAÇÃO DE EULER ---- */
    canvasAtoms.forEach(atom => {
      if (atom.dragging) { atom.vx = 0; atom.vy = 0; return; }
      atom.vx = (atom.vx + fx.get(atom.id)) * DAMPING;
      atom.vy = (atom.vy + fy.get(atom.id)) * DAMPING;
      const spd = Math.hypot(atom.vx, atom.vy);
      const maxSpd = 8;
      if (spd > maxSpd) { atom.vx *= maxSpd/spd; atom.vy *= maxSpd/spd; }
      atom.x = Math.max(28, Math.min(rect.width  - 28, atom.x + atom.vx));
      atom.y = Math.max(28, Math.min(rect.height - 28, atom.y + atom.vy));
      setAtomPos(atom);
    });

    checkAllBonds();
  }


  /* ===================================================================
     7. CONSTRUÇÃO DA TABELA PERIÓDICA
     =================================================================== */
  function buildPeriodicTable() {
    ptGrid.innerHTML = '';
    const placed = new Map();
    PT_GRID.forEach(([sym,col,row]) => placed.set(`${col},${row}`, sym));
    for (let row=1; row<=7; row++) {
      for (let col=1; col<=18; col++) {
        const sym = placed.get(`${col},${row}`);
        const isLant  = col===3&&row===6;
        const isActin = col===3&&row===7;
        if (!sym&&!isLant&&!isActin) {
          const sp=document.createElement('div'); sp.className='pt-spacer';
          sp.style.gridColumn=col; sp.style.gridRow=row; ptGrid.appendChild(sp); continue;
        }
        const cell=document.createElement('div');
        cell.style.gridColumn=col; cell.style.gridRow=row;
        if (isLant||isActin) {
          cell.className='pt-cell';
          const mc=isLant?CATEGORY_INFO['lanthanide'].color:CATEGORY_INFO['actinide'].color;
          cell.style.backgroundColor=mc+'33'; cell.style.border=`1px solid ${mc}66`; cell.style.color='#e6edf3';
          cell.innerHTML=`<span class="c-sym" style="font-size:.6rem">${isLant?'57–71':'89–103'}</span>`;
          ptGrid.appendChild(cell); continue;
        }
        buildCell(cell, sym); ptGrid.appendChild(cell);
      }
    }
    fblockGrid.innerHTML='';
    FBLOCK.forEach(row => row.forEach(sym => {
      const cell=document.createElement('div'); buildCell(cell,sym); fblockGrid.appendChild(cell);
    }));
  }

  function buildCell(cell, sym) {
    const el=ELEMENTS[sym];
    const ci=CATEGORY_INFO[el.category]||{label:el.category};
    cell.className='pt-cell';
    cell.dataset.symbol=sym; cell.dataset.name=el.name.toLowerCase();
    cell.dataset.number=el.number; cell.dataset.category=el.category;
    cell.style.backgroundColor=el.color; cell.style.color=getContrastColor(el.color);
    cell.innerHTML=`<span class="c-num" aria-hidden="true">${el.number}</span><span class="c-sym" aria-hidden="true">${sym}</span><span class="c-name" aria-hidden="true">${el.name}</span>`;

    /* A11Y: atributos de acessibilidade */
    cell.setAttribute('tabindex', '0');
    cell.setAttribute('role', 'button');
    cell.setAttribute('aria-label',
      `${el.name} (${sym}), n\u00famero at\u00f4mico ${el.number}, eletronegatividade ${el.en||'n/d'}, val\u00eancia ${el.valence}, ${ci.label}. Pressione Enter ou Espa\u00e7o para adicionar ao canvas.`
    );

    /* Adiciona \u00e1tomo por clique */
    function doAddAtom() {
      const rect=canvas.getBoundingClientRect();
      const cx=rect.width/2+(Math.random()-.5)*200, cy=rect.height/2+(Math.random()-.5)*140;
      addAtom(sym, Math.max(30,Math.min(rect.width-30,cx)), Math.max(30,Math.min(rect.height-30,cy)));
      cell.style.outline='2px solid #fff'; setTimeout(()=>cell.style.outline='',300);
      announce(`${el.name} adicionado ao canvas.`);
    }

    cell.addEventListener('click', doAddAtom);

    /* A11Y: ativa por teclado (Enter e Espa\u00e7o) */
    cell.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        doAddAtom();
      }
    });

    cell.addEventListener('mouseenter', e=>showTooltip(e,el));
    cell.addEventListener('mousemove',  e=>moveTooltip(e));
    cell.addEventListener('mouseleave', ()=>hideTooltip());

    /* A11Y: exibe info de foco via live region */
    cell.addEventListener('focus', () => {
      announce(`${el.name}, s\u00edmbolo ${sym}, n\u00famero ${el.number}, ${ci.label}. EN: ${el.en||'n/d'}. Pressione Enter para adicionar.`);
    });
  }

  /* ===================================================================
     8. TOOLTIP
     =================================================================== */
  function showTooltip(e, el) {
    const ci=CATEGORY_INFO[el.category]||{label:el.category};
    const enA=el.en||'n/d';
    tooltip.innerHTML=`<strong>${el.symbol} — ${el.name}</strong><br>Nº: ${el.number} &nbsp;|&nbsp; EN: ${enA}<br>Valência: ${el.valence} &nbsp;|&nbsp; R: ${el.radius} pm<br><span class="tt-cat">${ci.label}</span>`;
    tooltip.style.display='block'; moveTooltip(e);
  }
  function moveTooltip(e) {
    let x=e.clientX+14, y=e.clientY-10;
    if (x+190>window.innerWidth) x=e.clientX-200;
    if (y+110>window.innerHeight) y=e.clientY-110;
    tooltip.style.left=x+'px'; tooltip.style.top=y+'px';
  }
  function hideTooltip() { tooltip.style.display='none'; }

  /* ===================================================================
     9. BUSCA + FILTRO
     =================================================================== */
  function buildLegend() {
    ptLegend.innerHTML='';
    Object.entries(CATEGORY_INFO).forEach(([cat,ci])=>{
      const item=document.createElement('div');
      item.className='pt-legend-item';
      item.innerHTML=`<span class="pt-legend-dot" style="background:${ci.color}" aria-hidden="true"></span>${ci.label}`;
      /* A11Y: torna o filtro de categoria acess\u00edvel por teclado */
      item.setAttribute('tabindex','0');
      item.setAttribute('role','button');
      item.setAttribute('aria-pressed','false');
      item.setAttribute('aria-label',`Filtrar por ${ci.label}`);

      function doFilter() {
        toggleCategoryFilter(cat,item);
        const isActive = activeCategoryFilter === cat;
        item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        announce(isActive ? `Filtrando por ${ci.label}.` : `Filtro ${ci.label} removido.`);
      }
      item.addEventListener('click', doFilter);
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doFilter(); }
      });
      ptLegend.appendChild(item);
    });
  }
  function toggleCategoryFilter(cat, clicked) {
    activeCategoryFilter = activeCategoryFilter===cat ? null : cat;
    document.querySelectorAll('.pt-legend-item').forEach(i=>i.classList.toggle('dimmed',activeCategoryFilter&&i!==clicked));
    if (!activeCategoryFilter) document.querySelectorAll('.pt-legend-item').forEach(i=>i.classList.remove('dimmed'));
    applyFilters();
  }
  searchInput.addEventListener('input', applyFilters);
  function applyFilters() {
    const q=searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.pt-cell[data-symbol]').forEach(cell=>{
      const match=(!q||(cell.dataset.symbol.toLowerCase().includes(q)||cell.dataset.name.includes(q)||cell.dataset.number.includes(q)))
                &&(!activeCategoryFilter||cell.dataset.category===activeCategoryFilter);
      cell.classList.toggle('dimmed',!match&&(!!q||!!activeCategoryFilter));
      cell.classList.toggle('highlighted',match&&(!!q||!!activeCategoryFilter));
      if (!q&&!activeCategoryFilter) cell.classList.remove('dimmed','highlighted');
    });
  }

  /* ===================================================================
     10. DROP ZONE (compatibilidade arraste do teclado)
     =================================================================== */
  canvas.addEventListener('dragover', e=>{ e.preventDefault(); canvas.classList.add('drop-active'); });
  canvas.addEventListener('dragleave', ()=>canvas.classList.remove('drop-active'));
  canvas.addEventListener('drop', e=>{
    e.preventDefault(); canvas.classList.remove('drop-active');
    const sym=e.dataTransfer.getData('text/plain'); if (!ELEMENTS[sym]) return;
    const rect=canvas.getBoundingClientRect();
    addAtom(sym, Math.max(30,Math.min(rect.width-30,e.clientX-rect.left)), Math.max(30,Math.min(rect.height-30,e.clientY-rect.top)));
  });

  /* ===================================================================
     11. CRIAÇÃO E REMOÇÃO DE ÁTOMOS
     =================================================================== */
  let deleteMode = false;

  function toggleDeleteMode() {
    deleteMode = !deleteMode;
    const btn = document.getElementById('btn-delete-mode');
    if (!btn) return;
    if (deleteMode) {
      btn.textContent = '\u2705 Clique no \u00e1tomo para remover';
      btn.classList.replace('btn-outline-danger','btn-danger');
      canvas.classList.add('delete-mode');
      setToggleState(btn, true);
      announce('Modo de remo\u00e7\u00e3o ativado. Clique em um \u00e1tomo para remov\u00ea-lo.', 'assertive');
    } else {
      btn.textContent = '\uD83D\uDDD1\uFE0F Remover \u00c1tomo';
      btn.classList.replace('btn-danger','btn-outline-danger');
      canvas.classList.remove('delete-mode');
      setToggleState(btn, false);
      announce('Modo de remo\u00e7\u00e3o desativado.');
    }
  }

  document.getElementById('btn-delete-mode')?.addEventListener('click', toggleDeleteMode);

  function addAtom(sym, x, y) {
    const atom={id:'atom_'+(idCounter++), element:sym, x, y, charge:0};
    initPhysics(atom);
    canvasAtoms.push(atom);
    renderAtom(atom);
    canvasHint.classList.add('hidden');
    startSimLoop();
    checkAllBonds();
    updateMolPanel();
  }

  function removeAtom(atom) {
    // Desfaz ligações e cargas iônicas associadas
    const atomBonds = bonds.filter(b => b.a === atom.id || b.b === atom.id);
    atomBonds.forEach(b => removeBond(b));

    // Animação de saída com escala
    gsap.to(atom.dom, {
      scale: 0, opacity: 0, duration: 0.22, ease: 'back.in(2)',
      onComplete: () => {
        gsap.killTweensOf(atom.orbitDom);
        atom.dom.remove();
        atom.orbitDom.remove();
        if (atom.dipoleDom) atom.dipoleDom.remove();
      }
    });

    canvasAtoms = canvasAtoms.filter(a => a.id !== atom.id);

    if (canvasAtoms.length === 0) {
      canvasHint.classList.remove('hidden');
      if (molPanel) molPanel.style.display = 'none';
      if (deleteMode) toggleDeleteMode();
      stopSimLoop();
    }

    checkAllBonds();
    updateMolPanel();
    updateBondLines();
    updateDipoles();
    updateEnergyChart();
  }

  function renderAtom(atom) {
    const data=ELEMENTS[atom.element];
    const ci=CATEGORY_INFO[data.category]||{label:data.category};
    const div=document.createElement('div');
    div.className='atom';
    div.style.backgroundColor=data.color;
    div.style.color=getContrastColor(data.color);
    div.style.setProperty('--glow-color', data.color);
    div.innerHTML=`<span aria-hidden="true">${atom.element}</span><span class="charge-label" aria-hidden="true"></span><span class="atom-remove-x" aria-hidden="true">\u00d7</span>`;

    /* A11Y: torna o \u00e1tomo focavel e descrit\u00edvel por leitores de tela */
    div.setAttribute('tabindex', '0');
    div.setAttribute('role', 'button');
    div.setAttribute('aria-label',
      `\u00c1tomo de ${data.name} (${atom.element}), ${ci.label}. Duplo clique ou pressione Delete para remover. Arraste para mover.`
    );

    canvas.appendChild(div);
    atom.dom=div;

    /* A11Y: remove \u00e1tomo por tecla Delete ou Backspace */
    div.addEventListener('keydown', e => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        announce(`${data.name} removido do canvas.`, 'assertive');
        removeAtom(atom);
      }
    });

    /* El\u00e9trons de val\u00eancia orbitando (ocultos para leitores de tela) */
    const orbit=document.createElement('div'); orbit.className='electron-orbit'; orbit.setAttribute('aria-hidden','true');
    const count=Math.min(data.valence,8);
    for (let i=0;i<count;i++) {
      const dot=document.createElement('div'); dot.className='electron-dot';
      dot.style.transform=`rotate(${(360/count)*i}deg) translateX(38px)`;
      orbit.appendChild(dot);
    }
    canvas.appendChild(orbit); atom.orbitDom=orbit;

    /* Respeita prefer\u00eancia de movimento reduzido */
    if (!prefersReducedMotion) {
      gsap.to(orbit,{rotation:360, duration:6+Math.random()*3, repeat:-1, ease:'none'});
    }

    /* Dipolo visual (oculto para leitores de tela — info \u00e9 texto no painel) */
    const dipole=document.createElement('div'); dipole.className='dipole-indicator'; dipole.style.display='none'; dipole.setAttribute('aria-hidden','true');
    canvas.appendChild(dipole); atom.dipoleDom=dipole;

    /* Duplo clique sempre remove */
    div.addEventListener('dblclick', e => {
      e.stopPropagation();
      announce(`${data.name} removido.`, 'assertive');
      removeAtom(atom);
    });

    setAtomPos(atom);
    makeDraggable(atom);
  }

  function setAtomPos(atom) {
    atom.dom.style.left      = atom.x+'px';
    atom.dom.style.top       = atom.y+'px';
    atom.orbitDom.style.left = atom.x+'px';
    atom.orbitDom.style.top  = atom.y+'px';
    if (atom.dipoleDom) { atom.dipoleDom.style.left=atom.x+'px'; atom.dipoleDom.style.top=atom.y+'px'; }
  }

  /* ===================================================================
     12. ARRASTAR ÁTOMOS
     =================================================================== */
  function makeDraggable(atom) {
    let pointerMoved = false;

    atom.dom.addEventListener('pointerdown', e=>{
      e.preventDefault();
      pointerMoved = false;
      atom.dom.setPointerCapture(e.pointerId);
      atom.dom.classList.add('dragging');
      atom.dragging=true; atom.vx=0; atom.vy=0;
      // Arrastar um átomo desfaz o freeze: o usuário quer editar manualmente
      if (frozenGeometry) {
        frozenGeometry = false;
        const btnFrz = document.getElementById('btn-freeze-geo');
        if (btnFrz) {
          btnFrz.classList.remove('active-a11y');
          btnFrz.setAttribute('aria-pressed','false');
          btnFrz.textContent = '🔓 Física Livre';
        }
      }
    });

    atom.dom.addEventListener('pointermove', e=>{
      if (!atom.dragging) return;
      pointerMoved = true;
      // Em modo delete não permite arrastar — apenas clique
      if (deleteMode) return;
      const rect=canvas.getBoundingClientRect();
      atom.x=Math.max(28,Math.min(rect.width-28,e.clientX-rect.left));
      atom.y=Math.max(28,Math.min(rect.height-28,e.clientY-rect.top));
      setAtomPos(atom); checkAllBonds();
    });

    atom.dom.addEventListener('pointerup', e=>{
      atom.dragging=false; atom.dom.classList.remove('dragging');
      atom.dom.releasePointerCapture(e.pointerId);
      // Clique sem arrastar em modo delete → remove
      if (deleteMode && !pointerMoved) {
        removeAtom(atom);
      }
    });
  }

  /* ===================================================================
     13. SELETOR DE ORDEM DE LIGAÇÃO — MODO INDIVIDUAL
     
     Dois modos:
     • Auto (padrão): novas ligações usam octeto/VSEPR
     • Editar Ligação: clique sobre uma linha de ligação no canvas para
       selecionar — ela fica destacada e os botões 1/2/3 alteram só ela.
     =================================================================== */
  let forcedBondOrder  = null;   // null = auto para novas ligações
  let selectedBond     = null;   // bond object atualmente selecionado
  let bondEditMode     = false;  // true = modo de clique nas linhas

  /* --- Coleta o bond mais próximo de um ponto (x,y) no canvas --- */
  function getBondNear(x, y, threshold = 20) {
    let closest = null, minDist = threshold;
    // Inclui tanto covalentes quanto não-covalentes
    bonds.filter(b => b.type === 'covalent').forEach(bond => {
      const a  = canvasAtoms.find(at => at.id === bond.a);
      const b2 = canvasAtoms.find(at => at.id === bond.b);
      if (!a || !b2) return;
      // Distância de ponto a segmento de reta
      const dx = b2.x - a.x, dy = b2.y - a.y;
      const len2 = dx*dx + dy*dy;
      if (len2 === 0) return;
      const t = Math.max(0, Math.min(1, ((x - a.x)*dx + (y - a.y)*dy) / len2));
      const px = a.x + t*dx - x, py = a.y + t*dy - y;
      const d = Math.hypot(px, py);
      if (d < minDist) { minDist = d; closest = bond; }
    });
    return closest;
  }

  /* --- Seleciona uma ligação e destaca visualmente --- */
  function selectBond(bond) {
    selectedBond = bond;
    updateBondLines(); // redesenha com highlight
    if (bond) {
      const a = canvasAtoms.find(at => at.id === bond.a);
      const b = canvasAtoms.find(at => at.id === bond.b);
      if (a && b) updateInfoPanel(bond, a, b);
    }
    // Atualiza botões de ordem — não-covalentes não têm ordem alterável
    const isCov = bond && bond.type === 'covalent';
    document.querySelectorAll('.bond-order-btn[data-order]').forEach(btn => {
      const v = btn.dataset.order;
      if (v === 'auto') {
        btn.classList.toggle('active-order', !bond);
      } else {
        btn.classList.toggle('active-order', isCov && bond.order === parseInt(v));
      }

    });
    // Mostra dica específica para não-covalentes
    const hint = document.getElementById('bond-edit-hint');
    if (hint) {
      if (bond) {
        hint.innerHTML = `✅ Ligação selecionada: <strong>${BOND_DATA[bond.subtype]?.label || 'covalente'}</strong>. Escolha a ordem acima.`;
        hint.style.borderColor = 'rgba(41,182,246,.25)';
        hint.style.color = '#94a3b8';
      } else {
        hint.innerHTML = '👆 Clique sobre uma ligação no canvas para selecioná-la, depois escolha a ordem acima.';
        hint.style.borderColor = 'rgba(41,182,246,.25)';
        hint.style.color = '#94a3b8';
      }
    }
  }

  /* --- Ativa/desativa modo de edição de ligação --- */
  function toggleBondEditMode() {
    bondEditMode = !bondEditMode;
    const btn     = document.getElementById('btn-bond-edit');
    const hint    = document.getElementById('bond-edit-hint');
    const overlay = document.getElementById('bond-edit-overlay');
    if (!btn) return;
    if (bondEditMode) {
      btn.textContent = '\u2705 Clique na liga\u00e7\u00e3o para editar';
      btn.classList.replace('btn-outline-info', 'btn-info');
      canvas.classList.add('bond-edit-mode');
      if (hint)    hint.style.display    = 'block';
      if (overlay) overlay.style.display = 'block';
      selectedBond = null;
      updateBondLines();
      setToggleState(btn, true);
      announce('Modo de edi\u00e7\u00e3o de liga\u00e7\u00e3o ativado. Clique sobre uma liga\u00e7\u00e3o no canvas para selecion\u00e1-la.', 'assertive');
    } else {
      btn.textContent = '\u270f\ufe0f Editar Liga\u00e7\u00e3o';
      btn.classList.replace('btn-info', 'btn-outline-info');
      canvas.classList.remove('bond-edit-mode');
      if (hint)    hint.style.display    = 'none';
      if (overlay) overlay.style.display = 'none';
      selectedBond = null;
      updateBondLines();
      setToggleState(btn, false);
      announce('Modo de edi\u00e7\u00e3o de liga\u00e7\u00e3o desativado.');
    }
  }

  document.getElementById('btn-bond-edit')?.addEventListener('click', toggleBondEditMode);

  /* --- Overlay div captura cliques sobre o canvas em modo edição ---
     Fica em z-index alto, transparente, sobre tudo. Converte as
     coordenadas do clique para o espaço do canvas e chama getBondNear. */
  const bondOverlay = document.getElementById('bond-edit-overlay');
  if (bondOverlay) {
    bondOverlay.addEventListener('click', e => {
      if (!bondEditMode) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const hit = getBondNear(x, y, 22);
      selectBond(hit ?? null);
    });
  }

  /* --- Aplica ordem a UMA ligação específica ou a todas --- */
  function applyBondOrder(order) {
    forcedBondOrder = order;

    if (selectedBond && bondEditMode) {
      // Modo individual: altera só a ligação selecionada
      const a = canvasAtoms.find(at => at.id === selectedBond.a);
      const b = canvasAtoms.find(at => at.id === selectedBond.b);
      if (a && b && selectedBond.type === 'covalent') {
        const rA = covalentCap(a.element) - (bondOrderSum(a.id) - selectedBond.order);
        const rB = covalentCap(b.element) - (bondOrderSum(b.id) - selectedBond.order);
        const maxPossible = Math.max(1, Math.min(rA, rB, 3));
        if (order !== null && order > maxPossible) {
          showBondOrderWarning(a.element, b.element, order, maxPossible);
          selectedBond.order = maxPossible;
        } else if (order !== null) {
          selectedBond.order = order;
        } else {
          selectedBond.order = Math.max(1, Math.min(rA, rB, 3));
        }
        selectBond(selectedBond); // mantém seleção e atualiza botões
      }
    } else {
      // Modo global: aplica a todas as ligações covalentes
      bonds.filter(b => b.type === 'covalent').forEach(bond => {
        const a = canvasAtoms.find(at => at.id === bond.a);
        const b = canvasAtoms.find(at => at.id === bond.b);
        if (!a || !b) return;
        const rA = covalentCap(a.element) - (bondOrderSum(a.id) - bond.order);
        const rB = covalentCap(b.element) - (bondOrderSum(b.id) - bond.order);
        const maxPossible = Math.max(1, Math.min(rA, rB, 3));
        if (order !== null) {
          if (order <= maxPossible) { bond.order = order; }
          else { showBondOrderWarning(a.element, b.element, order, maxPossible); bond.order = maxPossible; }
        } else {
          bond.order = maxPossible;
        }
      });
    }

    updateBondLines();
    updateMolPanel();
    // Atualiza painel de info
    const ref = selectedBond || bonds.find(b => b.type === 'covalent');
    if (ref) {
      const atA = canvasAtoms.find(a => a.id === ref.a);
      const atB = canvasAtoms.find(a => a.id === ref.b);
      if (atA && atB) updateInfoPanel(ref, atA, atB);
    }
  }

  // Alias para compatibilidade com listener da inicialização
  function setBondOrder(order) { applyBondOrder(order); }

  function showBondOrderWarning(symA, symB, requested, allowed) {
    const warn = document.getElementById('bond-order-warning');
    if (!warn) return;
    const names = {1:'simples',2:'dupla',3:'tripla'};
    warn.textContent = `⚠️ ${symA}–${symB}: ligação ${names[requested]} excede o octeto. Máximo: ${names[allowed]||allowed}.`;
    warn.style.display = 'block';
    clearTimeout(warn._t);
    warn._t = setTimeout(() => { warn.style.display='none'; }, 3500);
  }

  /* ===================================================================
     14. LÓGICA DE LIGAÇÕES
     =================================================================== */
  function findBond(idA, idB) {
    return bonds.find(b=>(b.a===idA&&b.b===idB)||(b.a===idB&&b.b===idA));
  }

  function checkAllBonds() {
    for (let i=0;i<canvasAtoms.length;i++) {
      for (let j=i+1;j<canvasAtoms.length;j++) {
        const a=canvasAtoms[i], b=canvasAtoms[j];
        const d=dist(a,b), bl=getBondLength(a.element,b.element);
        const ex=findBond(a.id,b.id);

        if (ex) {
          if (d > bl*1.75) { breakBondEffect(ex,a,b); removeBond(ex); }
          continue;
        }

        if (d<=bl*1.15) {
          const {type,subtype,polarNote}=determineBondType(a.element,b.element);
          formBond(a,b,type,polarNote,subtype);
        }
      }
    }
    updateBondLines();
    updateGlow();
    updateElectronSea();
    updateEnergyChart();
    updateChargeLabels();
    updateDipoles();
    updateMolPanel();
  }

  function formBond(a, b, type, polarNote=null, subtype=null) {
    const bond={a:a.id, b:b.id, type, subtype, order:1, polarNote};
    if (type==='covalent') {
      const rA=covalentCap(a.element)-bondOrderSum(a.id);
      const rB=covalentCap(b.element)-bondOrderSum(b.id);
      if (rA<=0||rB<=0) return;

      if (forcedBondOrder !== null) {
        const maxPossible = Math.min(rA, rB, 3);
        if (forcedBondOrder > maxPossible) {
          showBondOrderWarning(a.element, b.element, forcedBondOrder, maxPossible);
          bond.order = maxPossible;
        } else {
          bond.order = forcedBondOrder;
        }
      } else {
        bond.order = Math.max(1, Math.min(rA, rB, 3));
      }
    }
    if (type==='ionic') {
      const aIsM=isMetal(ELEMENTS[a.element].category);
      const donor=aIsM?a:b, acceptor=donor===a?b:a;
      const dMax=maxIonicCharge(donor.element), aMax=maxIonicCharge(acceptor.element);
      if ((donor.charge||0)<dMax&&(acceptor.charge||0)>aMax) {
        donor.charge=(donor.charge||0)+1; acceptor.charge=(acceptor.charge||0)-1; bond.transferred=1;
      } else { bond.transferred=0; }
      bond.donor=donor.id; bond.acceptor=acceptor.id;
    }
    bonds.push(bond);
    animateBondFormation(bond, a, b);
    updateInfoPanel(bond, a, b);

    /* A11Y: anuncia a formação da ligação */
    const typeNames = {covalent:'covalente', ionic:'iônica', metallic:'metálica'};
    announce(`Liga\u00e7\u00e3o ${typeNames[type]||type} formada entre ${ELEMENTS[a.element].name} e ${ELEMENTS[b.element].name}.`);
  }

  function removeBond(bond) {
    if (bond.type==='ionic'&&bond.transferred) {
      const d=canvasAtoms.find(at=>at.id===bond.donor);
      const ac=canvasAtoms.find(at=>at.id===bond.acceptor);
      if (d) d.charge-=bond.transferred;
      if (ac) ac.charge+=bond.transferred;
    }
    bonds=bonds.filter(b=>b!==bond);
  }

  /* ===================================================================
     14. EFEITOS DE FORMAÇÃO E QUEBRA DE LIGAÇÃO
     =================================================================== */
  function animateBondFormation(bond, a, b) {
    // Flash de energia na formação
    spawnBurstAt((a.x+b.x)/2, (a.y+b.y)/2, bond.type, bond.subtype);

    if (bond.type==='ionic'&&bond.transferred) {
      const d=canvasAtoms.find(at=>at.id===bond.donor);
      const ac=canvasAtoms.find(at=>at.id===bond.acceptor);
      if (!d||!ac) return;
      // Múltiplas partículas de elétron
      for (let k=0;k<3;k++) {
        setTimeout(()=>{
          const ep=document.createElement('div'); ep.className='electron-particle';
          canvas.appendChild(ep);
          gsap.set(ep,{xPercent:-50,yPercent:-50,x:d.x+(Math.random()-0.5)*20,y:d.y+(Math.random()-0.5)*20});
          gsap.to(ep,{x:ac.x,y:ac.y,duration:.55+Math.random()*.3,ease:'power2.inOut',onComplete:()=>ep.remove()});
        }, k*90);
      }
    }

    if (bond.type==='covalent') {
      // Linha de "compartilhamento" que pulsa brevemente
      const fl=document.createElementNS('http://www.w3.org/2000/svg','line');
      fl.setAttribute('x1',a.x); fl.setAttribute('y1',a.y);
      fl.setAttribute('x2',b.x); fl.setAttribute('y2',b.y);
      fl.setAttribute('stroke','#ffffff'); fl.setAttribute('stroke-width','6');
      fl.setAttribute('opacity','0.9'); fl.setAttribute('stroke-linecap','round');
      svgEl.appendChild(fl);
      gsap.to(fl,{attr:{opacity:0,'stroke-width':0},duration:.45,ease:'power2.out',onComplete:()=>fl.remove()});
    }
  }

  function breakBondEffect(bond, a, b) {
    if (prefersReducedMotion) return; /* A11Y: sem partículas se preferência de movimento reduzido */
    const mx=(a.x+b.x)/2, my=(a.y+b.y)/2;
    for (let k=0;k<5;k++) {
      const p=document.createElement('div'); p.className='break-particle'; canvas.appendChild(p);
      const angle=Math.random()*Math.PI*2, spd=20+Math.random()*40;
      gsap.set(p,{xPercent:-50,yPercent:-50,x:mx,y:my,opacity:1});
      gsap.to(p,{x:mx+Math.cos(angle)*spd, y:my+Math.sin(angle)*spd,
        opacity:0, duration:.4+Math.random()*.3, ease:'power2.out', onComplete:()=>p.remove()});
    }
  }

  function spawnBurstAt(x, y, type, subtype) {
    if (prefersReducedMotion) return; /* A11Y: sem partículas se preferência de movimento reduzido */
    const colors={covalent:'#4fc3f7', ionic:'#ffb74d', metallic:'#fde68a'};
    const clr=colors[subtype]||colors[type]||'#ffffff';
    for (let k=0;k<6;k++) {
      const p=document.createElement('div'); p.className='burst-particle';
      p.style.background=clr; p.style.boxShadow=`0 0 6px ${clr}`;
      canvas.appendChild(p);
      const angle=(k/6)*Math.PI*2, r=18+Math.random()*20;
      gsap.set(p,{xPercent:-50,yPercent:-50,x,y,opacity:1,scale:1});
      gsap.to(p,{x:x+Math.cos(angle)*r, y:y+Math.sin(angle)*r,
        opacity:0, scale:0, duration:.5, ease:'power2.out', onComplete:()=>p.remove()});
    }
  }

  /* ===================================================================
     15. LINHAS SVG DAS LIGAÇÕES — COM SUPORTE A CUNHAS (WEDGE BONDS)
     ===================================================================
     Notação estereoquímica padrão da literatura química:
       • Linha plana  ─── : ligação no plano do papel
       • Cunha sólida ◀▶▶ : ligação vindo para frente do plano (vem ao leitor)
       • Cunha tracejada ╌╌ : ligação indo para trás do plano (afasta do leitor)

     Regra de atribuição automática (IUPAC / Nomenclatura Orgânica):
       Para molécula com geometria tetraédrica ou piramidal (nLone > 0):
         - 2 ligações no plano  (linha normal)
         - 1 cunha sólida       (ligante à frente)
         - 1 cunha tracejada    (ligante atrás)
       Para trigonal planar (3 ligantes, 0 pares solitários):
         - 3 linhas no plano (é planar mesmo)
       Para linear: 2 linhas planas (180°, no plano)
       Para angular (2 lig, ≥1 lone): 2 linhas planas (projeção 2D suficiente)
     =================================================================== */

  let wedgeMode  = false; // toggled pelo botão
  let showAngles = false; // mostra ângulos de ligação no canvas

  /* ── Tipo de cunha por ligação ── */
  function getWedgeType(central, ligand, ligandIndex, nBonds, nLone) {
    // Sem modo cunha: retorna 'plane' para todos
    if (!wedgeMode) return 'plane';

    // Geometria puramente planar → tudo no plano
    if (nLone === 0 && nBonds <= 3) return 'plane';
    // Linear → plano
    if (nBonds === 2 && nLone === 0) return 'plane';
    // Angular (2 lig + ≥1 lone) → plano (já fica visível pelo ângulo)
    if (nBonds === 2) return 'plane';

    // Tetraédrico / Piramidal (nBonds=3,4): cunhas
    //   índice 0 → no plano (linha normal)
    //   índice 1 → no plano (linha normal)
    //   índice 2 → cunha sólida (vem para frente)
    //   índice 3 → cunha tracejada (vai para trás)
    if (nBonds >= 3) {
      if (ligandIndex === 0) return 'plane';
      if (ligandIndex === 1) return 'plane';
      if (ligandIndex === 2) return 'wedge-solid';
      if (ligandIndex >= 3)  return 'wedge-dash';
    }
    return 'plane';
  }

  /* ── Desenha cunha sólida: triângulo preenchido ── */
  function drawWedgeSolid(svgParent, x1, y1, x2, y2, color) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len; // perpendicular
    const w = 6; // largura máxima da cunha no átomo distal
    // Triângulo: ponta em (x1,y1), base alargada em (x2,y2)
    const pts = [
      `${x1},${y1}`,
      `${x2 + nx*w},${y2 + ny*w}`,
      `${x2 - nx*w},${y2 - ny*w}`,
    ].join(' ');
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    poly.setAttribute('points', pts);
    poly.setAttribute('fill', color);
    poly.setAttribute('class', 'bond-wedge-solid');
    svgParent.appendChild(poly);
  }

  /* ── Desenha cunha tracejada: série de traços transversais ── */
  function drawWedgeDash(svgParent, x1, y1, x2, y2, color) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;   // unitário ao longo da ligação
    const nx = -uy, ny = ux;              // perpendicular
    const nStripes = 7;
    for (let i = 0; i < nStripes; i++) {
      const t  = (i + 1) / (nStripes + 1); // 0..1 ao longo da ligação
      const cx = x1 + t * dx;
      const cy = y1 + t * dy;
      const hw = 1.5 + t * 5; // meia-largura cresce em direção à ponta distal
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ln.setAttribute('x1', cx - nx * hw); ln.setAttribute('y1', cy - ny * hw);
      ln.setAttribute('x2', cx + nx * hw); ln.setAttribute('y2', cy + ny * hw);
      ln.setAttribute('stroke', color);
      ln.setAttribute('stroke-width', '1.8');
      ln.setAttribute('stroke-linecap', 'round');
      ln.setAttribute('class', 'bond-wedge-dash');
      svgParent.appendChild(ln);
    }
  }

  /* ── Linha covalente paralela (dupla/tripla) com offset perpendicular ── */
  function drawLine(a, b, cls, ox=0, oy=0, extra='') {
    const ln=document.createElementNS('http://www.w3.org/2000/svg','line');
    ln.setAttribute('x1',a.x+ox); ln.setAttribute('y1',a.y+oy);
    ln.setAttribute('x2',b.x+ox); ln.setAttribute('y2',b.y+oy);
    ln.setAttribute('class',cls);
    if (extra) ln.setAttribute('style',extra);
    svgEl.appendChild(ln);
  }
  function drawParallel(a, b, order, cls) {
    const dx=b.x-a.x, dy=b.y-a.y, len=Math.hypot(dx,dy)||1;
    const px=-dy/len, py=dx/len;
    for (let i=0;i<order;i++) {
      const off=(i-(order-1)/2)*6; drawLine(a,b,cls,px*off,py*off);
    }
  }

  /* ── Calcula ângulo real entre dois ligantes em torno de um átomo central ── */
  function calcBondAngle(central, ligA, ligB) {
    const ax = ligA.x - central.x, ay = ligA.y - central.y;
    const bx = ligB.x - central.x, by = ligB.y - central.y;
    const dot = ax*bx + ay*by;
    const mag = (Math.hypot(ax, ay) || 1) * (Math.hypot(bx, by) || 1);
    return Math.acos(Math.max(-1, Math.min(1, dot/mag))) * 180 / Math.PI;
  }

  /* ── Desenha labels de ângulo entre pares de ligantes ── */
  function drawAngleLabels() {
    svgEl.querySelectorAll('.bond-angle-label,.bond-angle-arc').forEach(e => e.remove());
    if (!showAngles) return;

    const covalentBonds = bonds.filter(b => b.type === 'covalent');
    canvasAtoms.forEach(central => {
      const myBonds = covalentBonds.filter(b => b.a === central.id || b.b === central.id);
      if (myBonds.length < 2) return;
      const ligands = myBonds.map(b => {
        const lid = b.a === central.id ? b.b : b.a;
        return canvasAtoms.find(at => at.id === lid);
      }).filter(Boolean);

      // Para cada par de ligantes, desenha ângulo
      for (let i = 0; i < ligands.length; i++) {
        for (let j = i + 1; j < ligands.length; j++) {
          const Li = ligands[i], Lj = ligands[j];
          const angleDeg = calcBondAngle(central, Li, Lj);

          // Ponto de exibição: entre os dois ligantes, perto do centro
          const r = 28; // raio do arco/label
          const ax = Li.x - central.x, ay = Li.y - central.y;
          const bx = Lj.x - central.x, by = Lj.y - central.y;
          const ma = Math.hypot(ax, ay) || 1, mb = Math.hypot(bx, by) || 1;
          const mx = (ax/ma + bx/mb) / 2;
          const my = (ay/ma + by/mb) / 2;
          const ml = Math.hypot(mx, my) || 0.01;
          const lx = central.x + (mx/ml) * r;
          const ly = central.y + (my/ml) * r;

          // Arco SVG indicando o ângulo
          const arcR = 18;
          const a1 = Math.atan2(ay, ax);
          const a2 = Math.atan2(by, bx);
          // Arco de a1 a a2 (sentido menor)
          let da = a2 - a1;
          if (da >  Math.PI) da -= 2 * Math.PI;
          if (da < -Math.PI) da += 2 * Math.PI;
          const arcX1 = central.x + arcR * Math.cos(a1);
          const arcY1 = central.y + arcR * Math.sin(a1);
          const arcX2 = central.x + arcR * Math.cos(a1 + da);
          const arcY2 = central.y + arcR * Math.sin(a1 + da);
          const sweep = da > 0 ? 1 : 0;
          const large = Math.abs(da) > Math.PI ? 1 : 0;

          const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          arc.setAttribute('d', `M ${arcX1} ${arcY1} A ${arcR} ${arcR} 0 ${large} ${sweep} ${arcX2} ${arcY2}`);
          arc.setAttribute('fill', 'none');
          arc.setAttribute('stroke', '#fbbf24');
          arc.setAttribute('stroke-width', '1');
          arc.setAttribute('opacity', '0.6');
          arc.setAttribute('class', 'bond-angle-arc');
          svgEl.appendChild(arc);

          // Label de texto com o ângulo
          const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          txt.setAttribute('x', lx);
          txt.setAttribute('y', ly);
          txt.setAttribute('class', 'bond-angle-label');
          txt.textContent = `${angleDeg.toFixed(1)}°`;
          svgEl.appendChild(txt);
        }
      }
    });
  }

  /* ── Função principal de redesenho de todas as ligações ── */
  function updateBondLines() {
    svgEl.querySelectorAll(
      '.bond-covalent,.bond-plane,.bond-wedge-solid,.bond-wedge-dash,' +
      '.bond-ionic,.bond-metallic,.bond-selected,.bond-label'
    ).forEach(el => el.remove());

    bonds.forEach(bond => {
      const a = canvasAtoms.find(at => at.id === bond.a);
      const b = canvasAtoms.find(at => at.id === bond.b);
      if (!a || !b) return;
      const isSelected = bond === selectedBond;

      if (bond.type === 'covalent') {
        // Glow amarelo para ligação selecionada
        if (isSelected) {
          const hl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          hl.setAttribute('x1', a.x); hl.setAttribute('y1', a.y);
          hl.setAttribute('x2', b.x); hl.setAttribute('y2', b.y);
          hl.setAttribute('class', 'bond-selected');
          hl.setAttribute('stroke', '#facc15');
          hl.setAttribute('stroke-width', String(bond.order * 6 + 10));
          hl.setAttribute('stroke-linecap', 'round');
          hl.setAttribute('opacity', '0.4');
          svgEl.insertBefore(hl, svgEl.firstChild);
        }

        // Determina se esta ligação deve ser cunha
        // Procura o átomo central desta ligação (o que tem mais ligações)
        const aCount = bonds.filter(bx => bx.type==='covalent' && (bx.a===a.id||bx.b===a.id)).length;
        const bCount = bonds.filter(bx => bx.type==='covalent' && (bx.a===b.id||bx.b===b.id)).length;
        let central = null, ligand = null;
        if (aCount >= bCount && aCount >= 2) { central = a; ligand = b; }
        else if (bCount > aCount && bCount >= 2) { central = b; ligand = a; }

        let wedgeType = 'plane';
        if (wedgeMode && central) {
          const el      = ELEMENTS[central.element];
          const used    = bondOrderSum(central.id);
          const nLone   = Math.max(0, Math.floor((el.valence - used) / 2));
          const myBonds = bonds.filter(bx => bx.type==='covalent' && (bx.a===central.id||bx.b===central.id));
          const nBonds  = myBonds.length;
          // índice desta ligação no array do centro
          const idx     = myBonds.findIndex(bx => bx === bond);
          wedgeType     = getWedgeType(central, ligand, idx, nBonds, nLone);
        }

        const bondColor = '#4fc3f7';

        if (wedgeType === 'wedge-solid') {
          // Cunha sólida — apenas ligações simples (perspectiva)
          drawWedgeSolid(svgEl, central.x, central.y, ligand.x, ligand.y, bondColor);
        } else if (wedgeType === 'wedge-dash') {
          // Cunha tracejada
          drawWedgeDash(svgEl, central.x, central.y, ligand.x, ligand.y, bondColor);
        } else {
          // Linha plana normal (dupla/tripla ou plano puro)
          drawParallel(a, b, bond.order, 'bond-covalent');
        }

        // Label de ordem (σ, σ+π, σ+2π) para ordem > 1 ou selecionado
        if (bond.order > 1 || isSelected) {
          const mx = (a.x+b.x)/2, my = (a.y+b.y)/2;
          const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          lbl.setAttribute('x', mx); lbl.setAttribute('y', my - 8);
          lbl.setAttribute('class', 'bond-label');
          lbl.setAttribute('fill', isSelected ? '#facc15' : '#93c5fd');
          lbl.setAttribute('font-size', isSelected ? '9' : '8');
          lbl.setAttribute('font-weight', isSelected ? 'bold' : 'normal');
          lbl.setAttribute('text-anchor', 'middle');
          const orderLabel = {1:'σ', 2:'σ+π', 3:'σ+2π'};
          lbl.textContent = orderLabel[bond.order] || '';
          svgEl.appendChild(lbl);
        }
      }
      else if (bond.type === 'ionic')    drawLine(a, b, 'bond-ionic');
      else if (bond.type === 'metallic') drawLine(a, b, 'bond-metallic');
    });

    // Redesenha ângulos se ativado
    drawAngleLabels();
  }

  function updateVdwArcs() { svgEl.querySelectorAll('.vdw-arc').forEach(e=>e.remove()); }

  /* ===================================================================
     17. DIPOLO MOLECULAR (δ+ / δ-)
     =================================================================== */
  function updateDipoles() {
    canvasAtoms.forEach(atom=>{ if(atom.dipoleDom) atom.dipoleDom.style.display='none'; });

    bonds.filter(b=>b.type==='covalent').forEach(bond=>{
      const a=canvasAtoms.find(at=>at.id===bond.a);
      const b=canvasAtoms.find(at=>at.id===bond.b);
      if (!a||!b) return;
      const enA=ELEMENTS[a.element].en||1, enB=ELEMENTS[b.element].en||1;
      const dEN=Math.abs(enA-enB);
      if (dEN<0.4) return; // apolar: sem dipolo visível

      // δ+ no átomo menos eletronegativo, δ- no mais eletronegativo
      const [plus, minus] = enA < enB ? [a,b] : [b,a];
      if (plus.dipoleDom) {
        plus.dipoleDom.style.display='block';
        plus.dipoleDom.textContent='δ+';
        plus.dipoleDom.style.color='#fbbf24';
      }
      if (minus.dipoleDom) {
        minus.dipoleDom.style.display='block';
        minus.dipoleDom.textContent='δ−';
        minus.dipoleDom.style.color='#60a5fa';
      }
    });
  }

  /* ===================================================================
     18. GLOW DE ESTABILIDADE
     =================================================================== */
  function updateGlow() {
    canvasAtoms.forEach(a=>a.dom.classList.remove('stable','near-bond'));
    bonds.forEach(bond=>{
      const a=canvasAtoms.find(at=>at.id===bond.a), b=canvasAtoms.find(at=>at.id===bond.b);
      if (!a||!b) return;
      const d=dist(a,b), bl=getBondLength(a.element,b.element);
      if (Math.abs(d-bl)<=bl*.15) { a.dom.classList.add('stable'); b.dom.classList.add('stable'); }
      else if (d<bl*1.5) { a.dom.classList.add('near-bond'); b.dom.classList.add('near-bond'); }
    });
    // Distância de pré-ligação (VdW)
    for (let i=0;i<canvasAtoms.length;i++) {
      for (let j=i+1;j<canvasAtoms.length;j++) {
        const a=canvasAtoms[i], b=canvasAtoms[j];
        if (findBond(a.id,b.id)) continue;
        const d=dist(a,b), bl=getBondLength(a.element,b.element);
        if (d<=bl*1.6&&d>bl*1.15) { a.dom.classList.add('near-bond'); b.dom.classList.add('near-bond'); }
      }
    }
  }

  /* ===================================================================
     19. MAR DE ELÉTRONS (ligação metálica)
     =================================================================== */
  function updateElectronSea() {
    const mIds=new Set();
    bonds.filter(b=>b.type==='metallic').forEach(b=>{mIds.add(b.a);mIds.add(b.b);});
    const mAtoms=canvasAtoms.filter(a=>mIds.has(a.id));
    if (!mAtoms.length) { seaElectrons.forEach(e=>{gsap.killTweensOf(e);e.remove();}); seaElectrons=[]; return; }
    const xs=mAtoms.map(a=>a.x), ys=mAtoms.map(a=>a.y);
    const mnX=Math.min(...xs)-50, mxX=Math.max(...xs)+50, mnY=Math.min(...ys)-50, mxY=Math.max(...ys)+50;
    const desired=Math.min(mAtoms.length*3,18);
    while (seaElectrons.length<desired) { const e=document.createElement('div'); e.className='sea-electron'; canvas.appendChild(e); seaElectrons.push(e); animateSea(e,mnX,mxX,mnY,mxY); }
    while (seaElectrons.length>desired) { const e=seaElectrons.pop(); gsap.killTweensOf(e); e.remove(); }
  }
  function animateSea(e,mnX,mxX,mnY,mxY) {
    if (prefersReducedMotion) {
      /* A11Y: posiciona elétron de forma estática, sem animação */
      gsap.set(e,{xPercent:-50,yPercent:-50,x:mnX+Math.random()*(mxX-mnX),y:mnY+Math.random()*(mxY-mnY)});
      return;
    }
    const go=()=>gsap.to(e,{x:mnX+Math.random()*(mxX-mnX),y:mnY+Math.random()*(mxY-mnY),duration:.8+Math.random()*1.4,ease:'sine.inOut',onComplete:go});
    gsap.set(e,{xPercent:-50,yPercent:-50,x:mnX+Math.random()*(mxX-mnX),y:mnY+Math.random()*(mxY-mnY)});
    go();
  }

  /* ===================================================================
     20. PAINEL MOLECULAR (fórmula + estatísticas)
     =================================================================== */
  function updateMolPanel() {
    if (!molPanel) return;
    if (canvasAtoms.length === 0) { molPanel.style.display='none'; return; }
    molPanel.style.display='block';

    // Fórmula molecular simplificada (Hill: C primeiro, H segundo, resto alfabético)
    const counts={};
    canvasAtoms.forEach(a=>{ counts[a.element]=(counts[a.element]||0)+1; });
    const order=['C','H',...Object.keys(counts).filter(k=>k!=='C'&&k!=='H').sort()];
    const formula=order.filter(k=>counts[k]).map(k=>counts[k]>1?`${k}<sub>${counts[k]}</sub>`:k).join('');
    molFormula.innerHTML = formula || '—';

    // Estatísticas por tipo
    const bCov  = bonds.filter(b=>b.type==='covalent').length;
    const bIon  = bonds.filter(b=>b.type==='ionic').length;
    const bMet  = bonds.filter(b=>b.type==='metallic').length;
    const totalEN = canvasAtoms.reduce((s,a)=>s+(ELEMENTS[a.element].en||0),0);
    const avgEN   = canvasAtoms.length ? (totalEN/canvasAtoms.length).toFixed(2) : '—';

    // Dipolo total estimado (soma vetorial simples)
    let dipX=0, dipY=0;
    bonds.filter(b=>b.type==='covalent').forEach(bond=>{
      const a=canvasAtoms.find(at=>at.id===bond.a), b2=canvasAtoms.find(at=>at.id===bond.b);
      if (!a||!b2) return;
      const enA=ELEMENTS[a.element].en||1, enB=ELEMENTS[b2.element].en||1;
      const dEN=enB-enA, len=dist(a,b2)||1;
      dipX += dEN*(b2.x-a.x)/len; dipY += dEN*(b2.y-a.y)/len;
    });
    const dipMag=Math.hypot(dipX,dipY).toFixed(2);
    const polar = parseFloat(dipMag) > 0.3 ? `<span style="color:#fbbf24">polar (μ≈${dipMag})</span>` : `<span style="color:#6ee7b7">apolar</span>`;

    // Geometrias VSEPR de todos os centros ativos
    const geoLines = [];
    canvasAtoms.forEach(at => {
      const v = getVSEPR(at);
      if (v) geoLines.push(`${at.element}: <b>${v.name}</b>`);
    });

    molStats.innerHTML = [
      `<span>⚛️ Átomos: <b>${canvasAtoms.length}</b></span>`,
      bCov  ? `<span>🔗 Cov: <b>${bCov}</b></span>` : '',
      bIon  ? `<span>⚡ Iôn: <b>${bIon}</b></span>` : '',
      bMet  ? `<span>🧲 Met: <b>${bMet}</b></span>` : '',
      `<span>EN médio: <b>${avgEN}</b></span>`,
      canvasAtoms.length>1 ? `<span>Dipolo: ${polar}</span>` : '',
    ].filter(Boolean).join('');

    if (geoLines.length) {
      molStats.innerHTML += `<div style="width:100%;margin-top:4px;padding-top:4px;border-top:1px solid #2a3142;font-size:.65rem;color:#94a3b8;">📐 Geometrias: ${geoLines.join(' &nbsp;|&nbsp; ')}</div>`;
    }
  }

  /* ===================================================================
     21. PAINEL DE INFORMAÇÃO
     =================================================================== */
  function updateChargeLabels() {
    canvasAtoms.forEach(a=>{ const l=a.dom.querySelector('.charge-label'); if(l) l.textContent=formatCharge(a.charge); });
  }

  function describeBond(bond, a, b) {
    if (!a || !b) return '';
    const enA=ELEMENTS[a.element].en||1, enB=ELEMENTS[b.element].en||1;
    const dEN=Math.abs(enA-enB).toFixed(2);
    const sub = bond.subtype || bond.type;
    const bd  = BOND_DATA[sub] || BOND_DATA[bond.type] || {};
    const iupacNote = `<span class="iupac-note">📖 <strong>IUPAC</strong>: ligação química existe quando forças entre átomos formam agregado estável o suficiente para ser uma espécie independente. A fronteira iônica/covalente é um contínuo — não uma divisão absoluta.</span>`;

    // Cabeçalho rico para qualquer tipo
    function richHeader(bd, extra='') {
      return `<div class="bond-card">
        <div class="bond-card-title">${bd.icon||'🔬'} ${bd.label||sub}</div>
        <div class="bond-card-pair">${a.element} '—' ${b.element} &nbsp;|&nbsp; ΔEN = ${dEN}</div>
        <div class="bond-card-grid">
          <span>⚡ Energia: <b>${bd.energy||'—'}</b></span>
          <span>📏 Comprimento: <b>${bd.length||'—'}</b></span>
          <span>🔀 Natureza: <b>${bd.nature||'—'}</b></span>
          <span>🧪 Ex: <b>${bd.examples||'—'}</b></span>
        </div>
        <div class="bond-card-desc">${bd.desc||''}</div>
        ${extra}
      </div>`;
    }

    if (bond.type==='ionic') {
      const d=canvasAtoms.find(at=>at.id===bond.donor), ac=canvasAtoms.find(at=>at.id===bond.acceptor);
      const xtraIon = d && ac && bond.transferred
        ? `<div class="bond-transfer">${ELEMENTS[d.element].name} → ${bond.transferred}e⁻ → ${ELEMENTS[ac.element].name}: <b>${d.element}${formatCharge(d.charge)}</b> + <b>${ac.element}${formatCharge(ac.charge)}</b></div>` : '';
      return richHeader(BOND_DATA.ionic, xtraIon) + iupacNote;
    }

    if (bond.type==='covalent') {
      const orderNames={1:'Simples — 1 par σ',2:'Dupla — σ + π',3:'Tripla — σ + 2π'};
      const datKey = sub==='covalent_polar' ? 'covalent_polar' :
                     sub==='covalent_transition' ? 'covalent_transition' : 'covalent_nonpolar';
      const extra = `<div class="bond-order-tag">Ordem: <b>${orderNames[bond.order]||bond.order}</b></div>`
                  + (bond.polarNote ? `<div class="bond-polar-note">${bond.polarNote}</div>` : '');
      return richHeader(BOND_DATA[datKey]||BOND_DATA.covalent_nonpolar, extra) + iupacNote;
    }

    if (bond.type==='metallic') return richHeader(BOND_DATA.metallic) + iupacNote;

    return `<b>${sub||bond.type}</b> — ${a.element}–${b.element}`;
  }
  function updateInfoPanel(bond, a, b) {
    infoText.innerHTML = describeBond(bond, a, b);
    // Detecta e exibe geometria VSEPR do átomo central (o que tem mais ligações)
    const candidates = [a, b].filter(at => {
      const myBonds = bonds.filter(bx => bx.type==='covalent' && (bx.a===at.id||bx.b===at.id));
      return myBonds.length >= 2;
    });
    if (candidates.length > 0) {
      const central = candidates.sort((x,y)=>
        bonds.filter(bx=>bx.type==='covalent'&&(bx.a===y.id||bx.b===y.id)).length -
        bonds.filter(bx=>bx.type==='covalent'&&(bx.a===x.id||bx.b===x.id)).length
      )[0];
      const vsepr = getVSEPR(central);
      if (vsepr) {
        const { nBonds, nLone, name } = vsepr;
        infoText.innerHTML += `<span class="iupac-note">📐 <strong>Geometria VSEPR (${central.element})</strong>: ${nBonds} ligante(s) + ${nLone} par(es) solitário(s) → <strong>${name}</strong>. Motor aplica forças angulares para convergir ao ângulo de equilíbrio.</span>`;
      }
    }
  }

  /* ===================================================================
     22. GRÁFICO DE ENERGIA (D3)
     =================================================================== */
  const esvg=d3.select('#energy-chart');
  const cW=240,cH=150,mg={top:14,right:12,bottom:26,left:32};
  esvg.attr('viewBox',`0 0 ${cW} ${cH}`);
  const xSc=d3.scaleLinear().range([mg.left,cW-mg.right]);
  const ySc=d3.scaleLinear().range([cH-mg.bottom,mg.top]);
  function potE(r,r0,d){ if(r<=.01) return d*8; const x=r0/r; return d*(Math.pow(x,12)-2*Math.pow(x,6)); }
  function clearChart() {
    esvg.selectAll('*').remove();
    esvg.append('text').attr('class','energy-empty').attr('x',cW/2).attr('y',cH/2).attr('text-anchor','middle').text('Sem interação detectada');
    energyCaption.textContent='Adicione dois átomos para gerar a curva.';
  }
  function getFocusBond() {
    let best=null,bd=Infinity;
    bonds.filter(b=>b.type!=='metallic').forEach(bond=>{
      const a=canvasAtoms.find(at=>at.id===bond.a), b=canvasAtoms.find(at=>at.id===bond.b);
      if(!a||!b) return; const d=dist(a,b); if(d<bd){bd=d;best={bond,a,b,dist:d};}
    });
    return best;
  }
  function updateEnergyChart() {
    const focus=getFocusBond(); if(!focus){clearChart();return;}
    const {a,b,dist:d,bond}=focus;
    const r0=getBondLength(a.element,b.element),depth=1,rMax=r0*2.6;
    xSc.domain([r0*.55,rMax]); ySc.domain([-depth*1.15,depth*2]);
    esvg.selectAll('*').remove();
    esvg.append('g').attr('class','axis').attr('transform',`translate(0,${cH-mg.bottom})`).call(d3.axisBottom(xSc).ticks(4).tickFormat(v=>v.toFixed(0)));
    esvg.append('g').attr('class','axis').attr('transform',`translate(${mg.left},0)`).call(d3.axisLeft(ySc).ticks(4).tickFormat(v=>v.toFixed(1)));
    esvg.append('text').attr('class','axis-label').attr('x',cW/2).attr('y',cH-4).text('Distância (pm-eq.)');
    esvg.append('text').attr('class','axis-label').attr('transform',`translate(8,${cH/2}) rotate(-90)`).text('E potencial (u.a.)');
    const pts=d3.range(r0*.55,rMax,(rMax-r0*.55)/80).map(r=>({r,e:potE(r,r0,depth)}));
    esvg.append('path').datum(pts).attr('class','energy-curve').attr('d',d3.line().x(p=>xSc(p.r)).y(p=>ySc(Math.max(p.e,-depth*1.15))));
    esvg.append('line').attr('class','min-marker').attr('x1',xSc(r0)).attr('x2',xSc(r0)).attr('y1',ySc(-depth)).attr('y2',cH-mg.bottom);
    esvg.append('text').attr('class','min-label').attr('x',xSc(r0)+3).attr('y',ySc(-depth)-4).text('E mín.');
    const cE=potE(d,r0,depth);
    esvg.append('circle').attr('class','energy-marker').attr('r',4)
      .attr('cx',xSc(Math.min(Math.max(d,r0*.55),rMax))).attr('cy',ySc(Math.max(cE,-depth*1.15)));
    energyCaption.textContent=Math.abs(d-r0)<=r0*.15
      ? `✅ ${a.element}–${b.element} na energia mínima — ligação estável.`
      : `d=${d.toFixed(0)} / r₀=${r0.toFixed(0)} px (${bond.type})`;
  }

  /* ===================================================================
     23. CONTROLES DE FÍSICA
     =================================================================== */
  if (btnPhysics) {
    btnPhysics.addEventListener('click',()=>{
      // Se estava frozen, desfreza primeiro
      if (frozenGeometry) {
        frozenGeometry = false;
        const btnFrz = document.getElementById('btn-freeze-geo');
        if (btnFrz) {
          btnFrz.classList.remove('active-a11y');
          btnFrz.setAttribute('aria-pressed','false');
          btnFrz.textContent = '\uD83D\uDD13 F\u00edsica Livre';
        }
      }
      physicsEnabled=!physicsEnabled;
      btnPhysics.textContent=physicsEnabled?'\u23f8 Pausar F\u00edsica':'\u25b6 Ativar F\u00edsica';
      btnPhysics.classList.toggle('btn-outline-warning',!physicsEnabled);
      btnPhysics.classList.toggle('btn-warning',physicsEnabled);
      setToggleState(btnPhysics, !physicsEnabled);
      announce(physicsEnabled ? 'Simula\u00e7\u00e3o f\u00edsica ativada.' : 'Simula\u00e7\u00e3o f\u00edsica pausada.');
    });
  }

  /* Botão de travamento de geometria */
  document.getElementById('btn-freeze-geo')?.addEventListener('click', () => {
    frozenGeometry = !frozenGeometry;
    const btn = document.getElementById('btn-freeze-geo');
    if (btn) {
      btn.classList.toggle('active-a11y', frozenGeometry);
      btn.setAttribute('aria-pressed', frozenGeometry ? 'true' : 'false');
      btn.textContent = frozenGeometry ? '\uD83D\uDD12 Geometria Travada' : '\uD83D\uDD13 F\u00edsica Livre';
    }
    if (frozenGeometry) {
      // Zera velocidades para não haver impulso ao destravar depois
      canvasAtoms.forEach(a => { a.vx = 0; a.vy = 0; });
      announce('Geometria travada. Os \u00e1tomos n\u00e3o se mover\u00e3o pela f\u00edsica. Arraste para editar.');
    } else {
      announce('Geometria livre. A f\u00edsica pode mover os \u00e1tomos.');
    }
    if (!simLoop) startSimLoop();
  });
  if (btnSnap) {
    btnSnap.addEventListener('click',()=>{
      // Snapa todos os átomos ligados para o comprimento ideal
      bonds.forEach(bond=>{
        if (bond.type==='metallic') return;
        const a=canvasAtoms.find(at=>at.id===bond.a), b=canvasAtoms.find(at=>at.id===bond.b);
        if (!a||!b) return;
        const d=dist(a,b)||1, bl=getBondLength(a.element,b.element);
        const mx=(a.x+b.x)/2, my=(a.y+b.y)/2;
        const nx=(b.x-a.x)/d, ny=(b.y-a.y)/d;
        gsap.to(a.dom,{duration:.35,ease:'back.out'});
        a.x=mx-nx*bl/2; a.y=my-ny*bl/2;
        b.x=mx+nx*bl/2; b.y=my+ny*bl/2;
        a.vx=0; a.vy=0; b.vx=0; b.vy=0;
        setAtomPos(a); setAtomPos(b);
        spawnBurstAt(mx,my,bond.type);
      });
      checkAllBonds();
    });
  }

  /* ===================================================================
     24. VISUALIZAÇÃO 3D
     =================================================================== */
  function buildXYZ() {
    const lines=[`${canvasAtoms.length}`,'Simulador IUPAC'];
    canvasAtoms.forEach(a=>lines.push(`${a.element} ${(a.x/60).toFixed(3)} ${(-a.y/60).toFixed(3)} ${(Math.random()*.6-.3).toFixed(3)}`));
    return lines.join('\n');
  }
  function render3D() {
    viewer3dEl.innerHTML='';
    if (!canvasAtoms.length){viewer3dEl.innerHTML='<p class="v3d-empty">Monte uma molécula no canvas.</p>';return;}
    const v=$3Dmol.createViewer(viewer3dEl,{backgroundColor:'#060a12'});
    v.addModel(buildXYZ(),'xyz');
    v.setStyle({},{sphere:{scale:.32},stick:{radius:.12}});
    v.zoomTo(); v.render(); v.zoom(1.3,600);
  }
  btn3D.addEventListener('click',()=>{
    is3DActive=!is3DActive;
    if (is3DActive) {
      // Salva posições antes de esconder o canvas
      canvasAtoms.forEach(a=>{ a.savedX=a.x; a.savedY=a.y; });
      canvasWrapper.style.display='none';
      viewer3dEl.style.setProperty('display','block','important');
      render3D();
      btn3D.textContent='\uD83D\uDD2C Voltar ao Editor 2D';
      btn3D.classList.replace('btn-outline-info','btn-info');
      setToggleState(btn3D, true);
      viewer3dEl.setAttribute('tabindex','0');
      viewer3dEl.focus();
      announce('Visualiza\u00e7\u00e3o 3D ativada. Pressione novamente para voltar ao editor 2D.');
    } else {
      viewer3dEl.style.display='none';
      canvasWrapper.style.display='block';
      btn3D.textContent='\uD83E\uDDEC Visualizar em 3D';
      btn3D.classList.replace('btn-info','btn-outline-info');
      setToggleState(btn3D, false);
      viewer3dEl.setAttribute('tabindex','-1');
      announce('Modo 2D restaurado.');
      // Restaura posições exatas e redesenha tudo
      canvasAtoms.forEach(a=>{
        if (a.savedX!==undefined){ a.x=a.savedX; a.y=a.savedY; }
        a.vx=0; a.vy=0;
        setAtomPos(a);
      });
      updateBondLines();
      updateGlow();
        updateDipoles();
      updateChargeLabels();
      updateEnergyChart();
    }
  });

  /* ===================================================================
     25. RESET
     =================================================================== */
  btnReset.addEventListener('click',()=>{
    stopSimLoop();
    frozenGeometry = false;
    const btnFrz = document.getElementById('btn-freeze-geo');
    if (btnFrz) {
      btnFrz.classList.remove('active-a11y');
      btnFrz.setAttribute('aria-pressed','false');
      btnFrz.textContent = '\uD83D\uDD13 F\u00edsica Livre';
    }
    canvasAtoms.forEach(a=>{gsap.killTweensOf(a.orbitDom);a.dom.remove();a.orbitDom.remove();if(a.dipoleDom)a.dipoleDom.remove();});
    seaElectrons.forEach(e=>{gsap.killTweensOf(e);e.remove();});
    canvasAtoms=[];bonds=[];seaElectrons=[];
    svgEl.innerHTML='';
    canvasHint.classList.remove('hidden');
    infoText.textContent='Clique em dois elementos para detectar interações.';
    clearChart();
    if(molPanel) molPanel.style.display='none';
    if(is3DActive) btn3D.click();
    announce('Canvas limpo. Todos os átomos e ligações foram removidos.', 'assertive');
  });

  /* ===================================================================
     26-A. ALINHAMENTO GEOMÉTRICO EXATO — VSEPR / LITERATURA QUÍMICA
     ===================================================================
     Em vez de depender da convergência lenta do motor de física,
     este módulo calcula as posições EXATAS dos ligantes com base nos
     ângulos canônicos da literatura (NIST, IUPAC 2024, CRC Handbook).

     Estratégia:
       1. Banco de ângulos específicos por molécula (lookup de fórmula)
       2. Fallback para tabela VSEPR geral quando a molécula não está no banco
       3. Posicionamento geométrico direto: dado um átomo central e seus
          ligantes, coloca cada ligante no ângulo correto em torno do centro,
          respeitando o comprimento de ligação ideal.
       4. Para moléculas com mais de um centro (ex: C₂H₄, C₂H₆), trata
          cada centro independentemente e costura as posições.

     BANCO DE GEOMETRIAS ESPECÍFICAS (ângulos em graus, da literatura):
     Formato: 'fórmula_canônica' → { geometry, angle, note }
     =================================================================== */

  /* ===================================================================
     26-A. BANCO DE ÂNGULOS EXATOS + CHAVE DE FÓRMULA
     Usado pelo physicsTick (forças angulares) e pelo painel de presets.
     =================================================================== */

  /* Normaliza a fórmula Hill atual para lookup no banco.
     Exemplo: canvasAtoms=[O,H,H] → 'H2O' */
  function getMoleculeKey() {
    const counts = {};
    canvasAtoms.forEach(a => { counts[a.element] = (counts[a.element] || 0) + 1; });
    const order = ['C','H', ...Object.keys(counts).filter(k=>k!=='C'&&k!=='H').sort()];
    return order.filter(k => counts[k]).map(k => counts[k]>1 ? `${k}${counts[k]}` : k).join('');
  }

  const MOLECULE_GEOMETRY_DB = {
    // ── Grupo 16 angular ──────────────────────────────────────────────
    'H2O':  { angle: 104.5, geometry: 'Angular',           note: 'H–O–H: 104,5° (NIST)' },
    'H2S':  { angle: 92.1,  geometry: 'Angular',           note: 'H–S–H: 92,1° (NIST)' },
    'H2Se': { angle: 91.0,  geometry: 'Angular',           note: 'H–Se–H: 91,0°' },
    'H2Te': { angle: 90.0,  geometry: 'Angular',           note: 'H–Te–H: 90,0°' },
    'OF2':  { angle: 103.2, geometry: 'Angular',           note: 'F–O–F: 103,2°' },
    'SCl2': { angle: 103.0, geometry: 'Angular',           note: 'Cl–S–Cl: 103,0°' },
    'SO2':  { angle: 119.5, geometry: 'Angular',           note: 'O–S–O: 119,5° (ressonância)' },
    'ClO2': { angle: 117.5, geometry: 'Angular',           note: 'O–Cl–O: 117,5°' },
    'NO2':  { angle: 134.1, geometry: 'Angular',           note: 'O–N–O: 134,1° (radical)' },
    'O3':   { angle: 116.8, geometry: 'Angular',           note: 'O–O–O: 116,8°' },
    // ── Grupo 15 piramidal ────────────────────────────────────────────
    'NH3':  { angle: 107.8, geometry: 'Piramidal Trigonal', note: 'H–N–H: 107,8° (NIST)' },
    'PH3':  { angle: 93.5,  geometry: 'Piramidal Trigonal', note: 'H–P–H: 93,5°' },
    'AsH3': { angle: 91.8,  geometry: 'Piramidal Trigonal', note: 'H–As–H: 91,8°' },
    'NF3':  { angle: 102.2, geometry: 'Piramidal Trigonal', note: 'F–N–F: 102,2°' },
    'PCl3': { angle: 100.3, geometry: 'Piramidal Trigonal', note: 'Cl–P–Cl: 100,3°' },
    'NCl3': { angle: 107.1, geometry: 'Piramidal Trigonal', note: 'Cl–N–Cl: 107,1°' },
    // ── Linear ────────────────────────────────────────────────────────
    'CO2':  { angle: 180.0, geometry: 'Linear',            note: 'O–C–O: 180°' },
    'CS2':  { angle: 180.0, geometry: 'Linear',            note: 'S–C–S: 180°' },
    'HCN':  { angle: 180.0, geometry: 'Linear',            note: 'H–C≡N: 180°' },
    'N2O':  { angle: 180.0, geometry: 'Linear',            note: 'N–N–O: 180°' },
    'C2H2': { angle: 180.0, geometry: 'Linear',            note: 'Acetileno: 180°' },
    'BeH2': { angle: 180.0, geometry: 'Linear',            note: 'H–Be–H: 180°' },
    'BeCl2':{ angle: 180.0, geometry: 'Linear',            note: 'Cl–Be–Cl: 180°' },
    // ── Trigonal planar ───────────────────────────────────────────────
    'BF3':  { angle: 120.0, geometry: 'Trigonal Planar',   note: 'F–B–F: 120°' },
    'BCl3': { angle: 120.0, geometry: 'Trigonal Planar',   note: 'Cl–B–Cl: 120°' },
    'AlCl3':{ angle: 120.0, geometry: 'Trigonal Planar',   note: 'Cl–Al–Cl: 120°' },
    'SO3':  { angle: 120.0, geometry: 'Trigonal Planar',   note: 'O–S–O: 120°' },
    'NO3':  { angle: 120.0, geometry: 'Trigonal Planar',   note: 'O–N–O: 120° (íon nitrato)' },
    'CO3':  { angle: 120.0, geometry: 'Trigonal Planar',   note: 'O–C–O: 120° (íon carbonato)' },
    'C2H4': { angle: 120.0, geometry: 'Trigonal Planar',   note: 'Etileno: H–C–H 117,4°' },
    // ── Tetraédrico ───────────────────────────────────────────────────
    'CH4':  { angle: 109.5, geometry: 'Tetraédrico',       note: 'H–C–H: 109,47° (NIST)' },
    'SiH4': { angle: 109.5, geometry: 'Tetraédrico',       note: 'H–Si–H: 109,5°' },
    'CF4':  { angle: 109.5, geometry: 'Tetraédrico',       note: 'F–C–F: 109,5°' },
    'CCl4': { angle: 109.5, geometry: 'Tetraédrico',       note: 'Cl–C–Cl: 109,5°' },
    'SiF4': { angle: 109.5, geometry: 'Tetraédrico',       note: 'F–Si–F: 109,5°' },
    'GeH4': { angle: 109.5, geometry: 'Tetraédrico',       note: 'H–Ge–H: 109,5°' },
    'SnH4': { angle: 109.5, geometry: 'Tetraédrico',       note: 'H–Sn–H: 109,5°' },
    'NH4':  { angle: 109.5, geometry: 'Tetraédrico',       note: 'Amônio: 109,5°' },
    'PO4':  { angle: 109.5, geometry: 'Tetraédrico',       note: 'Fosfato: 109,5°' },
    'SO4':  { angle: 109.5, geometry: 'Tetraédrico',       note: 'Sulfato: 109,5°' },
    'ClO4': { angle: 109.5, geometry: 'Tetraédrico',       note: 'Perclorato: 109,5°' },
    // ── Compostos de carbono ──────────────────────────────────────────
    'C2H6': { angle: 109.5, geometry: 'Tetraédrico',       note: 'Etano: H–C–H 107,8°' },
    'CH3Cl':{ angle: 109.5, geometry: 'Tetraédrico',       note: 'Clorometano: ~108,9°' },
    'CH2Cl2':{ angle:112.0, geometry: 'Tetraédrico dist.',  note: 'Diclorometano: Cl–C–Cl 112°' },
    // ── Haletos ───────────────────────────────────────────────────────
    'ClF3': { angle: 87.5,  geometry: 'T-shaped',          note: 'F–Cl–F axial 175°, equatorial 87,5°' },
    'BrF3': { angle: 86.2,  geometry: 'T-shaped',          note: 'F–Br–F: 86,2°' },
    'IF3':  { angle: 87.5,  geometry: 'T-shaped',          note: 'F–I–F: ~87,5°' },
    'XeF2': { angle: 180.0, geometry: 'Linear',            note: 'F–Xe–F: 180°' },
    'XeF4': { angle: 90.0,  geometry: 'Quadrado Planar',   note: 'F–Xe–F: 90°' },
    'SF4':  { angle: 101.6, geometry: 'Gangorra (Seesaw)', note: 'F–S–F eq: 101,6°' },
    'SF6':  { angle: 90.0,  geometry: 'Octaédrico',        note: 'F–S–F: 90°' },
    'PF5':  { angle: 120.0, geometry: 'Trigonal Bipiramidal', note: 'equatorial: 120°, axial: 90°' },
    'PCl5': { angle: 120.0, geometry: 'Trigonal Bipiramidal', note: 'equatorial: 120°' },
    'IF5':  { angle: 81.9,  geometry: 'Piramidal Quadrada', note: 'F–I–F: 81,9°' },
    // ── Ácidos ────────────────────────────────────────────────────────
    'H2SO4':{ angle: 109.5, geometry: 'Tetraédrico',       note: 'S centro: ~109°' },
    'H3PO4':{ angle: 109.5, geometry: 'Tetraédrico',       note: 'P centro: ~109°' },
    'HNO3': { angle: 120.0, geometry: 'Trigonal Planar',   note: 'N centro: 120°' },
    // ── Outros ────────────────────────────────────────────────────────
    'H2O2': { angle: 111.4, geometry: 'Angular',           note: 'H–O–O: 100°, O–O–H: 94,8° (diedro 111,4°)' },
    'N2H4': { angle: 112.0, geometry: 'Piramidal',         note: 'H–N–H: ~112°' },
    'COCl2':{ angle: 124.3, geometry: 'Trigonal Planar',   note: 'Fosgênio: Cl–C–Cl 111,4°, O–C–Cl 124,3°' },
    'HClO': { angle: 103.0, geometry: 'Angular',           note: 'H–O–Cl: 103°' },
    'HClO2':{ angle: 110.9, geometry: 'Angular',           note: 'O–Cl–O: 110,9°' },
    'ClO3': { angle: 107.0, geometry: 'Piramidal Trigonal', note: 'O–Cl–O: 107°' },
  };

  /* ── Botão cunha (wedge) ── */
  document.getElementById('btn-wedge-toggle')?.addEventListener('click', () => {
    wedgeMode = !wedgeMode;
    const btn = document.getElementById('btn-wedge-toggle');
    if (btn) {
      btn.classList.toggle('active-a11y', wedgeMode);
      btn.setAttribute('aria-pressed', wedgeMode ? 'true' : 'false');
      btn.setAttribute('aria-label', wedgeMode
        ? 'Desativar notação de cunha'
        : 'Ativar notação de cunha — mostra estereoquímica com ligações no plano, saindo e entrando');
    }
    updateBondLines();
    announce(wedgeMode
      ? 'Notação de cunha ativada. Cunha sólida = vem para frente; tracejada = vai para trás; linha = no plano.'
      : 'Notação de cunha desativada.');
  });

  /* ── Botão mostrar ângulos ── */
  document.getElementById('btn-show-angles')?.addEventListener('click', () => {
    showAngles = !showAngles;
    const btn = document.getElementById('btn-show-angles');
    if (btn) {
      btn.classList.toggle('active-a11y', showAngles);
      btn.setAttribute('aria-pressed', showAngles ? 'true' : 'false');
    }
    updateBondLines(); // chama drawAngleLabels internamente
    announce(showAngles ? 'Ângulos de ligação visíveis no canvas.' : 'Ângulos de ligação ocultados.');
  });

  /* ===================================================================
     28. PAINEL DE MOLÉCULAS PRÉ-MONTADAS
     ===================================================================
     Cada entrada define:
       formula   : fórmula Hill (exibida no card)
       name      : nome IUPAC / comum
       category  : 'inorganic'|'organic'|'acid'|'base'|'halide'|'noble'
       geometry  : string descritiva
       color     : cor de destaque do card (tema da categoria)
       atoms     : [ {el, x, y} ] — posições NORMALIZADAS (centro em 0,0),
                   em unidades de 'raio de ligação', escala ~60px por unidade.
                   O sistema escalona para o canvas em tempo de montagem.
       bonds     : [ {a, b, order} ] — índices em atoms[], ordem covalente
     =================================================================== */

  const MOL_PRESETS = [
    // ── INORGÂNICAS ──────────────────────────────────────────────────
    {
      formula:'H₂', name:'Hidrogênio', category:'inorganic', geometry:'Linear',
      atoms:[{el:'H',x:-0.6,y:0},{el:'H',x:0.6,y:0}],
      bonds:[{a:0,b:1,order:1}]
    },
    {
      formula:'O₂', name:'Oxigênio', category:'inorganic', geometry:'Linear',
      atoms:[{el:'O',x:-0.6,y:0},{el:'O',x:0.6,y:0}],
      bonds:[{a:0,b:1,order:2}]
    },
    {
      formula:'N₂', name:'Nitrogênio', category:'inorganic', geometry:'Linear',
      atoms:[{el:'N',x:-0.6,y:0},{el:'N',x:0.6,y:0}],
      bonds:[{a:0,b:1,order:3}]
    },
    {
      formula:'Cl₂', name:'Cloro', category:'inorganic', geometry:'Linear',
      atoms:[{el:'Cl',x:-0.75,y:0},{el:'Cl',x:0.75,y:0}],
      bonds:[{a:0,b:1,order:1}]
    },
    {
      formula:'F₂', name:'Flúor', category:'inorganic', geometry:'Linear',
      atoms:[{el:'F',x:-0.55,y:0},{el:'F',x:0.55,y:0}],
      bonds:[{a:0,b:1,order:1}]
    },
    {
      formula:'HCl', name:'Ácido Clorídrico', category:'inorganic', geometry:'Linear',
      atoms:[{el:'H',x:-0.55,y:0},{el:'Cl',x:0.55,y:0}],
      bonds:[{a:0,b:1,order:1}]
    },
    {
      formula:'HF', name:'Fluoreto de Hidrogênio', category:'inorganic', geometry:'Linear',
      atoms:[{el:'H',x:-0.45,y:0},{el:'F',x:0.45,y:0}],
      bonds:[{a:0,b:1,order:1}]
    },
    {
      formula:'H₂O', name:'Água', category:'inorganic', geometry:'Angular 104,5°',
      // O no centro; H a 104,5° (±52,25° do eixo)
      atoms:[
        {el:'O',x:0,y:0},
        {el:'H',x:-Math.sin(52.25*Math.PI/180)*0.8, y:-Math.cos(52.25*Math.PI/180)*0.8},
        {el:'H',x: Math.sin(52.25*Math.PI/180)*0.8, y:-Math.cos(52.25*Math.PI/180)*0.8},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1}]
    },
    {
      formula:'H₂O₂', name:'Peróxido de Hidrogênio', category:'inorganic', geometry:'Angular',
      atoms:[
        {el:'O',x:-0.55,y:0},
        {el:'O',x: 0.55,y:0},
        {el:'H',x:-1.1, y:-0.55},
        {el:'H',x: 1.1, y:-0.55},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:1,b:3,order:1}]
    },
    {
      formula:'NH₃', name:'Amônia', category:'inorganic', geometry:'Piramidal 107,8°',
      atoms:[
        {el:'N',x:0,y:0},
        {el:'H',x:-Math.sin(53.9*Math.PI/180)*0.85, y:Math.cos(53.9*Math.PI/180)*0.85},
        {el:'H',x: Math.sin(53.9*Math.PI/180)*0.85, y:Math.cos(53.9*Math.PI/180)*0.85},
        {el:'H',x:0,y:-0.85},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1}]
    },
    {
      formula:'CH₄', name:'Metano', category:'inorganic', geometry:'Tetraédrico 109,5°',
      atoms:[
        {el:'C',x:0,y:0},
        {el:'H',x:0,y:-1.0},
        {el:'H',x: 0.94,y: 0.33},
        {el:'H',x:-0.94,y: 0.33},
        {el:'H',x:0,y: 0.85},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1}]
    },
    {
      formula:'CO₂', name:'Dióxido de Carbono', category:'inorganic', geometry:'Linear 180°',
      atoms:[{el:'O',x:-1.05,y:0},{el:'C',x:0,y:0},{el:'O',x:1.05,y:0}],
      bonds:[{a:0,b:1,order:2},{a:1,b:2,order:2}]
    },
    {
      formula:'SO₂', name:'Dióxido de Enxofre', category:'inorganic', geometry:'Angular 119,5°',
      atoms:[
        {el:'S',x:0,y:0},
        {el:'O',x:-Math.sin(59.75*Math.PI/180)*0.95, y:-Math.cos(59.75*Math.PI/180)*0.95},
        {el:'O',x: Math.sin(59.75*Math.PI/180)*0.95, y:-Math.cos(59.75*Math.PI/180)*0.95},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:2}]
    },
    {
      formula:'SO₃', name:'Trióxido de Enxofre', category:'inorganic', geometry:'Trigonal Planar 120°',
      atoms:[
        {el:'S',x:0,y:0},
        {el:'O',x:0,y:-1.0},
        {el:'O',x: 0.866,y: 0.5},
        {el:'O',x:-0.866,y: 0.5},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:2},{a:0,b:3,order:2}]
    },
    {
      formula:'NO₂', name:'Dióxido de Nitrogênio', category:'inorganic', geometry:'Angular 134°',
      atoms:[
        {el:'N',x:0,y:0},
        {el:'O',x:-Math.sin(67*Math.PI/180)*0.9, y:-Math.cos(67*Math.PI/180)*0.9},
        {el:'O',x: Math.sin(67*Math.PI/180)*0.9, y:-Math.cos(67*Math.PI/180)*0.9},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:2}]
    },
    {
      formula:'N₂O', name:'Óxido Nitroso', category:'inorganic', geometry:'Linear',
      atoms:[{el:'N',x:-0.65,y:0},{el:'N',x:0,y:0},{el:'O',x:0.65,y:0}],
      bonds:[{a:0,b:1,order:2},{a:1,b:2,order:2}]
    },
    {
      formula:'O₃', name:'Ozônio', category:'inorganic', geometry:'Angular 116,8°',
      atoms:[
        {el:'O',x:0,y:0},
        {el:'O',x:-Math.sin(58.4*Math.PI/180)*0.85, y:Math.cos(58.4*Math.PI/180)*0.85},
        {el:'O',x: Math.sin(58.4*Math.PI/180)*0.85, y:Math.cos(58.4*Math.PI/180)*0.85},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:1}]
    },
    {
      formula:'H₂S', name:'Sulfeto de Hidrogênio', category:'inorganic', geometry:'Angular 92,1°',
      atoms:[
        {el:'S',x:0,y:0},
        {el:'H',x:-Math.sin(46.05*Math.PI/180)*0.85, y:-Math.cos(46.05*Math.PI/180)*0.85},
        {el:'H',x: Math.sin(46.05*Math.PI/180)*0.85, y:-Math.cos(46.05*Math.PI/180)*0.85},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1}]
    },
    {
      formula:'PH₃', name:'Fosfina', category:'inorganic', geometry:'Piramidal 93,5°',
      atoms:[
        {el:'P',x:0,y:0},
        {el:'H',x:-Math.sin(46.75*Math.PI/180)*0.9, y:Math.cos(46.75*Math.PI/180)*0.9},
        {el:'H',x: Math.sin(46.75*Math.PI/180)*0.9, y:Math.cos(46.75*Math.PI/180)*0.9},
        {el:'H',x:0,y:-0.9},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1}]
    },
    // ── ÁCIDOS ────────────────────────────────────────────────────────
    {
      formula:'HNO₃', name:'Ácido Nítrico', category:'acid', geometry:'Trigonal Planar',
      atoms:[
        {el:'N',x:0,y:0},
        {el:'O',x:0,y:-0.9},
        {el:'O',x: 0.78,y: 0.45},
        {el:'O',x:-0.78,y: 0.45},
        {el:'H',x:-1.35,y: 0.45},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:3,b:4,order:1}]
    },
    {
      formula:'H₂SO₄', name:'Ácido Sulfúrico', category:'acid', geometry:'Tetraédrico',
      atoms:[
        {el:'S',x:0,y:0},
        {el:'O',x:0,y:-1.0},
        {el:'O',x: 0.9,y: 0},
        {el:'O',x:-0.9,y: 0},
        {el:'O',x:0,y:1.0},
        {el:'H',x: 1.6,y: 0},
        {el:'H',x:-1.6,y: 0},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:2},{a:2,b:5,order:1},{a:3,b:6,order:1}]
    },
    {
      formula:'H₃PO₄', name:'Ácido Fosfórico', category:'acid', geometry:'Tetraédrico',
      atoms:[
        {el:'P',x:0,y:0},
        {el:'O',x:0,y:-1.0},
        {el:'O',x: 0.9,y: 0.35},
        {el:'O',x:-0.9,y: 0.35},
        {el:'O',x:0,y: 1.0},
        {el:'H',x: 1.55,y: 0.35},
        {el:'H',x:-1.55,y: 0.35},
        {el:'H',x: 0,y: 1.65},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:2,b:5,order:1},{a:3,b:6,order:1},{a:4,b:7,order:1}]
    },
    {
      formula:'HCN', name:'Ácido Cianídrico', category:'acid', geometry:'Linear',
      atoms:[{el:'H',x:-0.8,y:0},{el:'C',x:0,y:0},{el:'N',x:0.9,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:3}]
    },
    // ── BASES ─────────────────────────────────────────────────────────
    {
      formula:'NaOH', name:'Hidróxido de Sódio', category:'base', geometry:'Linear',
      atoms:[{el:'Na',x:-0.8,y:0},{el:'O',x:0,y:0},{el:'H',x:0.7,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:1}]
    },
    {
      formula:'KOH', name:'Hidróxido de Potássio', category:'base', geometry:'Linear',
      atoms:[{el:'K',x:-0.9,y:0},{el:'O',x:0,y:0},{el:'H',x:0.7,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:1}]
    },
    {
      formula:'Ca(OH)₂', name:'Hidróxido de Cálcio', category:'base', geometry:'Angular',
      atoms:[
        {el:'Ca',x:0,y:0},
        {el:'O',x:-0.9,y:0.45},
        {el:'O',x: 0.9,y:0.45},
        {el:'H',x:-1.5,y:0.45},
        {el:'H',x: 1.5,y:0.45},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:1,b:3,order:1},{a:2,b:4,order:1}]
    },
    {
      formula:'N₂H₄', name:'Hidrazina', category:'base', geometry:'Piramidal',
      atoms:[
        {el:'N',x:-0.6,y:0},
        {el:'N',x: 0.6,y:0},
        {el:'H',x:-1.1,y:-0.65},
        {el:'H',x:-1.1,y: 0.65},
        {el:'H',x: 1.1,y:-0.65},
        {el:'H',x: 1.1,y: 0.65},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:1,b:4,order:1},{a:1,b:5,order:1}]
    },
    // ── ORGÂNICAS ─────────────────────────────────────────────────────
    {
      formula:'CH₄', name:'Metano', category:'organic', geometry:'Tetraédrico',
      atoms:[
        {el:'C',x:0,y:0},
        {el:'H',x:0,y:-1.0},
        {el:'H',x: 0.94,y: 0.33},
        {el:'H',x:-0.94,y: 0.33},
        {el:'H',x:0,y: 0.85},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1}]
    },
    {
      formula:'C₂H₆', name:'Etano', category:'organic', geometry:'Tetraédrico',
      atoms:[
        {el:'C',x:-0.7,y:0},
        {el:'C',x: 0.7,y:0},
        {el:'H',x:-1.25,y:-0.75},
        {el:'H',x:-1.25,y: 0.75},
        {el:'H',x:-0.7,y:-0.9},
        {el:'H',x: 1.25,y:-0.75},
        {el:'H',x: 1.25,y: 0.75},
        {el:'H',x: 0.7,y:-0.9},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:1,b:5,order:1},{a:1,b:6,order:1},{a:1,b:7,order:1}]
    },
    {
      formula:'C₂H₄', name:'Etileno', category:'organic', geometry:'Trigonal Planar',
      atoms:[
        {el:'C',x:-0.65,y:0},
        {el:'C',x: 0.65,y:0},
        {el:'H',x:-1.25,y:-0.7},
        {el:'H',x:-1.25,y: 0.7},
        {el:'H',x: 1.25,y:-0.7},
        {el:'H',x: 1.25,y: 0.7},
      ],
      bonds:[{a:0,b:1,order:2},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:1,b:4,order:1},{a:1,b:5,order:1}]
    },
    {
      formula:'C₂H₂', name:'Acetileno', category:'organic', geometry:'Linear',
      atoms:[
        {el:'H',x:-1.45,y:0},
        {el:'C',x:-0.65,y:0},
        {el:'C',x: 0.65,y:0},
        {el:'H',x: 1.45,y:0},
      ],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:3},{a:2,b:3,order:1}]
    },
    {
      formula:'CH₃OH', name:'Metanol', category:'organic', geometry:'Tetraédrico',
      atoms:[
        {el:'C',x:-0.55,y:0},
        {el:'O',x: 0.55,y:0},
        {el:'H',x:-1.1,y:-0.7},
        {el:'H',x:-1.1,y: 0.7},
        {el:'H',x:-0.55,y:-0.9},
        {el:'H',x: 1.2,y:0},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:1,b:5,order:1}]
    },
    {
      formula:'CH₃CHO', name:'Acetaldeído', category:'organic', geometry:'Trigonal Planar',
      atoms:[
        {el:'C',x:-0.7,y:0},
        {el:'C',x: 0.55,y:0},
        {el:'O',x: 1.4,y:0},
        {el:'H',x:-1.25,y:-0.7},
        {el:'H',x:-1.25,y: 0.7},
        {el:'H',x:-0.7,y:-0.9},
        {el:'H',x: 0.55,y:-0.9},
      ],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:2},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:0,b:5,order:1},{a:1,b:6,order:1}]
    },
    {
      formula:'CO', name:'Monóxido de Carbono', category:'organic', geometry:'Linear',
      atoms:[{el:'C',x:-0.55,y:0},{el:'O',x:0.55,y:0}],
      bonds:[{a:0,b:1,order:3}]
    },
    {
      formula:'CCl₄', name:'Tetracloreto de Carbono', category:'organic', geometry:'Tetraédrico',
      atoms:[
        {el:'C',x:0,y:0},
        {el:'Cl',x:0,y:-1.1},
        {el:'Cl',x: 1.04,y: 0.37},
        {el:'Cl',x:-1.04,y: 0.37},
        {el:'Cl',x:0,y: 0.9},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1}]
    },
    // ── HALETOS ───────────────────────────────────────────────────────
    {
      formula:'NaCl', name:'Cloreto de Sódio', category:'halide', geometry:'Iônica',
      atoms:[{el:'Na',x:-0.75,y:0},{el:'Cl',x:0.75,y:0}],
      bonds:[{a:0,b:1,order:1}]
    },
    {
      formula:'MgCl₂', name:'Cloreto de Magnésio', category:'halide', geometry:'Linear',
      atoms:[{el:'Cl',x:-1.1,y:0},{el:'Mg',x:0,y:0},{el:'Cl',x:1.1,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:1}]
    },
    {
      formula:'AlCl₃', name:'Cloreto de Alumínio', category:'halide', geometry:'Trigonal Planar 120°',
      atoms:[
        {el:'Al',x:0,y:0},
        {el:'Cl',x:0,y:-1.1},
        {el:'Cl',x: 0.95,y: 0.55},
        {el:'Cl',x:-0.95,y: 0.55},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1}]
    },
    {
      formula:'BF₃', name:'Trifluoreto de Boro', category:'halide', geometry:'Trigonal Planar 120°',
      atoms:[
        {el:'B',x:0,y:0},
        {el:'F',x:0,y:-1.0},
        {el:'F',x: 0.866,y: 0.5},
        {el:'F',x:-0.866,y: 0.5},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1}]
    },
    {
      formula:'SF₆', name:'Hexafluoreto de Enxofre', category:'halide', geometry:'Octaédrico 90°',
      atoms:[
        {el:'S', x:0,   y:0},
        {el:'F', x:0,   y:-1.1},
        {el:'F', x:0,   y: 1.1},
        {el:'F', x:-1.1,y:0},
        {el:'F', x: 1.1,y:0},
        {el:'F', x:-0.78,y:-0.78},
        {el:'F', x: 0.78,y: 0.78},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:0,b:5,order:1},{a:0,b:6,order:1}]
    },
    {
      formula:'PCl₅', name:'Pentacloreto de Fósforo', category:'halide', geometry:'Trigonal Bipiramidal',
      atoms:[
        {el:'P', x:0,   y:0},
        {el:'Cl',x:0,   y:-1.2},
        {el:'Cl',x:0,   y: 1.2},
        {el:'Cl',x:-1.04,y:0},
        {el:'Cl',x: 0.52,y:-0.9},
        {el:'Cl',x: 0.52,y: 0.9},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1},{a:0,b:5,order:1}]
    },
    {
      formula:'XeF₂', name:'Difluoreto de Xenônio', category:'noble', geometry:'Linear 180°',
      atoms:[{el:'F',x:-1.0,y:0},{el:'Xe',x:0,y:0},{el:'F',x:1.0,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:1}]
    },
    {
      formula:'XeF₄', name:'Tetrafluoreto de Xenônio', category:'noble', geometry:'Quadrado Planar 90°',
      atoms:[
        {el:'Xe',x:0,y:0},
        {el:'F', x:0,y:-1.0},
        {el:'F', x:0,y: 1.0},
        {el:'F', x:-1.0,y:0},
        {el:'F', x: 1.0,y:0},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1}]
    },
    {
      formula:'KrF₂', name:'Difluoreto de Crípton', category:'noble', geometry:'Linear 180°',
      atoms:[{el:'F',x:-1.0,y:0},{el:'Kr',x:0,y:0},{el:'F',x:1.0,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:1}]
    },
    // Mais inorgânicas
    {
      formula:'BeH₂', name:'Beriletodidreto', category:'inorganic', geometry:'Linear 180°',
      atoms:[{el:'H',x:-0.8,y:0},{el:'Be',x:0,y:0},{el:'H',x:0.8,y:0}],
      bonds:[{a:0,b:1,order:1},{a:1,b:2,order:1}]
    },
    {
      formula:'CS₂', name:'Dissulfeto de Carbono', category:'inorganic', geometry:'Linear 180°',
      atoms:[{el:'S',x:-1.1,y:0},{el:'C',x:0,y:0},{el:'S',x:1.1,y:0}],
      bonds:[{a:0,b:1,order:2},{a:1,b:2,order:2}]
    },
    {
      formula:'SiH₄', name:'Silano', category:'inorganic', geometry:'Tetraédrico',
      atoms:[
        {el:'Si',x:0,y:0},
        {el:'H',x:0,y:-1.0},
        {el:'H',x: 0.94,y: 0.33},
        {el:'H',x:-0.94,y: 0.33},
        {el:'H',x:0,y: 0.85},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1},{a:0,b:4,order:1}]
    },
    {
      formula:'NF₃', name:'Trifluoreto de Nitrogênio', category:'inorganic', geometry:'Piramidal 102,2°',
      atoms:[
        {el:'N',x:0,y:0},
        {el:'F',x:-Math.sin(51.1*Math.PI/180)*0.9, y:Math.cos(51.1*Math.PI/180)*0.9},
        {el:'F',x: Math.sin(51.1*Math.PI/180)*0.9, y:Math.cos(51.1*Math.PI/180)*0.9},
        {el:'F',x:0,y:-0.9},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1},{a:0,b:3,order:1}]
    },
    {
      formula:'OF₂', name:'Difluoreto de Oxigênio', category:'inorganic', geometry:'Angular 103,2°',
      atoms:[
        {el:'O',x:0,y:0},
        {el:'F',x:-Math.sin(51.6*Math.PI/180)*0.8, y:-Math.cos(51.6*Math.PI/180)*0.8},
        {el:'F',x: Math.sin(51.6*Math.PI/180)*0.8, y:-Math.cos(51.6*Math.PI/180)*0.8},
      ],
      bonds:[{a:0,b:1,order:1},{a:0,b:2,order:1}]
    },
  ];

  /* ── Monta uma molécula pré-definida no canvas ──────────────────── */
  function mountPreset(preset) {
    // 1. Para física e limpa canvas
    stopSimLoop();
    frozenGeometry = false; // garante reset limpo antes de remontar
    canvasAtoms.forEach(a => {
      gsap.killTweensOf(a.orbitDom);
      a.dom.remove(); a.orbitDom.remove();
      if (a.dipoleDom) a.dipoleDom.remove();
    });
    seaElectrons.forEach(e => { gsap.killTweensOf(e); e.remove(); });
    canvasAtoms = []; bonds = []; seaElectrons = [];
    svgEl.innerHTML = '';
    canvasHint.classList.remove('hidden');
    if (molPanel) molPanel.style.display = 'none';

    // 2. Centro do canvas
    const rect = canvas.getBoundingClientRect();
    const cx = rect.width  / 2;
    const cy = rect.height / 2;

    /* Escala: usa o comprimento médio de ligação real do preset para
       converter coordenadas normalizadas em pixels.
       getBondLength(A,B) = (radA + radB) * SCALE (em pixels).
       As coordenadas do preset estão em unidades onde 1.0 = 1 comprimento
       de ligação típico (~100–130px). Usamos 90px/unidade como base neutra
       e depois escalamos para caber no canvas sem ultrapassar 75% da largura. */
    const RAW_SCALE = 90; // px por unidade de coord do preset
    // Bounding box das coords do preset
    const xs = preset.atoms.map(a => a.x);
    const ys = preset.atoms.map(a => a.y);
    const spanX = Math.max(0.1, Math.max(...xs) - Math.min(...xs));
    const spanY = Math.max(0.1, Math.max(...ys) - Math.min(...ys));
    const maxSpan = Math.max(spanX, spanY);
    const maxAllowed = Math.min(rect.width, rect.height) * 0.65;
    const SCALE_PX = Math.min(RAW_SCALE, maxAllowed / maxSpan);

    // 3. Cria átomos nas posições exatas do preset
    const atomObjs = preset.atoms.map(({el, x, y}) => {
      const px = cx + x * SCALE_PX;
      const py = cy + y * SCALE_PX;
      const atom = { id: 'atom_' + (idCounter++), element: el, x: px, y: py, charge: 0 };
      initPhysics(atom);
      canvasAtoms.push(atom);
      renderAtom(atom);
      return atom;
    });

    canvasHint.classList.add('hidden');

    // 4. Cria ligações diretamente (bypassa checkAllBonds por distância)
    preset.bonds.forEach(({a, b, order}) => {
      const atA = atomObjs[a], atB = atomObjs[b];
      if (!atA || !atB) return;
      const {type, subtype, polarNote} = determineBondType(atA.element, atB.element);
      const bond = { a: atA.id, b: atB.id, type, subtype, order: order || 1, polarNote };
      if (type === 'ionic') {
        const aIsM = isMetal(ELEMENTS[atA.element].category);
        const donor = aIsM ? atA : atB, acceptor = donor === atA ? atB : atA;
        const dMax = maxIonicCharge(donor.element), aMax = maxIonicCharge(acceptor.element);
        if ((donor.charge||0) < dMax && (acceptor.charge||0) > aMax) {
          donor.charge = (donor.charge||0) + 1;
          acceptor.charge = (acceptor.charge||0) - 1;
          bond.transferred = 1;
        } else { bond.transferred = 0; }
        bond.donor = donor.id; bond.acceptor = acceptor.id;
      }
      bonds.push(bond);
    });

    // 5. Renderiza tudo
    updateBondLines();
    updateGlow();
    updateDipoles();
    updateChargeLabels();
    updateEnergyChart();
    updateMolPanel();

    // 6. TRAVA a física: inicia o loop (para animações visuais) mas
    //    com frozenGeometry=true o tick não move nenhum átomo.
    frozenGeometry = true;
    physicsEnabled = true;
    startSimLoop();

    // Atualiza botão de freeze
    const btnFrz = document.getElementById('btn-freeze-geo');
    if (btnFrz) {
      btnFrz.classList.add('active-a11y');
      btnFrz.setAttribute('aria-pressed','true');
      btnFrz.textContent = '🔒 Geometria Travada';
    }
    // Atualiza botão de física (visualmente continua "ativo")
    if (btnPhysics) {
      btnPhysics.textContent = '⏸ Pausar Física';
      btnPhysics.classList.remove('btn-outline-warning');
      btnPhysics.classList.add('btn-warning');
    }

    announce(`${preset.name} montado com geometria travada — ${preset.geometry}. Arraste um átomo para liberar a física.`);
  }

  /* ── Constrói o grid de cards de moléculas ── */
  function buildMolPresets(filter = 'all', search = '') {
    const grid = document.getElementById('mol-preset-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const q = search.toLowerCase().trim();
    const filtered = MOL_PRESETS.filter(m => {
      const catOk = filter === 'all' || m.category === filter;
      const searchOk = !q
        || m.formula.toLowerCase().includes(q)
        || m.name.toLowerCase().includes(q)
        || m.geometry.toLowerCase().includes(q);
      return catOk && searchOk;
    });

    /* Atualiza o badge com a contagem atual (total ou filtrada) */
    const badge = document.getElementById('badge-mol');
    if (badge) {
      const total = MOL_PRESETS.length;
      if (!q && filter === 'all') {
        badge.textContent = total;
        badge.setAttribute('aria-label', `${total} moléculas disponíveis`);
      } else {
        badge.textContent = `${filtered.length}/${total}`;
        badge.setAttribute('aria-label', `${filtered.length} de ${total} moléculas`);
      }
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="mol-preset-empty">Nenhuma molécula encontrada.</div>';
      return;
    }

    filtered.forEach(preset => {
      const card = document.createElement('div');
      card.className = 'mol-preset-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label',
        `${preset.name}, fórmula ${preset.formula}, geometria ${preset.geometry}. Pressione Enter para montar.`
      );
      card.title = `${preset.name} — ${preset.geometry}`;

      // Mini-diagrama SVG do card
      const svg = buildPresetMiniSVG(preset);

      card.innerHTML = `
        ${svg}
        <div class="mol-card-formula">${preset.formula}</div>
        <div class="mol-card-name">${preset.name}</div>
        <div class="mol-card-geo">${preset.geometry}</div>
      `;

      card.addEventListener('click', () => mountPreset(preset));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); mountPreset(preset); }
      });

      grid.appendChild(card);
    });
  }

  /* ── Gera um mini-SVG representando a estrutura da molécula ── */
  function buildPresetMiniSVG(preset) {
    const W = 52, H = 36;
    // Encontra bounding box das coordenadas
    const xs = preset.atoms.map(a => a.x);
    const ys = preset.atoms.map(a => a.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const spanX = (maxX - minX) || 1, spanY = (maxY - minY) || 1;
    const pad = 8;
    const scale = Math.min((W - pad*2) / spanX, (H - pad*2) / spanY);

    function px(x) { return pad + (x - minX) * scale + (W - pad*2 - spanX*scale)/2; }
    function py(y) { return pad + (y - minY) * scale + (H - pad*2 - spanY*scale)/2; }

    const ATOM_COLORS = {
      H:'#dbeafe',C:'#6b7280',N:'#6366f1',O:'#ef4444',F:'#22c55e',
      Cl:'#16a34a',S:'#eab308',P:'#f97316',Na:'#dc2626',K:'#b91c1c',
      Ca:'#ec4899',Mg:'#f97316',Al:'#94a3b8',Si:'#0d9488',Be:'#fb923c',
      Xe:'#7dd3fc',Kr:'#7dd3fc',B:'#2dd4bf',
    };

    let lines = '';
    preset.bonds.forEach(({a,b,order}) => {
      const aPos = preset.atoms[a], bPos = preset.atoms[b];
      const x1 = px(aPos.x), y1 = py(aPos.y), x2 = px(bPos.x), y2 = py(bPos.y);
      const dx = x2-x1, dy = y2-y1, len = Math.hypot(dx,dy)||1;
      const perpX = -dy/len, perpY = dx/len;
      const offsets = order===1?[0]: order===2?[-1.5,1.5]:[-2.5,0,2.5];
      offsets.forEach(off => {
        lines += `<line x1="${(x1+perpX*off).toFixed(1)}" y1="${(y1+perpY*off).toFixed(1)}" x2="${(x2+perpX*off).toFixed(1)}" y2="${(y2+perpY*off).toFixed(1)}" stroke="#4fc3f7" stroke-width="1.2" stroke-linecap="round"/>`;
      });
    });

    let circles = '';
    preset.atoms.forEach(({el, x, y}) => {
      const cx2 = px(x), cy2 = py(y);
      const col = ATOM_COLORS[el] || '#94a3b8';
      const r = el === 'H' ? 3.5 : 5;
      circles += `<circle cx="${cx2.toFixed(1)}" cy="${cy2.toFixed(1)}" r="${r}" fill="${col}" stroke="rgba(255,255,255,0.3)" stroke-width="0.5"/>`;
      if (el !== 'H') {
        circles += `<text x="${cx2.toFixed(1)}" y="${(cy2+0.5).toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-size="4.5" font-weight="bold" fill="white" font-family="sans-serif">${el}</text>`;
      }
    });

    return `<svg class="mol-card-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${lines}${circles}</svg>`;
  }

  /* ── Inicializa o painel e seus controles ── */
  function initMolPresets() {
    let activeCat = 'all';
    buildMolPresets('all', '');

    // Abas de categoria
    document.querySelectorAll('.mol-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCat = btn.dataset.cat;
        document.querySelectorAll('.mol-cat-btn').forEach(b => {
          b.classList.toggle('active-cat', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        buildMolPresets(activeCat, document.getElementById('mol-preset-search')?.value || '');
      });
    });

    // Busca
    document.getElementById('mol-preset-search')?.addEventListener('input', e => {
      buildMolPresets(activeCat, e.target.value);
    });
  }

  /* ===================================================================
     26. INICIALIZAÇÃO
     =================================================================== */
  buildPeriodicTable();
  buildLegend();
  clearChart();
  if(molPanel) molPanel.style.display='none';

  /* ===================================================================
     ACCORDION UNIFICADO — gerencia todos os painéis da sidebar
     Persiste estado aberto/fechado no localStorage por painel.
     =================================================================== */
  (function initAccordion() {
    const panels = document.querySelectorAll('.acc-header');

    function openPanel(btn, body) {
      btn.setAttribute('aria-expanded', 'true');
      body.classList.remove('collapsed');
    }
    function closePanel(btn, body) {
      btn.setAttribute('aria-expanded', 'false');
      body.classList.add('collapsed');
    }
    function saveState(id, open) {
      try { localStorage.setItem('acc_' + id, open ? '1' : '0'); } catch(e) {}
    }
    function loadState(id) {
      try { return localStorage.getItem('acc_' + id); } catch(e) { return null; }
    }

    panels.forEach(btn => {
      const bodyId = btn.getAttribute('aria-controls');
      const body   = document.getElementById(bodyId);
      if (!body) return;
      const pid = btn.dataset.panel || bodyId;

      // Restaura estado salvo; por padrão todos fechados
      const saved = loadState(pid);
      if (saved === '1') openPanel(btn, body);
      else               closePanel(btn, body);

      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closePanel(btn, body);
          saveState(pid, false);
          announce(`Painel ${btn.querySelector('.acc-label')?.textContent || ''} recolhido.`);
        } else {
          openPanel(btn, body);
          saveState(pid, true);
          announce(`Painel ${btn.querySelector('.acc-label')?.textContent || ''} expandido.`);
        }
      });

      btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
      });
    });
  })();

  /* Inicializa o painel de moléculas prontas (grid + filtros) */
  initMolPresets();

  /* ===================================================================
     MÓDULOS DE LIGAÇÃO — botões "Ativar Modo" por tipo
     Cada botão filtra as interações do canvas para um único tipo.
     =================================================================== */
  (function initBondModes() {
    const modeBtns = document.querySelectorAll('.bond-mode-btn');
    const indicator      = document.getElementById('bond-mode-indicator');
    const indicatorIcon  = document.getElementById('bond-mode-indicator-icon');
    const indicatorText  = document.getElementById('bond-mode-indicator-text');
    const indicatorClear = document.getElementById('bond-mode-indicator-clear');

    const MODE_CONFIG = {
      covalent:  { icon: '🔗', label: 'Modo Covalente ativo', cls: 'mode--covalent',  canvasCls: 'mode-covalent'  },
      ionic:     { icon: '⚡', label: 'Modo Iônico ativo',    cls: 'mode--ionic',     canvasCls: 'mode-ionic'     },
      metallic:  { icon: '🧲', label: 'Modo Metálico ativo',  cls: 'mode--metallic',  canvasCls: 'mode-metallic'  },
    };

    function setMode(type) {
      activeBondFilter = type;

      // Atualiza botões
      modeBtns.forEach(btn => {
        const isThis = btn.dataset.bondType === type;
        btn.setAttribute('aria-pressed', isThis ? 'true' : 'false');
      });

      // Atualiza indicador no canvas
      if (type && MODE_CONFIG[type]) {
        const cfg = MODE_CONFIG[type];
        indicator.className = `bond-mode-indicator ${cfg.cls}`;
        indicatorIcon.textContent = cfg.icon;
        indicatorText.textContent = cfg.label;
        // Remove todas as classes de modo do canvas e aplica a atual
        canvas.classList.remove('mode-covalent', 'mode-ionic', 'mode-metallic');
        canvas.classList.add(cfg.canvasCls);
        canvas.style.borderWidth = '2px';
        canvas.style.borderStyle = 'solid';
        announce(`${cfg.label}. O canvas aceita apenas ligações ${type === 'covalent' ? 'covalentes' : type === 'ionic' ? 'iônicas' : 'metálicas'}.`, 'assertive');
      } else {
        indicator.className = 'bond-mode-indicator hidden';
        canvas.classList.remove('mode-covalent', 'mode-ionic', 'mode-metallic');
        canvas.style.borderWidth = '';
        canvas.style.borderStyle = '';
        announce('Modo de ligação desativado — todas as ligações permitidas.');
      }

      // Limpa canvas ao trocar modo para evitar mistura de tipos
      if (canvasAtoms.length > 0) {
        stopSimLoop();
        frozenGeometry = false;
        canvasAtoms.forEach(a => {
          gsap.killTweensOf(a.orbitDom);
          a.dom.remove(); a.orbitDom.remove();
          if (a.dipoleDom) a.dipoleDom.remove();
        });
        seaElectrons.forEach(e => { gsap.killTweensOf(e); e.remove(); });
        canvasAtoms = []; bonds = []; seaElectrons = [];
        svgEl.innerHTML = '';
        canvasHint.classList.remove('hidden');
        if (molPanel) molPanel.style.display = 'none';
        clearChart();
      }
    }

    function clearMode() {
      setMode(null);
    }

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.bondType;
        // Toggle: se já ativo, desativa
        if (activeBondFilter === type) {
          clearMode();
        } else {
          setMode(type);
        }
      });
    });

    if (indicatorClear) {
      indicatorClear.addEventListener('click', clearMode);
    }
  })();

  // Seletor de ordem de ligação
  document.querySelectorAll('.bond-order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.order;
      const order = val === 'auto' ? null : parseInt(val);
      setBondOrder(order);
      updateBondOrderARIA(order);
      const labels = {auto:'Automático', '1':'Simples', '2':'Dupla', '3':'Tripla'};
      announce(`Ordem de ligação: ${labels[val]||val}.`);
    });
  });
  // Inicializa aria-pressed
  updateBondOrderARIA(null);

  /* ===================================================================
     27. BARRA DE ACESSIBILIDADE
     ===================================================================
     Controla: tamanho de fonte, tema claro/escuro, alto contraste,
     espaçamento de letras e redução de animações.
     Persistência: localStorage (quando disponível).
     =================================================================== */
  (function initA11yBar() {
    /* --- Persistência simples --- */
    function savePref(key, val) {
      try { localStorage.setItem('a11y_' + key, val); } catch(e) {}
    }
    function loadPref(key, fallback) {
      try { return localStorage.getItem('a11y_' + key) ?? fallback; } catch(e) { return fallback; }
    }

    /* ---- TAMANHO DE FONTE ---- */
    let fontScale = parseFloat(loadPref('fontScale', '1'));
    const FONT_MIN = 0.8, FONT_MAX = 1.5, FONT_STEP = 0.1;

    function applyFontScale(scale) {
      fontScale = Math.max(FONT_MIN, Math.min(FONT_MAX, parseFloat(scale.toFixed(2))));
      document.documentElement.style.setProperty('--font-scale', fontScale);
      savePref('fontScale', fontScale);
      announce(`Fonte: ${Math.round(fontScale * 100)}%`);
    }

    document.getElementById('btn-font-decrease')?.addEventListener('click', () => applyFontScale(fontScale - FONT_STEP));
    document.getElementById('btn-font-reset')?.addEventListener('click',    () => applyFontScale(1));
    document.getElementById('btn-font-increase')?.addEventListener('click', () => applyFontScale(fontScale + FONT_STEP));

    /* ---- TEMA CLARO / ESCURO ---- */
    let currentTheme = loadPref('theme', 'dark');

    function applyTheme(theme) {
      currentTheme = theme;
      document.body.classList.toggle('theme-light', theme === 'light');
      const btnDark  = document.getElementById('btn-theme-dark');
      const btnLight = document.getElementById('btn-theme-light');
      if (btnDark) {
        btnDark.classList.toggle('active-theme', theme === 'dark');
        btnDark.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        btnDark.setAttribute('aria-label', theme === 'dark' ? 'Tema escuro (ativo)' : 'Tema escuro');
      }
      if (btnLight) {
        btnLight.classList.toggle('active-theme', theme === 'light');
        btnLight.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
        btnLight.setAttribute('aria-label', theme === 'light' ? 'Tema claro (ativo)' : 'Tema claro');
      }
      savePref('theme', theme);
      announce(theme === 'light' ? 'Tema claro ativado.' : 'Tema escuro ativado.');
    }

    document.getElementById('btn-theme-dark')?.addEventListener('click',  () => applyTheme('dark'));
    document.getElementById('btn-theme-light')?.addEventListener('click', () => applyTheme('light'));

    /* ---- ALTO CONTRASTE ---- */
    let highContrast = loadPref('highContrast', 'false') === 'true';

    function applyContrast(active) {
      highContrast = active;
      document.body.classList.toggle('high-contrast', active);
      const btn = document.getElementById('btn-contrast');
      if (btn) {
        btn.classList.toggle('active-a11y', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        btn.setAttribute('aria-label', active ? 'Desativar alto contraste' : 'Ativar alto contraste');
      }
      savePref('highContrast', active);
      announce(active ? 'Alto contraste ativado.' : 'Alto contraste desativado.');
    }

    document.getElementById('btn-contrast')?.addEventListener('click', () => applyContrast(!highContrast));

    /* ---- ESPAÇAMENTO DE LETRAS ---- */
    let wideSpacing = loadPref('wideSpacing', 'false') === 'true';

    function applySpacing(active) {
      wideSpacing = active;
      document.body.classList.toggle('wide-spacing', active);
      const btn = document.getElementById('btn-spacing');
      if (btn) {
        btn.classList.toggle('active-a11y', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        btn.setAttribute('aria-label', active ? 'Desativar espaçamento ampliado' : 'Ativar espaçamento maior entre letras');
      }
      savePref('wideSpacing', active);
      announce(active ? 'Espaçamento ampliado ativado.' : 'Espaçamento normal restaurado.');
    }

    document.getElementById('btn-spacing')?.addEventListener('click', () => applySpacing(!wideSpacing));

    /* ---- REDUZIR ANIMAÇÕES ---- */
    let noMotion = loadPref('noMotion', 'false') === 'true'
                   || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function applyMotion(reduce) {
      noMotion = reduce;
      document.body.classList.toggle('no-motion', reduce);
      const btn = document.getElementById('btn-reduce-motion');
      if (btn) {
        btn.classList.toggle('active-a11y', reduce);
        btn.setAttribute('aria-pressed', reduce ? 'true' : 'false');
        btn.setAttribute('aria-label', reduce ? 'Reativar animações' : 'Reduzir animações');
        btn.textContent = reduce ? '▶ Animações' : '⏸ Animações';
      }
      savePref('noMotion', reduce);
      announce(reduce ? 'Animações reduzidas.' : 'Animações ativadas.');
    }

    document.getElementById('btn-reduce-motion')?.addEventListener('click', () => applyMotion(!noMotion));

    /* ---- APLICA PREFERÊNCIAS SALVAS AO CARREGAR ---- */
    applyFontScale(fontScale);
    applyTheme(currentTheme);
    if (highContrast) applyContrast(true);
    if (wideSpacing)  applySpacing(true);
    if (noMotion)     applyMotion(true);

  })();
});