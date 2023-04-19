# ExpressShopping
JSON API application that will store a shopping list.  Each item is a JavaScript object with the keys of name, and price.

# Guidelines
Application will contain the following routes:
    1. GET /items - renders a list of shopping items.
        [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]

    2. POST /items - accepts JSON data and adds it to the list.
        {“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}

    3. GET /items/:name - displays a single item’s name and price.
        {“name”: “popsicle”, “price”: 1.45}

    4. PATCH /items/:name - modifies a single item’s name and/or price.
        {“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}

    5. DELETE /items/:name - this route should allow you to delete a specific item from the array.
        {message: “Deleted”}