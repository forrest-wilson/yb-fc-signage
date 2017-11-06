(function() {
    var getEstimateButton = document.getElementById("getEstimate"),
        signText = document.getElementById("signText");

    var signColor;
    var casedValue;
    var fontSize;

    function validate() {
        if (signText.value.length == 0) {
            alert("Please enter some text for your sign");
        } else {
            return signText.value;
        }
    }

    function letterCount() {
        return signText.value.length;
    }

    function letterSize() {
        if (document.querySelector('input[name="size"]:checked') != null) {
            var selectedSize = document.querySelector('input[name="size"]:checked').value;

            switch (selectedSize) {
                case "small":
                    fontSize = "2em";
                    return 10;
                    break;
                case "large":
                    fontSize = "3em";
                    return 20;
                    break;
                default: 
                    console.log('please select a size');
                    break;
            }
        } else {
            alert("Please select a size");
        }
    }

    function casing() {
        if (document.querySelector('input[name="casing"]:checked') != null) {
            var upperOrLower = document.querySelector('input[name="casing"]:checked').value;

            switch (upperOrLower) {
                case "uppercase":
                    casedValue = signText.value.toUpperCase();
                    return "uppercase";
                    break;
                case "lowercase":
                    casedValue = signText.value.toLowerCase();
                    return "lowercase";
                    break;
                case "none":
                    casedValue = signText.value;
                    return "none";
                    break;
                default: 
                    console.log('please select a casing');
                    break;
            }
        } else {
            alert("Please select a casing option");
        }
    }

    function color() {
        if (document.querySelector('input[name="color"]:checked') != null) {
            var colorSelection = document.querySelector('input[name="color"]:checked').value;

            switch (colorSelection) {
                case "black":
                    signColor = "black";
                    return 0;
                    break;
                case "red":
                    signColor = "red";
                    return 15;
                    break;
                case "blue":
                    signColor = "blue";
                    return 30;
                    break;
                default: 
                    console.log('please select a color');
                    break;
            }
        } else {
            alert("Please select a color");
        }
    }

    getEstimateButton.addEventListener("click", function(e) {
        e.preventDefault();
        var value = validate();
        var letters = letterCount();
        var size = letterSize();
        var letterCasing = casing();
        var colorSelection = color();
        var totalCost;

        totalCost = (letters * size) + colorSelection;

        document.getElementById("signOutput").textContent = casedValue;

        // Assigns CSS to the element
        Object.assign(document.getElementById("signOutput").style, {
            backgroundColor: signColor,
            fontSize: fontSize
        });

        document.getElementById("cost").textContent = "$" + totalCost + ".00";
    });
})();