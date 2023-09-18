import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={useSelector(getFilter)}
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </>
  );
}
