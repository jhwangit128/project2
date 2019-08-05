// CONTROLLERS
const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const router = express.Router()
const User = require('../models/users.js')
const Post = require('../models/posts.js')

// SEED
router.get('/seed', (req, res) => {
  Post.remove({}, () => {
    Post.create([
      {
        username: "jLimie29",
        title: "Hi, is anyone able to help my kitty Nico?",
        message: "She’s the perfect cat in every way except one. She spends almost every hour of the day howling constantly. She’s been to the vet and there’s nothing wrong with her. I always ignore it, but it never does any good. Recently I’ve tried locking her out of the room I’m in until she stops but this hasn’t helped either. Any suggestions?",
        img:  "https://i.pinimg.com/564x/b3/3e/7f/b33e7f9df1f719b1e1c9f8757ee8b588.jpg",
        comment: " "
      },
      {
        username: "banana2",
        title: "PLEASE HELP",
        message: "I HAVE HAD MY CAT SINCE SHE WAS A KITTEN 8YRS AGO. SHE HAS RECENTLY STARTED TO BE AGGRESSIVE TO ME. SHE WILL COME TO ME WHEN I AM LAYING DOWN IN BED AND STARE AT ME THEN ATTACK ME. SHE HAS ALSO STARTED ATTACKING MY BARE LEGS AS I WALK ABOUT. PLEASE HELP.",
        img:  "https://image.freepik.com/free-vector/cat-icons-collection_1096-199.jpg",
        comment: " "
      },
      {
        username: "olioni",
        title: "Hello, eveyrone!",
        message: "I found a lot of good information in the “Starting from Scratch” and “Think like a cat.” I was devastated and since the vets were incorrect about my cat that died I was hyper worried about my other cat. I made matters worse going to several veterinarians with my surviving cat. Keeping a normal routine like this article suggests is the best for help your cat.",
        img:  "https://i.pinimg.com/564x/34/6f/da/346fda52b28a69a4151d07aa3d3c9eb6.jpg",
        comment: " "
      },
      {
        username: "pete32",
        title: "My sweet surviving feline",
        message: "We humans can be quick to assign human emotions to our furry family that aren’t possible but, that being said, I didn’t want to underestimate my remaining cat’s emotional life. Your article had exactly the common sense and cat-specific information I needed to care for and love my sweet surviving feline. He is alone for the first time in 18 years and the two were litter-mates. I am reassured that, so far, he appears to be coping well. Will stick close and stay with daily routine he knows.",
        img:  "https://i.pinimg.com/564x/b3/3c/fe/b33cfe0f5de9d35b838e476a1809642d.jpg",
        comment: " "
      },
      {
        username: "moomin7",
        title: "Stressed cat!",
        message: "We lost one of our two fraternal cats just 7 weeks after moving to a new house. Our remaining cat was the more timid of the two. The move was already stressful for him and then losing his brother has been another blow. We’ve been wondering about getting him a new companion, but I now realize it’s too soon for us. This article offered great advice and I am reassured that he is coping. At least, he’s eating and playing and seeking contact. We will get another pet one day, but for now we will adjust to our new surroundings and work through the loss of his brother.",
        img:  "https://i.pinimg.com/564x/fd/9a/13/fd9a13e1bdb023b1e911b97faf71e121.jpg",
        comment: " "
      },
      {
        username: "snufkin",
        title: "My cats lOVE paper.",
        message: "Our cats love paper more than anything. But they do chase around plastic too.",
        img:  "https://i.pinimg.com/564x/dc/91/26/dc91265b2f7187ecc9efb8b6a8bffbf3.jpg",
        comment: " "
      },
      {
        username: "littleMy",
        title: "Any advice?",
        message: "One of my cats, Kitten Sahara, is extremely hard to catch. He has Feline Herpes so I need to give him antibiotics frequently. Any advice?",
        img:  "https://i.pinimg.com/564x/68/64/86/68648665db162497667bf99037df1f31.jpg",
        comment: " "
      },
      {
        username: "mymble09",
        title: "My cat bites me.",
        message: "My cat Sky,it’s hard to read the warnings, she is always wagging her tail, she reminds me of a dog, as soon as she sees me the tail starts going she gets excited. Even when she eats, her ears don’t go back or out but her tail is constantly wagging when do I know when to stop petting her. She doesn’t stop purring and jumps in my lap for me to pet her. But she bites me.",
        img:  "https://i.pinimg.com/564x/ec/ca/cd/eccacdc616e6452cd4582b827286e528.jpg",
        comment: " "
      },
      {
        username: "gronke45",
        title: "Hello!",
        message: "I have a cat that i pretty well know knows why she is being disciplined. Some times you have no choice, The cat wants to walk on something that could break or create other problems. What seems worse is when i have no choice but to pick the cat up. When i first got the cat and it went to bite me after petting her for a while i would push her away. Or put her in the bathroom for a time out. Then i read articles like this and stopped with the discipline. the cat is not stupid. The next time she nipped me i did nothing and THEN her ears went down because she was expecting some recourse. After i stopped for a while each nip got more aggressive as if like a child she was testing me to see what she can get away with. Sometimes she lets me know she no longer wants to be petted by moving away or meowing in a nasty way. Other times there is no warning. And it not that i pet is not that i pet her some where different.I think with cats it can be a game of who is in charge. and it will be you the owner or the cat. I will try your advice a little longer and if her actions become steadily more aggressive i will go back to discipline.",
        img:  "https://i.pinimg.com/564x/3e/f7/38/3ef73894cc91f1da5b094761e0e0e6ac.jpg",
        comment: " "
      },
    ], (err, data) => {
      res.redirect('/posts')
    })
  })
})

// NEW ROUTE
router.get('/new', (req, res) => {
  if (req.session.currentUser) {
    res.render('posts/new.ejs', {
      currentUser: req.session.currentUser
    })
  } else {
    res.render('sessions/new.ejs')
  }
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id, (error, deltedPost) => {
    res.redirect('/posts')
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  Post.findById(req.params.id, (error, foundPost) => {
    res.render(
      'posts/edit.ejs',
      {
        post:foundPost,
        currentUser: req.session.currentUser
      }
    )
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new:true},
  (error, updatedPost) => {
    res.redirect('/posts/' + req.params.id)
  })
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
  Post.findById(req.params.id, (error, foundPost) => {
    res.render('posts/show.ejs', {
      currentUser: req.session.currentUser,
      post:foundPost
    })
  })
})

// COMMENT BUTTON
router.put('/:id/comment', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.comment, {new:true},
  (error, updatedPost) => {
    res.redirect('/posts/' + req.params.id)
  })
})
// CREATE ROUTE
router.post('/', (req, res) => {
  Post.create(req.body, (error, createdPosts) => {
    res.redirect('/posts')
  })
})

module.exports = router
