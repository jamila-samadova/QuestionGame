const questionGame = confirm("Welcome to PARK CINEMA");

if (questionGame) {
    const movie = prompt("Hansi filmi izlemek isteyirsiniz?");
    
    let price;
    if (movie === "La casa de papel") {
        price = 10;
        alert(`La casa de papel filminin bilet ücreti ${price} AZN'dir.`);
    } else {
        price = 15; // Diğer filmler ucun
        alert(`${movie} filminin bilet ücreti ${price} AZN'dir.`);
    }

    const seat = prompt("Eyleşmek istediyiniz yeri qeyd edin:");

    if (seat) {
        alert(`Seçilen yer: ${seat}`);
    }

    const yourMeal = prompt("Film izleyerken yanınızda bir şey gotureceksiniz?");
    if (yourMeal) {
        const result = `Sizin ${yourMeal} hazırdır. Xos izlemeler!`;
        alert(result);
    } else {
        alert("Xos izlemeler!");
    }
} else {
    alert("Teşekkürler, Yeniden gozleyeceyik!");
}