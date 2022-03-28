function displayFridge() {
    class Fridge {
        constructor(
            name,
            temperature,
            volume,
            doors,
            food,
            drink,
            freezerLocation,
            doorOpen
        ) {
            this.name = name;
            this.temperature = temperature;
            this.volume = volume;
            this.doors = doors;
            this.food = food;
            this.drink = drink;
            this.freezerLocation = freezerLocation;
            this.doorOpen = doorOpen;
        }
        openDoor(doorStatus) {
            this.doorOpen = doorStatus;
        }
        
    }
    
    return (
        <>
            <div>My Fridge 1</div>
            <ul>
                <li>Name: {Fridge.name}</li>
            </ul>
        </>
    )
    
}



export default displayFridge;
