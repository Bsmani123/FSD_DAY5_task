
var resume = [{
    "name": "Balasubramanian",
    "Dob": "04/03/1986",
    "Father name": "Thirugnanam",
    "Mother toungue": "Tamil",
    "Language known": "Tamil,English,kannadam",
    "Education": [
        {
            "Diploma": "Information Technology",
            "college": "RVS polythechnic",
            "Year of passing": "2011",
            "percentage": "68%"
        },
        {
            "Degree": "BE computer science",
            "college": "Rathinam Technical campus",
            "Year of passing": "2016",
            "percentage": "70%"
        }
    ],
    "phone": [
        9108059804,
        7708350993
    ],
    "Marital status": "Married",
    "Address": {
        "Village": "Veeranatham",
        "Post": "Thirunaraiyur",
        "Distict": "cuddalore dist"
    },
    "Experience":[
        {
        "Role": "Customer care excutive",
        "Company": "JustDial",
        "Location": "Coimbatore",
        "Year": "2011/04/15 to 2013/02/30",
       
    },
    {
        "Role": "Business Development Executive",
        "Company": "Red Apple cunsultancy Private limited",
        "Location": "Bangalore",
        "Year": "2017/07/16 to 2021/02/30",
        
    }]
}]
// ----------------------------------------
// Using (FOR IN )loop:-

// for (var i in resume){
//     console.log( i);
// }


// ----------------------------------------


// using FOR OF loop:

// resume.forEach((key)=>{
// console.log(key)
// })

// ------------------------------------------

// using FOR OF loop:-

// for (var i of resume){
//         console.log( i);
//     }
// ------------------------------------------

// Using for loop:

// for(let i=0; i< resume.length; i++){
//       console.log(i)
// }



function displayResume(resume) {
    for (var i = 0; i < resume.length; i++) {
        var person = resume[i];
        console.log("Name: " + person.name);
        console.log("Date of Birth: " + person.Dob);
        console.log("Father's Name: " + person["Father name"]);
        console.log("Mother Tongue: " + person["Mother tongue"]);
        console.log("Languages Known: " + person["Languages known"]);
        console.log("Phone Numbers: " + person.phone.join(", "));
        console.log("Marital Status: " + person["Marital status"]);
        console.log("Address: ");
        console.log("  Street: " + person.Address.Street);
        console.log("  City: " + person.Address.City);
        console.log("  State: " + person.Address.State);
        console.log("  Zip: " + person.Address.Zip);
        
        console.log("Education: ");
        for (var j = 0; j < person.Education.length; j++) {
            var education = person.Education[j];
            if (education.Diploma) {
                console.log("  Diploma: " + education.Diploma);
            } else {
                console.log("  Degree: " + education.Degree);
            }
            console.log("  College: " + education.college);
            console.log("  Year of Passing: " + education["Year of passing"]);
            console.log("  Percentage: " + education.percentage);
        }

        console.log("Experience: ");
        for (var k = 0; k < person.Experience.length; k++) {
            var experience = person.Experience[k];
            console.log("  Role: " + experience.Role);
            console.log("  Company: " + experience.Company);
            console.log("  Location: " + experience.Location);
            console.log("  Year: " + experience.Year);
        }

        console.log("\n");
    }
}

// Run the function to display the resume
displayResume(resume);