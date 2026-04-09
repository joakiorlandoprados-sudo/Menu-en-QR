/* =====================================================
   RESTAURANTE ADUANA – script.js
   Traducciones (ES / EN / FR / IT / DE)
   Navegación Carta / Vinos
   ===================================================== */

const translations = {
  es: {
    lang_label: "Idioma:",
    since: "Desde",
    tagline: "Puerto de Valencia · Carrer del Moll de la Duana, s/n",
    nav_food: "Carta",
    nav_wine: "Vinos",
    allergen: "* Disponemos de carta de alérgenos. Pídela a nuestro camarero/a.",
    hero_kicker: "Tradición mediterránea junto al puerto",
    hero_title: "La elegancia del Mediterráneo, servida frente al mar.",
    hero_description: "Una carta pensada para disfrutar el producto, la tradición y el carácter de Aduana en el Puerto de Valencia.",
    hero_cta_menu: "Ver carta",
    hero_cta_book: "Llamar al restaurante",
    service_location_label: "Ubicación",
    service_location_text: "Puerto de Valencia",
    service_hours_label: "Horario",
    service_hours_text: "Comidas y cenas de martes a sábado",
    service_phone_label: "Reservas",
    quick_nav_label: "Accesos rápidos",
    cart_badge: "Selección",
    cart_title: "Tu selección",
    cart_clear: "Vaciar",
    cart_note: "Añade platos para llevar una selección cómoda y enseñarla al camarero.",
    cart_empty: "Todavía no has añadido ningún plato.",
    cart_add: "Añadir",
    specials_badge: "Fuera de carta",
    specials_title: "También contamos con otras opciones especiales según mercado.",
    specials_intro: "No solemos tenerlas todos los días, así que te recomendamos consultar disponibilidad en sala.",
    specials_entrantes: "Entrantes",
    specials_fresh_fish: "Pescados frescos de lonja",
    specials_note: "Selección sujeta a disponibilidad diaria y producto fresco de mercado.",
    specials_close: "Cerrar",
    specials_loading: "Cargando disponibilidad...",
    specials_empty: "Sin disponibilidad especial hoy.",
    specials_error: "No se pudo cargar la disponibilidad.",

    // Categories – food
    cat_hot_tapas:  "Tapas Calientes",
    cat_cold_tapas: "Tapas Frías",
    cat_salads:     "Ensaladas",
    cat_rice:       "Arroces",
    cat_fish:       "Pescados",
    cat_meat:       "Carnes",
    cat_desserts:   "Postres",

    // Categories – wine
    cat_red_wine:   "Vinos Tintos",
    cat_rose_wine:  "Vinos Rosados",
    cat_white_wine: "Vinos Blancos",
    cat_cava:       "Cavas y Espumosos",

    // Notes
    rice_note:         "* Solo mediodía · Mínimo 2 personas · Precio por persona",
    price_ask:         "Consultar",
    bread_note:        "Pan 1,50€/ud · Salsa 2,50€",
    suggestions_note:  "Recuerde preguntar por nuestras sugerencias fuera de la carta.",

    // Hot tapas
    d_asparagus:      "Crujiente de espárragos trigueros con queso del Valle del Emme",
    d_gambita:        "Gambita rayada a la andaluza",
    d_calamar_plancha:"Calamar de playa a la plancha",
    d_pulpo:          "Pulpo a la brasa con cremoso de patata",
    d_sardina_fresca: "Sardinas frescas a la plancha",
    d_calamar_andaluza:"Calamar de playa a la andaluza",
    d_croquetas_boletus: "Croquetas caseras de boletus",
    d_croquetas_jamon:  "Croquetas caseras de jamón ibérico",
    d_gambas_ajillo:  "Gambas alistado al ajillo especial Aduana",
    d_txipirones:     "Txipirones en su tinta",
    d_sepia:          'Sepia "bruta" de playa',
    d_bravas:         "Bravas al estilo Juana",
    d_bunuelos:       "Buñuelos de bacalao con mermelada casera de tomate y ajo-aceite",

    // Cold tapas
    d_ostra:          "Ostra Francesa de Gillardeau nº2",
    d_anchoas:        'Anchoas caseras "00" con tomate valenciano',
    d_sardina_ahumada:"Sardina ahumada con tomate valenciano",
    d_ensaladilla:    "Ensaladilla rusa",
    d_gildas:         "Gildas (Pincho vasco de anchoa y piparra)",

    // Salads
    d_ventresca:      "Ensalada de ventresca con tomate valenciano, cebolla tierna y olivas marcidas",
    d_ensalada_aduana:"Ensalada Aduana",
    d_atun_aguacate:  "Ensalada templada de atún fresco y aguacate al aroma de jengibre",
    d_tabla_jamon:    "Tabla de jamón ibérico, queso de oveja y queso al romero",

    // Rice
    d_arroz_boletus:  "Arroz meloso de boletus y cigalitas",
    d_arroz_marisco:  "Arroz meloso de marisco",
    d_arroz_pollo:    "Arroz meloso de pollo campero, conejo y caracoles",
    d_arroz_pato:     "Arroz meloso de pato y acelgas",
    d_arroz_pulpo:    "Arroz meloso de pulpo, ajos tiernos y garbanzos",
    d_arroz_bogavante:"Arroz meloso de bogavante",

    // Fish
    d_corvina:        "Corvina con verduritas salteadas",
    d_bacalao:        "Bacalao asado con infusión de queso",
    d_emperador:      "Emperador con salsa Mery",
    d_salmon:         "Salmón asado con hervido valenciano",
    d_pescado_lonja:  "Pescado fresco de lonja",

    // Meat
    d_entrecotte:     "Entrecotte de vaca vieja de pasto de León madurada",
    d_carrillada:     "Carrillada de ternera con cous-cous",
    d_solomillo:      "Solomillo de ternera con foie, crema de boletus y espárragos",
    d_secreto:        "Secreto de cerdo ibérico con parmentier de patata al romero",

    // Desserts
    d_chocolate:      "Chocolate en texturas",
    d_tarta_queso:    "Tarta de queso al horno",
    d_tarta_lotus:    "Tarta cremosa de galleta lotus",
    d_tarta_tatin:    "Tarta tatín de manzana hojaldrada con helado de vainilla",
    d_brownie:        "Brownie de avellana con helado de vainilla y sopa de chocolate blanco",
    d_trufas:         "Trufas caseras de chocolate a la naranja valenciana",
    d_sorbete:        "Sorbete de limón al cava",
    d_tiramisu:       "Tiramisú",
    d_flan:           "Flan de huevo",

    // Footer
    footer_address_label: "Dirección",
    footer_hours_label:   "Horario",
    footer_contact_label: "Contacto",
    footer_hours: "Lun: 13:30–17:30<br>Mar–Sáb: 13:30–17:30 / 20:30–00:30<br>Dom: cerrado",
  },

  en: {
    lang_label: "Language:",
    since: "Since",
    tagline: "Port of Valencia · Carrer del Moll de la Duana, s/n",
    nav_food: "Menu",
    nav_wine: "Wines",
    allergen: "* We have an allergen menu available. Please ask your waiter.",
    hero_kicker: "Mediterranean tradition by the harbor",
    hero_title: "The elegance of the Mediterranean, served by the sea.",
    hero_description: "A menu designed to celebrate product, tradition and the character of Aduana in the Port of Valencia.",
    hero_cta_menu: "View menu",
    hero_cta_book: "Call the restaurant",
    service_location_label: "Location",
    service_location_text: "Port of Valencia",
    service_hours_label: "Hours",
    service_hours_text: "Lunch and dinner from Tuesday to Saturday",
    service_phone_label: "Reservations",
    quick_nav_label: "Quick links",
    cart_badge: "Selection",
    cart_title: "Your selection",
    cart_clear: "Clear",
    cart_note: "Add dishes to keep an easy selection and show it to your waiter.",
    cart_empty: "You have not added any dishes yet.",
    cart_add: "Add",
    specials_badge: "Off menu",
    specials_title: "We also offer special options depending on the daily market.",
    specials_intro: "We do not have them every day, so we recommend checking availability with our team.",
    specials_entrantes: "Starters",
    specials_fresh_fish: "Fresh market fish",
    specials_note: "Selection subject to daily availability and fresh market catch.",
    specials_close: "Close",
    specials_loading: "Loading availability...",
    specials_empty: "No special availability today.",
    specials_error: "Availability could not be loaded.",
    cat_hot_tapas:  "Hot Tapas",
    cat_cold_tapas: "Cold Tapas",
    cat_salads:     "Salads",
    cat_rice:       "Rice Dishes",
    cat_fish:       "Fish",
    cat_meat:       "Meat",
    cat_desserts:   "Desserts",
    cat_red_wine:   "Red Wines",
    cat_rose_wine:  "Rosé Wines",
    cat_white_wine: "White Wines",
    cat_cava:       "Sparkling & Cava",
    rice_note:      "* Lunchtime only · Minimum 2 people · Price per person",
    price_ask:      "Ask server",
    bread_note:     "Bread €1.50/pc · Sauce €2.50",
    suggestions_note: "Please ask about our off-menu suggestions.",
    d_asparagus:      "Crispy wild asparagus with Emmental Valley cheese",
    d_gambita:        "Andalusian-style striped shrimp",
    d_calamar_plancha:"Grilled beach squid",
    d_pulpo:          "Charcoal-grilled octopus with creamy potato",
    d_sardina_fresca: "Fresh grilled sardines",
    d_calamar_andaluza:"Andalusian-style beach squid",
    d_croquetas_boletus: "Homemade porcini mushroom croquettes",
    d_croquetas_jamon:  "Homemade Iberian ham croquettes",
    d_gambas_ajillo:  "Aduana special garlic prawns",
    d_txipirones:     "Baby squid in their ink",
    d_sepia:          '"Bruta" cuttlefish from the beach',
    d_bravas:         "Juana-style patatas bravas",
    d_bunuelos:       "Salt cod fritters with homemade tomato jam and garlic aioli",
    d_ostra:          "French Gillardeau oyster nº2",
    d_anchoas:        '"00" homemade anchovies with Valencian tomato',
    d_sardina_ahumada:"Smoked sardine with Valencian tomato",
    d_ensaladilla:    "Russian salad",
    d_gildas:         "Gildas (Basque anchovy and piparra skewer)",
    d_ventresca:      "Tuna belly salad with Valencian tomato, spring onion and marinated olives",
    d_ensalada_aduana:"Aduana salad",
    d_atun_aguacate:  "Warm fresh tuna and avocado salad with ginger",
    d_tabla_jamon:    "Iberian ham, sheep's cheese and rosemary cheese board",
    d_arroz_boletus:  "Creamy porcini and crayfish rice",
    d_arroz_marisco:  "Creamy seafood rice",
    d_arroz_pollo:    "Creamy free-range chicken, rabbit and snail rice",
    d_arroz_pato:     "Creamy duck and chard rice",
    d_arroz_pulpo:    "Creamy octopus, spring garlic and chickpea rice",
    d_arroz_bogavante:"Creamy lobster rice",
    d_corvina:        "Meagre fish with sautéed vegetables",
    d_bacalao:        "Roasted cod with cheese infusion",
    d_emperador:      "Swordfish with Mery sauce",
    d_salmon:         "Roasted salmon Valencian style",
    d_pescado_lonja:  "Fresh catch of the day",
    d_entrecotte:     "Aged León pasture-raised old cow entrecôte",
    d_carrillada:     "Veal cheek with couscous",
    d_solomillo:      "Veal tenderloin with foie, porcini cream and asparagus",
    d_secreto:        "Iberian pork secreto with rosemary potato parmentier",
    d_chocolate:      "Chocolate textures",
    d_tarta_queso:    "Baked cheesecake",
    d_tarta_lotus:    "Creamy lotus biscuit tart",
    d_tarta_tatin:    "Apple tarte tatin with vanilla ice cream",
    d_brownie:        "Hazelnut brownie with vanilla ice cream and white chocolate soup",
    d_trufas:         "Homemade Valencian orange chocolate truffles",
    d_sorbete:        "Lemon and cava sorbet",
    d_tiramisu:       "Tiramisù",
    d_flan:           "Egg flan",
    footer_address_label: "Address",
    footer_hours_label:   "Hours",
    footer_contact_label: "Contact",
    footer_hours: "Mon: 1:30–5:30 pm<br>Tue–Sat: 1:30–5:30 pm / 8:30 pm–12:30 am<br>Sun: closed",
  },

  fr: {
    lang_label: "Langue:",
    since: "Depuis",
    tagline: "Port de Valence · Carrer del Moll de la Duana, s/n",
    nav_food: "Carte",
    nav_wine: "Vins",
    allergen: "* Nous disposons d'une carte des allergènes. Demandez à votre serveur.",
    hero_kicker: "Tradition méditerranéenne au bord du port",
    hero_title: "L'élégance de la Méditerranée, servie face à la mer.",
    hero_description: "Une carte pensée pour savourer le produit, la tradition et le caractère d'Aduana au Port de Valence.",
    hero_cta_menu: "Voir la carte",
    hero_cta_book: "Appeler le restaurant",
    service_location_label: "Emplacement",
    service_location_text: "Port de Valence",
    service_hours_label: "Horaires",
    service_hours_text: "Déjeuners et dîners du mardi au samedi",
    service_phone_label: "Réservations",
    quick_nav_label: "Accès rapides",
    cart_badge: "Sélection",
    cart_title: "Votre sélection",
    cart_clear: "Vider",
    cart_note: "Ajoutez des plats pour garder une sélection pratique et la montrer au serveur.",
    cart_empty: "Vous n'avez encore ajouté aucun plat.",
    cart_add: "Ajouter",
    specials_badge: "Hors carte",
    specials_title: "Nous proposons aussi d'autres suggestions spéciales selon le marché.",
    specials_intro: "Nous ne les avons pas tous les jours, nous vous recommandons donc de consulter la disponibilité en salle.",
    specials_entrantes: "Entrées",
    specials_fresh_fish: "Poissons frais de la criée",
    specials_note: "Sélection soumise à la disponibilité quotidienne et au produit frais du marché.",
    specials_close: "Fermer",
    specials_loading: "Chargement des disponibilités...",
    specials_empty: "Aucune suggestion spéciale aujourd'hui.",
    specials_error: "Impossible de charger les disponibilités.",
    cat_hot_tapas:  "Tapas Chaudes",
    cat_cold_tapas: "Tapas Froides",
    cat_salads:     "Salades",
    cat_rice:       "Riz",
    cat_fish:       "Poissons",
    cat_meat:       "Viandes",
    cat_desserts:   "Desserts",
    cat_red_wine:   "Vins Rouges",
    cat_rose_wine:  "Vins Rosés",
    cat_white_wine: "Vins Blancs",
    cat_cava:       "Mousseux & Cava",
    rice_note:      "* Service midi uniquement · Minimum 2 personnes · Prix par personne",
    price_ask:      "Nous consulter",
    bread_note:     "Pain 1,50€/pièce · Sauce 2,50€",
    suggestions_note: "N'oubliez pas de demander nos suggestions du moment.",
    d_asparagus:      "Asperges sauvages croustillantes au fromage de la Vallée de l'Emme",
    d_gambita:        "Crevettes rayées à l'andalouse",
    d_calamar_plancha:"Calamar de plage grillé",
    d_pulpo:          "Poulpe au charbon de bois, crémeux de pomme de terre",
    d_sardina_fresca: "Sardines fraîches grillées",
    d_calamar_andaluza:"Calamar de plage à l'andalouse",
    d_croquetas_boletus: "Croquettes maison aux cèpes",
    d_croquetas_jamon:  "Croquettes maison au jambon ibérique",
    d_gambas_ajillo:  "Gambas à l'ail spécialité Aduana",
    d_txipirones:     "Supions dans leur encre",
    d_sepia:          'Seiche "bruta" de plage',
    d_bravas:         "Patatas bravas façon Juana",
    d_bunuelos:       "Beignets de morue, confiture de tomate maison et aïoli",
    d_ostra:          "Huître française Gillardeau nº2",
    d_anchoas:        'Anchois maison "00" à la tomate valencienne',
    d_sardina_ahumada:"Sardine fumée à la tomate valencienne",
    d_ensaladilla:    "Salade russe",
    d_gildas:         "Gildas (brochette basque anchois et piparra)",
    d_ventresca:      "Salade de ventrèche au tomate valencien, cébette et olives marinées",
    d_ensalada_aduana:"Salade Aduana",
    d_atun_aguacate:  "Salade tiède de thon frais et avocat au gingembre",
    d_tabla_jamon:    "Planche jambon ibérique, fromage de brebis et fromage au romarin",
    d_arroz_boletus:  "Riz crémeux aux cèpes et langoustines",
    d_arroz_marisco:  "Riz crémeux aux fruits de mer",
    d_arroz_pollo:    "Riz crémeux poulet fermier, lapin et escargots",
    d_arroz_pato:     "Riz crémeux canard et blettes",
    d_arroz_pulpo:    "Riz crémeux poulpe, ail tendre et pois chiches",
    d_arroz_bogavante:"Riz crémeux au homard",
    d_corvina:        "Maigre aux légumes sautés",
    d_bacalao:        "Morue rôtie, infusion de fromage",
    d_emperador:      "Espadon sauce Mery",
    d_salmon:         "Saumon rôti à la valencienne",
    d_pescado_lonja:  "Poisson frais du marché",
    d_entrecotte:     "Entrecôte de vache vieille de León affinée",
    d_carrillada:     "Joue de veau au couscous",
    d_solomillo:      "Filet de veau au foie gras, crème de cèpes et asperges",
    d_secreto:        "Secreto de porc ibérique, parmentier au romarin",
    d_chocolate:      "Chocolat en textures",
    d_tarta_queso:    "Tarte au fromage cuite au four",
    d_tarta_lotus:    "Tarte crémeuse au biscuit lotus",
    d_tarta_tatin:    "Tarte tatin feuilletée à la glace vanille",
    d_brownie:        "Brownie noisette, glace vanille et soupe chocolat blanc",
    d_trufas:         "Truffes maison chocolat orange valencienne",
    d_sorbete:        "Sorbet citron au cava",
    d_tiramisu:       "Tiramisu",
    d_flan:           "Flan aux œufs",
    footer_address_label: "Adresse",
    footer_hours_label:   "Horaires",
    footer_contact_label: "Contact",
    footer_hours: "Lun: 13h30–17h30<br>Mar–Sam: 13h30–17h30 / 20h30–00h30<br>Dim: fermé",
  },

  it: {
    lang_label: "Lingua:",
    since: "Dal",
    tagline: "Porto di Valencia · Carrer del Moll de la Duana, s/n",
    nav_food: "Menù",
    nav_wine: "Vini",
    allergen: "* Disponiamo di una carta degli allergeni. Chiedete al vostro cameriere.",
    hero_kicker: "Tradizione mediterranea accanto al porto",
    hero_title: "L'eleganza del Mediterraneo, servita di fronte al mare.",
    hero_description: "Un menu pensato per valorizzare il prodotto, la tradizione e il carattere di Aduana nel Porto di Valencia.",
    hero_cta_menu: "Vedi menu",
    hero_cta_book: "Chiama il ristorante",
    service_location_label: "Posizione",
    service_location_text: "Porto di Valencia",
    service_hours_label: "Orari",
    service_hours_text: "Pranzi e cene da martedì a sabato",
    service_phone_label: "Prenotazioni",
    quick_nav_label: "Accessi rapidi",
    cart_badge: "Selezione",
    cart_title: "La tua selezione",
    cart_clear: "Svuota",
    cart_note: "Aggiungi i piatti per mantenere una selezione comoda da mostrare al cameriere.",
    cart_empty: "Non hai ancora aggiunto nessun piatto.",
    cart_add: "Aggiungi",
    specials_badge: "Fuori menu",
    specials_title: "Disponiamo anche di altre proposte speciali secondo il mercato del giorno.",
    specials_intro: "Non le abbiamo tutti i giorni, quindi ti consigliamo di verificarne la disponibilità in sala.",
    specials_entrantes: "Antipasti",
    specials_fresh_fish: "Pesce fresco di mercato",
    specials_note: "Selezione soggetta a disponibilità giornaliera e prodotto fresco di mercato.",
    specials_close: "Chiudi",
    specials_loading: "Caricamento disponibilità...",
    specials_empty: "Nessuna proposta speciale oggi.",
    specials_error: "Impossibile caricare la disponibilità.",
    cat_hot_tapas:  "Tapas Calde",
    cat_cold_tapas: "Tapas Fredde",
    cat_salads:     "Insalate",
    cat_rice:       "Risi",
    cat_fish:       "Pesci",
    cat_meat:       "Carni",
    cat_desserts:   "Dolci",
    cat_red_wine:   "Vini Rossi",
    cat_rose_wine:  "Vini Rosati",
    cat_white_wine: "Vini Bianchi",
    cat_cava:       "Bollicine & Cava",
    rice_note:      "* Solo pranzo · Minimo 2 persone · Prezzo a persona",
    price_ask:      "Da concordare",
    bread_note:     "Pane €1,50/pz · Salsa €2,50",
    suggestions_note: "Ricordatevi di chiedere i nostri suggerimenti fuori menù.",
    d_asparagus:      "Asparagi selvatici croccanti con formaggio della Valle dell'Emme",
    d_gambita:        "Gamberetti striati all'andalusa",
    d_calamar_plancha:"Calamaro di spiaggia alla griglia",
    d_pulpo:          "Polpo alla brace con crema di patate",
    d_sardina_fresca: "Sardine fresche alla griglia",
    d_calamar_andaluza:"Calamaro di spiaggia all'andalusa",
    d_croquetas_boletus: "Crocchette artigianali ai porcini",
    d_croquetas_jamon:  "Crocchette artigianali al prosciutto iberico",
    d_gambas_ajillo:  "Gamberi all'aglio speciale Aduana",
    d_txipirones:     "Seppioline nel loro nero",
    d_sepia:          'Seppie "bruta" di spiaggia',
    d_bravas:         "Patate bravas stile Juana",
    d_bunuelos:       "Frittelle di baccalà con marmellata di pomodoro e aglio",
    d_ostra:          "Ostrica francese Gillardeau nº2",
    d_anchoas:        'Acciughe artigianali "00" con pomodoro valenciano',
    d_sardina_ahumada:"Sardina affumicata con pomodoro valenciano",
    d_ensaladilla:    "Insalata russa",
    d_gildas:         "Gildas (spiedino basco con acciuga e piparra)",
    d_ventresca:      "Insalata di ventresca con pomodoro valenciano, cipollotto e olive marinate",
    d_ensalada_aduana:"Insalata Aduana",
    d_atun_aguacate:  "Insalata tiepida di tonno fresco e avocado allo zenzero",
    d_tabla_jamon:    "Tagliere prosciutto iberico, pecorino e formaggio al rosmarino",
    d_arroz_boletus:  "Riso cremoso ai porcini e scampi",
    d_arroz_marisco:  "Riso cremoso ai frutti di mare",
    d_arroz_pollo:    "Riso cremoso con pollo ruspante, coniglio e lumache",
    d_arroz_pato:     "Riso cremoso con anatra e bietole",
    d_arroz_pulpo:    "Riso cremoso con polpo, aglio tenero e ceci",
    d_arroz_bogavante:"Riso cremoso all'astice",
    d_corvina:        "Corvina con verdure saltate",
    d_bacalao:        "Baccalà arrosto con infusione di formaggio",
    d_emperador:      "Pesce spada con salsa Mery",
    d_salmon:         "Salmone arrosto alla valenciana",
    d_pescado_lonja:  "Pesce fresco di mercato",
    d_entrecotte:     "Entrecôte di vacca vecchia al pascolo de León stagionata",
    d_carrillada:     "Guanciale di vitello con couscous",
    d_solomillo:      "Filetto di vitello con foie gras, crema di porcini e asparagi",
    d_secreto:        "Secreto di maiale iberico con parmentier al rosmarino",
    d_chocolate:      "Cioccolato in texture",
    d_tarta_queso:    "Cheesecake al forno",
    d_tarta_lotus:    "Torta cremosa al biscotto lotus",
    d_tarta_tatin:    "Tarte tatin di mele sfogliata con gelato alla vaniglia",
    d_brownie:        "Brownie alla nocciola con gelato alla vaniglia e zuppa di cioccolato bianco",
    d_trufas:         "Tartufi artigianali di cioccolato all'arancia valenciana",
    d_sorbete:        "Sorbetto al limone con cava",
    d_tiramisu:       "Tiramisù",
    d_flan:           "Flan alle uova",
    footer_address_label: "Indirizzo",
    footer_hours_label:   "Orari",
    footer_contact_label: "Contatto",
    footer_hours: "Lun: 13:30–17:30<br>Mar–Sab: 13:30–17:30 / 20:30–00:30<br>Dom: chiuso",
  },

  de: {
    lang_label: "Sprache:",
    since: "Seit",
    tagline: "Hafen Valencia · Carrer del Moll de la Duana, s/n",
    nav_food: "Speisekarte",
    nav_wine: "Weine",
    allergen: "* Wir haben eine Allergenkarte. Bitte fragen Sie Ihren Kellner.",
    hero_kicker: "Mediterrane Tradition am Hafen",
    hero_title: "Die Eleganz des Mittelmeers, serviert direkt am Meer.",
    hero_description: "Eine Karte, die Produkt, Tradition und den Charakter von Aduana im Hafen von Valencia in Szene setzt.",
    hero_cta_menu: "Zur Karte",
    hero_cta_book: "Restaurant anrufen",
    service_location_label: "Standort",
    service_location_text: "Hafen von Valencia",
    service_hours_label: "Öffnungszeiten",
    service_hours_text: "Mittag- und Abendservice von Dienstag bis Samstag",
    service_phone_label: "Reservierungen",
    quick_nav_label: "Schnellzugriffe",
    cart_badge: "Auswahl",
    cart_title: "Ihre Auswahl",
    cart_clear: "Leeren",
    cart_note: "Fügen Sie Gerichte hinzu, um eine praktische Auswahl zu behalten und sie dem Service zu zeigen.",
    cart_empty: "Sie haben noch keine Gerichte hinzugefügt.",
    cart_add: "Hinzufügen",
    specials_badge: "Außer Karte",
    specials_title: "Je nach Tagesmarkt bieten wir auch weitere besondere Optionen an.",
    specials_intro: "Diese haben wir nicht jeden Tag, deshalb empfehlen wir, die Verfügbarkeit vor Ort zu erfragen.",
    specials_entrantes: "Vorspeisen",
    specials_fresh_fish: "Frischer Markt- und Tagesfisch",
    specials_note: "Auswahl je nach täglicher Verfügbarkeit und frischem Marktprodukt.",
    specials_close: "Schließen",
    specials_loading: "Verfügbarkeit wird geladen...",
    specials_empty: "Heute keine besonderen Empfehlungen verfügbar.",
    specials_error: "Die Verfügbarkeit konnte nicht geladen werden.",
    cat_hot_tapas:  "Warme Tapas",
    cat_cold_tapas: "Kalte Tapas",
    cat_salads:     "Salate",
    cat_rice:       "Reisgerichte",
    cat_fish:       "Fisch",
    cat_meat:       "Fleisch",
    cat_desserts:   "Desserts",
    cat_red_wine:   "Rotweine",
    cat_rose_wine:  "Roséweine",
    cat_white_wine: "Weißweine",
    cat_cava:       "Schaumweine & Cava",
    rice_note:      "* Nur Mittagsservice · Mindest 2 Personen · Preis pro Person",
    price_ask:      "Auf Anfrage",
    bread_note:     "Brot €1,50/Stk · Sauce €2,50",
    suggestions_note: "Fragen Sie nach unseren Empfehlungen außerhalb der Karte.",
    d_asparagus:      "Knusprige Wildspargel mit Käse aus dem Emmental",
    d_gambita:        "Gestreifte Garnelen auf andalusische Art",
    d_calamar_plancha:"Gegrillter Strandtintenfisch",
    d_pulpo:          "Holzkohlengegrillter Oktopus mit Kartoffelcreme",
    d_sardina_fresca: "Frische gegrillte Sardinen",
    d_calamar_andaluza:"Strandtintenfisch auf andalusische Art",
    d_croquetas_boletus: "Hausgemachte Steinpilz-Kroketten",
    d_croquetas_jamon:  "Hausgemachte Kroketten mit iberischem Schinken",
    d_gambas_ajillo:  "Aduana Spezial-Knoblauchgarnelen",
    d_txipirones:     "Kleine Tintenfische in ihrer Tinte",
    d_sepia:          '"Bruta" Tintenfisch vom Strand',
    d_bravas:         "Patatas Bravas nach Juanas Art",
    d_bunuelos:       "Kabeljau-Krapfen mit hausgemachter Tomatenkonfitüre und Aioli",
    d_ostra:          "Französische Gillardeau-Auster nº2",
    d_anchoas:        '"00" hausgemachte Anchovis mit valencianischer Tomate',
    d_sardina_ahumada:"Geräucherte Sardine mit valencianischer Tomate",
    d_ensaladilla:    "Russischer Salat",
    d_gildas:         "Gildas (baskischer Spieß mit Anchovis und Piparra)",
    d_ventresca:      "Thunbauch-Salat mit valencianischer Tomate, Frühlingszwiebeln und marinierten Oliven",
    d_ensalada_aduana:"Aduana-Salat",
    d_atun_aguacate:  "Lauwarmer Salat aus frischem Thunfisch und Avocado mit Ingwer",
    d_tabla_jamon:    "Ibérico-Schinken, Schafskäse und Rosmarin-Käse-Platte",
    d_arroz_boletus:  "Cremiger Steinpilz- und Kaisergranat-Reis",
    d_arroz_marisco:  "Cremiger Meeresfrüchte-Reis",
    d_arroz_pollo:    "Cremiger Reis mit Freilandhuhn, Kaninchen und Schnecken",
    d_arroz_pato:     "Cremiger Enten- und Mangold-Reis",
    d_arroz_pulpo:    "Cremiger Oktopus-, Knoblauch- und Kichererbsen-Reis",
    d_arroz_bogavante:"Cremiger Hummer-Reis",
    d_corvina:        "Umberfisch mit sautiertem Gemüse",
    d_bacalao:        "Gerösteter Kabeljau mit Käseinfusion",
    d_emperador:      "Schwertfisch mit Mery-Sauce",
    d_salmon:         "Gerösteter Lachs auf valencianische Art",
    d_pescado_lonja:  "Tagesfrischer Fisch vom Markt",
    d_entrecotte:     "Gereiftes Entrecôte von alter Weidekühe aus León",
    d_carrillada:     "Kalbsbäckchen mit Couscous",
    d_solomillo:      "Kalbsfilet mit Foie gras, Steinpilzcreme und Spargel",
    d_secreto:        "Iberico-Schweinefleisch Secreto mit Kartoffelparmentier und Rosmarin",
    d_chocolate:      "Schokolade in Texturen",
    d_tarta_queso:    "Gebackener Käsekuchen",
    d_tarta_lotus:    "Cremige Lotus-Keks-Torte",
    d_tarta_tatin:    "Blätterteig-Apfeltarte Tatin mit Vanilleeis",
    d_brownie:        "Haselnuss-Brownie mit Vanilleeis und weißer Schokoladensuppe",
    d_trufas:         "Hausgemachte Schokoladen-Trüffel mit valencianischer Orange",
    d_sorbete:        "Zitronen-Cava-Sorbet",
    d_tiramisu:       "Tiramisu",
    d_flan:           "Eierflan",
    footer_address_label: "Adresse",
    footer_hours_label:   "Öffnungszeiten",
    footer_contact_label: "Kontakt",
    footer_hours: "Mo: 13:30–17:30<br>Di–Sa: 13:30–17:30 / 20:30–00:30<br>So: geschlossen",
  },
};

/* ---- Language switching ---- */
let currentLang = 'es';
let specialsCatalog = [];
let specialsStatus = 'idle';

const specialsDictionary = {
  categories: {
    Entrantes: {
      es: 'Entrantes',
      en: 'Starters',
      fr: 'Entrées',
      it: 'Antipasti',
      de: 'Vorspeisen',
    },
    Pescados: {
      es: 'Pescados',
      en: 'Fish',
      fr: 'Poissons',
      it: 'Pesce',
      de: 'Fisch',
    },
    'Pescados frescos de lonja': {
      es: 'Pescados frescos de lonja',
      en: 'Fresh market fish',
      fr: 'Poissons frais de la criée',
      it: 'Pesce fresco di mercato',
      de: 'Frischer Markt- und Tagesfisch',
    },
  },
  items: {
    'Atún marinado': {
      es: 'Atún marinado',
      en: 'Marinated tuna',
      fr: 'Thon mariné',
      it: 'Tonno marinato',
      de: 'Marinierter Thunfisch',
    },
    'Boquerones fritos': {
      es: 'Boquerones fritos',
      en: 'Fried anchovies',
      fr: 'Anchois frits',
      it: 'Acciughe fritte',
      de: 'Frittierte Sardellen',
    },
    'Huevas de sepia': {
      es: 'Huevas de sepia',
      en: 'Cuttlefish roe',
      fr: 'Oeufs de seiche',
      it: 'Uova di seppia',
      de: 'Sepia-Rogen',
    },
    Zamburiñas: {
      es: 'Zamburiñas',
      en: 'Queen scallops',
      fr: 'Pétoncles',
      it: 'Capesante',
      de: 'Kammmuscheln',
    },
    'Alcachofa valenciana con jamón y huevo': {
      es: 'Alcachofa valenciana con jamón y huevo',
      en: 'Valencian artichoke with ham and egg',
      fr: 'Artichaut valencien au jambon et oeuf',
      it: 'Carciofo valenciano con prosciutto e uovo',
      de: 'Valencianische Artischocke mit Schinken und Ei',
    },
    'Alcachofa valenciana con jamón y huevos': {
      es: 'Alcachofa valenciana con jamón y huevos',
      en: 'Valencian artichoke with ham and eggs',
      fr: 'Artichaut valencien au jambon et oeufs',
      it: 'Carciofo valenciano con prosciutto e uova',
      de: 'Valencianische Artischocke mit Schinken und Eiern',
    },
    'Steak tartar': {
      es: 'Steak tartar',
      en: 'Steak tartare',
      fr: 'Steak tartare',
      it: 'Steak tartare',
      de: 'Steak Tatar',
    },
    Lubina: {
      es: 'Lubina',
      en: 'Sea bass',
      fr: 'Bar',
      it: 'Spigola',
      de: 'Wolfsbarsch',
    },
    'Gallo San Pedro': {
      es: 'Gallo San Pedro',
      en: 'John Dory',
      fr: 'Saint-Pierre',
      it: 'Pesce San Pietro',
      de: 'Petersfisch',
    },
    Rodaballo: {
      es: 'Rodaballo',
      en: 'Turbot',
      fr: 'Turbot',
      it: 'Rombo chiodato',
      de: 'Steinbutt',
    },
    Borriquet: {
      es: 'Borriquet',
      en: 'Borriquet',
      fr: 'Borriquet',
      it: 'Borriquet',
      de: 'Borriquet',
    },
  },
};

function getSpecialsBaseLabel(value) {
  if (typeof value === 'string') {
    return value.trim();
  }

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return '';
  }

  const fallback = [value.es, value.label, value.name, value.title, value.value]
    .find(entry => typeof entry === 'string' && entry.trim());

  return fallback ? fallback.trim() : '';
}

function getSpecialsDisplayLabel(type, value) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const directValue = value[currentLang] || value.es;
    if (typeof directValue === 'string' && directValue.trim()) {
      return directValue.trim();
    }
  }

  const baseLabel = getSpecialsBaseLabel(value);
  const dictionary = type === 'category' ? specialsDictionary.categories : specialsDictionary.items;

  return dictionary[baseLabel]?.[currentLang] || dictionary[baseLabel]?.es || baseLabel;
}

function getSpecialsUiText(key) {
  return translations[currentLang]?.[key] || translations.es[key] || '';
}

function renderSpecialsStatus(status) {
  const grid = document.getElementById('specials-grid');
  if (!grid) return;

  specialsStatus = status;

  const statusKeyByState = {
    loading: 'specials_loading',
    empty: 'specials_empty',
    error: 'specials_error',
  };

  const messageKey = statusKeyByState[status];
  if (!messageKey) return;

  grid.innerHTML = '';

  const statusMessage = document.createElement('p');
  statusMessage.className = 'specials-grid__status';
  statusMessage.textContent = getSpecialsUiText(messageKey);
  grid.appendChild(statusMessage);
}

function renderSpecialsGrid() {
  const grid = document.getElementById('specials-grid');
  if (!grid || specialsStatus === 'idle') return;

  if (specialsStatus !== 'ready') {
    renderSpecialsStatus(specialsStatus);
    return;
  }

  grid.innerHTML = '';

  specialsCatalog.forEach((category, categoryIndex) => {
    const categoryLabel = getSpecialsBaseLabel(category.label);
    if (!categoryLabel) return;

    const article = document.createElement('article');
    article.className = 'specials-card';

    const title = document.createElement('p');
    title.className = 'specials-card__title';
    title.textContent = getSpecialsDisplayLabel('category', category.label);

    const list = document.createElement('ul');
    list.className = 'specials-list';

    category.items.forEach((item, itemIndex) => {
      const itemLabel = getSpecialsBaseLabel(item);
      if (!itemLabel) return;

      const li = document.createElement('li');
      li.dataset.selectionId = `special:${slugify(itemLabel)}:${categoryIndex}:${itemIndex}`;
      li.dataset.selectionKey = `special:${itemLabel}`;
      li.dataset.selectionLabel = itemLabel;

      const labelSpan = document.createElement('span');
      labelSpan.className = 'selection-source__label';
      labelSpan.textContent = getSpecialsDisplayLabel('item', item);

      li.appendChild(labelSpan);
      li.appendChild(createAddButton());
      list.appendChild(li);
    });

    if (!list.children.length) return;

    article.appendChild(title);
    article.appendChild(list);
    grid.appendChild(article);
  });

  if (!grid.children.length) {
    renderSpecialsStatus('empty');
  }
}

function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  renderSpecialsGrid();
  renderSelectionCart();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    localStorage.setItem('aduana-lang', btn.dataset.lang);
    applyTranslation(btn.dataset.lang);
  });
});

/* ---- Carta / Vinos toggle ---- */
const btnFood = document.getElementById('btn-food');
const btnWine = document.getElementById('btn-wine');
const menuFood = document.getElementById('menu-food');
const menuWine = document.getElementById('menu-wine');
const shortcuts = document.querySelector('.section-shortcuts');
const specialsModal = document.getElementById('specials-modal');
const specialsCloseButton = document.getElementById('specials-close');
const selectionCartBackdrop = document.getElementById('selection-cart-backdrop');
const selectionCart = document.getElementById('selection-cart');
const selectionCartToggle = document.getElementById('selection-cart-toggle');
const selectionCartPanel = document.getElementById('selection-cart-panel');
const selectionCartCount = document.getElementById('selection-cart-count');
const selectionCartList = document.getElementById('selection-cart-list');
const selectionCartEmpty = document.getElementById('selection-cart-empty');
const selectionCartClear = document.getElementById('selection-cart-clear');
const quickNav = document.getElementById('quick-nav');
const quickNavMenu = document.getElementById('quick-nav-menu');
const quickNavToggle = document.getElementById('quick-nav-toggle');
const CART_STORAGE_KEY = 'aduana-selection-cart';

let selectionCartItems = loadSelectionCart();

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function loadSelectionCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(item => item && item.id && item.qty > 0)
      .map(item => ({
        id: item.id,
        label: item.label,
        labelKey: item.labelKey || (String(item.id).startsWith('special:') && item.label ? `special:${item.label}` : ''),
        qty: Number(item.qty) || 1,
      }));
  } catch {
    return [];
  }
}

function saveSelectionCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(selectionCartItems));
}

function getSelectionItemLabel(item) {
  if (item.labelKey?.startsWith('special:')) {
    const specialLabel = item.labelKey.slice('special:'.length);
    return getSpecialsDisplayLabel('item', specialLabel) || item.label;
  }

  if (item.labelKey && translations[currentLang]?.[item.labelKey]) {
    return translations[currentLang][item.labelKey];
  }

  return item.label;
}

function createAddButton() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-add-btn';
  button.setAttribute('data-i18n', 'cart_add');
  button.textContent = translations[currentLang]?.cart_add || 'Añadir';
  return button;
}

function enhanceSelectionSources() {
  document.querySelectorAll('#menu-food .dish-item').forEach((item, index) => {
    if (item.querySelector('.menu-add-btn')) return;

    const nameEl = item.querySelector('.dish-name');
    if (!nameEl) return;

    item.dataset.selectionId = nameEl.dataset.i18n
      ? `menu:${nameEl.dataset.i18n}`
      : `menu:${slugify(nameEl.textContent)}:${index}`;
    item.dataset.selectionKey = nameEl.dataset.i18n || '';
    item.dataset.selectionLabel = nameEl.textContent.trim();

    item.appendChild(createAddButton());
  });
}

function openSelectionCart() {
  if (!selectionCartPanel || !selectionCartToggle || !selectionCartBackdrop) return;
  selectionCartBackdrop.hidden = false;
  selectionCartPanel.hidden = false;
  selectionCartToggle.setAttribute('aria-expanded', 'true');
}

function closeSelectionCart() {
  if (!selectionCartPanel || !selectionCartToggle || !selectionCartBackdrop) return;
  selectionCartBackdrop.hidden = true;
  selectionCartPanel.hidden = true;
  selectionCartToggle.setAttribute('aria-expanded', 'false');
}

function toggleSelectionCart() {
  if (!selectionCartPanel) return;
  if (selectionCartPanel.hidden) {
    openSelectionCart();
  } else {
    closeSelectionCart();
  }
}

function renderSelectionCart() {
  if (!selectionCartList || !selectionCartEmpty || !selectionCartCount || !selectionCartClear) return;

  const totalItems = selectionCartItems.reduce((sum, item) => sum + item.qty, 0);
  selectionCartCount.textContent = String(totalItems);
  selectionCartList.innerHTML = '';

  if (selectionCartItems.length === 0) {
    selectionCartEmpty.hidden = false;
    selectionCartClear.disabled = true;
    return;
  }

  selectionCartEmpty.hidden = true;
  selectionCartClear.disabled = false;

  selectionCartItems.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.className = 'selection-cart__item';

    const row = document.createElement('div');
    row.className = 'selection-cart__item-row';

    const name = document.createElement('span');
    name.className = 'selection-cart__item-name';
    name.textContent = getSelectionItemLabel(item);

    const qty = document.createElement('div');
    qty.className = 'selection-cart__qty';

    const decreaseButton = document.createElement('button');
    decreaseButton.type = 'button';
    decreaseButton.className = 'selection-cart__qty-btn';
    decreaseButton.dataset.action = 'decrease';
    decreaseButton.dataset.id = item.id;
    decreaseButton.textContent = '−';

    const value = document.createElement('span');
    value.className = 'selection-cart__qty-value';
    value.textContent = String(item.qty);

    const increaseButton = document.createElement('button');
    increaseButton.type = 'button';
    increaseButton.className = 'selection-cart__qty-btn';
    increaseButton.dataset.action = 'increase';
    increaseButton.dataset.id = item.id;
    increaseButton.textContent = '+';

    qty.append(decreaseButton, value, increaseButton);
    row.append(name, qty);
    cartItem.appendChild(row);
    selectionCartList.appendChild(cartItem);
  });
}

function addSelectionItem(itemData) {
  if (!itemData?.id) return;

  const existingItem = selectionCartItems.find(item => item.id === itemData.id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    selectionCartItems.push({
      id: itemData.id,
      label: itemData.label,
      labelKey: itemData.labelKey || '',
      qty: 1,
    });
  }

  saveSelectionCart();
  renderSelectionCart();
}

function updateSelectionItem(itemId, change) {
  const item = selectionCartItems.find(entry => entry.id === itemId);
  if (!item) return;

  item.qty += change;
  selectionCartItems = selectionCartItems.filter(entry => entry.qty > 0);

  saveSelectionCart();
  renderSelectionCart();
}

function clearSelectionCart() {
  selectionCartItems = [];
  saveSelectionCart();
  renderSelectionCart();
}

function getSourceItemData(source) {
  if (!source) return null;

  return {
    id: source.dataset.selectionId,
    label: source.dataset.selectionLabel || '',
    labelKey: source.dataset.selectionKey || '',
  };
}

function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const stickyOffset = window.innerWidth <= 520 ? 110 : 132;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - stickyOffset;

  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: 'smooth',
  });
}

function openSpecialsModal() {
  if (!specialsModal) return;
  specialsModal.hidden = false;
  document.body.classList.add('modal-open');
  specialsCloseButton?.focus();
}

function closeSpecialsModal() {
  if (!specialsModal) return;
  specialsModal.hidden = true;
  document.body.classList.remove('modal-open');
}

function openQuickNav() {
  if (!quickNav || !quickNavMenu || !quickNavToggle) return;
  quickNavMenu.hidden = false;
  quickNav.classList.add('quick-nav--open');
  quickNavToggle.setAttribute('aria-expanded', 'true');
}

function closeQuickNav() {
  if (!quickNav || !quickNavMenu || !quickNavToggle) return;
  quickNavMenu.hidden = true;
  quickNav.classList.remove('quick-nav--open');
  quickNavToggle.setAttribute('aria-expanded', 'false');
}

function toggleQuickNav() {
  if (!quickNavMenu) return;
  if (quickNavMenu.hidden) {
    openQuickNav();
  } else {
    closeQuickNav();
  }
}

function setActiveCard(section) {
  const showWine = section === 'wine';

  btnFood.classList.toggle('active', !showWine);
  btnWine.classList.toggle('active', showWine);
  menuFood.classList.toggle('active', !showWine);
  menuWine.classList.toggle('active', showWine);

  localStorage.setItem('aduana-active-card', section);
}

btnFood.addEventListener('click', () => {
  setActiveCard('food');
});

btnWine.addEventListener('click', () => {
  setActiveCard('wine');
  requestAnimationFrame(() => scrollToSection('menu-wine'));
});

selectionCartToggle?.addEventListener('click', event => {
  event.stopPropagation();
  toggleSelectionCart();
});

selectionCartClear?.addEventListener('click', () => {
  clearSelectionCart();
});

selectionCartBackdrop?.addEventListener('pointerdown', closeSelectionCart);

document.querySelectorAll('.shortcut-chip').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetId = href.slice(1);
    setActiveCard('food');
    requestAnimationFrame(() => scrollToSection(targetId));
  });
});

quickNavToggle?.addEventListener('click', event => {
  event.stopPropagation();
  toggleQuickNav();
});

document.addEventListener('click', event => {
  const addButton = event.target.closest('.menu-add-btn');
  if (!addButton) return;

  const source = addButton.closest('.dish-item, .specials-list li');
  const itemData = getSourceItemData(source);
  addSelectionItem(itemData);
});

selectionCartList?.addEventListener('click', event => {
  const control = event.target.closest('.selection-cart__qty-btn');
  if (!control) return;

  const itemId = control.dataset.id;
  const action = control.dataset.action;
  const change = action === 'increase' ? 1 : -1;

  updateSelectionItem(itemId, change);
});

document.querySelectorAll('.quick-nav__link').forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.dataset.target;
    const targetCard = link.dataset.card;

    closeQuickNav();

    if (targetId === 'specials') {
      openSpecialsModal();
      return;
    }

    if (targetCard === 'wine') {
      setActiveCard('wine');
      requestAnimationFrame(() => scrollToSection(targetId));
      return;
    }

    setActiveCard('food');
    requestAnimationFrame(() => scrollToSection(targetId));
  });
});

document.addEventListener('click', event => {
  if (!quickNav || quickNavMenu?.hidden) return;
  if (!quickNav.contains(event.target)) {
    closeQuickNav();
  }
});

document.querySelectorAll('[data-close-specials]').forEach(element => {
  element.addEventListener('click', closeSpecialsModal);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && specialsModal && !specialsModal.hidden) {
    closeSpecialsModal();
    return;
  }

  if (event.key === 'Escape' && quickNavMenu && !quickNavMenu.hidden) {
    closeQuickNav();
    return;
  }

  if (event.key === 'Escape' && selectionCartPanel && !selectionCartPanel.hidden) {
    closeSelectionCart();
  }
});

// ── Fuera de carta dinámico desde Google Sheets ──
const API_FUERA_DE_CARTA = 'https://script.google.com/macros/s/AKfycbx5kr9f2nja8-vigb--mBbwQd0Z_becR5hbybcXSkUU3Ng_7_QKVOikqflENRfylRuy/exec';

function normalizeSpecialsCatalog(payload) {
  if (Array.isArray(payload)) {
    return payload
      .map(entry => ({
        label: entry?.categoria || entry?.category || entry?.title || entry?.name || '',
        items: Array.isArray(entry?.platos) ? entry.platos : Array.isArray(entry?.items) ? entry.items : [],
      }))
      .filter(category => getSpecialsBaseLabel(category.label) && category.items.length);
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  return Object.entries(payload)
    .map(([label, items]) => ({
      label,
      items: Array.isArray(items) ? items : [],
    }))
    .filter(category => getSpecialsBaseLabel(category.label) && category.items.length);
}

function cargarFueraDeCarta() {
  if (!document.getElementById('specials-grid')) return;

  renderSpecialsStatus('loading');

  fetch(API_FUERA_DE_CARTA)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      return res.json();
    })
    .then(categorias => {
      specialsCatalog = normalizeSpecialsCatalog(categorias);
      specialsStatus = specialsCatalog.length ? 'ready' : 'empty';
      renderSpecialsGrid();
    })
    .catch(() => {
      specialsCatalog = [];
      renderSpecialsStatus('error');
    });
}


/* ---- Init ---- */
const savedLang = localStorage.getItem('aduana-lang') || 'es';
const savedCard = localStorage.getItem('aduana-active-card') || 'food';

applyTranslation(savedLang);
setActiveCard(savedCard);
enhanceSelectionSources();
cargarFueraDeCarta();
window.addEventListener('load', () => {
  window.setTimeout(openSpecialsModal, 220);
});
