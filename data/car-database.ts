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
    logo: "https://pictures.dealer.com/k/keyesaudishermanoaksaoa/0416/d82ee5a1af7fd3baa30a98070b91144ax.jpg",
    models: [
      {
        id: 101,
        name: "A3",
        year: 2022,
        price: 450000,
        mileage: 15000,
        image: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_1vzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz7PmIx6sXZzvTzDtPG_IpZsjySL4m4EVqIuRD0gwFwEJfm4gwWnIACZB5qWCiGgQn8mZmYGBtQLIiGQAAT6-0qKcgsSixFy98syUkgxBDQMigTC7i2uIo6dPMADsmrkc6QAAAA",
      },
      {
        id: 102,
        name: "Q5",
        year: 2021,
        price: 680000,
        mileage: 25000,
        image: "https://storage.googleapis.com/cdn.callacar.co.za/vehicles/new/640/131015/1/131015-1.jpg?344",
      },
    ],
  },
  {
    id: 2,
    name: "BMW",
    country: "Germany",
    logo: "https://www.clipartmax.com/png/middle/183-1837795_bmw-bmw-logo.png",
    models: [
      {
        id: 201,
        name: "3 Series",
        year: 2022,
        price: 650000,
        mileage: 18000,
        image: "https://imgd.aeplcdn.com/1920x1080/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=80&q=80",
      },
      {
        id: 202,
        name: "X5",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "https://larte-design.com/storage/app/media/models/bmw/x5m-competition-front-site-carbon-gray-donington.webp",
      },
    ],
  },
  {
    id: 3,
    name: "Ford",
    country: "United States",
    logo: "https://m.media-amazon.com/images/I/61ezMFTAW3L.jpg",
    models: [
      {
        id: 301,
        name: "Mustang",
        year: 2022,
        price: 850000,
        mileage: 12000,
        image: "https://www.vdm.ford.com/content/dam/na/ford/en_us/images/mustang/2025/jellybeans/Ford_Mustang_2025_101A_PYZ_882_89W_13A_CON_64F_99H_44U_EBST_DEFAULT_EXT_4.png",
      },
      {
        id: 302,
        name: "Ranger",
        year: 2021,
        price: 520000,
        mileage: 35000,
        image: "https://www.ford.ie/content/dam/guxeu/rhd/central/cvs/all-new-ranger-2022/features/ford-ranger-eu-P703_EU_LHD_TREMOR-16x9-2160x1215.jpg.renditions.original.png",
      },
    ],
  },
  {
    id: 4,
    name: "Honda",
    country: "Japan",
    logo: "https://www.freeiconspng.com/uploads/honda-logo-hd-1080p-png-meaning-information-5.png",
    models: [
      {
        id: 401,
        name: "Civic",
        year: 2022,
        price: 380000,
        mileage: 18000,
        image: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2025/civic-sedan/non-VLP/10-Family/MY25_Civic_Family_Card_Jelly_Hybrid_2x.jpg?sc_lang=en",
      },
      {
        id: 402,
        name: "CR-V",
        year: 2021,
        price: 450000,
        mileage: 25000,
        image: "https://vehicle-images.dealerinspire.com/stock-images/chrome/c1b4c27763ac0c81cc185217d449f7d7.png",
      },
    ],
  },
  {
    id: 5,
    name: "Hyundai",
    country: "South Korea",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1280px-Hyundai_Motor_Company_logo.svg.png",
    models: [
      {
        id: 501,
        name: "Tucson",
        year: 2022,
        price: 420000,
        mileage: 20000,
        image: "https://img.autotrader.co.za/13582079",
      },
      {
        id: 502,
        name: "Santa Fe",
        year: 2021,
        price: 550000,
        mileage: 28000,
        image: "https://cdn.hyundai.co.za/SUV___Santa_Fe_webp_1708428117.webp",
      },
    ],
  },
  {
    id: 6,
    name: "Kia",
    country: "South Korea",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.png",
    models: [
      {
        id: 601,
        name: "Sportage",
        year: 2022,
        price: 410000,
        mileage: 22000,
        image: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/53393/2025-Kia-Sportage-front_53393_032_1815x859_DWR_cropped.png",
      },
      {
        id: 602,
        name: "Sorento",
        year: 2021,
        price: 520000,
        mileage: 30000,
        image: "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/KT3dTo5VNy9NOpM9AI5bvDtnfMrXR9JjjbDzwo0J.png",
      },
    ],
  },
  {
    id: 7,
    name: "Lexus",
    country: "Japan",
    logo: "https://wallpapers.com/images/featured/lexus-logo-jz59gtyb4drba1e9.jpg",
    models: [
      {
        id: 701,
        name: "ES",
        year: 2022,
        price: 780000,
        mileage: 15000,
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/lexus/images/models/es/2022/styles/Lexus-ES-250-AWD-visualizer-styles-750x471-LEX-ESG-MY22-0026-04.png?wid=750&hei=471&fmt=png-alpha",
      },
      {
        id: 702,
        name: "RX",
        year: 2021,
        price: 950000,
        mileage: 22000,
        image: "https://gld-creative.s3.us-west-2.amazonaws.com/2025-lexus-rx-350h-premium-awd-207175de2144-600x300.png",
      },
    ],
  },
  {
    id: 8,
    name: "Mazda",
    country: "Japan",
    logo: "https://pngimg.com/d/mazda_PNG86.png",
    models: [
      {
        id: 801,
        name: "CX-5",
        year: 2022,
        price: 450000,
        mileage: 18000,
        image: "https://www.mazda.co.za/hubfs/01_cx5_dynamic_560x294px.png",
      },
      {
        id: 802,
        name: "Mazda3",
        year: 2021,
        price: 380000,
        mileage: 25000,
        image: "https://www.mazda.com.au/49b7c7/globalassets/settings/vehicle-assets/mazda3/2023-05-ipm---bt2/external-quickcuts/01.-g20-pure/maz15253_mazda3_auto_g20_pure_hatch_deep_crystal_blue_300qah5g20p_front-3-4_980x520.png",
      },
    ],
  },
  {
    id: 9,
    name: "Mercedes-Benz",
    country: "Germany",
    logo: "https://www.shutterstock.com/image-vector/mercedez-benz-logo-sign-symbol-260nw-2269884157.jpg",
    models: [
      {
        id: 901,
        name: "A-Class",
        year: 2022,
        price: 720000,
        mileage: 15000,
        image: "https://media.mercedes-benz.com/square-gallery/Mercedes-Benz_A-Class_2022_4000x2250.jpg",
      },
      {
        id: 902,
        name: "E-Class",
        year: 2021,
        price: 950000,
        mileage: 20000,
        image: "https://cdn.motor1.com/images/mgl/v7X7Z/s3/2021-mercedes-benz-e-class-e350d-w213-rhd-review-5.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Toyota",
    country: "Japan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Toyota_logo.png",
    models: [
      {
        id: 1001,
        name: "Corolla",
        year: 2022,
        price: 350000,
        mileage: 12000,
        image: "https://cdn.autoweek.com/cms/images/1024854/a.jpg",
      },
      {
        id: 1002,
        name: "Camry",
        year: 2021,
        price: 490000,
        mileage: 22000,
        image: "https://media.toyota.co.uk/files/2021/05/Camry-X-CM-Main-3.jpg",
      },
    ],
  },
];


