// controllers
const express = require('express')
const router = express.Router()
const Behavior = require('../models/behaviors.js')

//SEED
router.get('/seed', (req, res) => {
  Behavior.remove({}, () => {
    Behavior.create([
      {
        title: 'Litter box issues',
        description: "If you spot your cat straining or unable to urinate, it needs immediate veterinary care. Special litter, diets, pheromones, supplements, and medications can all help with urinary behavioral problems in your cat. When medical reasons have been ruled out, then it's oftentimes a behavioral problem that needs to be addressed.",
        treatment: "Ensure that the litter box is never dirty because cats are fastidious about their toilets." +
        "Having too few litter boxes may also be an issue. The general rule is to have one more box than you have cats: For example, a household with one cat should have two boxes, a two-cat house should have three, and so on. Your cat may not like the type of litter you're using or it may be too deep in the box. Try using less, switching to unscented litter or a different brand, or using an alternative to standard clay litters.",
        img: 'https://cdn.shopify.com/s/files/1/0011/0552/products/Liner_openlid_1200x.jpg?v=1546433896'
      }, {
        title: 'Unwanted Scratching',
        description: "It may seem like kitty is scratching your couch and curtains to annoy you, but she's really doing it to work off energy, to play, to mark her territory, even to get rid of frayed bits of claw. Good news: Scratching is easy to prevent, Case tells WebMD. So you don't have to settle for raggedy furniture or stop kitty from expressing her natural behavior.",
        treatment: "Buy one or more scratching posts for your cat, then dab a bit of catnip on the posts to entice your feline friend to use them. Trim your kitty's claws. It may seem daunting, but trimming is easier than you think. Get a quick tutorial from your veterinarian, who can probably do the deed in 10 seconds -- a skill that can be learned.",
        img: 'https://www.thesprucepets.com/thmb/H7LkngLhqdNwtwerExlJ8JroQyo=/3446x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kitten-named-gus-playing-under-furniture-523666148-5c44d91846e0fb000146938c.jpg'
      }, {
        title: 'Aggressive Behavior',
        description: "A cat may become aggressive for all kinds of reasons, including illness, overcrowding, lack of socialization, maternal protection, even simple play.",
        treatment: "Discuss your cat’s aggression with your vet. Pain and sickness can put anyone in a bad mood, so you'll want to rule out any physical causes for kitty's bad temper before you do anything else. If your furry household is often in a snit, it could be because there aren’t enough resources to go around. Keep the peace by making sure there are enough litter boxes, food and water bowls, toys, beds and perches, then spread them through the house to reduce congestion.",
        img:''
      }, {
        title: 'Chewing',
        description: "Cats are not known to be the voracious chewers that dogs can be. Yet some still manage to do quite a bit of damage with their teeth. Chewing behavior in your cat may be caused by boredom, aggression, a nutritional deficiency, teething in kittens, or having been weaned too young. It might also simply be because your cat is playing or likes the texture or taste of the item.",
        treatment: "Provide your cat with lots of enrichment: toys, perches, and outdoor enclosures, as well as paper bags and boxes to explore. You may even think about getting your cat a kitty companion." +
        "Play with your cat for at least 10 minutes twice a day. Use dangly toys, balls, catnip toys, wadded up paper -- the sky's the limit." +
        "Don't encourage your cat to play with your hands or feet. Kittens who grow up playing with and nibbling on fingertips often grow up to be powerful cats who play bite -- hard!" +
        "Don't punish your cat for play bites -- it's easy for kitty to interpret a slap as rough play, or to become afraid of you.",
        img:''
      }, {
        title: 'Obsessive-Compulsive Licking',
        description: "Chronic licking in cats typically stems from pain or stress and anxiety. While all cats lick themselves, excessive licking may be serious and should be addressed without delay." +
        "A cat that's in pain may lick an area on its body until it's hairless and raw—and it isn’t always in the area that's causing pain. A stressed or anxious cat may lick its belly until it has no fur or obsessively overgroom other parts of its body.",
        treatment: "If you and your vet determine that there is no physical cause for your pet's behaviors, there are things you can do to improve your cat’s state of mind. Making sure your cat feels safe, loved, and comfortable in your home is important, as is providing adequate stimulation and exercise. You may find that desensitizing your cat by slowly and carefully exposing her to things she fears can be beneficial. Be careful to take baby steps if you try this so as not to overwhelm your cat and make the compulsive licking worse." +
        "Counter-conditioning, by training your cat to associate something pleasurable, like a treat, with something he fears may also help reduce stress and anxiety. Many times, boredom licking (also known as psychogenic alopecia) is improved by adding another cat or pet. But, there is always the risk that the second cat could be a new stress in your pet's environment that could make the hair loss worse.",
        img:''
      }, {
        title: 'Too much nighttime activity',
        description: "Until their domestication cats were nocturnal by nature, so it's easy to see why too much nighttime action is a common complaint of many new pet parents. To help the kitty who doesn't understand that nighttime is for sleeping -- not for playing with your nose.",
        treatment: "First, make sure your cat has no medical problems. An agitated, active feline could be one that's in pain, so talk to your vet if you think there might be something wrong." +
        "If kitty is just rambunctious at night, you can help tire and relax her with a good play session before bedtime." +
        "Make sure kitty's environment is enriched so there is plenty to do during the day, making your cat more inclined to sleep at night. You might create a cat enclosure; offer your cat a variety of toys; mount bird or squirrel feeders near a window out which kitty can see; or leave out items for your cat to explore, such as boxes, bags, and packing paper.",
        img: ''
      }, {
        title: 'Cats That Put The “Scared” in “Scaredy Cat.”',
        description: "Cats are independent, but they are also social creatures by nature. Your shy kitty may never be the life of the party, but your dreams of feline cuddle time may still come true.",
        treatment: "Respect your cat’s need for space. Your cat does need alone time. Provide safe, enclosed spaces that allow your cat to “hide” while still being part of the action. Try placing baskets or covered cat beds in social spaces, like the living room. If your cat can watch you from his safe space, he’ll gradually get more comfortable.",
        img: ''
      }, {
        title: 'Chronic Stress in Cats',
        description: "Chronic stress occurs when the cat is left in a state of uncertainty. Think of a cat forced to live every day with another cat who displays constant hostility, or a cat living in an environment where the litter box conditions are dirty and unappealing. What about the cat confined to a cage in a shelter for months? Can you imagine the degree of chronic stress there? Or what about the indoor/outdoor cat who has moved to a new neighborhood and is put outside every day with no safe retreat back to the security of his home? These are just a couple of examples but there are so many other situations that could create stress.",
        treatment: "Help your cat get comfortable with the cat carrier so car travel won’t be so frightening." +
        "Take your cat to a veterinary clinic that has worked to create a cat-friendly practice." +
        "Address multicat tension issues now, before they get any worse." +
        "Make sure there are adequate resources for each cat to reduce competition and guarding." +
        "Maintain good litter box hygiene." +
        "Create environmental enrichment in the home." +
        "Socialize your cat." +
        "Ease your cat through life transitions rather than make abrupt changes." +
        "Maintain your cat’s veterinary care." +
        "Engage your cat in daily interactive play sessions." +
        "Do gradual, positive new pet introductions." +
        "Provide good quality nutrition.",
        img:''
      }
    ], (err, data) => {
      res.redirect('/behaviors')
    })
  })
})


module.exports = router
