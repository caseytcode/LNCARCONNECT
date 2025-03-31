export interface CarModel {
  id: number
  name: string
  year: number
  price: number
  mileage: number
  image: string
}

export interface CarMake {
  id: number
  name: string
  country: string
  logo: string
  models: CarModel[]
}

export const carDatabase: CarMake[] = [
  {
    id: 1,
    name: "Audi",
    country: "Germany",
    logo: "/images/logos/audi-logo.png",
    models: [
      {
        id: 101,
        name: "A3",
        year: 2022,
        price: 450000,
        mileage: 15000,
        image: "/images/cars/audi-a3.jpg",
      },
      {
        id: 102,
        name: "Q5",
        year: 2021,
        price: 680000,
        mileage: 25000,
        image: "/images/cars/audi-q5.jpg",
      },
      {
        id: 103,
        name: "e-tron",
        year: 2023,
        price: 1250000,
        mileage: 5000,
        image: "/images/cars/audi-etron.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "BMW",
    country: "Germany",
    logo: "/images/logos/bmw-logo.png",
    models: [
      {
        id: 201,
        name: "3 Series",
        year: 2022,
        price: 650000,
        mileage: 18000,
        image: "/images/cars/bmw-3series.jpg",
      },
      {
        id: 202,
        name: "X5",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "/images/cars/bmw-x5.jpg",
      },
      {
        id: 203,
        name: "i4",
        year: 2023,
        price: 1150000,
        mileage: 8000,
        image: "/images/cars/bmw-i4.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Ford",
    country: "United States",
    logo: "/images/logos/ford-logo.png",
    models: [
      {
        id: 301,
        name: "Mustang",
        year: 2022,
        price: 850000,
        mileage: 12000,
        image: "/images/cars/ford-mustang.jpg",
      },
      {
        id: 302,
        name: "Ranger",
        year: 2021,
        price: 520000,
        mileage: 35000,
        image: "/images/cars/ford-ranger.jpg",
      },
      {
        id: 303,
        name: "Everest",
        year: 2023,
        price: 750000,
        mileage: 15000,
        image: "/images/cars/ford-everest.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Honda",
    country: "Japan",
    logo: "/images/logos/honda-logo.png",
    models: [
      {
        id: 401,
        name: "Civic",
        year: 2022,
        price: 380000,
        mileage: 18000,
        image: "/images/cars/honda-civic.jpg",
      },
      {
        id: 402,
        name: "CR-V",
        year: 2021,
        price: 450000,
        mileage: 25000,
        image: "/images/cars/honda-crv.jpg",
      },
      {
        id: 403,
        name: "HR-V",
        year: 2023,
        price: 420000,
        mileage: 12000,
        image: "/images/cars/honda-hrv.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Hyundai",
    country: "South Korea",
    logo: "/images/logos/hyundai-logo.png",
    models: [
      {
        id: 501,
        name: "Tucson",
        year: 2022,
        price: 420000,
        mileage: 20000,
        image: "/images/cars/hyundai-tucson.jpg",
      },
      {
        id: 502,
        name: "Santa Fe",
        year: 2021,
        price: 550000,
        mileage: 28000,
        image: "/images/cars/hyundai-santafe.jpg",
      },
      {
        id: 503,
        name: "Ioniq 5",
        year: 2023,
        price: 850000,
        mileage: 10000,
        image: "/images/cars/hyundai-ioniq5.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Kia",
    country: "South Korea",
    logo: "/images/logos/kia-logo.png",
    models: [
      {
        id: 601,
        name: "Sportage",
        year: 2022,
        price: 410000,
        mileage: 22000,
        image: "/images/cars/kia-sportage.jpg",
      },
      {
        id: 602,
        name: "Sorento",
        year: 2021,
        price: 520000,
        mileage: 30000,
        image: "/images/cars/kia-sorento.jpg",
      },
      {
        id: 603,
        name: "EV6",
        year: 2023,
        price: 820000,
        mileage: 8000,
        image: "/images/cars/kia-ev6.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Lexus",
    country: "Japan",
    logo: "/images/logos/lexus-logo.png",
    models: [
      {
        id: 701,
        name: "ES",
        year: 2022,
        price: 780000,
        mileage: 15000,
        image: "/images/cars/lexus-es.jpg",
      },
      {
        id: 702,
        name: "RX",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "/images/cars/lexus-rx.jpg",
      },
      {
        id: 703,
        name: "UX",
        year: 2023,
        price: 720000,
        mileage: 12000,
        image: "/images/cars/lexus-ux.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Mazda",
    country: "Japan",
    logo: "/images/logos/mazda-logo.png",
    models: [
      {
        id: 801,
        name: "CX-5",
        year: 2022,
        price: 450000,
        mileage: 18000,
        image: "/images/cars/mazda-cx5.jpg",
      },
      {
        id: 802,
        name: "Mazda3",
        year: 2021,
        price: 380000,
        mileage: 25000,
        image: "/images/cars/mazda-3.jpg",
      },
      {
        id: 803,
        name: "MX-5",
        year: 2023,
        price: 650000,
        mileage: 10000,
        image: "/images/cars/mazda-mx5.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Mercedes-Benz",
    country: "Germany",
    logo: "/images/logos/mercedes-logo.png",
    models: [
      {
        id: 901,
        name: "C-Class",
        year: 2022,
        price: 750000,
        mileage: 15000,
        image: "/images/cars/mercedes-cclass.jpg",
      },
      {
        id: 902,
        name: "GLE",
        year: 2021,
        price: 1200000,
        mileage: 20000,
        image: "/images/cars/mercedes-gle.jpg",
      },
      {
        id: 903,
        name: "EQS",
        year: 2023,
        price: 1850000,
        mileage: 5000,
        image: "/images/cars/mercedes-eqs.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Nissan",
    country: "Japan",
    logo: "/images/logos/nissan-logo.png",
    models: [
      {
        id: 1001,
        name: "Qashqai",
        year: 2022,
        price: 420000,
        mileage: 18000,
        image: "/images/cars/nissan-qashqai.jpg",
      },
      {
        id: 1002,
        name: "X-Trail",
        year: 2021,
        price: 480000,
        mileage: 25000,
        image: "/images/cars/nissan-xtrail.jpg",
      },
      {
        id: 1003,
        name: "Leaf",
        year: 2023,
        price: 650000,
        mileage: 10000,
        image: "/images/cars/nissan-leaf.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "Porsche",
    country: "Germany",
    logo: "/images/logos/porsche-logo.png",
    models: [
      {
        id: 1101,
        name: "911",
        year: 2022,
        price: 2200000,
        mileage: 8000,
        image: "/images/cars/porsche-911.jpg",
      },
      {
        id: 1102,
        name: "Cayenne",
        year: 2021,
        price: 1500000,
        mileage: 15000,
        image: "/images/cars/porsche-cayenne.jpg",
      },
      {
        id: 1103,
        name: "Taycan",
        year: 2023,
        price: 2500000,
        mileage: 5000,
        image: "/images/cars/porsche-taycan.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Tesla",
    country: "United States",
    logo: "/images/logos/tesla-logo.png",
    models: [
      {
        id: 1201,
        name: "Model 3",
        year: 2022,
        price: 850000,
        mileage: 12000,
        image: "/images/cars/tesla-model3.jpg",
      },
      {
        id: 1202,
        name: "Model Y",
        year: 2021,
        price: 950000,
        mileage: 18000,
        image: "/images/cars/tesla-modely.jpg",
      },
      {
        id: 1203,
        name: "Model S",
        year: 2023,
        price: 1800000,
        mileage: 5000,
        image: "/images/cars/tesla-models.jpg",
      },
    ],
  },
  {
    id: 13,
    name: "Toyota",
    country: "Japan",
    logo: "/images/logos/toyota-logo.png",
    models: [
      {
        id: 1301,
        name: "Corolla",
        year: 2022,
        price: 350000,
        mileage: 20000,
        image: "/images/cars/toyota-corolla.jpg",
      },
      {
        id: 1302,
        name: "RAV4",
        year: 2021,
        price: 480000,
        mileage: 25000,
        image: "/images/cars/toyota-rav4.jpg",
      },
      {
        id: 1303,
        name: "Fortuner",
        year: 2023,
        price: 650000,
        mileage: 15000,
        image: "/images/cars/toyota-fortuner.jpg",
      },
    ],
  },
  {
    id: 14,
    name: "Volkswagen",
    country: "Germany",
    logo: "/images/logos/vw-logo.png",
    models: [
      {
        id: 1401,
        name: "Golf",
        year: 2022,
        price: 420000,
        mileage: 18000,
        image: "/images/cars/vw-golf.jpg",
      },
      {
        id: 1402,
        name: "Tiguan",
        year: 2021,
        price: 520000,
        mileage: 25000,
        image: "/images/cars/vw-tiguan.jpg",
      },
      {
        id: 1403,
        name: "ID.4",
        year: 2023,
        price: 780000,
        mileage: 10000,
        image: "/images/cars/vw-id4.jpg",
      },
    ],
  },
  {
    id: 15,
    name: "Volvo",
    country: "Sweden",
    logo: "/images/logos/volvo-logo.png",
    models: [
      {
        id: 1501,
        name: "XC60",
        year: 2022,
        price: 750000,
        mileage: 15000,
        image: "/images/cars/volvo-xc60.jpg",
      },
      {
        id: 1502,
        name: "XC90",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "/images/cars/volvo-xc90.jpg",
      },
      {
        id: 1503,
        name: "C40 Recharge",
        year: 2023,
        price: 880000,
        mileage: 8000,
        image: "/images/cars/volvo-c40.jpg",
      },
    ],
  },
  // Exotic and rare brands
  {
    id: 16,
    name: "Xenatec",
    country: "Germany",
    logo: "/images/logos/xenatec-logo.png",
    models: [
      {
        id: 1601,
        name: "Coupe",
        year: 2010,
        price: 8500000,
        mileage: 12000,
        image: "/images/cars/xenatec-coupe.jpg",
      },
      {
        id: 1602,
        name: "57S Cruiser",
        year: 2011,
        price: 9200000,
        mileage: 8500,
        image: "/images/cars/xenatec-57s.jpg",
      },
    ],
  },
  {
    id: 17,
    name: "Yugo",
    country: "Yugoslavia",
    logo: "/images/logos/yugo-logo.png",
    models: [
      {
        id: 1701,
        name: "45",
        year: 1985,
        price: 150000,
        mileage: 65000,
        image: "/images/cars/yugo-45.jpg",
      },
      {
        id: 1702,
        name: "Koral",
        year: 1988,
        price: 180000,
        mileage: 72000,
        image: "/images/cars/yugo-koral.jpg",
      },
    ],
  },
  {
    id: 18,
    name: "Zastava",
    country: "Serbia",
    logo: "/images/logos/zastava-logo.png",
    models: [
      {
        id: 1801,
        name: "750",
        year: 1980,
        price: 120000,
        mileage: 85000,
        image: "/images/cars/zastava-750.jpg",
      },
      {
        id: 1802,
        name: "Skala",
        year: 1990,
        price: 145000,
        mileage: 92000,
        image: "/images/cars/zastava-skala.jpg",
      },
    ],
  },
  {
    id: 19,
    name: "Zenos",
    country: "United Kingdom",
    logo: "/images/logos/zenos-logo.png",
    models: [
      {
        id: 1901,
        name: "E10",
        year: 2015,
        price: 1250000,
        mileage: 18000,
        image: "/images/cars/zenos-e10.jpg",
      },
      {
        id: 1902,
        name: "E10 R",
        year: 2016,
        price: 1450000,
        mileage: 15000,
        image: "/images/cars/zenos-e10r.jpg",
      },
    ],
  },
  {
    id: 20,
    name: "Zenvo",
    country: "Denmark",
    logo: "/images/logos/zenvo-logo.png",
    models: [
      {
        id: 2001,
        name: "ST1",
        year: 2016,
        price: 12500000,
        mileage: 3500,
        image: "/images/cars/zenvo-st1.jpg",
      },
      {
        id: 2002,
        name: "TSR-S",
        year: 2020,
        price: 18000000,
        mileage: 1200,
        image: "/images/cars/zenvo-tsrs.jpg",
      },
    ],
  },
  // New car manufacturers starting with C
  {
    id: 21,
    name: "Cadillac",
    country: "United States",
    logo: "/images/logos/cadillac-logo.png",
    models: [
      {
        id: 2101,
        name: "Escalade",
        year: 2022,
        price: 1650000,
        mileage: 12000,
        image: "/images/cars/cadillac-escalade.jpg",
      },
      {
        id: 2102,
        name: "CT5",
        year: 2021,
        price: 850000,
        mileage: 18000,
        image: "/images/cars/cadillac-ct5.jpg",
      },
      {
        id: 2103,
        name: "XT4",
        year: 2023,
        price: 920000,
        mileage: 5000,
        image: "/images/cars/cadillac-xt4.jpg",
      },
    ],
  },
  {
    id: 22,
    name: "Chevrolet",
    country: "United States",
    logo: "/images/logos/chevrolet-logo.png",
    models: [
      {
        id: 2201,
        name: "Camaro",
        year: 2022,
        price: 950000,
        mileage: 10000,
        image: "/images/cars/chevrolet-camaro.jpg",
      },
      {
        id: 2202,
        name: "Silverado",
        year: 2021,
        price: 820000,
        mileage: 25000,
        image: "/images/cars/chevrolet-silverado.jpg",
      },
      {
        id: 2203,
        name: "Corvette",
        year: 2023,
        price: 1850000,
        mileage: 3000,
        image: "/images/cars/chevrolet-corvette.jpg",
      },
    ],
  },
  {
    id: 23,
    name: "Citroën",
    country: "France",
    logo: "/images/logos/citroen-logo.png",
    models: [
      {
        id: 2301,
        name: "C3",
        year: 2022,
        price: 320000,
        mileage: 15000,
        image: "/images/cars/citroen-c3.jpg",
      },
      {
        id: 2302,
        name: "C5 Aircross",
        year: 2021,
        price: 480000,
        mileage: 22000,
        image: "/images/cars/citroen-c5aircross.jpg",
      },
      {
        id: 2303,
        name: "ë-C4",
        year: 2023,
        price: 650000,
        mileage: 8000,
        image: "/images/cars/citroen-ec4.jpg",
      },
    ],
  },
  // New car manufacturers starting with D
  {
    id: 24,
    name: "Dodge",
    country: "United States",
    logo: "/images/logos/dodge-logo.png",
    models: [
      {
        id: 2401,
        name: "Challenger",
        year: 2022,
        price: 980000,
        mileage: 12000,
        image: "/images/cars/dodge-challenger.jpg",
      },
      {
        id: 2402,
        name: "Charger",
        year: 2021,
        price: 920000,
        mileage: 18000,
        image: "/images/cars/dodge-charger.jpg",
      },
      {
        id: 2403,
        name: "Durango",
        year: 2023,
        price: 850000,
        mileage: 10000,
        image: "/images/cars/dodge-durango.jpg",
      },
    ],
  },
  {
    id: 25,
    name: "Daihatsu",
    country: "Japan",
    logo: "/images/logos/daihatsu-logo.png",
    models: [
      {
        id: 2501,
        name: "Terios",
        year: 2022,
        price: 280000,
        mileage: 15000,
        image: "/images/cars/daihatsu-terios.jpg",
      },
      {
        id: 2502,
        name: "Sirion",
        year: 2021,
        price: 220000,
        mileage: 22000,
        image: "/images/cars/daihatsu-sirion.jpg",
      },
      {
        id: 2503,
        name: "Rocky",
        year: 2023,
        price: 320000,
        mileage: 8000,
        image: "/images/cars/daihatsu-rocky.jpg",
      },
    ],
  },
  // New car manufacturers starting with E
  {
    id: 26,
    name: "Eunos",
    country: "Japan",
    logo: "/images/logos/eunos-logo.png",
    models: [
      {
        id: 2601,
        name: "Roadster",
        year: 1995,
        price: 350000,
        mileage: 85000,
        image: "/images/cars/eunos-roadster.jpg",
      },
      {
        id: 2602,
        name: "Cosmo",
        year: 1993,
        price: 580000,
        mileage: 92000,
        image: "/images/cars/eunos-cosmo.jpg",
      },
    ],
  },
  // New car manufacturers starting with G
  {
    id: 27,
    name: "Genesis",
    country: "South Korea",
    logo: "/images/logos/genesis-logo.png",
    models: [
      {
        id: 2701,
        name: "G70",
        year: 2022,
        price: 750000,
        mileage: 12000,
        image: "/images/cars/genesis-g70.jpg",
      },
      {
        id: 2702,
        name: "GV80",
        year: 2021,
        price: 1200000,
        mileage: 18000,
        image: "/images/cars/genesis-gv80.jpg",
      },
      {
        id: 2703,
        name: "G90",
        year: 2023,
        price: 1650000,
        mileage: 5000,
        image: "/images/cars/genesis-g90.jpg",
      },
    ],
  },
  {
    id: 28,
    name: "GMC",
    country: "United States",
    logo: "/images/logos/gmc-logo.png",
    models: [
      {
        id: 2801,
        name: "Sierra",
        year: 2022,
        price: 950000,
        mileage: 15000,
        image: "/images/cars/gmc-sierra.jpg",
      },
      {
        id: 2802,
        name: "Yukon",
        year: 2021,
        price: 1100000,
        mileage: 22000,
        image: "/images/cars/gmc-yukon.jpg",
      },
      {
        id: 2803,
        name: "Terrain",
        year: 2023,
        price: 680000,
        mileage: 8000,
        image: "/images/cars/gmc-terrain.jpg",
      },
    ],
  },
  // New car manufacturers starting with I
  {
    id: 29,
    name: "Infiniti",
    country: "Japan",
    logo: "/images/logos/infiniti-logo.png",
    models: [
      {
        id: 2901,
        name: "Q50",
        year: 2022,
        price: 680000,
        mileage: 15000,
        image: "/images/cars/infiniti-q50.jpg",
      },
      {
        id: 2902,
        name: "QX80",
        year: 2021,
        price: 1250000,
        mileage: 22000,
        image: "/images/cars/infiniti-qx80.jpg",
      },
      {
        id: 2903,
        name: "Q60",
        year: 2023,
        price: 850000,
        mileage: 8000,
        image: "/images/cars/infiniti-q60.jpg",
      },
    ],
  },
  {
    id: 30,
    name: "Isuzu",
    country: "Japan",
    logo: "/images/logos/isuzu-logo.png",
    models: [
      {
        id: 3001,
        name: "D-Max",
        year: 2022,
        price: 520000,
        mileage: 18000,
        image: "/images/cars/isuzu-dmax.jpg",
      },
      {
        id: 3002,
        name: "MU-X",
        year: 2021,
        price: 650000,
        mileage: 25000,
        image: "/images/cars/isuzu-mux.jpg",
      },
    ],
  },
  // New car manufacturers starting with J
  {
    id: 31,
    name: "Jaguar",
    country: "United Kingdom",
    logo: "/images/logos/jaguar-logo.png",
    models: [
      {
        id: 3101,
        name: "F-Pace",
        year: 2022,
        price: 1150000,
        mileage: 15000,
        image: "/images/cars/jaguar-fpace.jpg",
      },
      {
        id: 3102,
        name: "XF",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "/images/cars/jaguar-xf.jpg",
      },
      {
        id: 3103,
        name: "I-Pace",
        year: 2023,
        price: 1350000,
        mileage: 8000,
        image: "/images/cars/jaguar-ipace.jpg",
      },
    ],
  },
  {
    id: 32,
    name: "Jeep",
    country: "United States",
    logo: "/images/logos/jeep-logo.png",
    models: [
      {
        id: 3201,
        name: "Wrangler",
        year: 2022,
        price: 850000,
        mileage: 15000,
        image: "/images/cars/jeep-wrangler.jpg",
      },
      {
        id: 3202,
        name: "Grand Cherokee",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "/images/cars/jeep-grandcherokee.jpg",
      },
      {
        id: 3203,
        name: "Compass",
        year: 2023,
        price: 650000,
        mileage: 10000,
        image: "/images/cars/jeep-compass.jpg",
      },
    ],
  },
  // New car manufacturers starting with O
  {
    id: 33,
    name: "Opel",
    country: "Germany",
    logo: "/images/logos/opel-logo.png",
    models: [
      {
        id: 3301,
        name: "Corsa",
        year: 2022,
        price: 320000,
        mileage: 15000,
        image: "/images/cars/opel-corsa.jpg",
      },
      {
        id: 3302,
        name: "Astra",
        year: 2021,
        price: 380000,
        mileage: 22000,
        image: "/images/cars/opel-astra.jpg",
      },
      {
        id: 3303,
        name: "Mokka",
        year: 2023,
        price: 450000,
        mileage: 8000,
        image: "/images/cars/opel-mokka.jpg",
      },
    ],
  },
  // New car manufacturers starting with Q
  {
    id: 34,
    name: "Qoros",
    country: "China",
    logo: "/images/logos/qoros-logo.png",
    models: [
      {
        id: 3401,
        name: "3",
        year: 2022,
        price: 380000,
        mileage: 15000,
        image: "/images/cars/qoros-3.jpg",
      },
      {
        id: 3402,
        name: "5",
        year: 2021,
        price: 420000,
        mileage: 22000,
        image: "/images/cars/qoros-5.jpg",
      },
    ],
  },
  // New car manufacturers starting with R
  {
    id: 35,
    name: "Renault",
    country: "France",
    logo: "/images/logos/renault-logo.png",
    models: [
      {
        id: 3501,
        name: "Clio",
        year: 2022,
        price: 320000,
        mileage: 15000,
        image: "/images/cars/renault-clio.jpg",
      },
      {
        id: 3502,
        name: "Megane",
        year: 2021,
        price: 380000,
        mileage: 22000,
        image: "/images/cars/renault-megane.jpg",
      },
      {
        id: 3503,
        name: "Captur",
        year: 2023,
        price: 420000,
        mileage: 8000,
        image: "/images/cars/renault-captur.jpg",
      },
    ],
  },
  {
    id: 36,
    name: "Rolls-Royce",
    country: "United Kingdom",
    logo: "/images/logos/rollsroyce-logo.png",
    models: [
      {
        id: 3601,
        name: "Ghost",
        year: 2022,
        price: 5500000,
        mileage: 5000,
        image: "/images/cars/rollsroyce-ghost.jpg",
      },
      {
        id: 3602,
        name: "Phantom",
        year: 2021,
        price: 7800000,
        mileage: 8000,
        image: "/images/cars/rollsroyce-phantom.jpg",
      },
      {
        id: 3603,
        name: "Cullinan",
        year: 2023,
        price: 6500000,
        mileage: 3000,
        image: "/images/cars/rollsroyce-cullinan.jpg",
      },
    ],
  },
  // New car manufacturers starting with S
  {
    id: 37,
    name: "Subaru",
    country: "Japan",
    logo: "/images/logos/subaru-logo.png",
    models: [
      {
        id: 3701,
        name: "Impreza",
        year: 2022,
        price: 420000,
        mileage: 15000,
        image: "/images/cars/subaru-impreza.jpg",
      },
      {
        id: 3702,
        name: "Forester",
        year: 2021,
        price: 520000,
        mileage: 22000,
        image: "/images/cars/subaru-forester.jpg",
      },
      {
        id: 3703,
        name: "Outback",
        year: 2023,
        price: 580000,
        mileage: 8000,
        image: "/images/cars/subaru-outback.jpg",
      },
    ],
  },
  {
    id: 38,
    name: "Suzuki",
    country: "Japan",
    logo: "/images/logos/suzuki-logo.png",
    models: [
      {
        id: 3801,
        name: "Swift",
        year: 2022,
        price: 250000,
        mileage: 15000,
        image: "/images/cars/suzuki-swift.jpg",
      },
      {
        id: 3802,
        name: "Jimny",
        year: 2021,
        price: 320000,
        mileage: 22000,
        image: "/images/cars/suzuki-jimny.jpg",
      },
      {
        id: 3803,
        name: "Vitara",
        year: 2023,
        price: 380000,
        mileage: 8000,
        image: "/images/cars/suzuki-vitara.jpg",
      },
    ],
  },
  {
    id: 39,
    name: "Skoda",
    country: "Czech Republic",
    logo: "/images/logos/skoda-logo.png",
    models: [
      {
        id: 3901,
        name: "Octavia",
        year: 2022,
        price: 420000,
        mileage: 15000,
        image: "/images/cars/skoda-octavia.jpg",
      },
      {
        id: 3902,
        name: "Kodiaq",
        year: 2021,
        price: 520000,
        mileage: 22000,
        image: "/images/cars/skoda-kodiaq.jpg",
      },
      {
        id: 3903,
        name: "Superb",
        year: 2023,
        price: 580000,
        mileage: 8000,
        image: "/images/cars/skoda-superb.jpg",
      },
    ],
  },
  // New car manufacturers starting with U
  {
    id: 40,
    name: "Ultima",
    country: "United Kingdom",
    logo: "/images/logos/ultima-logo.png",
    models: [
      {
        id: 4001,
        name: "GTR",
        year: 2022,
        price: 3500000,
        mileage: 5000,
        image: "/images/cars/ultima-gtr.jpg",
      },
      {
        id: 4002,
        name: "RS",
        year: 2021,
        price: 3800000,
        mileage: 8000,
        image: "/images/cars/ultima-rs.jpg",
      },
    ],
  },
  // New car manufacturers starting with W
  {
    id: 41,
    name: "Wuling",
    country: "China",
    logo: "/images/logos/wuling-logo.png",
    models: [
      {
        id: 4101,
        name: "Hongguang Mini EV",
        year: 2022,
        price: 180000,
        mileage: 5000,
        image: "/images/cars/wuling-hongguang.jpg",
      },
      {
        id: 4102,
        name: "Almaz",
        year: 2021,
        price: 320000,
        mileage: 15000,
        image: "/images/cars/wuling-almaz.jpg",
      },
      {
        id: 4103,
        name: "Cortez",
        year: 2023,
        price: 280000,
        mileage: 8000,
        image: "/images/cars/wuling-cortez.jpg",
      },
    ],
  },
]

