// import DisneyCharList from "../../components/DisneyCharList/DisneyCharList";
// import DisneyCharDetails from "../../components/DisneyCharDetails/DisneyCharDetails";
import Search from "../../components/Search/Search";
import { checkToken } from "../../utilities/users-service";

export default function DisenySearchPage() {
  // const handleCheckToken = async () => {
  //   const expDate = await checkToken();
  //   alert(expDate);
  // };
  // export default function DisenyCharPage() {
  return (
    <div>
      <h1>Search For A Disney Character</h1>
      <Search />

      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
    </div>
  );
}
