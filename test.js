function uploadFileToServer() {
  var file = event.srcElement.files[0];
  console.log(file);
  var reader = new FileReader();
  reader.readAsBinaryString(file);
  reader.onload = function() {
    var datauri = "data:" + file.type + ";base64," + btoa(reader.result);
    Email.sendWithAttachment(
      "from@you.com",
      "to@them.com",
      "Subject",
      "Body",
      "smtp.server.com",
      "username",
      "password",
      datauri,
      function done(message) {
        alert("Message sent OK");
      }
    );
  };
  reader.onerror = function() {
    console.log("there are some promS");
  };
}
