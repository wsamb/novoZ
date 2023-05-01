interface User {
    id: number;
    name: string;
    email: string;
}

const userArr: User[] = [
    {
        id: 1,
        name: "name1",
        email: "1@gmail.com",
    },
    {
        id: 2,
        name: "name2",
        email: "2@gmail.com"
    },
    {
        id: 3,
        name: "name3",
        email: "3@gmail.com"
    },
    {
        id: 4,
        name: "name4",
        email: "4@gmail.com"
    },
    {
        id: 5,
        name: "name5",
        email: "5@gmail.com"
    },
    {
        id: 6,
        name: "name6",
        email: "6@gmail.com"
    },
];

function filterUsersArr(arr: User[], input: string): User[] | [] {
    //I assumed that we search also by part of the name, excluding whitespaces from the search string
    //if it should be the same it will be
    //return arr.filter(({name}) => name === input);
    const search = input.toLowerCase().trim();
    return arr.filter(user =>
        user.name.toLowerCase().includes(search)
    );
}

//testing
//console.log(filterUsersArr(userArr, 'me6')[0])


// task 3
// /getUsers => GET /api/v1/users
// /add_user => POST /api/v1/users
// /products/:productId/updatePrice => PATCH /api/v1/products/:id
// /api/v1/orders_delete => DELETE /api/v1/orders/:id

// /api/v1/ - to make future backward compatibility
// getUsers and add_users should be at the same endpoint path and only difference should be in calling method
// udpading products should be the same endpoint as listing products on path /api/v1/products/
// then with method PATCH and pointng product by it's id we can update product properties
// we can also make it by PUT method by replacing product object with new product object and update it with this way
// delete orders also should have the same mechanism as updating products
// using listing orders endpoint /api/v1/orders choose which order we want to delete with it's id
// and then use DELETE method
