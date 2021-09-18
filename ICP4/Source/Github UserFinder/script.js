function getGithubInfo(user) {
    console.log(user);
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp =new XMLHttpRequest();
    var url = "https://api.github.com/users/"+user;

    xhttp.open('GET',url);

    xhttp.onload = function () {
        //if the response is successful show the user's details
        if (xhttp.status == 200) {
            console.log(xhttp);
            showUser(JSON.parse(xhttp.responseText));
            //else display error message
        } else if(xhttp.status==404) {
            noSuchUser(user);
        }
    };
    xhttp.send()

}

function showUser(user) {

    //2. setting the contents of the h2 and the two div elements in the div '#profile' with the user content
    console.log(user);
// setting the html to elemnts in page using jQuery
    $("#displaytext").text(user.login);
    $(".avatar").html("<img height='200' width='200' src='"+ user.avatar_url+"'/>");
    var link = "<a target='_blank' href='"+user.html_url+"'> Git Hub URL  </a>";
    $(".information").html("<label><u><strong>User Information</strong></u></label>" +
        "<br/><br/><label style='color: #660939'>Login Name : </label>"+ user.login
        +"<br/><label style='color: #661d22'> Login ID : </label>"+ user.id
        +"<br/><label style='color: #661d22'> Node ID : </label>"+ user.node_id
        +"<br/> <label style='color: #66111c'>GitHub URL : </label>"+link
        +"<br/> <label style='color: #661d36'>No of Repositories of the user: </label>"+ user.public_repos);

    $("#profile").show();

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $("#displaytext").text(" username " +username + "does not exists");
    console.log("no such user");
    // setting the elements in html page to blank
    $(".avatar").text(" username " +username + " does not exists ");

    $(".information").html('');
    $("#profile").show();

}


$(document).ready(function(){



    $(document).on('keypress', '#username', function(e){
        $("#profile").hide();

        //check if the enter(or return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //clear the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getGithubInfo(username);
        }
    })
});
