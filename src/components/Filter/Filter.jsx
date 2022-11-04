import PropTypes from 'prop-types'
import { FilterInput, FilterWrap } from './Filter.styled';

const Filter = ({filter, onChange}) => {
    return ( 
    <FilterWrap>
      Find contacts by name
    <FilterInput
    type="text"
    name="filter"
    value={filter}
    onChange={onChange}/>
    </FilterWrap>
     );
}
 
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}