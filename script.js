let container_1 = document.querySelector("#carousel_1"),
    photos_1 = container_1.querySelectorAll(".photo"),
    carousel_obj_1 = new carousel(photos_1),

    container_2 = document.querySelector("#carousel_2"),
    photos_2 = container_2.querySelectorAll(".photo"),
    carousel_obj_2 = new carousel(photos_2),

    carousel_obj_3 = new carousel(photos_1),
    carousel_obj_4 = new carousel(photos_2);



container_1.querySelector(".prev").addEventListener("click", function () {
    carousel_obj_1.prev_photo();
});
container_1.querySelector(".next").addEventListener("click", function () {
    carousel_obj_1.next_photo();
});
container_2.querySelector(".prev").addEventListener("click", function () {
    carousel_obj_2.prev_photo();
});
container_2.querySelector(".next").addEventListener("click", function () {
    carousel_obj_2.next_photo();
});

for (let i = 1; i <= 5; i++) {
    container_1.querySelector(".pic" + i).addEventListener("click", function () {
        carousel_obj_1.select_photos(i);
    });
}
for (let i = 1; i <= 5; i++) {
    container_2.querySelector(".pic" + i).addEventListener("click", function () {
        carousel_obj_2.select_photos(i);
    });
}