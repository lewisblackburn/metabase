// lib/data.ts
// Define the shape of our data and provide a sample dataset.

export type ExampleUser = {
    id: string;
    name: string;
    email: string;
    role: string;
};

// Sample dataset of users (could be replaced with a database in real use).
export const allUsers: ExampleUser[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Developer' },
    { id: '2', name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Manager' },
    { id: '3', name: 'Charlie Williams', email: 'charlie.williams@example.com', role: 'Developer' },
    { id: '4', name: 'Diana Evans', email: 'diana.evans@example.com', role: 'Analyst' },
    { id: '5', name: 'Ethan Brown', email: 'ethan.brown@example.com', role: 'Analyst' },
    { id: '6', name: 'Fiona Miller', email: 'fiona.miller@example.com', role: 'User' },
    { id: '7', name: 'George Anderson', email: 'george.anderson@example.com', role: 'User' },
    { id: '8', name: 'Hannah Wilson', email: 'hannah.wilson@example.com', role: 'Admin' },
    { id: '9', name: 'Ian Davis', email: 'ian.davis@example.com', role: 'Analyst' },
    { id: '10', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin' },
    { id: '11', name: 'Karl Johnson', email: 'karl.johnson@example.com', role: 'Developer' },
    { id: '12', name: 'Laura Garcia', email: 'laura.garcia@example.com', role: 'User' },
    { id: '13', name: 'Mike Brown', email: 'mike.brown@example.com', role: 'Developer' },
    { id: '14', name: 'Nina Anderson', email: 'nina.anderson@example.com', role: 'Analyst' },
    { id: '15', name: 'Oliver Miller', email: 'oliver.miller@example.com', role: 'Manager' },
    { id: '16', name: 'Paula Wilson', email: 'paula.wilson@example.com', role: 'User' },
    { id: '17', name: 'Quentin Davis', email: 'quentin.davis@example.com', role: 'Analyst' },
    { id: '18', name: 'Rachel Johnson', email: 'rachel.johnson@example.com', role: 'Manager' },
    { id: '19', name: 'Steve Garcia', email: 'steve.garcia@example.com', role: 'Admin' },
    { id: '20', name: 'Tina Evans', email: 'tina.evans@example.com', role: 'User' }
];
