/*File name: COMP229-F2020-MidTerm-301259058
* Author's name: Tim Upton
* StudentID: 301 359 058
* Web App name: BookList MidTerm 
* Date: 24 Oct 2022
*/

//IIFE
(function()
{

        //Initial Run 
    function Start()
    {
        console.log("App Started!");

        // use AJAX to read JSON file

        // Step 1: Create a new XHR object
        let XHR = new XMLHttpRequest();

        // Step 2: Create the request
        XHR.open("GET", "../data/data.json");

        // Step 3: Send the request
        XHR.send();

        // Step 4: create an event listener/handler
        XHR.addEventListener("readystatechange", function()
        {
            if(XHR.readyState == 4 && XHR.status == 200)
            {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }

    // Load on Start
    window.addEventListener("load", Start);

})();