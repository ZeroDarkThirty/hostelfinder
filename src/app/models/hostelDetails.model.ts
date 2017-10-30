export class HostelDetails {
    id: number
    image: string
    rate: number;
    address: string;
    description: string;
    bathroom: string;
    availability: boolean;
    furnished: boolean;
    airCon: boolean;
    internet: string;
    lengthOfStay: string;
    parking: string;
    utility: string;
    bond: number;
    contact: {name: string, phone: number}
    
    constructor(id: number, image: string, rate: number, address: string, description: string, bathroom: string, 
                availability: boolean, furnished: boolean, airCon: boolean, internet: string, lengthOfStay: string,
                parking: string, utility: string, bond: number, contact: {name: string, phone: number}){
        this.id = id;
        this.image = image;
        this.rate = rate;
        this.address = address;
        this.description = description;
        this.bathroom = bathroom;
        this.availability = availability;
        this.furnished = furnished;
        this.airCon = airCon;
        this.internet = internet;
        this.lengthOfStay = lengthOfStay;
        this.parking = parking;
        this.utility = utility;
        this.bond = bond;
        this.contact = contact;
    }
}