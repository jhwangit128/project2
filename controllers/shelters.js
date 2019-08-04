// CONTROLLERS
const express = require('express')
const router = express.Router()
const Shelter = require('../models/shelters.js')

// SEED
router.get('/seed', (req, res) => {
  Shelter.remove({}, () => {
    Shelter.create([
      {
        name: "PAWS Chicago: Pippen Fasseas Adoption Center",
        location: "1997 N. Clybourn Ave Chicago, IL 60614",
        description: "In a model No Kill city, all healthy and treatable animals are saved. Euthanasia is reserved only for dogs or cats who are hopelessly sick or injured and suffering, where medical treatment cannot alleviate the condition, or for dogs who are deemed dangerous and non-rehabilitatable by behavior experts who believe that they pose a real threat to public safety.",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11875.356213058953!2d-87.6587445!3d41.9178185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd0f75d030a39f577!2sPAWS+Chicago!5e0!3m2!1sen!2sus!4v1564954022075!5m2!1sen!2sus",
        img: 'http://www.pawschicago.org/fileadmin/media/images/CML_backgrounds/Fosters__2_.jpg'
      },
      {
        name: "Harmony House For Cats",
        location: "2914 N Elston Ave, Chicago, IL 60618",
        description: 'Every Harmony House cat is a "kitten at heart" for many years. Cats do not reach full maturity until the age of 3 years, and many love to race and play like kittens all their life. Because of this, please consider all the cats when you are ready to adopt. An adult cat can be the ideal choice if you work all day, or if you wish to adopt a companion for your current pet. Whether you want a mellow lapcat or a bundle of energy, our adoption counselors will help you choose the cat that is right for you.',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.0792749400794!2d-87.69362274882377!3d41.934147869781455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcd91e5b0291d%3A0x1838730749a99c19!2sHarmony+House+For+Cats!5e0!3m2!1sen!2sus!4v1564884493824!5m2!1sen!2sus",
        img: 'https://s3.amazonaws.com/petfinder-us-east-1-petimages-prod/organization-photos/30222/30222-1.jpg?bust=2017-12-07+01%3A34%3A13'
      },
      {
        name: "The Anti-Cruelty Society",
        location: "169 W Grand Ave, Chicago, IL 60654",
        description: "The Anti-Cruelty Society’s mission is to build a community of caring by helping pets and educating people. The Society believes that companion animals provide people with joy, offers recognized health benefits, and unconditional love.  It is our goal to find a home for every adoptable companion animal in need." + "The Society offers a variety of programs and services to build a community of caring including the following: Cat and dog adoptions, spay/neuter clinic, humane education, cruelty investigation and rescue, free behavior helpline, three rehabilitation and treatment centers, pet loss and grief group sessions, pet visitation program, a foster program, pet first aid and CPR classes, and other pet-related workshops. Working together with other organizations and the public raises awareness about the needs of animals and how we can work together to promote responsible pet ownership and help prevent cruelty, abuse, and neglect.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0674174791043!2d-87.63575648455848!3d41.89140717922122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb40af909db%3A0xfae0946676d62347!2s169+W+Grand+Ave%2C+Chicago%2C+IL+60654!5e0!3m2!1sen!2sus!4v1564887281598!5m2!1sen!2sus",
        img: 'https://www.smokeball.com/wp-content/uploads/IMG_7082.jpeg',
        website: 'https://anticruelty.org/'
      },
      {
        name: "The Catcade - cat cafe & rescue",
        location: "1235 W Belmont Ave, Chicago, IL 60657",
        description: "MISSION: TO RESCUE CATS FROM LIFE-THREATENING SITUATIONS SUCH AS HIGH-KILL SHELTERS AND TO FIND FRIENDLY, QUALITY HOMES FOR THEM THROUGH OUR ADOPTION PROGRAM." +
        "The Catcade is a non-profit, arcade-themed cat rescue, and lounge. We simulate a home environment where instead of being in cages, the cats get to interact with friendly humans in a free-roam living room atmosphere." +
        "As a guest you can come and hang out with adoptable cats in the lounge. You can bring your laptop to do a little work on our free wifi, sign up for our cat yoga sessions, or just sit around with a cat on your lap and play free-play arcade games, there's also Nintendo64 Mario Kart which is a fan favorite. Our hope is that you find a new family member and adopt them into a loving and caring household because all of our cats are vaccinated, spayed or neutered, microchipped, and ready for same-day adoption (pending an application process). If you are not able to adopt that is okay, because just by coming in and visiting you are helping to support our mission of saving cats. The entry fee goes to directly help offset the cost of medical treatment for the cats and operating expenses for the shelter.",
        map: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d380591.9395651292!2d-88.19586524740195!3d41.820232722330694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d41.6997376!2d-88.21719039999999!4m5!1s0x880fd2548bcd180b%3A0x31eb1f3d64d56ff2!2s1235+W+Belmont+Ave%2C+Chicago%2C+IL+60657!3m2!1d41.9395625!2d-87.6604641!5e0!3m2!1sen!2sus!4v1564885661779!5m2!1sen!2sus",
        img: 'https://www.kitnipbox.com/meow/wp-content/uploads/2018/02/catyoga-e1517950081147.jpg',
        website: 'https://www.thecatcade.org'
      }
    ], (err, data) => {
      res.redirect('/shelters')
    })
  })
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
  Shelter.findById(req.params.id, (error, foundShelter) => {
    res.render('shelters/show.ejs', {
      shelter:foundShelter,
      currentUser: req.session.currentUser
    })
  })
})

module.exports = router
