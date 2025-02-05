function calculateTime() {
    const startDate = new Date('2023-09-24T00:00:00'); // Change this to your relationship start date
    const currentDate = new Date();
    
    const differenceInMilliseconds = currentDate - startDate;
    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    const seconds = differenceInSeconds % 60;
    const minutes = differenceInMinutes % 60;
    const hours = differenceInHours % 24;

    document.getElementById('timeCount').innerHTML = `${differenceInDays} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function showYesMessage() {
document.getElementById('responseMessage').innerText = "I love you more!!";
    const yesButtonGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWN6dTZuMXIxbHMxNmRieWE4YWp1MjFhM21pMGl6ZDhmMDUyajI0NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gnI3EdRuzrL3StP0Iz/giphy.gif";
    document.getElementById('funnyGif').src = yesButtonGif;
    document.getElementById('funnyGif').style.display = 'block'; // Show the new GIF
}

let gifIndex = 0; // Initialize an index to keep track of the current GIF

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const messages = [
        "Em chắc không? Anh không tin!!!!!",
        "Thật á? Suy nghĩ kỹ lại plssss!!!",
        "Thử lại đi, em yêu!",
        "Không tinnnn!!!!!!!!",
        "Em biết câu trả lời mà!",
        "Anh vẫn chưa bị thuyết phục!",
        "Thử chọn 'có' xem, cũng vui lắm!",
        "Em chắc không? Anh còn phân vân.",
        "Ôi, làm ơn! E biết mà."
    ];
    
    const gifs = [
        "https://media.giphy.com/media/g2o9VLBgv02TiAZX4V/giphy.gif?cid=ecf05e47n5cl1o1vq6zjxf881eudzfdhm2bg4k3jrfdgtsmw&ep=v1_gifs_search&rid=giphy.gif&ct=g", 
        "https://media.giphy.com/media/Wi3diC8GsQTp5ItW4p/giphy.gif?cid=ecf05e47n5cl1o1vq6zjxf881eudzfdhm2bg4k3jrfdgtsmw&ep=v1_gifs_search&rid=giphy.gif&ct=g", 
        "https://media.giphy.com/media/a7HivKGuLChiKNIbUt/giphy.gif?cid=ecf05e47n5cl1o1vq6zjxf881eudzfdhm2bg4k3jrfdgtsmw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/s3co5WzXgpC7242cW1/giphy.gif?cid=ecf05e47acyb2of8cuehzjix2715zxc28iichnxlafndbhm6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/27S504ZdDdCus94hOY/giphy.gif?cid=ecf05e47s2wgum9o1ithd576kxk7mccty82loxobkmb444yg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        "https://media.giphy.com/media/46ITc91cZcpR1O5KH3/giphy.gif?cid=ecf05e475kgxk6pj5optr66jji9qk3np1xict6k6g4bgrqci&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    ];

    // Pick a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Move the No button to a new random position with smooth transition
    noButton.style.position = 'absolute';
    noButton.style.transition = 'top 0.5s ease, left 0.5s ease'; // Smooth transition effect
    noButton.style.top = Math.random() * (window.innerHeight - noButton.clientHeight) + 'px';
    noButton.style.left = Math.random() * (window.innerWidth - noButton.clientWidth) + 'px';

    // Display the random message and GIF
    document.getElementById('responseMessage').innerText = randomMessage;
    document.getElementById('funnyGif').src = gifs[gifIndex];
    document.getElementById('funnyGif').style.display = 'block'; // Show GIF

    // Update the index for the next GIF
    gifIndex = (gifIndex + 1) % gifs.length; // Cycle back to the first GIF after the last one
}


window.onload = calculateTime;
