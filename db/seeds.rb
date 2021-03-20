# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all

user1 = User.create!(name:"Guest",email:"guest@guest.com", password:"password")

Product.create!(
id: 1,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 2,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 3,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 4,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 5,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 6,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 7,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 8,
title:"Theragun Prime - All-New 4th Generation Percussive Therapy Deep Tissue Muscle Treatment Massage Gun", 
description:"QX65 MOTOR WITH QUIETFORCE TECHNOLOGY - proprietary brushless motor delivers powerful deep muscle treatment quieter than the average massage device", 
category:"Massage gun", 
price: 29999, 
user_id: 1, 
image_url: "thera1.jpg")
Product.create!(
id: 9,
title:"Magic Bullet Blender, Small, Silver, 11 Piece Set", 
description:"11 piece blender set: Includes blender, additional blender cups, blades, recipe book & more", 
category:"blender", 
price: 6999, 
user_id: 1, 
image_url: "blender1.jpg")
Product.create!(
id: 10,
title:"Magic Bullet Blender, Small, Silver, 11 Piece Set", 
description:"11 piece blender set: Includes blender, additional blender cups, blades, recipe book & more", 
category:"blender", 
price: 6999, 
user_id: 1, 
image_url: "blender1.jpg")
Product.create!(
id: 11,
title:"Magic Bullet Blender, Small, Silver, 11 Piece Set", 
description:"11 piece blender set: Includes blender, additional blender cups, blades, recipe book & more", 
category:"blender", 
price: 6999, 
user_id: 1, 
image_url: "blender1.jpg")
Product.create!(
id: 12,
title:"Magic Bullet Blender, Small, Silver, 11 Piece Set", 
description:"11 piece blender set: Includes blender, additional blender cups, blades, recipe book & more", 
category:"blender", 
price: 6999, 
user_id: 1, 
image_url: "blender1.jpg")
