import { v4 as uuidv4 } from 'uuid';


const data = [
    {
        'Name':require('./photos/tv/insignafiretv.jpg'),
        'Title':'INSIGNIA 32-inch Class F20 Series Smart HD 720p Fire TV, Alexa, Apple AirPlay, with Compatible Kwalicable High Speed 6FT HDMI Cable',
        'Rating':4.1,
        'Tag':'tv',
        'Price':179,
        'Description':`HIGH DEFINITION: View your favorite movies, shows and games on this 720p high definition smart screen.
        COLLABORATIVE CONTROL: The Alexa Voice Remote lets you easily control your entertainment, search across apps, switch inputs, and more using just your voice. Press and hold the voice button and ask Alexa to easily find, launch, and control content, and even switch to cable.`
    },
    {
        'Name':require('./photos/tv/TCL32iinch.jpg'),
        'Title':'TCL 32-Inch Class S3 1080p LED Smart TV with Google TV (32S350G, 2023 Model), Google Assistant Built-in with Voice Remote, Compatible with Alexa, Streaming FHD Television,Black',
        'Rating':4.2,
        'Tag':'tv',
        'Price':138,
        'Description': `1080P Full HD Resolution: experience your favorite movies and TV shows in stunning high-definition picture quality for enhanced clarity and detail.
        HDR (HDR10, & HLG): Enjoy enhanced contrast, accurate colors and fine details utilizing all the most advanced HDR formats.
        Google TV Smart OS : The entertainment you love. Google TV brings your favorite movies, shows, and live shows together.
        FullView Metal Bezel-less Design: Elegant edge-to-edge glass design for a modern design that blends seamlessly into any home`

    },
    {
        'Name':require('./photos/tv/LGUHD.jpg'),
        'Title':'LG 65-Inch Class UQ7570 Series 4K Smart TV, AI-Powered 4K, Cloud Gaming (65UQ7570PUJ, 2022), Black',
        'Rating':4.1,
        'Tag':'tv',
        'Price':150,
        'Description': `a5 GEN5 AI PROCESSOR: Enhance your picture and sound with AI from the a5 Gen5 AI Processor..Standby Power :＜0.5 watts
        WEBOS 22: Customize your viewing experience with separate accounts and personalized recommendations for every member of your family.
        ULTIMATE STREAMING: Find your faves fast with built-in access to Netflix, Prime Video, Apple TV app, Disney+, HBO Max and instant access to over 300+ free LG Channels with everything from comedy to movies to sports.`
    },
    {
        'Name':require('./photos/tv/samsungcrystal.webp'),
        'Title':'SAMSUNG 65-Inch Class Crystal UHD 4K CU8000 Series PurColor,Object Tracking Sound Lite, Q-Symphony, Motion Xcelerator, Ultra Slim, Solar Remote, Smart TV with Alexa Built-in (UN65CU8000,2023 Model)',
        'Rating':4.3,
        'Tag':'tv',
        'Price':180,
        'Description': `DYNAMIC CRYSTAL COLOR: A billion shades of color pop into view when you turn on this TV; Every subtle variation becomes clear with Dynamic Crystal Color—tech that achieves a different level of UHD using advanced technology.voltage : 120 volts
        CRYSTAL PROCESSOR W/ 4K UPSCALING: Watch the content you love upgraded to dazzling 4K resolution; You’ll be able to better enjoy your TV’s capabilities as the Crystal Processor automatically transforms color, sound and more`
    },
    {
        'Name':require('./photos/tv/samsungoled.jpg'),
        'Title':'SAMSUNG 55-Inch Class QLED 4K Q60C Series Quantum HDR, Dual LED, Object Tracking Sound Lite, Q-Symphony, Motion Xcelerator, Gaming Hub, Smart TV with Alexa Built-in (QN55Q60C, 2023 Model)',
        'Rating':4.4,
        'Tag':'tv',
        'Price':170,
        'Description': `100% COLOR VOLUME W/ QUANTUM DOT: Take in a billion shades of unwavering color and enjoy vivid, lifelike color at any brightness level as Quantum Dot technology works to create every shade you see on screen*
        QUANTUM PROCESSOR LITE W/ 4K UPSCALING: See shows and movies in a whole new light with 4K optimization; Enjoy enhanced clarity and depth in every scene as our Quantum Processor Lite with 4K Upscaling automatically transforms everything you.`
    },
    {
        'Name':require('./photos/tv/impecca.jpg'),
        'Title':'Impecca 32” Frameless TV HD Ready 720p Picture Quality Built-in Stereo Speakers 2X HDMI, 2X USB Ports, Full Function Remote Control Wall mountable VESA Compatible Energy Star, TL3202H',
        'Rating':4.2,
        'Tag':'tv',
        'Price':150,
        'Description': `Note: Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.`
    },
    {
        'Name':require('./photos/tv/sony.jpg'),
        'Title':'Sony 43 Inch 4K Ultra HD TV X85K Series: LED Smart Google TV(Bluetooth, Wi-Fi, USB, Ethernet, HDMI) with Dolby Vision HDR and Native 120HZ Refresh Rate KD43X85K- 2022 Model, Black',
        'Rating':4.5,
        'Tag':'tv',
        'Price':200,
        'Description': `INTELLIGENT TV PROCESSING– The 4K HDR Processor X1 delivers a picture that is smooth and clear, full of rich colors and detailed contrast.Image Aspect ratio:16:9.Controller type:Voice Control
        INTELLIGENT MOTION HANDLING – See blur-free picture quality in fast-moving sports and action-packed movies with native 120Hz refresh rate and Motionflow XR technology. Display Off Mode helps save energy by turning the picture display off without needing to put the TV into full stand-by mode, so audio can still be enjoyed`
    },



    {
        'Name':require('./photos/mobiles/samsungs23.jpg'),
        'Title':'SAMSUNG Galaxy S23+ Plus Cell Phone, Factory Unlocked Android Smartphone, 256GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Green',
        'Rating':4.6,
        'Tag':'mobile',
        'Price':100,
        'Description': `CAPTURE THE NIGHT IN LOW LIGHT: Whether you’re headed to a concert or romantic night out, there’s no such thing as bad lighting with Night Mode; Galaxy S23 plus lets you capture epic content in any setting with stunning Nightography
        HIGH CAMERA RESOLUTION: Create crystal-clear content worth sharing with the 50MP high-resolution camera of Galaxy S23 plus; Whether you’re posting or printing, Galaxy S23 plus always does the moment justice`
    },
    {
        'Name':require('./photos/mobiles/samsungfluip.jpg'),
        'Title':'SAMSUNG Galaxy S23+ Plus Cell Phone, Factory Unlocked Android Smartphone, 256GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Green',
        'Rating':2.6,
        'Tag':'mobile',
        'Price':120,
        'Description': `EXPANSIVE SCREEN, CINEMATIC EXPERIENCE: Streaming on the go with this big screen is a big deal; Unfold the massive 7.6" screen* on Galaxy Z Fold5 and lose yourself in your favorite content, no matter where you are
        YOUR GAMING EXPERIENCE, ELEVATED: With Galaxy Z Fold5, enjoy mobile games on the cover screen or unfold the interior screen for a more immersive experience; With an impressive processor, power through with a high refresh rate and minimal input delays`
    },
    {
        'Name':require('./photos/mobiles/samasunga54.jpg'),
        'Title':'SAMSUNG Galaxy S23+ Plus Cell Phone, Factory Unlocked Android Smartphone, 256GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Green',
        'Rating':2.6,
        'Tag':'mobile',
        'Price':120,
        'Description': `EXPANSIVE SCREEN, CINEMATIC EXPERIENCE: Streaming on the go with this big screen is a big deal; Unfold the massive 7.6" screen* on Galaxy Z Fold5 and lose yourself in your favorite content, no matter where you are
        YOUR GAMING EXPERIENCE, ELEVATED: With Galaxy Z Fold5, enjoy mobile games on the cover screen or unfold the interior screen for a more immersive experience; With an impressive processor, power through with a high refresh rate and minimal input delays`
    },
    {
        'Name':require('./photos/mobiles/redminote12.jpg'),
        'Title':'Xiaomi Redmi Note 12 4G LTE (128GB + 4GB) Global Unlocked 6.67" 50MP Triple (ONLY T-Moble/Tello/Mint USA Market) + (w/ 33W Fast Car Dual Charger Bundle) (Ice Blue Global + 33W Car Charger)',
        'Rating':4.5,
        'Tag':'mobile',
        'Price':150,
        'Description': `U.S.A. Users : Only Works on Tmobile / Mint / Tello or any under Tmobile Network 4G VoLTE Worldwide Unlocked Dual Nano sim . FCC ID: 2AFZZ16SG
        Dual Nano sim + SD Slot 4G: LTE 4G: LTE TDD B40, B41 4G: LTE FDD B1, B3, B5, B8 3G: WCDMA:1/2/5/8 2G: GSM: B2/B3/B5/B8
        6.67" FHD+ AMOLED DotDisplay Refresh rate: Up to 120Hz Contrast ratio: 4,500,000:1 Technology: 1200nits brightness, SGS eye care, Sunlight Mode, Reading Mode, Contrast ratio: 4500000:1 DCI P3: 100% (typical)`
    },
    {
        'Name':require('./photos/mobiles/xiomiredmi12.jpg'),
        'Title':'Xiaomi Redmi Note 12 Pro 4G (256GB + 8GB) Factory Global Unlocked 6.67" 108MP Pro Triple Camera (Tmobile/Tello/Mint USA Market) + Extra (Fast 33w Dual Car Charger) (Graphite Gray (Global))',
        'Rating':4.6,
        'Tag':'mobile',
        'Price':228,
        'Description': `GLOBAL UNLOCKED, NOT FOR USA MARKET 4G VoLTE Worldwide Unlocked Dual Nano sim . FCC ID: 2AFZZ16AG
        Dual Nano Sim (NO Micro SD slot) SIM 1 + Hybrid (SIM or MicroSD) 4G: LTE FDD:1, 3, 5, 8, 19, 34, 38, 39, 40, 41 3G: WCDMA:1/2/4/5/8/19 2G: Quad Band
        6.67" FHD+ AMOLED DotDisplay Refresh rate: Up to 120Hz Contrast ratio: 4,500,000:1 Resolution: 2400 x 1080`
    },
    {
        'Name':require('./photos/mobiles/xiomiredmi12c.jpg'),
        'Title':'Xiaomi Redmi 12C 4G LTE (64GB + 3GB) Factory Unlocked GSM 6.71" 50MP Dual Camera (ONLY T-Mobile/Mint USA Market) + (w/Fast Car Charger Bundle) (Graphite Gray)',
        'Rating':4.5,
        'Tag':'mobile',
        'Price':100,
        'Description': `USA USERS: Only Works on Tmobile / MiNT USA Market 4G VoLTE Worldwide Unlocked Dual Nano sim . FCC ID: 2AFZZNC4L
        Dual Nano Sim + 1 Slot Micro SD 4G: LTE FDD: 1/2/3/4/5/7/8/20/28 4G: LTE TDD: 38/40/41 3G: WCDMA: 1/2/4/5/8 2G: GSM: Quad Band
        Dual SIM + microSD 6.71" Dot Drop display 1650 x 720 HD+ 20.625: 9 aspect ratio Supports Sunlight display | Reading mode | Color temperature adjustment`
    },

    {
        'Name':require('./photos/mobiles/redmi10.jpg'),
        'Title':'Xiaomi Redmi 10 2022 NFC 4G LTE (128GB + 4GB) LTE GSM Global Unlocked 6.5" 50MP Quad Camera (Not Verizon Sprint Boost Tmobile At&T Cricket) + (w/Fast Car 16W Charger Bundle) (Pebble White)',
        'Rating':4.4,
        'Tag':'mobile',
        'Price':100,
        'Description': `International Model - No Warranty in US. DOES NOT WORK IN USA , UNLOCKED WORLDWIDE FCC ID: 2AFZZK9AG
        Dual Nano sim LTE FDD:2/4/5/12 3G: HSDPA 1/4/5, 2g Quad Band
        Rear Camera: 50MP f/1.8,4 + 8MP Ultra Wide + 2MP Macro + 2MP Depth , Front Camera: 8MP, f/2.0 Supports 2.4G Wi-Fi / 5G Wi-Fi, 5000mAh battery Fast Charger 33w
        `
    },

    {
        'Name':require('./photos/mobiles/iphone13.jpg'),
        'Title':'iPhone 13 Mini 128GB/256GB/512GB Original Mobile Phone 5G LTE iOS A15 Bionic Hexa Core 5.4 Dual 12MP&12MP 4GB RAM Face ID NFC 256GB Face ID/Blue',
        'Rating':4.4,
        'Tag':'mobile',
        'Price':100,
        'Description': `Note: Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.`
    },

    {
        'Name':require('./photos/tv/insignafiretv.jpg'),
        'Title':'INSIGNIA 32-inch Class F20 Series Smart HD 720p Fire TV, Alexa, Apple AirPlay, with Compatible Kwalicable High Speed 6FT HDMI Cable',
        'Rating':4.1,
        'Tag':'tv',
        'Price':179,
        'Description':`HIGH DEFINITION: View your favorite movies, shows and games on this 720p high definition smart screen.
        COLLABORATIVE CONTROL: The Alexa Voice Remote lets you easily control your entertainment, search across apps, switch inputs, and more using just your voice. Press and hold the voice button and ask Alexa to easily find, launch, and control content, and even switch to cable.`
    },
    {
        'Name':require('./photos/men/pant.png'),
        'Title':'Calvin Klein Jeans',
        'Rating':4.2,
        'Tag':'men',
        'Price':1799,
        'Description':`Dark shade, no fade black jeans ,Mid-rise Clean look Stretchable 5 pocket Length: regular`
    },
    {
        'Name':require('./photos/men/jacket.png'),
        'Title':'Men White & Navy Blue Colourblocked Padded Jacket',
        'Rating':4.3,
        'Tag':'men',
        'Price':1999,
        'Description':`Want to make a style statement while staying nice and warm - the HRX Men's Athleisure Quilted Jacket can do just that. Its insulating layer keeps you warm while the high neck wards off the chilly breeze.`
    },
    {
        'Name':require('./photos/men/shirt.png'),
        'Title':'Men Green Slim Fit Gingham Checks Checked Casual Shirt',
        'Rating':4.2,
        'Tag':'men',
        'Price':1499,
        'Description':`Green gingham checked opaque Casual shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem`
    },
    {
        'Name':require('./photos/men/tshirt.png'),
        'Title':'Men Purple Solid Sweatshirt',
        'Rating':4.3,
        'Tag':'men',
        'Price':1799,
        'Description':`Purple solid sweatshirt, has a round neck, long sleeves, straight hem`
    },
    {
        'Name':require('./photos/men/tshirt2.png'),
        'Title':'French Connection Men Pure Cotton Printed T-shirt',
        'Rating':4.0,
        'Tag':'men',
        'Price':1099,
        'Description':`White and grey T-shirt for men Graphic & typography printed Regular length Round neck Short, regular sleeves Knitted pure cotton fabric`
    },
    {
        'Name':require('./photos/women/s1.png'),
        'Title':'Women Rust Brown & Black Embroidered Dobby Weave A-Line Top',
        'Rating':4.1,
        'Tag':'women',
        'Price':1299,
        'Description':`Rust Brown and Black embroidered Dobby Weave A-line top with gathered detail, has a round neck, three-quarter sleeves, and button closure`
    },
    {
        'Name':require('./photos/women/s2.png'),
        'Title':'Ethnic Motifs Zari Pure Silk Banarasi Sarees',
        'Rating':4.2,
        'Tag':'women',
        'Price':1399,
        'Description':`Purple and pink banarasi saree.Ethnic motifs woven design saree with no border.Has zari detail.The saree comes with an unstitched blouse piece.The blouse worn by the model might be for modelling purpose only. Check the image of the blouse piece to understand how the actual blouse piece looks like.`
    },
    {
        'Name':require('./photos/women/s3.png'),
        'Title':'Printed Floral Maxi Dress',
        'Rating':4.0,
        'Tag':'women',
        'Price':1299,
        'Description':`floral print maxi dress,V-neckLong, regular sleeves,Maxi length in flared hemDobby fabric`
    },
    {
        'Name':require('./photos/women/s4.png'),
        'Title':'Geometric Printed Shirt With Palazzo',
        'Rating':4.2,
        'Tag':'women',
        'Price':1259,
        'Description':`This co-ords consists of Printed shirt and Palazzo set
Geometric Printed shirt, has shirt collar, three-quarter sleeves, full placket button closure and regular waist hem
Geometric printed mid-rise palazzos, has drawstring closure and flared hem`
    },
    {
        'Name':require('./photos/women/s5.png'),
        'Title':'Women Navy Blue Typography Printed Pure Cotton T-shirt',
        'Rating':4.3,
        'Tag':'women',
        'Price':1559,
        'Description':`Navy blue Tshirt for women People's and places printed Regular length Round neck Short, drop-shoulder sleeves Knitted cotton fabric`
    },
    {
        'Name':require('./photos/kids/k1.png'),
        'Title':'Boys Navy Blue Self Design Kurta with Pyjamas',
        'Rating':4.4,
        'Tag':'kids',
        'Price':1229,
        'Description':`Navy Blue self design kurta with pyjamas Navy Blue straight knee length kurta, has a mandarin collar, long sleeves, straight hem Navy Blue solid pyjamas, slip-on closure Comes with a nehru jacket`
    },
    {
        'Name':require('./photos/kids/k2.png'),
        'Title':'Girls Floral Printed Angrakha Gotta Patti Pure Cotton Kurta with Sharara',
        'Rating':4.1,
        'Tag':'kids',
        'Price':1329,
        'Description':`Floral printed Anarkali shape Angrakha style V-neck, three-quarter regular sleeves Gotta patti detail Above knee length with flared hem Pure cotton machine weave fabric`
    },
    {
        'Name':require('./photos/kids/k3.png'),
        'Title':'Boys Black Jogger Fit Clean Look Jeans',
        'Rating':4.2,
        'Tag':'kids',
        'Price':729,
        'Description':`Dark shade, no fade black jeans Jogger, mid-rise Clean look Stretchable 4 pocket Length: regular`
    },
    {
        'Name':require('./photos/kids/k4.png'),
        'Title':'Boys Blue Slim Fit Low Distress Light Fade Stretchable Jeans',
        'Rating':4.3,
        'Tag':'kids',
        'Price':729,
        'Description':`Medium shade, light fade blue jeans Slim fit, mid-rise Low distress Stretchable 4 pocket Length: regular`
    },
    {
        'Name':require('./photos/kids/k5.png'),
        'Title':'A T U N Blue Striped Shirt Dress',
        'Rating':4.2,
        'Tag':'kids',
        'Price':799,
        'Description':`Blue polka dot striped shirt dress Shirt collar Three-quarter, regular sleeves Tie-up detail Knee length length in flared hem Cotton fabric Button closure Comes with a belt`
    }
    
]


const dataWithUUIDs = data.map(item => ({
    id: uuidv4(),
    count:0,
    ...item,
}));

export default dataWithUUIDs;

