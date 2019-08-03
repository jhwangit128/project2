const express = require('express')
const router = express.Router()
const Behavior = require('../models/behavior.js')

//SEED
router.get('/seed', (req, res) => {
  Cat.remove({}, () => {
    Cat.create([
      {
        title: 'Litter box issues',
        description: "If you spot your cat straining or unable to urinate, it needs immediate veterinary care. Special litter, diets, pheromones, supplements, and medications can all help with urinary behavioral problems in your cat. When medical reasons have been ruled out, then it's oftentimes a behavioral problem that needs to be addressed.",
        treatment: "Ensure that the litter box is never dirty because cats are fastidious about their toilets."
        "Having too few litter boxes may also be an issue. The general rule is to have one more box than you have cats: For example, a household with one cat should have two boxes, a two-cat house should have three, and so on."
        "Your cat may not like the type of litter you're using or it may be too deep in the box. Try using less, switching to unscented litter or a different brand, or using an alternative to standard clay litters.",
        img: 'https://cdn.shopify.com/s/files/1/0011/0552/products/Liner_openlid_1200x.jpg?v=1546433896'
      }, {
        title: 'Unwanted Scratching',
        description: "It may seem like kitty is scratching your couch and curtains to annoy you, but she's really doing it to work off energy, to play, to mark her territory, even to get rid of frayed bits of claw. Good news: Scratching is easy to prevent, Case tells WebMD. So you don't have to settle for raggedy furniture or stop kitty from expressing her natural behavior.",
        treatment: "Buy one or more scratching posts for your cat, then dab a bit of catnip on the posts to entice your feline friend to use them."
        "Trim your kitty's claws. It may seem daunting, but trimming is easier than you think. Get a quick tutorial from your veterinarian, who can probably do the deed in 10 seconds -- a skill that can be learned.",
        img: 'https://www.thesprucepets.com/thmb/H7LkngLhqdNwtwerExlJ8JroQyo=/3446x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kitten-named-gus-playing-under-furniture-523666148-5c44d91846e0fb000146938c.jpg'
      }, {
        title: 'Aggressive Behavior',
        description: "A cat may become aggressive for all kinds of reasons, including illness, overcrowding, lack of socialization, maternal protection, even simple play.",
        treatment: "Discuss your cat’s aggression with your vet. Pain and sickness can put anyone in a bad mood, so you'll want to rule out any physical causes for kitty's bad temper before you do anything else."
        "If your furry household is often in a snit, it could be because there aren’t enough resources to go around. Keep the peace by making sure there are enough litter boxes, food and water bowls, toys, beds and perches, then spread them through the house to reduce congestion.",
        img:''
      }
    ])
  })
})
