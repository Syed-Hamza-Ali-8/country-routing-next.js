type Country = {
    name: string;
    population: string;
    capital: string;
};

const countries: { [key: string]: Country } = {
    pakistan: { name: "Pakistan", population: "25.5 million", capital: "Islamabad" },
    germany: { name: "Germany", population: "83 million", capital: "Berlin" },
    england: { name: "England", population: "67 million", capital: "London" },
    india: { name: "India", population: "1.38 billion", capital: "New Delhi" },
    australia: { name: "Australia", population: "25 million", capital: "Canberra" },
};

export default countries;
