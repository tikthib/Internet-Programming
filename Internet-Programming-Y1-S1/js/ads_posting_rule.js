jobs = [
    'Accounting',
    'Administration',
    'Architecture, Engineering',
    'Assistant, Secretary',
    'Audit, Taxation',
    'Banking, Insurance',
    'Cashier, Receptionist',
    'Catering, Restaurant',
    'Cleaner, Maid',
    'Consultancy',
    'Customer Service',
    'Design',
    'Education Training',
    'finance',
    'Freight, Shipping',
    'Hotel, Hospitality',
    'Human Resource',
    'Information Technology',
    'Lawyer, Legal Service',
    'Management',
    'Manufacturing',
    'Marketing',
    'Media, Advertising',
    'Medical, Health, Nursing',
    'Merchandising, Purchasing',
    'Operations',
    'Project Management',
    'Quality Control',
    'Resort, Casino',
    'Sales',
    'Security, Driver',
    'Technician',
    'telecommunicat',
    'Translation, Interpretation',
    'travel Agent, Ticket Sales',
    'Others',
]


        var theloop = document.getElementById("theloop");
        let btn_get_Quiz= document.getElementById("btnQuiz");    //Get into the Quiz....
        btn_get_Quiz.addEventListener("click",displayLoop);
        function displayLoop () {
            // var nloop = document.getElementById("nloop").value;
            // for (var i=0; i<jobs; i++)
            //  {
            //     theloop.innerHTML = theloop.innerHTML + "yo" + jobs[i]+ "<br/>";
            //  }

            for (let ele of jobs) {
                theloop.innerHTML = theloop.innerHTML + "yo" + ele+ "<br/>";
            }
        }