# Umain Munchies Project

# table of contents

- [project meme](#project-meme)
- [screenshots](#screenshots)
- [general notes](#general-notes)
- [API specifications](#api-specifications)
- [API example input](#api-example-input)
- [API example output](#api-example-output)
- [API error handling](#api-error-handling)
- [install steps](#install-steps)
- [functionality requirements](#functionality-requirements)
- [architectural decisions](#architectural-decisions)
- [specifications from client](#specifications-from-client)
- [example steps by user](#example-steps-by-user)
- [what i learned and how i reasoned through the project](#what-i-learned-and-how-i-reasoned-through-the-project)
- [things left out or to improve](#things-left-out-or-to-improve)

## project meme

![simpsons](https://github.com/neontomo/umain-restaurant-project/assets/105588693/6599a56c-8bc7-4112-a5ad-a82a8ffd47e4)

## demo

a working demo is available at:

[https://munchies-food-delivery.netlify.app](https://munchies-food-delivery.netlify.app)

## screenshots

### desktop

![munchies-screenshot](https://github.com/neontomo/umain-munchies-project/assets/105588693/d7522835-b713-4708-8d95-812364f5ec93)

### mobile

![munchies-screenshot-mobile](https://github.com/neontomo/umain-munchies-project/assets/105588693/0590a2b8-447a-4aa5-a365-72241da31d4d)

![munchies-screenshot-mobile-2](https://github.com/neontomo/umain-munchies-project/assets/105588693/fdb84ecd-aa7d-4afb-89ec-02ea7f57a351)

## general notes

- use umain's stack to make it easier to evaluate and align purposes (react, nextjs, typescript, sanitycms, tailwind/css)
- host anywhere i like - i'll probably use netlify or send the source files (examples given by client: firebase, vercel)
- use version control (git)
- use umain's existing api structure and resources
- base components/design on figma assets (don't reinvent things)
- treat assignment as a real project (not home assignment) (my idea)
- a website to discover restaurants but also **food** that matches a users needs
- most important aspects of the project are not clearly defined, however, i will focus on core functionality and and then move on to flare if there is enough time - prioritising the important steps will be crucial in getting this up and running quickly (keywords: usefulness, user experience)

## API specifications

- The API only uses GET which means it can be tested in the browser (POST would require Postman or similar), but also means I am only fetching information not sending/editing/deleting it
- follow the API structure and build types in TypeScript according to that structure (examples: id, name, image_url)
- API outputs arrays of restaurants
- the API expects and returns data in JSON

## API example input

```bash
curl -X 'GET' \ 'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants/82be30b7-d217-4609-89fe-454b40740cea' \
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
- [API endpoint](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/)
- [API docs](https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/)
- [Figma design specs](https://www.figma.com/design/263XJno7ii0uEaarJP9Ydw/Umain-Tech-Case?node-id=27-5682)

## install steps

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

- to be added...

## example steps by user

1. open the website
2. see a list of unfiltered restaurants
3. click on a filter button - see the list change
4. click on another filter button - see the list change again without removing the initial filter
5. deselect a filter - see the list change again
6. change my browser size - see the website change to fit the new size
7. see clear states for filters and restaurant cards
8. maybe: see error messages if something goes wrong

## what i learned and how i reasoned through the project

to be added...

## things left out or to improve

to be added...
