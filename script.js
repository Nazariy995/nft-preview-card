let NFT = {
    imageSrc: "./assets/image-equilibrium.jpg",
    title: "Equillibrium",
    description: "Our Equillibrium collection promotes balance and calm",
    cost: "0.04eth",
    time: "3 days ago",
    creator: "Creation of Robin"
}

document.querySelector(".image img").src = NFT.imageSrc;
document.querySelector(".title").innerText = NFT.title;
document.querySelector(".description").innerText = NFT.description;
document.querySelector(".cost span").innerText = NFT.cost;
document.querySelector(".time span").innerText = NFT.time;
document.querySelector(".name").innerText = NFT.creator;