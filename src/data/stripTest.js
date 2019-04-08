const stripTest = [
  {
    brand: "budweiser",
    price: "6.99",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "budweiser",
    price: "7.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "budweiser",
    price: "19.99",
    package: "24 Pk Cans",
    multi: ""
  },
  {
    brand: "budweiser",
    price: "11.49",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "budweiser",
    price: "11.49",
    package: "12 Pk Btls",
    multi: ""
  },
  {
    brand: "budweiser",
    price: "8.99",
    package: "8 Pk 16oz Cans",
    multi: ""
  },
  {
    brand: "budweiser",
    price: "2.29",
    package: "25oz Can",
    multi: ""
  },
  {
    brand: "budlight",
    price: "6.99",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "budlight",
    price: "7.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "budlight",
    price: "19.99",
    package: "24 Pk Cans",
    multi: ""
  },
  {
    brand: "budlight",
    price: "11.49",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "budlight",
    price: "11.49",
    package: "12 Pk Btls",
    multi: ""
  },
  {
    brand: "budlight",
    price: "8.99",
    package: "8 Pk 16oz Cans",
    multi: ""
  },
  {
    brand: "budlight",
    price: "2.29",
    package: "25oz Can",
    multi: ""
  },
  {
    brand: "budlight",
    price: "9.99",
    package: "8 Pk 16oz Alums",
    multi: ""
  },
  {
    brand: "budlight",
    price: "16.99",
    package: "18 Pk Cans",
    multi: ""
  },
  {
    brand: "budlightplatinum",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "budlightplatinum",
    price: "14.99",
    package: "12 Pk Btls",
    multi: ""
  },
  {
    brand: "budlightlime",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "budlightlime",
    price: "14.99",
    package: "12 Pk Btls",
    multi: ""
  },
  {
    brand: "budlightorange",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "budlightorange",
    price: "14.99",
    package: "12 Pk Btls",
    multi: ""
  },
  {
    brand: "budlightorange",
    price: "14.99",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "michelobultra",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "michelobultra",
    price: "14.99",
    package: "12 Pk Btls",
    multi: ""
  },
  {
    brand: "michelobultra",
    price: "14.99",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "michelobamberbock",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "budselect",
    price: "2.29",
    package: "25oz Can",
    multi: ""
  },
  {
    brand: "cheladabudlight",
    price: "3.39",
    package: "25oz Can",
    multi: ""
  },
  {
    brand: "budice",
    price: "1.39",
    package: "25oz Can",
    multi: ""
  },
  {
    brand: "busch",
    price: "6.49",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "busch",
    price: "9.99",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "busch",
    price: "18.99",
    package: "30 Pk Cans",
    multi: ""
  },
  {
    brand: "buschlight",
    price: "6.49",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "buschlight",
    price: "9.99",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "buschlight",
    price: "18.99",
    package: "30 Pk Cans",
    multi: ""
  },
  {
    brand: "buschna",
    price: "5.29",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "naturallight",
    price: "5.49",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "naturallight",
    price: "5.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "naturallight",
    price: "9.49",
    package: "15 Pk Cans",
    multi: ""
  },
  {
    brand: "naturallightnaturdays",
    price: "5.49",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "naturallightnaturdays",
    price: "9.49",
    package: "12 Pk Cans",
    multi: ""
  },
  {
    brand: "naturalice",
    price: "5.49",
    package: "6 Pk Cans",
    multi: ""
  },
  {
    brand: "naturalice",
    price: "9.49",
    package: "15 Pk Cans",
    multi: ""
  },
  {
    brand: "landshark",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "rollingrock",
    price: "6.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "shocktop",
    price: "8.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "shocktop",
    price: "8.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "spaten",
    price: "10.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "hoegaarden",
    price: "10.49",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "stellaartois",
    price: "10.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "stellaartoiscidre",
    price: "10.99",
    package: "6 Pk Btls",
    multi: ""
  },
  {
    brand: "",
    price: "9.49",
    package: "6 Pk Btls",
    multi: ""
  }
];

export default stripTest;
