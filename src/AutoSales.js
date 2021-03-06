import React, { Component } from 'react';
import style from './style.css';


class AutoSales extends Component {
  constructor() {
   super();
   this.changeMake = this.changeMake.bind(this);
   this.changePrice = this.changePrice.bind(this);
   this.imageMouseLeave = this.imageMouseLeave.bind(this);
   this.imageMouseOver = this.imageMouseOver.bind(this);
   this.setImageText = this.setImageText.bind(this);

   this.state = {
     hondaLeftTextMessage: '',
     hondaRightTextMessage: '',
     audiLeftTextMessage: '',
     audiRightTextMessage: '',
     chevyLeftTextMessage: '',
     chevyRightTextMessage: '',
     fordLeftTextMessage: '',
     fordRightTextMessage: '',
   }
   this.carMake = {};
   this.carPrice = {};
  }

componentDidMount() {

  /**
    CarMake contains the list of all car models that are to be presented to the user in its
    respective drop down. This can be populated either from a JSON configuration file, or hooked up
    to a backend database
  **/
  this.carMake = {
   Audi: [['Audi3ID','Audi A3 Sedan'], ['Audi4ID','Audi A4 Sedan'], ['Audi5ID','Audi A5 Sport'], ['Audi7ID','Audi A7 Sport']],
   Chevy: [['BoltID','Bolt'], ['CameroID','Camero'], ['ColoradoID','Colorado'], ['CruzID','Cruze'], ['CorvetID','Corvette']],
   Ford: [['FiestaID','Fiesta'], ['ExplorerID','Explorer'], ['ExpeditionID','Expedition'], ['FocusID','Focus'], ['TaurusID','Taurus']],
   Honda: [['AccordID','Accord'], ['AccordHID','Accord Hybrid'], ['CivicID','Civic'], ['CivicHID','Civic Hybrid'], ['CRZID','CRZ']]
  }

  this.carPrice = {
   Audi3ID: ['Fully Loaded: $56K', 'Loaded: $50K-$55K', 'Basic: $52K'],
   Audi4ID: ['Fully Loaded: $75K', 'Loaded: $60K-$74K', 'Basic: $58K'],
   Audi5ID: ['Fully Loaded: $85K', 'Loaded: $70K-$85K', 'Basic: $68K'],
   Audi7ID: ['Fully Loaded: $96K', 'Loaded: $85K-$90K', 'Basic: $80K'],

   BoltID: ['Fully Loaded: $56K', 'Loaded: $50K-$55K', 'Basic: $52K'],
   CameroID: ['Fully Loaded: $75K', 'Loaded: $60K-$74K', 'Basic: $58K'],
   ColoradoID: ['Fully Loaded: $85K', 'Loaded: $70K-$85K', 'Basic: $68K'],
   CruzID: ['Fully Loaded: $96K', 'Loaded: $85K-$90K', 'Basic: $80K'],
   CorvetID: ['Fully Loaded: $96K', 'Loaded: $85K-$90K', 'Basic: $80K'],

   FiestaID: ['Fully Loaded: $36K', 'Loaded: $20K-$35K', 'Basic: $12K'],
   ExplorerID: ['Fully Loaded: $75K', 'Loaded: $40K-$74K', 'Basic: $18K'],
   ExpeditionID: ['Fully Loaded: $85K', 'Loaded: $40K-$85K', 'Basic: $19K'],
   FocusID: ['Fully Loaded: $26K', 'Loaded: $15K-$20K', 'Basic: $10K'],
   TaurusID: ['Fully Loaded: $36K', 'Loaded: $35K-$42K', 'Basic: $10K'],

   AccordID: ['Fully Loaded: $26K', 'Loaded: $20K-$27K', 'Basic: $20K'],
   AccordHID: ['Fully Loaded: $35K', 'Loaded: $30K-$34K', 'Basic: $25K'],
   CivicID: ['Fully Loaded: $30K', 'Loaded: $25K-$29K', 'Basic: $18K'],
   CivicHID: ['Fully Loaded: $38K', 'Loaded: $30K-$370K', 'Basic: $30K'],
   CRZID: ['Fully Loaded: $40K', 'Loaded: $35K-$39K', 'Basic: $34K']
  }

  this.hoverTextMessages = [
    <div className='image-hover-text'>
      <span>Honda Civic<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Honda CRV<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Audi A3<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Audi A7<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Chevy Corvette<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Chevy Colorado<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Ford Fiesta<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>,
    <div className='image-hover-text'>
      <span>Ford Explorer<hr className='horizontal-rule'/></span><span className='learn-more'>Learn More</span>
    </div>
  ]
}

changeMake(evt) {
  let value = evt.currentTarget.value;
  if (value === undefined || value === null || value.length === 0)
  return;
  let modelOptions = '';
  let models = this.carMake[value];
  for (let i = 0; i < models.length; i++) {
    let mEntry = models[i];
    modelOptions += '<option value='+mEntry[0]+'>' + mEntry[1] + '</option>';
  }
  let elem = document.getElementById('Model')
  elem.innerHTML = modelOptions;
  elem.value = models[0][0];
  this._changePrice(elem.value);
}

changePrice(evt) {
 let value = evt.currentTarget.value;
 if (value === undefined || value === null || value.length === 0)
   return;
  this._changePrice(value);
}

_changePrice(value) {
   var priceOptions = '';
   for (let i = 0; i < this.carPrice[value].length; i++) {
     let pEntry = this.carPrice[value][i];
     priceOptions += '<option>' + pEntry + '</option>';
   }
   document.getElementById('Price').innerHTML = priceOptions;
}

imageMouseOver(evt) {
  let msg = this.hoverTextMessages[evt.currentTarget.id];
  this.setImageText(evt.currentTarget.id, msg)
}

imageMouseLeave(evt) {
  this.setImageText(evt.currentTarget.id, '')
}

setImageText(id, msg) {
  switch(id) {
    case '0': this.setState({hondaLeftTextMessage:msg});
            break;
    case '1': this.setState({hondaRightTextMessage:msg});
            break;
    case '2': this.setState({audiLeftTextMessage:msg});
            break;
    case '3': this.setState({audiRightTextMessage:msg});
            break;
    case '4': this.setState({chevyLeftTextMessage:msg});
            break;
    case '5': this.setState({chevyRightTextMessage:msg});
            break;
    case '6': this.setState({fordLeftTextMessage:msg});
            break;
    case '7': this.setState({fordRightTextMessage:msg});
            break;
  }
}

  render() {
    return (
      <div id='main-container'>
        <div className='header'>
          <div className='header-content'>
          <img className='logo' src='./logo.svg' alt='logo'/>AutoSales.com
          </div>
        </div>
        <div className='nav'>
          <ul className='ul-nav'>
            <li>Cars for Sale</li>
            <li>Sell My Car</li>
            <li>Find a Dealer</li>
            <li>Contact Us</li>
              <img className='search-icon' src='./search-icon.svg' alt='Search'/>
            <li></li>
          </ul>
        </div>
        <div className='get-started'>
          <img className='get-started-img' src='./get-started.png' alt='Getting Started'/>
          <button className='button get-started-button'>Get Started Now</button>
        </div>
        <div className='car-selection'>
          <label>
            <select name='Make' id='Make' onChange={this.changeMake}>
              <option value='' disabled selected>Make</option>
              <option value='Audi'>Audi</option>
              <option value='Chevy'>Chevy</option>
              <option value='Ford'>Ford</option>
              <option value='Honda'>Honda</option>
            </select>
          </label>
          <label>
            <select name='Model' id='Model' onChange={this.changePrice}>
             <option value='' disabled selected>Model</option>
            </select>
          </label>
          <label>
            <select name='Price' id='Price'>
             <option value='' disabled selected>Price</option>
            </select>
          </label>
          <button className='button find-dream-car-button'>Find My Dream Car</button>
        </div>
        <div className='left-honda-content left-content'>
          <p className='car-title'>Honda Cars and SUVs</p>
          <p className='car-description'>Gumbo beet greens corn solo endive gumbo ground. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <button className='button view-all-button'>View All</button>
        </div>
        <div className='img right-honda-car right-car'>
          <div id='0' className='car-img-wrapper' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./honda-left.png' alt='Honda left'/>
            <div className='caption'>
              <span>{this.state.hondaLeftTextMessage}</span>
            </div>
          </div>
          <div id='1' className='img car-img-wrapper' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./honda-right.png' alt='Honda Right'/>
            <div className='caption'>
              <span>{this.state.hondaRightTextMessage}</span>
            </div>
          </div>
        </div>
        <div className='img left-audi-car left-car'>
          <div id='2' className='car-img-wrapper' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./audi-left.png' alt='Audi left'/>
            <div className='caption'>
              <span>{this.state.audiLeftTextMessage}</span>
            </div>
          </div>
          <div id='3' className='car-img-wrapper' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./audi-right.png' alt='Audi Right'/>
            <div className='caption'>
              <span>{this.state.audiRightTextMessage}</span>
            </div>
          </div>
        </div>
        <div className='right-audi-content right-content'>
          <p className='car-title'>Audi Cars and SUVs</p>
          <p className='car-description'>Gumbo beet greens corn solo endive gumbo ground. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <button className='button view-all-button'>View All</button>
        </div>
        <div className='left-chevy-content left-content'>
          <p className='car-title'>Chevy Cars, Trucks, and SUVs</p>
          <p className='car-description'>Gumbo beet greens corn solo endive gumbo ground. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <button className='button view-all-button'>View All</button>
        </div>
        <div className='img right-chevy-car right-car'>
          <div id='4' className='car-img-wrapper chevy-left' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./chevy-left.png' alt='Chevy left'/>
            <div className='caption'>
              <span>{this.state.chevyLeftTextMessage}</span>
            </div>
          </div>
          <div id='5' className='car-img-wrapper chevy-right' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./chevy-right.png' alt='Chevy Right'/>
            <div className='caption'>
              <span>{this.state.chevyRightTextMessage}</span>
            </div>
          </div>
        </div>
        <div className='img left-ford-car left-car'>
          <div id='6' className='car-img-wrapper ford-left' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./ford-left.png' alt='Ford left'/>
            <div className='caption'>
              <span>{this.state.fordLeftTextMessage}</span>
            </div>
          </div>
          <div id='7' className='car-img-wrapper ford-right' onMouseOver={this.imageMouseOver} onMouseLeave={this.imageMouseLeave}>
            <img className='car-img' src='./ford-right.png' alt='Ford Right'/>
            <div className='caption'>
              <span>{this.state.fordRightTextMessage}</span>
            </div>
          </div>
        </div>
        <div className='right-ford-content right-content'>
          <p className='car-title'>Ford Cars, Trucks, and SUVs</p>
          <p className='car-description'>Gumbo beet greens corn solo endive gumbo ground. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.</p>
          <button className='button view-all-button'>View All</button>
        </div>
        <div className='footer'>
          <div className='footer-content'>
            <img className='logo' src='./logo.svg' alt='logo'/>AutoSales.com
          </div>
        </div>
        <div className='privacy'>
          <span>Copyright@2016 AutoSales.com | All rights reserved | Privacy Policy</span>
        </div>
      </div>
    );
  }
}

export default AutoSales;
