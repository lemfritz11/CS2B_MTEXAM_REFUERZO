const userProfile = {
    fullName: prompt("Enter your full name:"),
    age: parseInt(prompt("Enter your age:"), 10),
    favoriteNumber: parseInt(prompt("Enter your favorite number:"), 10),
    favoriteColors: []
};

while (userProfile.favoriteColors.length < 3) {
    let color = prompt("Enter one of your favorite colors:");
    userProfile.favoriteColors.push(color);
}

console.log(userProfile);
