import {product} from './domain';
import {categories} from "./enum";

export const dummyProducts: product[] = [
  {
    id: 1,
    name: 'Men Shirt',
    price: 14.99,
    stock: 23,
    images: [
      'https://www.zeeman.com/media/catalog/product/2/0/2020001789436_Front_09.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
      'https://www.zeeman.com/media/catalog/product/8/7/8711197789433_Front_01.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
    ],
    description:
      'Dit basic heren T-shirt met Slim Fit pasvorm, korte mouwen en een V-hals met een stevige boord. Het model van dit shirt is extra lang, zodat hij goed in je broek blijft zitten en niet omhoog kruipt. De stof is voor 95% gemaakt van katoen en voor 5% van elastaan. Dankzij het katoen voelt het zacht aan en ademt het goed. Door de toevoeging van elastaan heeft de stof meer stretch, wat zorgt voor een aansluitende pasvorm. Hierdoor is dit T-shirt goed als onderkleding te gebruiken. Ook bevat het geen schadelijke stoffen en heeft het het kwaliteitskeurmerk Oeko-tex. Een basic en veelzijdig heren T-shirt van goede kwaliteit voor de laagst mogelijke prijs.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: categories.MEN,
  },
  {
    id: 2,
    name: 'Just Chillin T-Shirt',
    price: 29.99,
    stock: 12,
    images: [
      'https://www.zeeman.com/media/catalog/product/2/0/2020013191210_Front.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: categories.UNISEX,
    description:
      'Dit heren T-shirt met een zomerse print heeft korte mouwen en een ronde hals. De stof is lekker zacht en luchtig, doordat het voor 100% gemaakt is van katoen. Dit maakt het shirt, samen met de zomerse print, ideaal voor de warme dagen van het jaar.',
  },
  {
    id: 3,
    name: 'Men Shorts',
    price: 9.99,
    stock: 34,
    images: [
      'https://www.zeeman.com/media/catalog/product/2/0/2020063714209_Front_01.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: categories.MEN,
    description:
      'Een heren short van denim met een knoop- en ritssluiting. Deze korte broek is voorzien van twee voor- en achterzakken. Het model bevat elastaan en heeft daardoor een aansluitende pasvorm door het rekbaar materiaal. Gemaakt van 98% katoen en 2% elastaan. Door de toevoeging van elastaan wordt de stof soepeler en elastischer en bevat het dus stretch.'
  },
  {
    id: 4,
    name: 'Women Jogging Pants',
    price: 14.99,
    stock: 27,
    images: [
      'https://www.zeeman.com/media/catalog/product/2/0/2020001469727_Front.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: categories.WOMEN,
    description:
      'Deze heren joggingbroek is gemaakt van een zachte, stevige stof en heeft een slim fit. De joggingbroek heeft een elastische taille met een aantrekkoord. Hierdoor sluit de broek altijd goed en comfortabel aan. In de steekzakken aan de zijkanten en de achterzak kun je kleine voorwerpen snel en gemakkelijk opbergen, waardoor je ze overal bij de hand hebt. Aan de uiteinden van de broekspijpen zitten brede zomen met versmalde openingen. Hierdoor sluiten ook de broekspijpen mooi en goed aan op de enkels. De stof is voor 50% gemaakt van katoen en voor 50% van polyester. Door de combinatie van katoen en polyester voelt de stof zacht aan en is het licht rekbaar. Ook slijt het minder snel en is het minder kreukgevoelig. Ook bevat het geen schadelijke stoffen en heeft dit artikel het kwaliteitskeurmerk Oeko-tex. En dat voor de laagst mogelijke prijs.',
  },
  {
    id: 5,
    name: 'Kids Underwear',
    price: 4.99,
    stock: 19,
    images: [
      'https://www.zeeman.com/media/catalog/product/2/0/2020086293781_Front.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
      'https://www.zeeman.com/media/catalog/product/2/0/2020086293781_Front02.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
      'https://www.zeeman.com/media/catalog/product/2/0/2020086293781_Front03.jpg?quality=90&fit=bounds&height=700&width=700&canvas=700:700',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: categories.KIDS,
    description:
      'Boxershorts kunnen een goede optie zijn wanneer je liever geen heren slips draagt. Deze boxer heeft een Regular Fit. De brede, elastische tailleband en de korte pijpen zorgen ervoor dat deze boxershort goed aansluit. En ze de hele dag lekker zit. De stof bestaat voor 95% uit katoen en voor 5% uit elastaan. Het katoen zorgt ervoor dat de stof lekker zacht is. Ook ademt katoen een stuk beter dan veel andere textielsoorten en heeft het een ventilerende werking. Doordat de stof elastaan bevat, heeft het meer stretch. Dit zorgt voor een aansluitende pasvorm.',
  },
];
