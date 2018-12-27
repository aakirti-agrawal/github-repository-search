function getRepo(data) {
    if(document.getElementById("Repo-Name").value.length == 0)
    {
        document.getElementById("myDIV").innerHTML = "Your results will be displayed here.";
        return;
    }

    var search_url = 'https://api.github.com/search/repositories?q='+data;
    $.ajax({
        method: "GET",
        url: search_url,
        data: JSON.stringify(data)

    }).done(function (res) {
        console.log(res);
        DisplayResult(res["items"]);

    }).fail(function(err) {
        console.log(err);
        document.getElementById("myDIV").innerHTML = "One of the following error exists:<br> 1.API calls limit exceeded. Please try again after sometime.<br>OR<br>2.Your internet connection is lost. Please connect to internet and try again."
    });
};

function DisplayResult(resultset) {
    document.getElementById("myDIV").innerHTML = "";
    for(i=0; i < resultset.length; i++) {
        var brTag = document.createElement('BR');
        var mydiv = document.getElementById("myDIV");
        var aTag = document.createElement('a');
        var stars = document.createElement('mySpan');

        aTag.setAttribute('href', resultset[i]["owner"]["html_url"]);
        aTag.innerHTML = resultset[i]["full_name"];

        var st = document.createTextNode("  (" + resultset[i]["stargazers_count"] + " stars)");
        stars.appendChild(st);

        mydiv.appendChild(aTag);
        mydiv.appendChild(stars);
        mydiv.appendChild(brTag);
    }
};
