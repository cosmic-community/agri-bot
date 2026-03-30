import type { SupportedLanguage } from '@/types';

export interface TranslationStrings {
  appName: string;
  home: string;
  crops: string;
  pestLibrary: string;
  weather: string;
  assistant: string;
  market: string;
  irrigation: string;
  pestDetection: string;
  settings: string;
  heroTitle: string;
  heroSubtitle: string;
  getStarted: string;
  learnMore: string;
  viewAll: string;
  season: string;
  soilType: string;
  waterReq: string;
  growthDays: string;
  yieldPerHa: string;
  tempRange: string;
  diseases: string;
  symptoms: string;
  cause: string;
  treatment: string;
  pesticide: string;
  prevention: string;
  severity: string;
  affectedCrops: string;
  temperature: string;
  humidity: string;
  rainfall: string;
  windSpeed: string;
  uvIndex: string;
  forecast: string;
  searchCity: string;
  detectLocation: string;
  uploadImage: string;
  useCamera: string;
  analyze: string;
  chatPlaceholder: string;
  newChat: string;
  send: string;
  language: string;
  selectLanguage: string;
  cropIntelligence: string;
  marketIntelligence: string;
  irrigationIntelligence: string;
  pricePerQuintal: string;
  demand: string;
  volatility: string;
  bestTime: string;
  waterQuantity: string;
  method: string;
  tips: string;
  noDataAvailable: string;
  loading: string;
  backToHome: string;
  features: string;
}

const translations: Record<SupportedLanguage, TranslationStrings> = {
  en: {
    appName: 'Agri-Intel X',
    home: 'Home',
    crops: 'Crops',
    pestLibrary: 'Pest & Disease',
    weather: 'Weather',
    assistant: 'AI Assistant',
    market: 'Market',
    irrigation: 'Irrigation',
    pestDetection: 'Pest Detection',
    settings: 'Settings',
    heroTitle: 'Intelligent Farming Starts Here',
    heroSubtitle: 'AI-powered insights for weather, crops, pests, irrigation, and market intelligence — designed for Indian farmers.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    viewAll: 'View All',
    season: 'Season',
    soilType: 'Soil Type',
    waterReq: 'Water Requirement',
    growthDays: 'Growth Days',
    yieldPerHa: 'Yield/Hectare',
    tempRange: 'Temperature Range',
    diseases: 'Common Diseases',
    symptoms: 'Symptoms',
    cause: 'Cause',
    treatment: 'Treatment',
    pesticide: 'Recommended Pesticide',
    prevention: 'Prevention Tips',
    severity: 'Severity',
    affectedCrops: 'Affected Crops',
    temperature: 'Temperature',
    humidity: 'Humidity',
    rainfall: 'Rainfall',
    windSpeed: 'Wind Speed',
    uvIndex: 'UV Index',
    forecast: '7-Day Forecast',
    searchCity: 'Search city...',
    detectLocation: 'Detect Location',
    uploadImage: 'Upload Image',
    useCamera: 'Use Camera',
    analyze: 'Analyze',
    chatPlaceholder: 'Ask about crops, weather, pests, markets...',
    newChat: 'New Chat',
    send: 'Send',
    language: 'Language',
    selectLanguage: 'Select Language',
    cropIntelligence: 'Crop Intelligence',
    marketIntelligence: 'Market Intelligence',
    irrigationIntelligence: 'Irrigation Intelligence',
    pricePerQuintal: 'Price per Quintal (₹)',
    demand: 'Demand',
    volatility: 'Volatility',
    bestTime: 'Best Time',
    waterQuantity: 'Water Quantity',
    method: 'Method',
    tips: 'Tips',
    noDataAvailable: 'No data available',
    loading: 'Loading...',
    backToHome: 'Back to Home',
    features: 'Features',
  },
  hi: {
    appName: 'एग्री-इंटेल X',
    home: 'होम',
    crops: 'फसलें',
    pestLibrary: 'कीट और रोग',
    weather: 'मौसम',
    assistant: 'AI सहायक',
    market: 'बाज़ार',
    irrigation: 'सिंचाई',
    pestDetection: 'कीट पहचान',
    settings: 'सेटिंग्स',
    heroTitle: 'बुद्धिमान खेती यहाँ शुरू होती है',
    heroSubtitle: 'मौसम, फसल, कीट, सिंचाई और बाज़ार बुद्धिमत्ता के लिए AI-संचालित अंतर्दृष्टि — भारतीय किसानों के लिए डिज़ाइन।',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    viewAll: 'सभी देखें',
    season: 'मौसम',
    soilType: 'मिट्टी का प्रकार',
    waterReq: 'पानी की आवश्यकता',
    growthDays: 'विकास के दिन',
    yieldPerHa: 'उपज/हेक्टेयर',
    tempRange: 'तापमान सीमा',
    diseases: 'सामान्य रोग',
    symptoms: 'लक्षण',
    cause: 'कारण',
    treatment: 'उपचार',
    pesticide: 'अनुशंसित कीटनाशक',
    prevention: 'रोकथाम के उपाय',
    severity: 'गंभीरता',
    affectedCrops: 'प्रभावित फसलें',
    temperature: 'तापमान',
    humidity: 'नमी',
    rainfall: 'वर्षा',
    windSpeed: 'हवा की गति',
    uvIndex: 'यूवी इंडेक्स',
    forecast: '7-दिन का पूर्वानुमान',
    searchCity: 'शहर खोजें...',
    detectLocation: 'स्थान पहचानें',
    uploadImage: 'छवि अपलोड करें',
    useCamera: 'कैमरा उपयोग करें',
    analyze: 'विश्लेषण',
    chatPlaceholder: 'फसल, मौसम, कीट, बाज़ार के बारे में पूछें...',
    newChat: 'नई चैट',
    send: 'भेजें',
    language: 'भाषा',
    selectLanguage: 'भाषा चुनें',
    cropIntelligence: 'फसल बुद्धिमत्ता',
    marketIntelligence: 'बाज़ार बुद्धिमत्ता',
    irrigationIntelligence: 'सिंचाई बुद्धिमत्ता',
    pricePerQuintal: 'प्रति क्विंटल मूल्य (₹)',
    demand: 'मांग',
    volatility: 'अस्थिरता',
    bestTime: 'सबसे अच्छा समय',
    waterQuantity: 'पानी की मात्रा',
    method: 'विधि',
    tips: 'सुझाव',
    noDataAvailable: 'कोई डेटा उपलब्ध नहीं',
    loading: 'लोड हो रहा है...',
    backToHome: 'होम पर वापस जाएं',
    features: 'विशेषताएं',
  },
  kn: {
    appName: 'ಅಗ್ರಿ-ಇಂಟೆಲ್ X',
    home: 'ಮುಖಪುಟ',
    crops: 'ಬೆಳೆಗಳು',
    pestLibrary: 'ಕೀಟ ಮತ್ತು ರೋಗ',
    weather: 'ಹವಾಮಾನ',
    assistant: 'AI ಸಹಾಯಕ',
    market: 'ಮಾರುಕಟ್ಟೆ',
    irrigation: 'ನೀರಾವರಿ',
    pestDetection: 'ಕೀಟ ಪತ್ತೆ',
    settings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    heroTitle: 'ಬುದ್ಧಿವಂತ ಕೃಷಿ ಇಲ್ಲಿ ಆರಂಭವಾಗುತ್ತದೆ',
    heroSubtitle: 'ಹವಾಮಾನ, ಬೆಳೆ, ಕೀಟ, ನೀರಾವರಿ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬುದ್ಧಿಮತ್ತೆ — ಭಾರತೀಯ ರೈತರಿಗಾಗಿ.',
    getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
    learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
    viewAll: 'ಎಲ್ಲಾ ನೋಡಿ',
    season: 'ಋತು',
    soilType: 'ಮಣ್ಣಿನ ಪ್ರಕಾರ',
    waterReq: 'ನೀರಿನ ಅವಶ್ಯಕತೆ',
    growthDays: 'ಬೆಳವಣಿಗೆ ದಿನಗಳು',
    yieldPerHa: 'ಇಳುವರಿ/ಹೆಕ್ಟೇರ್',
    tempRange: 'ಉಷ್ಣಾಂಶ ಶ್ರೇಣಿ',
    diseases: 'ಸಾಮಾನ್ಯ ರೋಗಗಳು',
    symptoms: 'ಲಕ್ಷಣಗಳು',
    cause: 'ಕಾರಣ',
    treatment: 'ಚಿಕಿತ್ಸೆ',
    pesticide: 'ಶಿಫಾರಸು ಕೀಟನಾಶಕ',
    prevention: 'ತಡೆಗಟ್ಟುವಿಕೆ',
    severity: 'ತೀವ್ರತೆ',
    affectedCrops: 'ಪ್ರಭಾವಿತ ಬೆಳೆಗಳು',
    temperature: 'ಉಷ್ಣಾಂಶ',
    humidity: 'ಆರ್ದ್ರತೆ',
    rainfall: 'ಮಳೆ',
    windSpeed: 'ಗಾಳಿ ವೇಗ',
    uvIndex: 'UV ಸೂಚ್ಯಂಕ',
    forecast: '7-ದಿನ ಮುನ್ಸೂಚನೆ',
    searchCity: 'ನಗರ ಹುಡುಕಿ...',
    detectLocation: 'ಸ್ಥಳ ಪತ್ತೆಹಚ್ಚಿ',
    uploadImage: 'ಚಿತ್ರ ಅಪ್‌ಲೋಡ್',
    useCamera: 'ಕ್ಯಾಮೆರಾ ಬಳಸಿ',
    analyze: 'ವಿಶ್ಲೇಷಿಸಿ',
    chatPlaceholder: 'ಬೆಳೆ, ಹವಾಮಾನ, ಕೀಟ, ಮಾರುಕಟ್ಟೆ ಬಗ್ಗೆ ಕೇಳಿ...',
    newChat: 'ಹೊಸ ಚಾಟ್',
    send: 'ಕಳುಹಿಸಿ',
    language: 'ಭಾಷೆ',
    selectLanguage: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
    cropIntelligence: 'ಬೆಳೆ ಬುದ್ಧಿಮತ್ತೆ',
    marketIntelligence: 'ಮಾರುಕಟ್ಟೆ ಬುದ್ಧಿಮತ್ತೆ',
    irrigationIntelligence: 'ನೀರಾವರಿ ಬುದ್ಧಿಮತ್ತೆ',
    pricePerQuintal: 'ಪ್ರತಿ ಕ್ವಿಂಟಲ್ ಬೆಲೆ (₹)',
    demand: 'ಬೇಡಿಕೆ',
    volatility: 'ಚಂಚಲತೆ',
    bestTime: 'ಅತ್ಯುತ್ತಮ ಸಮಯ',
    waterQuantity: 'ನೀರಿನ ಪ್ರಮಾಣ',
    method: 'ವಿಧಾನ',
    tips: 'ಸಲಹೆಗಳು',
    noDataAvailable: 'ಯಾವುದೇ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ',
    loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    backToHome: 'ಮುಖಪುಟಕ್ಕೆ',
    features: 'ವೈಶಿಷ್ಟ್ಯಗಳು',
  },
  ta: {
    appName: 'அக்ரி-இன்டெல் X', home: 'முகப்பு', crops: 'பயிர்கள்', pestLibrary: 'பூச்சி & நோய்', weather: 'வானிலை', assistant: 'AI உதவியாளர்', market: 'சந்தை', irrigation: 'நீர்ப்பாசனம்', pestDetection: 'பூச்சி கண்டறிதல்', settings: 'அமைப்புகள்', heroTitle: 'அறிவார்ந்த விவசாயம் இங்கே தொடங்குகிறது', heroSubtitle: 'வானிலை, பயிர், பூச்சி, நீர்ப்பாசனம் மற்றும் சந்தை நுண்ணறிவு — இந்திய விவசாயிகளுக்காக.', getStarted: 'தொடங்கு', learnMore: 'மேலும் அறிக', viewAll: 'அனைத்தும் காண', season: 'பருவம்', soilType: 'மண் வகை', waterReq: 'நீர் தேவை', growthDays: 'வளர்ச்சி நாட்கள்', yieldPerHa: 'மகசூல்/ஹெக்டேர்', tempRange: 'வெப்பநிலை வரம்பு', diseases: 'நோய்கள்', symptoms: 'அறிகுறிகள்', cause: 'காரணம்', treatment: 'சிகிச்சை', pesticide: 'பூச்சிக்கொல்லி', prevention: 'தடுப்பு', severity: 'தீவிரம்', affectedCrops: 'பாதிக்கப்பட்ட பயிர்கள்', temperature: 'வெப்பநிலை', humidity: 'ஈரப்பதம்', rainfall: 'மழை', windSpeed: 'காற்று வேகம்', uvIndex: 'UV குறியீடு', forecast: '7-நாள் முன்னறிவிப்பு', searchCity: 'நகரம் தேடு...', detectLocation: 'இருப்பிடம் கண்டறி', uploadImage: 'படம் பதிவேற்று', useCamera: 'கேமரா பயன்படுத்து', analyze: 'பகுப்பாய்வு', chatPlaceholder: 'பயிர், வானிலை, பூச்சி பற்றி கேளுங்கள்...', newChat: 'புதிய அரட்டை', send: 'அனுப்பு', language: 'மொழி', selectLanguage: 'மொழி தேர்ந்தெடு', cropIntelligence: 'பயிர் நுண்ணறிவு', marketIntelligence: 'சந்தை நுண்ணறிவு', irrigationIntelligence: 'நீர்ப்பாசன நுண்ணறிவு', pricePerQuintal: 'குவிண்டால் விலை (₹)', demand: 'தேவை', volatility: 'மாறுபாடு', bestTime: 'சிறந்த நேரம்', waterQuantity: 'நீர் அளவு', method: 'முறை', tips: 'குறிப்புகள்', noDataAvailable: 'தரவு இல்லை', loading: 'ஏற்றுகிறது...', backToHome: 'முகப்புக்கு', features: 'அம்சங்கள்',
  },
  te: {
    appName: 'అగ్రి-ఇంటెల్ X', home: 'హోం', crops: 'పంటలు', pestLibrary: 'పురుగు & వ్యాధి', weather: 'వాతావరణం', assistant: 'AI సహాయకుడు', market: 'మార్కెట్', irrigation: 'నీటిపారుదల', pestDetection: 'పురుగు గుర్తింపు', settings: 'సెట్టింగ్‌లు', heroTitle: 'తెలివైన వ్యవసాయం ఇక్కడ ప్రారంభమవుతుంది', heroSubtitle: 'వాతావరణం, పంట, పురుగు, నీటిపారుదల మరియు మార్కెట్ మేధస్సు — భారతీయ రైతుల కోసం.', getStarted: 'ప్రారంభించండి', learnMore: 'ఇంకా తెలుసుకోండి', viewAll: 'అన్నీ చూడండి', season: 'సీజన్', soilType: 'నేల రకం', waterReq: 'నీటి అవసరం', growthDays: 'వృద్ధి రోజులు', yieldPerHa: 'దిగుబడి/హెక్టారు', tempRange: 'ఉష్ణోగ్రత పరిధి', diseases: 'వ్యాధులు', symptoms: 'లక్షణాలు', cause: 'కారణం', treatment: 'చికిత్స', pesticide: 'పురుగుమందు', prevention: 'నివారణ', severity: 'తీవ్రత', affectedCrops: 'ప్రభావిత పంటలు', temperature: 'ఉష్ణోగ్రత', humidity: 'తేమ', rainfall: 'వర్షపాతం', windSpeed: 'గాలి వేగం', uvIndex: 'UV సూచిక', forecast: '7-రోజుల అంచనా', searchCity: 'నగరం వెతుకు...', detectLocation: 'స్థానం గుర్తించు', uploadImage: 'చిత్రం అప్‌లోడ్', useCamera: 'కెమెరా వాడు', analyze: 'విశ్లేషించు', chatPlaceholder: 'పంటలు, వాతావరణం గురించి అడగండి...', newChat: 'కొత్త చాట్', send: 'పంపు', language: 'భాష', selectLanguage: 'భాష ఎంచుకోండి', cropIntelligence: 'పంట మేధస్సు', marketIntelligence: 'మార్కెట్ మేధస్సు', irrigationIntelligence: 'నీటిపారుదల మేధస్సు', pricePerQuintal: 'క్వింటాల్ ధర (₹)', demand: 'డిమాండ్', volatility: 'అస్థిరత', bestTime: 'ఉత్తమ సమయం', waterQuantity: 'నీటి పరిమాణం', method: 'పద్ధతి', tips: 'చిట్కాలు', noDataAvailable: 'డేటా లేదు', loading: 'లోడ్ అవుతోంది...', backToHome: 'హోం కి', features: 'ఫీచర్లు',
  },
  mr: {
    appName: 'ॲग्री-इंटेल X', home: 'मुखपृष्ठ', crops: 'पिके', pestLibrary: 'कीड आणि रोग', weather: 'हवामान', assistant: 'AI सहाय्यक', market: 'बाजार', irrigation: 'सिंचन', pestDetection: 'कीड ओळख', settings: 'सेटिंग्ज', heroTitle: 'बुद्धिमान शेती इथे सुरू होते', heroSubtitle: 'हवामान, पीक, कीड, सिंचन आणि बाजार बुद्धिमत्ता — भारतीय शेतकऱ्यांसाठी.', getStarted: 'सुरू करा', learnMore: 'अधिक जाणून घ्या', viewAll: 'सर्व पहा', season: 'हंगाम', soilType: 'मातीचा प्रकार', waterReq: 'पाण्याची गरज', growthDays: 'वाढीचे दिवस', yieldPerHa: 'उत्पादन/हेक्टर', tempRange: 'तापमान श्रेणी', diseases: 'सामान्य रोग', symptoms: 'लक्षणे', cause: 'कारण', treatment: 'उपचार', pesticide: 'शिफारस कीटकनाशक', prevention: 'प्रतिबंध', severity: 'तीव्रता', affectedCrops: 'प्रभावित पिके', temperature: 'तापमान', humidity: 'आर्द्रता', rainfall: 'पाऊस', windSpeed: 'वाऱ्याचा वेग', uvIndex: 'UV निर्देशांक', forecast: '7-दिवसीय अंदाज', searchCity: 'शहर शोधा...', detectLocation: 'स्थान शोधा', uploadImage: 'प्रतिमा अपलोड', useCamera: 'कॅमेरा वापरा', analyze: 'विश्लेषण', chatPlaceholder: 'पीक, हवामान, कीड बद्दल विचारा...', newChat: 'नवीन चॅट', send: 'पाठवा', language: 'भाषा', selectLanguage: 'भाषा निवडा', cropIntelligence: 'पीक बुद्धिमत्ता', marketIntelligence: 'बाजार बुद्धिमत्ता', irrigationIntelligence: 'सिंचन बुद्धिमत्ता', pricePerQuintal: 'प्रति क्विंटल किंमत (₹)', demand: 'मागणी', volatility: 'अस्थिरता', bestTime: 'सर्वोत्तम वेळ', waterQuantity: 'पाण्याचे प्रमाण', method: 'पद्धत', tips: 'सूचना', noDataAvailable: 'डेटा उपलब्ध नाही', loading: 'लोड होत आहे...', backToHome: 'मुखपृष्ठावर', features: 'वैशिष्ट्ये',
  },
  bn: {
    appName: 'অ্যাগ্রি-ইন্টেল X', home: 'হোম', crops: 'ফসল', pestLibrary: 'কীটপতঙ্গ ও রোগ', weather: 'আবহাওয়া', assistant: 'AI সহকারী', market: 'বাজার', irrigation: 'সেচ', pestDetection: 'কীটপতঙ্গ সনাক্তকরণ', settings: 'সেটিংস', heroTitle: 'বুদ্ধিমান চাষ এখানে শুরু', heroSubtitle: 'আবহাওয়া, ফসল, কীটপতঙ্গ, সেচ এবং বাজার বুদ্ধিমত্তা — ভারতীয় কৃষকদের জন্য.', getStarted: 'শুরু করুন', learnMore: 'আরও জানুন', viewAll: 'সব দেখুন', season: 'ঋতু', soilType: 'মাটির ধরন', waterReq: 'পানির প্রয়োজন', growthDays: 'বৃদ্ধির দিন', yieldPerHa: 'ফলন/হেক্টর', tempRange: 'তাপমাত্রা পরিসীমা', diseases: 'রোগ', symptoms: 'লক্ষণ', cause: 'কারণ', treatment: 'চিকিৎসা', pesticide: 'কীটনাশক', prevention: 'প্রতিরোধ', severity: 'তীব্রতা', affectedCrops: 'আক্রান্ত ফসল', temperature: 'তাপমাত্রা', humidity: 'আর্দ্রতা', rainfall: 'বৃষ্টিপাত', windSpeed: 'বাতাসের গতি', uvIndex: 'UV সূচক', forecast: '৭-দিনের পূর্বাভাস', searchCity: 'শহর খুঁজুন...', detectLocation: 'অবস্থান সনাক্ত', uploadImage: 'ছবি আপলোড', useCamera: 'ক্যামেরা ব্যবহার', analyze: 'বিশ্লেষণ', chatPlaceholder: 'ফসল, আবহাওয়া সম্পর্কে জিজ্ঞাসা করুন...', newChat: 'নতুন চ্যাট', send: 'পাঠান', language: 'ভাষা', selectLanguage: 'ভাষা নির্বাচন', cropIntelligence: 'ফসল বুদ্ধিমত্তা', marketIntelligence: 'বাজার বুদ্ধিমত্তা', irrigationIntelligence: 'সেচ বুদ্ধিমত্তা', pricePerQuintal: 'প্রতি কুইন্টাল মূল্য (₹)', demand: 'চাহিদা', volatility: 'অস্থিরতা', bestTime: 'সেরা সময়', waterQuantity: 'পানির পরিমাণ', method: 'পদ্ধতি', tips: 'টিপস', noDataAvailable: 'ডেটা নেই', loading: 'লোড হচ্ছে...', backToHome: 'হোমে ফিরুন', features: 'বৈশিষ্ট্য',
  },
  gu: {
    appName: 'એગ્રી-ઇન્ટેલ X', home: 'હોમ', crops: 'પાક', pestLibrary: 'જીવાત અને રોગ', weather: 'હવામાન', assistant: 'AI સહાયક', market: 'બજાર', irrigation: 'સિંચાઈ', pestDetection: 'જીવાત ઓળખ', settings: 'સેટિંગ્સ', heroTitle: 'બુદ્ધિશાળી ખેતી અહીં શરૂ થાય છે', heroSubtitle: 'હવામાન, પાક, જીવાત, સિંચાઈ અને બજાર — ભારતીય ખેડૂતો માટે.', getStarted: 'શરૂ કરો', learnMore: 'વધુ જાણો', viewAll: 'બધું જુઓ', season: 'ઋતુ', soilType: 'માટીનો પ્રકાર', waterReq: 'પાણીની જરૂરિયાત', growthDays: 'વૃદ્ધિના દિવસો', yieldPerHa: 'ઉત્પાદન/હેક્ટર', tempRange: 'તાપમાન શ્રેણી', diseases: 'રોગો', symptoms: 'લક્ષણો', cause: 'કારણ', treatment: 'સારવાર', pesticide: 'જંતુનાશક', prevention: 'નિવારણ', severity: 'ગંભીરતા', affectedCrops: 'અસરગ્રસ્ત પાક', temperature: 'તાપમાન', humidity: 'ભેજ', rainfall: 'વરસાદ', windSpeed: 'પવનની ગતિ', uvIndex: 'UV ઇન્ડેક્સ', forecast: '7-દિવસની આગાહી', searchCity: 'શહેર શોધો...', detectLocation: 'સ્થાન શોધો', uploadImage: 'છબી અપલોડ', useCamera: 'કેમેરા વાપરો', analyze: 'વિશ્લેષણ', chatPlaceholder: 'પાક, હવામાન વિશે પૂછો...', newChat: 'નવી ચેટ', send: 'મોકલો', language: 'ભાષા', selectLanguage: 'ભાષા પસંદ કરો', cropIntelligence: 'પાક બુદ્ધિ', marketIntelligence: 'બજાર બુદ્ધિ', irrigationIntelligence: 'સિંચાઈ બુદ્ધિ', pricePerQuintal: 'ક્વિન્ટલ દીઠ ભાવ (₹)', demand: 'માંગ', volatility: 'અસ્થિરતા', bestTime: 'શ્રેષ્ઠ સમય', waterQuantity: 'પાણીનું પ્રમાણ', method: 'પદ્ધતિ', tips: 'ટિપ્સ', noDataAvailable: 'ડેટા ઉપલબ્ધ નથી', loading: 'લોડ થઈ રહ્યું છે...', backToHome: 'હોમ પર', features: 'વિશેષતાઓ',
  },
  pa: {
    appName: 'ਐਗਰੀ-ਇੰਟੈਲ X', home: 'ਹੋਮ', crops: 'ਫ਼ਸਲਾਂ', pestLibrary: 'ਕੀੜੇ ਅਤੇ ਰੋਗ', weather: 'ਮੌਸਮ', assistant: 'AI ਸਹਾਇਕ', market: 'ਬਾਜ਼ਾਰ', irrigation: 'ਸਿੰਚਾਈ', pestDetection: 'ਕੀੜੇ ਦੀ ਪਛਾਣ', settings: 'ਸੈਟਿੰਗਾਂ', heroTitle: 'ਸਮਝਦਾਰ ਖੇਤੀ ਇੱਥੇ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ', heroSubtitle: 'ਮੌਸਮ, ਫ਼ਸਲ, ਕੀੜੇ, ਸਿੰਚਾਈ ਅਤੇ ਬਾਜ਼ਾਰ ਬੁੱਧੀ — ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਲਈ.', getStarted: 'ਸ਼ੁਰੂ ਕਰੋ', learnMore: 'ਹੋਰ ਜਾਣੋ', viewAll: 'ਸਭ ਵੇਖੋ', season: 'ਮੌਸਮ', soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ', waterReq: 'ਪਾਣੀ ਦੀ ਲੋੜ', growthDays: 'ਵਾਧੇ ਦੇ ਦਿਨ', yieldPerHa: 'ਝਾੜ/ਹੈਕਟੇਅਰ', tempRange: 'ਤਾਪਮਾਨ ਸੀਮਾ', diseases: 'ਬਿਮਾਰੀਆਂ', symptoms: 'ਲੱਛਣ', cause: 'ਕਾਰਨ', treatment: 'ਇਲਾਜ', pesticide: 'ਕੀਟਨਾਸ਼ਕ', prevention: 'ਰੋਕਥਾਮ', severity: 'ਗੰਭੀਰਤਾ', affectedCrops: 'ਪ੍ਰਭਾਵਿਤ ਫ਼ਸਲਾਂ', temperature: 'ਤਾਪਮਾਨ', humidity: 'ਨਮੀ', rainfall: 'ਵਰਖਾ', windSpeed: 'ਹਵਾ ਦੀ ਗਤੀ', uvIndex: 'UV ਸੂਚਕ', forecast: '7-ਦਿਨ ਦੀ ਭਵਿੱਖਬਾਣੀ', searchCity: 'ਸ਼ਹਿਰ ਖੋਜੋ...', detectLocation: 'ਸਥਾਨ ਲੱਭੋ', uploadImage: 'ਚਿੱਤਰ ਅੱਪਲੋਡ', useCamera: 'ਕੈਮਰਾ ਵਰਤੋ', analyze: 'ਵਿਸ਼ਲੇਸ਼ਣ', chatPlaceholder: 'ਫ਼ਸਲ, ਮੌਸਮ ਬਾਰੇ ਪੁੱਛੋ...', newChat: 'ਨਵੀਂ ਚੈਟ', send: 'ਭੇਜੋ', language: 'ਭਾਸ਼ਾ', selectLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ', cropIntelligence: 'ਫ਼ਸਲ ਬੁੱਧੀ', marketIntelligence: 'ਬਾਜ਼ਾਰ ਬੁੱਧੀ', irrigationIntelligence: 'ਸਿੰਚਾਈ ਬੁੱਧੀ', pricePerQuintal: 'ਕੁਇੰਟਲ ਭਾਅ (₹)', demand: 'ਮੰਗ', volatility: 'ਅਸਥਿਰਤਾ', bestTime: 'ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ', waterQuantity: 'ਪਾਣੀ ਦੀ ਮਾਤਰਾ', method: 'ਤਰੀਕਾ', tips: 'ਸੁਝਾਅ', noDataAvailable: 'ਡੇਟਾ ਉਪਲਬਧ ਨਹੀਂ', loading: 'ਲੋਡ ਹੋ ਰਿਹਾ...', backToHome: 'ਹੋਮ ਤੇ', features: 'ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ',
  },
  ml: {
    appName: 'അഗ്രി-ഇൻ്റൽ X', home: 'ഹോം', crops: 'വിളകൾ', pestLibrary: 'കീടങ്ങളും രോഗങ്ങളും', weather: 'കാലാവസ്ഥ', assistant: 'AI സഹായി', market: 'വിപണി', irrigation: 'ജലസേചനം', pestDetection: 'കീട തിരിച്ചറിയൽ', settings: 'ക്രമീകരണങ്ങൾ', heroTitle: 'ബുദ്ധിപരമായ കൃഷി ഇവിടെ തുടങ്ങുന്നു', heroSubtitle: 'കാലാവസ്ഥ, വിള, കീടം, ജലസേചനം, വിപണി ബുദ്ധി — ഇന്ത്യൻ കർഷകർക്കായി.', getStarted: 'ആരംഭിക്കുക', learnMore: 'കൂടുതൽ അറിയുക', viewAll: 'എല്ലാം കാണുക', season: 'സീസൺ', soilType: 'മണ്ണ് തരം', waterReq: 'ജല ആവശ്യം', growthDays: 'വളർച്ച ദിവസങ്ങൾ', yieldPerHa: 'വിളവ്/ഹെക്ടർ', tempRange: 'താപനില പരിധി', diseases: 'രോഗങ്ങൾ', symptoms: 'ലക്ഷണങ്ങൾ', cause: 'കാരണം', treatment: 'ചികിത്സ', pesticide: 'കീടനാശിനി', prevention: 'പ്രതിരോധം', severity: 'തീവ്രത', affectedCrops: 'ബാധിത വിളകൾ', temperature: 'താപനില', humidity: 'ഈർപ്പം', rainfall: 'മഴ', windSpeed: 'കാറ്റ് വേഗത', uvIndex: 'UV സൂചിക', forecast: '7-ദിവസ പ്രവചനം', searchCity: 'നഗരം തിരയുക...', detectLocation: 'സ്ഥാനം കണ്ടെത്തുക', uploadImage: 'ചിത്രം അപ്‌ലോഡ്', useCamera: 'ക്യാമറ ഉപയോഗിക്കുക', analyze: 'വിശകലനം', chatPlaceholder: 'വിള, കാലാവസ്ഥ കുറിച്ച് ചോദിക്കുക...', newChat: 'പുതിയ ചാറ്റ്', send: 'അയയ്ക്കുക', language: 'ഭാഷ', selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക', cropIntelligence: 'വിള ബുദ്ധി', marketIntelligence: 'വിപണി ബുദ്ധി', irrigationIntelligence: 'ജലസേചന ബുദ്ധി', pricePerQuintal: 'ക്വിന്റൽ വില (₹)', demand: 'ഡിമാൻഡ്', volatility: 'അസ്ഥിരത', bestTime: 'മികച്ച സമയം', waterQuantity: 'ജല അളവ്', method: 'രീതി', tips: 'ടിപ്പുകൾ', noDataAvailable: 'ഡാറ്റ ലഭ്യമല്ല', loading: 'ലോഡ് ചെയ്യുന്നു...', backToHome: 'ഹോമിലേക്ക്', features: 'സവിശേഷതകൾ',
  },
};

export const languageNames: Record<SupportedLanguage, string> = {
  en: 'English',
  hi: 'हिन्दी',
  kn: 'ಕನ್ನಡ',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  mr: 'मराठी',
  bn: 'বাংলা',
  gu: 'ગુજરાતી',
  pa: 'ਪੰਜਾਬੀ',
  ml: 'മലയാളം',
};

export function getTranslations(lang: SupportedLanguage): TranslationStrings {
  return translations[lang] || translations.en;
}

export function getDefaultLanguage(): SupportedLanguage {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('agri-intel-lang') as SupportedLanguage | null;
    if (stored && translations[stored]) return stored;
  }
  return 'en';
}

export function setLanguage(lang: SupportedLanguage): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('agri-intel-lang', lang);
  }
}