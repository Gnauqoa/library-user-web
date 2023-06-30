import { useSearchParams } from "react-router-dom";
import { getSearchObject } from "services/getSearchObject";

const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchObject = getSearchObject(searchParams);
  const handleSet = (object) => {
    setSearchParams(new URLSearchParams(object));
  };
  return [searchObject, handleSet];
};

export default useCustomSearchParams;
