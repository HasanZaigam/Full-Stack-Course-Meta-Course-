const data = [
    {
    id : "1",
    title : "Chocolate Icecream",
    description : "Its is any icecream with the chocolate Flavor",
    proce : "$20.00"

    },
    {
    id : "2",
    title : "Tiramisu",
    description : "Chocolate with soft texture",
    price : "$40.00"
    }
]

const topDeserts = data.map(desert =>{
    return {
        content : `${desert.title} - ${desert.description}` ,
        price : desert.price,
    }
})
