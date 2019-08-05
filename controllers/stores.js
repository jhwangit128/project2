// CONTROLLERS
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const Store = require('../models/stores.js')

// SEED
router.get('/seed', (req, res) => {
  Store.remove({}, () => {
    Store.create([
      {
        name: 'Feliway 30 Day Starter Kit Plug-In Diffuser & Refill',
        use: 'Calming Aids',
        description: "Feliway is a synthetic copy of the feline facial pheromone, used by cats to mark their territory as safe and secure. By mimicking the cat’s natural facial pheromones, Feliway creates a state of familiarity and security in the cat's local environment. As a result, Feliway can be used to help comfort and reassure cats while they cope with a challenging situation and help prevent or reduce the stress caused by a change in their environment.",
        img: 'https://img.chewy.com/is/image/catalog/94182_MAIN._AC_SL1500_V1557161524_.jpg',
        price: 16.49,
        qty: 150
      },
      {
        name: 'VetriScience Composure Behavioral Health Bite-Sized Cat Chews',
        use: 'Calming Aids',
        description: "Composure Feline chews are for cats exhibiting nervousness, hyperactivity, anxiety or responding to environmentally-induced stress. It is an advanced formula that contains a combination of factors not found in other calming formulas, which supports balanced behavior.",
        img: 'https://img.chewy.com/is/image/catalog/57618_MAIN._AC_SL1500_V1531865516_.jpg',
        price: 7,
        qty: 230
      },
      {
        name: "Richard's Organics Pet Calm",
        use: 'Calming Aids',
        description: "Soothe away your pet’s worries with Richard's Organics Pet Calm. A 100% natural and safe solution for pet anxiety and short-term stress, these drops effectively work to settle the nerves and calm your pet’s behavior. Whether you’re introducing your pet into a new environment, or it’s time for that yearly vet exam, just administer the drops before the stressful even and let the active ingredients of valerian extract, chamomile extract, passion flower extract and skull cap extract do their work. They taste great, so you can easily drop them right into your pet’s mouth.",
        img: 'https://img.chewy.com/is/image/catalog/58605_MAIN._AC_SL1500_V1528900321_.jpg',
        price: 9.49,
        qty: 59
      },
      {
        name: 'HomeoPet Anxiety Relief Dog, Cat, Bird & Small Animal Supplement',
        use: 'Anxiety Relief',
        description: "Give your furry pal a moment of Zen with the HomeoPet Anxiety Relief Dog, Cat, Bird & Small Animal Supplement. Because sometimes your pet has trouble just taking a deep breath, this homeopathic liquid helps to promote a sense of calmness. Drawing on hundreds of years of natural medicine therapy, the all-natural ingredients work to synergistically relieve anxiety in a variety of stressful situations. Whether it’s a thunderstorm, trip to the vet, or even introducing a new baby or pet into the household, the drops quickly help to eliminate cowering, trembling, nausea, pooping, destructive behaviors, and other common symptoms of stress and anxiety.",
        img: 'https://img.chewy.com/is/image/catalog/110661_MAIN._AC_SL1500_V1528134126_.jpg',
        price: 8.99,
        qty: 100
      },
      {
        name: 'Yeowww! Organic Catnip',
        use: 'Stress Relief',
        description: "No cat’s day is complete without a pinch of Yeowww! Organic Catnip. This isn’t just any catnip — it comes from farmers that harvest the best organically grown catnip around. This high-quality signature blend contains just leaves and flower tops for the most effective catnip. It’s superior to your everyday catnip in terms of freshness, color and aroma. No chemicals or pesticides are used in cultivation, which means Yeowww! catnip is completely safe for cats and humans. Sprinkle a little on your kitty’s favorite scratcher or use it to stuff your own handmade toys.",
        img: 'https://img.chewy.com/is/catalog/103031._AC_SL1500_V1467808856_.jpg',
        price: 5.99,
        qty: 390
      },
      {
        name: 'Pioneer Pet SmartCat The Ultimate Scratching Post',
        use: 'Scratcher',
        description: "Cats need a scratching post that will allow them to get a full stretch. The 32-inch post height allows the cat to stretch vertically while using the post (important for territorial marking purposes and for toning muscles). The finest materials and workmanship guarantee the scratching post will remain attractive and useful for years.",
        img: 'https://images-na.ssl-images-amazon.com/images/I/41G4XuuknxL._SY355_.jpg',
        price: 42.49,
        qty: 25
      },
      {
        name: 'Catit Style Scratcher with Catnip - Jungle-Stripe Lounge',
        use: 'Scratcher',
        description: "Combining contemporary shapes with stylish patterns, the Catit Style Scratching Board is a modern twist on conventional scratchers. The Catit Style Scratching Board provides your cat with a corrugated scratching surface, while helping to protect your furniture from claw damage. A cat's need to scratch is instinctive. It helps them to sharpen and remove the dead outer layer of their claws, stretch and flex their bodies and work off energy. Catnip is included and by using the Catit Style Scratching Board, you are helping your cat stay active and healthy.",
        img: 'https://images-na.ssl-images-amazon.com/images/I/411OhxQUP2L.jpg',
        price: 6.19,
        qty: 1205
      },
      {
        name: 'PetSafe SlimCat Interactive Toy and Food Dispenser',
        use: 'Toy',
        description: "The PetSafe SlimCat is a fun, interactive toy that combines playtime with mealtime to help control your cat's weight. You can choose to put treats or dry food in the SlimCat. The openings are adjustable so you can tailor the challenge to your cat's needs.",
        img: 'https://images-na.ssl-images-amazon.com/images/I/41jBxojCOiL._SY450_.jpg',
        price: 6.95,
        qty: 500
      },
      {
        name: 'Petstages Catnip Chew Mice',
        use: 'Chew Toy',
        description: "Catnip Chew Mice by Petstages clean teeth and massage gums to improve your cat’s dental health! Durable netting won’t unravel no matter how hard your kitty chews. Catnip entices their sense of smell and satisfies the urge to crunch and chew. Knotted streamers flip and flop all over the place, making them bonkers for this fun toy!",
        img: 'https://images-na.ssl-images-amazon.com/images/I/51z67x0-gtL.jpg',
        price: 3.49,
        qty: 1490
      },
      {
        name: 'Petstages Kitty Cuddle Pal Cat Toy – Soft & Comforting Microwaveable Plush Stuffed Cat Pillow',
        use: 'Comforting Toy',
        description: "Keep your kitten cozy and comfy with this adorable Kitty Cuddle Pal. Ideal for use as either a cushion or a cuddly cat toy, the cute plush stuffed kitten features microwaveable buckwheat stuffing, so your cat or kitten can curl up in complete comfort. Ideal for soothing stressed cats or calming kittens’ separation anxiety, this super soft stuffed cat toy features a durable plush fleece fabric shell which can be easily removed for machine washing, and the interior stuffing pouch can be quickly microwaved to provide hours of cuddly, comforting heat.Clever shaping and a fluffy, lightweight fleece material allows your cat to move their new toy as needed, and the heated design of the Kitty Cuddle Pal cat toy by Petstages will leave your favorite pet feeling happy, calm and contented.",
        img: 'https://images-na.ssl-images-amazon.com/images/I/31G1vL-d43L.jpg',
        price: 5.79,
        qty: 870
      },
      {
        name: "Purrfect Feline Titan's Tower",
        use: 'Toy',
        description: "This innovative pet product keeps your cat entertained while giving them the physical and mental work out they require. Balls zoom around the multi-level tracks, mimicking natural prey and stimulating healthy activity. This new design includes a bar across top of toy to prevent cats from sticking their head in and getting stuck. Design also includes anti-slip grips to prevent the toy from sliding around while being played with. This toy is sure to make your cat happy and healthy!",
        img: 'https://images-na.ssl-images-amazon.com/images/I/71uZ1%2Bx740L._SX355_.jpg',
        price: 9.99,
        qty: 220
      },
      {
        name: "Necoichi Portable Stress Free Cat Cage",
        use: 'Carrier',
        description: "The Necoichi Portable Stress Free Cat Cage is like a portable cat hotel and multi-purpose carrier in one versatile and stylish design. Offering cats a place to curl up whether you’re at home or away, it provides a comforting and secure escape during travel, when guests are over, while moving, and more. It’s also an excellent way to transport cats in the car, with a easy-open design that pops right open and features built-in seat belt straps—making it convenience at its very cutest. The two mesh panel sides allow for breathability and visibility, and can also be rolled down when it’s quiet time.",
        img: 'https://img.chewy.com/is/image/catalog/119032_MAIN._AC_SL1500_V1558377786_.jpg',
        price: 39.99,
        qty: 190
      }
    ], (err, data) => {
      res.redirect('/stores')
    })
  })
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
  Store.findById(req.params.id, (error, foundStore) => {
    res.render('stores/show.ejs', {
      store:foundStore,
      currentUser: req.session.currentUser
    })
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  Store.findById(req.params.id, (error, foundStore) => {
    res.render(
      'stores/edit.ejs',
      {
        store:foundStore,
        currentUser: req.session.currentUser
      })
    })
})

// BUY BUTTON
router.put('/:id/buy_store', (req, res) => {
  Store.findByIdAndUpdate(req.params.id, req.qty, {new:true},
    (error, updatedStore) => {
    updatedStore.qty -=1
    updatedStore.save()
    res.redirect('/stores/' + req.params.id)
  })
})

module.exports = router
