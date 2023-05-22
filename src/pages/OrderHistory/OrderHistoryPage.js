import DisneyCharList from "../../components/DisneyCharList/DisneyCharList";
import DisneyCharDetails from "../../components/DisneyCharDetails/DisneyCharDetails";
import Search from "../../components/Search/Search";
import { checkToken } from "../../utilities/users-service";
import Search2 from "../../components/Search/Search2";

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };

  return (
    <div>
      <h1>Order History Page</h1>
      <Search />
      <Search2 />
      {/* <DisneyCharList /> */}
      {/* <DisneyCharDetails /> */}
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}
