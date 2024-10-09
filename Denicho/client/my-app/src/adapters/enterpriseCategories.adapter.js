const categoriesAdapter = (response) =>{
    return response.data.categories.map(({name}) => name)
}

export {categoriesAdapter}