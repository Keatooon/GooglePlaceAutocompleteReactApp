import { ofType } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of, tap } from 'rxjs';
import axios from 'axios';
import {
  autocompleteRequest,
  updateSearchResult,
  searchError,
} from '../redux/actions/searchActions';

const API_KEY = 'YOUR_API_KEY';

const autocompleteEpic = (action$) =>

  action$.pipe(
    // tap(action$ => console.log('action$: ', JSON.stringify(action$.payload))), 
    ofType('AUTOCOMPLETE_REQUEST'),
    mergeMap((action) =>
      from(
        axios.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
            action.payload
          )}&types=establishment&location=37.76999%2C-122.44696&radius=500&key=${API_KEY}`
        )
      ).pipe(
        // tap(response => console.log('wk response 1: ', JSON.stringify(response.data))),
        map((response) => response.data),
        // tap(data => console.log('wk response 2: ', JSON.stringify(data.predictions))),
        map((data) => updateSearchResult(data.predictions)),
        catchError((error) => of(searchError(error.message)))
      )
    )
  );

export default autocompleteEpic;