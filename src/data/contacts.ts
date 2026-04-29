import headshot1 from "../assets/images/headshot-1.jpg"
import headshot2 from "../assets/images/headshot-2.jpg"
import headshot3 from "../assets/images/headshot-3.jpg"
import headshot4 from "../assets/images/headshot-4.jpg"
import headshot5 from "../assets/images/headshot-5.jpg"
import headshot6 from "../assets/images/headshot-6.jpg"
import headshot7 from "../assets/images/headshot-7.jpg"
import headshot8 from "../assets/images/headshot-8.jpg"
import headshot9 from "../assets/images/headshot-9.jpg"
import headshot10 from "../assets/images/headshot-10.jpg"
import headshot11 from "../assets/images/headshot-11.jpg"
import headshot12 from "../assets/images/headshot-12.jpg"
import headshot13 from "../assets/images/headshot-13.jpg"
import headshot14 from "../assets/images/headshot-14.jpg"


export type Contact = {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
    address: string;
    image: string;
};

export const contacts: Contact[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Marketing Manager",
        email: "sarah.johnson@example.com",
        phone: "+44 7700 900123",
        address: "123 High Street, London",
        image: headshot2,
    },
    {
        id: 2,
        name: "Michael Smith",
        role: "Sales Director",
        email: "michael.smith@example.com",
        phone: "+44 7700 900124",
        address: "456 Oak Avenue, Manchester",
        image: headshot1,
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Customer Support Lead",
        email: "emily.davis@example.com",
        phone: "+44 7700 900125",
        address: "789 Pine Road, Birmingham",
        image: headshot3,
    },
    {
        id: 4,
        name: "David Wilson",
        role: "Finance Analyst",
        email: "david.wilson@example.com",
        phone: "+44 7700 900126",
        address: "101 Elm Street, Liverpool",
        image: headshot4,
    },
    {
        id: 5,
        name: "Lisa Brown",
        role: "Human Resources Manager",
        email: "lisa.brown@example.com",
        phone: "+44 7700 900127",
        address: "202 Maple Avenue, Leeds",
        image: headshot6,
    },
    {
        id: 6,
        name: "James Taylor",
        role: "IT Specialist",
        email: "james.taylor@example.com",
        phone: "+44 7700 900128",
        address: "303 Cedar Lane, Glasgow",
        image: headshot5,
    },
    {
        id: 7,
        name: "Olivia Martinez",
        role: "Product Manager",
        email: "olivia.martinez@example.com",
        phone: "+44 7700 900129",
        address: "404 Birch Road, Edinburgh",
        image: headshot7,
    },
    {
        id: 8,
        name: "William Anderson",
        role: "Operations Manager",
        email: "william.anderson@example.com",
        phone: "+44 7700 900130",
        address: "505 Spruce Street, Bristol",
        image: headshot9,
    },
    {
        id: 9,
        name: "Sophia Thomas",
        role: "Business Analyst",
        email: "sophia.thomas@example.com",
        phone: "+44 7700 900131",
        address: "606 Fir Street, Manchester",
        image: headshot8,
    },
    {
        id: 10,
        name: "Daniel Lee",
        role: "Software Engineer",
        email: "daniel.lee@example.com",
        phone: "+44 7700 900132",
        address: "707 Willow Street, Liverpool",
        image: headshot12,
    },
    {
        id: 11,
        name: "Mia Harris",
        role: "Graphic Designer",
        email: "mia.harris@example.com",
        phone: "+44 7700 900133",
        address: "808 Ash Street, Manchester",
        image: headshot10,
    },
    {
        id: 12,
        name: "Sophia Clark",
        role: "Data Scientist",
        email: "sophia.clark@example.com",
        phone: "+44 7700 900134",
        address: "909 Walnut Street, Liverpool",
        image: headshot13,
    },
    {
        id: 13,
        name: "Isabella Lewis",
        role: "Content Strategist",
        email: "isabella.lewis@example.com",
        phone: "+44 7700 900135",
        address: "1010 Poplar Street, Manchester",
        image: headshot11,
    },
    {
        id: 14,
        name: "Matthew Walker",
        role: "Project Manager",
        email: "matthew.walker@example.com",
        phone: "+44 7700 900136",
        address: "1111 Oak Street, Liverpool",
        image: headshot14,
    }

];