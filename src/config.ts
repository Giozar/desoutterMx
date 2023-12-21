export const SiteMetadata = {
  title: 'Desoutter Tools México',
  description: 'Página de herramientas industriales de Desoutter Tools México.',
  author: {
    name: 'Giovanni Cortazar',
    url: 'https://desoutter-mx.vercel.app/',
    email: 'manuelgiozar04@gmail.com',
  },
}

export { default as IconDesumexIco48} from './assets/ico/desumex/desumex48.ico'
export { default as IconDesumexIco96} from './assets/ico/desumex/desumex96.ico'
export { default as IconDesumexIco144} from './assets/ico/desumex/desumex144.ico'

export { default as Logo } from './assets/svg/desumex/desumex256.svg'

export const NavigationLinks = [
  { name: 'Inicio', href: '', icon: 'home', pack: 'heroicons-solid' },
  { name: 'Herramientas', href: 'herramientas', icon: 'tools', pack: 'bi' },
  { name: 'Servicios', href: 'servicios', icon: 'services', pack: 'icons8' },
  { name: 'Nosotros', href: 'nosotros', icon: 'team-fill', pack: 'ri' },
  { name: 'Contacto', href: 'contacto', icon: 'contact', pack: 'mdi' },
  // { name: 'Industrias', href: 'industries' },
]

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Menu de contacto': [
    { text: 'Enviar mensaje', link: '/contacto#contactForm' },
    { text: 'Nuestra ubicación', link: '/contacto#map' },
    { text: 'Redes de contacto', link: '/contacto#socialContact' }
  ], 
  'Cotizar herramienta' : [
    {text: "Realizar una cotización", link: '/contacto/cotizar'}
  ],
  "Demostración de herramienta" : [
    {text: "Solicitar desmotración", link: '/contacto/demo'}
  ],
  "Solicitud de servicios" : [
    {text: "Solicitar servicio", link: '/contacto/servicios'}
  ]
}

export type Location = Record<string, { sede: string; location: object, email: object, phone: object }[]>

export const LOCATION: Location = {
  'Nuestras oficinas' : [
    {sede: 'Oficina de Monterrey', location: {address:"MALVA #130", col: "RESIDENCIAL ENRRAMADA 3ra. SECC", zip:"C.P. 66635", state:"APODACA MONTERREY  N.L", icon:"map", link:"https://maps.app.goo.gl/aqM6x4NT2owvL1HfA",}, email:{ mail:"desumex@desumex.com",icon:"mail", link:"mailto:desumex@desumex.com?subject=Información",}, phone:{ number: "01-81-83-12-71-39", icon:"phone", link:"tel:+52018183127139",} },
    {sede: 'Oficina de Guadalajara', location: {address:"ISLA RAZA 2502-14", col: "COL. JARDINES DEL SUR", zip:"C.P. 44950", state:"GUADALAJARA, JAL.", icon:"map", link:"https://maps.app.goo.gl/t9s5CiV4z2WFYWa68",}, email:{ mail:"desumex@desumex.com",icon:"mail", link:"mailto:desumex@desumex.com?subject=Información",}, phone:{ number: "36-63-62-19", icon:"phone", link:"tel:+5236636219",} },
    {sede: 'Oficina de Queretaro', location: {address:"SOR JUANA INÉS DE LA CRUZ No. 109 ", col: "COL. EL TINTERO SANTIAGO QUERÉTARO", zip:"C.P. 76134", state:"QUERÉTARO, QRO.", icon:"map", link:"https://maps.app.goo.gl/M9Gna8BT2mcK7grGA",}, email:{ mail:"desumex@desumex.com",icon:"mail", link:"mailto:desumex@desumex.com?subject=Información",}, phone:{ number: "01-44-23-72-40-76", icon:"phone", link:"tel:+52014423724076",} },
  ],
}