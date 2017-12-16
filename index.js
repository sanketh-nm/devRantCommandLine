var devRant = require('rantscript');

var stdin = process.openStdin();

var prompt = require('prompt');

var props = 
[
  {
    name: 'Username'
  },
  {
    name : 'Password',
    hidden: true
  },
  {
    name: "Text"

  }
];

prompt.start();


prompt.get(props, function(err,result)
{
  if(err) console.log(err);
  else{
   post(result.Username,result.Password,result.Text,"");
  }
 });





function post(userName,pass,rant,tag)
{
  devRant.httpSettings.SET_COMPRESS(false);
  devRant
    .login(userName, pass)
    .then((response) => {
      console.log(response["auth_token"]);
      devRant.postRant(
        rant,
        tag, "",
        response["auth_token"]
      ).then((resp) => {
        console.log(resp);
      })
    })
    console.log("complete")
}
