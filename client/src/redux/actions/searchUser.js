import { setFindUsers, setSearch } from "../reducer/userSlice";

export const searchUser = (query) => (dispatch) => {
  dispatch(setSearch(query));
  fetch("/searchuser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((result) => {
      dispatch(setFindUsers(result));
    })
    .catch((err) => console.log(err));
};
