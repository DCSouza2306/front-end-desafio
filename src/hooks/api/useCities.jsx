import { searchApi } from "../../services/searchApi";
import useAsync from "../useAsync";

export function useCities(token) {
 const {
  data: citiesData,
  loading: citiesLoading,
  error: citiesError,
  task: search,
 } = useAsync(() => searchApi.search(token));

 return {
  citiesData,
  citiesLoading,
  citiesError,
  search,
 };
}

export function useIncludeCities() {
 const {
  data: includeCitiesData,
  loading: includeCitiesLoading,
  error: includeCitiesError,
  task: includeCity,
 } = useAsync(searchApi.includeCity, false);

 return {
  includeCitiesData,
  includeCitiesLoading,
  includeCitiesError,
  includeCity,
 };
}
