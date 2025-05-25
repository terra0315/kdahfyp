// KDAH Chatbot - Powered by Gemini AI
// Configuration for the KDAH chatbot
const kdahChatbotConfig = {
    botName: "K-DAH Assistant",
    botPersonality: {
        traits: ["knowledgeable", "proactive", "calm", "reassuring"],
        tone: "confident but calm",
        specialFeature: "provides actionable disaster management advice",
        // Added expanded personality description
        description: "K-DAH Chatbot is a companion that navigates around disaster scenarios throughout Klang and offers preparedness advice based on the situation. It combines local knowledge with practical guidance to help residents before, during, and after emergency events."
    },
    // Initial greeting messages
    greetings: [
        "Hey! I'm your K-DAH Assistant, ready to help with disaster preparedness information for Klang Valley.",
        "Hello! K-DAH Assistant here to support you with disaster response guidance for the Klang region.",
        "Welcome to K-DAH (Klang Disaster Awareness Hub). I'm here to provide local emergency information and safety resources.",
        "Greetings, K-DAH Assistant here to help you with disaster preparedness information for Klang Valley.",
        "Hi there! Your K-DAH Assistant is ready to help you with anything needed, just ask me anything!"
    ],
    // Loading messages while waiting for AI response
    loadingMessages: [
        "Analyzing your question for Klang-specific disaster information...",
        "Preparing helpful guidance based on local emergency protocols...",
        "Finding the most accurate disaster response information for Klang residents...",
        "Hold on a second, please! Finding the best answer for you..."
    ],
    // Fallback responses when API fails
    fallbackResponses: [
        "I apologize, but I'm having trouble connecting to the K-DAH knowledge base. Please try again in a moment, or contact our emergency hotline at 03-7980 5839 for urgent matters.",
        "My systems are temporarily unavailable. For urgent matters, please contact Klang emergency services directly at 999 or the K-DAH Command Center at 03-7980 5839.",
        "I'm experiencing a brief technical issue. For immediate assistance, please check the interactive map on our website or call the Flood Operations Center at 03-3342 1460."
    ],
// Suggested questions to help guide users
suggestedQuestions: [
    "What should I do during a flood in Klang?",
    "Where are the emergency shelters in Pelabuhan Klang?",
    "Emergency contacts for Klang District",
    "What's the most recommended emergency kit during a flood?",
    "Please give me the risk level for this area...?",
    "What risk level is this area...?",
    "What are the common disaster risks in Klang during the inter-monsoon period?", 
    "How can I prepare my home for heavy rainfall in Klang?", 
    "Where can I find information about road closures due to flooding in Klang?",
    "Show me educational videos about flood safety",
    "How to prepare an emergency kit video",
    "Do you have videos about flood prevention?",
    
    // General disaster preparedness
    "What essential items should be in my family's emergency kit?",
    "How do I create a family emergency communication plan?",
    "What's the difference between a disaster watch and warning?",
    "How can I make my home more resilient to different types of disasters?",
    "What special considerations should I make for elderly family members during emergencies?",
    
    // Disaster knowledge
    "What are the most common natural disasters in Malaysia?",
    "How can I help my community prepare for disasters?",
    "What should I do if I'm caught outside during a severe storm?",
    "How can I protect important documents during disasters?",
    "What mental health resources are available after experiencing a disaster?",
    
    // Action-oriented questions
    "How to volunteer for disaster relief efforts in Klang",
    "What government assistance is available after a disaster?",
    "How to report damages after a natural disaster",
    "How can I check if my area is prone to landslides?",
    "What should I do if my car is caught in rising flood waters?"
],
    // Knowledge base about K-DAH for the chatbot
    kdahInfo: {
        about: "K-DAH (Klang Disaster Awareness Hub) is a specialized platform dedicated to providing residents of Klang with real-time disaster information, emergency resources, and community support. Our mission is to enhance public safety through interactive tools and timely alerts.",
        
        mission: "K-DAH is committed to empowering Klang with real-time disaster information and community support. We enhance public safety by providing critical information needed to navigate challenging situations with confidence.",
        
        tagline: "Klang Disaster Awareness Hub - Empowering Klang with Real-Time Disaster Information and Community Support",
        
        mainFeatures: [
            "Interactive risk mapping for Klang regions",
            "Real-time disaster alerts and monitoring",
            "Community engagement tools",
            "Educational resources for disaster preparedness",
            "Comprehensive database of historical disaster events"
        ],
        
        websiteSections: {
            home: "The home section features an interactive 3D element and a region selector dropdown allowing users to quickly find information specific to their area in Klang. It showcases rotating highlights of K-DAH's main features: Maps, Chatbot, Forums, Education, and Resources.",
            
            introduction: "The introduction section explains K-DAH's mission to enhance public awareness, promote safety, and foster community resilience. It outlines the platform's approach to leveraging real-time geographic data and community engagement tools to empower Klang residents.",
            
            map: "The interactive map section is a core feature of K-DAH that provides visualization of risk zones and safe zones across Klang. Users can select specific areas, view detailed information about current risk levels, active alerts, emergency facilities, and evacuation routes. The map includes toggle options for different data layers and provides comprehensive information through interactive popups.",
            
            naturalDisasters: "This section presents comprehensive information about disasters affecting Klang, with a focus on floods (the highest risk), flash floods, landslides, thunderstorms, coastal erosion, and earthquakes. Each disaster type includes risk assessments, warning signs, statistical facts, and safety guides specific to Klang.",
            
            historicalCases: "The historical disaster cases section provides a timeline of significant disaster events in Klang from 2015 to 2022, including the Klang Valley Flash Floods (2022), Klang Monsoon Flooding (2021), Port Klang Storm Surge (2017), Kapar Landslide (2016), and Klang River Overflow (2015).",
            
            contribute: "The contribute section offers ways for users to actively participate in disaster management efforts through reporting incidents, donating to community centers, and providing feedback on the platform."
        },
        
        mapFeatures: {
            riskZones: "The map displays color-coded risk zones indicating high (red), medium (orange), and low (yellow) risk areas across Klang. These zones help residents understand potential danger areas during disasters.",
            
            safeZones: "Safe zones (marked in green) show designated evacuation areas and safer locations during emergencies. The map provides information about each safe zone's facilities and capacity.",
            
            evacuationRoutes: "Blue lines on the map indicate recommended evacuation routes that connect risk areas to nearby safe zones. These routes are carefully planned to provide the most efficient paths to safety.",
            
            facilities: "Emergency facilities including command centers, medical facilities, and relief distribution points are marked on the map with detailed information about services available at each location.",
            
            interactions: "Users can click on map elements to view detailed popups with information about risk levels, emergency contacts, facility services, and recommended actions specific to each location.",
            
            areaSelector: "A dropdown menu allows users to quickly select and focus on specific regions within Klang, automatically updating the map view and information panels."
        },
        
        alertSystem: {
            description: "K-DAH includes a localized alert panel that provides area-specific alerts, emergency facility information, and safe zone details. This system helps residents stay informed about current situations in their specific location.",
            
            alertLevels: [
                "High Risk (Red): Immediate danger requiring urgent action",
                "Medium Risk (Orange): Elevated concern requiring preparation and vigilance",
                "Low Risk (Yellow): Potential issues requiring awareness but not immediate action"
            ],
            
            updateFrequency: "The alert system is regularly updated based on real-time monitoring of weather conditions, water levels, and reports from local authorities."
        },
        
        disasterInformation: {
            floodRisk: "Flooding is Klang's most frequent natural disaster, with 70% of Klang's disasters being flood-related. High-risk areas include Port Klang, Telok Gadong, and Pandamaran. K-DAH provides specific guidance for flood preparation and response.",
            
            flashFloodRisk: "Flash floods in Klang occur rapidly with little warning, particularly in urban areas where concrete surfaces prevent water absorption. They can develop within 15-30 minutes after heavy rain and have become twice as frequent in recent years.",
            
            landslideRisk: "Landslides in Klang typically occur in hilly areas during periods of heavy rainfall. There have been 3 significant events since 2015. Warning signs include cracks appearing in hillsides, tilting trees, and sudden changes in water flow patterns.",
            
            thunderstormRisk: "Klang's tropical climate makes it susceptible to powerful thunderstorms, especially during monsoon transition periods. Malaysia experiences over 200 thunderstorm days annually, with each storm lasting about 30 minutes on average.",
            
            coastalErosionRisk: "Coastal erosion affects 29% of Klang's coastline, with 1-3m of coastline lost annually in critical areas. Vulnerable areas include Port Klang shoreline, Pulau Indah coastal regions, and the mouth of Klang River.",
            
            earthquakeRisk: "While Malaysia is not on major fault lines, Klang can occasionally feel tremors from large earthquakes in neighboring Indonesia. The risk of direct earthquake damage in Klang is low, but awareness remains important."
        },
        
        emergencyPreparedness: {
            emergencyKit: [
                "Drinking water (3 days supply)",
                "Non-perishable food",
                "First aid supplies",
                "Flashlights and batteries",
                "Important documents in waterproof container",
                "Cash in small denominations",
                "Personal hygiene items",
                "Whistle to signal for help",
                "Local maps and emergency contact list"
            ],
            
            homePreparation: [
                "Clear drains and gutters",
                "Identify evacuation routes",
                "Secure important documents",
                "Know how to shut off utilities",
                "Elevate valuable items in flood-prone areas",
                "Maintain emergency supplies"
            ],
            
            stayInformed: [
                "Follow Malaysian Meteorological Department alerts",
                "Use the MyBanjir app for flood alerts",
                "Monitor local radio stations",
                "Subscribe to K-DAH community alert systems",
                "Join local community WhatsApp groups for real-time updates"
            ],
            
            emergencyPreparednessVideos: [
                {
                    title: "Flood Safety Tips",
                    description: "Learn essential safety measures to protect yourself and your family during flood events.",
                    thumbnailUrl: "https://i.ytimg.com/vi/WtUYQZuZ4tU/hq720.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=WtUYQZuZ4tU&pp=ygUbZmxvb2Qgc2FmZXR5IHRpcHMgZm9yIGtsYW5n"
                },
                {
                    title: "How to Prepare an Emergency Kit",
                    description: "Step-by-step guide to creating a comprehensive emergency kit for natural disasters.",
                    thumbnailUrl: "https://i.ytimg.com/vi/UmiGvOha7As/hq720.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=UmiGvOha7As&pp=ygUsaG93IHRvIHByZXBhcmUgZm9yIGFuIGVtZXJnZW5jeSBkaXNhc3RlciBraXQ%3D"
                },
                {
                    title: "Home Flood Prevention Techniques",
                    description: "Practical methods to protect your home from flooding during monsoon season.",
                    thumbnailUrl: "https://i.ytimg.com/vi/C4aa9T5Fx5E/hq720.jpg",
                    videoUrl: "https://www.youtube.com/watch?v=C4aa9T5Fx5E&pp=ygUgSG9tZSBGbG9vZCBQcmV2ZW50aW9uIFRlY2huaXF1ZXM%3D"
                }
            ]
        },
        
        regions: [
            "Klang Central", "Pelabuhan Klang", "Kapar", "Taman Berkeley", "Bukit Raja", 
            "Telok Gadong", "Bandar Klang", "Taman Sri Andalas", "Pandamaran", 
            "Klang Utara", "Klang Selatan", "Pelabuhan Klang", "Bandar Botanic", 
            "Taman Sentosa", "Bandar Bukit Tinggi"
        ],
        
        regionSpecificInfo: {
            "Klang Central": {
                riskLevel: "High",
                mainRisks: ["Flooding", "Flash Floods"],
                emergencyFacilities: ["Klang Central Crisis Hub", "Flood Monitoring Tower"],
                evacuationRoutes: "Two major evacuation routes connecting to safe zones in the north"
            },
            "Port Klang": {
                riskLevel: "Medium",
                mainRisks: ["Coastal Flooding", "Storm Surge", "Coastal Erosion"],
                emergencyFacilities: ["Port Klang Disaster Response", "Maritime Safety Center"],
                evacuationRoutes: "Evacuation routes leading inland away from coastal areas"
            },
            "Kapar": {
                riskLevel: "High",
                mainRisks: ["Flooding", "Flash Floods"],
                emergencyFacilities: ["Kapar Emergency Center", "Kapar Power Plant Safety Bunker"],
                evacuationRoutes: "Multiple evacuation routes to higher ground areas"
            },
            "Taman Berkeley": {
                riskLevel: "Medium",
                mainRisks: ["Flash Floods", "Urban Drainage Issues"],
                emergencyFacilities: ["Berkeley Community Hall Emergency Center", "Taman Berkeley Clinic"],
                evacuationRoutes: "Evacuation via Jalan Kebun and Persiaran Raja Muda Musa to higher ground"
            },
            "Bukit Raja": {
                riskLevel: "Low",
                mainRisks: ["Landslides", "Flash Floods in Lower Areas"],
                emergencyFacilities: ["Bukit Raja Emergency Response Point", "Aeon Bukit Raja Assembly Center"],
                evacuationRoutes: "Evacuation possible via Federal Highway and Lebuhraya Shapadu"
            },
            "Telok Gadong": {
                riskLevel: "High",
                mainRisks: ["Severe Flooding", "Coastal Inundation", "Water Contamination"],
                emergencyFacilities: ["Telok Gadong Crisis Center", "Marine Police Outpost"],
                evacuationRoutes: "Evacuations northward via Jalan Pelabuhan and Persiaran Sultan Ibrahim"
            },
            "Bandar Klang": {
                riskLevel: "Medium",
                mainRisks: ["Urban Flooding", "Flash Floods", "Infrastructure Failure"],
                emergencyFacilities: ["Klang Municipal Council Emergency Station", "Hospital Tengku Ampuan Rahimah"],
                evacuationRoutes: "Multiple evacuation routes via major roads including Jalan Tengku Kelana and Jalan Pasar"
            },
            "Taman Sri Andalas": {
                riskLevel: "Medium",
                mainRisks: ["Flash Floods", "Drainage System Failures"],
                emergencyFacilities: ["Sri Andalas Community Center", "Klinik Kesihatan Sri Andalas"],
                evacuationRoutes: "Evacuation routes via Jalan Sri Andalas and Persiaran Bukit Raja 2 to higher elevations"
            },
            "Pandamaran": {
                riskLevel: "High",
                mainRisks: ["Severe Flooding", "Water Quality Issues after Floods", "Structural Damage"],
                emergencyFacilities: ["Pandamaran Disaster Response Hub", "Pandamaran Sports Complex Shelter"],
                evacuationRoutes: "Evacuation via Jalan Pandamaran and Jalan Sungai Bertih to higher ground"
            },
            "Klang Utara": {
                riskLevel: "Medium",
                mainRisks: ["Flash Floods", "Industrial Hazards", "River Overflow"],
                emergencyFacilities: ["North Klang Emergency Center", "Klinik Kesihatan Klang Utara"],
                evacuationRoutes: "Evacuation via North-South Highway and Jalan Meru to safer areas"
            },
            "Klang Selatan": {
                riskLevel: "Medium to High",
                mainRisks: ["Coastal Flooding", "Urban Drainage Issues", "Structural Vulnerabilities"],
                emergencyFacilities: ["South Klang Disaster Management Office", "Klinik Kesihatan Klang Selatan"],
                evacuationRoutes: "Multiple evacuation routes via Persiaran Raja Muda Musa and Jalan Langat"
            },
            "Pelabuhan Klang": {
                riskLevel: "Very High",
                mainRisks: ["Storm Surge", "Maritime Disasters", "Industrial Accidents", "Coastal Erosion"],
                emergencyFacilities: ["Port Klang Integrated Command Center", "Harbor Surveillance Station", "Marine Department Crisis Unit"],
                evacuationRoutes: "Critical evacuation routes via Jalan Pelabuhan connecting to inland safe zones"
            },
            "Bandar Botanic": {
                riskLevel: "Low to Medium",
                mainRisks: ["Localized Flooding", "Storm Drainage Issues"],
                emergencyFacilities: ["Botanic Township Management Office", "Botanic Health Clinic"],
                evacuationRoutes: "Evacuation via Persiaran Botanic and connecting to Lebuhraya KESAS"
            },
            "Bandar Sentosa": {
                riskLevel: "Medium",
                mainRisks: ["Flash Floods", "Drainage Overflow"],
                emergencyFacilities: ["Taman Sentosa Community Hall", "Klinik Kesihatan Sentosa"],
                evacuationRoutes: "Evacuation routes via Jalan Dato Yusuf Shahbudin and Jalan Tepi Sungai"
            },
            "Bandar Bukit Tinggi": {
                riskLevel: "Low",
                mainRisks: ["Minor Flash Floods", "Landslides in Peripheral Areas"],
                emergencyFacilities: ["Bukit Tinggi Emergency Point", "AEON Bukit Tinggi Assembly Center"],
                evacuationRoutes: "Multiple evacuation options via Persiaran Bukit Tinggi and Lebuhraya KESAS"
            },
            "Bandar Puteri": {
                riskLevel: "High",
                mainRisks: ["Flash Floods", "Storm Surge", "Urban Drainage Overflow"],
                emergencyFacilities: ["Bandar Puteri Flood Relief Center", "Bandar Puteri Community Hall", "Bandar Puteri Medical Center"],
                evacuationRoutes: "Evacuation via Jalan Puteri 1 and Jalan Puteri 3 to elevated areas"
            }
        },
        
        // Additional regional information
        regionalWaterRiskLevels: {
            "Klang Central": "High - 70% probability of flooding during monsoon season",
            "Port Klang": "Very High - 85% probability of coastal flooding during storms",
            "Kapar": "High - 75% probability of flooding due to river proximity",
            "Taman Berkeley": "Medium - 50% probability of flash floods during heavy rain",
            "Bukit Raja": "Low - 25% probability of localized flooding in specific lower areas",
            "Telok Gadong": "Very High - 90% probability of severe flooding due to low elevation",
            "Bandar Klang": "Medium - 45% probability of urban drainage overflow",
            "Taman Sri Andalas": "Medium - 55% probability of localized flooding",
            "Pandamaran": "High - 80% probability of flooding during extreme weather",
            "Klang Utara": "Medium - 60% probability of river-related flooding",
            "Klang Selatan": "Medium-High - 65% probability of coastal and urban flooding",
            "Pelabuhan Klang": "Very High - 90% probability of storm surge and port flooding",
            "Bandar Botanic": "Low-Medium - 30% probability of isolated flooding",
            "Taman Sentosa": "Medium - 50% probability of drainage system overflow",
            "Bandar Bukit Tinggi": "Low - 20% probability of minor flooding in specific areas",
            "Bandar Puteri": "High - 75% probability of flooding during heavy rain and storm surges"
        },
        
        regionalHistoricalEvents: {
            "Klang Central": [
                {
                    year: 2021,
                    incident: "Major Monsoon Flooding",
                    impact: "1,200 homes affected, water level reached 1.2m in low-lying areas",
                    duration: "5 days",
                    responseEffectiveness: "Moderate - evacuation completed within 24 hours"
                },
                {
                    year: 2019,
                    incident: "Flash Floods after Tropical Storm",
                    impact: "300 households affected, road damage in 5 locations",
                    duration: "2 days",
                    responseEffectiveness: "Good - rapid response teams deployed within 3 hours"
                }
            ],
            "Port Klang": [
                {
                    year: 2017,
                    incident: "Storm Surge during Northeast Monsoon",
                    impact: "Port operations halted for 4 days, coastal damage along 2km stretch",
                    duration: "4 days",
                    responseEffectiveness: "Moderate - evacuation protocols improved after this incident"
                },
                {
                    year: 2019,
                    incident: "Industrial Fire at Southern Port",
                    impact: "4 warehouses damaged, air quality affected in surrounding areas",
                    duration: "1 day",
                    responseEffectiveness: "Good - contained within 6 hours"
                }
            ],
            "Kapar": [
                {
                    year: 2020,
                    incident: "Severe Monsoon Flooding",
                    impact: "500 homes affected, power outages lasting 3 days",
                    duration: "6 days",
                    responseEffectiveness: "Moderate - evacuation challenges in remote areas"
                },
                {
                    year: 2018,
                    incident: "Industrial Chemical Leak",
                    impact: "200 residents temporarily evacuated, no significant health impacts",
                    duration: "1 day",
                    responseEffectiveness: "Good - rapid containment by hazmat teams"
                }
            ],
            "Pandamaran": [
                {
                    year: 2021,
                    incident: "Major Urban Flooding",
                    impact: "700 households affected, infrastructure damage to bridges and roads",
                    duration: "4 days",
                    responseEffectiveness: "Moderate - drainage improvements initiated after event"
                },
                {
                    year: 2018,
                    incident: "Extended Flooding Period",
                    impact: "400 homes affected, water contamination issues reported",
                    duration: "5 days",
                    responseEffectiveness: "Poor - response delays due to multiple disaster sites"
                }
            ],
            "Telok Gadong": [
                {
                    year: 2021,
                    incident: "Critical Coastal Flooding",
                    impact: "Water levels reaching 2m, 800 residents evacuated",
                    duration: "7 days",
                    responseEffectiveness: "Moderate - new coastal barriers planned after event"
                }
            ],
            "Bandar Puteri": [
                {
                    year: 2017,
                    incident: "Storm Surge and Flash Floods",
                    impact: "Over 500 households affected, significant property damage along low-lying areas",
                    duration: "3 days",
                    responseEffectiveness: "Moderate - evacuation systems improved after this incident"
                },
                {
                    year: 2020,
                    incident: "Monsoon Flooding",
                    impact: "350 homes affected, waterlogging in residential areas",
                    duration: "4 days",
                    responseEffectiveness: "Good - rapid evacuation to nearby relief centers"
                }
            ]
        },
        
        regionalEvacuationCenters: {
            "Klang Central": [
                {
                    name: "SMK Raja Mahadi Emergency Shelter",
                    capacity: 1200,
                    facilities: ["Medical station", "Food distribution", "Sleeping quarters", "Child-friendly spaces"],
                    address: "Jalan Tengku Kelana, 41000 Klang",
                    contact: "03-3371 2345"
                },
                {
                    name: "Stadium Klang",
                    capacity: 3000,
                    facilities: ["Large capacity housing", "Medical center", "Multiple restrooms", "Helicopter landing area"],
                    address: "Jalan Kelicap, 41050 Klang",
                    contact: "03-3371 5678"
                }
            ],
            "Port Klang": [
                {
                    name: "Sekolah Kebangsaan Pelabuhan Emergency Center",
                    capacity: 800,
                    facilities: ["Basic medical aid", "Food distribution", "Temporary shelter"],
                    address: "Jalan Pelabuhan, 42000 Pelabuhan Klang",
                    contact: "03-3168 1234"
                },
                {
                    name: "Port Officer Complex",
                    capacity: 500,
                    facilities: ["Administration center", "Food services", "First aid"],
                    address: "Jalan Pelabuhan Utama, 42000 Pelabuhan Klang",
                    contact: "03-3168 2222"
                }
            ],
            "Kapar": [
                {
                    name: "Dewan Dato Hamzah",
                    capacity: 1000,
                    facilities: ["Food distribution", "Medical aid", "Sleeping area"],
                    address: "Jalan Kapar Besar, 42200 Kapar",
                    contact: "03-3250 3456"
                },
                {
                    name: "SMK Kapar",
                    capacity: 1200,
                    facilities: ["Dormitory facilities", "Medical services", "Field kitchen"],
                    address: "Jalan Sekolah, 42200 Kapar",
                    contact: "03-3250 1234"
                }
            ],
            "Taman Berkeley": [
                {
                    name: "Berkeley Community Center",
                    capacity: 600,
                    facilities: ["First aid station", "Food and water", "Basic accommodations"],
                    address: "Jalan Lang, Taman Berkeley, 41150 Klang",
                    contact: "03-3341 4567"
                }
            ],
            "Pandamaran": [
                {
                    name: "SMK Pandamaran Jaya",
                    capacity: 1000,
                    facilities: ["Large halls", "Basic medical facilities", "Food services"],
                    address: "Jalan Pandamaran Jaya, 42000 Klang",
                    contact: "03-3167 8888"
                },
                {
                    name: "Dewan Komuniti Pandamaran",
                    capacity: 700,
                    facilities: ["Family areas", "Distribution center", "First aid"],
                    address: "Jalan Pandamaran, 42000 Klang",
                    contact: "03-3167 4545"
                }
            ],
            "Telok Gadong": [
                {
                    name: "SMK Telok Gadong",
                    capacity: 900,
                    facilities: ["Sleeping halls", "Medical station", "Dining area"],
                    address: "Jalan Telok Gadong, 41100 Klang",
                    contact: "03-3168 7777"
                }
            ],
            "Bandar Bukit Tinggi": [
                {
                    name: "AEON Bukit Tinggi Shopping Center",
                    capacity: 2000,
                    facilities: ["Large indoor space", "Multiple restrooms", "Food court", "Security"],
                    address: "Persiaran Bukit Tinggi, 41200 Klang",
                    contact: "03-3358 1234"
                }
            ],
            "Bandar Puteri": [
                {
                    name: "Bandar Puteri Community Hall Emergency Shelter",
                    capacity: 600,
                    facilities: ["Medical station", "Food distribution", "Sleeping quarters", "Child-friendly spaces"],
                    address: "Jalan Puteri 1, Bandar Puteri, 42000 Klang",
                    contact: "03-3169 7777"
                },
                {
                    name: "Bandar Puteri Secondary School",
                    capacity: 800,
                    facilities: ["Large capacity housing", "Basic medical support", "Multiple restrooms", "Food distribution"],
                    address: "Jalan Puteri 5, Bandar Puteri, 42000 Klang",
                    contact: "03-3169 5555"
                }
            ]
        },
        
        regionalPreparednessGuides: {
            "Coastal Areas": [
                "Secure boats and maritime equipment before storms",
                "Know your storm surge evacuation routes",
                "Keep life jackets accessible for household members",
                "Have alternative inland accommodation options identified",
                "Monitor marine weather forecasts regularly during monsoon season",
                "Install flood barriers for doorways and low-lying entry points",
                "Elevate important electrical systems and equipment",
                "Ensure proper sealing for windows and doors facing the coast",
                "Have a waterproof emergency communication device available"
            ],
            "Urban Areas": [
                "Identify the nearest elevated areas in your neighborhood",
                "Clear drains near your property regularly",
                "Prepare sandbags or flood barriers for doorways",
                "Know your building's electrical shutdown procedures",
                "Keep valuable items and documents on upper floors",
                "Create an emergency contact group with neighbors",
                "Identify multiple evacuation routes from your residence",
                "Install water-level detection alarms in prone areas",
                "Maintain an emergency supply of drinking water"
            ],
            "Riverside Communities": [
                "Monitor river level indicators during heavy rainfall",
                "Have multiple evacuation routes planned away from the river",
                "Prepare for rapid water rise within hours of heavy upstream rainfall",
                "Consider flood insurance for your property",
                "Establish neighborhood warning systems",
                "Keep boats or rafts accessible for emergency transport",
                "Store important valuables at least 1 meter above known flood levels",
                "Create a household evacuation plan that all family members know",
                "Maintain contact with upstream communities for early warnings"
            ],
            "Industrial Zones": [
                "Be familiar with facility emergency alarms and meanings",
                "Know evacuation procedures specific to chemical incidents",
                "Keep respiratory protection equipment accessible",
                "Understand wind direction implications for chemical releases",
                "Register for industrial zone emergency alerts",
                "Maintain a sealed room in your home for shelter-in-place scenarios",
                "Keep a battery-powered radio for emergency announcements",
                "Learn about chemicals used in nearby facilities and appropriate responses",
                "Have multiple evacuation routes planned in different directions"
            ],
            "Flood-Prone Areas": [
                "Elevate furniture and electrical items above expected flood levels",
                "Install check valves in plumbing to prevent backflow",
                "Consider permanent home modifications like raising the entire structure",
                "Have a sump pump with backup power available",
                "Create barriers to prevent erosion around your property",
                "Keep emergency supplies in waterproof containers",
                "Disconnect electrical appliances during flood warnings",
                "Know how to shut off main utilities quickly",
                "Consider relocating to safer areas during high-risk monsoon periods"
            ],
            "Hilly Regions": [
                "Watch for warning signs of landslides (tilting trees, cracks in ground, etc.)",
                "Avoid building near steep slopes or drainage ways",
                "Plant ground cover on slopes to prevent erosion",
                "Install flexible pipe fittings to resist breakage",
                "Create retaining walls or terraced landscaping on slopes",
                "Have evacuation routes that avoid crossing landslide-prone areas",
                "Monitor rainfall intensity as it relates to landslide risk",
                "Be aware of debris flow channels and avoid them during storms",
                "Listen for unusual sounds that might indicate moving debris"
            ]
        },
        
        regionalAdditionalInfo: {
            "Klang Central": {
                keyLandmarks: ["Istana Alam Shah", "Church of Our Lady of Lourdes", "Klang Fire Station"],
                safeZones: ["Taman Rakyat Park (elevated)", "Stadium Klang Complex", "Hospital Klang grounds"],
                floodProneSections: ["Areas near Sungai Klang", "Low-lying sections of Jalan Tengku Kelana", "Parts of Little India"],
                communityGroups: ["Klang Central Disaster Readiness Committee", "Klang Community Watch"]
            },
            "Port Klang": {
                keyLandmarks: ["Northport Terminal", "Boustead Cruise Centre", "West Port"],
                safeZones: ["Port Administration Complex", "Pulau Indah Industrial Park (elevated sections)"],
                floodProneSections: ["Coastal roads", "Kampung Teluk Gong", "Pulau Ketam Ferry Terminal area"],
                communityGroups: ["Port Klang Maritime Safety Network", "Coastal Community Alert System"]
            },
            "Kapar": {
                keyLandmarks: ["Kapar Power Station", "Taman Sentosa", "Kapar Health Clinic"],
                safeZones: ["Kapar Sports Complex", "SMK Kapar", "Elevated areas near Jalan Kapar-Kuala Selangor"],
                floodProneSections: ["Areas near Sungai Kapar Kecil", "Kampung Tok Muda", "Low-lying sections of Taman Sentosa"],
                communityGroups: ["Kapar Disaster Committee", "Kapar Power Plant Safety Network"]
            },
            "Pandamaran": {
                keyLandmarks: ["Pandamaran Sports Complex", "Pandamaran Chinese Primary School", "Pandamaran Lake Park"],
                safeZones: ["Pandamaran Sports Complex", "Elevated areas near Jalan Pandamaran"],
                floodProneSections: ["Areas near Sungai Aur", "Low-lying sections of Taman Chi Liung", "Parts of Jalan Chan Ah Choo"],
                communityGroups: ["Pandamaran Residents Association", "Taman Chi Liung Community Watch"]
            },
            "Taman Berkeley": {
                keyLandmarks: ["Berkeley Community Hall", "Berkeley Commercial Center", "Taman Berkeley Mosque"],
                safeZones: ["Berkeley Community Center", "SMK Taman Berkeley (upper levels)", "Berkeley Roundabout area"],
                floodProneSections: ["Areas near drainage canals", "Berkeley Garden low-lying streets", "Berkeley Avenue junction"],
                communityGroups: ["Berkeley Residents Association", "Berkeley Disaster Preparedness Group"]
            },
            "Bukit Raja": {
                keyLandmarks: ["Bukit Raja Industrial Park", "Aeon Bukit Raja", "Klang Parade"],
                safeZones: ["Aeon Bukit Raja Complex", "Elevated areas in industrial park", "Fraser Business Park"],
                floodProneSections: ["Limited areas near construction zones", "Industrial park drainage outlets"],
                communityGroups: ["Bukit Raja Business Association", "Resident Alert Network"]
            },
            "Telok Gadong": {
                keyLandmarks: ["Telok Gadong Fishing Village", "SMK Telok Gadong", "Kota Bridge"],
                safeZones: ["SMK Telok Gadong", "Kompleks Sukan Telok Gadong", "Elevated areas near main roads"],
                floodProneSections: ["Areas near Telok Gadong river mouth", "Low-lying fishing village sections", "Coastal roadways"],
                communityGroups: ["Telok Gadong Fisher Association", "Coastal Alert Network"]
            },
            "Bandar Klang": {
                keyLandmarks: ["Royal Klang Town Heritage Walk", "Little India", "Klang Railway Station"],
                safeZones: ["Klang Municipal Council Building", "Hospital Tengku Ampuan Rahimah grounds", "Plaza Metro Klang"],
                floodProneSections: ["Areas near Sungai Klang intersection", "Parts of Jalan Tengku Kelana", "Low-lying sections of Little India"],
                communityGroups: ["Bandar Klang Heritage Preservation Group", "Klang Business District Committee"]
            },
            "Taman Sri Andalas": {
                keyLandmarks: ["Sri Andalas Commercial Center", "Sri Andalas Health Clinic", "Sri Andalas School Complex"],
                safeZones: ["Sri Andalas Community Hall", "Elevated residential blocks", "Sri Andalas Secondary School"],
                floodProneSections: ["Areas near drainage canals", "Low-lying sections near Jalan Sri Andalas", "Sections bordering Sungai Klang"],
                communityGroups: ["Sri Andalas Resident Committee", "Sri Andalas Community Watch"]
            },
            "Klang Utara": {
                keyLandmarks: ["North Klang Industrial Park", "Klang North Bus Terminal", "North Klang Mall"],
                safeZones: ["Stadium Mini Klang Utara", "Elevated sections of Jalan Meru", "North Klang Community Center"],
                floodProneSections: ["Areas near Sungai Klang North branch", "Industrial lowlands", "Meru lowland residential areas"],
                communityGroups: ["Klang North Resident Association", "Meru Community Network"]
            },
            "Klang Selatan": {
                keyLandmarks: ["South Klang Plaza", "South Klang Terminal", "Klang Southern Industrial Park"],
                safeZones: ["Sekolah Menengah Klang Selatan grounds", "South Klang Community Complex", "Elevated commercial areas"],
                floodProneSections: ["Coastal lowlands", "Areas near Sungai Klang South branch", "Selected industrial zones"],
                communityGroups: ["South Klang Residents Coalition", "South Industrial Safety Network"]
            },
            "Pelabuhan Klang": {
                keyLandmarks: ["Klang Port Authority Building", "Northport", "Westport", "Boustead Cruise Centre"],
                safeZones: ["Port Administration Complex", "Pulau Indah Industrial Park (upper sections)", "Port Control Tower area"],
                floodProneSections: ["Pulau Ketam Ferry Terminal", "Coastal storage facilities", "North Port lower sections"],
                communityGroups: ["Port Workers Safety Association", "Maritime Community Alliance"]
            },
            "Bandar Botanic": {
                keyLandmarks: ["Botanic Township Center", "EcoWorld Gallery", "Botanic Commercial Hub"],
                safeZones: ["Botanic Township Management Office", "EcoWorld Complex", "Central elevated residential areas"],
                floodProneSections: ["Areas near project boundaries", "New development drainage points", "Limited pond overflow areas"],
                communityGroups: ["Botanic Residents Association", "Botanic Garden Neighborhood Watch"]
            },
            "Taman Sentosa": {
                keyLandmarks: ["Sentosa Commercial Complex", "Klinik Kesihatan Sentosa", "Sentosa Mosque"],
                safeZones: ["Taman Sentosa Community Hall", "Sekolah Jenis Kebangsaan (C) Hin Hua", "Elevated residential blocks"],
                floodProneSections: ["Areas near Sungai Rasa", "Low-lying streets near Sentosa Boulevard", "Sections near drainage canals"],
                communityGroups: ["Taman Sentosa Resident Committee", "Sentosa Alert System"]
            },
            "Bandar Bukit Tinggi": {
                keyLandmarks: ["AEON Bukit Tinggi", "Bukit Tinggi Medical Center", "GM Klang Wholesale City"],
                safeZones: ["AEON Bukit Tinggi Complex", "Bukit Tinggi Commercial Centre", "Bandar Parklands"],
                floodProneSections: ["Limited areas near drainage canals", "Sections near construction sites"],
                communityGroups: ["Bukit Tinggi Residents Association", "Parkland Community Network"]
            },
            "Bandar Puteri": {
                keyLandmarks: ["Bandar Puteri Community Center", "Bandar Puteri Medical Center", "Jalan Puteri Commercial Hub"],
                safeZones: ["Bandar Puteri Community Hall", "Secondary School Complex (elevated)", "Central residential highlands"],
                floodProneSections: ["Areas near water drainage systems", "Low-lying residential blocks", "Sections near main canal"],
                communityGroups: ["Bandar Puteri Resident Committee", "Bandar Puteri Disaster Response Team"]
            }
        },
        
        communityFeatures: {
            forum: "K-DAH provides a community forum where residents can share knowledge, discuss disaster preparedness strategies, and stay informed about upcoming safety events in Klang.",
            
            reportingSystem: "Users can contribute by reporting incidents in their area, helping K-DAH track and respond to disasters more effectively.",
            
            surveyForm: "A comprehensive survey form allows residents to provide detailed information about disaster impacts and community needs. Users can also contribute to the Klang community by choosing to donate to the Klang Disaster Relief Fund.",
            
            educationalResources: "K-DAH offers educational materials and workshops on disaster preparedness specific to Klang's unique geographic and climate conditions."
        },
        
        emergencyContacts: {
            national: "999",
            floodCenter: "03-3342 1460",
            commandCenter: "03-7980 5839",
            fireRescue: "03-3371 2020",
            klangFire: "03-3371 2020"
        }
    }
};

// Main Chatbot Class
class KDAHChatbot {
    constructor(config) {
        this.config = config;
        this.isOpen = false;
        this.conversationHistory = [];
        this.apiKey = 'AIzaSyCvpemaJsZnDzwrgaYUYUq85JIUaWL4x4Y'; // Set API key directly
        this.isWaitingForResponse = false;
        this.isFullscreen = false;
        this.areSuggestionsVisible = true;
        this.websiteData = {}; // Will store data extracted from the website

        this.createUI();
        this.setupEventListeners();
        this.extractWebsiteInformation(); // Extract information from the website
        this.excludeFromLenis(); // Prevent Lenis from controlling chatbot scrolling
    }

    // Extract relevant information from the website
    extractWebsiteInformation() {
        this.websiteData = {
            // Extract region data from the map section if available
            regions: this.extractRegionData(),
            // Extract emergency contacts if available
            emergencyContacts: this.extractEmergencyContacts(),
            // Extract disaster types from disaster carousel
            disasterTypes: this.extractDisasterTypes(),
            // Extract current risks if available
            currentRisks: this.extractCurrentRisks(),
            // Extract historical disaster data
            historicalData: this.extractHistoricalData(),
            // Extract educational videos
            educationalVideos: this.extractEducationalVideos()
        };
        
        console.log('Extracted website data:', this.websiteData);
    }
    
    // Extract region data from the map/dropdown on the page
    extractRegionData() {
        const regions = [];
        const areaSelectors = document.querySelectorAll('#areaSelector option, #inputState option');
        
        areaSelectors.forEach(option => {
            const value = option.value;
            if (value && value !== 'SelectState' && value !== '') {
                regions.push({
                    name: option.textContent,
                    value: option.value
                });
            }
        });
        
        return regions;
    }
    
    // Extract emergency contacts from the page
    extractEmergencyContacts() {
        const contacts = {};
        
        // Try to find emergency contact information in the page content
        const emergencyContent = document.querySelector('#emergency-content');
        if (emergencyContent) {
            // Extract contacts from dedicated emergency section
            const contactElements = emergencyContent.querySelectorAll('p, li');
            contactElements.forEach(element => {
                const text = element.textContent;
                const match = text.match(/([^:]+):\s*(\d[\d\s-]+)/);
                if (match) {
                    contacts[match[1].trim()] = match[2].trim();
                }
            });
        } else {
            // Fallback to searching for contact patterns in the whole page
            const contentDivs = document.querySelectorAll('.content p, .about p, section p');
            contentDivs.forEach(div => {
                const text = div.textContent;
                if (text.includes('Emergency') || text.includes('Contact') || text.includes('Call')) {
                    const phoneMatches = text.match(/(\d{2,3}[-\s]?\d{3,4}[-\s]?\d{4})/g);
                    if (phoneMatches) {
                        contacts['Emergency Number'] = phoneMatches[0];
                    }
                }
            });
        }
        
        return Object.keys(contacts).length ? contacts : this.config.kdahInfo.emergencyContacts;
    }
    
    // Extract disaster types from the disaster carousel section
    extractDisasterTypes() {
        const disasters = [];
        
        // Look for disaster cards or similar elements
        const disasterElements = document.querySelectorAll('.disaster-card, .swiper-slide');
        disasterElements.forEach(element => {
            const title = element.querySelector('h3, h4')?.textContent;
            if (title) {
                const riskMatch = element.textContent.match(/risk/i);
                const descriptionElements = element.querySelectorAll('p');
                let description = '';
                
                if (descriptionElements.length) {
                    description = descriptionElements[0].textContent;
                }
                
                disasters.push({
                    type: title.replace(/\s*\([^)]*\)/g, '').trim(), // Remove anything in parentheses
                    risk: riskMatch ? 'mentioned' : 'unknown',
                    description: description.substring(0, 100) + (description.length > 100 ? '...' : '')
                });
            }
        });
        
        return disasters;
    }
    
    // Extract current risk information
    extractCurrentRisks() {
        const risks = {};
        
        // Look for risk indicators on the page
        const riskElements = document.querySelectorAll('[id*="risk"], [class*="risk"], .alert-item');
        riskElements.forEach(element => {
            const areaMatch = element.textContent.match(/([A-Za-z\s]+)(?:\s*:|\s*-)\s*(high|medium|low)\s*risk/i);
            if (areaMatch) {
                risks[areaMatch[1].trim()] = areaMatch[2].toLowerCase();
            }
        });
        
        return risks;
    }
    
    // Extract historical disaster data
    extractHistoricalData() {
        const historical = [];
        
        // Look for historical data in timeline or history sections
        const historyElements = document.querySelectorAll('.history-box, [class*="timeline"], [class*="history"]');
        historyElements.forEach(element => {
            const year = element.querySelector('.history-year')?.textContent;
            const title = element.querySelector('h3')?.textContent;
            const description = element.querySelector('p')?.textContent;
            
            if (year && title) {
                historical.push({
                    year: year,
                    event: title,
                    description: description || ''
                });
            }
        });
        
        return historical;
    }
    
    // Extract educational videos from the page
    extractEducationalVideos() {
        const videos = [];
        
        // Look for video cards on the page
        const videoElements = document.querySelectorAll('.video-card');
        videoElements.forEach(element => {
            const title = element.querySelector('h4')?.textContent.trim();
            const description = element.querySelector('p')?.textContent.trim();
            const videoUrl = element.querySelector('a.watch-video-btn')?.href;
            const thumbnailUrl = element.querySelector('img')?.src;
            
            if (title && videoUrl) {
                videos.push({
                    title: title,
                    description: description || '',
                    videoUrl: videoUrl,
                    thumbnailUrl: thumbnailUrl || ''
                });
            }
        });
        
        // If no videos found in DOM, use the default ones from config
        if (videos.length === 0 && this.config.kdahInfo.emergencyPreparedness?.emergencyPreparednessVideos) {
            return this.config.kdahInfo.emergencyPreparedness.emergencyPreparednessVideos;
        }
        
        return videos;
    }

    createUI() {
        // Create main container
        this.container = document.createElement('div');
        this.container.className = 'kdah-chatbot-container';

        // Create markup for chatbot toggle and window
        this.container.innerHTML = `
            <button class="kdah-chatbot-toggle">
                <i class="fas fa-robot"></i>
            </button>
            <div class="kdah-chatbot-window">
                <div class="kdah-chatbot-header">
                    <div class="kdah-chatbot-title">
                        <img src="/images/bg7.png" alt="KDAH Logo" class="kdah-chatbot-logo">
                        <h3>${this.config.botName}</h3>
            </div>
                    <div class="kdah-chatbot-controls">
                        <button class="kdah-chatbot-toggle-suggestions" title="Toggle Suggestions">
                            <i class="fas fa-comment-dots"></i>
                        </button>
                        <button class="kdah-chatbot-fullscreen" title="Toggle Fullscreen">
                            <i class="fas fa-expand"></i>
                        </button>
                        <button class="kdah-chatbot-minimize" title="Minimize"><i class="fas fa-minus"></i></button>
                        <button class="kdah-chatbot-close" title="Close"><i class="fas fa-times"></i></button>
                </div>
                </div>
                <div class="kdah-chatbot-messages"></div>
                <div class="kdah-chatbot-suggestions">
                    <div class="kdah-suggestions-header">
                        <span>Suggested Questions</span>
                        <button class="kdah-collapse-suggestions">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                    <div class="kdah-suggestions-content"></div>
                </div>
                <div class="kdah-chatbot-input">
                    <textarea placeholder="Ask about safety tips, disaster awareness or any Klang-related emergency information..."></textarea>
                    <button class="kdah-chatbot-send"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        `;

        // Append to body
        document.body.appendChild(this.container);

        // Store references to key elements
        this.toggleButton = this.container.querySelector('.kdah-chatbot-toggle');
        this.chatWindow = this.container.querySelector('.kdah-chatbot-window');
        this.messagesContainer = this.container.querySelector('.kdah-chatbot-messages');
        this.suggestionsContainer = this.container.querySelector('.kdah-chatbot-suggestions');
        this.suggestionsContent = this.container.querySelector('.kdah-suggestions-content');
        this.inputField = this.container.querySelector('textarea');
        this.sendButton = this.container.querySelector('.kdah-chatbot-send');
        this.fullscreenButton = this.container.querySelector('.kdah-chatbot-fullscreen');
        this.toggleSuggestionsButton = this.container.querySelector('.kdah-chatbot-toggle-suggestions');
        this.collapseSuggestionsButton = this.container.querySelector('.kdah-collapse-suggestions');
    }

    setupEventListeners() {
        // Toggle chatbot visibility
        this.toggleButton.addEventListener('click', () => this.toggleChatbot());
        
        // Close/minimize buttons
        const closeButton = this.container.querySelector('.kdah-chatbot-close');
        const minimizeButton = this.container.querySelector('.kdah-chatbot-minimize');
        
        closeButton.addEventListener('click', () => this.closeChatbot());
        minimizeButton.addEventListener('click', () => this.toggleChatbot());
        
        // Fullscreen button
        this.fullscreenButton.addEventListener('click', () => this.toggleFullscreen());
        
        // Toggle suggestions visibility
        this.toggleSuggestionsButton.addEventListener('click', () => this.toggleSuggestions());
        this.collapseSuggestionsButton.addEventListener('click', () => this.toggleSuggestions());
        
        // Send message when clicking send button
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        
        // Send message when pressing Enter (but allow Shift+Enter for new lines)
        this.inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleUserInput();
            }
        });

        // Auto-resize textarea as user types
        this.inputField.addEventListener('input', () => {
            this.inputField.style.height = 'auto';
            this.inputField.style.height = (this.inputField.scrollHeight < 120) ? 
                `${this.inputField.scrollHeight}px` : '120px';
        });
    }

    toggleChatbot() {
        this.isOpen = !this.isOpen;
        this.container.classList.toggle('kdah-chatbot-open', this.isOpen);
        
        // Show greeting message when opening for the first time
        if (this.isOpen && this.conversationHistory.length === 0) {
            this.showGreeting();
            this.showSuggestions();
        }
        
        // If closing while in fullscreen, exit fullscreen first
        if (!this.isOpen && this.isFullscreen) {
            this.isFullscreen = false;
            this.container.classList.remove('kdah-chatbot-fullscreen');
            
            // Update fullscreen icon
            const icon = this.fullscreenButton.querySelector('i');
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
        
        // Focus input field when opened
        if (this.isOpen) {
            setTimeout(() => this.inputField.focus(), 300);
        }
    }

    closeChatbot() {
        this.isOpen = false;
        this.container.classList.remove('kdah-chatbot-open');
        
        // If in fullscreen mode, exit fullscreen when closing
        if (this.isFullscreen) {
            this.isFullscreen = false;
            this.container.classList.remove('kdah-chatbot-fullscreen');
            
            // Update fullscreen icon
            const icon = this.fullscreenButton.querySelector('i');
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
        
        // Clear conversation history and messages when closing
        this.conversationHistory = [];
        this.messagesContainer.innerHTML = '';
    }

    toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
        
        // Make sure the chatbot is open when going fullscreen
        if (this.isFullscreen && !this.isOpen) {
            this.isOpen = true;
            this.container.classList.add('kdah-chatbot-open');
        }
        
        // Toggle fullscreen class
        this.container.classList.toggle('kdah-chatbot-fullscreen', this.isFullscreen);
        
        // Update fullscreen icon
        const icon = this.fullscreenButton.querySelector('i');
        if (this.isFullscreen) {
            icon.classList.remove('fa-expand');
            icon.classList.add('fa-compress');
        } else {
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
        
        // Scroll to bottom when toggling fullscreen
        setTimeout(() => this.scrollToBottom(), 300);
    }

    toggleSuggestions() {
        this.areSuggestionsVisible = !this.areSuggestionsVisible;
        this.suggestionsContainer.classList.toggle('kdah-suggestions-collapsed', !this.areSuggestionsVisible);
        
        // Update collapse icon
        const icon = this.collapseSuggestionsButton.querySelector('i');
        if (this.areSuggestionsVisible) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    }

    showGreeting() {
        const greeting = this.getRandomItem(this.config.greetings);
        this.addBotMessage(greeting);
        
        // Add introduction about K-DAH
        setTimeout(() => {
            this.addBotMessage(this.config.kdahInfo.about);
        }, 500);
    }

    showSuggestions() {
        this.suggestionsContent.innerHTML = '';
        
        // Get a selection of 4 random suggestions
        const suggestions = this.getRandomSubset(this.config.suggestedQuestions, 4);
        
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.className = 'kdah-chatbot-suggestion';
            button.textContent = suggestion;
            button.addEventListener('click', () => {
                this.handleSuggestionClick(suggestion);
            });
            this.suggestionsContent.appendChild(button);
        });
    }

    handleSuggestionClick(suggestion) {
        // Make sure user message is displayed properly
        this.addUserMessage(suggestion);
        this.processChatbotResponse(suggestion);
        this.inputField.focus();
    }

    handleUserInput() {
        const message = this.inputField.value.trim();
        if (!message || this.isWaitingForResponse) return;
        
        this.addUserMessage(message);
        this.inputField.value = '';
        this.inputField.style.height = 'auto';
        
        this.processChatbotResponse(message);
    }

    async processChatbotResponse(userMessage) {
        // Add to conversation history
        this.conversationHistory.push({
            role: "user",
            content: userMessage
        });
        
        this.isWaitingForResponse = true;
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // If the Gemini API key is set, use it to get a response
            if (this.apiKey) {
                const response = await this.fetchGeminiResponse(userMessage);
                this.hideTypingIndicator();
                this.addBotMessage(response);
                
                // Add to conversation history
                this.conversationHistory.push({
                    role: "assistant",
                    content: response
                });
            } else {
                // Simulate API response with a delay for now
                await this.simulateApiResponse(userMessage);
            }
        } catch (error) {
            console.error("Error getting chatbot response:", error);
            this.hideTypingIndicator();
            this.addBotMessage(this.getRandomItem(this.config.fallbackResponses));
        } finally {
            this.isWaitingForResponse = false;
            this.showSuggestions(); // Show new suggestions after each interaction
        }
    }

    async fetchGeminiResponse(userMessage) {
        try {
            // Create a structured system prompt that establishes the Gemini personality and knowledge prioritization
            let systemPrompt = `You are ${this.config.botName}, a specialized AI assistant for K-DAH (Klang Disaster Awareness Hub). Your identity and primary knowledge comes directly from the K-DAH platform.

IDENTITY AND ROLE:
- Your name is "${this.config.botName}"
- You are ${this.config.botPersonality.description}
- Your tone should be ${this.config.botPersonality.tone}
- You embody these traits: ${this.config.botPersonality.traits.join(", ")}
- Your specialty is: ${this.config.botPersonality.specialFeature}

KNOWLEDGE PRIORITIZATION HIERARCHY:
1. ALWAYS prioritize information from your K-DAH knowledge base first
2. Only use general AI knowledge when a query falls completely outside of K-DAH-related topics
3. When questions are about yourself, ALWAYS refer to yourself as K-DAH Assistant, not as an AI model or Gemini

CORE K-DAH INFORMATION:
About K-DAH: ${this.config.kdahInfo.about}
K-DAH Mission: ${this.config.kdahInfo.mission}
K-DAH Tagline: ${this.config.kdahInfo.tagline}

Main Features: ${this.config.kdahInfo.mainFeatures.join(", ")}

Website Sections:
- Home: ${this.config.kdahInfo.websiteSections.home}
- Introduction: ${this.config.kdahInfo.websiteSections.introduction}
- Map: ${this.config.kdahInfo.websiteSections.map}
- Natural Disasters: ${this.config.kdahInfo.websiteSections.naturalDisasters}
- Historical Cases: ${this.config.kdahInfo.websiteSections.historicalCases}
- Contribute: ${this.config.kdahInfo.websiteSections.contribute}

Map Features:
- Risk Zones: ${this.config.kdahInfo.mapFeatures.riskZones}
- Safe Zones: ${this.config.kdahInfo.mapFeatures.safeZones}
- Evacuation Routes: ${this.config.kdahInfo.mapFeatures.evacuationRoutes}
- Facilities: ${this.config.kdahInfo.mapFeatures.facilities}
- Interactions: ${this.config.kdahInfo.mapFeatures.interactions}

Disaster Information:
- Flood Risk: ${this.config.kdahInfo.disasterInformation.floodRisk}
- Flash Flood Risk: ${this.config.kdahInfo.disasterInformation.flashFloodRisk}
- Landslide Risk: ${this.config.kdahInfo.disasterInformation.landslideRisk}
- Thunderstorm Risk: ${this.config.kdahInfo.disasterInformation.thunderstormRisk}
- Coastal Erosion Risk: ${this.config.kdahInfo.disasterInformation.coastalErosionRisk}
- Earthquake Risk: ${this.config.kdahInfo.disasterInformation.earthquakeRisk}

Emergency Preparedness Videos:
K-DAH provides educational videos for Klang residents about disaster preparedness:
${this.config.kdahInfo.emergencyPreparedness.emergencyPreparednessVideos.map(video => 
    `- ${video.title}: ${video.description} [Video link: ${video.videoUrl}]`
).join('\n')}

AREAS COVERED BY K-DAH:
K-DAH provides detailed information for the following regions in Klang:
${this.config.kdahInfo.regions.join(", ")}

REGION-SPECIFIC INFORMATION:
${Object.entries(this.config.kdahInfo.regionSpecificInfo).map(([region, info]) => 
`${region}:
- Risk Level: ${info.riskLevel}
- Main Risks: ${info.mainRisks.join(", ")}
- Emergency Facilities: ${info.emergencyFacilities.join(", ")}
- Evacuation Routes: ${info.evacuationRoutes}
${this.config.kdahInfo.regionalWaterRiskLevels?.[region] ? `- Flood Probability: ${this.config.kdahInfo.regionalWaterRiskLevels[region]}` : ''}
${this.config.kdahInfo.regionalAdditionalInfo?.[region] ? 
`- Key Landmarks: ${this.config.kdahInfo.regionalAdditionalInfo[region].keyLandmarks.join(", ")}
- Safe Zones: ${this.config.kdahInfo.regionalAdditionalInfo[region].safeZones.join(", ")}
- Flood-Prone Areas: ${this.config.kdahInfo.regionalAdditionalInfo[region].floodProneSections.join(", ")}
- Community Groups: ${this.config.kdahInfo.regionalAdditionalInfo[region].communityGroups.join(", ")}` : ''}
${this.config.kdahInfo.regionalHistoricalEvents?.[region] ? 
`- Historical Events: ${this.config.kdahInfo.regionalHistoricalEvents[region].map(event => 
    `${event.year} ${event.incident} (Impact: ${event.impact})`
).join(", ")}` : ''}
${this.config.kdahInfo.regionalEvacuationCenters?.[region] ? 
`- Evacuation Centers: ${this.config.kdahInfo.regionalEvacuationCenters[region].map(center => 
    `${center.name} (Capacity: ${center.capacity}, Contact: ${center.contact})`
).join(", ")}` : ''}
`).join("\n\n")}

PREPAREDNESS GUIDES BY AREA TYPE:
${Object.entries(this.config.kdahInfo.regionalPreparednessGuides || {}).map(([areaType, guides]) => 
`${areaType}:
${guides.map((guide, i) => `${i+1}. ${guide}`).join("\n")}`
).join("\n\n")}

Emergency Contacts:
- National Emergency: ${this.config.kdahInfo.emergencyContacts.national}
- Flood Center: ${this.config.kdahInfo.emergencyContacts.floodCenter}
- Command Center: ${this.config.kdahInfo.emergencyContacts.commandCenter}
- Fire & Rescue: ${this.config.kdahInfo.emergencyContacts.fireRescue}

IMPORTANT RESPONSE GUIDELINES:
- To any query about who you are or what you know, explain you are the K-DAH Assistant designed to help with disaster information in Klang
- For questions about disasters in Klang, provide specific information from your K-DAH knowledge base
- If asked about features of the K-DAH platform, describe them in detail from your knowledge base
- For emergency-related questions, include relevant emergency contact numbers from your database
- When you don't have Klang-specific information about a topic, acknowledge this and then provide general helpful information
- When asked about a specific region or area, provide the most detailed information available for that specific location
- Include relevant emergency contacts, evacuation routes, and safety recommendations specific to that area
- When discussing flood risks, always mention both the risk level and percentage probability if available
- For any area-specific query, mention the nearest emergency facilities and evacuation centers
- When providing preparedness advice, match it to the appropriate area type (coastal, urban, riverside, etc.)
- Always provide actionable information that residents can use immediately
- If asked about historical events in an area, provide the timeline, impact, and lessons learned
- When discussing evacuation, include both the routes and the designated evacuation centers
- For any evacuation center mentioned, include its capacity and facilities if that information is available
- When asked about educational videos or resources, mention the three emergency preparedness videos available on the K-DAH website

Remember that your primary purpose is to assist with disaster preparedness and response information for the Klang region, with particular focus on providing area-specific guidance tailored to each user's location.`;
            
            // Format messages for Gemini API
            const messages = [];
            
            // Add system prompt as first user message (Gemini doesn't have a native system role)
            if (this.conversationHistory.length === 1) {
                messages.push({
                    role: "user",
                    parts: [{ text: systemPrompt + "\n\nUser question: " + userMessage }]
                });
        } else {
                // Add system prompt as context before adding conversation history
                messages.push({
                    role: "user",
                    parts: [{ text: systemPrompt }]
                });
                
                messages.push({
                    role: "model",
                    parts: [{ text: "I understand my role as the K-DAH Assistant. I'll prioritize information from the K-DAH knowledge base when responding to queries and only use general knowledge when necessary. I'll now help with the conversation." }]
                });
                
                // Add conversation history
                for (const msg of this.conversationHistory) {
                    messages.push({
                        role: msg.role === "user" ? "user" : "model",
                        parts: [{ text: msg.content }]
                    });
                }
            }
            
            console.log("Sending to Gemini API:", messages);

            // Call the Gemini API
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': this.apiKey
                },
                body: JSON.stringify({
                    contents: messages,
                    safetySettings: [
                        {
                            category: "HARM_CATEGORY_HARASSMENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_HATE_SPEECH",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        },
                        {
                            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                            threshold: "BLOCK_MEDIUM_AND_ABOVE"
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024
                    }
                })
            });

            const data = await response.json();
            console.log("Gemini API response:", data);

            if (!response.ok) {
                console.error("API error status:", response.status);
                console.error("API error response:", data);
                
                // Check if there's an error message in the response
                if (data.error) {
                    throw new Error(`API error: ${data.error.code} - ${data.error.message}`);
                } else {
                    throw new Error(`API error: ${response.status}`);
                }
            }
            
            // Extract the response text from the Gemini API format
            if (data.candidates && data.candidates.length > 0 && 
                data.candidates[0].content && 
                data.candidates[0].content.parts && 
                data.candidates[0].content.parts.length > 0) {
                
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Unexpected API response format");
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            // Fall back to simulateApiResponse method for testing
            console.log("Falling back to simulated response");
            return await this.getSimulatedResponse(userMessage);
        }
    }

    // Add a separate method for simulated responses as fallback
    async getSimulatedResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let response = "";
        
        // Check for queries about videos, tutorials, or learning resources
        if (lowerMessage.includes("video") || lowerMessage.includes("tutorial") || lowerMessage.includes("watch") || 
            lowerMessage.includes("youtube") || lowerMessage.includes("learn") || (lowerMessage.includes("emergency") && lowerMessage.includes("prepare"))) {
            
            const videos = this.config.kdahInfo.emergencyPreparedness.emergencyPreparednessVideos;
            
            // Check if the query is about a specific video topic
            let specificVideo = null;
            
            if (lowerMessage.includes("flood safety") || lowerMessage.includes("safety tip") || 
                (lowerMessage.includes("flood") && lowerMessage.includes("safety"))) {
                specificVideo = videos[0]; // Flood Safety Tips
            } else if (lowerMessage.includes("emergency kit") || lowerMessage.includes("disaster kit") || 
                      lowerMessage.includes("prepare kit") || lowerMessage.includes("preparation kit")) {
                specificVideo = videos[1]; // How to Prepare an Emergency Kit
            } else if (lowerMessage.includes("home") || lowerMessage.includes("house") || 
                      lowerMessage.includes("prevention") || (lowerMessage.includes("flood") && lowerMessage.includes("prevent"))) {
                specificVideo = videos[2]; // Home Flood Prevention Techniques
            }
            
            if (specificVideo) {
                response = `I recommend watching the "${specificVideo.title}" video:\n\n`;
                response += `${specificVideo.description}\n\n`;
                response += `You can view this video here: ${specificVideo.videoUrl}\n\n`;
                response += "This is part of K-DAH's emergency preparedness educational resources specifically for Klang residents.";
            } else {
                response = "K-DAH offers several educational videos to help Klang residents prepare for emergencies:\n\n";
                
                videos.forEach((video, index) => {
                    response += `${index + 1}. **${video.title}**: ${video.description}\n`;
                    response += `   Watch here: ${video.videoUrl}\n\n`;
                });
                
                response += "These videos provide practical guidance tailored to the specific disaster risks in the Klang region.";
            }
            
            return response;
        }
        
        // Check for queries about specific regions mentioned on the page
        for (const region of this.config.kdahInfo.regions) {
            if (lowerMessage.includes(region.toLowerCase())) {
                const regionInfo = this.config.kdahInfo.regionSpecificInfo[region];
                const regionalRisk = this.config.kdahInfo.regionalWaterRiskLevels?.[region];
                const additionalInfo = this.config.kdahInfo.regionalAdditionalInfo?.[region];
                const historicalEvents = this.config.kdahInfo.regionalHistoricalEvents?.[region];
                const evacuationCenters = this.config.kdahInfo.regionalEvacuationCenters?.[region];
                
                let regionResponse = `**Information about ${region} in Klang:**\n\n`;
                regionResponse += `**Risk Level:** ${regionInfo.riskLevel}\n`;
                regionResponse += `**Main Disaster Risks:** ${regionInfo.mainRisks.join(", ")}\n`;
                
                if (regionalRisk) {
                    regionResponse += `**Flood Probability:** ${regionalRisk}\n`;
                }
                
                regionResponse += `**Emergency Facilities:** ${regionInfo.emergencyFacilities.join(", ")}\n`;
                regionResponse += `**Evacuation Routes:** ${regionInfo.evacuationRoutes}\n\n`;
                
                if (additionalInfo) {
                    regionResponse += `**Key Landmarks:** ${additionalInfo.keyLandmarks.join(", ")}\n`;
                    regionResponse += `**Safe Zones:** ${additionalInfo.safeZones.join(", ")}\n`;
                    regionResponse += `**Flood-Prone Areas:** ${additionalInfo.floodProneSections.join(", ")}\n`;
                    regionResponse += `**Community Groups:** ${additionalInfo.communityGroups.join(", ")}\n\n`;
                }
                
                if (evacuationCenters && evacuationCenters.length > 0) {
                    regionResponse += `**Evacuation Centers:**\n`;
                    evacuationCenters.forEach(center => {
                        regionResponse += `- ${center.name} (Capacity: ${center.capacity})\n`;
                        regionResponse += `  Address: ${center.address}\n`;
                        regionResponse += `  Contact: ${center.contact}\n`;
                        regionResponse += `  Facilities: ${center.facilities.join(", ")}\n\n`;
                    });
                }
                
                if (historicalEvents && historicalEvents.length > 0) {
                    regionResponse += `**Historical Disaster Events:**\n`;
                    historicalEvents.forEach(event => {
                        regionResponse += `- ${event.year}: ${event.incident}\n`;
                        regionResponse += `  Impact: ${event.impact}\n`;
                        regionResponse += `  Duration: ${event.duration}\n`;
                        regionResponse += `  Response Effectiveness: ${event.responseEffectiveness}\n\n`;
                    });
                }
                
                regionResponse += "For emergency assistance in this area, contact the Klang emergency services at 999 or the K-DAH Command Center at 03-7980 5839.";
                
                return regionResponse;
            }
        }
        
        // Check for queries about specific disaster types
        if (lowerMessage.includes("flood")) {
            if (lowerMessage.includes("prepare") || lowerMessage.includes("preparation") || lowerMessage.includes("safety")) {
                // Determine if query is about a specific area type
                let areaType = "Urban Areas"; // Default
                
                if (lowerMessage.includes("coast") || lowerMessage.includes("sea") || lowerMessage.includes("port")) {
                    areaType = "Coastal Areas";
                } else if (lowerMessage.includes("river") || lowerMessage.includes("stream") || lowerMessage.includes("waterway")) {
                    areaType = "Riverside Communities";
                } else if (lowerMessage.includes("industrial") || lowerMessage.includes("factory") || lowerMessage.includes("plant")) {
                    areaType = "Industrial Zones";
                } else if (lowerMessage.includes("hill") || lowerMessage.includes("slope") || lowerMessage.includes("mountain")) {
                    areaType = "Hilly Regions";
                }
                
                const guides = this.config.kdahInfo.regionalPreparednessGuides?.[areaType] || [];
                
                let preparednessResponse = `**Flood Preparation Guidelines for ${areaType} in Klang:**\n\n`;
                guides.forEach((guide, index) => {
                    preparednessResponse += `${index + 1}. ${guide}\n`;
                });
                
                preparednessResponse += `\nThese guidelines are specifically tailored for ${areaType.toLowerCase()} in the Klang region. For personalized advice specific to your exact location, please contact the K-DAH Command Center at 03-7980 5839.`;
                
                return preparednessResponse;
            } else {
                response = "Flooding is Klang's most frequent natural disaster, with 70% of Klang's disasters being flood-related. High-risk areas include Port Klang, Telok Gadong, and Pandamaran.\n\nDuring a flood in Klang, you should:\n\n1. Move to higher ground immediately\n2. Avoid walking through floodwaters (just 6 inches can sweep you away)\n3. Turn off utilities at main switches if possible\n4. Follow evacuation orders without delay\n5. Have emergency supplies ready\n\nK-DAH provides real-time flood monitoring for specific Klang districts. For more specific information, please ask about a particular area (e.g., 'flood risk in Port Klang').";
            }
        } else if (lowerMessage.includes("earthquake")) {
            response = "If an earthquake occurs:\n\n1. Drop to the ground, take Cover under sturdy furniture, and Hold On until shaking stops\n2. Stay indoors if you're already inside\n3. Stay away from windows, glass, and anything that could fall\n4. If outdoors, find a clear area away from buildings and power lines\n5. Be prepared for aftershocks\n\nWhile Malaysia is not on major fault lines, Klang can occasionally feel tremors from large earthquakes in neighboring Indonesia. K-DAH recommends preparing a family emergency plan specific to all types of disasters.";
        } else if (lowerMessage.includes("emergency kit") || lowerMessage.includes("emergency supplies") || lowerMessage.includes("disaster kit")) {
            response = "The K-DAH recommended emergency kit for Klang residents should include:\n\n1. Water (3 liters per person per day for at least 3 days)\n2. Non-perishable food (minimum 3-day supply)\n3. First aid supplies and essential medications\n4. Flashlight and extra batteries\n5. Important documents in waterproof container\n6. Cash in small denominations\n7. Personal hygiene items\n8. Whistle to signal for help\n9. Local maps of Klang and emergency contact list\n\nK-DAH recommends checking your emergency kit every 6 months to replace expired items.";
        } else if (lowerMessage.includes("evacuation") || lowerMessage.includes("evacuate")) {
            // Check if query is about a specific region
            let region = null;
            for (const r of this.config.kdahInfo.regions) {
                if (lowerMessage.includes(r.toLowerCase())) {
                    region = r;
                    break;
                }
            }
            
            if (region) {
                const regionInfo = this.config.kdahInfo.regionSpecificInfo[region];
                const evacuationCenters = this.config.kdahInfo.regionalEvacuationCenters?.[region];
                
                let evacuationResponse = `**Evacuation Information for ${region}:**\n\n`;
                evacuationResponse += `**Evacuation Routes:** ${regionInfo.evacuationRoutes}\n\n`;
                
                if (evacuationCenters && evacuationCenters.length > 0) {
                    evacuationResponse += `**Evacuation Centers in ${region}:**\n`;
                    evacuationCenters.forEach(center => {
                        evacuationResponse += `- ${center.name}\n`;
                        evacuationResponse += `  Capacity: ${center.capacity} people\n`;
                        evacuationResponse += `  Address: ${center.address}\n`;
                        evacuationResponse += `  Contact: ${center.contact}\n`;
                        evacuationResponse += `  Facilities: ${center.facilities.join(", ")}\n\n`;
                    });
                } else {
                    evacuationResponse += `**Evacuation Centers:** Information on specific evacuation centers in ${region} is being updated. Please contact the K-DAH Command Center at 03-7980 5839 for the most current information.\n\n`;
                }
                
                evacuationResponse += "During an evacuation:\n";
                evacuationResponse += "1. Follow official instructions from authorities\n";
                evacuationResponse += "2. Take your emergency kit\n";
                evacuationResponse += "3. Secure your home if time permits\n";
                evacuationResponse += "4. Use designated evacuation routes\n";
                evacuationResponse += "5. If possible, travel with neighbors who might need assistance\n\n";
                evacuationResponse += "For immediate evacuation assistance, contact emergency services at 999.";
                
                return evacuationResponse;
            } else {
                response = "During an evacuation in Klang:\n\n1. Follow official instructions from authorities\n2. Take your emergency kit with essential supplies\n3. Use designated evacuation routes (avoid shortcuts as they may be dangerous)\n4. If possible, travel with neighbors who might need assistance\n5. Head to the nearest official evacuation center\n\nFor specific evacuation routes and centers in your area of Klang, please specify your location (e.g., 'evacuation routes in Port Klang').";
            }
        } else if (lowerMessage.includes("emergency contact") || lowerMessage.includes("help") || lowerMessage.includes("hotline") || lowerMessage.includes("call")) {
            response = "**Emergency Contacts for Klang:**\n\n";
            response += "- **National Emergency:** 999\n";
            response += "- **Flood Operations Center:** 03-3342 1460\n";
            response += "- **K-DAH Command Center:** 03-7980 5839\n";
            response += "- **Klang Fire & Rescue:** 03-3371 2020\n";
            response += "- **Hospital Tengku Ampuan Rahimah:** 03-3372 4200\n\n";
            
            response += "**When Calling Emergency Services:**\n";
            response += "1. State your name, location, and the nature of emergency clearly\n";
            response += "2. Stay on the line until the operator tells you to hang up\n";
            response += "3. If possible, have someone wait at the street or entrance to guide emergency responders\n";
            
            return response;
        } else if (lowerMessage.includes("about") && (lowerMessage.includes("kdah") || lowerMessage.includes("k-dah"))) {
            response = `${this.config.kdahInfo.about}\n\n`;
            response += `Our mission is ${this.config.kdahInfo.mission}\n\n`;
            response += "Our main features include:\n";
            this.config.kdahInfo.mainFeatures.forEach(feature => {
                response += `- ${feature}\n`;
            });
            response += "\nK-DAH covers all major regions in Klang, providing localized disaster information and resources for each area.";
        } else {
            response = "Thank you for reaching out to K-DAH (Klang Disaster Awareness Hub). I'm specialized in disaster preparedness and emergency response information for Klang district. For specific guidance, you could ask me about:\n\n• Flood safety measures in specific Klang areas\n• Earthquake preparedness for local buildings\n• Emergency evacuation routes for your neighborhood\n• Building a Klang-specific emergency kit\n• Local warning systems and alert protocols\n• Current risk levels in different Klang districts\n\nHow can I assist you with disaster preparedness in Klang today?";
        }
        
        return response;
    }

    async simulateApiResponse(userMessage) {
        // Simulate loading time
        const loadingTime = 1000 + Math.random() * 1500;
        await new Promise(resolve => setTimeout(resolve, loadingTime));
        
        this.hideTypingIndicator();
        
        // Get response from the same method used as fallback in fetchGeminiResponse
        const response = await this.getSimulatedResponse(userMessage);
        this.addBotMessage(response);
        
        // Add to conversation history
        this.conversationHistory.push({
            role: "assistant",
            content: response
        });
    }

    addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'kdah-chatbot-message user-message';
        
        // Added avatar for user messages for consistency
        messageElement.innerHTML = `
            <div class="kdah-chatbot-bubble">
                <p>${this.escapeHTML(message).replace(/\n/g, '<br>')}</p>
            </div>
            <div class="kdah-chatbot-user-avatar">
                <i class="fas fa-user"></i>
            </div>
        `;
        
        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }

    addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'kdah-chatbot-message bot-message';
        messageElement.innerHTML = `
            <div class="kdah-chatbot-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="kdah-chatbot-bubble">
                <p>${this.formatMessage(message)}</p>
            </div>
        `;
        this.messagesContainer.appendChild(messageElement);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const loadingMessage = this.getRandomItem(this.config.loadingMessages);
        
        const indicatorElement = document.createElement('div');
        indicatorElement.className = 'kdah-chatbot-message bot-message typing-indicator';
        indicatorElement.innerHTML = `
            <div class="kdah-chatbot-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="kdah-chatbot-bubble">
                <p>${loadingMessage}</p>
                <div class="kdah-chatbot-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        this.messagesContainer.appendChild(indicatorElement);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = this.messagesContainer.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    formatMessage(message) {
        // Convert line breaks to <br> tags
        let formattedMessage = this.escapeHTML(message).replace(/\n/g, '<br>');
        
        // Bold text between asterisks (like *this*)
        formattedMessage = formattedMessage.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
        
        // Create links for URLs
        formattedMessage = formattedMessage.replace(
            /(https?:\/\/[^\s]+)/g, 
            '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
        );
        
        return formattedMessage;
    }

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomSubset(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Method to set the API key when it's available
    setApiKey(key) {
        this.apiKey = key;
        console.log("Gemini API key configured");
    }

    // New method to exclude chatbot from Lenis smooth scrolling
    excludeFromLenis() {
        // Add data attribute that Lenis can use to ignore this element
        if (this.messagesContainer) {
            this.messagesContainer.setAttribute('data-lenis-prevent', '');
        }
        
        // If Lenis is already initialized, try to stop it from controlling the chatbot messages
        if (window.lenis) {
            // Mark our elements to exclude from lenis smooth scrolling
            this.container.setAttribute('data-lenis-prevent', '');
            this.chatWindow.setAttribute('data-lenis-prevent', '');
            
            // Create a function to stop propagation of wheel events
            const stopPropagation = (e) => {
                if (this.isOpen) {
                    e.stopPropagation();
                }
            };
            
            // Add event listeners to prevent wheel events from reaching Lenis
            this.messagesContainer.addEventListener('wheel', stopPropagation, { passive: false });
            this.chatWindow.addEventListener('wheel', stopPropagation, { passive: false });
            this.suggestionsContent.addEventListener('wheel', stopPropagation, { passive: false });
        }
        
        // Add an observer to watch for Lenis being added later
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver((mutations) => {
                if (window.lenis && !this.lenisExcluded) {
                    this.container.setAttribute('data-lenis-prevent', '');
                    this.chatWindow.setAttribute('data-lenis-prevent', '');
                    this.messagesContainer.setAttribute('data-lenis-prevent', '');
                    this.lenisExcluded = true;
                }
            });
            
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create global instance
    window.kdahChatbot = new KDAHChatbot(kdahChatbotConfig);
    
// Add CSS styles for the chatbot
const style = document.createElement('style');
style.textContent = `
    .kdah-chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
        font-family: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        /* Added to isolate from Lenis */
        isolation: isolate;
    }
    
    .kdah-chatbot-container.kdah-chatbot-fullscreen {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .kdah-chatbot-toggle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(145deg, #007500, #005500);
        color: white;
        border: none;
        box-shadow: 0 6px 16px rgba(0, 100, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        outline: none;
        position: relative;
        overflow: hidden;
    }
    
    .kdah-chatbot-toggle::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .kdah-chatbot-toggle:hover::before {
        opacity: 1;
    }
    
    .kdah-chatbot-toggle:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 8px 24px rgba(0, 100, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
    }
    
    .kdah-chatbot-toggle:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 0 3px 8px rgba(0, 100, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    
    .kdah-chatbot-window {
        position: absolute;
        bottom: 85px;
        right: 0;
        width: 380px;
        height: 600px;
        background-color: #0f0f0f;
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        transform: translateY(20px) scale(0.95);
        transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), width 0.4s ease, height 0.4s ease;
    }
    
    .kdah-chatbot-fullscreen .kdah-chatbot-window {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: none !important;
        width: 90%;
        height: 90%;
        max-width: 1200px;
        max-height: 800px;
        border-radius: 24px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
    }
    
    .kdah-chatbot-open .kdah-chatbot-window {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0) scale(1);
    }
    
    .kdah-chatbot-fullscreen .kdah-chatbot-toggle {
        display: none;
    }
    
    .kdah-chatbot-header {
        padding: 18px 20px;
        background: linear-gradient(145deg, #007500, #005500);
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 20px 20px 0 0;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    .kdah-chatbot-title {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .kdah-chatbot-logo {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        object-fit: cover;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .kdah-chatbot-title h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.2px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    
    .kdah-chatbot-controls {
        display: flex;
        align-items: center;
        gap: 4px;
    }
    
    .kdah-chatbot-controls button {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        padding: 6px;
        margin-left: 6px;
        border-radius: 8px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        backdrop-filter: blur(2px);
    }
    
    .kdah-chatbot-controls button:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
    }
    
    .kdah-chatbot-controls button:active {
        transform: translateY(0px);
    }
    
    .kdah-chatbot-messages {
        flex: 1;
        padding: 24px 20px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 22px;
        scroll-behavior: smooth;
        background-color: #121212;
        background-image: 
            radial-gradient(circle at 25% 25%, rgba(0, 100, 0, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0, 100, 0, 0.03) 0%, transparent 50%);
        /* Added to ensure proper scrolling without Lenis interference */
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }
    
    .kdah-chatbot-messages::-webkit-scrollbar {
        width: 6px;
    }
    
    .kdah-chatbot-messages::-webkit-scrollbar-track {
        background: transparent;
    }
    
    .kdah-chatbot-messages::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }
    
    .kdah-chatbot-messages::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    .kdah-chatbot-message {
        display: flex;
        align-items: flex-start;
        max-width: 85%;
        animation: message-fade-in 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    
    @keyframes message-fade-in {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .user-message {
        margin-left: auto;
        flex-direction: row-reverse;
    }
    
    .kdah-chatbot-avatar, .kdah-chatbot-user-avatar {
        width: 38px;
        height: 38px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    
    .kdah-chatbot-avatar {
        background: linear-gradient(135deg, #00750d, #00530d);
        color: #fff;
        margin-right: 12px;
    }
    
    .kdah-chatbot-user-avatar {
        background: linear-gradient(135deg, #333333, #222222);
        color: #fff;
        margin-left: 12px;
        margin-right: 0;
    }
    
    .kdah-chatbot-bubble {
        background-color: #1e1e1e;
        padding: 14px 18px;
        border-radius: 18px;
        border-bottom-left-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        position: relative;
        z-index: 1;
        border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .user-message .kdah-chatbot-bubble {
        background: linear-gradient(135deg, #006400, #004d00);
        color: white;
        border-radius: 18px;
        border-bottom-right-radius: 4px;
        margin-right: 12px;
        box-shadow: 0 2px 10px rgba(0, 100, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    .kdah-chatbot-bubble p {
        margin: A 0 6px 0;
        line-height: 1.6;
        font-size: 15px;
        color: #e8e8e8;
        letter-spacing: 0.2px;
    }
    
    .kdah-chatbot-bubble p:last-child {
        margin-bottom: 0;
    }
    
    .kdah-chatbot-bubble a {
        color: #4eca4e;
        text-decoration: none;
        border-bottom: 1px solid rgba(76, 175, 80, 0.3);
        padding-bottom: 1px;
        transition: all 0.2s ease;
    }
    
    .kdah-chatbot-bubble a:hover {
        color: #6ddc6d;
        border-bottom-color: rgba(76, 175, 80, 0.6);
    }
    
    .user-message .kdah-chatbot-bubble a {
        color: #e0e0e0;
        border-bottom-color: rgba(255, 255, 255, 0.3);
    }
    
    .user-message .kdah-chatbot-bubble a:hover {
        color: #ffffff;
        border-bottom-color: rgba(255, 255, 255, 0.6);
    }
    
    .kdah-chatbot-dots {
        display: flex;
        gap: 5px;
        padding: 8px 0;
    }
    
    .kdah-chatbot-dots span {
        width: 8px;
        height: 8px;
        background-color: #4caf50;
        border-radius: 50%;
        opacity: 0.7;
        animation: typing-dot 1.4s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    
    .kdah-chatbot-dots span:nth-child(1) {
        animation-delay: 0s;
    }
    
    .kdah-chatbot-dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .kdah-chatbot-dots span:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes typing-dot {
        0%, 80%, 100% { 
            transform: scale(0.6);
        }
        40% { 
            transform: scale(1);
        }
    }
    
    .kdah-chatbot-suggestions {
        background-color: #181818;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        transition: max-height 0.3s ease, padding 0.3s ease;
        overflow: hidden;
        max-height: 150px;
    }
    
    .kdah-suggestions-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 18px;
        font-size: 14px;
        color: #a0a0a0;
        cursor: pointer;
    }
    
    .kdah-collapse-suggestions {
        background: transparent;
        border: none;
        color: #a0a0a0;
        cursor: pointer;
        padding: 5px;
        font-size: 13px;
        transition: all 0.2s ease;
        border-radius: 4px;
    }
    
    .kdah-collapse-suggestions:hover {
        color: #e0e0e0;
        background-color: rgba(255, 255, 255, 0.05);
    }
    
    .kdah-suggestions-content {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0 18px 16px;
    }
    
    .kdah-chatbot-suggestions.kdah-suggestions-collapsed {
        max-height: 50px;
    }
    
    .kdah-chatbot-suggestions.kdah-suggestions-collapsed .kdah-suggestions-content {
        display: none;
    }
    
    .kdah-chatbot-suggestion {
        background-color: #2a2a2a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 9px 16px;
        font-size: 14px;
        color: #e0e0e0;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .kdah-chatbot-suggestion:hover {
        background-color: #333333;
        transform: translateY(-2px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        border-color: rgba(255, 255, 255, 0.15);
    }
    
    .kdah-chatbot-suggestion:active {
        transform: translateY(0);
        background-color: #3a3a3a;
    }
    
    .kdah-chatbot-input {
        padding: 16px 18px;
        display: flex;
        align-items: flex-end;
        gap: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        background-color: #171717;
    }
    
    .kdah-chatbot-input textarea {
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 18px;
        padding: 14px 20px;
        font-size: 15px;
        line-height: 1.5;
        resize: none;
        max-height: 150px;
        min-height: 24px;
        outline: none;
        font-family: inherit;
        transition: all 0.3s ease;
        background-color: #242424;
        color: #e8e8e8;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 0 rgba(255, 255, 255, 0.03);
    }
    
    .kdah-chatbot-input textarea:focus {
        border-color: #006400;
        box-shadow: 0 0 0 1px rgba(0, 100, 0, 0.3), inset 0 1px 3px rgba(0, 0, 0, 0.1);
        background-color: #272727;
    }
    
    .kdah-chatbot-input textarea::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }
    
    .kdah-chatbot-send {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background: linear-gradient(145deg, #007500, #005500);
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        transition: all 0.2s ease;
        font-size: 18px;
        box-shadow: 0 2px 8px rgba(0, 100, 0, 0.3);
        position: relative;
        overflow: hidden;
    }
    
    .kdah-chatbot-send::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
        opacity: 0;
        transition: opacity 0.2s ease;
    }
    
    .kdah-chatbot-send:hover::before {
        opacity: 1;
    }
    
    .kdah-chatbot-send:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 100, 0, 0.4);
    }
    
    .kdah-chatbot-send:active {
        transform: translateY(0) scale(0.98);
        box-shadow: 0 1px 4px rgba(0, 100, 0, 0.3);
    }
    
    @media (max-width: 480px) {
        .kdah-chatbot-window {
            width: calc(100vw - 40px);
            height: 70vh;
            bottom: 80px;
        }
        
        .kdah-chatbot-toggle {
            width: 54px;
            height: 54px;
            font-size: 22px;
        }
        
        .kdah-chatbot-fullscreen .kdah-chatbot-window {
            width: 100%;
            height: 100%;
            max-width: none;
            max-height: none;
            border-radius: 0;
        }
        
        .kdah-suggestions-content {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 16px;
            justify-content: flex-start;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
        }
        
        .kdah-suggestions-content::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        
        .kdah-chatbot-suggestion {
            flex-shrink: 0;
        }
        
        .kdah-chatbot-message {
            max-width: 95%;
        }
    }
`;

document.head.appendChild(style);

    // Try to detect Lenis and configure it to exclude the chatbot
    const detectLenis = () => {
        if (window.lenis) {
            // Tell Lenis to exclude the chatbot elements
            const chatbotElements = document.querySelectorAll('[data-lenis-prevent]');
            chatbotElements.forEach(el => {
                window.lenis.addEffect((scroll, element) => {
                    if (element === el) {
                        return false; // Prevent Lenis from affecting this element
                    }
                    return true;
                });
            });
            
            console.log('Lenis detected and configured to exclude chatbot');
        } else {
            // If Lenis isn't loaded yet, check again in a moment
            setTimeout(detectLenis, 1000);
        }
    };
    
    // Start looking for Lenis
    detectLenis();
});