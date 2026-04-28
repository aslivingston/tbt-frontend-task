import headshot1 from "../assets/images/headshot-1.jpg"

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
        image: headshot1,
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
        image: headshot1,
    },
    {
        id: 4,
        name: "David Wilson",
        role: "Finance Analyst",
        email: "david.wilson@example.com",
        phone: "+44 7700 900126",
        address: "101 Elm Street, Liverpool",
        image: headshot1,
    },
    {
        id: 5,
        name: "Lisa Brown",
        role: "Human Resources Manager",
        email: "lisa.brown@example.com",
        phone: "+44 7700 900127",
        address: "202 Maple Avenue, Leeds",
        image: headshot1,
    }

];