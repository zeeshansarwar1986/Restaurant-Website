/* ============================================
   MENU DATA - Akram Fish House & Restaurant
   All menu items organized by category
   ============================================ */

const menuData = {
    "desi-special": {
        en: "Desi Special", ur: "دیسی سپیشل",
        items: [
            { id: 1, en: "Desi Murgh (Full)", ur: "دیسی مرغ", full: "3,500/-", half: "1,800/-", fullQty: "Full", halfQty: "Half" },
            { id: 2, en: "Desi Murgh Karahi", ur: "دیسی مرغ کڑاہی", full: "3,500/-", half: "1,800/-", fullQty: "Full", halfQty: "Half" },
            { id: 3, en: "Desi Eggs (12 Pcs)", ur: "دیسی انڈے", full: "600/-" },
            { id: 4, en: "Desi Egg Fry (6 Pcs)", ur: "دیسی انڈہ فرائی", full: "450/-" },
            { id: 5, en: "Desi Omelette (3 Eggs)", ur: "دیسی آملیٹ", full: "400/-" }
        ]
    },
    "fish-fry": {
        en: "Fish Fry", ur: "فش فرائی",
        items: [
            { id: 6, en: "Damra Fish Fry", ur: "ڈمرا فش فرائی", full: "1,280/-", half: "640/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 7, en: "Rohu Fish Fry", ur: "روہو فش فرائی", full: "1,080/-", half: "540/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 8, en: "Sole Fish Fry", ur: "سول فش فرائی", full: "1,530/-", half: "770/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 9, en: "Mushka Fish Fry", ur: "مشکا فش فرائی", full: "1,730/-", half: "870/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 10, en: "Finger Fish Fry", ur: "فنگر فش فرائی", full: "1,530/-", half: "770/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 11, en: "Khagga Fish Fry", ur: "کھگا فش فرائی", full: "1,280/-", half: "640/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" }
        ]
    },
    "fish-bbq": {
        en: "Fish Bar B Q", ur: "فش بار بی کیو",
        items: [
            { id: 12, en: "Damra Fish BBQ", ur: "ڈمرا فش بی بی کیو", full: "1,530/-", half: "770/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 13, en: "Rohu Fish BBQ", ur: "روہو فش بی بی کیو", full: "1,330/-", half: "670/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 14, en: "Sole Fish BBQ", ur: "سول فش بی بی کیو", full: "1,730/-", half: "870/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 15, en: "Mushka Fish BBQ", ur: "مشکا فش بی بی کیو", full: "1,930/-", half: "970/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" }
        ]
    },
    "fish-salan": {
        en: "Fish Salan", ur: "فش سالن",
        items: [
            { id: 16, en: "Damra Fish Salan", ur: "ڈمرا فش سالن", full: "1,530/-", half: "770/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 17, en: "Rohu Fish Salan", ur: "روہو فش سالن", full: "1,280/-", half: "640/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 18, en: "Sole Fish Salan", ur: "سول فش سالن", full: "1,730/-", half: "870/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 19, en: "Mushka Fish Salan", ur: "مشکا فش سالن", full: "1,930/-", half: "970/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" }
        ]
    },
    "fish-handi": {
        en: "Fish Handi Boneless", ur: "فش ہانڈی بون لیس",
        items: [
            { id: 20, en: "Fish Handi Boneless", ur: "فش ہانڈی بون لیس", full: "1,730/-", half: "870/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 21, en: "Fish Achari Handi", ur: "فش اچاری ہانڈی", full: "1,730/-", half: "870/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" },
            { id: 22, en: "Fish Malai Handi", ur: "فش ملائی ہانڈی", full: "1,730/-", half: "870/-", fullQty: "Full (1000gm)", halfQty: "Half (500gm)" }
        ]
    },
    "bbq": {
        en: "Bar B Q", ur: "بار بی کیو",
        items: [
            { id: 25, en: "Chicken Tikka", ur: "چکن ٹکہ", full: "480/-", half: "", fullQty: "Per Plate" },
            { id: 26, en: "Chicken Boti", ur: "چکن بوٹی", full: "550/-", half: "", fullQty: "Per Plate" },
            { id: 27, en: "Malai Boti", ur: "ملائی بوٹی", full: "550/-", half: "", fullQty: "Per Plate" },
            { id: 28, en: "Seekh Kabab (Beef)", ur: "سیخ کباب", full: "160/-", half: "", fullQty: "Per Piece" },
            { id: 29, en: "Bihari Kabab", ur: "بہاری کباب", full: "200/-", half: "", fullQty: "Per Piece" },
            { id: 30, en: "Chapli Kabab", ur: "چپلی کباب", full: "250/-", half: "", fullQty: "Per Piece" },
            { id: 31, en: "Mutton Tikka", ur: "مٹن ٹکہ", full: "700/-", half: "", fullQty: "Per Plate" },
            { id: 32, en: "Full Leg BBQ", ur: "فل ٹانگ بار بی کیو", full: "6,000/-", half: "", fullQty: "Full Leg" }
        ]
    },
    "chinese-gravy": {
        en: "Chinese Gravy", ur: "چائنیز گریوی",
        items: [
            { id: 33, en: "Chicken Manchurian", ur: "چکن منچورین", full: "1,050/-", half: "550/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 34, en: "Chicken Chilli Dry", ur: "چکن چلی ڈرائی", full: "1,200/-", half: "", fullQty: "Per Plate" },
            { id: 35, en: "Chicken Sweet & Sour", ur: "چکن سوئیٹ اینڈ ساور", full: "1,050/-", half: "550/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 36, en: "Chicken Szechuan", ur: "چکن سیچون", full: "1,050/-", half: "550/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 37, en: "Chicken Black Pepper", ur: "چکن بلیک پیپر", full: "1,050/-", half: "550/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 38, en: "Fish Manchurian", ur: "فش منچورین", full: "1,280/-", half: "640/-", fullQty: "Full", halfQty: "Half" }
        ]
    },
    "rice": {
        en: "Rice", ur: "چاول",
        items: [
            { id: 39, en: "Chicken Biryani", ur: "چکن بریانی", full: "300/-", half: "", fullQty: "Per Plate" },
            { id: 40, en: "Chicken Pulao", ur: "چکن پلاؤ", full: "300/-", half: "", fullQty: "Per Plate" },
            { id: 41, en: "Mutton Biryani", ur: "مٹن بریانی", full: "450/-", half: "", fullQty: "Per Plate" },
            { id: 42, en: "Mutton Pulao", ur: "مٹن پلاؤ", full: "450/-", half: "", fullQty: "Per Plate" },
            { id: 43, en: "Egg Fried Rice", ur: "ایگ فرائیڈ رائس", full: "400/-", half: "", fullQty: "Per Plate" },
            { id: 44, en: "Chicken Fried Rice", ur: "چکن فرائیڈ رائس", full: "550/-", half: "", fullQty: "Per Plate" },
            { id: 45, en: "Plain Rice", ur: "سادہ چاول", full: "200/-", half: "", fullQty: "Per Plate" },
            { id: 46, en: "Steam Rice", ur: "سٹیم رائس", full: "250/-", half: "", fullQty: "Per Plate" }
        ]
    },
    "noodles": {
        en: "Noodles", ur: "نوڈلز",
        items: [
            { id: 47, en: "Chicken Chow Mein", ur: "چکن چاؤ مین", full: "550/-", half: "", fullQty: "Per Plate" },
            { id: 48, en: "Egg Chow Mein", ur: "ایگ چاؤ مین", full: "400/-", half: "", fullQty: "Per Plate" },
            { id: 49, en: "Vegetable Chow Mein", ur: "ویجیٹیبل چاؤ مین", full: "350/-", half: "", fullQty: "Per Plate" },
            { id: 50, en: "Chicken Spaghetti", ur: "چکن سپاگیٹی", full: "550/-", half: "", fullQty: "Per Plate" }
        ]
    },
    "mutton-karahi": {
        en: "Mutton Karahi", ur: "مٹن کڑاہی",
        items: [
            { id: 51, en: "Mutton Karahi", ur: "مٹن کڑاہی", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 52, en: "Mutton White Karahi", ur: "مٹن وائٹ کڑاہی", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 53, en: "Namkeen Gosht", ur: "نمکین گوشت", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 54, en: "Mutton Peshawari", ur: "مٹن پشاوری", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" }
        ]
    },
    "mutton-cuisine": {
        en: "Mutton Cuisine", ur: "مٹن کوزین",
        items: [
            { id: 55, en: "Mutton Handi", ur: "مٹن ہانڈی", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 56, en: "Mutton Kunna", ur: "مٹن کنا", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 57, en: "Mutton Korma", ur: "مٹن قورمہ", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 58, en: "Mutton Achari", ur: "مٹن اچاری", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 59, en: "Mutton Nihari", ur: "مٹن نہاری", full: "3,600/-", half: "1,900/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 60, en: "Paya", ur: "پائے", full: "1,200/-", half: "650/-", fullQty: "Full", halfQty: "Half" }
        ]
    },
    "chicken-karahi": {
        en: "Chicken Karahi", ur: "چکن کڑاہی",
        items: [
            { id: 61, en: "Chicken Karahi", ur: "چکن کڑاہی", full: "1,800/-", half: "1,000/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 62, en: "Chicken White Karahi", ur: "چکن وائٹ کڑاہی", full: "1,800/-", half: "1,000/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 63, en: "Chicken Namkeen", ur: "چکن نمکین", full: "1,800/-", half: "1,000/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" },
            { id: 64, en: "Chicken Peshawari", ur: "چکن پشاوری", full: "1,800/-", half: "1,000/-", fullQty: "Full (1kg)", halfQty: "Half (500gm)" }
        ]
    },
    "chicken-cuisine": {
        en: "Chicken Cuisine", ur: "چکن کوزین",
        items: [
            { id: 138, en: "Chicken Hari Mirch", ur: "چکن ہری مرچ", full: "----", half: "1,280/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 139, en: "Chicken Jalfrezi", ur: "چکن جلفریزی", full: "----", half: "1,280/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 140, en: "Chicken Ginger", ur: "چکن جنجر", full: "----", half: "1,280/-", fullQty: "Full (600gm)", halfQty: "Half (300gm)" },
            { id: 141, en: "Chicken Nawabi", ur: "چکن نوابی", full: "", half: "1,280/-", halfQty: "Half (300gm)" },
            { id: 142, en: "Chicken Green Chilli with Lemon", ur: "چکن گرین چلی ود لیمن", full: "", half: "1,280/-", halfQty: "Half (300gm)" },
            { id: 143, en: "Chicken Bharta", ur: "چکن بھرتا", full: "", half: "1,280/-", halfQty: "Half (300gm)" },
            { id: 144, en: "Shahi Dall", ur: "شاہی دال", full: "550/-" },
            { id: 145, en: "Mix Vegetable", ur: "مکس سبزی", full: "550/-" }
        ]
    },
    "appetizer": {
        en: "Appetizer", ur: "ایپیٹائزر",
        items: [
            { id: 226, en: "French Fries", ur: "فرنچ فرائز", full: "320/-" },
            { id: 227, en: "Fish Crackers", ur: "فش کریکر", full: "350/-" },
            { id: 58, en: "Chicken Dhaka", ur: "چکن ڈھاکہ", full: "1,050/-" },
            { id: 24, en: "Fish Dhaka (200gm)", ur: "فش ڈھاکہ", full: "700/-" },
            { id: 23, en: "Finger Fish (200gm)", ur: "فنگر فش", full: "700/-" },
            { id: 59, en: "Chicken Drum Stick (4Pcs)", ur: "چکن ڈرم اسٹک (4 پیس)", full: "1,050/-" },
            { id: 57, en: "Chicken Chilli Dry", ur: "چکن چلی ڈرائی", full: "1,200/-" },
            { id: 62, en: "Honey Fish", ur: "ہنی فش", full: "1,650/-" }
        ]
    },
    "soup": {
        en: "Soup", ur: "سوپ",
        items: [
            { id: 88, en: "Special Soup", ur: "اسپیشل سوپ", full: "1,050/-", half: "550/-", fullQty: "Full", halfQty: "Half" },
            { id: 89, en: "Chicken Hot and Sour Soup", ur: "چکن ہاٹ اینڈ ساور سوپ", full: "950/-", half: "500/-", fullQty: "Full", halfQty: "Half" },
            { id: 90, en: "Chicken Corn Soup", ur: "چکن کارن سوپ", full: "950/-", half: "500/-", fullQty: "Full", halfQty: "Half" },
            { id: 91, en: "Fish Soup", ur: "فش سوپ", full: "1,200/-", half: "650/-", fullQty: "Full", halfQty: "Half" }
        ]
    },
    "salad": {
        en: "Salad & Extras", ur: "سلاد",
        items: [
            { id: 155, en: "Salad Platter", ur: "سلاد پلیٹر", full: "1,150/-" },
            { id: 150, en: "Fruit Salad", ur: "فروٹ سلاد", full: "590/-" },
            { id: 151, en: "Russian Salad", ur: "رشین سلاد", full: "590/-" },
            { id: 152, en: "Kachomar Salad", ur: "کچومر سلاد", full: "130/-" },
            { id: 153, en: "Fresh Salad", ur: "فریش سلاد", full: "100/-" },
            { id: 149, en: "Special Raita (Black Pepper + Zera)", ur: "اسپیشل رائتہ (کالی مرچ زیرہ)", full: "120/-" },
            { id: 154, en: "Nestle Raita", ur: "نیسلے رائتہ", full: "320/-" },
            { id: 156, en: "Roti Per Head", ur: "روٹی پر ہیڈ", full: "70/-" },
            { id: 157, en: "Roti", ur: "روٹی", full: "14/-" },
            { id: 158, en: "Mint Raita", ur: "پودینہ رائتہ", full: "100/-" }
        ]
    },
    "beverages": {
        en: "Beverages", ur: "کولڈ ڈرنک",
        items: [
            { id: 159, en: "Mineral Water Large", ur: "منرل واٹر لارج", full: "120/-" },
            { id: 160, en: "Mineral Water Small", ur: "منرل واٹر سمال", full: "60/-" },
            { id: 161, en: "Cold Drink Regular", ur: "کولڈ ڈرنک ریگولر", full: "60/-" },
            { id: 162, en: "Cold Drink 1 Litre", ur: "کولڈ ڈرنک 1 لیٹر", full: "170/-" },
            { id: 163, en: "Cold Drink 1.5 Litre", ur: "کولڈ ڈرنک 1.5 لیٹر", full: "210/-" },
            { id: 164, en: "Cold Drink 2 Litre", ur: "کولڈ ڈرنک 2 لیٹر", full: "240/-" },
            { id: 165, en: "Tin Pack with Mint Greta", ur: "ٹن پیک ود منٹ گریٹا", full: "120/-" },
            { id: 166, en: "Nestle Juice Large", ur: "نیسلے جوس لارج", full: "500/-" },
            { id: 167, en: "Nestle Juice Small", ur: "نیسلے جوس سمال", full: "70/-" },
            { id: 168, en: "Regular Sting", ur: "سٹنگ ریگولر", full: "70/-" },
            { id: 169, en: "Tea", ur: "چائے", full: "90/-" },
            { id: 170, en: "Green Tea", ur: "گرین ٹی", full: "70/-" },
            { id: 177, en: "Fresh Lime", ur: "فریش لائم", full: "130/-" }
        ]
    },
    "ice-cream": {
        en: "Ice Cream", ur: "آئس کریم",
        items: [
            { id: 171, en: "2 Scoop Ice Cream", ur: "2 سکوپ آئس کریم", full: "260/-" },
            { id: 172, en: "3 Scoop Ice Cream", ur: "3 سکوپ آئس کریم", full: "390/-" },
            { id: 173, en: "4 Scoop Ice Cream", ur: "4 سکوپ آئس کریم", full: "520/-" }
        ]
    }
};
