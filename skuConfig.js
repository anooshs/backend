const fs = require('fs');

const products = [
  {
    20058646: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VANILLA 400G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20058694: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHEAT 400G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20058725: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VANILLA 370G BIB',
        'brand-name': 'Ensure',
      },
    },
    '100S907223140': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223140.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Vanilla  400G',
        'brand-name': 'Ensure',
      },
    },
    '100S907223185': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223185.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Vanilla 850G',
        'brand-name': 'Ensure',
      },
    },
    '100S956223185': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S956223185.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Wheat 850G',
        'brand-name': 'Ensure',
      },
    },
    '100S907223187': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223187.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Vanilla 61G',
        'brand-name': 'Ensure',
      },
    },
    '100S907223240': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223240.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Vanilla 400G',
        'brand-name': 'Ensure',
      },
    },
    '100S907223287': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223287.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Vanilla 61G',
        'brand-name': 'Ensure',
      },
    },
    '100S956223140': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S956223140.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Wheat 400G',
        'brand-name': 'Ensure',
      },
    },
    '100S956223240': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S956223240.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Wheat 400G',
        'brand-name': 'Ensure',
      },
    },
    '100S956223287': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S956223287.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Wheat 61G',
        'brand-name': 'Ensure',
      },
    },
    '100Y511223185': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y511223185.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Coffee 850G',
        'brand-name': 'Ensure',
      },
    },
    '100Y511223187': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y511223187.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Coffee 61G',
        'brand-name': 'Ensure',
      },
    },
    '100Y511223240': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y511223240.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Coffee 400G',
        'brand-name': 'Ensure',
      },
    },
    '100Y511223287': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y511223287.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Coffee 61G',
        'brand-name': 'Ensure',
      },
    },
    '100Y576223187': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y576223187.png',
      'buy-now-url': '',
      id: {
        name: 'Ensure Almond 61G',
        'brand-name': 'Ensure',
      },
    },
    '100S348223452': {
      'image-url': 'assets/images/layout-four/products/similac-mom/100S348223452.png',
      'buy-now-url': '',
      id: {
        name: 'Similac Mom   900G',
        'brand-name': 'Similac Mom ',
      },
    },
    '100S975223140': {
      'image-url': 'assets/images/layout-four/products/pediasure/100S975223140.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Vanilla 400G',
        'brand-name': 'PediaSure ',
      },
    },
    '100S975223160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100S975223160.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Vanilla 1600G',
        'brand-name': 'PediaSure ',
      },
    },
    '100S975223185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100S975223185.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Vanilla 850G',
        'brand-name': 'PediaSure ',
      },
    },
    '100S976223160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100S976223160.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Chocolate 1600G',
        'brand-name': 'PediaSure ',
      },
    },
    '100S976223185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100S976223185.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Chocolate 850G',
        'brand-name': 'PediaSure ',
      },
    },
    '100Y496223160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y496223160.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Plain 1600G',
        'brand-name': 'PediaSure ',
      },
    },
    '100Y496223185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y496223185.png',
      'buy-now-url': '',
      id: {
        name: 'PediaSure  Plain 850G',
        'brand-name': 'PediaSure ',
      },
    },
    '100Y576223140': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y576223140.png',
      'buy-now-url': '',
      id: {
        name: 'ENSURE G PLANTBP CAN 400G',
        'brand-name': 'Ensure',
      },
    },
    '100Y576223185': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y576223185.png',
      'buy-now-url': '',
      id: {
        name: 'ENSURE G PLANTBP CAN 850G',
        'brand-name': 'Ensure',
      },
    },
    '100Y511223340': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y511223340.png',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 400G    ',
        'brand-name': 'Ensure',
      },
    },
    '100S907223340': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223340.png',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VAN 400G CAN',
        'brand-name': 'Ensure',
      },
    },
    '100S956223340': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S956223340.png',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHEAT 400G CAN',
        'brand-name': 'Ensure',
      },
    },
    '100Y511223285': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y511223285.png',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD COFF CAN 850G',
        'brand-name': 'Ensure',
      },
    },
    '100S907223285': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S907223285.png',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD VAN CAN 850G',
        'brand-name': 'Ensure',
      },
    },
    '100S956223285': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100S956223285.png',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD WHT CAN 850G',
        'brand-name': 'Ensure',
      },
    },
    '100Y535223185': {
      'image-url': 'assets/images/layout-four/products/pediasure-10-plus/100Y535223185.png',
      'buy-now-url': '',
      id: {
        name: 'PDS 10+ CHOC 850G NECKTAG',
        'brand-name': 'Pediasure 10+',
      },
    },
    '100Y534223185': {
      'image-url': 'assets/images/layout-four/products/pediasure-10-plus/100Y534223185.png',
      'buy-now-url': '',
      id: {
        name: 'PDS 10+ VAN 850G NECKTAG ',
        'brand-name': 'Pediasure 10+',
      },
    },
    '100Y650223185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650223185.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN CAN 850G',
        'brand-name': 'Pediasure',
      },
    },
    '100Y650223140': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN CAN 400G',
        'brand-name': 'Pediasure',
      },
    },
    '100Y650223160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650223160.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN CAN 1.6KG',
        'brand-name': 'Pediasure',
      },
    },
    '100Y651223185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y651223185.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC CAN 850G',
        'brand-name': 'Pediasure',
      },
    },
    '100Y651223160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y651223160.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC CAN 1.6KG',
        'brand-name': 'Pediasure',
      },
    },
    '100Y674223185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y674223185.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN CAN 850G',
        'brand-name': 'Pediasure',
      },
    },
    '100Y674223160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y674223160.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN CAN 1.6KG',
        'brand-name': 'Pediasure',
      },
    },
    '100Y523223185': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y523223185.png',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA CHOC 850G (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    '100Y523223140': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y523223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA CHOC 400G (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    '100Y495223285': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y495223285.png',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 850G (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    '100Y495223240': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y495223240.jpg',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 400G (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    '100Y524223185': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y524223185.png',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT 850G (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    '100Y524223140': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y524223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT 400G (MINO)',
        'brand-name': 'Glucerna',
      },
    },
    'S907.140FB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD VAN BIB 1.6KG',
        'brand-name': 'Ensure',
      },
    },
    'S907.140FC': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD VAN BIB 2.4KG',
        'brand-name': 'Ensure',
      },
    },
    'S956.140FB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD WHT BIB 1.6KG',
        'brand-name': 'Ensure',
      },
    },
    'S956.140FC': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD WHT BIB 2.4KG',
        'brand-name': 'Ensure',
      },
    },
    'S975.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 1.2KG BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    'S975.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 1.8KG BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    'S975.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 3.0KG BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    'S975.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 600G BIB    ',
        'brand-name': 'Pediasure',
      },
    },
    'S976.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 1.2KG BIB  ',
        'brand-name': 'Pediasure',
      },
    },
    'S976.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 1.8KG BIB  ',
        'brand-name': 'Pediasure',
      },
    },
    'S976.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 3.0KG BIB  ',
        'brand-name': 'Pediasure',
      },
    },
    'S976.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 600G BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    'Y496.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 1.2KG BIB ',
        'brand-name': 'Pediasure',
      },
    },
    'Y496.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 1.8KG BIB ',
        'brand-name': 'Pediasure',
      },
    },
    'Y496.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 3.0kg BIB',
        'brand-name': 'Pediasure',
      },
    },
    'Y496.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 600GM BIB ',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    'S934.151XA': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 1.2KG BIB    ',
        'brand-name': 'Similac',
      },
    },
    'S934.151XB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 1.8KG BIB    ',
        'brand-name': 'Similac',
      },
    },
    'S934.151XP': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 600G BIB     ',
        'brand-name': 'Similac',
      },
    },
    'S934.120XP': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"FL) 200G BIB      ',
        'brand-name': 'Similac',
      },
    },
    'S935.151XP': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 2(2"-FL)600GM BIB     ',
        'brand-name': 'Similac',
      },
    },
    'S936.151XA': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP GOLD(2"-FL)1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S936.151XB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP GOLD(2"-FL)1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S936.151XC': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM GOLD GP 3KG BIB',
        'brand-name': 'Similac',
      },
    },
    'S936.151XP': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP GOLD(2"-FL)600G BIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151XA': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK GOLD(2"-FL)1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151XB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK GOLD(2"-FL)1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151XC': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM GOLD GK 3KG BIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151XP': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK GOLD(2"-FL)600G BIB',
        'brand-name': 'Similac',
      },
    },
    'S936.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN PLUS 1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S936.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN PLUS 1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S936.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN PLUS 600G BIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GOLD GAIN KID 1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GOLD GAIN KID 1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    'S937.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN KID 600G BIB',
        'brand-name': 'Similac',
      },
    },
    'S900.151X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S900.115X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 150G',
        'brand-name': 'Apple',
      },
    },
    'S900.953X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S901.151X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S901.953X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.151X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S902.953X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S903.151X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S903.953X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'Y567.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 1.2KG',
        'brand-name': 'Similac',
      },
    },
    'Y567.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 1.8KG',
        'brand-name': 'Similac',
      },
    },
    'Y567.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    'Y567.120P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 200G',
        'brand-name': 'Similac',
      },
    },
    'Y568.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC2 (2FL-GL) BIB 1.8KG',
        'brand-name': 'Similac',
      },
    },
    'Y568.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC2 (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    'Y569.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 1.2KG',
        'brand-name': 'Similac',
      },
    },
    'Y569.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 1.8KG',
        'brand-name': 'Similac',
      },
    },
    'Y569.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 3.0KG',
        'brand-name': 'Similac',
      },
    },
    'Y569.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    'Y575.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 1.2kg',
        'brand-name': 'Similac',
      },
    },
    'Y575.151B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 1.8kg',
        'brand-name': 'Similac',
      },
    },
    'Y575.151C': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 3.0KG',
        'brand-name': 'Similac',
      },
    },
    'Y575.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    'Y511.140A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 2.4KG BIB',
        'brand-name': 'Ensure',
      },
    },
    'Y495.140PA': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN BIB 1.6KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y495.140PB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN BIB 2.4KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y524.140PA': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT BIB 1.6KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y524.140PB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT BIB 2.4KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y534.954AL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y534.82BL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y534.151AL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y535.954AL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y535.82BL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y535.151AL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'S902.954X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    'Y650.151B6': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN 1.8KGx2 FOC 600G',
        'brand-name': 'PediaSure',
      },
    },
    'Y651.151B6': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHO 1.8KGx2 FOC 600G',
        'brand-name': 'PediaSure',
      },
    },
    'Y674.151B6': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLN 1.8KGx2 FOC 600G',
        'brand-name': 'PediaSure',
      },
    },
    'Y511.140B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 1.6KG BIB',
        'brand-name': 'Ensure',
      },
    },
    'J052.656': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VAN YBG 1480G BIB',
        'brand-name': 'Ensure',
      },
    },
    'J053.656': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHT YBG 1480G BIB',
        'brand-name': 'Ensure',
      },
    },
    'J054.656': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COF YBG 1480G BIB',
        'brand-name': 'Ensure',
      },
    },
    'J052.371': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VAN YBG 2220G BIB',
        'brand-name': 'Ensure',
      },
    },
    'J053.371': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHT YBG 2220G BIB',
        'brand-name': 'Ensure',
      },
    },
    'J054.371': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COF YBG 2220G BIB',
        'brand-name': 'Ensure',
      },
    },
    'Y495.656': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 1480G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y524.656': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT 1480G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y495.371': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 2220G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'Y524.371': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT 2220G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    'S902.151XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S902.953XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.954XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    'S903.151XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S903.953XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S900.151XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600g',
        'brand-name': 'Apple',
      },
    },
    'S900.953XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S901.151XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S901.953XH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.151XL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S902.953XL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.954XL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    'S903.151XL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S903.953XL': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'Y650.151XP': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 600G',
        'brand-name': 'PediaSure',
      },
    },
    'Y650.953X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.2KG',
        'brand-name': 'PediaSure',
      },
    },
    'Y650.954X': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.8KG',
        'brand-name': 'PediaSure',
      },
    },
    'Y650.82BX': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 3.0KG',
        'brand-name': 'PediaSure',
      },
    },
    20040456: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD VAN BIB 1.6KG',
        'brand-name': 'Ensure',
      },
    },
    20040759: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD VAN BIB 2.4KG',
        'brand-name': 'Ensure',
      },
    },
    20040774: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD WHT BIB 1.6KG',
        'brand-name': 'Ensure',
      },
    },
    20040775: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENS GOLD WHT BIB 2.4KG',
        'brand-name': 'Ensure',
      },
    },
    20040888: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 1.2KG BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    20040889: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 1.8KG BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    20043284: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 3.0KG BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    20043128: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT VAN 600G BIB    ',
        'brand-name': 'Pediasure',
      },
    },
    20040886: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 1.2KG BIB  ',
        'brand-name': 'Pediasure',
      },
    },
    20040887: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 1.8KG BIB  ',
        'brand-name': 'Pediasure',
      },
    },
    20043136: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 3.0KG BIB  ',
        'brand-name': 'Pediasure',
      },
    },
    20043321: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT CHOC 600G BIB   ',
        'brand-name': 'Pediasure',
      },
    },
    20043209: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 1.2KG BIB ',
        'brand-name': 'Pediasure',
      },
    },
    20043210: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 1.8KG BIB ',
        'brand-name': 'Pediasure',
      },
    },
    20042992: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 3.0kg BIB',
        'brand-name': 'Pediasure',
      },
    },
    20042996: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE OHT PLAIN 600GM BIB ',
        'brand-name': 'Pediasure',
      },
    },
    20040944: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    20040945: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    20040948: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    20043173: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    20040900: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    20040901: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    20040903: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    20043175: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    20040878: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    20040879: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    20040880: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    20043027: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO NS BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    20040890: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 1.2KG BIB    ',
        'brand-name': 'Similac',
      },
    },
    20040891: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 1.8KG BIB    ',
        'brand-name': 'Similac',
      },
    },
    20040831: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 600G BIB     ',
        'brand-name': 'Similac',
      },
    },
    20040892: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"FL) 200G BIB      ',
        'brand-name': 'Similac',
      },
    },
    20040834: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 2(2"-FL)600GM BIB     ',
        'brand-name': 'Similac',
      },
    },
    20041056: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP GOLD(2"-FL)1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    20041057: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP GOLD(2"-FL)1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    20041040: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM GOLD GP 3KG BIB',
        'brand-name': 'Similac',
      },
    },
    20041058: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP GOLD(2"-FL)600G BIB',
        'brand-name': 'Similac',
      },
    },
    20040922: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK GOLD(2"-FL)1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    20040923: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK GOLD(2"-FL)1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    20040934: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM GOLD GK 3KG BIB',
        'brand-name': 'Similac',
      },
    },
    20040924: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK GOLD(2"-FL)600G BIB',
        'brand-name': 'Similac',
      },
    },
    20043264: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN PLUS 1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    20043293: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN PLUS 1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    20043059: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN PLUS 600G BIB',
        'brand-name': 'Similac',
      },
    },
    20043349: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GOLD GAIN KID 1.2KGBIB',
        'brand-name': 'Similac',
      },
    },
    20043265: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GOLD GAIN KID 1.8KGBIB',
        'brand-name': 'Similac',
      },
    },
    20043313: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GLD GAIN KID 600G BIB',
        'brand-name': 'Similac',
      },
    },
    20036061: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20036062: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20036063: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20036064: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20036065: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20036066: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20036068: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20036067: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20041065: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 1.2KG',
        'brand-name': 'Similac',
      },
    },
    20041066: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 1.8KG',
        'brand-name': 'Similac',
      },
    },
    20041068: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    20041067: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC1 (2FL-GL) BIB 200G',
        'brand-name': 'Similac',
      },
    },
    20041070: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC2 (2FL-GL) BIB 1.8KG',
        'brand-name': 'Similac',
      },
    },
    20041071: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC2 (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    20041072: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 1.2KG',
        'brand-name': 'Similac',
      },
    },
    20041073: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 1.8KG',
        'brand-name': 'Similac',
      },
    },
    20041074: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 3.0KG',
        'brand-name': 'Similac',
      },
    },
    20041075: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GP (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    20041077: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 1.2kg',
        'brand-name': 'Similac',
      },
    },
    20041078: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 1.8kg',
        'brand-name': 'Similac',
      },
    },
    20041079: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 3.0KG',
        'brand-name': 'Similac',
      },
    },
    20041080: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC GK (2FL-GL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    20040762: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 2.4KG BIB',
        'brand-name': 'Ensure',
      },
    },
    20040811: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN BIB 1.6KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20040812: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN BIB 2.4KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20040860: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT BIB 1.6KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20040861: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT BIB 2.4KG (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20044861: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044859: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044857: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044835: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044833: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044831: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20041062: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    20046427: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN 1.8KGx2 FOC 600G',
        'brand-name': 'PediaSure',
      },
    },
    20046435: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHO 1.8KGx2 FOC 600G',
        'brand-name': 'PediaSure',
      },
    },
    20046440: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLN 1.8KGx2 FOC 600G',
        'brand-name': 'PediaSure',
      },
    },
    20043008: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 1.6KG BIB',
        'brand-name': 'Ensure',
      },
    },
    20046389: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VAN YBG 1480G BIB',
        'brand-name': 'Ensure',
      },
    },
    20046391: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHT YBG 1480G BIB',
        'brand-name': 'Ensure',
      },
    },
    20046393: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COF YBG 1480G BIB',
        'brand-name': 'Ensure',
      },
    },
    20046388: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VAN YBG 2220G BIB',
        'brand-name': 'Ensure',
      },
    },
    20046390: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHT YBG 2220G BIB',
        'brand-name': 'Ensure',
      },
    },
    20046392: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COF YBG 2220G BIB',
        'brand-name': 'Ensure',
      },
    },
    20046408: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 1480G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20046415: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT 1480G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20046407: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 2220G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20046414: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHT 2220G BIB (M-INO)',
        'brand-name': 'Glucerna',
      },
    },
    20046387: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20046397: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20046400: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    20046445: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20046375: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20046364: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600g',
        'brand-name': 'Apple',
      },
    },
    20046395: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20046365: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20046396: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20047791: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20047782: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20047784: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    20047795: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20047798: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20040877: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 600G',
        'brand-name': 'PediaSure',
      },
    },
    20040943: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.2KG',
        'brand-name': 'PediaSure',
      },
    },
    20040946: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.8KG',
        'brand-name': 'PediaSure',
      },
    },
    20040949: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 3.0KG',
        'brand-name': 'PediaSure',
      },
    },
    'S900.151D': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S900.953D': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S901.151D': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S901.953D': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.151D': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S902.953DB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.954A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    'S903.151D': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S903.953DB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S934.120P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"FL) 200G BIB      ',
        'brand-name': 'Similac',
      },
    },
    'S934.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 1.2KG BIB',
        'brand-name': 'Similac',
      },
    },
    'S934.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 600G BIB     ',
        'brand-name': 'Similac',
      },
    },
    'Y534.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y534.82B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y534.954': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y535.151A': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y535.82B': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y535.954': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    'Y650.151DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.82BDH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.953DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y650.954DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.151DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.82BDH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.953DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y651.954DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.151DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.82BDH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.953DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    'Y674.954DH': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    'S900.151E': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S900.953E': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S901.151E': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S901.953E': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S902.151E': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S902.953EB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    'S903.151E': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S903.953EB': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20038327: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20038328: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20038329: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20038330: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20038331: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20038332: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20045364: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.8KG',
        'brand-name': 'Apple',
      },
    },
    20038333: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20038334: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20043312: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"FL) 200G BIB      ',
        'brand-name': 'Similac',
      },
    },
    20043058: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 1.2KG BIB',
        'brand-name': 'Similac',
      },
    },
    20043263: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC 1(2"-FL) 600G BIB     ',
        'brand-name': 'Similac',
      },
    },
    20044836: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044858: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044860: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ VAN 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044830: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 600G BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044832: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 3KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20044834: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE 10+ CHOC 1.8KG BIB',
        'brand-name': 'Pediasure 10+',
      },
    },
    20046444: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    20046431: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    20046432: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    20046433: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    20045877: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    20045876: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    20045360: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    20045361: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO CHOC BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    20045367: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 600G',
        'brand-name': 'Pediasure',
      },
    },
    20045883: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 3.0KG',
        'brand-name': 'Pediasure',
      },
    },
    20045362: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 1.2KG',
        'brand-name': 'Pediasure',
      },
    },
    20045363: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN BIB 1.8KG',
        'brand-name': 'Pediasure',
      },
    },
    20041819: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20041820: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S1 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20047786: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20047788: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTP S2 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20047789: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20047793: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20041825: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20041826: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 1.2KG',
        'brand-name': 'Apple',
      },
    },
    20056154: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO VAN BIB 5.4KG',
        'brand-name': 'Pediasure',
      },
    },
    20056163: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO CHOC BIB 5.4KG',
        'brand-name': 'Pediasure',
      },
    },
    20056155: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO PLAIN BIB 5.4KG',
        'brand-name': 'Pediasure',
      },
    },
    20056148: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO VAN BIB 5.4KG ',
        'brand-name': 'Pediasure',
      },
    },
    20056145: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO CHOC BIB 5.4KG',
        'brand-name': 'Pediasure',
      },
    },
    20056146: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO PLAIN BIB 5.4KG',
        'brand-name': 'Pediasure',
      },
    },
    20046379: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S900.151XHZ': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTP S1 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20046380: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S901.151XHZ': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTP S2 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20046381: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S902.151XHZ': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    20046374: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    'S903.151XHZ': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    '100Y650223240': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650223240.jpg',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PGRO VAN 400G CAN MYS',
        'brand-name': 'Pediasure',
      },
    },
    20058930: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC S3 GL+2FL 1.8KG X2 FOC 600G',
        'brand-name': 'Similac',
      },
    },
    20058965: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC S4 GL+2FL 1.8KG X2 FOC 600G',
        'brand-name': 'Similac',
      },
    },
    20058968: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC S3 GL+2FL 3KG FOC 600G',
        'brand-name': 'Similac',
      },
    },
    20058967: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC S4 GL+2FL 3KG FOC 600G',
        'brand-name': 'Similac',
      },
    },
    '100Y524223153': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y524223153.png',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA WHEAT 800G CAN MYS',
        'brand-name': 'Glucerna',
      },
    },
    '100J054223140': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100J054223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 400G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    '100J053223153': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100J053223153.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHEAT 800G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    'S903.151XLZ': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    '100Y495223153': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y495223153.png',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA VAN 800G CAN MYS',
        'brand-name': 'Glucerna',
      },
    },
    20047792: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    '100J054223153': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100J054223153.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD COFFEE 800G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    '100Y523223153': {
      'image-url': 'assets/images/layout-four/products/glucerna/100Y523223153.png',
      'buy-now-url': '',
      id: {
        name: 'GLUCERNA CHOCO 800G CAN MYS',
        'brand-name': 'Glucerna',
      },
    },
    'S902.151XLZ': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S3 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    '100J052223140': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100J052223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VANILLA 400G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    '100J053223140': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100J053223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD WHEAT 400G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    '100J052223153': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100J053223140.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD VANILLA 800G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    20047796: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIM INTPRO S4 BIB 600G',
        'brand-name': 'Apple',
      },
    },
    '100Y576223153': {
      'image-url': 'assets/images/layout-four/products/ensure-gold/100Y576223153.jpg',
      'buy-now-url': '',
      id: {
        name: 'ENSURE GOLD PLANT BASE ALM 800G CAN MYS',
        'brand-name': 'Ensure',
      },
    },
    '100M820823471': {
      'image-url': 'assets/images/layout-four/products/similac/100M820823471.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC NEOSURE 370 G ',
        'brand-name': 'Similac',
      },
    },
    '100S223823472': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823472.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC LACTOSE FREE 375 G ',
        'brand-name': 'Similac',
      },
    },
    '100S223823572': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823572.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC LACTOSE FREE PLT 375 G ',
        'brand-name': 'Similac',
      },
    },
    '100S223823672': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823672.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC LACTOSE FREE 375 G ',
        'brand-name': 'Similac',
      },
    },
    '100S948823341': {
      'image-url': 'assets/images/layout-four/products/similac/100S948823341.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC TC 360 G ',
        'brand-name': 'Similac',
      },
    },
    '100S948823441': {
      'image-url': 'assets/images/layout-four/products/similac/100S948823441.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC TC 360 G',
        'brand-name': 'Similac',
      },
    },
    '100Y651223285': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y651223285.jpg',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PGRO CHOC 850G CAN',
        'brand-name': 'Pediasure',
      },
    },
    20058279: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLN 1.8KGx2 FOC 600G',
        'brand-name': 'Pediasure',
      },
    },
    '100Y540823171': {
      'image-url': 'assets/images/layout-four/products/similac/100Y540823171.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC NEOSURE (2 FL) 370 G ',
        'brand-name': 'Similac',
      },
    },
    '100Y540823271': {
      'image-url': 'assets/images/layout-four/products/similac/100Y540823271.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC NEOSURE (2 FL) 370 G',
        'brand-name': 'Similac',
      },
    },
    '100M820823485': {
      'image-url': 'assets/images/layout-four/products/similac/100M820823485.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC NEOSURE 850 G',
        'brand-name': 'Similac',
      },
    },
    '100S223823485': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823485.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC LACTOSE FREE 850 G',
        'brand-name': 'Similac',
      },
    },
    '100S223823585': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823585.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC LACTOSE FREE PLT 850 G',
        'brand-name': 'Similac',
      },
    },
    '100S223823685': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823685.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC LACTOSE FREE 850 G',
        'brand-name': 'Similac',
      },
    },
    '100S948823383': {
      'image-url': 'assets/images/layout-four/products/similac/100S948823383.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC TC 820 G',
        'brand-name': 'Similac',
      },
    },
    '100S948823483': {
      'image-url': 'assets/images/layout-four/products/similac/100S948823483.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC TC 820 G',
        'brand-name': 'Similac',
      },
    },
    '100S949823183': {
      'image-url': 'assets/images/layout-four/products/similac/100S949823183.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC TOTAL COMFORT (2-FL) 820 G',
        'brand-name': 'Similac',
      },
    },
    '100S949823383': {
      'image-url': 'assets/images/layout-four/products/similac/100S949823383.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC TC PLUS 820 G',
        'brand-name': 'Similac',
      },
    },
    '100Y540823185': {
      'image-url': 'assets/images/layout-four/products/similac/100Y540823185.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC NEOSURE (2 FL) 850 G',
        'brand-name': 'Similac',
      },
    },
    '100Y540823285': {
      'image-url': 'assets/images/layout-four/products/similac/100Y540823285.png',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC NEOSURE (2 FL) 850 G',
        'brand-name': 'Similac',
      },
    },
    'S935.151P': {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'Similac 2 (2"-FL) 600G BIB',
        'brand-name': 'Similac',
      },
    },
    20040835: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'Similac 2 (2"-FL) BIB 600G',
        'brand-name': 'Similac',
      },
    },
    20043339: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'Similac Intelli-Pro Stage 4 BIB 600g',
        'brand-name': 'Apple',
      },
    },
    20043237: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'Similac Intelli-Pro Stage 3 BIB 600g',
        'brand-name': 'Apple',
      },
    },
    20043189: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'Similac Inte-P Stage 1 BIB 600g\\t',
        'brand-name': 'Apple',
      },
    },
    20043289: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'Similac Inte-P Stage 2 BIB 600g',
        'brand-name': 'Apple',
      },
    },
    '100Y674223260': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y674223260.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN CAN 1.6KG',
        'brand-name': 'Pediasure',
      },
    },
    '100Y674223285': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y674223285.png',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO PLAIN CAN 850G',
        'brand-name': 'Pediasure',
      },
    },
    '100S254123540': {
      'image-url': 'assets/images/layout-four/products/isomil/100S254123540.jpg',
      'buy-now-url': '',
      id: {
        name: 'ISOMIL PLUS PLT 400G',
        'brand-name': 'Isomil',
      },
    },
    '100S254123585': {
      'image-url': 'assets/images/layout-four/products/isomil/100S254123585.jpg',
      'buy-now-url': '',
      id: {
        name: 'ISOMIL PLUS PLT 850G',
        'brand-name': 'Isomil',
      },
    },
    'S999.999XC': {
      'image-url': 'assets/images/layout-four/products/isomil/100S254123585.jpg',
      'buy-now-url': '',
      id: {
        name: 'Sccop Dummy SKU',
        'brand-name': 'Scoop',
      },
    },
    '100S223823772': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823772.jpg',
      'buy-now-url': '',
      id: {
        name: 'Similac Lactose Free 375g',
        'brand-name': 'Similac',
      },
    },
    '100S223823785': {
      'image-url': 'assets/images/layout-four/products/similac/100S223823785.jpg',
      'buy-now-url': '',
      id: {
        name: 'Similac Lactose Free 850g',
        'brand-name': 'Similac',
      },
    },
    '100S948823541': {
      'image-url': 'assets/images/layout-four/products/similac/100S948823541.jpg',
      'buy-now-url': '',
      id: {
        name: 'Similac Total Comfort 360g',
        'brand-name': 'Similac',
      },
    },
    '100S948823583': {
      'image-url': 'assets/images/layout-four/products/similac/100S948823583.jpg',
      'buy-now-url': '',
      id: {
        name: 'Similac Total Comfort 820g',
        'brand-name': 'Similac',
      },
    },
    '100Y540823371': {
      'image-url': 'assets/images/layout-four/products/similac/100Y540823371.jpg',
      'buy-now-url': '',
      id: {
        name: 'Similac Neosure 370g',
        'brand-name': 'Similac',
      },
    },
    '100S949823483': {
      'image-url': 'assets/images/layout-four/products/similac/100S949823583.jpg',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC Total Comfort 820 G',
        'brand-name': 'Similac',
      },
    },
    '100S348223552': {
      'image-url': 'assets/images/layout-four/products/similac/100S348223552.jpg',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC MOM 900 G',
        'brand-name': 'Similac Mom',
      },
    },
    20059964: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S1 (2'FL + Ganglioside) 200G`,
        'brand-name': 'Similac',
      },
    },
    20059965: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S1 (2'FL + Ganglioside) 600G`,
        'brand-name': 'Similac',
      },
    },
    20059966: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S1 (2'FL + Ganglioside) 1.2KG`,
        'brand-name': 'Similac',
      },
    },
    20059967: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S1 (2'FL + Ganglioside) 1.8KG`,
        'brand-name': 'Similac',
      },
    },
    20059968: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S1 (2'FL + Ganglioside) 3KG`,
        'brand-name': 'Similac',
      },
    },
    20059969: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S2 (2'FL + Ganglioside) 600G`,
        'brand-name': 'Similac',
      },
    },
    20059970: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `Similac S2 (2'FL + Ganglioside) 1.8KG`,
        'brand-name': 'Similac',
      },
    },
    20056211: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S1 (2'-FL + Ganglioside) 1.2KG`,
        'brand-name': 'Similac',
      },
    },
    20056204: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S1 (2'-FL + Ganglioside) 1.8KG`,
        'brand-name': 'Similac',
      },
    },
    20056143: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S1 (2'-FL + Ganglioside) 3KG`,
        'brand-name': 'Similac',
      },
    },
    20056177: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S1 (2'-FL + Ganglioside) 600G`,
        'brand-name': 'Similac',
      },
    },
    20056144: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S2 (2'-FL + Ganglioside) 1.8KG`,
        'brand-name': 'Similac',
      },
    },
    20056164: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S2 (2'-FL + Ganglioside) 600G`,
        'brand-name': 'Similac',
      },
    },
    20059565: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S3 (2'-FL + Ganglioside) 1.2KG`,
        'brand-name': 'Similac',
      },
    },
    20059566: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S3 (2'-FL + Ganglioside) 1.8KG`,
        'brand-name': 'Similac',
      },
    },
    20059577: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S3 (2'-FL + Ganglioside) 3.0KG`,
        'brand-name': 'Similac',
      },
    },
    20059575: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S3 (2'-FL + Ganglioside) 600G`,
        'brand-name': 'Similac',
      },
    },
    20059576: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S4 (2'-FL + Ganglioside) 1.2KG`,
        'brand-name': 'Similac',
      },
    },
    20059579: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S4 (2'-FL + Ganglioside) 1.8KG`,
        'brand-name': 'Similac',
      },
    },
    20059587: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S4 (2'-FL + Ganglioside) 3.0KG`,
        'brand-name': 'Similac',
      },
    },
    20059578: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: `SIMILAC S4 (2'-FL + Ganglioside) 600G`,
        'brand-name': 'Similac',
      },
    },
    20060120: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'PEDIASURE PEPTIGRO CHOCOLATE 1.8KGX2 FOC 600G',
        'brand-name': 'Pediasure',
      },
    },
    20045651: {
      'image-url': '',
      'buy-now-url': '',
      id: {
        name: 'SIMILAC INTELLI-PRO STAGE 3 1.8KG',
        'brand-name': 'Apple',
      },
    },
    '100Y650A23108': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650A23108.png',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN 600G POUCH',
        'brand-name': 'Pediasure',
      },
    },
    '100Y650A23140': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650A23140.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN CAN 400G',
        'brand-name': 'Pediasure',
      },
    },
    '100Y650A23160': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650A23160.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN CAN 1.6KG',
        'brand-name': 'Pediasure',
      },
    },
    '100Y650A23185': {
      'image-url': 'assets/images/layout-four/products/pediasure/100Y650A23185.jpg',
      'buy-now-url': '',
      id: {
        name: 'PDS PGRO VAN CAN 850G',
        'brand-name': 'Pediasure',
      },
    },
  },
];

const skus = [
  {
    sku: 20058646,
    brand: 'Glucerna',
    points: 4,
    weightInGrams: 400,
    img: '',
  },
  {
    sku: 20058694,
    brand: 'Glucerna',
    points: 4,
    weightInGrams: 400,
    img: '',
  },
  {
    sku: 20058725,
    brand: 'Ensure',
    points: 3,
    weightInGrams: 370,
    img: '',
  },
  {
    sku: '100S907223140',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223140.png',
  },
  {
    sku: '100S907223185',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223185.png',
  },
  {
    sku: '100S956223185',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S956223185.png',
  },
  {
    sku: '100S907223187',
    brand: 'Ensure',
    points: 0,
    weightInGrams: 61,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223187.png',
  },
  {
    sku: '100S907223240',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223240.png',
  },
  {
    sku: '100S907223287',
    brand: 'Ensure',
    points: 0,
    weightInGrams: 61,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223287.png',
  },
  {
    sku: '100S956223140',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S956223140.png',
  },
  {
    sku: '100S956223240',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S956223240.png',
  },
  {
    sku: '100S956223287',
    brand: 'Ensure',
    points: 0,
    weightInGrams: 61,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S956223287.png',
  },
  {
    sku: '100Y511223185',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y511223185.png',
  },
  {
    sku: '100Y511223187',
    brand: 'Ensure',
    points: 0,
    weightInGrams: 61,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y511223187.png',
  },
  {
    sku: '100Y511223240',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y511223240.png',
  },
  {
    sku: '100Y511223287',
    brand: 'Ensure',
    points: 0,
    weightInGrams: 61,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y511223287.png',
  },
  {
    sku: '100Y576223187',
    brand: 'Ensure',
    points: 0,
    weightInGrams: 61,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y576223187.png',
  },
  {
    sku: '100S348223452',
    brand: 'Similac Mom',
    points: 9,
    weightInGrams: 900,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100S348223452.png',
  },
  {
    sku: '100S975223140',
    brand: 'PediaSure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100S975223140.png',
  },
  {
    sku: '100S975223160',
    brand: 'PediaSure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100S975223160.png',
  },
  {
    sku: '100S975223185',
    brand: 'PediaSure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100S975223185.png',
  },
  {
    sku: '100S976223160',
    brand: 'PediaSure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100S976223160.png',
  },
  {
    sku: '100S976223185',
    brand: 'PediaSure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100S976223185.png',
  },
  {
    sku: '100Y496223160',
    brand: 'PediaSure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y496223160.png',
  },
  {
    sku: '100Y496223185',
    brand: 'PediaSure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y496223185.png',
  },
  {
    sku: '100Y576223140',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y576223140.png',
  },
  {
    sku: '100Y576223185',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y576223185.png',
  },
  {
    sku: '100Y511223340',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y511223340.png',
  },
  {
    sku: '100S907223340',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223340.png',
  },
  {
    sku: '100S956223340',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S956223340.png',
  },
  {
    sku: '100Y511223285',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y511223285.png',
  },
  {
    sku: '100S907223285',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S907223285.png',
  },
  {
    sku: '100S956223285',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100S956223285.png',
  },
  {
    sku: '100Y535223185',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure-10-plus/100Y535223185.png',
  },
  {
    sku: '100Y534223185',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure-10-plus/100Y534223185.png',
  },
  {
    sku: '100Y650223185',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650223185.jpg',
  },
  {
    sku: '100Y650223140',
    brand: 'Pediasure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650223140.jpg',
  },
  {
    sku: '100Y650223160',
    brand: 'Pediasure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650223160.jpg',
  },
  {
    sku: '100Y651223185',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y651223185.jpg',
  },
  {
    sku: '100Y651223160',
    brand: 'Pediasure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y651223160.jpg',
  },
  {
    sku: '100Y674223185',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y674223185.jpg',
  },
  {
    sku: '100Y674223160',
    brand: 'Pediasure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y674223160.jpg',
  },
  {
    sku: '100Y523223185',
    brand: 'Glucerna',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y523223185.png',
  },
  {
    sku: '100Y523223140',
    brand: 'Glucerna',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y523223140.jpg',
  },
  {
    sku: '100Y495223285',
    brand: 'Glucerna',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y495223285.png',
  },
  {
    sku: '100Y495223240',
    brand: 'Glucerna',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y495223240.jpg',
  },
  {
    sku: '100Y524223185',
    brand: 'Glucerna',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y524223185.png',
  },
  {
    sku: '100Y524223140',
    brand: 'Glucerna',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y524223140.jpg',
  },
  {
    sku: 'S907.140FB',
    brand: 'Ensure',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 'S907.140FC',
    brand: 'Ensure',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 'S956.140FB',
    brand: 'Ensure',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 'S956.140FC',
    brand: 'Ensure',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 'S975.151A',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S975.151B',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S975.151C',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'S975.151P',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S976.151A',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S976.151B',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S976.151C',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'S976.151P',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y496.151A',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y496.151B',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y496.151C',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y496.151P',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y650.151A',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y650.151B',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y650.151C',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y650.151P',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y651.151A',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y651.151B',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y651.151C',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y651.151P',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y674.151A',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y674.151B',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y674.151C',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y674.151P',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S934.151XA',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S934.151XB',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S934.151XP',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S934.120XP',
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: 'S935.151XP',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S936.151XA',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S936.151XB',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S936.151XC',
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'S936.151XP',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S937.151XA',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S937.151XB',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S937.151XC',
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'S937.151XP',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S936.151A',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S936.151B',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S936.151P',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S937.151A',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S937.151B',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S937.151P',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S900.151X',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S900.115X',
    brand: 'Similac',
    points: 0,
    weightInGrams: 150,
    img: '',
  },
  {
    sku: 'S900.953X',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S901.151X',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S901.953X',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.151X',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.953X',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S903.151X',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S903.953X',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y567.151A',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y567.151B',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y567.151P',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y567.120P',
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: 'Y568.151B',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y568.151P',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y569.151A',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y569.151B',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y569.151C',
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y569.151P',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y575.151A',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y575.151B',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y575.151C',
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y575.151P',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y511.140A',
    brand: 'Ensure',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 'Y495.140PA',
    brand: 'Glucerna',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 'Y495.140PB',
    brand: 'Glucerna',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 'Y524.140PA',
    brand: 'Glucerna',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 'Y524.140PB',
    brand: 'Glucerna',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 'Y534.954AL',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y534.82BL',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y534.151AL',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y535.954AL',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y535.82BL',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y535.151AL',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.954X',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y650.151B6',
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 'Y651.151B6',
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 'Y674.151B6',
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 'Y511.140B',
    brand: 'Ensure',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 'J052.656',
    brand: 'Ensure',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 'J053.656',
    brand: 'Ensure',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 'J054.656',
    brand: 'Ensure',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 'J052.371',
    brand: 'Ensure',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 'J053.371',
    brand: 'Ensure',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 'J054.371',
    brand: 'Ensure',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 'Y495.656',
    brand: 'Glucerna',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 'Y524.656',
    brand: 'Glucerna',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 'Y495.371',
    brand: 'Glucerna',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 'Y524.371',
    brand: 'Glucerna',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 'S902.151XH',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.953XH',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.954XH',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S903.151XH',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S903.953XH',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S900.151XH',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S900.953XH',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S901.151XH',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S901.953XH',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.151XL',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.953XL',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.954XL',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S903.151XL',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S903.953XL',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y650.151XP',
    brand: 'PediaSure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y650.953X',
    brand: 'PediaSure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y650.954X',
    brand: 'PediaSure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y650.82BX',
    brand: 'PediaSure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20040456,
    brand: 'Ensure',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 20040759,
    brand: 'Ensure',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 20040774,
    brand: 'Ensure',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 20040775,
    brand: 'Ensure',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 20040888,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040889,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20043284,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20043128,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040886,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040887,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20043136,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20043321,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043209,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20043210,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20042992,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20042996,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040944,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040945,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20040948,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20043173,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040900,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040901,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20040903,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20043175,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040878,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040879,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20040880,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20043027,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040890,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040891,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20040831,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040892,
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: 20040834,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041056,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20041057,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20041040,
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20041058,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040922,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040923,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20040934,
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20040924,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043264,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20043293,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20043059,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043349,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20043265,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20043313,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20036061,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20036062,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20036063,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20036064,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20036065,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20036066,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20036068,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20036067,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20041065,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20041066,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20041068,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041067,
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: 20041070,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20041071,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041072,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20041073,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20041074,
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20041075,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041077,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20041078,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20041079,
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20041080,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040762,
    brand: 'Ensure',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 20040811,
    brand: 'Glucerna',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 20040812,
    brand: 'Glucerna',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 20040860,
    brand: 'Glucerna',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 20040861,
    brand: 'Glucerna',
    points: 24,
    weightInGrams: 2400,
    img: '',
  },
  {
    sku: 20044861,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20044859,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20044857,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20044835,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20044833,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20044831,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041062,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20046427,
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 20046435,
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 20046440,
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 20043008,
    brand: 'Ensure',
    points: 16,
    weightInGrams: 1600,
    img: '',
  },
  {
    sku: 20046389,
    brand: 'Ensure',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 20046391,
    brand: 'Ensure',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 20046393,
    brand: 'Ensure',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 20046388,
    brand: 'Ensure',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 20046390,
    brand: 'Ensure',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 20046392,
    brand: 'Ensure',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 20046408,
    brand: 'Glucerna',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 20046415,
    brand: 'Glucerna',
    points: 14,
    weightInGrams: 1480,
    img: '',
  },
  {
    sku: 20046407,
    brand: 'Glucerna',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 20046414,
    brand: 'Glucerna',
    points: 22,
    weightInGrams: 2220,
    img: '',
  },
  {
    sku: 20046387,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046397,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20046400,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20046445,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046375,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20046364,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046395,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20046365,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046396,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20047791,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20047782,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20047784,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20047795,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20047798,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040877,
    brand: 'PediaSure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040943,
    brand: 'PediaSure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20040946,
    brand: 'PediaSure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20040949,
    brand: 'PediaSure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'S900.151D',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S900.953D',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S901.151D',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S901.953D',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.151D',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.953DB',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.954A',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S903.151D',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S903.953DB',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S934.120P',
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: 'S934.151A',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S934.151P',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y534.151A',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y534.82B',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y534.954',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y535.151A',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y535.82B',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y535.954',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y650.151DH',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y650.82BDH',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y650.953DH',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y650.954DH',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y651.151DH',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y651.82BDH',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y651.953DH',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y651.954DH',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'Y674.151DH',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'Y674.82BDH',
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 'Y674.953DH',
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'Y674.954DH',
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 'S900.151E',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S900.953E',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S901.151E',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S901.953E',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S902.151E',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.953EB',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 'S903.151E',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S903.953EB',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20038327,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20038328,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20038329,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20038330,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20038331,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20038332,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20045364,
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20038333,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20038334,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20043312,
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: 20043058,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20043263,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20044836,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20044858,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20044860,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20044830,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20044832,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20044834,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20046444,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046431,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20046432,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20046433,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20045877,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20045876,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20045360,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20045361,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20045367,
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20045883,
    brand: 'Pediasure',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: 20045362,
    brand: 'Pediasure',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20045363,
    brand: 'Pediasure',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: 20041819,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041820,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20047786,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20047788,
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20047789,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20047793,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20041825,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20041826,
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: 20056154,
    brand: 'Pediasure',
    points: 54,
    weightInGrams: 5400,
    img: '',
  },
  {
    sku: 20056163,
    brand: 'Pediasure',
    points: 54,
    weightInGrams: 5400,
    img: '',
  },
  {
    sku: 20056155,
    brand: 'Pediasure',
    points: 54,
    weightInGrams: 5400,
    img: '',
  },
  {
    sku: 20056148,
    brand: 'Pediasure',
    points: 54,
    weightInGrams: 5400,
    img: '',
  },
  {
    sku: 20056145,
    brand: 'Pediasure',
    points: 54,
    weightInGrams: 5400,
    img: '',
  },
  {
    sku: 20056146,
    brand: 'Pediasure',
    points: 54,
    weightInGrams: 5400,
    img: '',
  },
  {
    sku: 20046379,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S900.151XHZ',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046380,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S901.151XHZ',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046381,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S902.151XHZ',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20046374,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 'S903.151XHZ',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '100Y650223240',
    brand: 'Pediasure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650223240.jpg',
  },
  {
    sku: 20058930,
    brand: 'Similac',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 20058965,
    brand: 'Similac',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: 20058968,
    brand: 'Similac',
    points: 36,
    weightInGrams: 3600,
    img: '',
  },
  {
    sku: 20058967,
    brand: 'Similac',
    points: 36,
    weightInGrams: 3600,
    img: '',
  },
  {
    sku: '100Y524223153',
    brand: 'Glucerna',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y524223153.png',
  },
  {
    sku: '100J054223140',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100J054223140.jpg',
  },
  {
    sku: '100J053223153',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100J053223153.jpg',
  },
  {
    sku: 'S903.151XLZ',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '100Y495223153',
    brand: 'Glucerna',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y495223153.png',
  },
  {
    sku: 20047792,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '100J054223153',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100J054223153.jpg',
  },
  {
    sku: '100Y523223153',
    brand: 'Glucerna',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/glucerna/100Y523223153.png',
  },
  {
    sku: 'S902.151XLZ',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '100J052223140',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100J052223140.jpg',
  },
  {
    sku: '100J053223140',
    brand: 'Ensure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100J053223140.jpg',
  },
  {
    sku: '100J052223153',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100J052223153.jpg',
  },
  {
    sku: 20047796,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '100Y576223153',
    brand: 'Ensure',
    points: 8,
    weightInGrams: 800,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/ensure-gold/100Y576223153.jpg',
  },
  {
    sku: '100M820823471',
    brand: 'Similac',
    points: 0,
    weightInGrams: 370,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100M820823471.png',
  },
  {
    sku: '100S223823472',
    brand: 'Similac',
    points: 0,
    weightInGrams: 375,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S223823472.png',
  },
  {
    sku: '100S223823572',
    brand: 'Similac',
    points: 0,
    weightInGrams: 375,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S223823572.png',
  },
  {
    sku: '100S223823672',
    brand: 'Similac',
    points: 0,
    weightInGrams: 375,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S223823672.png',
  },
  {
    sku: '100S948823341',
    brand: 'Similac',
    points: 0,
    weightInGrams: 360,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S948823341.png',
  },
  {
    sku: '100S948823441',
    brand: 'Similac',
    points: 0,
    weightInGrams: 360,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S948823441.png',
  },
  {
    sku: '100Y540823171',
    brand: 'Similac',
    points: 0,
    weightInGrams: 370,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100Y540823171.png',
  },
  {
    sku: '100Y540823271',
    brand: 'Similac',
    points: 0,
    weightInGrams: 370,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100Y540823271.png',
  },
  {
    sku: '100M820823485',
    brand: 'Similac',
    points: 0,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100M820823485.png',
  },
  {
    sku: '100S223823485',
    brand: 'Similac',
    points: 0,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S223823485.png',
  },
  {
    sku: '100S223823585',
    brand: 'Similac',
    points: 0,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S223823585.png',
  },
  {
    sku: '100S223823685',
    brand: 'Similac',
    points: 0,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S223823685.png',
  },
  {
    sku: '100S948823383',
    brand: 'Similac',
    points: 0,
    weightInGrams: 820,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S948823383.png',
  },
  {
    sku: '100S948823483',
    brand: 'Similac',
    points: 0,
    weightInGrams: 820,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S948823483.png',
  },
  {
    sku: '100S949823183',
    brand: 'Similac',
    points: 8,
    weightInGrams: 820,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S949823183.png',
  },
  {
    sku: '100S949823383',
    brand: 'Similac',
    points: 8,
    weightInGrams: 820,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S949823383.png',
  },
  {
    sku: '100Y540823185',
    brand: 'Similac',
    points: 0,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100Y540823185.png',
  },
  {
    sku: '100Y540823285',
    brand: 'Similac',
    points: 0,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100Y540823285.png',
  },
  {
    sku: 'S935.151P',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20040835,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043339,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043237,
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043189,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: 20043289,
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '100Y674223260',
    brand: 'Pediasure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y674223260.jpg',
  },
  {
    sku: '100Y674223285',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/pediasure/100Y674223285.png',
  },
  {
    sku: '100S254123540',
    brand: 'Isomil',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/isomil/100S254123540.jpg',
  },
  {
    sku: '100S254123585',
    brand: 'Isomil',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/isomil/100S254123585.jpg',
  },
  {
    sku: 'S999.999XC',
    brand: 'Scoop',
    points: 10,
    weightInGrams: 100,
    img: '',
  },
  {
    sku: '100S949823483',
    brand: 'Similac',
    points: 8,
    weightInGrams: 820,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S949823583.jpg',
  },
  {
    sku: '100S348223552',
    brand: 'Similac Mom',
    points: 9,
    weightInGrams: 900,
    img: 'https://d1bzawwfj8lue9.cloudfront.net/assets/images/layout-four/products/similac/100S348223552.jpg',
  },
  {
    sku: '20058279',
    brand: 'PediaSure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: '100Y651223285',
    brand: 'PediaSure',
    points: 8,
    weightInGrams: 850,
    img: 'https://loyalty.abbottmalaysia.com.my/assets/images/layout-four/products/pediasure/100Y651223285.jpg',
  },
  {
    sku: '20056211',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: '20056204',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: '20056143',
    brand: 'Similac',
    points: 0,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: '20056177',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '20056144',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: '20056164',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '20059565',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: '20059566',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: '20059577',
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: '20059575',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '20059576',
    brand: 'Similac',
    points: 12,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: '20059579',
    brand: 'Similac',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: '20059587',
    brand: 'Similac',
    points: 30,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: '20059578',
    brand: 'Similac',
    points: 6,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '20060120',
    brand: 'Pediasure',
    points: 42,
    weightInGrams: 4200,
    img: '',
  },
  {
    sku: '20045651',
    brand: 'Apple',
    points: 18,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: '100Y650A23108',
    brand: 'Pediasure',
    points: 6,
    weightInGrams: 600,
    img: 'https://d1ko7vxjibsd4f.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650A23108.png',
  },
  {
    sku: '100Y650A23140',
    brand: 'Pediasure',
    points: 4,
    weightInGrams: 400,
    img: 'https://d1ko7vxjibsd4f.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650A23140.jpg',
  },
  {
    sku: '100Y650A23160',
    brand: 'Pediasure',
    points: 16,
    weightInGrams: 1600,
    img: 'https://d1ko7vxjibsd4f.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650A23160.jpg',
  },
  {
    sku: '100Y650A23185',
    brand: 'Pediasure',
    points: 8,
    weightInGrams: 850,
    img: 'https://d1ko7vxjibsd4f.cloudfront.net/assets/images/layout-four/products/pediasure/100Y650A23185.jpg',
  },
  {
    sku: '20059964',
    brand: 'Similac',
    points: 0,
    weightInGrams: 200,
    img: '',
  },
  {
    sku: '20059965',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '20059966',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1200,
    img: '',
  },
  {
    sku: '20059967',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
  {
    sku: '20059968',
    brand: 'Similac',
    points: 0,
    weightInGrams: 3000,
    img: '',
  },
  {
    sku: '20059969',
    brand: 'Similac',
    points: 0,
    weightInGrams: 600,
    img: '',
  },
  {
    sku: '20059970',
    brand: 'Similac',
    points: 0,
    weightInGrams: 1800,
    img: '',
  },
];

let outputObj = products[0];
products.forEach((product) => {
  skus.forEach((item) => {
    outputObj[item.sku] = {
      ...item,
      ...product[item.sku],
    };
  });
});

/* let outputObj = products[0];
for (let key in outputObj) {
  // Set the value of the "sku" key to the current key being iterated
  outputObj[key]["sku"] = key;
} */

console.log(Object.keys(products[0]).length, skus.length, Object.keys(outputObj).length);

// console.log(JSON.stringify(outputObj, null, 2));
// Convert JSON data to a string
const jsonString = JSON.stringify(outputObj, null, 2); // The third parameter (2) is for indentation

// Specify the file path
const filePath = 'files/prod/my.txt';

// Write the JSON string to the file
fs.writeFile(filePath, jsonString, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('JSON data written to', filePath);
  }
});
