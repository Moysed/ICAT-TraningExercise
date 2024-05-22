const axios = require("axios");


// const myAPI = 'https://icat-trainee-api.onrender.com/getData'

 interface IcatMem {
        name: string,
        age: number,
        hobbyName: string
}

const fetchAPI = async () => {
    const {data} = await axios.get("https://icat-trainee-api.onrender.com/getData")

  

    function compareHobby(i: number) {
        
        if(data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[1].rate) {
            if(data.data.data[i].hobbie[0].rate > data.data.data[i].hobbie[2].rate) {
                return data.data.data[i].hobbie[0].hobbyName
            }
            else {
                return data.data.data[i].hobbie[2].hobbyName
            }
        }
        else if(data.data.data[i].hobbie[1].rate > data.data.data[i].hobbie[2].rate) {
            return data.data.data[i].hobbie[1].hobbyName
        }
        else {
            return data.data.data[i].hobbie[2].hobbyName
        }
    }

console.log(information(data.data.data[0].name, data.data.data[0].age, compareHobby(0)))
console.log(information(data.data.data[1].name, data.data.data[1].age, compareHobby(1)))
console.log(information(data.data.data[2].name, data.data.data[2].age, compareHobby(2)))
}

 
function information(name: string, age: number, hobbyName: string): IcatMem {
    return { name, age, hobbyName};
}

fetchAPI()