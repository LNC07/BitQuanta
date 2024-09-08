let balance = 0;

function spin() {
    const spinner = document.getElementById("spinner");
    const randomCoins = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
    balance += randomCoins;
    document.getElementById("balance").innerText = "ব্যালেন্স: " + balance + " কয়েন";
    
    // Spin animation
    spinner.style.animation = "spin 3s linear";
    setTimeout(() => {
        spinner.style.animation = "none"; // Reset animation
    }, 3000);
}

function task() {
    // Implement task functionality
    alert("Task complete! You earned 100 coins.");
    balance += 100;
    document.getElementById("balance").innerText = "ব্যালেন্স: " + balance + " কয়েন";
}

function refer() {
    // Implement refer functionality
    alert("Refer link generated! Share it with your friends.");
}

function withdraw() {
    document.getElementById("message").innerText = "Coin listing on December 23";
}
