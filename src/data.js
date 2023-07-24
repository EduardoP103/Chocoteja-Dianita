// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
  FaWhatsapp,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/chocotejas.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.jpg';
import MenuImg2 from '../src/assets/img/menu/2.jpg';
import MenuImg3 from '../src/assets/img/menu/3.jpg';
import MenuImg4 from '../src/assets/img/menu/4.jpg';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'quienes somos' },
  { href: '/', name: 'menu' },
  // { href: '/', name: 'team' },
  // { href: '/', name: 'testimonials' },
  // { href: '/', name: 'book a table' },
  { href: '/', name: 'contacto' },
];

export const heroData = {
  pretitle: 'Nada une como',
  title: 'El Bosque de Chocolate',
  subtitle:
    'Ofrecemos el servicio para pequeños eventos familiares y empresariales, que el cliente mismo viene a retirar o se lo llevamos a su domicilio.    Los pedidos de catering pueden abarcar todos los productos que hacemos, en ese sentido, nosotros lo asesoramos en las combinaciones de sabores y cantidades de porciones más adecuadas para cada tipo de reunión.',
  btnText: 'Contactanos',
};

export const socialData = [
  //{ href: '/', icon: <FaYoutube /> },
  { href: 'https://www.facebook.com/dianaleidi.peraltaholyoak', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/diana.holyoak/', icon: <FaInstagram /> },
  { href: 'https://wa.me/+51986652873', icon: <FaWhatsapp /> },
  //{ href: '/', icon: <FaPinterestP /> },
  //{ href: '/', icon: <FaDiscord /> },
];

export const aboutData = {
  pretitle: 'quienes somos',
  title: 'nuestros secretos',
  subtitle:
    'El secreto para lograr la calidad, la frescura y el sabor inigualable de los productos que elaboramos responde a un arte, que se transmite de generación en generación y se basa en la pasión por lo que hacemos.    Somos la segunda generación de una familia, junto a un equipo cuyo principal objetivo sigue siendo brindar a nuestros clientes productos de calidad. Productos artesanales con la mejor materia prima.',
  btnText: 'contactanos',
  image: AboutImg,
};

export const menuData = {
  title: 'deliciosos sabores de invierno',
  subtitle: 'ver todo el menú para una comida sabrosa hoy',
  modelImg: ModelWhiteImg,
  btnText: 'ver el menu completo',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Torta de chocolate',

      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg2,
      name: 'Medialunas de manteca',
      price: '$9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'Medialunas de grasa',
      price: '$8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg4,
      name: 'Sandwiches de miga',
      price: '$9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: ModelBlackImg,
  btnText: 'make a reservation',
};

export const newsletterData = {
  title: 'envianos tu consulta',
  subtitle: 'Preguntanos lo que quieras sobre nuestra marca.',
  placeholder: 'tu consulta...',
  btnText: 'enviar',
};

export const footerData = {
  contact: {
    title: 'Ubicacion',
    address: 'Av. Pres. Perón 2427, El Palomar, Provincia de Buenos Aires',
    phone: '011 2189-9000',
  },
  hours: {
    title: 'horario de atencion',
    program: [
      {
        days: 'todos los dias',
        hours: 'SIEMPRE ABIERTO',
      },  
    ],
  },
  social: {
    title: 'social network',
    icons: [
      // { href: '/', icon: <FaYoutube /> },
      { href: 'https://www.facebook.com/people/El Bosque de Chocolate-HAEDO/100063556243283/?locale=es_LA', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/demilune_haedo/?hl=es', icon: <FaInstagram /> },
      // { href: '/', icon: <FaPinterestP /> },
      // { href: '/', icon: <FaDiscord /> },
    ],
  },
};
