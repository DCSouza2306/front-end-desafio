import { citiesApi } from "../../services/citiesApi";
import useAsync from "../useAsync";

export function useDeleteCities() {
 const {
  loading: deleteCitiesLoading,
  error: deleteCitiesError,
  task: deleteCities,
 } = useAsync(citiesApi.deleteCity,false);

 return {
  deleteCitiesLoading,
  deleteCities,
  deleteCitiesError,
 };
}
