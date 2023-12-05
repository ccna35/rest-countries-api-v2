import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CountryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoading, data, isSuccess } = useFetch(
    `https://restcountries.com/v3.1/name/${id}`
  );
  if (isSuccess) {
    console.log(data);
  }
  return (
    <main>
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className="p-2 border rounded-md text-xl font-semibold"
        >
          Back
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border">
            <img
              src={data.flags.svg}
              alt={data.name.common}
              className="w-full h-full object-cover"
            />
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default CountryPage;
