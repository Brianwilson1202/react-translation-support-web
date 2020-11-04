import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { setLanguageFieldData } from "../../actions";

const StyledContainer = styled.div`
  background: #fff;
  text-align: left;
  max-height: 400px;
  margin-top: 15px;
  .language-drop-input-bar {
    display: flex;
  }
  .language-drop-input-bar {
    border-bottom: 2px solid #c5aab9;
  }
  .language-drop-input-bar input {
    width: 75%;
    margin: 0;
    padding: 0px 20px;
    color: #555;
  }
  .language-drop-add-btn {
    background: #c5aab9;
    color: #fff;
    padding: 5px 20px;
    font-size: 24px;
    transition: 0.5s;
  }
  .language-drop-add-btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  .language-drop-down-bar {
    width: 85%;
    max-height: 120px;
    overflow-y: auto;
    color: #555;
    margin-top: 1px;
    border: 3px solid #f3acab;
  }
  .language-drop-down-item {
    padding: 5px 20px;
    transition: 0.3s;
  }
  .language-drop-down-item:hover {
    background: #c5aab9;
    color: #fff;
  }
  .language-drop-item {
    position: relative;
    display: inline-block;
    min-width: 100px;
    background: #c5aab9;
    text-align: center;
    color: #fff;
    padding: 5px;
    margin: 5px;
  }
  .language-drop-item-delete-icon {
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 14px;
  }
  .language-drop-item-delete-icon:hover {
    cursor: pointer;
    color: #a00;
  }
  .language-drop-item-bar {
    margin-top: 20px;
  }

  .language-drop-down-bar::-webkit-scrollbar {
    width: 8px;
  }

  .language-drop-down-bar::-webkit-scrollbar-track {
    background: transparent;
  }

  .language-drop-down-bar::-webkit-scrollbar-thumb {
    background-color: #ccc2c7;
    border-radius: 0px;
  }
`;

const languages = ["English", "Korean", "Japanese", "French", "Spanish"];

const LanguageDrop = ({ label, setLanguageFieldData }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRedults, setSearchRedults] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setSelectedLanguage(e.target.value);
  };

  const handleAddLanguage = () => {
    setSelectedLanguages((prev) => [...prev, selectedLanguage]);
    setSelectedLanguage();
  };

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const handleRemoveLanguage = (removeIndex) => {
    let newItem = selectedLanguages;
    newItem = newItem.filter((_, index) => index !== removeIndex);
    setSelectedLanguages(newItem);
  };

  useEffect(() => {
    if (searchTerm) {
      const results = languages.filter((language) =>
        language.toLowerCase().includes(searchTerm)
      );
      setSearchRedults(results);
    } else {
      setSearchRedults([]);
    }
    setLanguageFieldData(selectedLanguages);
  }, [searchTerm, selectedLanguages]);

  return (
    <div className="col s6">
      <label>{label}</label>
      <br />
      <StyledContainer>
        <div className="language-drop-input-bar">
          <input
            type="text"
            placeholder="Language"
            value={selectedLanguage}
            onChange={handleInputChange}
          />
          <div className="language-drop-add-btn" onClick={handleAddLanguage}>
            +
          </div>
        </div>
        {searchRedults.length > 0 && (
          <div className="language-drop-down-bar">
            {searchRedults.map((language, index) => {
              return (
                <div
                  className="language-drop-down-item"
                  key={index}
                  onClick={() => handleSelectLanguage(language)}
                >
                  {language}
                </div>
              );
            })}
          </div>
        )}
        <div className="language-drop-item-bar">
          {selectedLanguages &&
            selectedLanguages.map((language, index) => {
              return (
                language && (
                  <div className="language-drop-item" key={index}>
                    <span>{language}</span>
                    <CloseIcon
                      className="language-drop-item-delete-icon"
                      onClick={() => {
                        handleRemoveLanguage(index);
                      }}
                    />
                  </div>
                )
              );
            })}
        </div>
      </StyledContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setLanguageFieldData })(LanguageDrop);
