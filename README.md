# Umain Munchies Project

# table of contents

- [demo](#demo)
- [screenshots](#screenshots)
- [general notes](#general-notes)
- [API specifications](#API-specifications)
- [API example input](#API-example-input)
- [API example output](#API-example-output)
- [API error handling](#API-error-handling)
- [install steps](#install-steps)
- [functionality requirements](#functionality-requirements)
- [architectural decisions](#architectural-decisions)
- [specifications from client](#specifications-from-client)
- [example steps by user](#example-steps-by-user)
- [what I learned and how I reasoned through the project](#what-i-learned-and-how-i-reasoned-through-the-project)
- [things left out or to improve](#things-left-out-or-to-improve)
- [project meme](#project-meme)

## demo

a working demo is available at:

<a href="https://munchies-food-delivery.netlify.app" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 10px;">munchies-food-delivery.netlify.app</a>

## screenshots

### desktop

![munchies-screenshot](https://github.com/neontomo/umain-munchies-project/assets/105588693/d7522835-b713-4708-8d95-812364f5ec93)

### mobile

![munchies-screenshot-mobile](https://github.com/neontomo/umain-munchies-project/assets/105588693/0590a2b8-447a-4aa5-a365-72241da31d4d)

![munchies-screenshot-mobile-2](https://github.com/neontomo/umain-munchies-project/assets/105588693/fdb84ecd-aa7d-4afb-89ec-02ea7f57a351)

## general notes

- use umain's stack to make it easier to evaluate and align purposes (react, nextjs, typescript, sanitycms, tailwind/css)
- host anywhere I like - i'll probably use netlify or send the source files (examples given by client: firebase, vercel)
- use version control (git)
- use umain's existing API structure and resources
- base components/design on figma assets (don't reinvent things)
- treat assignment as a real project (not home assignment) (my idea)
- a website to discover restaurants but also **food** that matches a users needs
- most important aspects of the project are not clearly defined, however, I will focus on core functionality and and then move on to flare if there is enough time - prioritising the important steps will be crucial in getting this up and running quickly (keywords: usefulness, user experience)

## API specifications

- The API only uses GET which means it can be tested in the browser (POST would require Postman or similar), but also means I am only fetching information not sending/editing/deleting it
- follow the API structure and build types in TypeScript according to that structure (examples: `id`, `name`, `image_url`)
- API outputs arrays of restaurants
- the API expects and returns data in JSON

## API example input

```bash
curl -X 'GET' \ 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/API/restaurants/82be30b7-d217-4609-89fe-454b40740cea' \
 -H 'accept: application/json'
```

## API example output

```json
{
  "restaurants": [
    {
      "id": "fff380e7-da5b-4dd1-8648-6048c0a9ec4d",
      "name": "Waynes Coffee",
      "rating": 4.5,
      "filter_ids": ["5c776b18-fc1b-49b6-bf74-9778f7ee7537"],
      "image_url": "/images/coffee.png",
      "delivery_time_minutes": 30,
      "price_range_id": "4bd4df6d-e6c9-428d-8c5c-b9e0b6b185db"
    }
  ]
}
```

## API error handling

- the API returns valid error codes (200, 400, 404, 500, etc)
- How to show errors to the user is not specified, but an example of how errors are returned is given in the API documentation:

  ```json
  {
    "error": true,
    "reason": "error message"
  }
  ```

- I will not display errors to the user, but will log them to the console for debugging purposes and check for errors before outputting data to the user

## specifications from client

### functionality requirements

1. see unfiltered list of restaurants at start
2. use a filter sidebar to make changes in filtering
3. ability to use more than one filter at a time
4. ability to deselect a filter
5. make states visually clear in the finished project
6. make project responsive (mobile to desktop - check figma)
7. refer to the App and Web view in Figma to understand requirements for mobile vs desktop view

### inputs

- filters (visually represented as buttons)
- food category
- delivery time
- price range
- maybe more, like rating

### outputs

- list of restaurants from API
- restaurant details (name, rating, image, delivery time, price range) - to be displayed in a card style based on Figma design
- potential error messages
- opening hours
- icons
- time to delivery

### server & db

- use existing Restful API (GET only)

### resources

- [Github with specs](https://github.com/apegroup/umain-work-test-web)
- [API endpoint](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/API/)
- [API docs](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/API-docs/)
- [Figma design specs](https://www.figma.com/design/263XJno7ii0uEaarJP9Ydw/Umain-Tech-Case?node-id=27-5682)

## install steps

1. run these commands:

```bash

# clone the repo
git clone https://github.com/neontomo/umain-munchies-project.git
cd umain-munchies-project

# install dependencies
npm install

# run the server in development
npm run dev

# or run the server in production
npm run build && npm run start
```

## architectural decisions

## example steps by user

1. open the website
2. see a list of unfiltered restaurants
3. click on a filter button - see the list change
4. click on another filter button - see the list change again without removing the initial filter
5. deselect a filter - see the list change again
6. change my browser size - see the website change to fit the new size
7. see clear states for filters and restaurant cards
8. maybe: see error messages if something goes wrong

## how I reasoned through the project

### considerations

while designing my solution to the project I was mindful of sticking to the specifications before adding anything extra. I was thoughtful about whether extra features added or subtracted anything from the project. the way I understood the assignment is that it was designed to test me on a few abilities:

- working with data (from an API)
- understanding state (filters)
- grasping and following a design spec
- improve the user experience

### mindset and approach

I built the project in an iterative way, making simple changes and verifying them. I separated the tasks of implementing the backend/API and the design/components. when doing both at the same time it becomes messy because they require different ways of thinking. by making sure that the backend has reliable inputs and outputs, I could start to design the frontend and make the UI come alive with functionality. I call this "wearing different hats".

### clear code

I made an effort to keep reusable functionality as components in their own files, for clarity in the code but also to make it easier to add features in the future (for example, adding another filter to the sidebar). I avoided commenting my code unless absolutely necessary, opting for adding clarity with naming conventions, folder structures and separation of concerns.

### mobile friendly

the specs specified responsive design, so I made sure to test the site on mobile and desktop. Tailwind has good support for building conditional classes based on screen size. I tested my site on an iPhone 12 and a Macbook AIR M1 and implemented an overlay that is expected on mobile. in production, this might be a mobile app instead of a website.

### tailwind

I adapted similar Tailwind classes to the spec, but wanted to avoid excessive CSS, so I used practical substitutions like replacing `bg-[#00703A]` with `bg-green-800` which is similar but more practical. I also used Tailwind's `@apply` directive a few times to keep my CSS DRY.

### filters

I sorted restaurants by open → closed, to maximise usefulness. this could also be added to other filters.

### type safety

I used TypeScript to ensure that my data was correct and to verify my approach. it's easy to get lost in the data when you're iterating and building. TypeScript helped me to see what data was available and what was not and saved me time. I designed my TypeScript types directly based on the API specs, which was not always up to date, but it was a great starting point!

## what I learned

### API

I learned a lot from studying the structure of the API. the way filters were IDs connected to restaurants surprised me but made sense once I thought about it. the API docs unfortunately were not completely up to date, but calling it once was enough to know the data structure. since this API was called a lot during my testing, I stored test data locally and used it to build the frontend.

### content

while building the frontend I researched how to make the page loading feel faster, which led me to implement skeleton loaders for the restaurant cards and top filters. this gives a speedy impression even while loading.

### biggest learning

my biggest learning was how to work with a filter sidebar. not only did I need to make the filters work together, but I also needed to make them work independently, have a clear state, be toggleable and show all restaurants when no filters were selected. implementing a single filter was straight forward, but making them play nice together took some time.

### filters

the spec does not specify how the filters should overwrite each other so tried a few different ways to get a feel for what "felt intuitive" to use. in the end, I decided that each filter group should select all of the matching items, and the next filter group can then overwrite this.

Some examples:

---

#### Input

- `Hamburger`
- `Tacos`

#### Output

- `Emils Elit-biffar`
- `Oskars Tacos`

###### the filters don't cancel each other out

---

#### Input

- `Hamburger`
- `Tacos`
- `40-50 min`

#### Output

- `Oskars Tacos`

###### the time filter cancels out the first filter which doesn't match

---

#### Input

- `40-50 min`
- `1 hour`

#### Output

- `Emils Elit-biffar`
- `Oskars Tacos`

###### They don't cancel each other out. This means filters are layered on top of each other

---

### design

I spent some time understanding how to work with Figma which was new terrority. some things were not easily transferrable to my code, such as licensed fonts and specific dimensions and font weights. Some card images were offset differently in the design, which I decided to keep consistent for simplicity.

## things left out or to improve

If I had more time I would have:

- verified that the fonts are exactly the same - and legal to use
- spent more time with the Figma design to understand the design decisions and component structure
- added more error checking and testing - perhaps show a toast error message to the user if the API is down
- added lazy loading for large images - the food images are quite large and could be optimised, but I opted to keep it simple
- developed more user-engagement strategies, such as animations, highlighted restaurants, deals
- search functionality
- added ratings (they are in the API but not in Figma)
- nice to have: the vegan restaurant has a bacon icon - this could be changed haha
- prettier design for when no restaurants are found
- investigate whether showing closed restaurants on filters is good for user experience or not

## project meme

![simpsons](https://github.com/neontomo/umain-restaurant-project/assets/105588693/6599a56c-8bc7-4112-a5ad-a82a8ffd47e4)

## thank you

I hope you enjoyed my project! try it here:

<a href="https://munchies-food-delivery.netlify.app" style="background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 10px;">munchies-food-delivery.netlify.app</a>
