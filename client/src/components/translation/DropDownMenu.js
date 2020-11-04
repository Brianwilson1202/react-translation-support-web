import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import CloseIcon from '@material-ui/icons/Close';

import {setTempFieldData} from '../../actions';


const StyledContainer = styled.div`
  width: 97%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  background: #fff;
  margin: 30px auto;
  // justify-content: space-evenly;
  .drop-content-item, .drop-content-edit {
    position: relative;
    display: flex;
    align-items: center;
    width: 240px;
    color: #777;
    border: 2px solid #ddd;
    border-radius: 7px;
    padding: 15px;
    transition: 0.3s;
    margin: 5px;
  }
  .drop-content-edit {
    border: none;
  }
  .drop-content-item:hover,
  .drop-content-item.active {
    border: 2px solid #888;
    background: #ccc2c7;
    cursor: pointer;
    color: #333;
  }
  .drop-content-item span,
  .drop-content-edit span {
    margin-left: 15px;
    font-size: 18px;
    font-family: sans-serif;
  }
  .drop-content-item-remove {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 18px;
  }

`;

const dropContentItems = [
  {
    icon: <ComputerIcon />,
    title: 'Web development'
  },
  {
    icon: <PhoneIphoneIcon />,
    title: 'Mobile development'
  },
  {
    icon: <SettingsOutlinedIcon />,
    title: 'Desktop app'
  },
  {
    icon: <AvTimerOutlinedIcon />,
    title: 'DevOps'
  },
]

const DropDownMenu = ({ setTempFieldData }) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [itemRemove, setItemRemove] = useState(false)

  const handleSelectItem = (item) => {
    setSelectedItem(prev => [...prev, item]);
  }
  const handleRemoveItem = (removeItem) => {
    let newItem = selectedItem;
    newItem = newItem.filter(item => item !== removeItem);
    setSelectedItem(newItem);
  }
  useEffect(() => {
    setTempFieldData(selectedItem);
  }, [selectedItem])
  
  return (
    <StyledContainer>
      {
        dropContentItems.map((item, index) => {
          return (
            <div key={index} 
              className={
                selectedItem.join(' ').includes(item.title) ? 
                'drop-content-item active' : 
                'drop-content-item'}
              onClick={() => {handleSelectItem(item.title)}}
            >
              {item.icon}
              <span>{item.title}</span>
              {
                itemRemove &&
                <CloseIcon className='drop-content-item-remove' onClick={() => {handleRemoveItem(item.title)}}/>
              }
            </div>
          )
        })
      }
      <div className='drop-content-edit'>
        <CreateOutlinedIcon />
        <span>Add Others</span>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, {setTempFieldData})(DropDownMenu)
