import { ListingSelector,ErrorSelector,ItemDetailsSelector } from "../selectors/EarthquakeSelectors";
const DummyData = {"ErrorMessage":"Rejected","Listing":"mag","Data":{"features":"List"}}

it('Testing Error Data Case', () => {
  const result = ErrorSelector(DummyData);
  expect(result).toEqual("Rejected");
});

it('Testing Listing functionality', () => {
  const result = ListingSelector(DummyData);
  expect(result).toEqual("List");
});

it('Testing Item Details functionality', () => {
  const result = ItemDetailsSelector(DummyData);
  expect(result).toEqual("mag");
});