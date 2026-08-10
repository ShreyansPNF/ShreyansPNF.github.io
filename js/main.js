import {
    animate,
    inView,
    spring
} from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";


/*
    ----------------------------------------
    PRESS FEEDBACK
    ----------------------------------------

    Feedback begins on pointer-down rather
    than waiting for click.
*/

document.querySelectorAll(
    ".button, .nav-contact, .project-arrow"
).forEach((element) => {

    element.addEventListener("pointerdown", () => {

        animate(
            element,
            {
                scale: 0.95
            },
            {
                duration: 0.08
            }
        );

    });

    element.addEventListener("pointerup", () => {

        animate(
            element,
            {
                scale: 1
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        );

    });

    element.addEventListener("pointercancel", () => {

        animate(
            element,
            {
                scale: 1
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        );

    });

});


/*
    ----------------------------------------
    PROJECT REVEALS
    ----------------------------------------

    Subtle materialization rather than
    dramatic slide-in animations.
*/

const revealElements = document.querySelectorAll(
    ".project-feature, .project-row, .skill-group, .education-item"
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(18px)";

    inView(
        element,
        () => {

            animate(
                element,
                {
                    opacity: 1,
                    y: 0
                },
                {
                    type: "spring",
                    bounce: 0,
                    duration: 0.45
                }
            );

        },
        {
            amount: 0.15
        }
    );

});


/*
    ----------------------------------------
    FEATURED PROJECT TILT
    ----------------------------------------

    Very restrained pointer response.
    No exaggerated 3D card effect.
*/

const visual = document.querySelector(
    ".server-interface"
);


if (visual) {

    const container =
        document.querySelector(".project-visual");


    container.addEventListener(
        "pointermove",
        (event) => {

            const rect =
                container.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;


            const rotateX =
                (0.5 - y) * 3;

            const rotateY =
                (x - 0.5) * 3;


            animate(
                visual,
                {
                    rotateX,
                    rotateY
                },
                {
                    type: "spring",
                    bounce: 0,
                    duration: 0.3
                }
            );

        }
    );


    container.addEventListener(
        "pointerleave",
        () => {

            animate(
                visual,
                {
                    rotateX: 0,
                    rotateY: 0
                },
                {
                    type: "spring",
                    bounce: 0,
                    duration: 0.4
                }
            );

        }
    );

}
