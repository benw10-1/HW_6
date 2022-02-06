var city, region_code, country, latitude, longitude

const api_key = "286593f8a4744e7b153b7c57a9a68833"
const US_cities = {
    "New York": [
        "New York"
    ],
    "Buffalo": [
        "New York"
    ],
    "Rochester": [
        "New York",
        "Minnesota"
    ],
    "Yonkers": [
        "New York"
    ],
    "Syracuse": [
        "New York"
    ],
    "Albany": [
        "New York",
        "Oregon",
        "Georgia"
    ],
    "New Rochelle": [
        "New York"
    ],
    "Mount Vernon": [
        "New York"
    ],
    "Schenectady": [
        "New York"
    ],
    "Utica": [
        "New York"
    ],
    "White Plains": [
        "New York"
    ],
    "Hempstead": [
        "New York"
    ],
    "Troy": [
        "New York",
        "Michigan"
    ],
    "Niagara Falls": [
        "New York"
    ],
    "Binghamton": [
        "New York"
    ],
    "Freeport": [
        "New York"
    ],
    "Valley Stream": [
        "New York"
    ],
    "Los Angeles": [
        "California"
    ],
    "San Diego": [
        "California"
    ],
    "San Jose": [
        "California"
    ],
    "San Francisco": [
        "California"
    ],
    "Fresno": [
        "California"
    ],
    "Sacramento": [
        "California"
    ],
    "Long Beach": [
        "California"
    ],
    "Oakland": [
        "California"
    ],
    "Bakersfield": [
        "California"
    ],
    "Anaheim": [
        "California"
    ],
    "Santa Ana": [
        "California"
    ],
    "Riverside": [
        "California"
    ],
    "Stockton": [
        "California"
    ],
    "Chula Vista": [
        "California"
    ],
    "Irvine": [
        "California"
    ],
    "Fremont": [
        "California"
    ],
    "San Bernardino": [
        "California"
    ],
    "Modesto": [
        "California"
    ],
    "Fontana": [
        "California"
    ],
    "Oxnard": [
        "California"
    ],
    "Moreno Valley": [
        "California"
    ],
    "Huntington Beach": [
        "California"
    ],
    "Glendale": [
        "California",
        "Arizona"
    ],
    "Santa Clarita": [
        "California"
    ],
    "Garden Grove": [
        "California"
    ],
    "Oceanside": [
        "California"
    ],
    "Rancho Cucamonga": [
        "California"
    ],
    "Santa Rosa": [
        "California"
    ],
    "Ontario": [
        "California"
    ],
    "Lancaster": [
        "California",
        "Texas",
        "Pennsylvania",
        "Ohio"
    ],
    "Elk Grove": [
        "California"
    ],
    "Corona": [
        "California"
    ],
    "Palmdale": [
        "California"
    ],
    "Salinas": [
        "California"
    ],
    "Pomona": [
        "California"
    ],
    "Hayward": [
        "California"
    ],
    "Escondido": [
        "California"
    ],
    "Torrance": [
        "California"
    ],
    "Sunnyvale": [
        "California"
    ],
    "Orange": [
        "California"
    ],
    "Fullerton": [
        "California"
    ],
    "Pasadena": [
        "California",
        "Texas"
    ],
    "Thousand Oaks": [
        "California"
    ],
    "Visalia": [
        "California"
    ],
    "Simi Valley": [
        "California"
    ],
    "Concord": [
        "California",
        "North Carolina",
        "New Hampshire"
    ],
    "Roseville": [
        "California",
        "Michigan"
    ],
    "Victorville": [
        "California"
    ],
    "Santa Clara": [
        "California"
    ],
    "Vallejo": [
        "California"
    ],
    "Berkeley": [
        "California"
    ],
    "El Monte": [
        "California"
    ],
    "Downey": [
        "California"
    ],
    "Costa Mesa": [
        "California"
    ],
    "Inglewood": [
        "California"
    ],
    "Carlsbad": [
        "California"
    ],
    "San Buenaventura (Ventura)": [
        "California"
    ],
    "Fairfield": [
        "California",
        "Ohio"
    ],
    "West Covina": [
        "California"
    ],
    "Murrieta": [
        "California"
    ],
    "Richmond": [
        "California",
        "Virginia"
    ],
    "Norwalk": [
        "California",
        "Connecticut"
    ],
    "Antioch": [
        "California"
    ],
    "Temecula": [
        "California"
    ],
    "Burbank": [
        "California"
    ],
    "Daly City": [
        "California"
    ],
    "Rialto": [
        "California"
    ],
    "Santa Maria": [
        "California"
    ],
    "El Cajon": [
        "California"
    ],
    "San Mateo": [
        "California"
    ],
    "Clovis": [
        "California",
        "New Mexico"
    ],
    "Compton": [
        "California"
    ],
    "Jurupa Valley": [
        "California"
    ],
    "Vista": [
        "California"
    ],
    "South Gate": [
        "California"
    ],
    "Mission Viejo": [
        "California"
    ],
    "Vacaville": [
        "California"
    ],
    "Carson": [
        "California"
    ],
    "Hesperia": [
        "California"
    ],
    "Santa Monica": [
        "California"
    ],
    "Westminster": [
        "California",
        "Colorado"
    ],
    "Redding": [
        "California"
    ],
    "Santa Barbara": [
        "California"
    ],
    "Chico": [
        "California"
    ],
    "Newport Beach": [
        "California"
    ],
    "San Leandro": [
        "California"
    ],
    "San Marcos": [
        "California",
        "Texas"
    ],
    "Whittier": [
        "California"
    ],
    "Hawthorne": [
        "California"
    ],
    "Citrus Heights": [
        "California"
    ],
    "Tracy": [
        "California"
    ],
    "Alhambra": [
        "California"
    ],
    "Livermore": [
        "California"
    ],
    "Buena Park": [
        "California"
    ],
    "Menifee": [
        "California"
    ],
    "Hemet": [
        "California"
    ],
    "Lakewood": [
        "California",
        "Ohio",
        "Washington",
        "Colorado"
    ],
    "Merced": [
        "California"
    ],
    "Chino": [
        "California"
    ],
    "Indio": [
        "California"
    ],
    "Redwood City": [
        "California"
    ],
    "Lake Forest": [
        "California"
    ],
    "Napa": [
        "California"
    ],
    "Tustin": [
        "California"
    ],
    "Bellflower": [
        "California"
    ],
    "Mountain View": [
        "California"
    ],
    "Chino Hills": [
        "California"
    ],
    "Baldwin Park": [
        "California"
    ],
    "Alameda": [
        "California"
    ],
    "Upland": [
        "California"
    ],
    "San Ramon": [
        "California"
    ],
    "Folsom": [
        "California"
    ],
    "Pleasanton": [
        "California"
    ],
    "Union City": [
        "California",
        "New Jersey"
    ],
    "Perris": [
        "California"
    ],
    "Manteca": [
        "California"
    ],
    "Lynwood": [
        "California"
    ],
    "Apple Valley": [
        "California",
        "Minnesota"
    ],
    "Redlands": [
        "California"
    ],
    "Turlock": [
        "California"
    ],
    "Milpitas": [
        "California"
    ],
    "Redondo Beach": [
        "California"
    ],
    "Rancho Cordova": [
        "California"
    ],
    "Yorba Linda": [
        "California"
    ],
    "Palo Alto": [
        "California"
    ],
    "Davis": [
        "California"
    ],
    "Camarillo": [
        "California"
    ],
    "Walnut Creek": [
        "California"
    ],
    "Pittsburg": [
        "California"
    ],
    "South San Francisco": [
        "California"
    ],
    "Yuba City": [
        "California"
    ],
    "San Clemente": [
        "California"
    ],
    "Laguna Niguel": [
        "California"
    ],
    "Pico Rivera": [
        "California"
    ],
    "Montebello": [
        "California"
    ],
    "Lodi": [
        "California"
    ],
    "Madera": [
        "California"
    ],
    "Santa Cruz": [
        "California"
    ],
    "La Habra": [
        "California"
    ],
    "Encinitas": [
        "California"
    ],
    "Monterey Park": [
        "California"
    ],
    "Tulare": [
        "California"
    ],
    "Cupertino": [
        "California"
    ],
    "Gardena": [
        "California"
    ],
    "National City": [
        "California"
    ],
    "Rocklin": [
        "California"
    ],
    "Petaluma": [
        "California"
    ],
    "Huntington Park": [
        "California"
    ],
    "San Rafael": [
        "California"
    ],
    "La Mesa": [
        "California"
    ],
    "Arcadia": [
        "California"
    ],
    "Fountain Valley": [
        "California"
    ],
    "Diamond Bar": [
        "California"
    ],
    "Woodland": [
        "California"
    ],
    "Santee": [
        "California"
    ],
    "Lake Elsinore": [
        "California"
    ],
    "Porterville": [
        "California"
    ],
    "Paramount": [
        "California"
    ],
    "Eastvale": [
        "California"
    ],
    "Rosemead": [
        "California"
    ],
    "Hanford": [
        "California"
    ],
    "Highland": [
        "California"
    ],
    "Brentwood": [
        "California",
        "Tennessee"
    ],
    "Novato": [
        "California"
    ],
    "Colton": [
        "California"
    ],
    "Cathedral City": [
        "California"
    ],
    "Delano": [
        "California"
    ],
    "Yucaipa": [
        "California"
    ],
    "Watsonville": [
        "California"
    ],
    "Placentia": [
        "California"
    ],
    "Glendora": [
        "California"
    ],
    "Gilroy": [
        "California"
    ],
    "Palm Desert": [
        "California"
    ],
    "Cerritos": [
        "California"
    ],
    "West Sacramento": [
        "California"
    ],
    "Aliso Viejo": [
        "California"
    ],
    "Poway": [
        "California"
    ],
    "La Mirada": [
        "California"
    ],
    "Rancho Santa Margarita": [
        "California"
    ],
    "Cypress": [
        "California"
    ],
    "Dublin": [
        "California",
        "Ohio"
    ],
    "Covina": [
        "California"
    ],
    "Azusa": [
        "California"
    ],
    "Palm Springs": [
        "California"
    ],
    "San Luis Obispo": [
        "California"
    ],
    "Ceres": [
        "California"
    ],
    "San Jacinto": [
        "California"
    ],
    "Lincoln": [
        "California",
        "Nebraska"
    ],
    "Newark": [
        "California",
        "Ohio",
        "New Jersey"
    ],
    "Lompoc": [
        "California"
    ],
    "El Centro": [
        "California"
    ],
    "Danville": [
        "California",
        "Virginia"
    ],
    "Bell Gardens": [
        "California"
    ],
    "Coachella": [
        "California"
    ],
    "Rancho Palos Verdes": [
        "California"
    ],
    "San Bruno": [
        "California"
    ],
    "Rohnert Park": [
        "California"
    ],
    "Brea": [
        "California"
    ],
    "La Puente": [
        "California"
    ],
    "Campbell": [
        "California"
    ],
    "San Gabriel": [
        "California"
    ],
    "Beaumont": [
        "California",
        "Texas"
    ],
    "Morgan Hill": [
        "California"
    ],
    "Culver City": [
        "California"
    ],
    "Calexico": [
        "California"
    ],
    "Stanton": [
        "California"
    ],
    "La Quinta": [
        "California"
    ],
    "Pacifica": [
        "California"
    ],
    "Montclair": [
        "California"
    ],
    "Oakley": [
        "California"
    ],
    "Monrovia": [
        "California"
    ],
    "Los Banos": [
        "California"
    ],
    "Martinez": [
        "California"
    ],
    "Chicago": [
        "Illinois"
    ],
    "Aurora": [
        "Illinois",
        "Colorado"
    ],
    "Rockford": [
        "Illinois"
    ],
    "Joliet": [
        "Illinois"
    ],
    "Naperville": [
        "Illinois"
    ],
    "Springfield": [
        "Illinois",
        "Ohio",
        "Massachusetts",
        "Oregon",
        "Missouri"
    ],
    "Peoria": [
        "Illinois",
        "Arizona"
    ],
    "Elgin": [
        "Illinois"
    ],
    "Waukegan": [
        "Illinois"
    ],
    "Cicero": [
        "Illinois"
    ],
    "Champaign": [
        "Illinois"
    ],
    "Bloomington": [
        "Illinois",
        "Indiana",
        "Minnesota"
    ],
    "Arlington Heights": [
        "Illinois"
    ],
    "Evanston": [
        "Illinois"
    ],
    "Decatur": [
        "Illinois",
        "Alabama"
    ],
    "Schaumburg": [
        "Illinois"
    ],
    "Bolingbrook": [
        "Illinois"
    ],
    "Palatine": [
        "Illinois"
    ],
    "Skokie": [
        "Illinois"
    ],
    "Des Plaines": [
        "Illinois"
    ],
    "Orland Park": [
        "Illinois"
    ],
    "Tinley Park": [
        "Illinois"
    ],
    "Oak Lawn": [
        "Illinois"
    ],
    "Berwyn": [
        "Illinois"
    ],
    "Mount Prospect": [
        "Illinois"
    ],
    "Normal": [
        "Illinois"
    ],
    "Wheaton": [
        "Illinois"
    ],
    "Hoffman Estates": [
        "Illinois"
    ],
    "Oak Park": [
        "Illinois"
    ],
    "Downers Grove": [
        "Illinois"
    ],
    "Elmhurst": [
        "Illinois"
    ],
    "Glenview": [
        "Illinois"
    ],
    "DeKalb": [
        "Illinois"
    ],
    "Lombard": [
        "Illinois"
    ],
    "Belleville": [
        "Illinois"
    ],
    "Moline": [
        "Illinois"
    ],
    "Buffalo Grove": [
        "Illinois"
    ],
    "Bartlett": [
        "Illinois",
        "Tennessee"
    ],
    "Urbana": [
        "Illinois"
    ],
    "Quincy": [
        "Illinois",
        "Massachusetts"
    ],
    "Crystal Lake": [
        "Illinois"
    ],
    "Plainfield": [
        "Illinois",
        "New Jersey"
    ],
    "Streamwood": [
        "Illinois"
    ],
    "Carol Stream": [
        "Illinois"
    ],
    "Romeoville": [
        "Illinois"
    ],
    "Rock Island": [
        "Illinois"
    ],
    "Hanover Park": [
        "Illinois"
    ],
    "Carpentersville": [
        "Illinois"
    ],
    "Wheeling": [
        "Illinois"
    ],
    "Park Ridge": [
        "Illinois"
    ],
    "Addison": [
        "Illinois"
    ],
    "Calumet City": [
        "Illinois"
    ],
    "Houston": [
        "Texas"
    ],
    "San Antonio": [
        "Texas"
    ],
    "Dallas": [
        "Texas"
    ],
    "Austin": [
        "Texas"
    ],
    "Fort Worth": [
        "Texas"
    ],
    "El Paso": [
        "Texas"
    ],
    "Arlington": [
        "Texas"
    ],
    "Corpus Christi": [
        "Texas"
    ],
    "Plano": [
        "Texas"
    ],
    "Laredo": [
        "Texas"
    ],
    "Lubbock": [
        "Texas"
    ],
    "Garland": [
        "Texas"
    ],
    "Irving": [
        "Texas"
    ],
    "Amarillo": [
        "Texas"
    ],
    "Grand Prairie": [
        "Texas"
    ],
    "Brownsville": [
        "Texas"
    ],
    "McKinney": [
        "Texas"
    ],
    "Mesquite": [
        "Texas"
    ],
    "McAllen": [
        "Texas"
    ],
    "Killeen": [
        "Texas"
    ],
    "Frisco": [
        "Texas"
    ],
    "Waco": [
        "Texas"
    ],
    "Carrollton": [
        "Texas"
    ],
    "Denton": [
        "Texas"
    ],
    "Midland": [
        "Texas",
        "Michigan"
    ],
    "Abilene": [
        "Texas"
    ],
    "Round Rock": [
        "Texas"
    ],
    "Odessa": [
        "Texas"
    ],
    "Wichita Falls": [
        "Texas"
    ],
    "Richardson": [
        "Texas"
    ],
    "Lewisville": [
        "Texas"
    ],
    "Tyler": [
        "Texas"
    ],
    "College Station": [
        "Texas"
    ],
    "Pearland": [
        "Texas"
    ],
    "San Angelo": [
        "Texas"
    ],
    "Allen": [
        "Texas"
    ],
    "League City": [
        "Texas"
    ],
    "Sugar Land": [
        "Texas"
    ],
    "Longview": [
        "Texas"
    ],
    "Edinburg": [
        "Texas"
    ],
    "Mission": [
        "Texas"
    ],
    "Bryan": [
        "Texas"
    ],
    "Baytown": [
        "Texas"
    ],
    "Pharr": [
        "Texas"
    ],
    "Temple": [
        "Texas"
    ],
    "Missouri City": [
        "Texas"
    ],
    "Flower Mound": [
        "Texas"
    ],
    "Harlingen": [
        "Texas"
    ],
    "North Richland Hills": [
        "Texas"
    ],
    "Victoria": [
        "Texas"
    ],
    "Conroe": [
        "Texas"
    ],
    "New Braunfels": [
        "Texas"
    ],
    "Mansfield": [
        "Texas",
        "Ohio"
    ],
    "Cedar Park": [
        "Texas"
    ],
    "Rowlett": [
        "Texas"
    ],
    "Port Arthur": [
        "Texas"
    ],
    "Euless": [
        "Texas"
    ],
    "Georgetown": [
        "Texas"
    ],
    "Pflugerville": [
        "Texas"
    ],
    "DeSoto": [
        "Texas"
    ],
    "Grapevine": [
        "Texas"
    ],
    "Bedford": [
        "Texas"
    ],
    "Galveston": [
        "Texas"
    ],
    "Cedar Hill": [
        "Texas"
    ],
    "Texas City": [
        "Texas"
    ],
    "Wylie": [
        "Texas"
    ],
    "Haltom City": [
        "Texas"
    ],
    "Keller": [
        "Texas"
    ],
    "Coppell": [
        "Texas"
    ],
    "Rockwall": [
        "Texas"
    ],
    "Huntsville": [
        "Texas",
        "Alabama"
    ],
    "Duncanville": [
        "Texas"
    ],
    "Sherman": [
        "Texas"
    ],
    "The Colony": [
        "Texas"
    ],
    "Burleson": [
        "Texas"
    ],
    "Hurst": [
        "Texas"
    ],
    "Texarkana": [
        "Texas"
    ],
    "Friendswood": [
        "Texas"
    ],
    "Weslaco": [
        "Texas"
    ],
    "Philadelphia": [
        "Pennsylvania"
    ],
    "Pittsburgh": [
        "Pennsylvania"
    ],
    "Allentown": [
        "Pennsylvania"
    ],
    "Erie": [
        "Pennsylvania"
    ],
    "Reading": [
        "Pennsylvania"
    ],
    "Scranton": [
        "Pennsylvania"
    ],
    "Bethlehem": [
        "Pennsylvania"
    ],
    "Harrisburg": [
        "Pennsylvania"
    ],
    "Altoona": [
        "Pennsylvania"
    ],
    "York": [
        "Pennsylvania"
    ],
    "State College": [
        "Pennsylvania"
    ],
    "Wilkes-Barre": [
        "Pennsylvania"
    ],
    "Phoenix": [
        "Arizona"
    ],
    "Tucson": [
        "Arizona"
    ],
    "Mesa": [
        "Arizona"
    ],
    "Chandler": [
        "Arizona"
    ],
    "Scottsdale": [
        "Arizona"
    ],
    "Gilbert": [
        "Arizona"
    ],
    "Tempe": [
        "Arizona"
    ],
    "Surprise": [
        "Arizona"
    ],
    "Yuma": [
        "Arizona"
    ],
    "Avondale": [
        "Arizona"
    ],
    "Goodyear": [
        "Arizona"
    ],
    "Flagstaff": [
        "Arizona"
    ],
    "Buckeye": [
        "Arizona"
    ],
    "Lake Havasu City": [
        "Arizona"
    ],
    "Casa Grande": [
        "Arizona"
    ],
    "Sierra Vista": [
        "Arizona"
    ],
    "Maricopa": [
        "Arizona"
    ],
    "Oro Valley": [
        "Arizona"
    ],
    "Prescott": [
        "Arizona"
    ],
    "Bullhead City": [
        "Arizona"
    ],
    "Prescott Valley": [
        "Arizona"
    ],
    "Marana": [
        "Arizona"
    ],
    "Apache Junction": [
        "Arizona"
    ],
    "Jacksonville": [
        "Florida",
        "North Carolina"
    ],
    "Miami": [
        "Florida"
    ],
    "Tampa": [
        "Florida"
    ],
    "Orlando": [
        "Florida"
    ],
    "St. Petersburg": [
        "Florida"
    ],
    "Hialeah": [
        "Florida"
    ],
    "Tallahassee": [
        "Florida"
    ],
    "Fort Lauderdale": [
        "Florida"
    ],
    "Port St. Lucie": [
        "Florida"
    ],
    "Cape Coral": [
        "Florida"
    ],
    "Pembroke Pines": [
        "Florida"
    ],
    "Hollywood": [
        "Florida"
    ],
    "Miramar": [
        "Florida"
    ],
    "Gainesville": [
        "Florida"
    ],
    "Coral Springs": [
        "Florida"
    ],
    "Miami Gardens": [
        "Florida"
    ],
    "Clearwater": [
        "Florida"
    ],
    "Palm Bay": [
        "Florida"
    ],
    "Pompano Beach": [
        "Florida"
    ],
    "West Palm Beach": [
        "Florida"
    ],
    "Lakeland": [
        "Florida"
    ],
    "Davie": [
        "Florida"
    ],
    "Miami Beach": [
        "Florida"
    ],
    "Sunrise": [
        "Florida"
    ],
    "Plantation": [
        "Florida"
    ],
    "Boca Raton": [
        "Florida"
    ],
    "Deltona": [
        "Florida"
    ],
    "Largo": [
        "Florida"
    ],
    "Deerfield Beach": [
        "Florida"
    ],
    "Palm Coast": [
        "Florida"
    ],
    "Melbourne": [
        "Florida"
    ],
    "Boynton Beach": [
        "Florida"
    ],
    "Lauderhill": [
        "Florida"
    ],
    "Weston": [
        "Florida"
    ],
    "Fort Myers": [
        "Florida"
    ],
    "Kissimmee": [
        "Florida"
    ],
    "Homestead": [
        "Florida"
    ],
    "Tamarac": [
        "Florida"
    ],
    "Delray Beach": [
        "Florida"
    ],
    "Daytona Beach": [
        "Florida"
    ],
    "North Miami": [
        "Florida"
    ],
    "Wellington": [
        "Florida"
    ],
    "North Port": [
        "Florida"
    ],
    "Jupiter": [
        "Florida"
    ],
    "Ocala": [
        "Florida"
    ],
    "Port Orange": [
        "Florida"
    ],
    "Margate": [
        "Florida"
    ],
    "Coconut Creek": [
        "Florida"
    ],
    "Sanford": [
        "Florida"
    ],
    "Sarasota": [
        "Florida"
    ],
    "Pensacola": [
        "Florida"
    ],
    "Bradenton": [
        "Florida"
    ],
    "Palm Beach Gardens": [
        "Florida"
    ],
    "Pinellas Park": [
        "Florida"
    ],
    "Coral Gables": [
        "Florida"
    ],
    "Doral": [
        "Florida"
    ],
    "Bonita Springs": [
        "Florida"
    ],
    "Apopka": [
        "Florida"
    ],
    "Titusville": [
        "Florida"
    ],
    "North Miami Beach": [
        "Florida"
    ],
    "Oakland Park": [
        "Florida"
    ],
    "Fort Pierce": [
        "Florida"
    ],
    "North Lauderdale": [
        "Florida"
    ],
    "Cutler Bay": [
        "Florida"
    ],
    "Altamonte Springs": [
        "Florida"
    ],
    "St. Cloud": [
        "Florida",
        "Minnesota"
    ],
    "Greenacres": [
        "Florida"
    ],
    "Ormond Beach": [
        "Florida"
    ],
    "Ocoee": [
        "Florida"
    ],
    "Hallandale Beach": [
        "Florida"
    ],
    "Winter Garden": [
        "Florida"
    ],
    "Aventura": [
        "Florida"
    ],
    "Indianapolis": [
        "Indiana"
    ],
    "Fort Wayne": [
        "Indiana"
    ],
    "Evansville": [
        "Indiana"
    ],
    "South Bend": [
        "Indiana"
    ],
    "Carmel": [
        "Indiana"
    ],
    "Fishers": [
        "Indiana"
    ],
    "Hammond": [
        "Indiana"
    ],
    "Gary": [
        "Indiana"
    ],
    "Muncie": [
        "Indiana"
    ],
    "Lafayette": [
        "Indiana",
        "Louisiana"
    ],
    "Terre Haute": [
        "Indiana"
    ],
    "Kokomo": [
        "Indiana"
    ],
    "Anderson": [
        "Indiana"
    ],
    "Noblesville": [
        "Indiana"
    ],
    "Greenwood": [
        "Indiana"
    ],
    "Elkhart": [
        "Indiana"
    ],
    "Mishawaka": [
        "Indiana"
    ],
    "Lawrence": [
        "Indiana",
        "Massachusetts",
        "Kansas"
    ],
    "Jeffersonville": [
        "Indiana"
    ],
    "Columbus": [
        "Indiana",
        "Ohio",
        "Georgia"
    ],
    "Portage": [
        "Indiana",
        "Michigan"
    ],
    "Cleveland": [
        "Ohio",
        "Tennessee"
    ],
    "Cincinnati": [
        "Ohio"
    ],
    "Toledo": [
        "Ohio"
    ],
    "Akron": [
        "Ohio"
    ],
    "Dayton": [
        "Ohio"
    ],
    "Parma": [
        "Ohio"
    ],
    "Canton": [
        "Ohio"
    ],
    "Youngstown": [
        "Ohio"
    ],
    "Lorain": [
        "Ohio"
    ],
    "Hamilton": [
        "Ohio"
    ],
    "Kettering": [
        "Ohio"
    ],
    "Elyria": [
        "Ohio"
    ],
    "Cuyahoga Falls": [
        "Ohio"
    ],
    "Middletown": [
        "Ohio",
        "Connecticut"
    ],
    "Euclid": [
        "Ohio"
    ],
    "Mentor": [
        "Ohio"
    ],
    "Beavercreek": [
        "Ohio"
    ],
    "Cleveland Heights": [
        "Ohio"
    ],
    "Strongsville": [
        "Ohio"
    ],
    "Findlay": [
        "Ohio"
    ],
    "Warren": [
        "Ohio",
        "Michigan"
    ],
    "Lima": [
        "Ohio"
    ],
    "Huber Heights": [
        "Ohio"
    ],
    "Westerville": [
        "Ohio"
    ],
    "Marion": [
        "Ohio"
    ],
    "Grove City": [
        "Ohio"
    ],
    "Charlotte": [
        "North Carolina"
    ],
    "Raleigh": [
        "North Carolina"
    ],
    "Greensboro": [
        "North Carolina"
    ],
    "Durham": [
        "North Carolina"
    ],
    "Winston-Salem": [
        "North Carolina"
    ],
    "Fayetteville": [
        "North Carolina",
        "Arkansas"
    ],
    "Cary": [
        "North Carolina"
    ],
    "Wilmington": [
        "North Carolina",
        "Delaware"
    ],
    "High Point": [
        "North Carolina"
    ],
    "Greenville": [
        "North Carolina",
        "South Carolina"
    ],
    "Asheville": [
        "North Carolina"
    ],
    "Gastonia": [
        "North Carolina"
    ],
    "Chapel Hill": [
        "North Carolina"
    ],
    "Rocky Mount": [
        "North Carolina"
    ],
    "Burlington": [
        "North Carolina",
        "Vermont"
    ],
    "Wilson": [
        "North Carolina"
    ],
    "Huntersville": [
        "North Carolina"
    ],
    "Kannapolis": [
        "North Carolina"
    ],
    "Apex": [
        "North Carolina"
    ],
    "Hickory": [
        "North Carolina"
    ],
    "Goldsboro": [
        "North Carolina"
    ],
    "Detroit": [
        "Michigan"
    ],
    "Grand Rapids": [
        "Michigan"
    ],
    "Sterling Heights": [
        "Michigan"
    ],
    "Ann Arbor": [
        "Michigan"
    ],
    "Lansing": [
        "Michigan"
    ],
    "Flint": [
        "Michigan"
    ],
    "Dearborn": [
        "Michigan"
    ],
    "Livonia": [
        "Michigan"
    ],
    "Westland": [
        "Michigan"
    ],
    "Farmington Hills": [
        "Michigan"
    ],
    "Kalamazoo": [
        "Michigan"
    ],
    "Wyoming": [
        "Michigan"
    ],
    "Southfield": [
        "Michigan"
    ],
    "Rochester Hills": [
        "Michigan"
    ],
    "Taylor": [
        "Michigan"
    ],
    "Pontiac": [
        "Michigan"
    ],
    "St. Clair Shores": [
        "Michigan"
    ],
    "Royal Oak": [
        "Michigan"
    ],
    "Novi": [
        "Michigan"
    ],
    "Dearborn Heights": [
        "Michigan"
    ],
    "Battle Creek": [
        "Michigan"
    ],
    "Saginaw": [
        "Michigan"
    ],
    "Kentwood": [
        "Michigan"
    ],
    "East Lansing": [
        "Michigan"
    ],
    "Lincoln Park": [
        "Michigan"
    ],
    "Muskegon": [
        "Michigan"
    ],
    "Memphis": [
        "Tennessee"
    ],
    "Nashville-Davidson": [
        "Tennessee"
    ],
    "Knoxville": [
        "Tennessee"
    ],
    "Chattanooga": [
        "Tennessee"
    ],
    "Clarksville": [
        "Tennessee"
    ],
    "Murfreesboro": [
        "Tennessee"
    ],
    "Jackson": [
        "Tennessee",
        "Mississippi"
    ],
    "Franklin": [
        "Tennessee"
    ],
    "Johnson City": [
        "Tennessee"
    ],
    "Hendersonville": [
        "Tennessee"
    ],
    "Kingsport": [
        "Tennessee"
    ],
    "Collierville": [
        "Tennessee"
    ],
    "Smyrna": [
        "Tennessee",
        "Georgia"
    ],
    "Germantown": [
        "Tennessee"
    ],
    "Boston": [
        "Massachusetts"
    ],
    "Worcester": [
        "Massachusetts"
    ],
    "Lowell": [
        "Massachusetts"
    ],
    "Cambridge": [
        "Massachusetts"
    ],
    "New Bedford": [
        "Massachusetts"
    ],
    "Brockton": [
        "Massachusetts"
    ],
    "Lynn": [
        "Massachusetts"
    ],
    "Fall River": [
        "Massachusetts"
    ],
    "Newton": [
        "Massachusetts"
    ],
    "Somerville": [
        "Massachusetts"
    ],
    "Waltham": [
        "Massachusetts"
    ],
    "Haverhill": [
        "Massachusetts"
    ],
    "Malden": [
        "Massachusetts"
    ],
    "Medford": [
        "Massachusetts",
        "Oregon"
    ],
    "Taunton": [
        "Massachusetts"
    ],
    "Chicopee": [
        "Massachusetts"
    ],
    "Weymouth Town": [
        "Massachusetts"
    ],
    "Revere": [
        "Massachusetts"
    ],
    "Peabody": [
        "Massachusetts"
    ],
    "Methuen": [
        "Massachusetts"
    ],
    "Barnstable Town": [
        "Massachusetts"
    ],
    "Pittsfield": [
        "Massachusetts"
    ],
    "Attleboro": [
        "Massachusetts"
    ],
    "Everett": [
        "Massachusetts",
        "Washington"
    ],
    "Salem": [
        "Massachusetts",
        "Oregon"
    ],
    "Westfield": [
        "Massachusetts"
    ],
    "Leominster": [
        "Massachusetts"
    ],
    "Fitchburg": [
        "Massachusetts"
    ],
    "Beverly": [
        "Massachusetts"
    ],
    "Holyoke": [
        "Massachusetts"
    ],
    "Marlborough": [
        "Massachusetts"
    ],
    "Woburn": [
        "Massachusetts"
    ],
    "Chelsea": [
        "Massachusetts"
    ],
    "Seattle": [
        "Washington"
    ],
    "Spokane": [
        "Washington"
    ],
    "Tacoma": [
        "Washington"
    ],
    "Vancouver": [
        "Washington"
    ],
    "Bellevue": [
        "Washington",
        "Nebraska"
    ],
    "Kent": [
        "Washington"
    ],
    "Renton": [
        "Washington"
    ],
    "Yakima": [
        "Washington"
    ],
    "Federal Way": [
        "Washington"
    ],
    "Spokane Valley": [
        "Washington"
    ],
    "Bellingham": [
        "Washington"
    ],
    "Kennewick": [
        "Washington"
    ],
    "Auburn": [
        "Washington",
        "Alabama"
    ],
    "Pasco": [
        "Washington"
    ],
    "Marysville": [
        "Washington"
    ],
    "Redmond": [
        "Washington"
    ],
    "Shoreline": [
        "Washington"
    ],
    "Richland": [
        "Washington"
    ],
    "Kirkland": [
        "Washington"
    ],
    "Burien": [
        "Washington"
    ],
    "Sammamish": [
        "Washington"
    ],
    "Olympia": [
        "Washington"
    ],
    "Lacey": [
        "Washington"
    ],
    "Edmonds": [
        "Washington"
    ],
    "Bremerton": [
        "Washington"
    ],
    "Puyallup": [
        "Washington"
    ],
    "Denver": [
        "Colorado"
    ],
    "Colorado Springs": [
        "Colorado"
    ],
    "Fort Collins": [
        "Colorado"
    ],
    "Thornton": [
        "Colorado"
    ],
    "Arvada": [
        "Colorado"
    ],
    "Pueblo": [
        "Colorado"
    ],
    "Centennial": [
        "Colorado"
    ],
    "Boulder": [
        "Colorado"
    ],
    "Greeley": [
        "Colorado"
    ],
    "Longmont": [
        "Colorado"
    ],
    "Loveland": [
        "Colorado"
    ],
    "Grand Junction": [
        "Colorado"
    ],
    "Broomfield": [
        "Colorado"
    ],
    "Castle Rock": [
        "Colorado"
    ],
    "Commerce City": [
        "Colorado"
    ],
    "Parker": [
        "Colorado"
    ],
    "Littleton": [
        "Colorado"
    ],
    "Northglenn": [
        "Colorado"
    ],
    "Washington": [
        "District of Columbia"
    ],
    "Baltimore": [
        "Maryland"
    ],
    "Frederick": [
        "Maryland"
    ],
    "Rockville": [
        "Maryland"
    ],
    "Gaithersburg": [
        "Maryland"
    ],
    "Bowie": [
        "Maryland"
    ],
    "Hagerstown": [
        "Maryland"
    ],
    "Annapolis": [
        "Maryland"
    ],
    "Louisville/Jefferson County": [
        "Kentucky"
    ],
    "Lexington-Fayette": [
        "Kentucky"
    ],
    "Bowling Green": [
        "Kentucky"
    ],
    "Owensboro": [
        "Kentucky"
    ],
    "Covington": [
        "Kentucky"
    ],
    "Portland": [
        "Oregon",
        "Maine"
    ],
    "Eugene": [
        "Oregon"
    ],
    "Gresham": [
        "Oregon"
    ],
    "Hillsboro": [
        "Oregon"
    ],
    "Beaverton": [
        "Oregon"
    ],
    "Bend": [
        "Oregon"
    ],
    "Corvallis": [
        "Oregon"
    ],
    "Tigard": [
        "Oregon"
    ],
    "Lake Oswego": [
        "Oregon"
    ],
    "Keizer": [
        "Oregon"
    ],
    "Oklahoma City": [
        "Oklahoma"
    ],
    "Tulsa": [
        "Oklahoma"
    ],
    "Norman": [
        "Oklahoma"
    ],
    "Broken Arrow": [
        "Oklahoma"
    ],
    "Lawton": [
        "Oklahoma"
    ],
    "Edmond": [
        "Oklahoma"
    ],
    "Moore": [
        "Oklahoma"
    ],
    "Midwest City": [
        "Oklahoma"
    ],
    "Enid": [
        "Oklahoma"
    ],
    "Stillwater": [
        "Oklahoma"
    ],
    "Muskogee": [
        "Oklahoma"
    ],
    "Milwaukee": [
        "Wisconsin"
    ],
    "Madison": [
        "Wisconsin",
        "Alabama"
    ],
    "Green Bay": [
        "Wisconsin"
    ],
    "Kenosha": [
        "Wisconsin"
    ],
    "Racine": [
        "Wisconsin"
    ],
    "Appleton": [
        "Wisconsin"
    ],
    "Waukesha": [
        "Wisconsin"
    ],
    "Eau Claire": [
        "Wisconsin"
    ],
    "Oshkosh": [
        "Wisconsin"
    ],
    "Janesville": [
        "Wisconsin"
    ],
    "West Allis": [
        "Wisconsin"
    ],
    "La Crosse": [
        "Wisconsin"
    ],
    "Sheboygan": [
        "Wisconsin"
    ],
    "Wauwatosa": [
        "Wisconsin"
    ],
    "Fond du Lac": [
        "Wisconsin"
    ],
    "New Berlin": [
        "Wisconsin"
    ],
    "Wausau": [
        "Wisconsin"
    ],
    "Brookfield": [
        "Wisconsin"
    ],
    "Greenfield": [
        "Wisconsin"
    ],
    "Beloit": [
        "Wisconsin"
    ],
    "Las Vegas": [
        "Nevada"
    ],
    "Henderson": [
        "Nevada"
    ],
    "Reno": [
        "Nevada"
    ],
    "North Las Vegas": [
        "Nevada"
    ],
    "Sparks": [
        "Nevada"
    ],
    "Carson City": [
        "Nevada"
    ],
    "Albuquerque": [
        "New Mexico"
    ],
    "Las Cruces": [
        "New Mexico"
    ],
    "Rio Rancho": [
        "New Mexico"
    ],
    "Santa Fe": [
        "New Mexico"
    ],
    "Roswell": [
        "New Mexico",
        "Georgia"
    ],
    "Farmington": [
        "New Mexico"
    ],
    "Kansas City": [
        "Missouri",
        "Kansas"
    ],
    "St. Louis": [
        "Missouri"
    ],
    "Independence": [
        "Missouri"
    ],
    "Columbia": [
        "Missouri",
        "South Carolina"
    ],
    "Lee's Summit": [
        "Missouri"
    ],
    "O'Fallon": [
        "Missouri"
    ],
    "St. Joseph": [
        "Missouri"
    ],
    "St. Charles": [
        "Missouri"
    ],
    "St. Peters": [
        "Missouri"
    ],
    "Blue Springs": [
        "Missouri"
    ],
    "Florissant": [
        "Missouri"
    ],
    "Joplin": [
        "Missouri"
    ],
    "Chesterfield": [
        "Missouri"
    ],
    "Jefferson City": [
        "Missouri"
    ],
    "Cape Girardeau": [
        "Missouri"
    ],
    "Virginia Beach": [
        "Virginia"
    ],
    "Norfolk": [
        "Virginia"
    ],
    "Chesapeake": [
        "Virginia"
    ],
    "Newport News": [
        "Virginia"
    ],
    "Alexandria": [
        "Virginia",
        "Louisiana"
    ],
    "Hampton": [
        "Virginia"
    ],
    "Roanoke": [
        "Virginia"
    ],
    "Portsmouth": [
        "Virginia"
    ],
    "Suffolk": [
        "Virginia"
    ],
    "Lynchburg": [
        "Virginia"
    ],
    "Harrisonburg": [
        "Virginia"
    ],
    "Leesburg": [
        "Virginia"
    ],
    "Charlottesville": [
        "Virginia"
    ],
    "Blacksburg": [
        "Virginia"
    ],
    "Manassas": [
        "Virginia"
    ],
    "Atlanta": [
        "Georgia"
    ],
    "Augusta-Richmond County": [
        "Georgia"
    ],
    "Savannah": [
        "Georgia"
    ],
    "Athens-Clarke County": [
        "Georgia"
    ],
    "Sandy Springs": [
        "Georgia"
    ],
    "Macon": [
        "Georgia"
    ],
    "Johns Creek": [
        "Georgia"
    ],
    "Warner Robins": [
        "Georgia"
    ],
    "Alpharetta": [
        "Georgia"
    ],
    "Marietta": [
        "Georgia"
    ],
    "Valdosta": [
        "Georgia"
    ],
    "Dunwoody": [
        "Georgia"
    ],
    "Omaha": [
        "Nebraska"
    ],
    "Grand Island": [
        "Nebraska"
    ],
    "Minneapolis": [
        "Minnesota"
    ],
    "St. Paul": [
        "Minnesota"
    ],
    "Duluth": [
        "Minnesota"
    ],
    "Brooklyn Park": [
        "Minnesota"
    ],
    "Plymouth": [
        "Minnesota"
    ],
    "Eagan": [
        "Minnesota"
    ],
    "Woodbury": [
        "Minnesota"
    ],
    "Maple Grove": [
        "Minnesota"
    ],
    "Eden Prairie": [
        "Minnesota"
    ],
    "Coon Rapids": [
        "Minnesota"
    ],
    "Burnsville": [
        "Minnesota"
    ],
    "Blaine": [
        "Minnesota"
    ],
    "Lakeville": [
        "Minnesota"
    ],
    "Minnetonka": [
        "Minnesota"
    ],
    "Edina": [
        "Minnesota"
    ],
    "St. Louis Park": [
        "Minnesota"
    ],
    "Mankato": [
        "Minnesota"
    ],
    "Maplewood": [
        "Minnesota"
    ],
    "Moorhead": [
        "Minnesota"
    ],
    "Shakopee": [
        "Minnesota"
    ],
    "Wichita": [
        "Kansas"
    ],
    "Overland Park": [
        "Kansas"
    ],
    "Olathe": [
        "Kansas"
    ],
    "Topeka": [
        "Kansas"
    ],
    "Shawnee": [
        "Kansas"
    ],
    "Manhattan": [
        "Kansas"
    ],
    "Lenexa": [
        "Kansas"
    ],
    "Salina": [
        "Kansas"
    ],
    "Hutchinson": [
        "Kansas"
    ],
    "New Orleans": [
        "Louisiana"
    ],
    "Baton Rouge": [
        "Louisiana"
    ],
    "Shreveport": [
        "Louisiana"
    ],
    "Lake Charles": [
        "Louisiana"
    ],
    "Kenner": [
        "Louisiana"
    ],
    "Bossier City": [
        "Louisiana"
    ],
    "Monroe": [
        "Louisiana"
    ],
    "Honolulu": [
        "Hawaii"
    ],
    "Anchorage": [
        "Alaska"
    ],
    "Jersey City": [
        "New Jersey"
    ],
    "Paterson": [
        "New Jersey"
    ],
    "Elizabeth": [
        "New Jersey"
    ],
    "Clifton": [
        "New Jersey"
    ],
    "Trenton": [
        "New Jersey"
    ],
    "Camden": [
        "New Jersey"
    ],
    "Passaic": [
        "New Jersey"
    ],
    "Bayonne": [
        "New Jersey"
    ],
    "East Orange": [
        "New Jersey"
    ],
    "Vineland": [
        "New Jersey"
    ],
    "New Brunswick": [
        "New Jersey"
    ],
    "Hoboken": [
        "New Jersey"
    ],
    "Perth Amboy": [
        "New Jersey"
    ],
    "West New York": [
        "New Jersey"
    ],
    "Hackensack": [
        "New Jersey"
    ],
    "Sayreville": [
        "New Jersey"
    ],
    "Kearny": [
        "New Jersey"
    ],
    "Linden": [
        "New Jersey"
    ],
    "Atlantic City": [
        "New Jersey"
    ],
    "Boise City": [
        "Idaho"
    ],
    "Nampa": [
        "Idaho"
    ],
    "Meridian": [
        "Idaho",
        "Mississippi"
    ],
    "Idaho Falls": [
        "Idaho"
    ],
    "Pocatello": [
        "Idaho"
    ],
    "Caldwell": [
        "Idaho"
    ],
    "Coeur d'Alene": [
        "Idaho"
    ],
    "Twin Falls": [
        "Idaho"
    ],
    "Birmingham": [
        "Alabama"
    ],
    "Montgomery": [
        "Alabama"
    ],
    "Mobile": [
        "Alabama"
    ],
    "Tuscaloosa": [
        "Alabama"
    ],
    "Hoover": [
        "Alabama"
    ],
    "Dothan": [
        "Alabama"
    ],
    "Florence": [
        "Alabama",
        "South Carolina"
    ],
    "Gadsden": [
        "Alabama"
    ],
    "Des Moines": [
        "Iowa"
    ],
    "Cedar Rapids": [
        "Iowa"
    ],
    "Davenport": [
        "Iowa"
    ],
    "Sioux City": [
        "Iowa"
    ],
    "Iowa City": [
        "Iowa"
    ],
    "Waterloo": [
        "Iowa"
    ],
    "Council Bluffs": [
        "Iowa"
    ],
    "Ames": [
        "Iowa"
    ],
    "West Des Moines": [
        "Iowa"
    ],
    "Dubuque": [
        "Iowa"
    ],
    "Ankeny": [
        "Iowa"
    ],
    "Urbandale": [
        "Iowa"
    ],
    "Cedar Falls": [
        "Iowa"
    ],
    "Little Rock": [
        "Arkansas"
    ],
    "Fort Smith": [
        "Arkansas"
    ],
    "Springdale": [
        "Arkansas"
    ],
    "Jonesboro": [
        "Arkansas"
    ],
    "North Little Rock": [
        "Arkansas"
    ],
    "Conway": [
        "Arkansas"
    ],
    "Rogers": [
        "Arkansas"
    ],
    "Pine Bluff": [
        "Arkansas"
    ],
    "Bentonville": [
        "Arkansas"
    ],
    "Salt Lake City": [
        "Utah"
    ],
    "West Valley City": [
        "Utah"
    ],
    "Provo": [
        "Utah"
    ],
    "West Jordan": [
        "Utah"
    ],
    "Orem": [
        "Utah"
    ],
    "Sandy": [
        "Utah"
    ],
    "Ogden": [
        "Utah"
    ],
    "St. George": [
        "Utah"
    ],
    "Layton": [
        "Utah"
    ],
    "Taylorsville": [
        "Utah"
    ],
    "South Jordan": [
        "Utah"
    ],
    "Lehi": [
        "Utah"
    ],
    "Logan": [
        "Utah"
    ],
    "Murray": [
        "Utah"
    ],
    "Draper": [
        "Utah"
    ],
    "Bountiful": [
        "Utah"
    ],
    "Riverton": [
        "Utah"
    ],
    "Roy": [
        "Utah"
    ],
    "Providence": [
        "Rhode Island"
    ],
    "Warwick": [
        "Rhode Island"
    ],
    "Cranston": [
        "Rhode Island"
    ],
    "Pawtucket": [
        "Rhode Island"
    ],
    "East Providence": [
        "Rhode Island"
    ],
    "Woonsocket": [
        "Rhode Island"
    ],
    "Gulfport": [
        "Mississippi"
    ],
    "Southaven": [
        "Mississippi"
    ],
    "Hattiesburg": [
        "Mississippi"
    ],
    "Biloxi": [
        "Mississippi"
    ],
    "Sioux Falls": [
        "South Dakota"
    ],
    "Rapid City": [
        "South Dakota"
    ],
    "Bridgeport": [
        "Connecticut"
    ],
    "New Haven": [
        "Connecticut"
    ],
    "Stamford": [
        "Connecticut"
    ],
    "Hartford": [
        "Connecticut"
    ],
    "Waterbury": [
        "Connecticut"
    ],
    "Danbury": [
        "Connecticut"
    ],
    "New Britain": [
        "Connecticut"
    ],
    "Meriden": [
        "Connecticut"
    ],
    "Bristol": [
        "Connecticut"
    ],
    "West Haven": [
        "Connecticut"
    ],
    "Milford": [
        "Connecticut"
    ],
    "Norwich": [
        "Connecticut"
    ],
    "Shelton": [
        "Connecticut"
    ],
    "Charleston": [
        "South Carolina",
        "West Virginia"
    ],
    "North Charleston": [
        "South Carolina"
    ],
    "Mount Pleasant": [
        "South Carolina"
    ],
    "Rock Hill": [
        "South Carolina"
    ],
    "Summerville": [
        "South Carolina"
    ],
    "Sumter": [
        "South Carolina"
    ],
    "Goose Creek": [
        "South Carolina"
    ],
    "Hilton Head Island": [
        "South Carolina"
    ],
    "Spartanburg": [
        "South Carolina"
    ],
    "Manchester": [
        "New Hampshire"
    ],
    "Nashua": [
        "New Hampshire"
    ],
    "Fargo": [
        "North Dakota"
    ],
    "Bismarck": [
        "North Dakota"
    ],
    "Grand Forks": [
        "North Dakota"
    ],
    "Minot": [
        "North Dakota"
    ],
    "Billings": [
        "Montana"
    ],
    "Missoula": [
        "Montana"
    ],
    "Great Falls": [
        "Montana"
    ],
    "Bozeman": [
        "Montana"
    ],
    "Dover": [
        "Delaware"
    ],
    "Cheyenne": [
        "Wyoming"
    ],
    "Casper": [
        "Wyoming"
    ],
    "Huntington": [
        "West Virginia"
    ]
}
const codes = {
    "Alabama": "AL",
    "Alaska": "AK",
    "American Samoa": "AS",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "District Of Columbia": "DC",
    "Federated States Of Micronesia": "FM",
    "Florida": "FL",
    "Georgia": "GA",
    "Guam": "GU",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Marshall Islands": "MH",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Northern Mariana Islands": "MP",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Palau": "PW",
    "Pennsylvania": "PA",
    "Puerto Rico": "PR",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virgin Islands": "VI",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
}

String.prototype.format = function () {
    var args = arguments
    
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match
    })
}

function getCurrentLocation() {
    return fetch('https://ipapi.co/json/').then(result => {
        return result.json()
    }).then(data => {
        if (!data) return

        [city, region_code, country, latitude, longitude] = [data.city, data.region_code, data.country, data.latitude, data.longitude]

        return data
    })
}


function getWeatherData(city, country=false, state=false) {
    const geo = "https://api.openweathermap.org/geo/1.0/direct?q={0}{1}{2}&limit=5&appid={3}".format(city, country ? country : "", state ? state : "", api_key)

    fetch(geo).then(result => {
        return result.json()
    }).then(data => {
        console.log(data)
        if (data.length === 0) return
        
        let max = 0
        let max_i = 0

        for (i=0; i < data.length; i++) {
            let dist = getDistanceLonLat([data.lat, data.lon], [latitude, longitude])
            if (dist > max) {
                max = dist
                max_i = i
            }
        }

        let [lat, lon] = [data[max_i].lat, data[max_i].lon]

        const weather = "https://api.openweathermap.org/data/2.5/onecall?lat={0}&lon={1}&exclude=current,minutely,hourly,alerts&appid={2}".format(lat, lon, api_key)

        fetch(weather).then(result => {
            return result.json()
        }).then(data => {
            console.log(data)
        })
    })
}
// LAW OF HAVERSINES (distance between two points on the surface of a sphere) credit: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceLonLat(pos1, pos2) {
    const R = 6371

    let [dLat, dLon] = [(pos2[0] - pos1[0]) * (Math.PI / 180), (pos2[1] - pos1[1]) * (Math.PI / 180)]

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos((pos[1])) * Math.sin(dLon/2) * Math.sin(dLon/2)

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    // radius of the earth times circumference section of a sphere between "coordinates" pos1 and pos2
    return R * c
}
