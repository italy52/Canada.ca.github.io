// Valid information
var validIds = [
    { 
        idType: "Visa",
        passportNumber: "123",
        surname: "araf",
        dob: "02/03/2005",
        pob: "jadu",
        pdfFileName: "visa1.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "321",
        surname: "arfat",
        dob: "07/02/2006",
        pob: "jadur",
        pdfFileName: "visa2.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "3233",
        surname: "3ffgf",
        dob: "07/02/2002",
        pob: "gjhgjkh",
        pdfFileName: "visa3.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "233231",
        surname: "sakib",
        dob: "07/02/2001",
        pob: "trtfhythyt",
        pdfFileName: "visa4.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "344454555",
        surname: "jklrejkhrehr",
        dob: "07/02/2002",
        pob: "uiuiuiuy8",
        pdfFileName: "visa5.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "24766",
        surname: "djlejkklfjhjkfj",
        dob: "07/02/2003",
        pob: "djkhrekjr",
        pdfFileName: "visa6.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "334444",
        surname: "jhifrejhjkh",
        dob: "07/02/2004",
        pob: "uhiuytuy",
        pdfFileName: "visa7.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "59789",
        surname: "jkkjrlklfgf",
        dob: "07/02/2008",
        pob: "uijurtjti",
        pdfFileName: "visa8.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "4378748",
        surname: "ujkhfekrejfr",
        dob: "07/02/2021",
        pob: "ij4et4ee",
        pdfFileName: "visa9.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "7876637",
        surname: "fjkhfdf",
        dob: "07/02/2022",
        pob: "kgjkijti",
        pdfFileName: "visa10.pdf"
    },
    { 
        idType: "Visa",
        passportNumber: "324444",
        surname: "yddyuduyje",
        dob: "07/02/2010",
        pob: "kljkjtrjkhr",
        pdfFileName: "visa11.pdf"
    }
];

function showVisa() {
    var idType = document.getElementById("idTypeInput").value;
    var passportNumber = document.getElementById("passportNumberInput").value;
    var surname = document.getElementById("surnameInput").value;
    var dob = document.getElementById("dobInput").value;
    var pob = document.getElementById("pobInput").value;
    var messageElement = document.getElementById("message");

    var selectedId = validIds.find(function(validId) {
        return validId.idType === idType &&
               validId.passportNumber === passportNumber &&
               validId.surname === surname &&
               validId.dob === dob &&
               validId.pob === pob;
    });

    if (selectedId) {
        messageElement.textContent = "Congratulations, your visa is all done!";
        document.getElementById("pdfButton").style.display = "inline-block";
    } else {
        messageElement.textContent = "Invalid information. Please try again.";
    }
}

function showPdf() {
    var idType = document.getElementById("idTypeInput").value;
    var passportNumber = document.getElementById("passportNumberInput").value;
    var surname = document.getElementById("surnameInput").value;
    var dob = document.getElementById("dobInput").value;
    var pob = document.getElementById("pobInput").value;
    var selectedId = validIds.find(function(validId) {
        return validId.idType === idType &&
               validId.passportNumber === passportNumber &&
               validId.surname === surname &&
               validId.dob === dob &&
               validId.pob === pob;
    });

    if (selectedId) {
        window.open(selectedId.pdfFileName, '_blank');
    }
}
