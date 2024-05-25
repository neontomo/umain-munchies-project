# umain restaurant project

# contents

- [general notes](#general-notes)
- [specifications](#specifications)
- [example steps](#example-steps)
- [install steps](#install-steps)
- [api documentation (v1)](#api-documentation-v1)
  - [architectural decisions](#architectural-decisions)
- [what i learned and how i reasoned through the project](#what-i-learned-and-how-i-reasoned-through-the-project)
- [things left out or to improve](#things-left-out-or-to-improve)

## screenshots

## general notes

- use umain's stack to make it easier to evaluate and align purposes (react, nextjs, typescript, sanitycms, tailwind/css)
- host anywhere i like - i'll probably use netlify or send the source files (examples given by client: firebase, vercel)
- use version control (git)
- use umain's existing api structure and resources
- base components/design on figma assets (don't reinvent things)
- treat assignment as a real project (not home assignment) (my idea)
- a website to discover restaurants but also **food** that matches a users needs
- i will focus on core functionality and and then move on to flare if there is enough time - prioritising the important steps will be crucial in getting this up and running quickly (keyword: usefulness)

## API

- The API only uses GET which means it can be tested in the browser (POST would require Postman or similar)
- follow the API structure and build types in TypeScript according to that structure (examples: id, name, image_url)
- API outputs arrays of restaurants

## Error handling

- How to show errors to the user is not specified, but errors are returned like this:

````
{
    error	[...]
    reason	[...]
}```

## API example output

```{ "restaurants":
    [
        {
            "id": "987e32cf-2323-4cdb-a3ec-14cf925e34c3",
            "name": "Waynes Coffee",
            "rating": 4.5,
            "filter_ids": [
                "012aca16-f935-4ff9-9706-32b8a13aefeb"
            ],
            "image_url": "/images/coffee.png",
            "delivery_time_minutes": 30,
            "price_range_id": "cb0b2442-3eae-4e59-a737-bc50a055cdd7"
        }
    ]
}```

## install steps

not finished...

## functionality requirements

1. see unfiltered list of restaurants at start
2. use a filter sidebar to make changes in filtering
3. ability to use more than one filter at a time
4. ability to deselect a filter
5. make states visually clear in the finished project
6. make project responsive (mobile to desktop - check figma)
7. refer to the App and Web view in Figma to understand requirements for mobile vs desktop view

## architectural decisions:

## specifications from client

### inputs

### outputs

### server & db

### resources

## example steps

## what i learned and how i reasoned through the project

to be added...

## things left out or to improve

to be added...

````

```

```
