import axios from "axios"

enum Gender {
    MALE = "male",
    FEMALE = "female",
}

enum Role {
    USER = "user",
    ADMIN = "admin",
    MODERATOR = "moderator",
}

interface IHair {
    color: string,
    type: string,
}

interface ICoordinates {
    lat: number,
    lng: number,
}

interface IAddress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: ICoordinates,
    country: string,
}

interface IBank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string,
}

interface ICompany {
    department: string,
    name: string,
    title: string,
    address: IAddress,
}

interface ICrypto {
    coin: string,
    wallet: string,
    network: string,
}

interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    ip: string,
    address: IAddress,
    macAddress: string,
    university: string,
    bank: IBank,
    company: ICompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: ICrypto,
    role: Role,
}

await axios.get('https://dummyjson.com/users')
    .then((res) => {
        const users: User[] = res.data?.users
        console.log(users)
        console.log(users[0]?.username)
    })
    .catch(error => {
        console.log('Error:', error.message);
    })

