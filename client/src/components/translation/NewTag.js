import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import {setTagsFieldData} from '../../actions';

const StyledContainer = styled.div`
  width: 100%;
  text-align: left;
  padding: 15px;
  p {
    margin: 0;
    color: #555;
    margin-top: 5px;
  }
  label {
    margin-bottom: 10px;
  }
  .tag-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 2px solid #ccc2c7;
    text-align: left;
  }
  .tag-item {
    display: inline-block;
    // max-width: 200px;
    align-items: center;
    background: #e2e2e2;
    padding: 3px 12px;
    margin: 5px;
    color: #555;
  }
  .tag-item span {
    vertical-align: top;
  }
  .tag-delete-icon {
    margin-left: 10px;
    transition: 0.5s;
    padding-top: 5px;
    font-size: 18px;
  }
  .tag-delete-icon:hover {
    cursor: pointer;
    color: #c31208;
  }
  .tag-content input {
    border: none;
    outline: none;
    width: 150px;
    height: 35px;
    margin: 0;
    margin-left: 10px;
  }
  .tag-content input:focus {
    border-bottom: none!important;
  }
`;

const NewTag = ({label, setTagsFieldData}) => {

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagInput = e => {
    if (e.key === ' ' && e.target.value.length ) {
      const selectedTag = e.target.value;
      let newItem = selectedTags;
      setSelectedTags(prev => [...prev, selectedTag]);
      e.target.value = null;
      e.preventDefault();
    }
  }

  const removeTag = (indexRemove) => {
    let newItem = selectedTags;
    newItem = newItem.filter((_,index) => index !== indexRemove )
    setSelectedTags(newItem);
  }

  React.useEffect(() => {
    setTagsFieldData( selectedTags );
  }, [selectedTags])

  return (
    <StyledContainer>
      <label>{label}</label>
      <div className='tag-content'>
        {
          selectedTags.map((item, index) => {
            return (
              <div key={index} className='tag-item'>
                <span>{item}</span>
                <CloseIcon className='tag-delete-icon' onClick={() => removeTag(index)} />
              </div>
            )
          })
        }
        <input type='text' placeholder='Add a tag' onKeyPress={handleTagInput} />
      </div>
      <p>Please add at least 2 categories</p>
    </StyledContainer>
  )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {setTagsFieldData})(NewTag)
