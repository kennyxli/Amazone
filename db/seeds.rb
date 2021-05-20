# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all


user1 = User.create!(id:1, name:"Guest",email:"guest@guest.com", password:"password")
user2 = User.create!(id:2, name:"Johnny",email:"guest1@guest.com", password:"password")
user3 = User.create!(id:3, name:"Charm",email:"guest2@guest.com", password:"password")
user4 = User.create!(id:4, name:"Jon",email:"guest3@guest.com", password:"password")


Product.create!(
id: 1,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun",  
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device,  
120 MIN. BATTERY LIFE - internal Lithium-ion battery offers double the battery life of previous generations for 2 hours of continuous use,  
5 SPEED RANGE & LED SCREEN - Monitor current speed on LED screen, use with Therabody app,  
ERGONOMIC MULTI-GRIP - provides a number of ways to comfortably hold the device without strain on hands and arms,  
SMART APP INTEGRATION - connects to Therabody app via Bluetooth to run personalized wellness routines based on your behaviors & preferences", 
category:"Massage gun, Theragun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg",
quantity: 24)
Product.create!(
id: 2,
title:"Theragun PRO - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"POWERFULLY QUIET - Proprietary brushless QX150 motor with QuietForce Technology delivers powerful, professional-grade deep muscle treatment as quiet as average massage devices,  
300 min. CONTINUOUS BATTERY LIFE - Includes 2 rechargeable lithium-ion batteries (150 min. each). Charge one while the other is in use and continuously swap for all-day run time.,  
CUSTOMIZABLE SPEED RANGE & OLED SCREEN - Monitor current speed and force on OLED screen, access any speed between 1750-2400 PPMs via Therabody app,  
ROTATING ARM & ERGONOMIC MULTI-GRIP - allows you to hold the device in a number of ways while reducing strain on your hands and arms.,  
SMART APP INTEGRATION - Connects to app via Bluetooth to run personalized wellness routines based on your behaviors & preferences", 
category:"Massage gun, Theragun", 
price: 49999, 
user_id: 1, 
image_url: "thera2.jpg",
quantity: 12)
Product.create!(
id: 3,
title:"Theragun - Massage Gun for Athletes, Portable Body Muscle Massager Professional Deep Tissue Massage Gun for Pain Relief with 6 Massage Heads 20 Speed High-Intensity Vibration Rechargeable Legiral Le3 Massage Gun", 
description:"MUSCLE SORENESS RELIEVES: Helps for relieves tight muscles, soreness, and stiff backs. Great for personal use as well as being one of the best massage devices for professional users, perfect for a physical therapist or chiropractor.,  
CORDLESS & RECHARGEABLE: 2500mAh high-quality rechargeable lithium battery, ensures a 6 hours working time(low speed), takes 1.5-2 hours to be fully charged. 4.1lbs only, you can use it at home, gym, office, etc.,  
6 REPLACEMENT MASSAGE HEADS: Handheld design and 6 replacement heads allow you to reach every muscle, silicone handle is better for gripping, and prevent slips and falls from hand also easy for women using.,  
EASY TO USE: Legiral Deep tissue massage gun has a very easy-to-operate LED control, you can easily adjust the speed and vibration level. Equipped with a portable suitcase so that you can relax your muscles anytime, anywhere.", 
category:"Massage gun, Theragun", 
price: 12999, 
user_id: 1, 
image_url: "thera3.jpg",
quantity: 36)
Product.create!(
id: 4,
title:"Theragun - Muscle Massage Gun Deep Tissue for Athletes Deep Tissue Massage Gun Percussion Muscle Massager for Muscles Handheld Deep Tissue Massager Gun 6 Speed High Intensity Vibration-2600mAh-Include 6 Heads", 
description:"[SAY GOOD TO PAIN-FREE LIFE]: This massage gun deep tissue is designed for deep muscle treatment. It has a powerful motor that can make the surrounding area of ​​the soreness insensitive through gentle pressure waves, and gradually vibrate when penetrating the target area. muscle. Whether you are an avid athletes or just a patient with muscle pain, this massage gun can make your body healthier and help increase blood flow and myofascial release.,  
[SIX-SPEED SETTING]: This massage gun deep tissue has a total of 6 speeds from 20HZ to 70HZ is only 55dB at 6 speeds. The lowest driving gear produces 1200 RPM and the highest is 3500RPM. 6 speeds (1 wake muscles, 2 release fascia, 3 eliminate lactic acid, 4 Deep tissue massage, 5 muscle recovery, 6 blows to the body), so everyone can find their favorite speed at home or in the office.,  
[PROFESSIONAL MASSAGE HEAD]: Ball head can be used for arms, lower back, hips, thighs and calves; bullet head can be used for meridians, joints, palms, soles of feet; BFla head can be used for relaxation and shaping of all muscle groups; U-shaped is available On the shoulders, spine and bilateral muscles.,  
[LONG BATTERY LIFE]: Massage gun deep tissue with unique Quiet Glide technology and 24V brushless high-torque motor, 2600mAh rechargeable battery (battery is not removable). It 3 hours full charge can use 4-6 hours.,  
[PORTABLE DESIGN AND SILENT OPERATION]: The muscle massage gun weighs 1.78lb and has a simple storage bag to make it easy to carry anytime, anywhere. Using ABS + PC material is non-slip and sturdy, whether at home, office or gym, relax and even rejuvenate on the road. The brushless motor runs silently and can be used without disturbing others.", 
category:"Massage gun, Theragun", 
price: 8999, 
user_id: 1, 
image_url: "thera4.jpg",
quantity: 18)
Product.create!(
id: 5,
title:"Resistance Bands Set 13pcs, Workout Bands Recredo, Exercise Bands Set with Door Anchor, Handles and Ankle Straps, Stackable Up to 150 lbs, for Resistance Training, Physical Therapy, Home Workouts", 
description:"Different Color & Stackable Up to 150 LBS: 5pcs resistance bands correspond to different colors , Yellow (10 lbs.), Blue (20 lbs.), Green (30 lbs.), Black (40 lbs.), Red(50 lbs.), 48 inches in length and can be used alone stacked in any combination to a maximum equivalent of 150 lbs.,  
High Quality Material (Latex not TPE): Resistance bands made from 100% high-grade natural latex with double layered tubing to prevents bands snapping and provide longer durability.,  
Suitable for Variety of Exercise: The resistant bands set assists you in different exercises, suitable for a variety of exercise to Calorie Burning, Muscle Building and Fat Shredding Workout Program to toning your arms,shoulders, chest, glutes, legs etc.,  
Perfect Set for Personal Home GYM: The resistant bands set includes 5 exercise bands with different resistance, 1 door anchor, 1 bands protective sleeve and 1 figure 8 exercise cord , 2 cushioned handles, 2 ankle straps, 1 waterproof carrying bag and guide book.,  
Lightweight and portable: The resistant bands set is portable and come with a waterproof bag for you to carry it anywhere, so you can use this resistance bands set to exercise, be it to your home, gym or even as you travel therefor you can continue with your work out routine anywhere you go.", 
category:"Resistance Bands", 
price: 1999, 
user_id: 1, 
image_url: "resist1.jpg",
quantity: 29)
Product.create!(
id: 6,
title:"Black Mountain Products Loop Resistance Bands Exercise Bands with Carrying Case (Set of 5), 9 inch", 
description:"5 Resistance Bands Include: Comes in 5 different resistance strength levels: X-Light, Light, Medium, Heavy and X-Heavy.,  
Efficient Workout: Loop Resistance Bands increase the effectiveness of your exercises. Used for a range of workouts, such as Yoga, Pilates,etc.,  
Multifunctional: The resistance band set can be used to exercise all parts of muscles such as arms, abdomen, glutes and legs.,  
Gym-in-your-pocket: The exercise bands take up little space so that you can use them at home or carry on the way, such as in office, on a vacation.,  
What's Included: 5 exercise loop bands with color-coded resistance levels, portable carry bag and instructions manual.", 
category:"Resistance Bands", 
price: 999, 
user_id: 1, 
image_url: "resist2.jpg",
quantity: 48)
Product.create!(
id: 7,
title:"Whatafit Pull Up Assist Bands Resistance Bands for Men and Women, Assistance Band for Exercise, Chin Ups, Powerlifting, Training, Gyms, Mobility Home Fitness (Set of 4)", 
description:"【Universal Partner for Workout】Each exercise band offers different level of resistance, both for heavy duty pull up training, adding resistances to bench press, squats, push up, Olympic lifts. A must have sports accessory for Pilates, calisthenics, yoga, powerlifting, crossfit etc.,  
【Fit All Exercise Levels】Whether calves or seasoned athlete, this resistance bands will help to take your fitness training & rehab to the next level. Use these workout bands individually or combine to receive additional tension levels. Exercise safely on your own, anytime & anywhere.,  
【Durable Natural Latex】Red:15-35 lbs., Black:25-65 lbs., Purple:35-85 lbs., Green:50-125 lbs. Our pull up bands can be stretched repeatedly year after year. No odor, no poison. Environmentally friendly latex material isn't only durable, but also healthy.,  
【Meet 90% of the Body Muscle Training】Our stretch bands are best for toning up your arms, chest, core, back, ABS, butt, legs or more; Obviously improves the muscle strength, enhances the body flexibility. Also can be used for rehabilitation training & physical therapy.,  
【Suitable For Daily Use】Each fitness bands is carefully constructed to resist snapping and breaking，which are able to withstand intense daily exercise sessions. Now enjoy the exercise with WHATAFIT pull up bands resistance bands!", 
category:"Resistance Bands", 
price: 2999, 
user_id: 1, 
image_url: "resist3.jpg",
quantity: 33)
Product.create!(
id: 8,
title:"MKAS 3 Pack Long Resistance Bands Set Fabric for Women Elastic Fitness Body Bands Heavy Duty Stretch Exercise Pull Up Mobility Assistance Workout Resistance Bands Set for Home Gym", 
description:"【 Brand: MKAS】If you need other product about fitness at home/gym, Please click our brand 'MKAS' to visit our store!,  
Kindly Note: If you are a beginner, please follow the instructions and learn to use resistance band training in the correct posture. If you want to use a higher resistance, the long resistance bands can be stacked or folded for use.,  
Comfortable & Durable, Non-Slip or No Snapping】MKAS long resistance bands are made out of superior soft and skin-friendly polyester cotton stretch fabric, which results in no roll-up and breakage while exercising. Compared with traditional rubber and latex loop exercise band - they’re harsh for your skin, are quick to wear out, or break completely - Our workout bands improve elasticity, can maximize comfort and avoid pinch skin, which is the best choice for sports fitness.,  
【3 Pieces in 1 Set, Suitable for Full-Body Workout】Each fabric resistance band offers a different amount of resistance, ranging from 20 to 90 lbs of resistance. This elastic workout band is designed for weight training, cross-training, or physical preparation sessions, calisthenics, pole fitness, powerlifting, chin-ups, pull-ups, muscle building, yoga, physical therapy, pilates, stretching, upper and lower body exercises. It is a versatile accessory that will become a must for your workouts.,  
【Easy to Use & Multifunction】Compare with a fancy gym membership or expensive group class, our lightweight excersice resistance bands set can work your entire body (shoulders, arms, chest, hips, glute, legs, abs), which means you can avoid stockpiling a mass of heavy, bulky exercise tools. The resistance band for women can be used alone, with a training partner or anywhere you feel the need to give your muscles some extra challenge. Suitable for beginners and experienced fitness athletes.",  
category:"Resistance Bands", 
price: 1899, 
user_id: 1, 
image_url: "resist4.jpg",
quantity: 7)
Product.create!(
id: 9,
title:"Magic Bullet Blender, Small, Silver, 11 Piece Set", 
description:"11 piece blender set: Includes blender, additional blender cups, blades, recipe book & more,  
The magic bullet chops, mixes, blends, whips, grinds and more. Cups are made out of high-impact plastic,  
Effortlessly create your favorite meals and snacks like smoothies, omelets, sauces and dips. 250 watts high-torque power base,  
Included recipe book gets you started making quick, easy, and delicious dishes from appetizers to desserts. Add 1/2 cup water for smooth blend for vegetables", 
category:"Blenders", 
price: 3999, 
user_id: 1, 
image_url: "blender1.jpg",
quantity: 21)
Product.create!(
id: 10,
title:"NutriBullet NB9-1301K Pro 13 Pcs Onyx Black, 900W", 
description:"With 900 watts of power, the NutriBullet Pro is faster and stronger than the original, but just as simple to use. Load it up with dense whole foods like nuts, seeds, hard fruits, and kale, then push, twist and blend your way to a healthier lifestyle.Oothies,  
Optimized 900-watt motor and refined nutrient extraction blades blend The toughest whole foods into nutritious shakes, smoothies, and nut butters.,  
Included: (1) 900W motor base, (1) Extractor blade, (2) 32 oz. Cup, (2) to-go lid, (2) lip ring, (2) lip ring with handle and recipe book,  
Powerful stainless steel Extractor blades use Cyclonic action to break down tough ingredients. High-performance, BPA-free plastic cups are long lasting and Durable. All of the cups and lids can be hand washed and are also top rack dishwasher safe,  
Hassle-free cleaning - simply twist off the blade, rinse with soap and water, and put the cups in the top rack of the dishwasher. This item comes with a 1 year Limited warranty.,  
Included components - 1 power base, 1 Cross blade, 2 colossal cups, 2 Sippy lids, 2 lip rings, 2 lip rings with handles, 1 care and instruction manual, 1 pocket Nutritionist, 1 blasting for optimum health recipes book", 
category:"Blenders", 
price: 7999, 
user_id: 1, 
image_url: "blender2.jpg",
quantity: 37)
Product.create!(
id: 11,
title:"Ninja BL480D Nutri 1000 Watt Auto-IQ Base for Juices, Shakes & Smoothies Personal Blender, 18 and 24 Oz, Black/Silver", 
description:"Auto IQ technology optimizes ninja: Pro extractor blades and power to deliver powerful nutrient and vitamin extraction,  
Powerful nutrient and vitamin extraction provides great tasting, nutritious beverages,  
1000 watt motor has the power to crush through whole fruits, vegetables and ice in seconds,  
Nutri Ninja pro extractor blades rotate at high speed to liquefy ingredients into smooth nutrient juices, smoothies and purees. Use a damp cloth to wipe the motor base clean. Never submerge the motor base in water,  
Includes: (1) small 18 ounce Nutri Ninja cup, (1) regular 24 ounce Nutri Ninja cup, (2) sip & seal lids, (1) pro extractor blades, instruction book, getting started guide with product tips and recipes", 
category:"Blenders", 
price: 9999, 
user_id: 1, 
image_url: "blender3.jpg",
quantity: 51)
Product.create!(
id: 12,
title:"OYeet Personal Blender Shakes and Smoothies 10 Sec Quick Nutrition Extractor 1000W iF Design Award BPA Free Recipes Available(Coral Red)", 
description:"IF Design Award: The most powerful personal blender for making nutrient and vitamin extraction- packed smoothies. Load it up with your favorite whole foods like nuts, berries and spinach, then push, twist and blend your way to a healthier lifestyle. Easily fits office, home, gym, hotel, homestay.,  
Fast and Effortless: Customized 1000-watt max power (High-Speed 30000Rpm）and refined nutrient extractor blades blend The toughest whole foods into nutritious shakes, smoothies, and nut butters. Nutrient Extraction in 10 seconds , simple and intuitive design makes this a device you'll use every day.,  
Thick Smoothie Blender: Featured with Vortex Blending System, the blender can easily make thick smoothies , green smoothies , breakfast shakes , protein shakes and keto shakes. Effortlessly pulverizes ice and frozen fruits, vegetables, superfoods, seeds , etc.,  
Convenient and Safe: The sport bottle and lid are just rinse with running water and made of BPA-free Eastman Tritan.Thickened bottle is safe to use and with no breaking risks. Wrapped by BPA free silicon sleeve that allows you bring the bottle to any outdoor activities. Just one-touch to open the lid, free your hands for hiking, driving, biking or any indoor workouts.,  
Engineered to Last: FDA, ETL, CE, LFGB certificated. The essential of long motor life is preventing it from overheating. OYeet GoPower has the advanced structure that ensures perfect airflow circulation around the motor and keeps the blender durable for years.", 
category:"Blenders", 
price: 6899, 
user_id: 1, 
image_url: "blender4.jpg",
quantity: 32)
Product.create!(
id: 13,
title:"Gaiam Essentials Thick Yoga Mat Fitness & Exercise Mat with Easy-Cinch Yoga Mat Carrier Strap, 72'L x 24'W x 2/5 Inch Thick", 
description:"Fitness & exercise mat: Classic yoga mat is great for all types of fitness and exercise routines including yoga, pilates and any floor exercise where additional cushion and support is appreciated,  
Extra thick yoga mat: These 2/5 inch exercise mats make for the ideal all purpose fitness mat in the studio or at home, even around the house under knees or as a standing pad or cushion,  
Non toxic & 6p free PVC yoga mat is a healthier choice for you and the planet and free of DEHP, DBP, BBP, DINP, DIDP and DNOP,  
Includes yoga mat carrier strap: Included with your yoga mat is a carrying strap so you can strap up your mat and go,  
Dimensions: 72 inches L x 24 inches W x 2/5 Inch (3.11 pounds)", 
category:"Yoga Mat", 
price: 1699, 
user_id: 1, 
image_url: "yoga1.jpg",
quantity: 32)
Product.create!(
id: 14,
title:"Dralegend Yoga Mat Exercise Fitness Mat - High Density Non-Slip Workout Mat for Yoga, Pilates & Exercises, Anti - Tear, Sweat - Proof, Classic 1/4 Inch", 
description:"Upgraded Eco & Skin Friendly Material - Say NO to a skin-irritant and slippery yoga mat! You won’t want a yoga mat that can be only used for few times. Made of premium TPE, Dralegend yoga mat solves many problems with other materials, unlike rubber and PVC, it's odorless, much more resilient, incredibly lightweight, extra soft to practice on and anti–skid.,  
Dual - Side Anti-Skid Design - Stop making your yoga a toil! No one enjoys slipping and sliding - You need a truly grippy and safe fitness mat, especially when doing hot yoga.,  
Just The Right Amount Of Support & Cushion - Did you know? Too much thickness brings down the stability of the mat while a thin one will leave you bruised knees. That’s why we choose the best thickness - 6mm(0.24 inch).,  
Easier To Clean & Ideal Size - It’s okay to get lazy! Cleaning this exercise mat is more than easy - just wipe it with soap water, and rinse under water. Occasional washing will help it remain immaculate, as though you bought it yesterday! With a large size of 72 x 26 x 0.24 inch, you don’t have to worry your toes stretching out of the mat anymore.,  
Lightweight & Portable -The fitness mat weights only 32ounce. Rest sure with our 2 year quality assurance, if you feel dissatisfied in anyway, you can always contact us to get a replacement or refund, we stand behind our brand.",  
category:"Yoga Mat", 
price: 1899, 
user_id: 1, 
image_url: "yoga2.jpg",
quantity: 32)
Product.create!(
id: 15,
title:"i-CHONY Yoga Mat for Women, 1/4 Inch Thick High Density Non-Slip Floor Exercise Fitness Yoga Mat Tear Resistant Workout Mat with Carrying Strap", 
description:"HIGH QUALITY MATERIAL: The exercise fitness yoga mat has superior durability, resilience and slip-resistance as it is constructed with premium TPE. It features non-metallic, non-toxic and non-irritating.,  
ANTI-SLIP DESIGN: This yoga mat provides an excellent grip. The wavy side is suitable for wooden floors, marble floors and grass. The other side has a laser etched texture to prevent your hands or feet from slipping. Suitable for all kinds of exercise methods, ensuring your safety while exercising.,  
NON-ABSORBENT & WATERPROOF: The natural TPE rubber of this exercise mat does not absorb moisture or sweat. This prevents it from getting dirty and stinky, making it sterile and hygienic when used. It is also very easy to clean, just wipe with a damp cloth and dry gently to prepare for your next workout.,  
PERFECT THICKNESS: The 1/4 Inch thickness will provide you an excellent experience while exercising. Giving you enough comfort to workout better with any exercise and improving your experience, protecting your knees and joints, great to protect your body and joints effectively.,  
LIGHTWEIGHT AND PORTABLE: Includes a carrying strap to help you store the Pilates mat perfectly, lightweight and portable. You can take the fitness mat with you anywhere, when you travel, gym, yoga room, stadium, lawn, balcony, etc.", 
category:"Yoga Mat", 
price: 1999, 
user_id: 1, 
image_url: "yoga3.jpg",
quantity: 32)
Product.create!(
id: 16,
title:"Yoga Mat with Strap, 1/3 Inch Extra Thick Yoga Mat Double-Sided Non Slip, Professional TPE Yoga Mats for Women Men, Workout Mat for Yoga, Pilates and Floor Exercises", 
description:"PREMIUM ECO FRIENDLY TPE MATERIAL - The material of a mat will determine the texture, stickiness, sponginess, and eco-friendliness. Most yoga mats are made of either plastic or rubber. BEAUTYOVO eco friendly TPE yoga mat moisturizes the advantages of plastic and rubber in one, which features higher elasticity, better abrasion & tear resistance, and more eco-friendly than traditional PVC, NBR materials. It last a long time and can endure many yoga practice.,  
AMPLE CUSHIONING & SPACE -- 1/3-Inch thick yoga mat provides more cushioning and stability for your body than a thin yoga matt and is safer and more comfortable. It is perfect for practicing balance postures, back support during inversions, and other yoga postures! The size of 72''x24''x1/3' large yoga mat can satisfy all yoga, pilates, and general floor exercise needs for women and men!,  
GRIPPE NON-SLIP TEXTURE FOR ADDED STABILITY -- The bumpy non-slip texture on the surface and bottom of the yoga mat thick increases traction for stronger, giving you a firm connection to the floor, keep you from slipping around. You can safely do any poses on the non slip yoga mat without worrying about injury!,  
YOGA MAT WITH STRAP -- Comes with a dual-use yoga mat strap, which is also a popular yoga accessory. It can be used as a portable YOGA MAT CARRIER STRAP or twice as a YOGA STRETCHING STRAP! BEAUTYOVO pilates mat weighs only 2 pounds, you can take it to a yoga studio, gym, or anywhere without any burden, and you can truly realize - YOGA TO GO!,  
IDEAL FOR ALL LEVELS YOGA ENTHUSIAST -- A unisex fitness mat built for yoga, pilates and general ground exercise, ideal for both beginners & advanced yoga practitioners. 100% customer satisfaction is our unconditional guarantee! If you are not 100% thrilled with your TPE Yoga Mat, we promise to offer you a prompt solution to let you 100% satisfied!", 
category:"Yoga Mat", 
price: 2299, 
user_id: 1, 
image_url: "yoga4.jpg",
quantity: 32)

Review.delete_all

Review.create!(
    id: 1,
    title: "Works And Worth Every Penny",
    body: "Thought the price was a little high, but was swayed by the reviews and an article I read in Esquire about it, so took a chance and so glad I did. I've had chronic lower back pain - and repeated injuries - over the years. Nothing much seemed to help - MRIs, spinal docs, PT, chiropractors, meds, rest, heat, ice, etc. After my most recent injury, I wondered if maybe I just had horribly knotted/swollen muscles that needed to calm down. So I started hammering my lower back area with this thing and over the days all the muscles finally started to smooth out and relax and my pain went away. It's like you're hammering the muscles into submission. It's been amazing. Almost addictive. I would say just be careful with it and start off slowly - don't put on the hardest attachment and press it against you as hard as you can, etc. Start with the slowest setting and softest head and be very gentle with yourself until you get a feel for it.",
    stars: 5,
    user_id: 3,
    product_id: 1
)
Review.create!(
    id: 2,
    title: "Ouch...",
    body: "I’ve had 3 percussion massagers ever since a cranial attack in 2016 that pushed my head into my body. None of them are this powerful. Even on the lowest setting, it completely pulverizes my muscles. Overall, I think it’s very effective. I’m giving it 4 stars because it does not last 120 minutes as advertised. The battery is significantly shorter, but doesn’t seem to matter if it gets the job done on back and neck. We’ll see how it holds up as other massagers loser their power over time. Day 2 is impressive minus the battery issue.",
    stars: 4,
    user_id: 4,
    product_id: 1
)
Review.create!(
    id: 3,
    title: "Best Resistance Band Ever!!",
    body: "Very affordable",
    stars: 4,
    user_id: 1,
    product_id: 1
)
Review.create!(
    id: 4,
    title: "Worst Theragun!!",
    body: "Very unaffordable",
    stars: 1,
    user_id: 2,
    product_id: 1
)
Review.create!(
    id: 5,
    title: "Best Resistance Band Ever?!",
    body: "Very affordable",
    stars: 3,
    user_id: 3,
    product_id: 1
)
Review.create!(
    id: 6,
    title: "Worst Resistance Band!!",
    body: "Very affordable",
    stars: 2,
    user_id: 1,
    product_id: 1
)
Review.create!(
    id: 7,
    title: "Best Resistance Band Ever!!",
    body: "Very affordable",
    stars: 5,
    user_id: 2,
    product_id: 1
)
Review.create!(
    id: 8,
    title: "Worst Resistance Band!!",
    body: "Very affordable",
    stars: 2,
    user_id: 4,
    product_id: 1
)
Review.create!(
    id: 9,
    title: "Best Resistance Band Ever!!",
    body: "Very affordable",
    stars: 5,
    user_id: 1,
    product_id: 1
)

Review.create!(
    id: 10,
    title: "Worst Resistance Band!!",
    body: "Very affordable",
    stars: 5,
    user_id: 2,
    product_id: 1
)
Review.create!(
    id: 11,
    title: "Best Resistance Band Ever!!",
    body: "Very affordable",
    stars: 4,
    user_id: 3,
    product_id: 1
)
