


const fetchData = async(url) => {
    const  data = await fetch(url).then(res=> res.json())
    return await data
}

export {
    fetchData
}