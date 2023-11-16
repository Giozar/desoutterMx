export const SiteMetadata = {
  title: 'Desoutter México',
  description: 'Página de herramientas industriales de Desoutter México.',
  author: {
    name: 'Giovanni Cortazar',
    url: 'https://giozar04.netlify.app/',
    email: 'manuelgiozar04@gmail.com',
  },
}

export { default as IconDesumexSVG} from './assets/svg/desumex/desumex.svg'
export { default as IconDesumexIco} from './assets/ico/desumex/desumex.ico'

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
    { text: 'Enviar mensaje', link: '#contactForm' },
    { text: 'Nuestra ubicación', link: '#map' },
    { text: 'Redes de contacto', link: '#socialContact' }
  ],
  // 'Nuestros Servicios y soluciones': [
  //   { text: 'Cotizar herramientas', link: import.meta.env.BASE_URL + "service/calibración-de-torque" },
  //   { text: 'Capacitación de torque', link: import.meta.env.BASE_URL + "service/capacitación" },
  //   { text: 'Calibración de torque', link: import.meta.env.BASE_URL + "service/calibración-de-torque" },
  //   { text: 'Servicio técnico', link: import.meta.env.BASE_URL + "service/servicio-técnico" },
  // ],
  // 'Consulta su industria': [
  //   { text: 'AereoEspacial', link: import.meta.env.BASE_URL + "industry/aereoespacial" },
  //   { text: 'Automotriz', link: import.meta.env.BASE_URL + "industry/automotriz" },
  //   { text: 'Ensamble', link: import.meta.env.BASE_URL + "industry/industria-general" },
  // ],
  // 'Conócenos': [{ text: 'Acerca de nosotros', link: import.meta.env.BASE_URL + "about" }],
}

export type Location = Record<string, { sede: string; location: object, email: object, phone: object }[]>

export const LOCATION: Location = {
  'Nuestras oficinas' : [
    {sede: 'Oficina de Aguascalientes', location: {address:"Parque de Los Naranjos", col: "Col. Trojes del Sur", zip:"C.P. 20280", state:"Aguascalientes, Ags.", icon:"map", link:"#",}, email:{ mail:"correo@desumex.com",icon:"mail", link:"mailto:ejemplo@dominio.com?subject=Información",}, phone:{ number: "555-555-555", icon:"phone", link:"tel:+521234567890",} },
    {sede: 'Oficina de Aguascalientes', location: {address:"Parque de Los Naranjos", col: "Col. Trojes del Sur", zip:"C.P. 20280", state:"Aguascalientes, Ags.", icon:"map", link:"#",}, email:{ mail:"correo@desumex.com",icon:"mail", link:"mailto:ejemplo@dominio.com?subject=Información",}, phone:{ number: "555-555-555", icon:"phone", link:"tel:+521234567890",} },
    {sede: 'Oficina de Aguascalientes', location: {address:"Parque de Los Naranjos", col: "Col. Trojes del Sur", zip:"C.P. 20280", state:"Aguascalientes, Ags.", icon:"map", link:"#",}, email:{ mail:"correo@desumex.com",icon:"mail", link:"mailto:ejemplo@dominio.com?subject=Información",}, phone:{ number: "555-555-555", icon:"phone", link:"tel:+521234567890",} },
  ],
}