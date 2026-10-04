/* =========================================
   TWISTED TACOS
   JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const nav =
    document.getElementById("navLinks");

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");

const toTop =
    document.getElementById("toTop");

const year =
    document.getElementById("year");



/* =========================================
   YEAR
========================================= */

if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* =========================================
   MOBILE MENU
========================================= */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle("open");

        }
    );

}


document
    .querySelectorAll("#navLinks a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");

            }
        );

    });



/* =========================================
   NAVBAR SCROLL
========================================= */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 70) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }


        if (window.scrollY > 500) {

            toTop.classList.add("show");

        } else {

            toTop.classList.remove("show");

        }

    }
);



/* =========================================
   BACK TO TOP
========================================= */

if (toTop) {

    toTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* =========================================
   ORDER SYSTEM
========================================= */

const orderModal =
    document.getElementById("orderModal");

const closeOrder =
    document.getElementById("closeOrder");

const selectedProduct =
    document.getElementById("selectedProduct");

const quantityElement =
    document.getElementById("quantity");

const minusButton =
    document.getElementById("minus");

const plusButton =
    document.getElementById("plus");

const extraCheese =
    document.getElementById("extraCheese");

const extraSauce =
    document.getElementById("extraSauce");

const customerName =
    document.getElementById("customerName");

const orderNote =
    document.getElementById("orderNote");

const whatsappOrder =
    document.getElementById("whatsappOrder");



/* =========================================
   ORDER VARIABLES
========================================= */

let currentProduct = "";

let quantity = 1;



/* =========================================
   OPEN ORDER MODAL
========================================= */

document
    .querySelectorAll(".order-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentProduct =
                    button.dataset.product;

                quantity = 1;


                selectedProduct.textContent =
                    currentProduct;


                quantityElement.textContent =
                    quantity;


                extraCheese.checked =
                    false;


                extraSauce.checked =
                    false;


                customerName.value =
                    "";


                orderNote.value =
                    "";


                orderModal.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });



/* =========================================
   CLOSE ORDER MODAL
========================================= */

function closeOrderModal() {

    orderModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


closeOrder.addEventListener(
    "click",
    closeOrderModal
);



/* =========================================
   CLOSE WHEN CLICK OUTSIDE
========================================= */

orderModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target === orderModal
        ) {

            closeOrderModal();

        }

    }
);



/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            orderModal.classList.contains("active")
        ) {

            closeOrderModal();

        }

    }
);



/* =========================================
   QUANTITY MINUS
========================================= */

minusButton.addEventListener(
    "click",
    () => {

        if (quantity > 1) {

            quantity--;

            quantityElement.textContent =
                quantity;

        }

    }
);



/* =========================================
   QUANTITY PLUS
========================================= */

plusButton.addEventListener(
    "click",
    () => {

        if (quantity < 20) {

            quantity++;

            quantityElement.textContent =
                quantity;

        }

    }
);



/* =========================================
   WHATSAPP ORDER
========================================= */

whatsappOrder.addEventListener(
    "click",
    () => {


        /* -----------------------------
           CUSTOMER NAME
        ----------------------------- */

        const name =
            customerName.value.trim();


        if (!name) {

            alert(
                "Please enter your name."
            );

            customerName.focus();

            return;

        }



        /* -----------------------------
           SPECIAL NOTE
        ----------------------------- */

        const note =
            orderNote.value.trim();



        /* -----------------------------
           CREATE WHATSAPP MESSAGE
        ----------------------------- */

        let message =
            "Hello Twisted Tacos! 👋\n\n";


        message +=
            "I would like to place an order:\n\n";


        message +=
            "🍔 " +
            currentProduct +
            " × " +
            quantity +
            "\n";



        /* -----------------------------
           EXTRA CHEESE
        ----------------------------- */

        if (
            extraCheese.checked
        ) {

            message +=
                "🧀 Extra Cheese\n";

        }



        /* -----------------------------
           EXTRA SAUCE
        ----------------------------- */

        if (
            extraSauce.checked
        ) {

            message +=
                "🥫 Extra Sauce\n";

        }



        /* -----------------------------
           CUSTOMER NAME
        ----------------------------- */

        message +=
            "\n👤 Name: " +
            name;



        /* -----------------------------
           SPECIAL REQUEST
        ----------------------------- */

        if (note) {

            message +=
                "\n📝 Note: " +
                note;

        }



        /* -----------------------------
           FINAL MESSAGE
        ----------------------------- */

        message +=
            "\n\nThank you!";



        /* -----------------------------
           WHATSAPP NUMBER
        ----------------------------- */

        const whatsappNumber =
            "18322895160";



        /* -----------------------------
           WHATSAPP URL
        ----------------------------- */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);



        /* -----------------------------
           OPEN WHATSAPP
        ----------------------------- */

        window.open(
            whatsappURL,
            "_blank"
        );

    }
);