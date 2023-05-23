import DisneyCharList from "../../components/DisneyCharList/DisneyCharList";
import DisneyCharDetails from "../../components/DisneyCharDetails/DisneyCharDetails";
import Search from "../../components/Search/Search";
import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };

  return (
    <div>
      <h1>Order History Page</h1>
      <Search />
      {/* <DisneyCharList /> */}
      {/* <DisneyCharDetails /> */}
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}
