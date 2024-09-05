let userRole = "admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted";
}else{
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

// Function to check access based on role
let role = "employee";
switch (role) {
    case 'employee':
        console.log("As an Employee, you have full access to Dietary Services.");
        break;
    case 'enrolled member':
        console.log("As an Enrolled Member, you have access to Dietary Services and one-on-one interaction with a dietician.");
        break;
    case 'subscriber':
        console.log("As a Subscriber, you have partial access to Dietary Services.");
        break;
    case 'non-subscriber':
        console.log("As a Non-Subscriber, you need to enroll or subscribe to avail the Dietary Services.");
        break;
    default:
        console.log("Invalid role! Please check your input.");
}