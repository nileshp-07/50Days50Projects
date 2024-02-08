const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currStep = 1;

prev.addEventListener('click' , () => {
    if(currStep > 1)
    currStep--;

    // console.log(currStep)
    updateSteps();
})

next.addEventListener('click' , () => {
    if(currStep < circles.length)
    currStep++;

    // console.log(currStep)
    updateSteps();

})


function updateSteps() {

    // adjust the border of the circles 
    circles.forEach((circle , index) => {
        if(index < currStep)
        {
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active')
        }
    })


    // adjust the color of the progress bar  and handling the disability of the buttons 
    if(currStep === 1)
    {
        progress.style.width = "0%";
        prev.disabled = true;
    }
    else if(currStep === 2)
    {
        progress.style.width = "33%";
        prev.disabled = false;
        next.disabled = false;
    }
    else if(currStep === 3)
    {
        progress.style.width =  "66%";
        prev.disabled = false;
        next.disabled = false;
    }
    else if(currStep === 4)
    {
        progress.style.width = "100%";
        next.disabled = true;
    }


}
