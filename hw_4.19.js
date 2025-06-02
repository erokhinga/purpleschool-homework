import axios from "axios";
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (Gender = {}));
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
    Role["MODERATOR"] = "moderator";
})(Role || (Role = {}));
await axios.get('https://dummyjson.com/users')
    .then((res) => {
    const users = res.data?.users;
    console.log(users);
    console.log(users[0]?.username);
})
    .catch(error => {
    console.log('Error:', error.message);
});
