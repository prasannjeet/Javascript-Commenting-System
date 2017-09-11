/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global topics */

function displayDate(form, topics)
{
    var a = true;
    if (form.name.value === 'Name' || form.email.value === 'Email' || form.topic.value === 'Topic' || form.message.value === '') {
        alert('One or more fields were left empty');
        a = false;
    }
    
    //Email validation function below
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var f = 0;
    var address = form.email.value;
    if (reg.test(address) === false && a === true) {
        alert('Email not valid! Please re-enter email address');
        document.getElementById('email').value = "Email";
        a = flse;
    }

    if (a === true) {

        for (var i = 0; i < topics.length; i++) {
            if (topics[i] === form.topic.value) {
                //alert("Found It!");
                topics[i + 1]++;
                f = 1;
            }
        }
        if (f === 0) {
            topics.push(form.topic.value);
            topics.push(1);

        //Function to get the current date in proper format
        }
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;

        var comment = form.name.value;
        var comment2 = form.email.value;
        var comment3 = form.topic.value;
        var comment4 = form.message.value;
        var comment5 = today;
        //alert (form.name.value);
        var singleCommentDiv = document.createElement("div");
        singleCommentDiv.className = "singleComment";
        //document.singleCommentDiv.appendChild
        var nameDiv = document.createElement("div");
        nameDiv.className = "outputName";
        var emailDiv = document.createElement("div");
        emailDiv.className = "outputEmail";
        var topicDiv = document.createElement("div");
        topicDiv.className = "outputTopic";
        var dateDiv = document.createElement("div");
        dateDiv.className = "outputDate";
        var messageDiv = document.createElement("div");
        messageDiv.className = "outputMessage";

        var nameEmailDiv = document.createElement("div");
        nameEmailDiv.className = "nameEmail";
        var topicDateDiv = document.createElement("div");
        topicDateDiv.className = "topicDate";

        nameDiv.textContent = ('Name: ').concat(comment);
        emailDiv.textContent = ('Email: ').concat(comment2);
        topicDiv.textContent = ('Topic: ').concat(comment3);
        dateDiv.textContent = ('Date: ').concat(comment5);
        messageDiv.textContent = ('Comment: ').concat(comment4);

        nameEmailDiv.appendChild(nameDiv);
        nameEmailDiv.appendChild(emailDiv);
        topicDateDiv.appendChild(topicDiv);
        topicDateDiv.appendChild(dateDiv);

        singleCommentDiv.appendChild(nameEmailDiv);
        singleCommentDiv.appendChild(topicDateDiv);
        //singleCommentDiv.appendChild(topicDiv);
        //singleCommentDiv.appendChild(dateDiv);
        singleCommentDiv.appendChild(messageDiv);

        document.getElementById("commentsWrapper").appendChild(singleCommentDiv);
        document.getElementById("tableValues").innerHTML = '';

        for (var i = 0; i < (topics.length - 1); i++) {
            var title01Div = document.createElement("div");
            title01Div.className = "title01";
            var value01Div = document.createElement("div");
            value01Div.className = "value01";
            var chunkDiv = document.createElement("div");
            chunkDiv.id = "chunk";
            title01Div.textContent = topics[i];
            value01Div.textContent = topics[i + 1];
            i++;
            chunkDiv.appendChild(title01Div);
            chunkDiv.appendChild(value01Div);
            document.getElementById("tableValues").appendChild(chunkDiv);

        }

        document.getElementById('name').value = "Name";
        document.getElementById('email').value = "Email";
        document.getElementById('topic').value = "Topic";
        document.getElementById('message').value = "";

    }
    return topics;
}
//document.getElementById("a").onclick = displayDate;