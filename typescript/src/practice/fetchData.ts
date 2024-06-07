const url = 'https://www.course-api.com/react-tours-project';


type Tour = {
    id: string,
    name: string,
    info: string,
    image: string,
    price: string,
}

async function fetchData(url:string):Promise<Tour[]>{
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`status: ${response.status}`)
        }
        const data: Tour[] = await response.json()
        return data
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'there was error'
        console.log(errorMsg);
        return []
    }
}

const tours = await fetchData(url)
tours.map((tour:any) => {
    console.log(tour.name);
})