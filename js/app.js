const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("search-user");

searchUser.addEventListener("keyup", (e) => {
  //Get text
  const userText = e.target.value;
  if (userText !== "") {
    //Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //Show Alert
        ui.showAlert("USer not Found", "alert alert-danger");
      } else {
        //Show profile

        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
