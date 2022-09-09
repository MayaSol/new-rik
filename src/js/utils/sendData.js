  function sendData(data) {
    //next you would initiate a XMLHTTPRequest as following (could be more advanced):
    var url = "http://maiiasol.ru/newrikta/get_data.php";//your url to the server side file that will receive the data.
    var http = new XMLHttpRequest();
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "text/html; charset=UTF-8");
    http.setRequestHeader("Content-length", data.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);//check if the data was received successfully.
        }
    }
    http.send(data);
  }


module.exports = sendData;
