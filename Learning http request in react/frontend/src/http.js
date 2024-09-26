export async function fetchAvailablePlaces() {
    const dataResponse = await fetch("http://localhost:3000/places");
    return dataResponse;
}

export async function fetchUserPlaces() {
    const dataResponse = await fetch("http://localhost:3000/user-places");
    return dataResponse;
}

export async function updateUserPlaces(places) {
    const dataResponse = await fetch("http://localhost:3000/user-places", {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        },
    }); 
    const resData = await dataResponse.json()
    if(!dataResponse.ok){
        throw new Error(resData.message || 'Failed to update places')
    }
    return resData.message; 
}

